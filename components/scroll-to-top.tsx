"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    // Check on mount
    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{ 
        position: 'fixed', 
        bottom: '2rem', 
        right: '2rem', 
        zIndex: 50,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.2s ease-in-out'
      }}
      className="p-3 rounded-full bg-primary text-background shadow-lg active:scale-95 transition-transform touch-manipulation"
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

