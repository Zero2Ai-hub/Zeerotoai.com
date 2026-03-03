"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Rocket,
  Bot,
  Layers,
  Building2,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface PricingClientProps {
  isArabic: boolean;
}

const tiers = [
  {
    id: "first-automation",
    icon: Zap,
    badge: null,
    name: { en: "First Automation", ar: "أول أتمتة" },
    price: { en: "2,500 AED", ar: "2,500 درهم" },
    priceNote: { en: "one-time", ar: "دفعة واحدة" },
    timeline: { en: "Live in 7 days", ar: "تشغيل في 7 أيام" },
    description: {
      en: "Pick one operation that's costing you the most time. We automate it, hand it over, you own it.",
      ar: "اختر عملية واحدة تستهلك وقتك أكثر. نؤتمتها، نسلمها، وتصبح ملكك.",
    },
    features: {
      en: [
        "1 automated workflow — your choice",
        "Catalog sync (supplier to store)",
        "Order fulfillment automation",
        "Amazon ads daily optimizer",
        "WhatsApp support bot",
        "Full handover + 30-min training",
        "You own everything — no monthly fees",
      ],
      ar: [
        "سير عمل واحد آلي — اختيارك",
        "مزامنة كتالوج (من المورد إلى المتجر)",
        "أتمتة تنفيذ الطلبات",
        "محسّن إعلانات أمازون اليومي",
        "بوت دعم واتساب",
        "تسليم كامل + تدريب 30 دقيقة",
        "تملك كل شيء — بدون رسوم شهرية",
      ],
    },
    accentColor: "border-primary/30",
    highlight: false,
    cta: { en: "Start With One Automation", ar: "ابدأ بأتمتة واحدة" },
  },
  {
    id: "ops-stack",
    icon: Rocket,
    badge: null,
    name: { en: "Ops Stack", ar: "منظومة العمليات" },
    price: { en: "8,500 AED", ar: "8,500 درهم" },
    priceNote: { en: "one-time", ar: "دفعة واحدة" },
    timeline: { en: "Live in 14 days", ar: "تشغيل في 14 يوم" },
    description: {
      en: "Your entire store operation automated end-to-end. The exact system running Tech1Mart today.",
      ar: "عمليات متجرك كاملة من الألف إلى الياء. النظام الدقيق الذي يشغّل Tech1Mart اليوم.",
    },
    features: {
      en: [
        "CJ Dropshipping to WooCommerce/Amazon catalog sync",
        "Order fulfillment — zero manual processing",
        "Amazon ads optimizer — daily bids + keywords",
        "TikTok AI video pipeline ($0.25/video)",
        "Daily ops report to Telegram",
        "24/7 WhatsApp support agent (Arabic + English)",
        "Full handover + training",
        "You own everything — no monthly fees",
      ],
      ar: [
        "مزامنة CJ Dropshipping إلى WooCommerce/Amazon",
        "تنفيذ الطلبات — صفر معالجة يدوية",
        "محسّن إعلانات أمازون — عروض يومية + كلمات مفتاحية",
        "خط إنتاج فيديو TikTok بالذكاء الاصطناعي (0.25$)",
        "تقرير عمليات يومي على تيليغرام",
        "وكيل دعم واتساب 24/7 (عربي + إنجليزي)",
        "تسليم كامل + تدريب",
        "تملك كل شيء — بدون رسوم شهرية",
      ],
    },
    roiNote: {
      en: "40 hrs/week automated. At 50 AED/hr = 8,000 AED/month saved. Pays for itself in 32 days.",
      ar: "40 ساعة أسبوعياً تلقائية. بمعدل 50 درهم/ساعة = 8,000 درهم/شهر وفر. يسدد تكلفته في 32 يوم.",
    },
    accentColor: "border-primary/40",
    highlight: false,
    cta: { en: "Automate My Store", ar: "أتمت متجري" },
  },
  {
    id: "agent-commerce",
    icon: Bot,
    badge: { en: "NEW — First in UAE/GCC", ar: "جديد — الأول في الإمارات/الخليج" },
    name: { en: "Agent Commerce Ready", ar: "جاهز للتجارة الوكيلية" },
    price: { en: "3,500 AED", ar: "3,500 درهم" },
    priceNote: { en: "one-time", ar: "دفعة واحدة" },
    timeline: { en: "Live in 7 days", ar: "تشغيل في 7 أيام" },
    description: {
      en: "AI agents are already browsing and buying. Configure your store to be visible — and purchasable — by them before your competitors do.",
      ar: "وكلاء الذكاء الاصطناعي يتصفحون ويشترون الآن. اجعل متجرك مرئياً وقابلاً للشراء منهم قبل منافسيك.",
    },
    features: {
      en: [
        "Structured metadata + JSON-LD schema for AI discovery",
        "Agent-callable product API (x402 protocol)",
        "MoonPay + Coinbase Commerce USDC checkout",
        "Base network onchain commerce integration",
        "AI-readable catalog format (MCP-compatible)",
        "Test purchase walkthrough with live agent",
        "You own everything — no monthly fees",
      ],
      ar: [
        "بيانات وصفية منظمة + مخطط JSON-LD لاكتشاف الذكاء الاصطناعي",
        "API منتج قابل للاستدعاء (بروتوكول x402)",
        "MoonPay + Coinbase Commerce دفع USDC",
        "تكامل تجارة Base network على السلسلة",
        "تنسيق كتالوج قابل للقراءة بالذكاء الاصطناعي",
        "عملية شراء تجريبية مع وكيل حي",
        "تملك كل شيء — بدون رسوم شهرية",
      ],
    },
    accentColor: "border-cyan-500/50",
    highlight: true,
    cta: { en: "Make My Store Agent-Ready", ar: "اجعل متجري جاهزاً للوكلاء" },
  },
  {
    id: "full-stack",
    icon: Layers,
    badge: { en: "Best Value", ar: "أفضل قيمة" },
    name: { en: "Full Stack", ar: "المنظومة الكاملة" },
    price: { en: "11,500 AED", ar: "11,500 درهم" },
    priceNote: { en: "one-time — saves 500 AED", ar: "دفعة واحدة — توفير 500 درهم" },
    timeline: { en: "Live in 3 weeks", ar: "تشغيل في 3 أسابيع" },
    description: {
      en: "Ops Stack plus Agent Commerce Ready. Full operations automated — and positioned for the AI commerce era.",
      ar: "Ops Stack بالإضافة إلى Agent Commerce Ready. العمليات كاملة مؤتمتة، ومُهيأة لعصر التجارة بالذكاء الاصطناعي.",
    },
    features: {
      en: [
        "Everything in Ops Stack",
        "Everything in Agent Commerce Ready",
        "Priority build — dedicated 3-week sprint",
        "Combined handover + full team training",
        "You own everything — no monthly fees",
      ],
      ar: [
        "كل ما في Ops Stack",
        "كل ما في Agent Commerce Ready",
        "بناء أولوي — سبرينت مخصص 3 أسابيع",
        "تسليم مشترك + تدريب كامل للفريق",
        "تملك كل شيء — بدون رسوم شهرية",
      ],
    },
    accentColor: "border-purple-500/50",
    highlight: true,
    cta: { en: "Get The Full Stack", ar: "احصل على المنظومة الكاملة" },
  },
  {
    id: "enterprise",
    icon: Building2,
    badge: null,
    name: { en: "Enterprise", ar: "المؤسسات" },
    price: { en: "Custom", ar: "مخصص" },
    priceNote: { en: "scoped per project", ar: "محدد حسب المشروع" },
    timeline: { en: "Scoped together", ar: "يُحدد معاً" },
    description: {
      en: "Multi-store, complex supply chains, custom AI agents, SLA-backed support. Let's scope it together.",
      ar: "متاجر متعددة، سلاسل توريد معقدة، وكلاء ذكاء اصطناعي مخصصة، دعم مضمون بـ SLA.",
    },
    features: {
      en: [
        "Multi-store automation",
        "Custom AI agent development",
        "Complex supply chain integration",
        "SLA-backed support contract",
        "Dedicated build team",
        "Quarterly optimization reviews",
      ],
      ar: [
        "أتمتة متاجر متعددة",
        "تطوير وكلاء ذكاء اصطناعي مخصصة",
        "تكامل سلاسل توريد معقدة",
        "عقد دعم مضمون بـ SLA",
        "فريق بناء مخصص",
        "مراجعات تحسين ربع سنوية",
      ],
    },
    accentColor: "border-primary/20",
    highlight: false,
    cta: { en: "Book a Scope Call", ar: "احجز مكالمة تحديد نطاق" },
  },
];

