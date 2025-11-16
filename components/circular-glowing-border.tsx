"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface CircularGlowingBorderProps {
  children: React.ReactNode;
  className?: string;
}

export function CircularGlowingBorder({ children, className = "" }: CircularGlowingBorderProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate circle dimensions (48x48 px logo)
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const dashLength = circumference * 0.25; // 25% of circle for the glow

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The content */}
      {children}

      {/* Animated circular glowing border effect */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        style={{ overflow: "visible", opacity: isHovered ? 0 : 1, transition: "opacity 0.2s" }}
      >
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 217, 255, 0)" />
            <stop offset="20%" stopColor="rgba(0, 217, 255, 0.5)" />
            <stop offset="50%" stopColor="rgba(0, 217, 255, 1)" />
            <stop offset="80%" stopColor="rgba(0, 217, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(0, 217, 255, 0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <motion.circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="2"
          strokeDasharray={`${dashLength} ${circumference - dashLength}`}
          filter="url(#glow)"
          style={{
            filter: "drop-shadow(0 0 6px rgba(0, 217, 255, 0.8)) drop-shadow(0 0 3px rgba(0, 217, 255, 1))",
            transformOrigin: "center",
          }}
          initial={{ rotate: 0 }}
          animate={{
            rotate: isHovered ? 0 : 360,
          }}
          transition={{
            duration: 3,
            repeat: isHovered ? 0 : Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
}

