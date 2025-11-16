"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";
import { useLocale } from "next-intl";

export function FloatingCalculatorButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const locale = useLocale();
  const isArabic = locale === "ar";

  const calculators = [
    {
      id: "roi",
      href: "/calculators/roi",
      icon: TrendingUp,
      label: { en: "ROI Calculator", ar: "حاسبة العائد" },
    },
    {
      id: "cost",
      href: "/calculators/cost",
      icon: DollarSign,
      label: { en: "Cost Calculator", ar: "حاسبة التكلفة" },
    },
  ];

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      style={{ 
        position: 'fixed', 
        bottom: '6rem', 
        right: '2rem',
        zIndex: 50
      }}
    >
      {/* Calculator Options (appear ABOVE main button) */}
      <AnimatePresence>
        {isExpanded && (
          <div 
            style={{ 
              position: 'absolute', 
              bottom: '6rem',
              right: '0',
            }}
            className="flex flex-col gap-3 pb-3"
          >
            {calculators.map((calc, index) => {
              const IconComponent = calc.icon;
              return (
                <motion.div
                  key={calc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                >
                  <Link
                    href={calc.href}
                    className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 hover:border-primary/50 hover:bg-card/90 shadow-lg hover:shadow-xl transition-all hover:scale-105 group min-w-[180px]"
                  >
                    <IconComponent className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                    <span className="font-semibold text-sm text-primary whitespace-nowrap">
                      {isArabic ? calc.label.ar : calc.label.en}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Main Calculator Button */}
      <button
        style={{ 
          animation: "glowPulse 2s ease-in-out infinite"
        }}
        className="w-16 h-16 rounded-full bg-card/80 backdrop-blur-sm border-2 border-primary/40 hover:border-primary/60 hover:bg-card/90 shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-110 flex items-center justify-center group relative overflow-hidden"
        aria-label={isArabic ? "الآلات الحاسبة" : "Calculators"}
      >
        {/* Icon */}
        <Calculator className="w-7 h-7 text-primary relative z-10 group-hover:rotate-12 transition-transform" />

        {/* Pulse ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary"
          animate={{
            scale: [1, 1.3, 1.3],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </button>
    </div>
  );
}

