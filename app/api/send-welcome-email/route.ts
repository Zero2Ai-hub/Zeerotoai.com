import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { readFileSync } from "fs";
import { join } from "path";
import { 
  getExitIntentWelcomeEmail, 
  getSignupWelcomeEmail 
} from "@/lib/email-templates";

const emailSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  type: z.enum(["exit_intent", "signup"]),
});

export async function POST(request: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("❌ RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const validatedData = emailSchema.parse(body);
    
    const resend = new Resend(resendApiKey);

    let emailTemplate: { html: string; text: string };
    let subject: string;

    // Generate the appropriate email based on type
    if (validatedData.type === "exit_intent") {
      emailTemplate = getExitIntentWelcomeEmail({
        name: validatedData.name || "",
        email: validatedData.email,
      });
      subject = "🎁 Your AI Automation Starter Pack is Ready!";
    } else if (validatedData.type === "signup") {
      emailTemplate = getSignupWelcomeEmail({
        name: validatedData.name || "",
        email: validatedData.email,
      });
      subject = "🎉 Welcome to Zero2AI! Let's Get Started";
    } else {
      return NextResponse.json(
        { error: "Invalid email type" },
        { status: 400 }
      );
    }

    // Prepare attachments for exit intent email
    const attachments = [];
    
    if (validatedData.type === "exit_intent") {
      try {
        // Read the playbook PDF from tracked email-attachments folder
        const playbookPath = join(process.cwd(), "email-attachments", "Zero2AI-Playbook.pdf");
        const playbookBuffer = readFileSync(playbookPath);
        
        // Read the ROI calculator from tracked email-attachments folder
        const roiPath = join(process.cwd(), "email-attachments", "Zero2AI-ROI-Calculator.xlsx");
        const roiBuffer = readFileSync(roiPath);
        
        attachments.push(
          {
            filename: "Zero2AI_Automation_Playbook.pdf",
            content: playbookBuffer,
          },
          {
            filename: "Zero2AI_ROI_Calculator.xlsx",
            content: roiBuffer,
          }
        );
        
        console.log("✅ Attachments prepared:", attachments.length, "files");
      } catch (attachError) {
        console.error("⚠️ Failed to load attachments:", attachError);
        // Continue without attachments rather than failing the email
      }
    }

    // Send the welcome email
    await resend.emails.send({
      from: "Zero2AI <welcome@updates.zeerotoai.com>",
      to: validatedData.email,
      subject: subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
      attachments: attachments.length > 0 ? attachments : undefined,
      tags: [
        { name: "type", value: "welcome" },
        { name: "source", value: validatedData.type },
      ],
    });

    console.log(`✅ ${validatedData.type} welcome email sent to ${validatedData.email}`);

    return NextResponse.json(
      { 
        success: true, 
        message: "Welcome email sent successfully" 
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("❌ Send welcome email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

