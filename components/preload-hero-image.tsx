"use client";

import { useEffect } from "react";

/**
 * Preloads the hero banner image ONLY on the homepage
 * This avoids loading unnecessary resources on other pages
 */
export function PreloadHeroImage() {
  useEffect(() => {
    // Check if preload link already exists
    const existingPreload = document.querySelector('link[href="/brand-banner.webp"]');
    if (existingPreload) return;

    // Create and inject preload link with high priority
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = "/brand-banner.webp";
    preloadLink.setAttribute("fetchpriority", "high");
    
    // Insert at the beginning of head for priority
    document.head.insertBefore(preloadLink, document.head.firstChild);

    // Cleanup on unmount
    return () => {
      if (preloadLink.parentNode) {
        preloadLink.parentNode.removeChild(preloadLink);
      }
    };
  }, []);

  return null; // This component renders nothing
}

