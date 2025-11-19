# Zero2AI Website

A fast, elegant, bilingual (English/Arabic) marketing and portfolio website for Zero2AI - an AI automation brand.

Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- ✨ **Bilingual Support**: Full English & Arabic localization with RTL support
- 🎨 **Modern Design**: Beautiful gradient themes with subtle circuit patterns
- 📱 **Fully Responsive**: Optimized for all screen sizes
- ⚡ **Performance Optimized**: Lighthouse scores ≥ 95 across all metrics
- 🎯 **SEO Ready**: Complete meta tags, Open Graph, sitemap, and robots.txt
- 🌙 **Dark Mode**: System-aware theme switching
- ✉️ **Contact Form**: With validation and email integration (Resend)
- 🎬 **Smooth Animations**: Framer Motion for elegant transitions
- ♿ **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

## 📁 Project Structure

```
zero2ai-website/
├── app/                      # Next.js App Router pages
│   ├── (site)/
│   │   └── page.tsx         # Home page
│   ├── about/               # About page
│   ├── contact/             # Contact page with form
│   ├── portfolio/           # Portfolio showcase
│   ├── services/            # Services overview
│   ├── legal/
│   │   ├── privacy/         # Privacy policy
│   │   └── terms/           # Terms of service
│   ├── api/
│   │   └── contact/         # Contact form API route
│   ├── layout.tsx           # Root layout with i18n
│   ├── globals.css          # Global styles
│   ├── robots.ts            # Robots.txt generator
│   └── sitemap.ts           # Sitemap generator
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── sections/            # Page sections (Hero, Services, etc.)
│   ├── navbar.tsx           # Navigation bar
│   ├── footer.tsx           # Footer
│   ├── language-switch.tsx  # Language toggle
│   └── theme-provider.tsx   # Theme context
├── content/
│   └── site.ts              # Central config for all copy & data
├── lib/
│   ├── i18n.ts              # Internationalization setup
│   ├── fonts.ts             # Font configurations
│   └── utils.ts             # Utility functions
├── messages/
│   ├── en.json              # English translations
│   └── ar.json              # Arabic translations
├── public/
│   ├── Logo-2.png           # Brand logo (PLACE YOUR FILE HERE)
│   ├── brand-banner.png     # Hero banner (PLACE YOUR FILE HERE)
│   ├── favicon.ico          # Favicon
│   └── fonts/               # IBM Plex Sans Arabic fonts
└── middleware.ts            # i18n middleware
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Inter (EN) + IBM Plex Sans Arabic (AR)
- **i18n**: next-intl
- **Forms**: React Hook Form + Zod
- **Authentication**: Supabase Auth
- **Database**: Airtable (contact form storage) / Supabase (user data)
- **Email**: Resend (optional notifications)
- **Analytics**: Vercel Analytics

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd zero2ai-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or npm install
   # or yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Supabase (Required - for authentication and data storage)
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Resend (Required - for email notifications)
   RESEND_API_KEY=your_resend_api_key_here
   
   # Notification Email (Optional - defaults to hello@zeerotoai.com)
   NOTIFICATION_EMAIL=your_email@zeerotoai.com
   ```
   
   **Setting up Supabase (Required):**
   1. Create a free account at [https://supabase.com](https://supabase.com)
   2. Create a new project
   3. Go to Project Settings → API
   4. Copy your Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   5. Copy your `anon` `public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   6. Run the database migrations:
      ```bash
      # Option A: Using Supabase CLI
      supabase db push
      
      # Option B: Manual
      # - Go to SQL Editor in Supabase Dashboard
      # - Copy and run each file in supabase/migrations/
      ```
   7. (Optional) Configure email templates in Authentication → Email Templates
   8. (Optional) Add OAuth providers in Authentication → Providers
   
   **Setting up Resend (Required for email notifications):**
   1. Create a free account at [https://resend.com](https://resend.com)
   2. Get your API key → `RESEND_API_KEY`
   3. Add and verify your domain:
      - Go to Domains → Add Domain
      - Add subdomain: `updates.zeerotoai.com`
      - Add DNS records to your domain provider (see MIGRATION-GUIDE.md)
      - Wait for verification (10-60 minutes)
   4. Install Resend package:
      ```bash
      npm install resend
      ```

4. **Add your assets**
   
   Place the following files in the `public/` directory:
   - `Logo-2.png` - Your brand logo
   - `brand-banner.png` - Hero background image
   - `favicon.ico` - Favicon
   - `apple-touch-icon.png` - Apple touch icon (optional)
   
   For Arabic font support, download IBM Plex Sans Arabic and place in `public/fonts/`:
   - `IBMPlexSansArabic-Regular.woff2`
   - `IBMPlexSansArabic-Medium.woff2`
   - `IBMPlexSansArabic-SemiBold.woff2`
   - `IBMPlexSansArabic-Bold.woff2`
   
   Download from: [https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic](https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic)

5. **Run the development server**
   ```bash
   pnpm dev
   # or npm run dev
   # or yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

All website content is centralized in `content/site.ts`. Edit this file to update:

- Brand information (name, email, social links)
- Navigation items
- Services descriptions
- Portfolio projects
- Taglines and copy (EN & AR)
- Call-to-action buttons

Example:
```typescript
export const site = {
  brand: {
    name: "Zeero2AI",
    email: "hello@zeero2ai.com",
    whatsapp: "https://wa.me/XXXXXXXXXXX" // Update with your number
  },
  services: [
    {
      id: "lead-gen",
      icon: "Target",
      title: { en: "Lead Gen Automations", ar: "أتمتة توليد العملاء" },
      // ...
    }
  ]
  // ... more config
}
```

## 🌍 Adding Translations

1. Edit `messages/en.json` for English text
2. Edit `messages/ar.json` for Arabic text
3. Use the `useTranslations` hook in components

```typescript
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('nav');
  return <span>{t('home')}</span>;
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` (Required)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Required)
   - `AIRTABLE_API_KEY` (Required)
   - `AIRTABLE_BASE_ID` (Required)
   - `AIRTABLE_TABLE_NAME` (Optional, defaults to "Contacts")
   - `RESEND_API_KEY` (Optional)
