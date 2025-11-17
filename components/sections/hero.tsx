"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { site } from "@/content/site";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

export function Hero() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay - Optimized for mobile */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/brand-banner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Force GPU acceleration for smoother mobile performance
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        <div className="absolute inset-0 bg-black/60 circuit-pattern" />
        
        {/* Floating orbs for artistic effect */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Bottom gradient overlay for smooth transition to next section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(to top, hsl(220, 32%, 11%) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.5) 60%, transparent 100%)"
          }}
        />
        {/* Additional subtle cyan gradient for blending */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0, 217, 255, 0.05) 0%, rgba(0, 217, 255, 0.02) 50%, transparent 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="w-full relative z-10 px-12 lg:px-20 py-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`max-w-3xl ${isArabic ? 'ml-auto' : ''}`}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-6 py-3 rounded-full bg-primary/20 text-primary border border-primary/40 backdrop-blur-sm mb-6 ml-8"
          >
            <span className="text-base font-bold">
              {isArabic ? "حلول الذكاء الاصطناعي والأتمتة" : "AI & Automation Solutions"}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight ml-8"
            style={{
              textShadow: "0 0 40px rgba(0, 217, 255, 0.3), 0 0 20px rgba(0, 217, 255, 0.2)"
            }}
          >
            <span className="lg:whitespace-nowrap">{isArabic ? site.hero.headlineLine1.ar : site.hero.headlineLine1.en}</span>
            <br />
            {isArabic ? site.hero.headlineLine2.ar : site.hero.headlineLine2.en}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-14 ml-8"
          >
            <Button 
              asChild 
              size="lg" 
              className="group text-lg bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary/70 text-background font-bold shadow-xl shadow-primary/50 hover:shadow-2xl hover:shadow-primary/60 transition-all hover:scale-105 relative overflow-hidden"
            >
              <Link href={site.cta.primary.href} className="flex items-center gap-2">
                <span className="relative z-10">{isArabic ? site.cta.primary.label.ar : site.cta.primary.label.en}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/30 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="group text-lg bg-white/10 hover:bg-primary/20 text-white border-2 border-primary/50 hover:border-primary transition-all hover:scale-105 backdrop-blur-sm"
            >
              <Link href={site.cta.secondary.href} className="flex items-center gap-2">
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                {isArabic ? site.cta.secondary.label.ar : site.cta.secondary.label.en}
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-4 rounded-xl bg-black/40 border border-primary/30 backdrop-blur-sm ml-8 max-w-2xl"
          >
            <div className="flex -space-x-2 flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 border-2 border-background flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-background" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/80 to-primary/60 border-2 border-background flex items-center justify-center">
                <Zap className="w-4 h-4 text-background" />
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-200 font-medium leading-relaxed">
              {isArabic ? site.hero.subheadline.ar : site.hero.subheadline.en}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

