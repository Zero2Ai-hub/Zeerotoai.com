"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";

export function CtaSection() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="py-24 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      <div className="absolute top-0 left-0 right-0 h-px bg-primary/30"
        style={{ boxShadow: "0 0 20px rgba(0,217,255,0.4), 0 0 40px rgba(0,217,255,0.2)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30"
        style={{ boxShadow: "0 0 20px rgba(0,217,255,0.4), 0 0 40px rgba(0,217,255,0.2)" }} />

      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, hsl(220,32%,11%) 0%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, hsl(220,32%,11%) 0%, transparent 100%)" }} />

      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-5 py-2.5 rounded-full bg-primary/30 text-primary border border-primary/50 backdrop-blur-sm mb-6">
            <span className="text-sm font-bold text-white uppercase tracking-wide">
              {isArabic ? "ابدأ اليوم" : "Start Today"}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6"
            style={{ textShadow: "0 0 40px rgba(0,217,255,0.3)" }}
          >
            {isArabic
              ? "منافسوك يؤتمتون بالفعل. هل أنت كذلك؟"
              : "Your Competitors Are Already Automating."}
            <br />
            {isArabic
              ? ""
              : <span className="text-primary">Are You?</span>}
          </h2>

          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200 leading-relaxed">
            {isArabic
              ? "كل أسبوع تقضيه في العمليات اليدوية هو أسبوع يتقدمون فيه. ننشر في أسبوعين. احجز تدقيقك المجاني — سنرسم بالضبط ما يجب أتمتته أولاً."
              : "Every week you spend on manual ops is a week they're scaling ahead. We deploy in 2 weeks. Book your free audit — we'll map exactly what to automate first."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="group text-lg font-bold shadow-xl transition-all hover:scale-105 relative overflow-hidden"
              style={{ background: "#FF6B35", color: "white" }}
            >
              <Link href={`/${locale}${site.cta.primary.href}`} className="flex items-center justify-center gap-2">
                <span className="relative z-10">{isArabic ? "احجز تدقيقاً مجانياً للتجارة الإلكترونية ←" : "Book Free E-commerce Audit →"}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group text-lg bg-white/10 hover:bg-primary/20 text-white border-2 border-primary/50 hover:border-primary transition-all hover:scale-105 backdrop-blur-sm"
            >
              <Link href={`/${locale}/portfolio`} className="flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                {isArabic ? "شاهد النتائج الحقيقية" : "See Real Results"}
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>{isArabic ? "بدون التزام" : "No commitment"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{isArabic ? "مكالمة 30 دقيقة" : "30-minute call"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">🇦🇪</span>
              <span>{isArabic ? "مركّز على الإمارات والخليج" : "UAE/GCC focused"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>{isArabic ? "نتائج في 14 يوماً" : "Results in 14 days"}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
