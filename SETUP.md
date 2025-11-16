# Quick Setup Guide

## 1. Install Dependencies

```bash
pnpm install
```

## 2. Add Your Assets

### Required Files:

Place these in the `public/` folder:

1. **Logo-2.png** - Your brand logo (should be already there or renamed)
2. **brand-banner.png** - Hero background banner (rename from existing file)
3. **favicon.ico** - Browser favicon
4. **apple-touch-icon.png** - iOS icon (optional)

### Arabic Fonts:

Download IBM Plex Sans Arabic from Google Fonts and place in `public/fonts/`:
- IBMPlexSansArabic-Regular.woff2
- IBMPlexSansArabic-Medium.woff2
- IBMPlexSansArabic-SemiBold.woff2
- IBMPlexSansArabic-Bold.woff2

Download: https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic

## 3. Configure Environment Variables

Create `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key_here
```

Get your key from: https://resend.com

> **Note**: Contact form will work without this (logs to console), but emails won't send.

## 4. Update Content

Edit `content/site.ts` to customize:
- WhatsApp number (replace `XXXXXXXXXXX`)
- Social media links
- Portfolio projects
- Services descriptions
- Any other copy

## 5. Run Development Server

```bash
pnpm dev
```

Open: http://localhost:3000

## 6. Test Both Languages

- English: http://localhost:3000
- Arabic: http://localhost:3000/ar

Click the language switcher in the navbar to toggle.

## 7. Deploy to Vercel

1. Push code to GitHub
2. Import to Vercel: https://vercel.com/new
3. Add `RESEND_API_KEY` environment variable
4. Deploy!

## Checklist Before Launch

- [ ] Add all brand assets to `public/`
- [ ] Download and add Arabic fonts
- [ ] Update WhatsApp link in `content/site.ts`
- [ ] Set up Resend API key
- [ ] Update all social links
- [ ] Add real portfolio project images and links
- [ ] Test contact form submission
- [ ] Test both EN and AR versions
- [ ] Test on mobile devices
- [ ] Configure custom domain in Vercel

## Need Help?

Check the full README.md for detailed documentation, or contact hello@zeero2ai.com

