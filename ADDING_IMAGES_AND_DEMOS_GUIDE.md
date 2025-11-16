# 📸 Guide: Adding Images & Demo Links to Projects

## 📁 File Location

**Main file to edit:** `content/projects.ts`

This file contains all your project data in an array. Each project has fields for images and demo links.

---

## 🎬 Adding Demo Links

### Where to Add

Find your project in `content/projects.ts` and locate the `demoUrl` field:

```typescript
{
  slug: "lead-generation-email-outreach",
  id: "lead-generation-email-outreach",
  title: {
    en: "Lead Generation & Email Outreach Automation",
    ar: "أتمتة توليد العملاء المحتملين والتواصل عبر البريد الإلكتروني",
  },
  // ... other fields ...
  demoUrl: "https://your-demo-link-here", // ← CHANGE THIS
}
```

### How to Add

**Replace the placeholder with your actual demo URL:**

```typescript
// ❌ BEFORE (placeholder - button will be hidden):
demoUrl: "https://your-demo-link-here",

// ✅ AFTER (valid URL - button will show):
demoUrl: "https://youtu.be/your-video-id",
// or
demoUrl: "https://www.loom.com/share/your-loom-id",
// or
demoUrl: "https://your-live-demo-site.com",
```

### What Happens

**When `demoUrl` is valid:**
- ✅ "View Demo" button appears in hero section
- ✅ "Watch Demo" button appears in bottom CTA section
- ✅ Both buttons link to your demo URL

**When `demoUrl` is a placeholder:**
- ❌ Demo buttons are completely hidden
- ✅ "Get This Project" becomes the primary button (solid cyan)

### Valid vs Invalid Demo URLs

**✅ Valid (buttons will show):**
- `https://youtu.be/abc123`
- `https://www.loom.com/share/xyz789`
- `https://vimeo.com/123456789`
- `https://www.zero2ai.com` (actual live site)

**❌ Invalid (buttons will hide):**
- `https://your-demo-link-here` (placeholder)
- `https://demo-placeholder` (placeholder)
- `#` (empty link)

---

## 🖼️ Adding Gallery Images

### Where to Add

Find the `gallery` array in your project:

```typescript
{
  slug: "lead-generation-email-outreach",
  // ... other fields ...
  gallery: [], // ← ADD IMAGES HERE
}
```

### How to Add Images

#### Step 1: Upload Images to Your Project

**Recommended folder:** `public/portfolio/`

**Create project-specific folders:**
```
public/
  portfolio/
    lead-gen/
      screenshot-1.jpg
      screenshot-2.jpg
      screenshot-3.jpg
      screenshot-4.jpg
    chatbot/
      demo-1.png
      demo-2.png
    autodemo/
      interface.jpg
      results.jpg
```

#### Step 2: Add Image Paths to Gallery Array

```typescript
gallery: [
  "/portfolio/lead-gen/screenshot-1.jpg",
  "/portfolio/lead-gen/screenshot-2.jpg",
  "/portfolio/lead-gen/screenshot-3.jpg",
  "/portfolio/lead-gen/screenshot-4.jpg",
]
```

**⚠️ Important:** Paths must start with `/` (relative to `public/` folder)

### What Happens

**When `gallery` has images:**
- ✅ Gallery section appears on project detail page
- ✅ Images display in a responsive grid

**When `gallery` is empty:**
- ❌ Entire gallery section is hidden (no empty space)

---

## 📐 Gallery Layout Rules (Automatic)

The gallery automatically adjusts based on the number of images:

| Images | Desktop Layout | Mobile Layout |
|--------|---------------|---------------|
| **1 image** | Full width (1 column) | Full width |
| **2 images** | Side by side (2 columns) | Stacked |
| **3 images** | 3 columns | Stacked |
| **4+ images** | 2 columns (masonry) | Stacked |

**You don't need to do anything!** The layout is dynamic and responsive.

---

## 📝 Complete Example

Here's a full project with images and demo link:

