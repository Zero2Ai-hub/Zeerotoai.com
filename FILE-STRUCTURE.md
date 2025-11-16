# 📁 Project File Structure

Complete visual map of the Zeero2AI website project.

## 🌲 Full File Tree

```
zeero2ai-website/
│
├── 📄 Documentation (Read These First!)
│   ├── START-HERE.md ⭐          # Start here!
│   ├── QUICK-START.md            # 5-minute setup
│   ├── SETUP.md                  # Detailed setup
│   ├── README.md                 # Full documentation
│   ├── CONTENT-GUIDE.md          # Edit content
│   ├── ASSETS-NEEDED.md          # Asset checklist
│   ├── DEPLOYMENT.md             # Deploy guide
│   ├── PROJECT-SUMMARY.md        # What's built
│   ├── DOCUMENTATION-INDEX.md    # Doc navigation
│   └── FILE-STRUCTURE.md         # This file
│
├── ⚙️ Configuration Files
│   ├── package.json              # Dependencies
│   ├── tsconfig.json             # TypeScript config
│   ├── next.config.mjs           # Next.js config
│   ├── tailwind.config.ts        # Tailwind config
│   ├── postcss.config.mjs        # PostCSS config
│   ├── middleware.ts             # i18n routing
│   ├── next-env.d.ts             # Next.js types
│   ├── .eslintrc.json            # ESLint rules
│   ├── .gitignore                # Git exclusions
│   └── .gitkeep                  # Empty dir keeper
│
├── 📱 app/ (Next.js App Router - All Pages)
│   ├── layout.tsx ⭐             # Root layout + metadata
│   ├── page.tsx ⭐               # Home page
│   ├── globals.css               # Global styles
│   ├── robots.ts                 # SEO robots.txt
│   ├── sitemap.ts                # SEO sitemap
│   │
│   ├── 📁 about/
│   │   └── page.tsx              # About page
│   │
│   ├── 📁 services/
│   │   ├── page.tsx              # Services page
│   │   └── services-client.tsx  # Client component
│   │
│   ├── 📁 portfolio/
│   │   ├── page.tsx              # Portfolio page
│   │   └── portfolio-client.tsx # Client component
│   │
│   ├── 📁 contact/
│   │   ├── page.tsx              # Contact page
│   │   └── contact-form.tsx     # Form component
│   │
│   ├── 📁 legal/
│   │   ├── privacy/
│   │   │   └── page.tsx          # Privacy policy
│   │   └── terms/
│   │       └── page.tsx          # Terms of service
│   │
│   └── 📁 api/
│       └── contact/
│           └── route.ts          # Contact form API
│
├── 🧩 components/ (Reusable Components)
│   ├── navbar.tsx ⭐            # Navigation bar
│   ├── footer.tsx ⭐            # Footer
│   ├── language-switch.tsx      # EN/AR toggle
│   ├── theme-provider.tsx       # Dark mode
│   │
│   ├── 📁 ui/ (shadcn/ui components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   ├── badge.tsx
│   │   └── dialog.tsx
│   │
│   └── 📁 sections/ (Page sections)
│       ├── hero.tsx              # Home hero
│       ├── services-preview.tsx # Services grid
│       ├── portfolio-preview.tsx # Portfolio grid
│       └── cta-section.tsx      # Call-to-action
│
├── 📝 content/ (Website Content - EDIT THIS!)
│   └── site.ts ⭐⭐⭐            # Main content config
│
├── 🌍 messages/ (Translations)
│   ├── en.json                   # English
│   └── ar.json                   # Arabic
│
├── 🛠️ lib/ (Utilities & Helpers)
│   ├── utils.ts                  # Utility functions
│   ├── i18n.ts                   # i18n setup
│   └── fonts.ts                  # Font configs
│
└── 🎨 public/ (Static Assets - ADD YOUR FILES HERE!)
    ├── Logo-2.png ⚠️            # ADD: Your logo
    ├── brand-banner.png ⚠️      # ADD: Hero banner
    ├── favicon.ico ⚠️           # ADD: Favicon
    ├── robots.txt                # SEO (auto-generated)
    │
    ├── 📁 fonts/ ⚠️             # ADD: Arabic fonts
    │   ├── README.md             # Font setup guide
    │   ├── IBMPlexSansArabic-Regular.woff2 ⚠️
    │   ├── IBMPlexSansArabic-Medium.woff2 ⚠️
    │   ├── IBMPlexSansArabic-SemiBold.woff2 ⚠️
    │   └── IBMPlexSansArabic-Bold.woff2 ⚠️
    │
    └── 📁 portfolio/ ⚠️         # ADD: Project images
        ├── README.md             # Image guide
        ├── lead-scraper.jpg ⚠️
        ├── voice-assistant.jpg ⚠️
        └── video-pipeline.jpg ⚠️
```

## 📊 Stats

- **Total Directories**: 15
- **Total Files**: 60+
- **Pages**: 8 (6 main + 2 legal)
- **Components**: 15+
- **Documentation**: 10 files
- **Config Files**: 10+

## 🎯 Key Files to Know

### ⭐ Critical (Edit These)

1. **`content/site.ts`** - All website content
   - Services, portfolio, copy, links
   - WhatsApp number, social links
   - Translations for all content

