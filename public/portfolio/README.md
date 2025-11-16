# Portfolio Images

Place your project screenshots/images here.

## Expected Files

Based on `content/site.ts`, these images are referenced:

- lead-scraper.jpg
- voice-assistant.jpg
- video-pipeline.jpg

## Recommendations

**Size**: 800x600px or 1200x900px
**Format**: JPG or PNG
**Optimization**: Compress images before adding (use TinyPNG or similar)

## Adding More Projects

1. Add image file to this folder
2. Edit `content/site.ts` and add new project to `site.portfolio` array
3. Update image path in the project object

Example:
```typescript
{
  id: "new-project",
  title: { en: "Project Title", ar: "عنوان المشروع" },
  image: "/portfolio/new-project.jpg",
  // ... other fields
}
```

## Placeholder Images

If you don't have actual screenshots yet, you can use placeholder services:
- https://placehold.co/800x600/png?text=Project+Screenshot
- https://via.placeholder.com/800x600.png?text=Coming+Soon

Or temporarily use brand banner as fallback.