```typescript
{
  slug: "lead-generation-email-outreach",
  id: "lead-generation-email-outreach",
  badge: {
    en: "90% automation",
    ar: "90٪ أتمتة",
  },
  title: {
    en: "Lead Generation & Email Outreach Automation",
    ar: "أتمتة توليد العملاء المحتملين والتواصل عبر البريد الإلكتروني",
  },
  summary: {
    en: "End-to-end pipeline that scrapes LinkedIn...",
    ar: "خط أنابيب شامل يستخرج LinkedIn...",
  },
  metric: {
    en: "Personalized outreach at scale",
    ar: "تواصل شخصي على نطاق واسع",
  },
  metrics: [{ label: "Automation", value: "90%" }],
  tags: ["Make.com", "Phantombuster", "Instantly", "OpenAI"],
  href: "/portfolio/lead-generation-email-outreach",
  
  // ✅ ADD YOUR DEMO LINK HERE:
  demoUrl: "https://youtu.be/abc123xyz",
  
  // Main project image (for portfolio grid):
  image: "/portfolio/lead-gen-outreach.jpg",
  
  // ✅ ADD YOUR GALLERY IMAGES HERE:
  gallery: [
    "/portfolio/lead-gen/screenshot-1.jpg",
    "/portfolio/lead-gen/screenshot-2.jpg",
    "/portfolio/lead-gen/screenshot-3.jpg",
    "/portfolio/lead-gen/screenshot-4.jpg",
  ],
}
```

---

## 🎯 Quick Checklist

### For Each Project:

- [ ] Upload images to `public/portfolio/[project-name]/`
- [ ] Add image paths to `gallery` array in `content/projects.ts`
- [ ] Add demo URL to `demoUrl` field (YouTube, Loom, or live site)
- [ ] Save the file
- [ ] Test the project page to see gallery and demo buttons

---

## 🚀 Where Images Appear

### 1. **Portfolio Grid** (main portfolio page)
- Uses `image` field (single main image)
- Example: `/portfolio/lead-gen-outreach.jpg`

### 2. **Project Detail Page - Gallery Section**
- Uses `gallery` array (multiple images)
- Only shows if `gallery` has at least 1 image

### 3. **Demo Buttons**
- Hero section (top of project page)
- CTA section (bottom of project page)
- Only show if `demoUrl` is valid

---

## 💡 Pro Tips

### Image Best Practices:

1. **File Format:** Use `.jpg` for photos, `.png` for screenshots with text
2. **File Size:** Optimize images (max 500KB recommended)
3. **Dimensions:** 
   - Portfolio grid image: 1200x800px
   - Gallery images: 1600x900px (16:9 aspect ratio)
4. **Naming:** Use descriptive names: `lead-gen-dashboard.jpg` not `img1.jpg`

### Demo Link Best Practices:

1. **YouTube:** Short videos (2-3 min) work best
2. **Loom:** Great for quick walkthroughs
3. **Live Sites:** Use if the project is a live website
4. **Private Videos:** Make sure they're publicly accessible!

### Organization Tips:

```
public/portfolio/
  ├── lead-gen/           # Project-specific folder
  │   ├── main.jpg       # Main grid image
  │   ├── step-1.jpg     # Gallery images
  │   ├── step-2.jpg
  │   └── results.jpg
  ├── chatbot/
  │   ├── main.png
  │   └── conversation.png
  └── autodemo/
      └── interface.jpg
```

---

## 🔄 Testing Your Changes

1. **Save** `content/projects.ts`
2. **Refresh** your browser
3. **Check:**
   - Portfolio page shows main image
   - Project detail page shows gallery (if images added)
   - Demo buttons appear (if valid URL added)

---

## 🆘 Troubleshooting

### Gallery not showing?
- ✅ Check `gallery` array is not empty: `gallery: []`
- ✅ Verify image paths start with `/`
- ✅ Confirm images exist in `public/` folder

### Demo buttons not showing?
- ✅ Check `demoUrl` is not a placeholder
- ✅ Verify URL is valid and accessible
- ✅ Remove any `your-demo-link-here` text

### Images not loading?
- ✅ Check file names match exactly (case-sensitive!)
- ✅ Verify images are in `public/portfolio/` folder
- ✅ Try absolute path: `https://yoursite.com/portfolio/image.jpg`

---

## 📋 Summary

**To add a complete project:**

1. Upload images → `public/portfolio/[project]/`
2. Edit `content/projects.ts`:
   - Add `demoUrl`: `"https://youtu.be/..."`
   - Add `gallery`: `["/portfolio/project/img1.jpg", ...]`
3. Save and test!

**That's it!** The website handles everything else automatically. 🎉

---

**Need help?** Check the existing projects in `content/projects.ts` for examples!

