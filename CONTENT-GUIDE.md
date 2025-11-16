# Content Editing Guide

All website content is centralized in `content/site.ts` for easy management.

## 🎯 Quick Reference

**Main file**: `content/site.ts`
**Translations**: `messages/en.json` and `messages/ar.json`

## Editing Content

### Brand Information

```typescript
brand: {
  name: "Zeero2AI",
  domain: "https://www.zeero2ai.com",
  email: "hello@zeero2ai.com",
  whatsapp: "https://wa.me/XXXXXXXXXXX", // ← UPDATE THIS
}
```

**To update WhatsApp:**
1. Get your WhatsApp number (with country code, no + or spaces)
2. Replace XXXXXXXXXXX with your number
3. Example: `https://wa.me/966501234567`

### Navigation Menu

```typescript
nav: [
  { slug: "/", en: "Home", ar: "الرئيسية" },
  { slug: "/services", en: "Services", ar: "الخدمات" },
  // Add more items here
]
```

### Services

Each service has:
- `id`: Unique identifier
- `icon`: Lucide icon name (see https://lucide.dev)
- `title`: English & Arabic
- `description`: English & Arabic

```typescript
services: [
  {
    id: "lead-gen",
    icon: "Target", // ← Change to any Lucide icon
    title: {
      en: "Lead Gen Automations",
      ar: "أتمتة توليد العملاء",
    },
    description: {
      en: "Your description here...",
      ar: "الوصف بالعربية...",
    },
  },
]
```

**Adding a new service:**
1. Copy an existing service object
2. Change the `id` to something unique
3. Update icon, title, and description
4. Add to the array

### Portfolio Projects

Each project has:
- `id`: Unique identifier
- `title`: English & Arabic
- `summary`: Brief description
- `metric`: Key achievement (e.g., "90% time saved")
- `tags`: Array of technology tags
- `demoUrl`: Link to demo or `#` for placeholder
- `image`: Path to project screenshot

```typescript
portfolio: [
  {
    id: "lead-scraper",
    title: {
      en: "Apollo.io to CRM Pipeline",
      ar: "خط أنابيب من Apollo.io إلى CRM",
    },
    summary: {
      en: "Automated lead enrichment...",
      ar: "نظام إثراء...",
    },
    metric: {
      en: "90% time saved",
      ar: "90٪ من الوقت المحفوظ",
    },
    tags: ["n8n", "Apollo", "HubSpot"],
    demoUrl: "https://demo-link.com", // ← UPDATE THIS
    image: "/portfolio/lead-scraper.jpg",
  },
]
```

### Social Media Links

```typescript
socials: {
  x: "https://x.com/zeero2ai", // ← UPDATE
  linkedin: "https://linkedin.com/company/zeero2ai", // ← UPDATE
  github: "https://github.com/zeero2ai", // ← UPDATE
}
```

### Tagline

```typescript
tagline: {
  en: "Build clever automations. Ship faster.",
  ar: "ابنِ أتمتة ذكية. وانطلق بسرعة.",
}
```

## Translation Files

### English (`messages/en.json`)

```json
{
  "hero": {
    "headline": "Build Clever Automations.\nShip Faster.",
    "subheadline": "We design and deploy..."
  }
}
```

### Arabic (`messages/ar.json`)

```json
{
  "hero": {
    "headline": "ابنِ أتمتة ذكية.\nوانطلق بسرعة.",
    "subheadline": "نصمم وننشر..."
  }
}
```

## Content Tips

### Writing Headlines
- Keep it short and punchy
- Use action words
- Make it benefit-focused

### Writing Descriptions
- Lead with the benefit
- Keep it under 100 words
- Use simple language
- End with a call to action

### Arabic Translation
- Use formal Arabic (فصحى) for professional tone
- Keep RTL (right-to-left) in mind
- Test thoroughly on actual devices

### Tags/Keywords
- Use actual tool names (n8n, Make.com, etc.)
- Keep it relevant
- 3-5 tags maximum per project

## Common Edits

### Change Hero Headline

**File**: `content/site.ts`

```typescript
hero: {
  headline: {
    en: "Your New Headline Here",
    ar: "عنوانك الجديد هنا",
  }
}
```

### Add a New Page

1. Create folder in `app/` (e.g., `app/blog/`)
2. Add `page.tsx` with Navbar and Footer
3. Add route to `site.nav` in `content/site.ts`
4. Add translations to `messages/en.json` and `messages/ar.json`

### Change Colors

**File**: `app/globals.css`

Find the `:root` section and modify CSS variables:
```css
:root {
  --primary: 240 5.9% 10%; /* Change these numbers */
}
```

### Modify Footer

**File**: `components/footer.tsx`

Directly edit the component or update links in `content/site.ts`

## Validation

After editing content:

1. **Check syntax**: Make sure all brackets and commas are correct
2. **Test both languages**: Switch to Arabic and verify everything displays
3. **Check mobile**: Test on mobile devices
4. **Verify links**: Click all links to ensure they work
5. **Run locally**: `pnpm dev` and test thoroughly

## Content Checklist

Before going live:

- [ ] All placeholder text replaced
- [ ] WhatsApp number updated
- [ ] Social media links updated
- [ ] Portfolio demo URLs working
- [ ] All images added and optimized
- [ ] Arabic translations reviewed
- [ ] CTAs tested
- [ ] Contact form verified
- [ ] Legal pages reviewed
- [ ] SEO titles/descriptions checked

## Need Help?

- **TypeScript errors**: Make sure to maintain the same structure
- **Translation help**: Use Google Translate as starting point, then refine
- **Icons**: Browse all available icons at https://lucide.dev
- **Support**: hello@zeero2ai.com

