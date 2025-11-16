import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { contactFormLimiter, getClientIp } from "@/lib/rate-limit";

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

    // Airtable configuration
    const airtableApiKey = process.env.AIRTABLE_API_KEY;
    const airtableBaseId = process.env.AIRTABLE_BASE_ID;
    const airtableTableName = process.env.AIRTABLE_TABLE_NAME || "Contacts";

    // Send to Airtable first (primary storage)
    let airtableSuccess = false;
    if (airtableApiKey && airtableBaseId) {
      try {
        const airtableResponse = await fetch(
          `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(airtableTableName)}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${airtableApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fields: {
                Name: validatedData.name,
                Email: validatedData.email,
                Company: validatedData.company || "",
                Message: validatedData.message,
                "Submitted At": new Date().toISOString(),
                Status: "New",
              },
            }),
          }
        );

        if (airtableResponse.ok) {
          airtableSuccess = true;
          console.log("✅ Contact saved to Airtable successfully");
        } else {
          const errorData = await airtableResponse.json();
          console.error("❌ Airtable API error:", errorData);
        }
      } catch (airtableError) {
        console.error("❌ Airtable request failed:", airtableError);
      }
    } else {
      console.log("⚠️ Airtable not configured (missing API key or Base ID)");
    }

    // Check if Resend API key is available (secondary - email notification)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      // Use Resend to send email
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);

        await resend.emails.send({
          from: "hello@zero2ai.com",
          to: "hello@zero2ai.com",
          replyTo: validatedData.email,
          subject: `New Contact Form Submission from ${validatedData.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
          `,
        });

        console.log("✅ Email notification sent successfully");
      } catch (emailError) {
        console.error("⚠️ Email sending error:", emailError);
      }
    }

    // Return success response with rate limit headers
    const resetDate = new Date(rateLimitResult.resetTime);
    const commonHeaders = {
      'X-RateLimit-Limit': '5',
      'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
      'X-RateLimit-Reset': resetDate.toISOString(),
    };

    if (airtableSuccess) {
      return NextResponse.json(
        { 
          success: true, 
          message: "Thank you! Your message has been received and saved.",
        },
        { 
          status: 200,
          headers: commonHeaders
        }
      );
    } else {
      // Even if Airtable failed, we can still log it
      console.log("📋 Contact Form Submission (Airtable unavailable):", validatedData);
      
      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully",
          note: "Data logged locally. Configure Airtable for persistent storage.",
        },
        { 
          status: 200,
          headers: commonHeaders
        }
      );
    }
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

