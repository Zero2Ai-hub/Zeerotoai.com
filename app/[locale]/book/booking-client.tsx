"use client";

import { motion } from "framer-motion";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { CheckCircle2, Clock, Zap, Target } from "lucide-react";

interface BookingClientProps {
  calendlyUrl: string;
  isArabic: boolean;
}

const benefits = [
  {
    icon: Target,
    en: "Identify your #1 time-draining process",
    ar: "تحديد العملية الأكثر استنزافاً لوقتك",
  },
  {
    icon: Zap,
    en: "Get a custom automation roadmap",
    ar: "احصل على خارطة طريق أتمتة مخصصة",
  },
  {
    icon: Clock,
    en: "See realistic ROI in the first 30 days",
    ar: "شاهد عائداً حقيقياً خلال أول 30 يوماً",
  },
  {
    icon: CheckCircle2,
    en: "No commitment — just clarity",
    ar: "بدون التزام — فقط وضوح",
  },
];

export function BookingClient({ calendlyUrl, isArabic }: BookingClientProps) {
  return (
    <div className="relative z-10 pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold mb-5">
            {isArabic ? "مجاني تماماً · 30 دقيقة" : "Completely Free · 30 Minutes"}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            {isArabic ? "احجز تدقيق الأتمتة المجاني" : "Book Your Free Automation Audit"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {isArabic
              ? "نحدد عملياتك الأعلى تكلفة ونريك بالضبط كيف نؤتمتها"
              : "We map your highest-cost manual processes and show you exactly how to automate them"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left — benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 lg:pt-8"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">
              {isArabic ? "ماذا ستحصل عليه" : "What You'll Get"}
            </h2>
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {isArabic ? b.ar : b.en}
                  </p>
                </div>
              );
            })}

            <div className="mt-8 p-4 rounded-xl border border-primary/20 bg-primary/5">
              <p className="text-xs text-muted-foreground text-center">
                {isArabic
                  ? "⚡ تايم زون: إمارات العربية المتحدة (GST+4)"
                  : "⚡ Timezone: UAE (GST +4) · Slots available this week"}
              </p>
            </div>
          </motion.div>

          {/* Center + Right — Calendly widget (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl border-2 border-primary/20 overflow-hidden bg-card/30 backdrop-blur-sm"
          >
            <CalendlyEmbed url={calendlyUrl} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
