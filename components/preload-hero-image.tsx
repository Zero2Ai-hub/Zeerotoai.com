/**
 * Preloads the hero banner image ONLY on the homepage
 * This avoids loading unnecessary resources on other pages
 * 
 * Uses SSR to inject preload immediately (before React hydration)
 * Critical for mobile LCP performance
 */
export function PreloadHeroImage() {
  return (
    <>
      {/* Preload hero image with high priority */}
      <link
        rel="preload"
        as="image"
        href="/brand-banner.webp"
        // @ts-ignore - fetchPriority is valid but TypeScript doesn't recognize it yet
        fetchPriority="high"
      />
      
      {/* Preload critical CSS (reduces render blocking) */}
      <link
        rel="preload"
        as="style"
        href="/_next/static/css/app/layout.css"
      />
    </>
  );
}

