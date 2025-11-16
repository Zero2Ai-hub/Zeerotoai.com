"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowingTextBorderProps {
  children: ReactNode;
}

export function GlowingTextBorder({ children }: GlowingTextBorderProps) {
  return (
    <div className="relative inline-block px-6 py-3">
      {/* The text content */}
      {children}
      
      {/* Animated glowing border */}
      <div className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden">
        {/* Top edge */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, transparent 20%, rgba(0, 217, 255, 1) 50%, transparent 80%, transparent 100%)",
            filter: "blur(1.5px) brightness(1.3)",
            boxShadow: "0 0 16px rgba(0, 217, 255, 1), 0 0 8px rgba(0, 217, 255, 0.8)"
          }}
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Right edge */}
        <motion.div
          className="absolute top-0 right-0 bottom-0 w-px"
          style={{
            background: "linear-gradient(180deg, transparent 0%, transparent 20%, rgba(0, 217, 255, 1) 50%, transparent 80%, transparent 100%)",
            filter: "blur(1.5px) brightness(1.3)",
            boxShadow: "0 0 16px rgba(0, 217, 255, 1), 0 0 8px rgba(0, 217, 255, 0.8)"
          }}
          animate={{
            y: ["-100%", "200%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        
        {/* Bottom edge */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, transparent 20%, rgba(0, 217, 255, 1) 50%, transparent 80%, transparent 100%)",
            filter: "blur(1.5px) brightness(1.3)",
            boxShadow: "0 0 16px rgba(0, 217, 255, 1), 0 0 8px rgba(0, 217, 255, 0.8)"
          }}
          animate={{
            x: ["200%", "-100%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
        
        {/* Left edge */}
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-px"
          style={{
            background: "linear-gradient(180deg, transparent 0%, transparent 20%, rgba(0, 217, 255, 1) 50%, transparent 80%, transparent 100%)",
            filter: "blur(1.5px) brightness(1.3)",
            boxShadow: "0 0 16px rgba(0, 217, 255, 1), 0 0 8px rgba(0, 217, 255, 0.8)"
          }}
          animate={{
            y: ["200%", "-100%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
        />
      </div>
    </div>
  );
}

