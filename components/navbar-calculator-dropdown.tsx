"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";
import { useLocale } from "next-intl";

export function NavbarCalculatorDropdown() {
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
      className="relative"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Main Calculator Button */}
      <button
        className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-all border border-primary/30 hover:border-primary/50 shadow-sm hover:shadow-md hover:shadow-primary/20"
        aria-label={isArabic ? "الآلات الحاسبة" : "Calculators"}
      >
        <Calculator className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 min-w-[200px] bg-card/95 backdrop-blur-xl border border-primary/20 rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="p-2 space-y-1">
              {calculators.map((calc) => {
                const IconComponent = calc.icon;
                return (
                  <Link
                    key={calc.id}
                    href={calc.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-primary/10 transition-all group"
                  >
                    <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-sm text-foreground group-hover:text-primary whitespace-nowrap">
                      {isArabic ? calc.label.ar : calc.label.en}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

