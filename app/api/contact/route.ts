import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { contactFormLimiter, getClientIp } from "@/lib/rate-limit";
import { createClient } from "@/lib/supabase/server";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const clientIp = getClientIp(request);
    const rateLimitResult = contactFormLimiter.check(clientIp);

    if (!rateLimitResult.allowed) {
      const resetDate = new Date(rateLimitResult.resetTime);
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          resetTime: resetDate.toISOString(),
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': resetDate.toISOString(),
            'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
          }
        }
      );
    }

    const body = await request.json();
    
    // Validate the data
    const validatedData = contactSchema.parse(body);

    // Save to Supabase (primary storage)
    let supabaseSuccess = false;
    let submissionId: string | null = null;
    
    try {
      const supabase = await createClient();
      
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert({
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || null,
          message: validatedData.message,
          status: 'new',
          ip_address: clientIp,
          user_agent: request.headers.get('user-agent') || null,
        })
        .select('id')
        .single();

      if (error) {
        console.error("❌ Supabase insert error:", error);
        throw error;
      }

      supabaseSuccess = true;
      submissionId = data.id;
      console.log("✅ Contact saved to Supabase successfully:", submissionId);
      
    } catch (supabaseError) {
      console.error("❌ Supabase request failed:", supabaseError);
      
      // Return error if database save fails (this is critical)
      return NextResponse.json(
        { 
          error: "Failed to save your message. Please try again.",
        },
        { status: 500 }
      );
    }

    // Send emails via Resend (secondary - notification + welcome)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey && supabaseSuccess) {
      // Use Resend to send emails
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);
        const { getContactFormWelcomeEmail } = await import("@/lib/email-templates");

        // 1. Send notification to your team
        await resend.emails.send({
          from: "notifications@updates.zeerotoai.com", // Your verified Resend domain
          to: process.env.NOTIFICATION_EMAIL || "hello@zeerotoai.com", // Your team email
          replyTo: validatedData.email,
          subject: `🔔 New Contact Form Submission from ${validatedData.name}`,
          text: `
🔔 NEW CONTACT FORM SUBMISSION

📛 Name: ${validatedData.name}
📧 Email: ${validatedData.email}
${validatedData.company ? `🏢 Company: ${validatedData.company}\n` : ''}💬 Message:
${validatedData.message}

🆔 Submission ID: ${submissionId}

---
Zero2AI Contact Management System
Reply to this email to respond directly to the customer
          `,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #00D9FF 0%, #0099CC 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #1E2540; }
                .value { color: #4b5563; margin-top: 5px; }
                .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
                .button { display: inline-block; padding: 12px 24px; background: #00D9FF; color: white; text-decoration: none; border-radius: 6px; margin-top: 15px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 style="margin: 0;">🔔 New Contact Form Submission</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">📛 Name:</div>
                    <div class="value">${validatedData.name}</div>
                  </div>
                  <div class="field">
                    <div class="label">📧 Email:</div>
                    <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
                  </div>
                  ${validatedData.company ? `
                  <div class="field">
                    <div class="label">🏢 Company:</div>
                    <div class="value">${validatedData.company}</div>
                  </div>
                  ` : ""}
                  <div class="field">
                    <div class="label">💬 Message:</div>
                    <div class="value">${validatedData.message.replace(/\n/g, "<br>")}</div>
                  </div>
                  <div class="field">
                    <div class="label">🆔 Submission ID:</div>
                    <div class="value">${submissionId}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>Zero2AI Contact Management System</p>
                  <p>Reply to this email to respond directly to the customer</p>
                </div>
              </div>
            </body>
            </html>
          `,
        });

        console.log("✅ Email notification sent to team via Resend");

        // 2. Send welcome email to the user
        const welcomeEmail = getContactFormWelcomeEmail({
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company,
          message: validatedData.message,
        });

        await resend.emails.send({
          from: "Zero2AI <welcome@updates.zeerotoai.com>",
          to: validatedData.email,
          subject: "⚡ Thanks for Reaching Out! We'll Respond Within 24hrs",
          html: welcomeEmail.html,
          text: welcomeEmail.text,
          tags: [
            { name: "type", value: "welcome" },
            { name: "source", value: "contact_form" },
          ],
        });

        console.log("✅ Welcome email sent to user via Resend");
      } catch (emailError) {
        console.error("⚠️ Resend email error:", emailError);
        // Don't fail the request if email fails - data is already saved
      }
    }

    // Return success response with rate limit headers
    const resetDate = new Date(rateLimitResult.resetTime);
    const commonHeaders = {
      'X-RateLimit-Limit': '5',
      'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
      'X-RateLimit-Reset': resetDate.toISOString(),
    };

    // Success - data was saved to Supabase
    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you! Your message has been received. We'll get back to you soon.",
        submissionId: submissionId,
      },
      { 
        status: 200,
        headers: commonHeaders
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