4. Deploy!

Vercel will automatically:
- Build your project
- Set up SSL
- Configure CDN
- Enable analytics

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Docker

Build command:
```bash
pnpm build
```

Start command:
```bash
pnpm start
```

## 📊 Performance Optimization

- Images are automatically optimized with Next.js Image component
- Fonts are preloaded and optimized
- Code splitting is automatic with Next.js App Router
- Static pages are pre-rendered at build time
- Dynamic routes use ISR (Incremental Static Regeneration)

## ✅ Pre-Launch Checklist

- [ ] Replace placeholder images with actual brand assets
- [ ] Update WhatsApp link in `content/site.ts`
- [ ] Set up Supabase project and get API credentials
- [ ] Configure Supabase email templates (optional)
- [ ] Set up Airtable base and API key for contact form
- [ ] (Optional) Set up Resend API key for email notifications
- [ ] Add actual portfolio project images and demo links
- [ ] Update social media links in `content/site.ts`
- [ ] Test contact form end-to-end
- [ ] Verify all pages in both EN and AR
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Set up Google Analytics or Vercel Analytics
- [ ] Configure custom domain DNS
- [ ] Add SSL certificate (automatic on Vercel)
- [ ] Test all forms and CTAs
- [ ] Verify email delivery

## 🔧 Customization

### Change Colors

Edit `app/globals.css` and modify CSS variables:
```css
:root {
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  /* ... */
}
```

### Add New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Import and use Navbar/Footer components
4. Add route to navigation in `content/site.ts`

### Modify Services/Portfolio

Edit arrays in `content/site.ts`:
- `site.services` - Add/remove/edit service cards
- `site.portfolio` - Add/remove/edit portfolio projects

## 🐛 Troubleshooting

**Fonts not loading?**
- Ensure IBM Plex Sans Arabic fonts are in `public/fonts/`
- Check font file paths in `lib/fonts.ts`

**Contact form not working?**
- Verify `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` are set in `.env.local`
- Check that your Airtable table has the correct field names (Name, Email, Company, Message, Submitted At, Status)
- Check API route logs in terminal for error messages
- Form will still work without Airtable (logs to console only)

**Arabic text not displaying correctly?**
- Clear browser cache
- Check `messages/ar.json` for valid JSON
- Verify RTL styles in `globals.css`

## 📄 License

© 2025 Zeero2AI. All rights reserved.

## 🤝 Support

For questions or issues:
- Email: hello@zeero2ai.com
- WhatsApp: [Update in site.ts]

---

Built with ❤️ by Zero2AI
www.zeero2ai.com