2. **`messages/en.json`** - English UI text
3. **`messages/ar.json`** - Arabic UI text
4. **`app/layout.tsx`** - SEO metadata, fonts
5. **`package.json`** - Dependencies

### 🖼️ Assets (Add These)

1. **`public/Logo-2.png`** - Your logo
2. **`public/brand-banner.png`** - Hero image
3. **`public/fonts/*.woff2`** - Arabic fonts
4. **`public/portfolio/*.jpg`** - Project images

### ⚙️ Configuration (Usually Don't Touch)

1. `next.config.mjs` - Next.js settings
2. `tailwind.config.ts` - Tailwind theme
3. `middleware.ts` - i18n routing
4. `tsconfig.json` - TypeScript

## 🗂️ Directory Purpose

| Directory | Purpose | Edit? |
|-----------|---------|-------|
| `/app` | All pages & routes | Yes (pages) |
| `/components` | Reusable UI components | Sometimes |
| `/content` | ⭐ Website content | **YES** |
| `/messages` | Translations | **YES** |
| `/lib` | Utilities & helpers | Rarely |
| `/public` | ⭐ Static assets | **YES** |
| Root | Config & docs | Rarely |

## 📝 What Each Page Does

### Pages (`/app`)

| File | URL | Purpose |
|------|-----|---------|
| `page.tsx` | `/` | Home (hero, services, portfolio) |
| `about/page.tsx` | `/about` | About page (mission, approach) |
| `services/page.tsx` | `/services` | All services detail |
| `portfolio/page.tsx` | `/portfolio` | Project showcase |
| `contact/page.tsx` | `/contact` | Contact form |
| `legal/privacy/page.tsx` | `/legal/privacy` | Privacy policy |
| `legal/terms/page.tsx` | `/legal/terms` | Terms of service |

### Components (`/components`)

| File | Used In | Purpose |
|------|---------|---------|
| `navbar.tsx` | All pages | Top navigation |
| `footer.tsx` | All pages | Bottom footer |
| `language-switch.tsx` | Navbar | EN/AR toggle |
| `sections/hero.tsx` | Home | Hero section |
| `sections/services-preview.tsx` | Home | Service cards |
| `sections/portfolio-preview.tsx` | Home | Portfolio cards |
| `sections/cta-section.tsx` | Home | Call-to-action |
| `ui/*` | Various | UI primitives |

## 🔍 Finding What You Need

### "Where is...?"

**...the homepage?**
→ `app/page.tsx`

**...the navigation menu?**
→ `components/navbar.tsx`

**...the hero section?**
→ `components/sections/hero.tsx`

**...all the content?**
→ `content/site.ts` ⭐

**...translations?**
→ `messages/en.json` and `messages/ar.json`

**...the contact form?**
→ `app/contact/contact-form.tsx`

**...API endpoint?**
→ `app/api/contact/route.ts`

**...styles?**
→ `app/globals.css` and Tailwind classes

**...images?**
→ `public/` folder

**...fonts?**
→ `lib/fonts.ts` and `public/fonts/`

## 🎨 Styling Files

| File | Purpose |
|------|---------|
| `app/globals.css` | Global styles, theme variables |
| `tailwind.config.ts` | Tailwind configuration |
| Components | Inline Tailwind classes |

## 🌍 i18n Files

| File | Purpose |
|------|---------|
| `lib/i18n.ts` | i18n configuration |
| `middleware.ts` | Locale routing |
| `messages/en.json` | English translations |
| `messages/ar.json` | Arabic translations |
| `content/site.ts` | Bilingual content |

## ⚡ Quick Navigation

### For Content Editors
```
content/site.ts          (Main content)
messages/en.json         (English UI)
messages/ar.json         (Arabic UI)
public/                  (Images)
```

### For Developers
```
app/                     (Pages)
components/              (Components)
lib/                     (Utilities)
[config files]           (Settings)
```

### For Designers
```
public/                  (Assets)
app/globals.css          (Styles)
tailwind.config.ts       (Theme)
```

## 📦 What Gets Deployed

When you run `pnpm build`, Next.js creates:
- `.next/` folder (build output)
- Optimized pages
- Compiled TypeScript
- Bundled assets

**Don't edit** `.next/` - it's auto-generated!

## 🚫 What's Ignored

These are in `.gitignore`:
- `node_modules/` - Dependencies
- `.next/` - Build output
- `.env.local` - Secrets
- `*.log` - Logs

## 📏 Project Size

Estimated:
- **Source code**: ~5,000 lines
- **Dependencies**: ~150 packages
- **Build output**: ~2-3 MB
- **Development**: ~500 MB (with node_modules)

## 💡 Tips

1. **Edit content**: Always start with `content/site.ts`
2. **Add pages**: Create in `app/` folder
3. **Add components**: Create in `components/`
4. **Add assets**: Put in `public/`
5. **Need help**: Check documentation files

---

**Legend:**
- ⭐ = Very important
- ⚠️ = Action needed (add file)
- 📁 = Directory
- 📄 = File

---

For detailed explanations, see:
- **[README.md](README.md)** - Full docs
- **[PROJECT-SUMMARY.md](PROJECT-SUMMARY.md)** - Architecture
- **[CONTENT-GUIDE.md](CONTENT-GUIDE.md)** - Content editing

