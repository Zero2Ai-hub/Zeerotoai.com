"use client";

import { motion } from "framer-motion";

interface CircuitDividerProps {
  className?: string;
}

export function CircuitDivider({ className = "" }: CircuitDividerProps) {
  return (
    <div 
      className={`relative h-32 w-full overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(to bottom, rgba(0, 217, 255, 0.03) 0%, rgba(0, 217, 255, 0.06) 50%, rgba(0, 217, 255, 0.03) 100%)"
      }}
    >
      {/* Subtle radial glow in center */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0, 217, 255, 0.08) 0%, transparent 60%)"
        }}
      />

      {/* Single horizontal base line - center */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/10" />
      
      {/* Primary animated glowing wave - center only */}
      <motion.div
        className="absolute top-1/2 left-0 right-0"
        style={{ 
          transform: "translateY(-50%)",
          height: "3px",
          background: "linear-gradient(90deg, transparent 0%, rgba(0, 217, 255, 0.5) 15%, rgba(0, 217, 255, 1) 50%, rgba(0, 217, 255, 0.5) 85%, transparent 100%)",
          clipPath: "polygon(0% 50%, 15% 50%, 45% 0%, 55% 0%, 85% 50%, 100% 50%, 100% 50%, 85% 50%, 55% 100%, 45% 100%, 15% 50%, 0% 50%)",
          filter: "blur(2px) brightness(1.3)",
          boxShadow: "0 0 24px rgba(0, 217, 255, 1), 0 0 12px rgba(0, 217, 255, 1), 0 0 6px rgba(255, 255, 255, 0.8)"
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

