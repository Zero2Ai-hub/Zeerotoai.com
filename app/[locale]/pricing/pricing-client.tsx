"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Zap, Rocket, Building2, ArrowRight, Clock, Shield, Package } from "lucide-react";

interface PricingClientProps {
  isArabic: boolean;
}

const packages = [
  {
    icon: Zap,
    name: { en: "Starter Ops", ar: "العمليات الأساسية" },
    price: { en: "From 3,000 AED", ar: "من 3,000 درهم" },
    timeline: { en: "Live in 7 days", ar: "تشغيل في 7 أيام" },
    description: { en: "One core automation. Pick the operation costing you the most time.", ar: "أتمتة أساسية واحدة. اختر العملية التي تستهلك وقتك أكثر." },
    features: {
      en: [
        "1 automated workflow (your choice)",
        "Supplier → your store catalog sync OR",
        "Order fulfillment automation OR",
        "Amazon ads daily optimizer",
        "Full handover + 30-min training",
        "You own everything — no monthly fees",
      ],
      ar: [
        "سير عمل واحد آلي (اختيارك)",
        "مزامنة your supplier إلى your store أو",
        "أتمتة تنفيذ الطلبات أو",
        "محسّن إعلانات أمازون اليومي",
        "تسليم كامل + تدريب 30 دقيقة",
        "تملك كل شيء — بدون رسوم شهرية",
      ],
    },
    highlight: false,
    cta: { en: "Start With One Automation →", ar: "ابدأ بأتمتة واحدة →" },
  },
  {
    icon: Rocket,
    name: { en: "Full Ops Stack", ar: "منظومة العمليات الكاملة" },
    price: { en: "From 8,000 AED", ar: "من 8,000 درهم" },
    timeline: { en: "Live in 2–3 weeks", ar: "تشغيل في 2-3 أسابيع" },
    description: { en: "Your entire e-commerce operation automated end-to-end. The Tech1Mart package.", ar: "عملياتك التجارية الإلكترونية كاملاً من الألف إلى الياء. حزمة Tech1Mart." },
    features: {
      en: [
        "Supplier → store catalog auto-sync",
        "Order fulfillment — zero manual processing",
        "Amazon + daily ads optimizer",
        "TikTok AI video pipeline ($0.25/video)",
        "Daily ops report → Telegram",
        "24/7 WhatsApp support agent (Arabic + English)",
        "Full handover + training",
        "You own everything — no monthly fees",
      ],
      ar: [
        "مزامنة Dropshipping suppliers إلى your store",
        "تنفيذ الطلبات — صفر معالجة يدوية",
        "Amazon + محسّن إعلانات يومي",
        "خط إنتاج فيديو TikTok بالذكاء الاصطناعي (0.25$)",
        "تقرير عمليات يومي → Telegram",
        "وكيل دعم WhatsApp 24/7 (عربي + إنجليزي)",
        "تسليم كامل + تدريب",
        "تملك كل شيء — بدون رسوم شهرية",
      ],
    },
    highlight: true,
    cta: { en: "Automate My Full Store →", ar: "أتمتة متجري الكامل →" },
    badge: { en: "Most Popular", ar: "الأكثر طلباً" },
  },
  {
    icon: Building2,
    name: { en: "Enterprise", ar: "المؤسسات" },
    price: { en: "Custom", ar: "مخصص" },
    timeline: { en: "Scoped together", ar: "نحدده معاً" },
    description: { en: "Multi-store, multi-platform, or complex supply chain? Let's scope it.", ar: "متعدد المتاجر أو المنصات أو سلسلة توريد معقدة؟ دعنا نحدد النطاق." },
    features: {
      en: [
        "Everything in Full Ops Stack",
        "Multiple stores / platforms",
        "Custom supply chain integrations",
        "Dedicated build + support",
        "SLA-backed deployment",
        "Ongoing ops management (optional)",
      ],
      ar: [
        "كل شيء في منظومة العمليات الكاملة",
        "متاجر / منصات متعددة",
        "تكاملات سلسلة توريد مخصصة",
        "بناء ودعم مخصصان",
        "نشر مدعوم باتفاقية مستوى الخدمة",
        "إدارة عمليات مستمرة (اختياري)",
      ],
    },
    highlight: false,
    cta: { en: "Let's Talk →", ar: "تواصل معنا →" },
  },
];

const guarantees = [
  { icon: Clock, en: "Live in 2 weeks or we work for free until it is.", ar: "تشغيل في أسبوعين أو نعمل مجاناً حتى يعمل." },
  { icon: Shield, en: "You own 100% of what we build. No vendor lock-in, ever.", ar: "تملك 100% مما نبنيه. بدون قيود بائع أبداً." },
  { icon: Package, en: "If it breaks, we fix it. No finger-pointing, no extra charge.", ar: "إذا تعطل، نصلحه. بدون تهرب، بدون رسوم إضافية." },
];