export function PricingClient({ isArabic }: PricingClientProps) {
  return (
    <section className="relative z-10 pt-28 pb-24 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
          {isArabic ? "الأسعار" : "PRICING"}
        </p>
        <h1 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
          {isArabic
            ? "تملك النظام. لا اشتراكات. لا قيود."
            : "Own The System. No Subscriptions. No Lock-in."}
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          {isArabic
            ? "ندفع مرة واحدة، تملك كل شيء. معظم عملائنا يسترجعون التكلفة خلال أول شهر."
            : "Pay once. Own everything. Most clients recover the cost within the first month."}
        </p>
      </motion.div>

      {/* Tiers */}
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Agent Commerce — Hero Card (full width) */}
        {(() => {
          const tier = tiers.find((t) => t.id === "agent-commerce")!;
          const Icon = tier.icon;
          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`relative rounded-2xl border-2 ${tier.accentColor} bg-card/60 p-8 overflow-hidden`}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

              <div className="relative flex flex-col md:flex-row md:items-start gap-8">
                {/* Left: info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    {tier.badge && (
                      <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-bold tracking-wide border border-cyan-500/30">
                        {isArabic ? tier.badge.ar : tier.badge.en}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-black mb-2">
                    {isArabic ? tier.name.ar : tier.name.en}
                  </h2>
                  <p className="text-muted-foreground mb-5 max-w-lg">
                    {isArabic ? tier.description.ar : tier.description.en}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(isArabic ? tier.features.ar : tier.features.en).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: price + CTA */}
                <div className="flex flex-col items-start md:items-end gap-4 min-w-[200px]">
                  <div className="md:text-right">
                    <div className="text-3xl font-black text-cyan-400">
                      {isArabic ? tier.price.ar : tier.price.en}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {isArabic ? tier.priceNote.ar : tier.priceNote.en}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {isArabic ? tier.timeline.ar : tier.timeline.en}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 text-sm font-bold hover:bg-cyan-500/25 transition-colors whitespace-nowrap"
                  >
                    {isArabic ? tier.cta.ar : tier.cta.en}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })()}

        {/* 2-col grid: First Automation + Ops Stack */}
        <div className="flex flex-col md:flex-row gap-6">
          {tiers
            .filter((t) => t.id === "first-automation" || t.id === "ops-stack")
            .map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.05 }}
                  className={`flex-1 relative rounded-2xl border ${tier.accentColor} bg-card/60 p-6 flex flex-col`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-black text-base">
                        {isArabic ? tier.name.ar : tier.name.en}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {isArabic ? tier.timeline.ar : tier.timeline.en}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="text-2xl font-black text-foreground">
                      {isArabic ? tier.price.ar : tier.price.en}
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      {isArabic ? tier.priceNote.ar : tier.priceNote.en}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {isArabic ? tier.description.ar : tier.description.en}
                  </p>

                  {/* ROI note for Ops Stack */}
                  {"roiNote" in tier && tier.roiNote && (
                    <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/15">
                      <p className="text-xs text-primary font-medium">
                        {isArabic ? tier.roiNote.ar : tier.roiNote.en}
                      </p>
                    </div>
                  )}

                  <ul className="space-y-2 mb-6 flex-1">
                    {(isArabic ? tier.features.ar : tier.features.en).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-primary/30 text-sm font-bold hover:bg-primary/10 transition-colors"
                  >
                    {isArabic ? tier.cta.ar : tier.cta.en}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
        </div>

        {/* Full Stack — hero card */}
        {(() => {
          const tier = tiers.find((t) => t.id === "full-stack")!;
          const Icon = tier.icon;
          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className={`relative rounded-2xl border-2 ${tier.accentColor} bg-card/60 p-8 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent pointer-events-none" />

              <div className="relative flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    {tier.badge && (
                      <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-400 text-xs font-bold tracking-wide border border-purple-500/30">
                        {isArabic ? tier.badge.ar : tier.badge.en}
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/40 text-xs text-muted-foreground">
                      <Sparkles className="w-3 h-3" />
                      {isArabic ? "يشمل Agent Commerce Ready" : "Includes Agent Commerce Ready"}
                    </div>
                  </div>

                  <h2 className="text-2xl font-black mb-2">
                    {isArabic ? tier.name.ar : tier.name.en}
                  </h2>
                  <p className="text-muted-foreground mb-5 max-w-lg">
                    {isArabic ? tier.description.ar : tier.description.en}
                  </p>

                  <ul className="space-y-2">
                    {(isArabic ? tier.features.ar : tier.features.en).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start md:items-end gap-4 min-w-[200px]">
                  <div className="md:text-right">
                    <div className="text-3xl font-black text-purple-400">
                      {isArabic ? tier.price.ar : tier.price.en}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {isArabic ? tier.priceNote.ar : tier.priceNote.en}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {isArabic ? tier.timeline.ar : tier.timeline.en}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-400 text-sm font-bold hover:bg-purple-500/25 transition-colors whitespace-nowrap"
                  >
                    {isArabic ? tier.cta.ar : tier.cta.en}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })()}

        {/* Enterprise + Ops Care add-on: 2 col */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Enterprise */}
          {(() => {
            const tier = tiers.find((t) => t.id === "enterprise")!;
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className={`flex-1 relative rounded-2xl border ${tier.accentColor} bg-card/60 p-6 flex flex-col`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-black text-base">
                      {isArabic ? tier.name.ar : tier.name.en}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {isArabic ? tier.timeline.ar : tier.timeline.en}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-2xl font-black">
                    {isArabic ? tier.price.ar : tier.price.en}
                  </span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {isArabic ? tier.priceNote.ar : tier.priceNote.en}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {isArabic ? tier.description.ar : tier.description.en}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {(isArabic ? tier.features.ar : tier.features.en).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-primary/30 text-sm font-bold hover:bg-primary/10 transition-colors"
                >
                  {isArabic ? tier.cta.ar : tier.cta.en}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })()}

          {/* Ops Care add-on */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex-1 relative rounded-2xl border border-green-500/30 bg-card/60 p-6 flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/3 via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="relative flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="font-black text-base">
                    {isArabic ? "Ops Care" : "Ops Care"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {isArabic ? "إضافة اختيارية" : "Optional add-on"}
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <span className="text-2xl font-black text-green-400">
                  {isArabic ? "750 درهم/شهر" : "750 AED/mo"}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {isArabic
                  ? "أنظمتك تعمل وحدها. Ops Care يبقيها حادة. إضافة لأي باقة."
                  : "Your systems run themselves. Ops Care keeps them sharp. Add to any tier."}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {[
                  isArabic ? "تحسين العطاءات والكلمات المفتاحية شهرياً" : "Monthly bid + keyword optimization",
                  isArabic ? "فحص خط منتجات جديدة" : "New product pipeline check",
                  isArabic ? "تحديثات المحتوى" : "Content updates",
                  isArabic ? "دعم ذو أولوية" : "Priority support",
                  isArabic ? "مراقبة صحة النظام" : "System health monitoring",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-green-500/30 text-green-400 text-sm font-bold hover:bg-green-500/10 transition-colors"
              >
                {isArabic ? "أضف Ops Care" : "Add Ops Care"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom trust bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="max-w-3xl mx-auto mt-16 text-center"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            {isArabic ? "تملك كل شيء" : "You own everything"}
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            {isArabic ? "بدون رسوم شهرية" : "No monthly fees"}
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            {isArabic ? "بدون عقود" : "No contracts"}
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            {isArabic ? "تشغيل في 14 يوم" : "Live in 14 days"}
          </span>
        </div>

        <p className="text-muted-foreground text-sm mb-5">
          {isArabic
            ? "غير متأكد من أين تبدأ؟ احجز مراجعة مجانية لعملياتك."
            : "Not sure where to start? Book a free ops audit."}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
        >
          {isArabic ? "احجز مراجعة مجانية" : "Book Free Ops Audit"}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
