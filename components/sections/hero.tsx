"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { ArrowRight, Shield, Zap } from "lucide-react";

export function Hero() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/brand-banner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65 circuit-pattern" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(to top, hsl(220, 32%, 11%) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="w-full relative z-10 px-8 lg:px-20 py-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`max-w-4xl ${isArabic ? "ml-auto text-right" : ""}`}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-5 py-2.5 rounded-full bg-primary/20 text-primary border border-primary/40 backdrop-blur-sm mb-6"
          >
            <span className="text-sm font-bold tracking-wide uppercase">
              {isArabic ? site.hero.badge.ar : site.hero.badge.en}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{ textShadow: "0 0 40px rgba(0, 217, 255, 0.25)" }}
          >
            {isArabic ? site.hero.headlineLine1.ar : site.hero.headlineLine1.en}
            <br />
            <span className="text-primary">{isArabic ? site.hero.headlineLine2.ar : site.hero.headlineLine2.en}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
          >
            {isArabic ? site.hero.subheadline.ar : site.hero.subheadline.en}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              asChild
              size="lg"
              className="group text-lg bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary/70 text-background font-bold shadow-xl shadow-primary/50 hover:shadow-2xl hover:shadow-primary/60 transition-all hover:scale-105 relative overflow-hidden"
            >
              <Link href={`/${locale}${site.cta.primary.href}`} className="flex items-center justify-center gap-2">
                <span className="relative z-10">{isArabic ? site.cta.primary.label.ar : site.cta.primary.label.en}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group text-lg bg-white/10 hover:bg-primary/20 text-white border-2 border-primary/50 hover:border-primary transition-all hover:scale-105 backdrop-blur-sm"
            >
              <Link href={`/${locale}${site.cta.secondary.href}`} className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                {isArabic ? site.cta.secondary.label.ar : site.cta.secondary.label.en}
              </Link>
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>{isArabic ? "أنظمة محكومة وشفافة" : "Governed & transparent systems"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>{isArabic ? "تشغيل في 2-4 أسابيع" : "Live in 2–4 weeks"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">🇦🇪</span>
              <span>{isArabic ? "الإمارات والخليج العربي" : "UAE & GCC focused"}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
