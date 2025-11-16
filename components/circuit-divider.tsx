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

      {/* Multiple horizontal base lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-primary/5" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/10" />
      <div className="absolute top-2/3 left-0 right-0 h-px bg-primary/5" />
      
      {/* Primary animated glowing wave - center */}
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

      {/* Secondary animated pulse - top line */}
      <motion.div
        className="absolute top-1/3 left-0 right-0"
        style={{ 
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, rgba(0, 217, 255, 0.3) 20%, rgba(0, 217, 255, 0.6) 50%, rgba(0, 217, 255, 0.3) 80%, transparent 100%)",
          filter: "blur(1px)",
          boxShadow: "0 0 12px rgba(0, 217, 255, 0.5)"
        }}
        animate={{
          x: ["200%", "-100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Tertiary animated pulse - bottom line */}
      <motion.div
        className="absolute top-2/3 left-0 right-0"
        style={{ 
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, rgba(0, 217, 255, 0.3) 20%, rgba(0, 217, 255, 0.6) 50%, rgba(0, 217, 255, 0.3) 80%, transparent 100%)",
          filter: "blur(1px)",
          boxShadow: "0 0 12px rgba(0, 217, 255, 0.5)"
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5,
        }}
      />

      {/* Vertical connecting lines (subtle) */}
      <div className="absolute left-1/4 top-1/3 bottom-1/3 w-px bg-primary/5" />
      <div className="absolute left-1/2 top-1/3 bottom-1/3 w-px bg-primary/8" />
      <div className="absolute left-3/4 top-1/3 bottom-1/3 w-px bg-primary/5" />
    </div>
  );
}

