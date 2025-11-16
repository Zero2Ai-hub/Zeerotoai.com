import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { contactFormLimiter, getClientIp } from "@/lib/rate-limit";

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

    // Try to send to Airtable
    let airtableSuccess = false;
    
    if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
      try {
        const airtableResponse = await fetch(
          `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Workflow%20Requests`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fields: {
                Name: validatedData.name,
                Email: validatedData.email,
                "Service Type": validatedData.serviceType,
                "Business/Industry": validatedData.business,
                "Project Details": validatedData.projectDetails,
                Timeline: validatedData.timeline,
                "Budget Range": validatedData.budget || "Not specified",
                Source: "Dashboard",
                Status: "Pending",
                "Created At": new Date().toISOString(),
              },
            }),
          }
        );

        if (airtableResponse.ok) {
          airtableSuccess = true;
          console.log("✅ Workflow request saved to Airtable");
        } else {
          const errorText = await airtableResponse.text();
          console.error("❌ Airtable error:", errorText);
        }
      } catch (airtableError) {
        console.error("❌ Airtable request failed:", airtableError);
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
          message: "Workflow request received! We'll get back to you within 24 hours.",
        },
        { 
          status: 200,
          headers: commonHeaders
        }
      );
    } else {
      // Even if Airtable failed, we can still log it
      console.log("📋 Workflow Request (Airtable unavailable):", validatedData);
      
      return NextResponse.json(
        {
          success: true,
          message: "Workflow request submitted successfully",
          note: "Data logged. Configure Airtable for persistent storage.",
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
    console.error("Unhandled API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

