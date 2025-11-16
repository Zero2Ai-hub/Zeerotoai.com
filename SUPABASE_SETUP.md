# Supabase Authentication Setup Guide

This guide will help you set up Supabase authentication for your Zero2AI website in under 10 minutes.

## 🚀 Quick Start

### Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub (recommended) or email
4. Click "New Project"
5. Fill in:
   - **Name**: `zero2ai-production` (or any name you prefer)
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to your users
   - **Pricing Plan**: Free (up to 50,000 monthly active users)
6. Click "Create new project" (takes ~2 minutes)

### Step 2: Get Your API Credentials

1. Once your project is ready, go to **Project Settings** (⚙️ icon in sidebar)
2. Click **API** in the left menu
3. You'll see two important values:

   ```
   Project URL: https://xxxxxxxxxxxxx.supabase.co
   anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

4. Copy these values!

### Step 3: Add to Your .env.local

Create or update `.env.local` in your project root:

```env
# Supabase Authentication
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Your other environment variables...
AIRTABLE_API_KEY=...
AIRTABLE_BASE_ID=...
```

### Step 4: Configure Email Settings (Optional but Recommended)

By default, Supabase sends emails from their domain. To use your own domain:

1. Go to **Authentication** → **Email Templates**
2. You'll see templates for:
   - Confirm signup
   - Reset password
   - Magic link
3. Customize these templates with your branding
4. (Optional) Configure SMTP in **Project Settings** → **Auth** → **SMTP Settings**

### Step 5: Test It Out!

1. Restart your dev server:
   ```bash
   pnpm dev
   ```

2. Navigate to `http://localhost:3000/signup`

3. Create a test account

4. Check your email for confirmation (if you enabled email confirmation)

5. You should be redirected to `/dashboard` ✨

## 🎨 What's Included

Your authentication system now has:

- ✅ **Login Page** (`/login`)
  - Email/password authentication
  - Password visibility toggle
  - "Forgot password?" link
  - Automatic redirect to dashboard
  - Error handling

- ✅ **Signup Page** (`/signup`)
  - User registration with full name
  - Password confirmation
  - Email verification
  - Success feedback
  - Beautiful Zero2AI-themed UI

- ✅ **Dashboard** (`/dashboard`)
  - Protected route (login required)
  - User profile information
  - Quick action links
  - Sign out functionality

- ✅ **Route Protection**
  - Middleware automatically protects `/dashboard` and `/profile`
  - Redirects to login if not authenticated
  - Redirects away from auth pages if already logged in

## 🔐 Security Features

- **Row Level Security (RLS)**: Supabase automatically creates user auth tables with RLS
- **JWT Tokens**: Secure, short-lived tokens with automatic refresh
- **Password Requirements**: Minimum 6 characters (customizable)
- **Email Verification**: Optional but recommended
- **HTTPS Only**: All API calls are encrypted

## 🎯 Next Steps

### Add OAuth Providers (Optional)

Want to add "Sign in with Google" or GitHub?

1. Go to **Authentication** → **Providers**
2. Enable your desired provider (Google, GitHub, etc.)
3. Follow the setup instructions for each provider
4. Update your login/signup pages to include OAuth buttons

### Customize Email Templates

1. Go to **Authentication** → **Email Templates**
2. Edit the HTML templates
3. Add your Zero2AI branding
4. Test the emails

### Add User Profiles

Want to store additional user data?

1. Create a `profiles` table in Supabase:
   ```sql
   create table profiles (
     id uuid references auth.users on delete cascade,
     full_name text,
     company text,
     avatar_url text,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     primary key (id)
   );
   
   -- Enable RLS
   alter table profiles enable row level security;
   
   -- Policy: Users can view their own profile
   create policy "Users can view own profile"
     on profiles for select
     using (auth.uid() = id);
   
   -- Policy: Users can update their own profile
   create policy "Users can update own profile"
     on profiles for update
     using (auth.uid() = id);
   ```

2. Create a profile when user signs up (use database trigger or do it in your code)

### Migrate from Airtable to Supabase (Future)

When you're ready to move your contact form data to Supabase:

1. Create a `contacts` table in Supabase
2. Update `/app/api/contact/route.ts` to use Supabase instead of Airtable
3. Export existing data from Airtable
4. Import into Supabase
5. You'll have everything in one place! 🎉

## 🐛 Troubleshooting

**Can't login after signup?**
- Check if email confirmation is required (disabled by default)
- Go to **Authentication** → **Providers** → **Email** → Disable "Confirm email"

**Environment variables not working?**
- Make sure to restart your dev server after adding `.env.local`
- Check that variable names start with `NEXT_PUBLIC_` for client-side usage

**Middleware redirect loop?**
- Clear your browser cookies
- Check middleware.ts for conflicting redirect logic

**Email confirmation not working?**
- Check spam folder
- Verify email templates in Supabase dashboard
- Test with a real email provider (not throwaway services)

## 📚 Helpful Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Auth Helpers for Next.js](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)

## 🎉 You're All Set!

Your authentication system is now fully functional and production-ready. Users can:
- ✅ Sign up with email/password
- ✅ Login to their dashboard
- ✅ View their profile
- ✅ Sign out securely

All with beautiful Zero2AI-branded pages! 🚀

