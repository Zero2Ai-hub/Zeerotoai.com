# 🚀 Quick Start Guide - 5 Minutes to Live

Get your welcome email automation running in just 5 minutes!

## ⚡ Prerequisites Checklist

Before you start, make sure you have:

- [ ] n8n instance (Cloud or self-hosted) - [Get n8n](https://n8n.io/)
- [ ] Supabase project URL and API key
- [ ] Email account (Gmail or SMTP)
- [ ] PDF file ready (your Automation Playbook)

## 📋 Step-by-Step (5 Minutes)

### 1️⃣ Import Workflow (30 seconds)

1. Download `welcome-email-automation.json` (for Gmail) or `welcome-email-automation-smtp.json` (for SMTP)
2. Open n8n → **Workflows** → **Import from File**
3. Select the downloaded JSON file
4. Click **Import**

### 2️⃣ Get n8n Webhook URL (30 seconds)

1. Click the **"Webhook - New Subscriber"** node
2. Copy the **Production URL** shown at the top:
   ```
   https://your-n8n-instance.com/webhook/email-subscriber-webhook
   ```
3. Save this URL - you'll need it for Step 2B

**Note:** Keep this window open, you'll configure Supabase next.

### 2B️⃣ Setup Supabase Database Trigger (2 minutes)

1. Open Supabase → **SQL Editor**
2. Copy the SQL code from [SUPABASE-WEBHOOK-SETUP.md](./SUPABASE-WEBHOOK-SETUP.md)
3. **Replace the webhook URL** with your n8n URL from Step 2
4. Click **Run**
5. Done! Supabase will now notify n8n of new subscribers

**Quick SQL (replace URL!):**
```sql
CREATE OR REPLACE FUNCTION notify_new_subscriber()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT := 'YOUR_N8N_WEBHOOK_URL_HERE';
  request_id INT;
BEGIN
  SELECT net.http_post(
    url := webhook_url,
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := jsonb_build_object('record', row_to_json(NEW))
  ) INTO request_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_new_subscriber
  AFTER INSERT ON email_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_subscriber();
```

### 3️⃣ Add Email Credentials (1 minute)

#### For Gmail:
1. Click **"Send Welcome Email"** node
2. Click **"Create New Credential"**
3. Choose **OAuth2** and click **Connect Google Account**
4. Follow the authorization flow

#### For SMTP:
1. Click **"Send Welcome Email with SMTP"** node
2. Click **"Create New Credential"**
3. Enter your SMTP details:
   - Host: e.g., `smtp.sendgrid.net`
   - Port: `587`
   - Username & Password

**Quick SMTP Setup with SendGrid (Recommended):**
1. Sign up at [sendgrid.com](https://sendgrid.com) (free tier: 100 emails/day)
2. Create an API key
3. Use these settings:
   - Host: `smtp.sendgrid.net`
   - Port: `587`
   - Username: `apikey`
   - Password: Your API key

### 4️⃣ Customize Email (2 minutes)

1. Click **"Send Welcome Email"** node
2. Update these fields:
   - **From Email**: `hello@yourdomain.com`
   - **From Name**: `Your Name from YourCompany`
3. Scroll to **HTML** section and update:
   - Replace `Yasser` with your name
   - Replace `ZeroToAI` with your company name
   - Replace `zerotoai.com` with your domain

### 5️⃣ Add PDF Attachment (30 seconds)

**Easiest Method - Upload File:**

1. In the **"Send Welcome Email"** node
2. Scroll to **Attachments** section
3. Click **Add Attachment**
4. Click **Add File**
5. Upload your PDF
6. Set filename: `YourCompany-Automation-Playbook.pdf`

### 6️⃣ Test & Activate (30 seconds)

1. Click **"Execute Workflow"** (test with sample data)
2. Check your test email
3. If it works, toggle **Active** in the top right
4. Done! 🎉

## ✅ Verification

Test your live workflow:

1. Go to your website
2. Trigger the email popup
3. Enter your email
4. Submit
5. Check inbox (should arrive within 30 seconds)

## 🔍 Troubleshooting

### Workflow not triggering?
- Ensure workflow is **Active** (toggle in top right)
- Check Supabase database trigger is created (run SQL query)
- Verify webhook URL in Supabase function matches n8n URL
- Test with: `INSERT INTO email_subscribers (email, name, source) VALUES ('test@test.com', 'Test', 'test');`

### Email not sending?
- Check spam/junk folder
- Verify email credentials
- Check n8n execution logs

### Need more help?
- See full [README.md](./README.md) for detailed documentation
- Check [n8n docs](https://docs.n8n.io)
- Join [n8n Community](https://community.n8n.io)

## 🎯 Next Steps

Once your basic workflow is running:

1. ✅ **Customize the email template** - Add your branding
2. ✅ **Create your PDF content** - See [PDF-CONTENT-GUIDE.md](./PDF-CONTENT-GUIDE.md)
3. ✅ **Add email tracking** - Monitor delivery success
4. ✅ **Set up analytics** - Track opens and clicks
5. ✅ **Create email sequence** - Add follow-up emails

## 📊 What to Monitor

After activation, check these daily for the first week:

- **Execution success rate** (should be 95%+)
- **Email delivery** (check spam rates)
- **Error logs** (fix any issues immediately)

## 🎨 Customization Ideas

Make the workflow yours:

- [ ] Add your logo to email header
- [ ] Change color scheme to match your brand
- [ ] Add social media links in footer
- [ ] Create custom unsubscribe page
- [ ] Add recipient language detection for bilingual emails
- [ ] Include video introduction in email
- [ ] Add personalized recommendations based on source

## 💡 Pro Tips

1. **Test thoroughly** - Send to yourself first
2. **Monitor spam rates** - Use [mail-tester.com](https://www.mail-tester.com)
3. **Warm up new domains** - Start with small volumes
4. **Use professional email** - hello@domain.com > noreply@domain.com
5. **Personalize everything** - Use subscriber's name everywhere

## 📈 Expected Results

After setup, you should see:

- ⚡ **Email delivered** within 10-30 seconds
- 📧 **95%+ delivery rate** (check spam placement)
- 💌 **~20-30% open rate** (industry average)
- 🎯 **~2-5% click rate** on CTA button

## 🔐 Security Notes

- ✅ Never commit credentials to Git
- ✅ Use environment variables in self-hosted n8n
- ✅ Rotate API keys monthly
- ✅ Enable 2FA on all accounts
- ✅ Monitor for suspicious activity

## 🚨 Common Mistakes to Avoid

1. ❌ Using `noreply@` email address (reduces opens)
2. ❌ Not testing email in multiple clients
3. ❌ Forgetting to update all template variables
4. ❌ Setting workflow to Active before testing
5. ❌ Not monitoring error logs
6. ❌ Using huge PDF files (keep under 5MB)

## 📞 Need Help?

- 📚 Full documentation: [README.md](./README.md)
- 🎓 n8n Academy: [academy.n8n.io](https://academy.n8n.io)
- 💬 Community: [community.n8n.io](https://community.n8n.io)
- 📧 Support: support@zerotoai.com

---

**Time to complete:** 5 minutes  
**Difficulty:** Beginner  
**Prerequisites:** n8n account, Supabase project, email account

Ready? Let's go! 🚀

