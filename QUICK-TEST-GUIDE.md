# ⚡ Quick Test Guide - Welcome Emails

## 🚀 Fast Testing (5 minutes)

### Test 1: Exit Intent Email
```bash
# Open site in incognito
http://localhost:3000

# Trigger popup (2 ways):
1. Move mouse to top of browser
2. Wait 30 seconds

# Fill form:
Name: Test User
Email: your-email@gmail.com

# Submit → Check inbox for:
Subject: "🎁 Your AI Automation Starter Pack is Ready!"
```

### Test 2: Signup Welcome Email
```bash
# Go to signup
http://localhost:3000/signup

# Create account:
Name: Test User
Email: your-email+test@gmail.com
Password: test123

# Submit → Check inbox for:
Subject: "🎉 Welcome to Zero2AI! Let's Get Started"
```

### Test 3: Contact Form Email
```bash
# Go to contact
http://localhost:3000/contact

# Fill form:
Name: Test User
Email: your-email@gmail.com
Company: Test Corp
Message: "I want to automate my business"

# Submit → Check 2 inboxes:
1. Your inbox: "⚡ Thanks for Reaching Out!"
2. Team inbox: "🔔 New Contact Form Submission"
```

---

## ✅ Quick Checklist (per email)

- [ ] Email arrives within 60 seconds
- [ ] Subject line correct
- [ ] HTML renders (not plain text)
- [ ] Name personalized
- [ ] CTA button works (Calendly opens)
- [ ] Links all work
- [ ] Footer present
- [ ] Mobile looks good

---

## 🔍 Where to Check

### Console Logs
```bash
# Look for these in terminal:
✅ Contact saved to Supabase successfully
✅ Email notification sent to team via Resend
✅ Welcome email sent to user via Resend
✅ exit_intent welcome email sent to [email]
✅ Signup welcome email sent
```

### Resend Dashboard
```
https://resend.com/emails

Check:
- Delivery status (should be "Delivered")
- Open rate (after opening email)
- Click rate (after clicking button)
- Bounce/spam rate (should be 0%)
```

### Supabase Dashboard
```
# Check tables for data:
- email_subscribers (exit intent)
- contact_submissions (contact form)
- auth.users (signup - managed by Supabase Auth)
```

---

## 🐛 Common Issues & Fixes

### Issue: Email not arriving
```bash
# Check 1: Environment variable
echo $RESEND_API_KEY
# Should show: re_xxxxxxxxxx

# Check 2: Console logs
# Look for errors in terminal

# Check 3: Spam folder
# Gmail often filters new domains

# Check 4: Resend dashboard
# Check delivery status
```

### Issue: HTML not rendering (showing plain text)
```bash
# This is NORMAL in:
- Gmail mobile app (strips HTML)
- Some corporate email clients

# HTML WILL render in:
- Gmail desktop web
- Outlook desktop
- Hostinger webmail
- Apple Mail

# Solution: Check on desktop Gmail, not mobile app
```

### Issue: Duplicate emails
```bash
# Exit Intent: EXPECTED
# - Sends email even for duplicate subscribers
# - Users may lose original email

# Contact Form: Should only send once
# - Check if form is being submitted twice
# - Check database for duplicate entries

# Signup: Should only send once
# - Check if signup page is calling API twice
# - Check Supabase auth logs
```

### Issue: Links not working
```bash
# Check .env.local for correct values:
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# or
NEXT_PUBLIC_SITE_URL=https://zeerotoai.com

# Links to verify:
- Calendly: https://calendly.com/zero2ai/strategy-call
- Dashboard: https://zeerotoai.com/dashboard
- ROI Calc: https://zeerotoai.com/calculators/roi
- Cost Calc: https://zeerotoai.com/calculators/cost
```

---

## 📊 Monitoring Commands

### Check Resend API Status
```bash
curl https://api.resend.com/emails \
  -H "Authorization: Bearer $RESEND_API_KEY" \
  -H "Content-Type: application/json"
```

### Check Database Entries
```sql
-- Check exit intent subscribers
SELECT * FROM email_subscribers 
WHERE source = 'exit_intent_popup' 
ORDER BY subscribed_at DESC 
LIMIT 10;

-- Check contact submissions
SELECT * FROM contact_submissions 
ORDER BY created_at DESC 
LIMIT 10;

-- Check auth users (signups)
SELECT email, created_at 
FROM auth.users 
ORDER BY created_at DESC 
LIMIT 10;
```

