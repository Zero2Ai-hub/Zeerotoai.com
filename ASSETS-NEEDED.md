# Assets Checklist

Place these files in your project before deploying.

## 📁 Public Folder (`/public`)

### Required Images

✅ **Logo-2.png**
- Location: `/public/Logo-2.png`
- Description: Main brand logo
- Recommended size: 200x200px (transparent PNG)
- Usage: Navbar, footer, favicon generation

✅ **brand-banner.png**
- Location: `/public/brand-banner.png`
- Description: Hero section background image
- Recommended size: 1920x1080px or larger
- Format: PNG or JPG
- Note: Should have gradient/circuit pattern as mentioned in brand guidelines
- Current: Rename your existing "Corporate Banner with Gradient and Circuit Pattern.png" or "YouTube Banner – Building AI Automations in Public.png"

✅ **favicon.ico**
- Location: `/public/favicon.ico`
- Description: Browser tab icon
- Size: 32x32px or 64x64px
- Format: ICO file
- Tip: Use an online converter to create from Logo-2.png

⚪ **apple-touch-icon.png** (Optional)
- Location: `/public/apple-touch-icon.png`
- Description: iOS home screen icon
- Size: 180x180px
- Format: PNG

### Arabic Fonts (Required for RTL)

Download IBM Plex Sans Arabic from Google Fonts and place in `/public/fonts/`:

✅ **IBMPlexSansArabic-Regular.woff2**
✅ **IBMPlexSansArabic-Medium.woff2**
✅ **IBMPlexSansArabic-SemiBold.woff2**
✅ **IBMPlexSansArabic-Bold.woff2**

**Download Link**: https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic

**How to get WOFF2 files:**
1. Go to Google Fonts
2. Select IBM Plex Sans Arabic
3. Click "Download family"
4. Convert TTF to WOFF2 using: https://cloudconvert.com/ttf-to-woff2
5. Place in `/public/fonts/`

### Portfolio Images (Optional but Recommended)

Create or add project screenshots:
- `/public/portfolio/lead-scraper.jpg`
- `/public/portfolio/voice-assistant.jpg`
- `/public/portfolio/video-pipeline.jpg`

Recommended size: 800x600px

## 🔐 Environment Variables

Create `.env.local` in project root:

```env
RESEND_API_KEY=your_resend_api_key_here
```

**Get Resend API Key:**
1. Sign up at https://resend.com
2. Verify your email
3. Get API key from dashboard
4. Add to `.env.local`

> **Note**: Contact form will work without this (logs to console), but emails won't send.

## ✏️ Content Updates

Edit `content/site.ts` to update:

- [ ] WhatsApp number (replace `XXXXXXXXXXX`)
- [ ] Social media links (X, LinkedIn, GitHub)
- [ ] Portfolio demo URLs (replace `#` placeholders)
- [ ] Any custom copy or translations

## Quick Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Verification

Before deploying, check:
- [ ] Logo appears in navbar
- [ ] Banner shows on homepage hero
- [ ] Favicon visible in browser tab
- [ ] Arabic font renders correctly
- [ ] Contact form submits successfully
- [ ] All pages load without errors
- [ ] Mobile responsive design works

## Need Help?

- **Documentation**: See README.md
- **Setup Guide**: See SETUP.md
- **Deployment**: See DEPLOYMENT.md
- **Support**: hello@zeero2ai.com

