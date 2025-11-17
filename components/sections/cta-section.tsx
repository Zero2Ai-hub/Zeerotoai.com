"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export function CtaSection() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="py-24 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      {/* Top cyan glowing border */}
      <div 
        className="absolute top-0 left-0 right-0 h-px bg-primary/30"
        style={{
          boxShadow: "0 0 20px rgba(0, 217, 255, 0.4), 0 0 40px rgba(0, 217, 255, 0.2), 0 0 60px rgba(0, 217, 255, 0.1)"
        }}
      />
      
      {/* Bottom cyan glowing border */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px bg-primary/30"
        style={{
          boxShadow: "0 0 20px rgba(0, 217, 255, 0.4), 0 0 40px rgba(0, 217, 255, 0.2), 0 0 60px rgba(0, 217, 255, 0.1)"
        }}
      />
      
      {/* Gradient overlays for smooth section transitions */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-5"
        style={{
          background: "linear-gradient(to bottom, hsl(220, 32%, 11%) 0%, hsla(220, 30%, 16%, 0.5) 40%, transparent 100%)"
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-5"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 217, 255, 0.03) 0%, rgba(0, 217, 255, 0.01) 50%, transparent 100%)"
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-0"
        style={{
          background: "linear-gradient(to top, hsl(220, 32%, 11%) 0%, hsla(220, 30%, 16%, 0.9) 30%, rgba(30, 37, 64, 0.5) 60%, transparent 100%)"
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-0"
        style={{
          background: "linear-gradient(to top, rgba(0, 217, 255, 0.04) 0%, rgba(0, 217, 255, 0.02) 50%, transparent 100%)"
        }}
      />
      
      {/* Floating orbs - Optimized for performance */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-block px-6 py-3 rounded-full bg-primary/30 text-primary border border-primary/50 backdrop-blur-sm mb-6">
            <span className="text-base font-bold text-white">
              {isArabic ? "ابدأ الآن" : "Get Started"}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{
            textShadow: "0 0 40px rgba(0, 217, 255, 0.3)"
          }}>
            {isArabic
              ? "جاهز لأتمتة سير عملك؟"
              : "Ready to Automate Your Workflow?"}
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-100 leading-relaxed">
            {isArabic
              ? "احجز مكالمة تعريفية مجانية ودعنا نناقش كيف يمكننا توفير ساعات من عملك كل أسبوع"
              : "Book a free discovery call and let's discuss how we can save you hours every week"}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="group text-lg bg-primary hover:bg-primary/90 text-background font-bold shadow-xl shadow-primary/50 hover:shadow-2xl hover:shadow-primary/60 transition-all hover:scale-105 relative overflow-hidden"
            >
              <Link href={site.cta.primary.href} className="flex items-center gap-2">
                <span className="relative z-10">{isArabic ? site.cta.primary.label.ar : site.cta.primary.label.en}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/30 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group text-lg bg-white/10 hover:bg-primary/20 text-white border-2 border-primary/50 hover:border-primary transition-all hover:scale-105 backdrop-blur-sm"
            >
              <Link href="/portfolio" className="flex items-center gap-2">
                <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                {isArabic ? "شاهد أعمالنا" : "See Our Work"}
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-200 relative z-50"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>{isArabic ? "استشارة مجانية" : "Free Consultation"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>{isArabic ? "تسليم سريع" : "Fast Delivery"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>{isArabic ? "نتائج مضمونة" : "Guaranteed Results"}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

