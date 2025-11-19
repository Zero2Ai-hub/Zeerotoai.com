# 🚀 Migration Guide: Airtable → Supabase + Resend

## ✅ What Changed

### Before:
- Contact forms → Airtable
- Workflow requests → Airtable  
- Email newsletter → Supabase
- Email notifications → Resend (optional)

### After:
- **Everything → Supabase** ✨
- Email notifications → Resend (automatic)

---

## 📋 Migration Steps

### **Step 1: Run Supabase Migration**

This creates the new tables in your Supabase database.

```bash
# Navigate to your project directory
cd D:/ZeroToAI/Website

# Option A: Using Supabase CLI (Recommended)
supabase db push

# Option B: Manual (if no CLI)
# 1. Go to https://supabase.com/dashboard
# 2. Select your project
# 3. Go to SQL Editor
# 4. Copy contents of: supabase/migrations/20250119_contact_and_workflow_tables.sql
# 5. Run the SQL
```

---

### **Step 2: Update Environment Variables**

Update your `.env.local` file:

```bash
# ============================================
# REQUIRED - Supabase
# ============================================
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# ============================================
# REQUIRED - Resend (for email notifications)
# ============================================
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx

# ============================================
# OPTIONAL - Notification Email (defaults to hello@zeerotoai.com)
# ============================================
NOTIFICATION_EMAIL=hello@zeerotoai.com

# ============================================
# DEPRECATED - No longer needed!
# ============================================
# AIRTABLE_API_KEY=xxxxx  ← Remove these
# AIRTABLE_BASE_ID=xxxxx
# AIRTABLE_TABLE_NAME=xxxxx
```

**You can now remove all Airtable environment variables!**

---

### **Step 3: Verify DNS Records (Resend)**

Before emails will work, verify your Resend domain:

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click on `updates.zeerotoai.com`
3. Add these DNS records to your domain provider:

```
Type: TXT
Name: updates.zeerotoai.com
Value: resend-verify=xxxxx

Type: MX  
Name: updates.zeerotoai.com
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10

Type: TXT (DKIM)
Name: resend._domainkey.updates.zeerotoai.com
Value: p=MIGfMA0GCSq...
```

4. Wait 10-60 minutes for DNS propagation
5. Verify in Resend dashboard (should auto-verify)

---

### **Step 4: Install Resend Package (if needed)**

```bash
npm install resend
# or
pnpm install resend
# or
yarn add resend
```

---

### **Step 5: Test the Setup**

#### **A. Test Contact Form:**

1. Run dev server: `npm run dev`
2. Go to `/contact` page
3. Fill out and submit form
4. Check:
   - ✅ Console shows: "✅ Contact saved to Supabase"
   - ✅ Console shows: "✅ Email notification sent via Resend"
   - ✅ Supabase dashboard shows new record in `contact_submissions`
   - ✅ Email arrives at your notification email

#### **B. Test Workflow Request:**

1. Go to dashboard (if you have workflow request form)
2. Submit a workflow request
3. Check:
   - ✅ Console shows: "✅ Workflow request saved to Supabase"
   - ✅ Console shows: "✅ Email notification sent via Resend"
   - ✅ Supabase dashboard shows new record in `workflow_requests`
   - ✅ Email arrives at your notification email

---

### **Step 6: Verify in Supabase Dashboard**

1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to **Table Editor**
4. You should see 3 tables:
   - `email_subscribers` (already existed)
   - `contact_submissions` ✨ NEW
   - `workflow_requests` ✨ NEW

5. Click on each table to see the structure

---

## 📊 New Table Structures

### `contact_submissions`

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | TEXT | Contact name |
| email | TEXT | Contact email |
| company | TEXT | Company name (optional) |
| message | TEXT | Contact message |
| status | TEXT | new, contacted, closed |
| ip_address | TEXT | Client IP (spam prevention) |
| user_agent | TEXT | Client browser info |
| submitted_at | TIMESTAMP | When submitted |
| created_at | TIMESTAMP | When created |
| updated_at | TIMESTAMP | Last updated |

### `workflow_requests`

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | TEXT | Client name |
| email | TEXT | Client email |
| service_type | TEXT | Type of service requested |
| business | TEXT | Business/Industry |
| project_details | TEXT | Project requirements |
| timeline | TEXT | Expected timeline |
| budget_range | TEXT | Budget range |
| source | TEXT | website, dashboard, etc. |
| status | TEXT | pending, in_progress, completed, cancelled |
| ip_address | TEXT | Client IP |
| user_agent | TEXT | Client browser info |
| submitted_at | TIMESTAMP | When submitted |
| created_at | TIMESTAMP | When created |
| updated_at | TIMESTAMP | Last updated |

---

## 🎯 Email Notification System

### **What Happens When Someone Submits a Form:**

1. **Form submission** → Validated
2. **Saved to Supabase** → Permanent storage
3. **Email sent via Resend** → Your team gets notified
4. **Success response** → User sees confirmation

