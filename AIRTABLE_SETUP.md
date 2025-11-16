# Airtable Setup Guide

## Step 1: Create Your Airtable Base

1. Go to https://airtable.com
2. Create a new base called "Zero2AI Contacts" (or any name you prefer)
3. Create a table with these columns:
   - **Name** (Single line text)
   - **Email** (Email)
   - **Company** (Single line text)
   - **Message** (Long text)
   - **Submitted At** (Date with time)
   - **Status** (Single select: New, Contacted, Closed)

## Step 2: Get Your Base ID

1. Go to your base in Airtable
2. Click **Help** (?) in the top right
3. Click **API documentation**
4. The URL will look like: `https://airtable.com/[YOUR_BASE_ID]/api/docs`
5. Your Base ID starts with `app` (e.g., `appXXXXXXXXXXXXXX`)

## Step 3: Create a Personal Access Token (NEW METHOD)

⚠️ Airtable deprecated API keys. You need a Personal Access Token now.

1. Go to https://airtable.com/create/tokens
2. Click **Create new token**
3. Name it: "Zero2AI Website"
4. Add these scopes:
   - ✅ `data.records:read`
   - ✅ `data.records:write`
5. Add access to your base:
   - Click **Add a base**
   - Select your "Zero2AI Contacts" base
6. Click **Create token**
7. **COPY THE TOKEN** (you won't see it again!)

## Step 4: Update Your .env.local File

```bash
# Airtable Configuration
AIRTABLE_API_KEY=patXXXXXXXXXXXXXXXX  # Your Personal Access Token (starts with "pat")
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX    # Your Base ID (starts with "app")
AIRTABLE_TABLE_NAME=Contacts           # Your table name (default is "Contacts")
```

## Step 5: Verify Your Table Name

The table name must match EXACTLY (case-sensitive):
- ✅ If your table is called "Contacts" → use "Contacts"
- ✅ If your table is called "tblXXXXX" → use "tblXXXXX"
- ❌ "contacts" ≠ "Contacts"

## Testing Your Setup

After updating `.env.local`:
1. Stop your dev server (Ctrl+C)
2. Run `pnpm dev` again
3. Submit the contact form
4. Check your Airtable base for the new record

## Common Errors:

### Error: "INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND"
- ✅ Check your Base ID is correct (starts with `app`)
- ✅ Check your Token has access to this specific base
- ✅ Check your Table name matches exactly (case-sensitive)
- ✅ Make sure you're using a Personal Access Token (starts with `pat`)

### Error: "INVALID_REQUEST_BODY"
- ✅ Check field names in Airtable match exactly: Name, Email, Company, Message, Submitted At, Status

### Error: "AUTHENTICATION_REQUIRED"
- ✅ Your token is missing or invalid
- ✅ Create a new Personal Access Token

## Need Help?

Run this command to test your Airtable connection:

```bash
# Windows (PowerShell)
curl -X GET "https://api.airtable.com/v0/$env:AIRTABLE_BASE_ID/$env:AIRTABLE_TABLE_NAME?maxRecords=1" `
  -H "Authorization: Bearer $env:AIRTABLE_API_KEY"

# Or use this to load from .env.local
Get-Content .env.local | ForEach-Object {
  if ($_ -match "^AIRTABLE_API_KEY=(.+)$") { $key = $matches[1] }
  if ($_ -match "^AIRTABLE_BASE_ID=(.+)$") { $base = $matches[1] }
  if ($_ -match "^AIRTABLE_TABLE_NAME=(.+)$") { $table = $matches[1] }
}
curl -X GET "https://api.airtable.com/v0/$base/$table?maxRecords=1" `
  -H "Authorization: Bearer $key"
```

If successful, you'll see a JSON response with your records.