### Check Email Logs (Server)
```bash
# In terminal where dev server is running
# Look for these patterns:
grep "welcome email" logs
grep "Resend" logs
grep "✅" logs
```

---

## 🎯 Expected Timing

| Action | Expected Delay |
|--------|----------------|
| Exit popup submit → Email | 5-30 seconds |
| Signup submit → Email | 5-30 seconds |
| Contact submit → User email | 5-30 seconds |
| Contact submit → Team email | 5-30 seconds |
| Email delivery → Inbox | Instant - 2 min |
| First open → Resend dashboard update | 1-5 minutes |

---

## 🔐 Security Check

### Before Testing in Production
```bash
# 1. Check .gitignore
cat .gitignore | grep -E "\.env|downloads"
# Should show:
# .env.local
# public/downloads/

# 2. Verify no API keys in code
git log --all --full-history --source -- "**/.*env*"
# Should be empty or only show .env.example

# 3. Check environment variables are set
echo "Checking env vars..."
[ -z "$RESEND_API_KEY" ] && echo "❌ RESEND_API_KEY not set" || echo "✅ RESEND_API_KEY set"
[ -z "$NEXT_PUBLIC_SUPABASE_URL" ] && echo "❌ SUPABASE_URL not set" || echo "✅ SUPABASE_URL set"
```

---

## 📧 Production Testing Workflow

### Step 1: Test in Development (Local)
```bash
# Start dev server
npm run dev

# Test all 3 email types
# Use your personal email
# Check console logs
# Verify HTML rendering
```

### Step 2: Test in Staging (Vercel Preview)
```bash
# Push to feature branch
git push origin feature/welcome-emails

# Wait for Vercel preview deployment
# Test all 3 email types in preview
# Use test email addresses
# Check Resend dashboard
```

### Step 3: Test in Production
```bash
# Merge to main
git push origin main

# Wait for production deployment
# Test with ONE real email first
# Then test all 3 types
# Monitor Resend dashboard
```

---

## 🎉 Success Criteria

After testing all 3 emails, you should see:

```
✅ Exit Intent Email
   - Arrives in 30 seconds
   - HTML renders beautifully
   - Name personalized ("Hey John!")
   - Book Call button works
   - Mobile looks great

✅ Signup Welcome Email
   - Arrives in 30 seconds
   - HTML renders beautifully
   - Dashboard link works
   - 3-step guide visible
   - Mobile looks great

✅ Contact Form Email
   - User email arrives in 30 seconds
   - Team email arrives in 30 seconds
   - Message quoted correctly
   - Company name shows
   - Mobile looks great

✅ Resend Dashboard
   - 3/3 emails delivered
   - 0% bounce rate
   - 0% spam rate
   - Open rate tracking works

✅ Database
   - All entries saved correctly
   - No duplicate errors
   - Timestamps accurate
```

---

## 🚨 Emergency Rollback

If something breaks in production:

```bash
# Option 1: Revert git commit
git revert HEAD
git push origin main

# Option 2: Disable emails temporarily
# In .env.local, comment out:
# RESEND_API_KEY=re_xxxxxxxxxx

# Option 3: Feature flag (future)
# Add to code:
if (process.env.ENABLE_WELCOME_EMAILS === 'true') {
  // send email
}
```

---

## 📚 Additional Resources

- **Technical Docs:** `WELCOME-EMAILS-GUIDE.md`
- **Visual Preview:** `EMAIL-PREVIEW.md`
- **Email Templates:** `lib/email-templates.ts`
- **API Routes:** `app/api/send-welcome-email/route.ts`
- **Resend Dashboard:** https://resend.com/emails
- **Supabase Dashboard:** https://supabase.com/dashboard

---

## 💬 Support

**Need help?**
- Check console logs first
- Review Resend dashboard
- Test with different email client
- Check spam folder
- Verify environment variables

**Still stuck?**
- Review `WELCOME-EMAILS-GUIDE.md` troubleshooting section
- Check Resend documentation
- Test plain text fallback

---

**Ready to test? Start with Exit Intent Email! 🚀**

