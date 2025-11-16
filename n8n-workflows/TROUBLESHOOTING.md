# 🔧 Troubleshooting Guide - Email Automation Workflow

## Quick Diagnostic Checklist

Before diving into specific issues, run through this quick checklist:

- [ ] Is the workflow **Active** in n8n? (toggle in top right)
- [ ] Are all credentials valid and not expired?
- [ ] Is your Supabase table named exactly `email_subscribers`?
- [ ] Have you tested the workflow manually first?
- [ ] Are there any error messages in n8n execution logs?
- [ ] Is your email provider working (check their status page)?

## Common Issues & Solutions

### 🚨 Issue #1: Workflow Not Triggering

**Symptoms:**
- New subscriber added to database
- No email sent
- No execution showing in n8n logs

**Possible Causes & Solutions:**

#### Cause A: Workflow Not Active
```
Status: ⭕ Inactive
```
**Solution:**
1. Open workflow in n8n
2. Click the toggle switch in top right
3. Ensure it shows "Active" ✅

#### Cause B: Supabase Webhook Not Set Up
```
Error: "No webhook configured for table"
```
**Solution:**
1. In n8n, click on Supabase Trigger node
2. Click "Listen for Test Event"
3. This will set up the webhook automatically
4. Try adding a test subscriber

#### Cause C: Wrong Table Name
```
Error: "Table 'email_subscriber' not found"
```
**Solution:**
1. Verify table name is `email_subscribers` (plural)
2. Check for typos
3. Ensure table exists in Supabase
4. Update trigger node if needed

#### Cause D: Invalid Supabase Credentials
```
Error: "Invalid API key" or "Unauthorized"
```
**Solution:**
1. Go to Supabase → Settings → API
2. Copy the correct API key (anon or service role)
3. Update credentials in n8n
4. Test connection

#### Cause E: Row Level Security (RLS) Blocking Webhook
```
Error: "Insufficient permissions"
```
**Solution:**
Run this SQL in Supabase:
```sql
-- Temporarily disable RLS for testing
ALTER TABLE email_subscribers DISABLE ROW LEVEL SECURITY;

-- Or add policy to allow webhooks
CREATE POLICY "Allow webhooks"
  ON email_subscribers
  FOR SELECT
  USING (true);
```

**Verification Steps:**
1. Add a test subscriber to database
2. Check n8n executions (should appear within 5 seconds)
3. If still not working, check Supabase logs

---

### 📧 Issue #2: Email Not Sending

**Symptoms:**
- Workflow triggers successfully
- Execution shows in logs
- Email node runs but fails
- No email received

**Possible Causes & Solutions:**

#### Cause A: Invalid Email Credentials

**For Gmail:**
```
Error: "Invalid credentials (Failure)"
```
**Solution:**
1. Regenerate App Password:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App Passwords
   - Generate new password for "Mail"
   - Update in n8n credentials
2. Or use OAuth2:
   - Delete old credential
   - Create new with OAuth2
   - Re-authorize

**For SMTP:**
```
Error: "Authentication failed"
```
**Solution:**
1. Verify SMTP credentials are correct
2. Check host and port:
   - Port 587: Use TLS (Secure: false)
   - Port 465: Use SSL (Secure: true)
3. Test with telnet:
```bash
telnet smtp.sendgrid.net 587
```

#### Cause B: Sender Email Mismatch
```
Error: "Mail from address must match authenticated user"
```
**Solution:**
- Ensure "From Email" in node matches your authenticated email
- For Gmail: Must use same address as credentials
- For SMTP: Must be authorized sender on your domain

#### Cause C: Rate Limiting
```
Error: "Too many requests" or "Rate limit exceeded"
```
**Solution:**
1. Check your email provider's limits:
   - Gmail free: 500/day
   - SendGrid free: 100/day
2. Add delay between emails:
   - Insert "Wait" node (5-10 seconds)
3. Upgrade to higher tier if needed

