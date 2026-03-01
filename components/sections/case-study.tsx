"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, ShoppingCart, Video, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const metrics = [
  { icon: Clock, value: "40 hrs/wk", label: { en: "Saved every week", ar: "توفير أسبوعي" } },
  { icon: TrendingUp, value: "10×", label: { en: "Catalog capacity", ar: "طاقة الكتالوج" } },
  { icon: ShoppingCart, value: "3", label: { en: "Amazon campaigns", ar: "حملات أمازون" } },
  { icon: Video, value: "$0.25", label: { en: "Per TikTok video", ar: "لكل فيديو TikTok" } },
  { icon: Zap, value: "2 wks", label: { en: "To live", ar: "للتشغيل" } },
];

export function CaseStudy() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 px-6 py-3 text-base bg-primary/10 text-primary border-primary/30">
            {isArabic ? "دراسة حالة حية" : "Live Case Study"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {isArabic
              ? "كيف أتمتنا Tech1Mart الإمارات"
              : "How We Automated Tech1Mart UAE"}
          </h2>
          <p className="text-muted-foreground text-lg">
            {isArabic
              ? "علامة تجارية للدروبشيبينج في الإمارات — من الفوضى اليدوية إلى عمليات مؤتمتة بالكامل في أسبوعين"
              : "A UAE dropshipping brand — from manual chaos to fully automated ops in 2 weeks"}
          </p>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl border border-primary/20 bg-card/80 text-center hover:border-primary/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-black text-primary mb-1">{metric.value}</div>
                <div className="text-xs text-muted-foreground">
                  {isArabic ? metric.label.ar : metric.label.en}
                </div>
              </div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
              <h3 className="text-lg font-bold mb-3 text-red-400 flex items-center gap-2">
                <span>⚠️</span>
                {isArabic ? "قبل" : "Before"}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {isArabic
                  ? "استيراد منتجات يدوي، معالجة كل طلب بشكل فردي، لا تواجد على TikTok، إعلانات أمازون تعمل بدون تحسين — أكثر من 40 ساعة أسبوعياً ضائعة في عمل إداري."
                  : "Manually importing products, processing every order individually, no TikTok presence, Amazon ads running without optimization — 40+ hours/week burned on pure admin work."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span>⚡</span>
                {isArabic ? "بعد" : "After"}
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {(isArabic ? [
                  "CJ Dropshipping تزامن الكتالوج يومياً تلقائياً",
                  "الطلبات تُنفَّذ ذاتياً — التتبع يُرسل تلقائياً",
                  "خط إنتاج TikTok ينشئ ويُنشر مقاطع الفيديو",
                  "عروض أسعار أمازون تُحسَّن كل صباح الساعة 9",
                ] : [
                  "CJ Dropshipping syncs catalog daily — automatically",
                  "Orders fulfill themselves — tracking pushed back automatically",
                  "TikTok pipeline generates and posts videos",
                  "Amazon bids optimize every morning at 9am",
                ]).map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Quote + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 text-center">
              <div className="text-5xl mb-4">🏪</div>
              <p className="text-xl font-semibold mb-2">
                {isArabic ? '"النظام يعمل بينما ينام الفريق"' : '"The system runs while the team sleeps."'}
              </p>
              <p className="text-muted-foreground text-sm">
                {isArabic ? "— Tech1Mart، الإمارات العربية المتحدة" : "— Tech1Mart, UAE"}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-orange-500/20 bg-orange-500/5">
              <p className="text-sm text-muted-foreground mb-4">
                {isArabic
                  ? "هذه الأنظمة نفسها متاحة لمتجرك. ننشرها في أسبوعين."
                  : "These exact systems are available for your store. We deploy in 2 weeks."}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all hover:scale-105 group w-full justify-center"
                style={{ background: "#FF6B35", color: "white" }}
              >
                {isArabic ? "احصل على نفس النظام ←" : "Get The Same System →"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
