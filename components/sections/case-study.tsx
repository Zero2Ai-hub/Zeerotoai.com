"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const metrics = [
  { icon: Clock, value: "40hrs", label: { en: "Saved every week", ar: "توفير أسبوعي" } },
  { icon: TrendingUp, value: "10x", label: { en: "Product listing capacity", ar: "طاقة قوائم المنتجات" } },
  { icon: Zap, value: "80%", label: { en: "Less manual operations", ar: "انخفاض العمليات اليدوية" } },
  { icon: ArrowRight, value: "2 wks", label: { en: "Audit to live", ar: "من المراجعة للتشغيل" } },
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
              ? "كيف قلّصت Tech1Mart العمليات اليدوية بـ 80%"
              : "How Tech1Mart Cut Manual Operations by 80%"}
          </h2>
          <p className="text-muted-foreground text-lg">
            {isArabic ? "تجارة إلكترونية تقنية — الإمارات" : "Tech E-Commerce — UAE"}
          </p>
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
                {isArabic ? "التحدي" : "The Challenge"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {isArabic
                  ? "كانت Tech1Mart تدير يدوياً أكثر من 500 قائمة منتجات وتنفيذ الطلبات واستفسارات العملاء والتنسيق مع الموردين — مما يستهلك أكثر من 40 ساعة أسبوعياً في عمل إداري بحت عبر فريق صغير."
                  : "Tech1Mart was manually managing 500+ product listings, order fulfillment, customer inquiries, and supplier coordination — burning 40+ hours per week in pure admin work across a small team."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span>⚡</span>
                {isArabic ? "الحل" : "What We Built"}
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {[
                  isArabic ? "استيراد تلقائي للمنتجات مع توليد الأوصاف بالذكاء الاصطناعي" : "Automated product import with AI-generated descriptions (EN + AR)",
                  isArabic ? "عميل دعم عملاء بالذكاء الاصطناعي — عربي وإنجليزي، 24/7" : "AI customer support agent — Arabic & English, 24/7 on WhatsApp",
                  isArabic ? "توجيه الطلبات الآلي إلى CJ Dropshipping" : "Automated order routing to CJ Dropshipping with status sync",
                  isArabic ? "لوحة تحليلات في الوقت الفعلي" : "Real-time analytics dashboard with weekly automated reports",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="p-6 rounded-2xl border border-primary/20 bg-card/80 text-center hover:border-primary/40 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-4xl font-black text-primary mb-1">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? metric.label.ar : metric.label.en}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 text-center">
              <p className="text-lg font-semibold mb-1">
                {isArabic ? "\"النظام يعمل بينما ينام الفريق\"" : '"The system runs while the team sleeps."'}
              </p>
              <p className="text-muted-foreground text-sm">
                {isArabic ? "— Tech1Mart، الإمارات العربية المتحدة" : "— Tech1Mart, UAE"}
              </p>
            </div>

            <div className="text-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                {isArabic ? "ابنِ نظامك التالي" : "Build Your System Next"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