### **Email Features:**

✅ Professional HTML templates with Zero2AI branding  
✅ Includes all form data  
✅ Reply-to set to customer email (easy to respond)  
✅ Unique submission ID for tracking  
✅ Beautiful cyan gradient header  
✅ Mobile-responsive design

### **Email Preview:**

**Contact Form Email:**
```
Subject: 🔔 New Contact Form Submission from John Doe
From: notifications@updates.zeerotoai.com
Reply-To: john@example.com

[Beautiful branded HTML with all contact details]
```

**Workflow Request Email:**
```
Subject: 🚀 New Workflow Request from Jane Smith  
From: notifications@updates.zeerotoai.com
Reply-To: jane@example.com

[Beautiful branded HTML with all project details]
```

---

## 🔍 Monitoring & Analytics

### **Supabase Dashboard:**

View all submissions in real-time:
1. Go to **Table Editor**
2. Filter by status, date, email, etc.
3. Click any row to see full details
4. Update status: new → contacted → closed

### **Helpful Views (Pre-created):**

- `recent_contacts` - Last 50 contact submissions
- `pending_workflows` - All pending workflow requests

Access via SQL Editor:
```sql
-- View recent contacts
SELECT * FROM recent_contacts;

-- View pending workflows
SELECT * FROM pending_workflows;

-- Count submissions by status
SELECT status, COUNT(*) 
FROM contact_submissions 
GROUP BY status;
```

---

## 🚨 Troubleshooting

### **Issue: Emails not sending**

**Check:**
1. DNS records verified in Resend?
2. `RESEND_API_KEY` in `.env.local`?
3. Domain `updates.zeerotoai.com` verified?
4. Check console logs for errors

**Fix:**
- Wait for DNS propagation (can take up to 48 hours)
- Verify API key is correct
- Check Resend dashboard for delivery status

---

### **Issue: Data not saving to Supabase**

**Check:**
1. Migration ran successfully?
2. Tables exist in Supabase dashboard?
3. `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`?
4. Check console logs for errors

**Fix:**
```bash
# Re-run migration
supabase db push

# Or manually run SQL in Supabase dashboard
```

---

### **Issue: "Table does not exist" error**

**Fix:**
```sql
-- Check if tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';

-- If missing, run the migration SQL manually
```

---

## 🗑️ (Optional) Migrating Old Data from Airtable

If you want to migrate existing Airtable data to Supabase:

### **Option 1: Manual CSV Export/Import**

1. Export from Airtable:
   - Go to your Airtable base
   - Click "..." → Download CSV
   - Save both "Contacts" and "Workflow Requests" tables

2. Import to Supabase:
   - Go to Supabase Table Editor
   - Click table → "Insert" → "Import from CSV"
   - Map columns (Airtable names → Supabase names)

### **Option 2: API Script** (for large datasets)

```javascript
// migrate-airtable-to-supabase.js
// (Contact me if you need this script)
```

---

## ✅ Migration Checklist

- [ ] Run Supabase migration
- [ ] Update `.env.local` (add Resend, remove Airtable)
- [ ] Add DNS records for Resend domain
- [ ] Wait for DNS propagation (10-60 min)
- [ ] Install Resend package
- [ ] Test contact form submission
- [ ] Test workflow request submission
- [ ] Verify data in Supabase dashboard
- [ ] Verify email notifications received
- [ ] (Optional) Migrate old Airtable data
- [ ] Remove Airtable environment variables
- [ ] Update any documentation referencing Airtable

---

## 🎉 Benefits of This Migration

### **Before (Airtable):**
- ❌ Extra API dependency
- ❌ Separate pricing/limits
- ❌ Data in multiple places
- ❌ More API calls = slower
- ❌ Complex rate limiting

### **After (Supabase):**
- ✅ All data in one place
- ✅ Faster queries (PostgreSQL)
- ✅ Built-in auth integration
- ✅ Real-time subscriptions possible
- ✅ Better free tier
- ✅ Direct database access
- ✅ Automatic backups
- ✅ Built-in API generation

---

## 📚 Next Steps

Now that everything is in Supabase, you can:

1. **Build Admin Dashboard**
   - View all submissions in one place
   - Update status directly
   - Filter and search
   - Analytics and reports

2. **Add More Features**
   - Email newsletters via Resend
   - Welcome emails for new subscribers
   - ROI calculator result emails
   - Automated follow-ups

3. **Optimize Workflows**
   - Auto-assign to team members
   - Integration with CRM
   - Slack notifications
   - Zapier/n8n workflows

---

## 💬 Need Help?

If you run into issues:
1. Check console logs for errors
2. Verify all environment variables
3. Check Supabase dashboard for data
4. Check Resend dashboard for email logs

---

**🚀 Ready to migrate? Start with Step 1!**

**Zero2AI** | zeerotoai.com

