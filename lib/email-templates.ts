/**
 * Professional HTML Email Templates for Zero2AI
 * Mix of professional and casual tone with branding
 */

interface EmailTemplateData {
  name: string;
  email?: string;
  company?: string;
}

const BRAND_COLOR = "#00D9FF";
const BRAND_NAME = "Zero2AI";
const WEBSITE = "zeerotoai.com";
const CALENDLY_LINK = "https://calendly.com/zeero-to-ai/website";
const DASHBOARD_LINK = "https://zeerotoai.com/dashboard";

/**
 * Base Email Template with Zero2AI branding
 */
function getBaseTemplate(content: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${BRAND_NAME}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #f9fafb;
      color: #1e293b;
    }
    .email-wrapper {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, ${BRAND_COLOR} 0%, #0099CC 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .logo {
      width: 60px;
      height: 60px;
      margin: 0 auto 15px;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .brand-name {
      color: #ffffff;
      font-size: 32px;
      font-weight: 900;
      margin: 0;
      letter-spacing: -0.5px;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .tagline {
      color: rgba(255, 255, 255, 0.95);
      font-size: 14px;
      margin: 8px 0 0 0;
      font-weight: 500;
    }
    .content {
      padding: 40px 30px;
      line-height: 1.6;
    }
    .content p {
      margin: 0 0 16px 0;
      color: #475569;
      font-size: 16px;
    }
    .content h2 {
      color: #1e293b;
      font-size: 24px;
      font-weight: 700;
      margin: 0 0 20px 0;
    }
    .button {
      display: inline-block;
      padding: 14px 32px;
      background: linear-gradient(135deg, ${BRAND_COLOR} 0%, #0099CC 100%);
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
      margin: 20px 0;
      box-shadow: 0 4px 12px rgba(0, 217, 255, 0.3);
      transition: all 0.3s ease;
    }
    .button:hover {
      box-shadow: 0 6px 16px rgba(0, 217, 255, 0.4);
      transform: translateY(-1px);
    }
    .benefits {
      background: #f8fafc;
      border-left: 4px solid ${BRAND_COLOR};
      padding: 20px;
      margin: 24px 0;
      border-radius: 8px;
    }
    .benefits ul {
      margin: 0;
      padding: 0 0 0 20px;
    }
    .benefits li {
      margin: 12px 0;
      color: #475569;
      font-size: 15px;
    }
    .icon-item {
      display: flex;
      align-items: flex-start;
      margin: 16px 0;
    }
    .icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, ${BRAND_COLOR} 0%, #0099CC 100%);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      flex-shrink: 0;
    }
    .icon-text {
      flex: 1;
      padding-top: 4px;
    }
    .footer {
      background: #1e293b;
      color: #cbd5e1;
      padding: 30px;
      text-align: center;
      font-size: 14px;
    }
    .footer a {
      color: ${BRAND_COLOR};
      text-decoration: none;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-links a {
      display: inline-block;
      margin: 0 8px;
      color: #cbd5e1;
      text-decoration: none;
      font-size: 13px;
    }
    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, ${BRAND_COLOR}, transparent);
      margin: 30px 0;
    }
    @media only screen and (max-width: 600px) {
      .header {
        padding: 30px 20px;
      }
      .content {
        padding: 30px 20px;
      }
      .button {
        display: block;
        text-align: center;
      }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="header">
      <h1 class="brand-name">${BRAND_NAME}</h1>
      <p class="tagline">AI Automation That Actually Works</p>
    </div>
    ${content}
    <div class="footer">
      <p><strong>${BRAND_NAME}</strong> - Transforming Businesses with AI Automation</p>
      <div class="social-links">
        <a href="https://${WEBSITE}">Website</a> •
        <a href="https://${WEBSITE}/about">About</a> •
        <a href="https://${WEBSITE}/services">Services</a> •
        <a href="https://${WEBSITE}/contact">Contact</a>
      </div>
      <p style="font-size: 12px; color: #94a3b8; margin-top: 20px;">
        You're receiving this email because you signed up at ${WEBSITE}<br>
        <a href="https://${WEBSITE}" style="color: #94a3b8;">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Exit Intent Welcome Email
 * Goal: Deliver promised resources and warm up the lead
 */
export function getExitIntentWelcomeEmail(data: EmailTemplateData): { html: string; text: string } {
  const { name } = data;
  const greeting = name ? name.split(' ')[0] : 'there';

  const html = getBaseTemplate(`
    <div class="content">
      <h2>Hey ${greeting}! 👋 Here's Your AI Automation Starter Pack</h2>
      
      <p>Thanks for grabbing your free resources! We're excited to help you save time and scale smarter.</p>
      
      <div style="background: #f0f9ff; border: 2px solid ${BRAND_COLOR}; border-radius: 8px; padding: 20px; margin: 25px 0;">
        <p style="margin: 0 0 10px 0; font-weight: 700; color: #1e293b; font-size: 16px;">📎 Your Files Are Attached:</p>
        <p style="margin: 0; color: #475569; font-size: 14px;">
          • <strong>AI Automation Playbook.pdf</strong> - Automation ideas + real-world testimonials<br>
          • <strong>ROI Calculator.xlsx</strong> - Calculate your exact savings
        </p>
      </div>
      
      <p><strong>Here's what's inside:</strong></p>
      
      <div class="icon-item">
        <div class="icon">📊</div>
        <div class="icon-text">
          <strong>ROI Calculator Spreadsheet</strong><br>
          <span style="color: #64748b;">Calculate your exact savings potential in minutes</span>
        </div>
      </div>
      
      <div class="icon-item">
        <div class="icon">📖</div>
        <div class="icon-text">
          <strong>AI Automation Playbook</strong><br>
          <span style="color: #64748b;">Automation ideas + real-world testimonials</span>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <p><strong>🎯 Quick Win for You:</strong></p>
      <p>Most of our clients start by automating repetitive tasks like email responses, data entry, or lead qualification. These save 10-15 hours per week with minimal setup.</p>
      
      <div style="text-align: center;">
        <a href="${CALENDLY_LINK}" class="button">📅 Book Your Free Strategy Call</a>
      </div>
      
      <div class="benefits">
        <p style="margin: 0 0 12px 0; font-weight: 600; color: #1e293b;">What happens on the call?</p>
        <ul style="margin: 0; padding-left: 20px;">
          <li>We identify your biggest time-wasters</li>
          <li>Show you exactly what can be automated</li>
          <li>Give you a custom automation roadmap (free)</li>
        </ul>
      </div>
      
      <p style="font-size: 14px; color: #64748b; margin-top: 30px;">
        <strong>Questions?</strong> Please don't reply to this email (this inbox is not monitored).<br>
        📧 Email us: <a href="mailto:support@zeerotoai.com" style="color: ${BRAND_COLOR};">support@zeerotoai.com</a><br>
        💬 Or use our <a href="https://${WEBSITE}/contact" style="color: ${BRAND_COLOR};">contact form</a>
      </p>
      
      <p style="margin-top: 30px;">
        Cheers,<br>
        <strong style="color: ${BRAND_COLOR};">The ${BRAND_NAME} Team</strong>
      </p>
      
      <p style="font-size: 14px; color: #64748b; margin-top: 20px;">
        <strong>P.S.</strong> We just helped a consulting firm save 20 hours/week by automating their client onboarding. Your turn? 👆
      </p>
    </div>
  `);

  const text = `
Hey ${greeting}! 👋

Thanks for grabbing your AI Automation Starter Pack!

📎 YOUR FILES ARE ATTACHED:
• AI Automation Playbook.pdf - Automation ideas + real-world testimonials
• ROI Calculator.xlsx - Calculate your exact savings

HERE'S WHAT'S INSIDE:
📊 ROI Calculator Spreadsheet - Calculate your exact savings
📖 AI Automation Playbook - Automation ideas + real-world testimonials

Access everything here: ${DASHBOARD_LINK}

🎯 QUICK WIN:
Most clients start by automating email responses, data entry, or lead qualification. 
These save 10-15 hours/week with minimal setup.

📅 READY TO GET STARTED?
Book a free 30-min strategy call: ${CALENDLY_LINK}

What happens on the call?
• We identify your biggest time-wasters
• Show you exactly what can be automated  
• Give you a custom automation roadmap (free)

QUESTIONS?
Please don't reply to this email (unmonitored inbox).

📧 Email us: support@zeerotoai.com
💬 Contact form: ${WEBSITE}/contact

Cheers,
The ${BRAND_NAME} Team

P.S. We just helped a consulting firm save 20 hours/week. Your turn?
  `.trim();

  return { html, text };
}

/**
 * Signup Welcome Email
 * Goal: Onboard new users and show them around
 */
export function getSignupWelcomeEmail(data: EmailTemplateData): { html: string; text: string } {
  const { name } = data;
  const greeting = name ? name.split(' ')[0] : 'there';

  const html = getBaseTemplate(`
    <div class="content">
      <h2>Welcome to ${BRAND_NAME}! 🎉 Let's Get You Started</h2>
      
      <p>Hey ${greeting}!</p>
      
      <p>Your account is ready and we're pumped to have you here. Let's make sure you get the most out of ${BRAND_NAME}.</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="${DASHBOARD_LINK}" class="button">🚀 Go to Your Dashboard</a>
      </div>
      
      <div class="divider"></div>
      
      <p><strong>🎯 Here's what to do first:</strong></p>
      
      <div class="icon-item">
        <div class="icon">1️⃣</div>
        <div class="icon-text">
          <strong>Browse Free Workflow Templates</strong><br>
          <span style="color: #64748b;">Pick from 10+ pre-built automations you can use right away</span>
        </div>
      </div>
      
      <div class="icon-item">
        <div class="icon">2️⃣</div>
        <div class="icon-text">
          <strong>Request Your First Custom Workflow</strong><br>
          <span style="color: #64748b;">Tell us what you need, we'll build it for you</span>
        </div>
      </div>
      
      <div class="icon-item">
        <div class="icon">3️⃣</div>
        <div class="icon-text">
          <strong>Book a Free Strategy Call</strong><br>
          <span style="color: #64748b;">30 minutes with our team to map your automation roadmap</span>
        </div>
      </div>
      
      <div class="benefits">
        <p style="margin: 0 0 12px 0; font-weight: 600; color: #1e293b;">💡 Pro Tip:</p>
        <p style="margin: 0; color: #475569;">80% of our clients start with email or CRM automation. These save the most time with the least complexity. Check your dashboard for ready-made templates!</p>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="${CALENDLY_LINK}" class="button">📅 Book Your Free Strategy Call</a>
      </div>
      
      <div class="divider"></div>
      
      <p><strong>Need help getting started?</strong></p>
      <p>Our team is here for you:</p>
      <ul>
        <li>📧 <strong>Email us:</strong> <a href="mailto:support@zeerotoai.com" style="color: ${BRAND_COLOR};">support@zeerotoai.com</a> - Response within 4 hours</li>
        <li>📅 <strong><a href="${CALENDLY_LINK}" style="color: ${BRAND_COLOR};">Book a call</a></strong> - 30-min strategy session (free)</li>
        <li>💬 <strong>Live chat</strong> - Available on the website during business hours</li>
      </ul>
      
      <p style="margin-top: 30px;">Let's automate something great together!</p>
      
      <p style="margin-top: 20px;">
        <strong style="color: ${BRAND_COLOR};">The ${BRAND_NAME} Team</strong>
      </p>
      
      <p style="font-size: 14px; color: #64748b; margin-top: 20px;">
        <strong>P.S.</strong> 90% of our clients start with a free consultation. Ready to discuss your automation needs? Book your call above! 📅
      </p>
    </div>
  `);

  const text = `
Welcome to ${BRAND_NAME}! 🎉

Hey ${greeting}!

Your account is ready and we're pumped to have you here.

🚀 GO TO YOUR DASHBOARD:
${DASHBOARD_LINK}

🎯 HERE'S WHAT TO DO FIRST:

1️⃣ Browse Free Workflow Templates
   Pick from 10+ pre-built automations

2️⃣ Request Your First Custom Workflow  
   Tell us what you need, we'll build it

3️⃣ Book a Free Strategy Call
   30 minutes to map your automation roadmap

💡 PRO TIP:
80% of our clients start with email or CRM automation. 
These save the most time with least complexity.

📅 BOOK YOUR FREE CALL:
${CALENDLY_LINK}

NEED HELP?
📧 Email us: support@zeerotoai.com (4hr response time)
📅 Book a call: ${CALENDLY_LINK}
💬 Live chat on the website

Let's automate something great together!

The ${BRAND_NAME} Team

P.S. 90% of our clients start with a free consultation. Ready to discuss your automation needs? Book your call above!
  `.trim();

  return { html, text };
}

/**
 * Contact Form Welcome Email
 * Goal: Confirm receipt, set expectations, provide value while they wait
 */
export function getContactFormWelcomeEmail(data: EmailTemplateData & { message?: string }): { html: string; text: string } {
  const { name, message, company } = data;
  const greeting = name ? name.split(' ')[0] : 'there';

  const html = getBaseTemplate(`
    <div class="content">
      <h2>Thanks for Reaching Out! ⚡ We'll Respond Within 24hrs</h2>
      
      <p>Hey ${greeting}!</p>
      
      <p>Got your message and it's already with our team. Here's what happens next:</p>
      
      <div class="icon-item">
        <div class="icon">✅</div>
        <div class="icon-text">
          <strong>Message Received</strong><br>
          <span style="color: #64748b;">Your inquiry is being reviewed by our team</span>
        </div>
      </div>
      
      <div class="icon-item">
        <div class="icon">⏰</div>
        <div class="icon-text">
          <strong>Response Time: Under 24 Hours</strong><br>
          <span style="color: #64748b;">Usually much faster - most replies go out within 4 hours</span>
        </div>
      </div>
      
      <div class="icon-item">
        <div class="icon">📧</div>
        <div class="icon-text">
          <strong>Check Your Inbox</strong><br>
          <span style="color: #64748b;">We'll reply directly to this email address</span>
        </div>
      </div>
      
      ${message ? `
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 25px 0;">
        <p style="margin: 0 0 10px 0; font-weight: 600; color: #1e293b;">📝 Your Message:</p>
        <p style="margin: 0; color: #475569; font-size: 14px; font-style: italic;">"${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"</p>
        ${company ? `<p style="margin: 10px 0 0 0; color: #64748b; font-size: 13px;">Company: ${company}</p>` : ''}
      </div>
      ` : ''}
      
      <div class="divider"></div>
      
      <p><strong>Need a faster answer?</strong></p>
      
      <div style="text-align: center; margin: 25px 0;">
        <a href="${CALENDLY_LINK}" class="button">📅 Book an Instant Call (Free)</a>
      </div>
      
      <p style="text-align: center; color: #64748b; font-size: 14px; margin-bottom: 30px;">
        30-minute strategy session • No sales pitch • Just helpful advice
      </p>
      
      <div class="benefits">
        <p style="margin: 0 0 12px 0; font-weight: 600; color: #1e293b;">💡 While You Wait, Check These Out:</p>
        <ul style="margin: 0; padding-left: 20px;">
          <li><a href="https://${WEBSITE}/calculators/roi" style="color: ${BRAND_COLOR};">ROI Calculator</a> - See your potential savings</li>
          <li><a href="https://${WEBSITE}/calculators/cost" style="color: ${BRAND_COLOR};">Cost Estimator</a> - Budget your first workflow</li>
          <li><a href="https://${WEBSITE}/portfolio" style="color: ${BRAND_COLOR};">Case Studies</a> - See what we've built for others</li>
        </ul>
      </div>
      
      <div class="divider"></div>
      
      <p style="font-size: 14px; color: #64748b;">
        <strong>Other ways to reach us:</strong><br>
        💬 Live chat on <a href="https://${WEBSITE}" style="color: ${BRAND_COLOR};">${WEBSITE}</a><br>
        📅 Direct booking: <a href="${CALENDLY_LINK}" style="color: ${BRAND_COLOR};">Schedule a call</a>
      </p>
      
      <p style="margin-top: 30px;">Talk soon!</p>
      
      <p style="margin-top: 20px;">
        <strong style="color: ${BRAND_COLOR};">The ${BRAND_NAME} Team</strong>
      </p>
      
      <p style="font-size: 14px; color: #64748b; margin-top: 20px;">
        <strong>P.S.</strong> 90% of our clients start with a free consultation. Want to skip the wait and book yours now? 👆
      </p>
    </div>
  `);

  const text = `
Thanks for Reaching Out! ⚡

Hey ${greeting}!

Got your message and it's with our team.

WHAT HAPPENS NEXT:
✅ Message Received - Your inquiry is being reviewed
⏰ Response Time - Under 24 hours (usually within 4 hours)
📧 Check Your Inbox - We'll reply to this email

${message ? `
YOUR MESSAGE:
"${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"
${company ? `Company: ${company}` : ''}
` : ''}

NEED A FASTER ANSWER?
📅 Book an instant call (free): ${CALENDLY_LINK}
30-minute strategy session • No sales pitch • Just advice

WHILE YOU WAIT:
📊 ROI Calculator: ${WEBSITE}/calculators/roi
💰 Cost Estimator: ${WEBSITE}/calculators/cost  
📁 Case Studies: ${WEBSITE}/portfolio

OTHER WAYS TO REACH US:
💬 Live chat: ${WEBSITE}
📅 Direct booking: ${CALENDLY_LINK}

Talk soon!

The ${BRAND_NAME} Team

P.S. 90% of clients start with a free consultation. Book yours now?
  `.trim();

  return { html, text };
}