export function PricingClient({ isArabic }: PricingClientProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-16 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-6 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold mb-6">
            {isArabic ? "حزم الأتمتة" : "🛒 Automation Packages"}
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground">
            {isArabic ? "استثمر في النتائج،" : "Invest in Results,"}
            <br />
            <span style={{ color: "rgb(0,217,255)" }}>
              {isArabic ? "لا في الاشتراكات" : "Not Subscriptions"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            {isArabic
              ? "نبني. نسلّم. تملك. بدون رسوم شهرية. بدون استشارات. فقط عمليات تعمل."
              : "We build it. You own it. No monthly SaaS fees. No consulting retainers. Just operations that run."}
          </p>
          <p className="text-sm text-muted-foreground/60">
            {isArabic ? "جميع الأسعار بالدرهم الإماراتي · يشمل التدريب والتسليم" : "All prices in AED · Includes handover & training · UAE/GCC focused"}
          </p>
        </motion.div>
      </section>

      {/* Packages */}
      <section className="relative z-10 px-4 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative flex flex-col"
                >
                  {pkg.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="px-4 py-1 rounded-full text-xs font-black text-black" style={{ background: "rgb(0,217,255)" }}>
                        {isArabic ? pkg.badge.ar : pkg.badge.en}
                      </span>
                    </div>
                  )}
                  <div
                    className="flex flex-col h-full rounded-2xl p-8 border transition-all duration-300"
                    style={{
                      background: pkg.highlight ? "linear-gradient(135deg, rgba(0,217,255,0.08), rgba(0,217,255,0.03))" : "rgba(255,255,255,0.02)",
                      borderColor: pkg.highlight ? "rgba(0,217,255,0.4)" : "rgba(255,255,255,0.08)",
                      boxShadow: pkg.highlight ? "0 0 40px rgba(0,217,255,0.1)" : "none",
                    }}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(0,217,255,0.15)" }}>
                        <Icon className="w-6 h-6" style={{ color: "rgb(0,217,255)" }} />
                      </div>
                      <h3 className="text-2xl font-black text-foreground mb-1">{isArabic ? pkg.name.ar : pkg.name.en}</h3>
                      <div className="text-3xl font-black mb-1" style={{ color: "rgb(0,217,255)" }}>{isArabic ? pkg.price.ar : pkg.price.en}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {isArabic ? pkg.timeline.ar : pkg.timeline.en}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6">{isArabic ? pkg.description.ar : pkg.description.en}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {(isArabic ? pkg.features.ar : pkg.features.en).map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "rgb(0,217,255)" }} />
                          <span className="text-foreground/80">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/book"
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm transition-all hover:scale-105"
                      style={pkg.highlight
                        ? { background: "rgb(0,217,255)", color: "#0a0a0f" }
                        : { background: "rgba(0,217,255,0.1)", color: "rgb(0,217,255)", border: "1px solid rgba(0,217,255,0.3)" }
                      }
                    >
                      {isArabic ? pkg.cta.ar : pkg.cta.en}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="relative z-10 px-4 pb-24">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-10 text-center"
            style={{ background: "rgba(0,217,255,0.04)", border: "1px solid rgba(0,217,255,0.15)" }}
          >
            <h2 className="text-3xl font-black mb-2">{isArabic ? "ضماناتنا" : "Our Guarantees"}</h2>
            <p className="text-muted-foreground mb-10">{isArabic ? "نضع المال حيث الكلام" : "We put our money where our mouth is."}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guarantees.map((g, i) => {
                const Icon = g.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-3 text-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(0,217,255,0.15)" }}>
                      <Icon className="w-5 h-5" style={{ color: "rgb(0,217,255)" }} />
                    </div>
                    <p className="text-sm text-foreground/80">{isArabic ? g.ar : g.en}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-4 pb-32 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {isArabic ? "غير متأكد من أين تبدأ؟" : "Not Sure Where to Start?"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            {isArabic
              ? "احجز تدقيقاً مجانياً. نرسم لك بالضبط ما يجب أتمتته أولاً."
              : "Book a free audit. We'll map exactly what to automate first — no commitment."}
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-lg transition-all hover:scale-105"
            style={{ background: "rgb(0,217,255)", color: "#0a0a0f", boxShadow: "0 0 40px rgba(0,217,255,0.4)" }}
          >
            {isArabic ? "احجز التدقيق المجاني" : "Book Free E-commerce Audit"}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4">{isArabic ? "30 دقيقة · بدون التزام · مخصص لمتجرك" : "30 minutes · No commitment · UAE/GCC focused"}</p>
        </motion.div>
      </section>
    </div>
  );
}
