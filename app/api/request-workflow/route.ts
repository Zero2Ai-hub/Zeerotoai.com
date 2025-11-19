import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { contactFormLimiter, getClientIp } from "@/lib/rate-limit";
import { createClient } from "@/lib/supabase/server";

const workflowRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  serviceType: z.string().min(1),
  business: z.string().min(2),
  projectDetails: z.string().min(10),
  timeline: z.string().min(1),
  budget: z.string().optional(),
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
    const validatedData = workflowRequestSchema.parse(body);

    // Save to Supabase (primary storage)
    let supabaseSuccess = false;
    let requestId: string | null = null;
    
    try {
      const supabase = await createClient();
      
      const { data, error } = await supabase
        .from('workflow_requests')
        .insert({
          name: validatedData.name,
          email: validatedData.email,
          service_type: validatedData.serviceType,
          business: validatedData.business,
          project_details: validatedData.projectDetails,
          timeline: validatedData.timeline,
          budget_range: validatedData.budget || "Not specified",
          source: "website",
          status: 'pending',
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
      requestId = data.id;
      console.log("✅ Workflow request saved to Supabase:", requestId);
      
    } catch (supabaseError) {
      console.error("❌ Supabase request failed:", supabaseError);
      
      // Return error if database save fails (this is critical)
      return NextResponse.json(
        { 
          error: "Failed to save your request. Please try again.",
        },
        { status: 500 }
      );
    }

    // Send email notification via Resend
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey && supabaseSuccess) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);

        // Send notification to your team
        await resend.emails.send({
          from: "notifications@updates.zeerotoai.com",
          to: process.env.NOTIFICATION_EMAIL || "hello@zeerotoai.com",
          replyTo: validatedData.email,
          subject: `🚀 New Workflow Request from ${validatedData.name}`,
          text: `
🚀 NEW WORKFLOW REQUEST
Potential new project opportunity!

📛 Name: ${validatedData.name}
📧 Email: ${validatedData.email}
🎯 Service Type: ${validatedData.serviceType}
🏢 Business/Industry: ${validatedData.business}

📝 Project Details:
${validatedData.projectDetails}

⏱️ Timeline: ${validatedData.timeline}
💰 Budget Range: ${validatedData.budget || "Not specified"}

🆔 Request ID: ${requestId}

---
Zero2AI Workflow Management System
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
                .badge { display: inline-block; padding: 4px 12px; background: #00D9FF; color: white; border-radius: 4px; font-size: 12px; font-weight: bold; }
                .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 style="margin: 0;">🚀 New Workflow Request</h2>
                  <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Potential new project opportunity!</p>
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
                  <div class="field">
                    <div class="label">🎯 Service Type:</div>
                    <div class="value"><span class="badge">${validatedData.serviceType}</span></div>
                  </div>
                  <div class="field">
                    <div class="label">🏢 Business/Industry:</div>
                    <div class="value">${validatedData.business}</div>
                  </div>
                  <div class="field">
                    <div class="label">📝 Project Details:</div>
                    <div class="value">${validatedData.projectDetails.replace(/\n/g, "<br>")}</div>
                  </div>
                  <div class="field">
                    <div class="label">⏱️ Timeline:</div>
                    <div class="value">${validatedData.timeline}</div>
                  </div>
                  <div class="field">
                    <div class="label">💰 Budget Range:</div>
                    <div class="value">${validatedData.budget || "Not specified"}</div>
                  </div>
                  <div class="field">
                    <div class="label">🆔 Request ID:</div>
                    <div class="value">${requestId}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>Zero2AI Workflow Management System</p>
                  <p>Reply to this email to respond directly to the customer</p>
                </div>
              </div>
            </body>
            </html>
          `,
        });

        console.log("✅ Email notification sent via Resend");
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
        message: "Workflow request received! We'll get back to you within 24 hours.",
        requestId: requestId,
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
    console.error("Unhandled API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

