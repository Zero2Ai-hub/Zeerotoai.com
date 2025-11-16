# 👋 Welcome to Your Zeero2AI Website!

## 🎉 What You Have

A complete, production-ready website built with:
- Next.js 15 + TypeScript
- Bilingual (English/Arabic)
- 6 pages + 2 legal pages
- Contact form with validation
- SEO optimized
- Fully responsive
- Dark mode

## 🚀 Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
pnpm install
```

### 2️⃣ Add Your Assets
- Copy your logo to: `/public/Logo-2.png`
- Copy your banner to: `/public/brand-banner.png`

### 3️⃣ Run It
```bash
pnpm dev
```

**Open**: http://localhost:3000

That's it! 🎊

---

## 📖 Documentation Guide

**New to the project?** Read in this order:

1. **[QUICK-START.md](QUICK-START.md)** ⚡
   - Get running in 5 minutes
   - Minimal setup required

2. **[SETUP.md](SETUP.md)** 🔧
   - Complete setup instructions
   - Environment variables
   - Asset placement

3. **[CONTENT-GUIDE.md](CONTENT-GUIDE.md)** ✏️
   - How to edit content
   - Update services, portfolio, copy
   - Manage translations

4. **[ASSETS-NEEDED.md](ASSETS-NEEDED.md)** 📁
   - Checklist of required files
   - Where to place each asset
   - Download links for fonts

5. **[DEPLOYMENT.md](DEPLOYMENT.md)** 🌐
   - Deploy to Vercel (recommended)
   - Custom domain setup
   - Environment variables

6. **[README.md](README.md)** 📚
   - Full project documentation
   - Tech stack details
   - Troubleshooting

7. **[PROJECT-SUMMARY.md](PROJECT-SUMMARY.md)** 📊
   - What's been built
   - Project structure
   - Technical details

---

## ⚡ Quick Commands

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm start        # Run production build

# Utilities
pnpm lint         # Check code quality
```

---

## 📋 Before You Deploy

### Must Do:
- [ ] Add Logo-2.png to `/public/`
- [ ] Add brand-banner.png to `/public/`
- [ ] Update WhatsApp number in `content/site.ts`
- [ ] Test contact form

### Should Do:
- [ ] Download and add Arabic fonts
- [ ] Get Resend API key for contact form
- [ ] Update social media links
- [ ] Add portfolio project images
- [ ] Test on mobile device

### Nice to Have:
- [ ] Add favicon.ico
- [ ] Add portfolio demo links
- [ ] Customize colors/theme
- [ ] Add Google Analytics

---

## 🗂️ Project Structure

```
zeero2ai-website/
├── app/              # All pages (Home, About, Services, etc.)
├── components/       # Reusable components
├── content/          # ⭐ EDIT THIS: All website content
├── messages/         # Translations (EN/AR)
├── public/           # ⭐ ADD ASSETS HERE
└── [configs]         # Next.js, TypeScript, Tailwind
```

**Key file**: `content/site.ts` - Edit this to update all content!

---

## 🎨 What's Included

### Pages
✅ Home (Hero, Services, Portfolio, CTA)
✅ Services (6 automation services)
✅ Portfolio (3 project showcases)
✅ About (Mission, approach, tools)
✅ Contact (Form + direct contact)
✅ Privacy Policy
✅ Terms of Service

### Features
✅ English & Arabic (with RTL)
✅ Dark/Light mode
✅ Responsive design
✅ Contact form with validation
✅ SEO optimized
✅ Animated sections
✅ Icon library (Lucide)

---

## ❓ Need Help?

### Common Issues

**Dependencies won't install?**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Port 3000 already in use?**
```bash
pnpm dev -- -p 3001
```

**Arabic text looks weird?**
- Add IBM Plex Sans Arabic fonts to `/public/fonts/`
- See ASSETS-NEEDED.md for download links

**Contact form not sending emails?**
- You need to set up Resend API key
- See SETUP.md for instructions
- Form will still work (logs to console)

### Still Stuck?

1. Check [README.md](README.md) troubleshooting section
2. Review [SETUP.md](SETUP.md) step-by-step
3. Email: hello@zeero2ai.com

---

## 🚀 Ready to Deploy?

When you're ready to go live:

1. **Build**: `pnpm build`
2. **Test**: `pnpm start`
3. **Deploy**: Follow [DEPLOYMENT.md](DEPLOYMENT.md)

Recommended: Deploy to Vercel (automatic, free, fast)

---

## 📞 Support

**Email**: hello@zeero2ai.com
**Domain**: zeero2ai.com
**Built with**: Next.js, TypeScript, Tailwind CSS

---

**🎊 You're all set! Happy building!**

Build clever automations. Ship faster. 🚀

