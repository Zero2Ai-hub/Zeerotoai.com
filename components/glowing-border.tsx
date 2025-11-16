"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingBorder({ children, className = "" }: GlowingBorderProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The card content */}
      {children}
      
      {/* Animated glowing border effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden"
        style={{
          maskImage: "linear-gradient(transparent calc(100% - 2px), black calc(100% - 2px), black 100%, transparent 100%), linear-gradient(to right, transparent calc(100% - 2px), black calc(100% - 2px), black 100%, transparent 100%), linear-gradient(transparent 0%, black 0%, black 2px, transparent 2px), linear-gradient(to right, transparent 0%, black 0%, black 2px, transparent 2px)",
          maskComposite: "exclude",
        }}
      >
        {/* Top edge glow */}
        {!isHovered && (
          <motion.div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0, 217, 255, 0.5) 15%, rgba(0, 217, 255, 1) 50%, rgba(0, 217, 255, 0.5) 85%, transparent 100%)",
              filter: "blur(2px) brightness(1.3)",
              boxShadow: "0 0 24px rgba(0, 217, 255, 1), 0 0 12px rgba(0, 217, 255, 1), 0 0 6px rgba(255, 255, 255, 0.8)",
            }}
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
        
        {/* Right edge glow */}
        {!isHovered && (
          <motion.div
            className="absolute top-0 right-0 bottom-0 w-0.5"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(0, 217, 255, 0.5) 15%, rgba(0, 217, 255, 1) 50%, rgba(0, 217, 255, 0.5) 85%, transparent 100%)",
              filter: "blur(2px) brightness(1.3)",
              boxShadow: "0 0 24px rgba(0, 217, 255, 1), 0 0 12px rgba(0, 217, 255, 1), 0 0 6px rgba(255, 255, 255, 0.8)",
            }}
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />
        )}
        
        {/* Bottom edge glow */}
        {!isHovered && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0, 217, 255, 0.5) 15%, rgba(0, 217, 255, 1) 50%, rgba(0, 217, 255, 0.5) 85%, transparent 100%)",
              filter: "blur(2px) brightness(1.3)",
              boxShadow: "0 0 24px rgba(0, 217, 255, 1), 0 0 12px rgba(0, 217, 255, 1), 0 0 6px rgba(255, 255, 255, 0.8)",
            }}
            animate={{
              x: ["200%", "-100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 4,
            }}
          />
        )}
        
        {/* Left edge glow */}
        {!isHovered && (
          <motion.div
            className="absolute top-0 left-0 bottom-0 w-0.5"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(0, 217, 255, 0.5) 15%, rgba(0, 217, 255, 1) 50%, rgba(0, 217, 255, 0.5) 85%, transparent 100%)",
              filter: "blur(2px) brightness(1.3)",
              boxShadow: "0 0 24px rgba(0, 217, 255, 1), 0 0 12px rgba(0, 217, 255, 1), 0 0 6px rgba(255, 255, 255, 0.8)",
            }}
            animate={{
              y: ["200%", "-100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 6,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

