"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down (with throttling for better performance)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const toggleVisibility = () => {
      // Throttle scroll events for better mobile performance
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, 100);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 50 }}
          className="p-3 rounded-full bg-primary text-background shadow-lg active:scale-95 transition-transform touch-manipulation"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

