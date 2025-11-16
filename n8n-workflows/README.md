# Email Subscriber Welcome Automation - Setup Guide

## Overview
This n8n workflow automatically sends a welcome email with a PDF attachment to new subscribers when they sign up through your website's email capture popup.

## What This Workflow Does

1. **Triggers** when a new row is inserted into the `email_subscribers` table in Supabase
2. **Extracts** the subscriber's email, name, and other data
3. **Sends** a beautifully formatted welcome email with your Automation Playbook PDF attached
4. **Logs** success/failure for monitoring
5. **Optionally** updates the subscriber record to track that the welcome email was sent

## Files Included

- `welcome-email-automation.json` - Main workflow using Gmail
- `welcome-email-automation-smtp.json` - Alternative using SMTP (for any email provider)

## Prerequisites

Before setting up this workflow, you need:

### 1. n8n Instance
- Self-hosted n8n OR n8n Cloud account
- n8n version 1.0+ recommended
- [Get n8n](https://n8n.io/)

### 2. Supabase Setup
- Your Supabase project with `email_subscribers` table
- Access to SQL Editor (to create database trigger)
- pg_net extension enabled (usually enabled by default)

### 3. Email Service (Choose ONE)

**Option A: Gmail** (Easier, recommended for testing)
- Gmail account
- App-specific password OR OAuth2 credentials

**Option B: SMTP** (More professional, works with any email provider)
- SMTP server details (host, port, username, password)
- Works with: SendGrid, Mailgun, AWS SES, custom SMTP, etc.

### 4. PDF File
- Your "Automation Playbook" PDF file
- Recommended size: Under 10MB
- Can be stored locally or accessed via URL

## Step-by-Step Setup

### Step 1: Import the Workflow

1. Open your n8n instance
2. Click **Workflows** → **Import from File**
3. Select `welcome-email-automation.json` (Gmail) OR `welcome-email-automation-smtp.json` (SMTP)
4. Click **Import**

### Step 2: Setup Webhook Connection

#### 2A: Get n8n Webhook URL

1. Click on the **"Webhook - New Subscriber"** node in your workflow
2. Copy the **Production URL** displayed at the top (looks like: `https://your-n8n.com/webhook/email-subscriber-webhook`)
3. Keep this URL handy for the next step

#### 2B: Create Supabase Database Trigger

You need to create a PostgreSQL trigger in Supabase that sends HTTP requests to your n8n webhook.

1. Open Supabase Dashboard → **SQL Editor**
2. Create a new query and paste this SQL:

```sql
-- Create function to send webhook to n8n
CREATE OR REPLACE FUNCTION notify_new_subscriber()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT := 'YOUR_N8N_WEBHOOK_URL_HERE';  -- Replace this!
  request_id INT;
BEGIN
  SELECT net.http_post(
    url := webhook_url,
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := jsonb_build_object(
      'type', 'INSERT',
      'table', 'email_subscribers',
      'record', jsonb_build_object(
        'id', NEW.id,
        'email', NEW.email,
        'name', NEW.name,
        'source', NEW.source,
        'subscribed_at', NEW.subscribed_at,
        'created_at', NEW.created_at
      )
    )
  ) INTO request_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger
DROP TRIGGER IF EXISTS on_new_subscriber ON email_subscribers;

CREATE TRIGGER on_new_subscriber
  AFTER INSERT ON email_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_subscriber();
```

3. **IMPORTANT**: Replace `YOUR_N8N_WEBHOOK_URL_HERE` with your actual webhook URL from step 2A
4. Click **Run** to execute
5. Done! Your database will now call n8n whenever someone subscribes

**For detailed setup instructions, see: [SUPABASE-WEBHOOK-SETUP.md](./SUPABASE-WEBHOOK-SETUP.md)**

### Step 3: Configure Email Credentials

#### For Gmail Users:

1. Click on the **"Send Welcome Email with PDF"** node
2. Click **Create New Credential** next to "Gmail account"
3. Choose authentication method:

   **Method A: OAuth2 (Recommended)**
   - Click **Connect Google Account**
   - Follow the OAuth flow
   - Grant email sending permissions

   **Method B: App Password**
   - Enable 2FA on your Google account
   - Generate an [App Password](https://myaccount.google.com/apppasswords)
   - Use your Gmail address and app password

#### For SMTP Users:

1. Click on the **"Send Welcome Email with SMTP"** node
2. Click **Create New Credential** next to "SMTP account"
3. Enter your SMTP details:
   - **Host**: Your SMTP server (e.g., `smtp.sendgrid.net`)
   - **Port**: Usually 587 (TLS) or 465 (SSL)
   - **Username**: Your SMTP username
   - **Password**: Your SMTP password
   - **Secure**: Enable for port 465, disable for 587

**Popular SMTP Settings:**

| Provider | Host | Port | Auth |
|----------|------|------|------|
| SendGrid | smtp.sendgrid.net | 587 | API Key |
| Mailgun | smtp.mailgun.org | 587 | Username/Password |
| AWS SES | email-smtp.us-east-1.amazonaws.com | 587 | SMTP Credentials |
| Gmail | smtp.gmail.com | 587 | App Password |

### Step 4: Add Your PDF Attachment

You have three options for attaching the PDF:

#### Option A: Upload to n8n (Simplest)

1. In the **"Send Welcome Email"** node, scroll to **Attachments**
2. Click **Add Attachment**
3. Choose **Binary Data**
4. Upload your `ZeroToAI-Automation-Playbook.pdf`
5. Set filename: `ZeroToAI-Automation-Playbook.pdf`

#### Option B: Read from File System

1. Add a **"Read Binary File"** node before the email node
2. Set the file path to your PDF location
3. Connect it before the email node
4. Reference the binary data in the email node

#### Option C: Download from URL

1. Add an **"HTTP Request"** node before the email node
2. Set method to **GET**
3. Enter your PDF URL
4. Set **Response Format** to **File**
5. Connect it before the email node

### Step 5: Customize the Email Content

1. Click on the **"Send Welcome Email"** node
2. Customize these fields:
   - **From Email**: Change to your email (e.g., `hello@zerotoai.com`)
   - **From Name**: Change to your name (e.g., `Yasser from ZeroToAI`)
   - **Subject**: Customize if desired
   - **HTML Content**: Edit the email template
     - Update your name in the signature
     - Update links to your website
     - Modify branding colors
     - Add your logo if desired

**Key placeholders in the template:**
- `{{ $json.firstName }}` - Subscriber's first name
- `{{ $json.email }}` - Subscriber's email
- Replace all `zerotoai.com` with your domain

### Step 6: Activate the Workflow

1. Click **Save** in the top right
2. Toggle the switch to **Active**
3. The workflow is now live and listening for new subscribers!

## Testing the Workflow

### Test Method 1: Manual Test

1. In n8n, click **Execute Workflow** in the top right
2. Manually trigger with test data:
```json
{
  "record": {
    "id": "test-123",
    "email": "your-test-email@example.com",
    "name": "Test User",
    "source": "exit_intent_popup",
    "subscribed_at": "2025-01-15T10:00:00Z"
  }
}
```
3. Check your test email inbox

### Test Method 2: Real Signup

1. Go to your website
2. Trigger the email popup (exit intent or wait 30 seconds)
3. Enter your test email
4. Submit the form
5. Check your inbox within 30 seconds

### Test Method 3: Direct Database Insert

```sql
INSERT INTO email_subscribers (email, name, source)
VALUES ('test@example.com', 'Test User', 'manual_test');
```

## Monitoring & Troubleshooting

### Check Execution History

1. Go to **Executions** tab in n8n
2. View each execution's status
3. Click on executions to see detailed logs

### Common Issues

#### Issue: Workflow not triggering

**Solution:**
- Ensure workflow is **Active** (toggle in top right)
- Check Supabase credentials are valid
- Verify the table name is exactly `email_subscribers`
- Check Supabase logs for webhook delivery

#### Issue: Email not sending

**Solution:**
- Verify email credentials are correct
- Check spam folder
- Review n8n execution logs for error messages
- Ensure "From Email" matches your authenticated email
- For Gmail: Enable "Less secure app access" or use OAuth2
- For SMTP: Verify port and TLS settings

#### Issue: PDF not attaching

**Solution:**
- Verify PDF file exists and is accessible
- Check file size (must be under 25MB for Gmail, 10MB recommended)
- Ensure binary data is properly passed to email node
- Review attachment configuration in email node

#### Issue: Wrong name in email

**Solution:**
- Check the "Extract Subscriber Data" node
- Verify name field exists in database
- Default fallback is "there" if no name provided

### View Execution Logs

Each node logs its activity. To debug:

1. Click on any execution
2. Click on individual nodes to see their output
3. Check the **"Log Success"** or **"Log Error"** nodes for summaries

## Advanced Configuration

### Add Email Tracking (Optional)

To track if welcome emails were sent, add these columns to your Supabase table:

```sql
ALTER TABLE email_subscribers 
ADD COLUMN welcome_email_sent BOOLEAN DEFAULT FALSE,
ADD COLUMN welcome_email_sent_at TIMESTAMPTZ;
```

Then enable the **"Update Subscriber Record"** node (currently disabled).

### Add Email Analytics

Insert a **Google Analytics** or **Mixpanel** node to track email opens and clicks.

### Add Delay for Testing

Add a **"Wait"** node between trigger and email send to:
- Review data before sending
- Prevent duplicate sends during testing

### Send Bilingual Emails

The popup supports Arabic and English. To send bilingual emails:

1. Detect language from the `source` field or add a `language` column
2. Add an **"IF"** node to check language
3. Create separate email templates for each language
4. Route to appropriate template

### Add to Email Marketing Platform

After sending the welcome email, sync subscriber to your email marketing platform:

1. Add a **Mailchimp** or **ConvertKit** node
2. Connect it after the welcome email node
3. Add subscriber to your main list

### Error Notifications

Get notified when emails fail:

1. Add a **"Send Email"** node on the error path
2. Send to your admin email
3. Include error details from `{{ $json.error }}`

## Workflow Architecture

```
┌─────────────────────────────────┐
│ New row in email_subscribers    │
│ (Supabase Trigger)              │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│ Extract & Format Data           │
│ (Code Node)                     │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│ Send Welcome Email + PDF        │
│ (Gmail/SMTP Node)               │
└────────────┬────────────────────┘
             │
        ┌────┴────┐
        ▼         ▼
    Success    Error
        │         │
        ▼         ▼
    Log OK    Log Error
```

## Maintenance

### Weekly Tasks
- Check execution success rate
- Monitor error logs
- Verify email deliverability

### Monthly Tasks
- Update email content for seasonality
- Refresh PDF if content changes
- Review spam rates

### Quarterly Tasks
- A/B test email subject lines
- Update email design
- Refresh PDF content

## Performance & Limits

### Gmail Limits
- 500 emails/day (free Gmail)
- 2000 emails/day (Google Workspace)
- Rate limit: ~50 emails/minute

### SMTP Limits
Varies by provider:
- **SendGrid Free**: 100 emails/day
- **SendGrid Essentials**: 40,000-100,000/month
- **Mailgun Free**: 5,000 emails/month
- **AWS SES**: 200 emails/day (free tier), then pay-as-you-go

### n8n Limits
- Self-hosted: No limits
- n8n Cloud: Based on plan (check your tier)

## Security Best Practices

1. **Never commit credentials** - Store in n8n's credential manager
2. **Use environment variables** for sensitive data in self-hosted n8n
3. **Enable HTTPS** for webhook URLs
4. **Rotate API keys** periodically
5. **Use service role key** for Supabase (not anon key) in production
6. **Monitor for abuse** - Watch for unusual spikes in signups

## Scaling Considerations

### High Volume (1000+ subscribers/day)

1. **Use dedicated SMTP provider** (SendGrid, Mailgun, AWS SES)
2. **Add rate limiting** - Use **"Wait"** nodes to prevent throttling
3. **Batch processing** - Group emails and send in batches
4. **Add retry logic** - Automatically retry failed sends
5. **Use queue system** - Add BullMQ for job queuing

### Enterprise Setup

1. **Use n8n self-hosted** for unlimited executions
2. **Set up error alerting** - Slack/Discord notifications
3. **Add monitoring** - Track delivery rates, bounces, complaints
4. **Implement fallback** - Secondary email service if primary fails
5. **Add analytics** - Track open rates, click rates, conversions

## Support & Resources

### n8n Documentation
- [n8n Docs](https://docs.n8n.io/)
- [Supabase Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.supabasetrigger/)
- [Gmail Node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/)
- [SMTP Node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.emailsend/)

### Supabase Documentation
- [Supabase Docs](https://supabase.com/docs)
- [Database Webhooks](https://supabase.com/docs/guides/database/webhooks)
- [Realtime](https://supabase.com/docs/guides/realtime)

### Community
- [n8n Community](https://community.n8n.io/)
- [n8n Discord](https://discord.gg/n8n)

## Version History

- **v1.0** (2025-01-15) - Initial release
  - Supabase trigger
  - Welcome email with PDF
  - Gmail and SMTP support
  - Error handling

## License

This workflow is part of the ZeroToAI project. Use freely for your own projects.

---

**Questions?** Need help setting this up? Contact support@zerotoai.com