#### Cause D: Blocked/Blacklisted Domain
```
Error: "554 Transaction failed" or "Sender address rejected"
```
**Solution:**
1. Check if your domain/IP is blacklisted:
   - [MXToolbox Blacklist Check](https://mxtoolbox.com/blacklists.aspx)
2. Set up SPF, DKIM, DMARC records
3. Use reputable email service
4. Contact email provider support

#### Cause E: Email Content Blocked as Spam
```
Email sends but goes to spam folder
```
**Solution:**
1. Test spam score: [Mail Tester](https://www.mail-tester.com/)
2. Improvements:
   - Add plain text version
   - Reduce HTML complexity
   - Avoid spam trigger words
   - Include unsubscribe link
   - Use authenticated domain

**Verification Steps:**
1. Check execution logs for error messages
2. Send test email to yourself
3. Check spam folder
4. Use different email provider to test

---

### 📎 Issue #3: PDF Not Attaching

**Symptoms:**
- Email sends successfully
- No PDF attachment in received email
- Or error about attachment

**Possible Causes & Solutions:**

#### Cause A: PDF File Not Found
```
Error: "File not found" or "Path does not exist"
```
**Solution:**
1. Verify PDF file exists at specified path
2. Use absolute path (not relative)
3. Check file permissions (readable)
4. For n8n Cloud: Upload file to workflow

#### Cause B: PDF Too Large
```
Error: "Attachment size exceeds limit"
```
**Solution:**
1. Check file size:
   - Gmail limit: 25MB
   - Most SMTP: 10-20MB
   - Recommended: Under 5MB
2. Compress PDF:
   - Use Adobe Acrobat
   - Or online tool: [SmallPDF](https://smallpdf.com/)
3. Or host PDF online and link to it instead

#### Cause C: Binary Data Not Passed
```
Error: "No binary data found"
```
**Solution:**
1. If reading file, add "Read Binary Files" node before email
2. Connect it properly to email node
3. In email node, reference: `$binary.data`
4. Set proper filename

#### Cause D: Wrong Attachment Configuration
```
Attachment shows as "noname" or corrupted
```
**Solution:**
In email node's attachment settings:
```json
{
  "attachments": [
    {
      "type": "binary",
      "property": "data",
      "fileName": "ZeroToAI-Automation-Playbook.pdf",
      "mimeType": "application/pdf"
    }
  ]
}
```

**Verification Steps:**
1. Send test email to yourself
2. Verify PDF opens correctly
3. Check file size in email
4. Test on mobile and desktop

---

### 👤 Issue #4: Name Not Personalizing

**Symptoms:**
- Email says "Hey there!" instead of "Hey John!"
- Name field empty or wrong

**Possible Causes & Solutions:**

#### Cause A: Name Field Empty in Database
```
Subscriber submitted only email, no name
```
**Solution:**
This is expected behavior. The workflow falls back to "there".

To fix:
1. Make name field required on website form
2. Or use email prefix as name:
```javascript
const email = subscriber.email;
const name = subscriber.name || email.split('@')[0];
```

#### Cause B: Name Extraction Logic Error
```
Name exists but not showing in email
```
**Solution:**
Check "Extract Subscriber Data" node:
```javascript
// Ensure this logic is correct
const name = subscriber.name || subscriber.record?.name || 'there';
const firstName = name.split(' ')[0] || 'there';
const capitalizedName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
```

#### Cause C: Template Variable Wrong
```
Email shows: "Hey {{ $json.firstName }}!"
```
**Solution:**
- Verify template uses correct expression: `{{ $json.firstName }}`
- Not `{{ firstName }}` or `{firstName}`
- Check n8n expression syntax

**Verification Steps:**
1. Add test subscriber with full name
2. Check extracted data in execution log
3. Verify email received has correct name

---

### ⏱️ Issue #5: Slow Email Delivery

**Symptoms:**
- Email takes 30+ seconds to arrive
- Workflow execution is slow

**Possible Causes & Solutions:**

#### Cause A: SMTP Server Slow
```
Email sends but takes 30-60 seconds
```
**Solution:**
1. Test SMTP server speed:
```bash
time curl smtp://smtp.sendgrid.net:587
```
2. Try different SMTP provider
3. Use Gmail OAuth2 (usually faster)

#### Cause B: Large PDF Attachment
```
PDF is 10MB+, slowing upload
```
**Solution:**
1. Compress PDF to under 2MB
2. Or link to PDF instead of attaching:
```html
<a href="https://yoursite.com/playbook.pdf">Download Your Playbook</a>
```

#### Cause C: Too Many Workflow Nodes
```
Workflow has 10+ nodes executing
```
**Solution:**
1. Simplify workflow
2. Remove unnecessary nodes
3. Optimize code in Code nodes

#### Cause D: n8n Instance Overloaded
```
Multiple workflows running simultaneously
```
**Solution:**
1. For n8n Cloud: Upgrade plan
2. For self-hosted: Increase server resources
3. Use workflow queues for high volume

**Expected Timing:**
- **Good:** 5-10 seconds
- **Acceptable:** 10-20 seconds
- **Slow:** 20-30 seconds
- **Problem:** 30+ seconds

---

### 🔄 Issue #6: Duplicate Emails Sent

**Symptoms:**
- Subscriber receives 2-3 welcome emails
- Multiple executions for same subscriber

**Possible Causes & Solutions:**

#### Cause A: Workflow Triggered Multiple Times
```
Database insert happens multiple times
```
**Solution:**
Add unique constraint on email:
```sql
ALTER TABLE email_subscribers
ADD CONSTRAINT email_unique UNIQUE (email);
```

#### Cause B: Multiple Active Workflows
```
Duplicate workflow active
```
**Solution:**
1. Check for duplicate workflows in n8n
2. Deactivate old/test versions
3. Keep only one active

#### Cause C: Webhook Duplicate Delivery
```
Supabase sends duplicate webhooks
```
**Solution:**
Add deduplication logic in Code node:
```javascript
// Check if email already processed
const processedEmails = new Set();
const email = subscriber.email;

if (processedEmails.has(email)) {
  return null; // Skip
}

processedEmails.add(email);
return subscriber;
```

**Verification Steps:**
1. Check n8n executions for duplicates
2. Verify only one workflow is active
3. Test with new subscriber

---

### ❌ Issue #7: Generic Error Messages

**Symptoms:**
- "Something went wrong"
- No specific error details

**Debugging Steps:**

#### Step 1: Enable Detailed Logging
1. Open workflow
2. Click Settings (gear icon)
3. Enable "Save execution progress"
4. Enable "Save manual executions"

#### Step 2: Check Each Node's Output
1. Run workflow manually
2. Click on each node in execution
3. Check JSON output
4. Look for error fields

#### Step 3: Check External Service Logs
- **Supabase:** Dashboard → Logs
- **SendGrid:** Dashboard → Activity
- **Gmail:** Check "Sent" folder
- **n8n:** Execution history

#### Step 4: Test with Minimal Data
```json
{
  "record": {
    "id": "test-123",
    "email": "test@example.com",
    "name": "Test User",
    "source": "test",
    "subscribed_at": "2025-01-15T10:00:00Z"
  }
}
```

#### Step 5: Check n8n Version
```bash
n8n --version
```
Ensure you're on latest stable version.

---

## Advanced Debugging Techniques

### 1. Test Individual Components

**Test Supabase Trigger:**
```sql
-- Insert test record
INSERT INTO email_subscribers (email, name, source)
VALUES ('debug@test.com', 'Debug User', 'manual_test');
```
Check if workflow triggers.

**Test Email Node:**
1. Disable trigger
2. Run workflow manually
3. Provide mock data
4. Check email delivery

**Test Code Node:**
1. Add `console.log()` statements
2. Run workflow
3. Check execution logs

### 2. Use n8n's Built-in Debugger

1. Click "Execute Workflow" button
2. Provide test data
3. Step through each node
4. Inspect data at each step

### 3. Monitor in Real-Time

```bash
# For self-hosted n8n, watch logs
docker logs -f n8n

# Or check n8n logs
tail -f ~/.n8n/logs/n8n.log
```

### 4. Test Email Deliverability

Send test to these services:
- [Mail Tester](https://www.mail-tester.com/) - Spam score
- [GlockApps](https://glockapps.com/) - Inbox placement
- [Email on Acid](https://www.emailonacid.com/) - Rendering test

### 5. Validate Webhook Delivery

```bash
# Check if Supabase is sending webhooks
curl -X POST https://your-n8n-instance/webhook/test \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

---

## Error Code Reference

### Supabase Errors

| Code | Error | Solution |
|------|-------|----------|
| 401 | Unauthorized | Check API key |
| 404 | Not found | Verify table name |
| 409 | Conflict | Duplicate email (constraint) |
| 500 | Server error | Check Supabase status |

### SMTP Errors

| Code | Error | Solution |
|------|-------|----------|
| 421 | Too many connections | Reduce rate, add delay |
| 450 | Mailbox unavailable | Recipient issue, skip |
| 451 | Server error | Retry later |
| 550 | Mailbox not found | Invalid recipient email |
| 554 | Transaction failed | Check authentication |

### Gmail Errors

| Code | Error | Solution |
|------|-------|----------|
| 454 | Too many login attempts | Wait 15 minutes, retry |
| 535 | Authentication failed | Regenerate app password |
| 552 | Exceeded storage | Recipient mailbox full |

---

## Performance Optimization

### Slow Workflow? Try These:

1. **Optimize Code Nodes**
   - Remove unnecessary processing
   - Avoid loops when possible
   - Cache repeated operations

2. **Reduce Email Size**
   - Compress images in HTML
   - Simplify HTML structure
   - Use external CSS

3. **Batch Processing**
   - For high volume, batch emails
   - Process in groups of 50-100
   - Add delays between batches

4. **Use Webhooks Over Polling**
   - Realtime triggers (faster)
   - Less resource intensive
   - No polling delays

---

## When All Else Fails

### 1. Reset Everything

1. Deactivate workflow
2. Delete and reimport workflow
3. Reconfigure all credentials
4. Test with fresh data

### 2. Check Service Status

- [n8n Status](https://status.n8n.io/)
- [Supabase Status](https://status.supabase.com/)
- [Gmail Status](https://www.google.com/appsstatus/)
- [SendGrid Status](https://status.sendgrid.com/)

### 3. Community Support

- [n8n Community Forum](https://community.n8n.io/)
- [n8n Discord](https://discord.gg/n8n)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/n8n)

### 4. Professional Help

- Hire n8n consultant
- Contact support@zerotoai.com
- Book troubleshooting session

---

## Preventive Measures

### Setup Monitoring

1. **Error Alerts**
   - Add error notification to Slack
   - Email admin on failures
   - Set up PagerDuty for critical issues

2. **Health Checks**
   - Daily execution count review
   - Weekly deliverability check
   - Monthly credential audit

3. **Backup Strategy**
   - Export workflow JSON weekly
   - Backup credentials (securely)
   - Document configuration changes

### Best Practices

✅ Test thoroughly before activation  
✅ Start with low volume  
✅ Monitor closely for first week  
✅ Keep workflow simple  
✅ Document all changes  
✅ Use version control for workflows  
✅ Set up staging environment  
✅ Regular security audits  

---

## FAQ

**Q: How do I know if my workflow is working?**  
A: Check n8n execution history. Should see new execution within seconds of subscriber signup.

**Q: Can I test without sending real emails?**  
A: Yes! Replace email node with "No Op" node, or send all tests to your own email.

**Q: What's the best email provider for this?**  
A: For testing: Gmail. For production: SendGrid or Mailgun.

**Q: How do I debug variable expressions?**  
A: Add a "Set" node after the data node and output: `{{ $json }}` to see all available data.

**Q: Can I see webhook payloads from Supabase?**  
A: Yes, in n8n execution logs, click on trigger node to see raw payload.

---

## Still Stuck?

If you've tried everything and still having issues:

1. **Document your issue:**
   - What you're trying to do
   - What's happening instead
   - Error messages (exact text)
   - Screenshots of configuration
   - Execution logs

2. **Check the full documentation:**
   - [README.md](./README.md)
   - [QUICKSTART.md](./QUICKSTART.md)
   - [workflow-diagram.md](./workflow-diagram.md)

3. **Get help:**
   - Post in [n8n Community](https://community.n8n.io/)
   - Email: support@zerotoai.com
   - Include your workflow JSON (remove credentials!)

---

**Last Updated:** 2025-01-15  
**Version:** 1.0

