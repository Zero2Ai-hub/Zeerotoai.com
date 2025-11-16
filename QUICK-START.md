# ⚡ Quick Start - Get Running in 5 Minutes

## Step 1: Install Dependencies (2 min)

```bash
pnpm install
```

> Don't have pnpm? Run: `npm install -g pnpm`
> Or use: `npm install` or `yarn install`

## Step 2: Add Your Logo & Banner (1 min)

Rename or copy your existing files to:
- `/public/Logo-2.png` - Your logo
- `/public/brand-banner.png` - Your banner image

## Step 3: Update WhatsApp Link (30 sec)

Edit `content/site.ts` line 8:
```typescript
whatsapp: "https://wa.me/XXXXXXXXXXX" // ← Change this
```

Replace `XXXXXXXXXXX` with your WhatsApp number (with country code).

Example: `https://wa.me/966501234567`

## Step 4: Start Development Server (30 sec)

```bash
pnpm dev
```

Open http://localhost:3000 🎉

## Step 5: Test Both Languages (1 min)

- English: http://localhost:3000
- Arabic: http://localhost:3000/ar

Or click the language switcher in the navbar!

---

## ✅ You're Done!

The site is now running locally with:
- ✅ Home, Services, Portfolio, About, Contact pages
- ✅ Bilingual support (EN/AR)
- ✅ Working navigation
- ✅ Responsive design
- ✅ Dark mode

## 🎯 Next Steps

### Optional but Recommended:

**Arabic Fonts** (for better Arabic text rendering):
1. Download from: https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic
2. Convert TTF → WOFF2: https://cloudconvert.com/ttf-to-woff2
3. Place in `/public/fonts/`

**Contact Form Email** (for receiving form submissions):
1. Sign up: https://resend.com
2. Get API key
3. Create `.env.local`:
   ```env
   RESEND_API_KEY=your_key_here
   ```
4. Restart dev server

**Portfolio Images**:
- Add screenshots to `/public/portfolio/`
- Update filenames in `content/site.ts`

**Social Links**:
- Edit `content/site.ts` (lines 177-181)
- Update X, LinkedIn, GitHub URLs

---

## 📚 Full Documentation

- **Setup Guide**: See `SETUP.md`
- **Content Editing**: See `CONTENT-GUIDE.md`
- **Asset Checklist**: See `ASSETS-NEEDED.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Complete Docs**: See `README.md`

## 🚀 Ready to Deploy?

```bash
pnpm build        # Build for production
pnpm start        # Test production build
```

Then follow `DEPLOYMENT.md` to deploy to Vercel!

## ❓ Problems?

**Port 3000 in use?**
```bash
pnpm dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

**Still stuck?**
- Check README.md troubleshooting section
- Email: hello@zeero2ai.com

---

**That's it! You're ready to build clever automations. Ship faster. 🚀**

