"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Package } from "lucide-react";

interface AboutClientProps {
  isArabic: boolean;
  about?: any;
}

const stats = [
  { value: "40+",    label: { en: "hrs/week automated",    ar: "ساعة/أسبوع مؤتمتة"     } },
  { value: "15",     label: { en: "AI agents running",     ar: "وكيل ذكاء اصطناعي نشط" } },
  { value: "14",     label: { en: "days avg deployment",   ar: "يوم متوسط النشر"       } },
  { value: "100%",   label: { en: "client code ownership", ar: "ملكية الكود للعميل"    } },
];

const steps = [
  {
    n: "01",
    title: { en: "Free 30-min audit", ar: "تدقيق مجاني 30 دقيقة" },
    desc: {
      en: "We map your highest-ROI automation opportunity. No sales pitch, no commitment.",
      ar: "نحدد أعلى فرصة أتمتة عائداً لديك. بدون عروض مبيعات، بدون التزام.",
    },
  },
  {
    n: "02",
    title: { en: "We build it", ar: "نبنيه" },
    desc: {
      en: "Your system live in 2 weeks. We handle everything — infrastructure, integrations, testing.",
      ar: "نظامك يعمل في أسبوعين. نتولى كل شيء — البنية التحتية، التكاملات، الاختبار.",
    },
  },
  {
    n: "03",
    title: { en: "You own it", ar: "أنت تملكه" },
    desc: {
      en: "Full handover: code, docs, training. No monthly fees. No vendor lock-in. It's yours.",
      ar: "تسليم كامل: الكود، التوثيق، التدريب. بدون رسوم شهرية. بدون قيود. إنه ملكك.",
    },
  },
];

const guarantees = [
  { icon: Zap,     en: "Live in 2 weeks or we work for free until it is.",            ar: "تشغيل في أسبوعين أو نعمل مجاناً حتى يعمل."           },
  { icon: Shield,  en: "You own 100% of what we build. No vendor lock-in, ever.",     ar: "تملك 100% مما نبنيه. بدون قيود بائع أبداً."           },
  { icon: Package, en: "If it breaks, we fix it. No extra charge.",                   ar: "إذا تعطل، نصلحه. بدون رسوم إضافية."                  },
];

export function AboutClient({ isArabic }: AboutClientProps) {
  return (
    <div className="relative z-10 px-4 pb-24 space-y-16">
      <div className="container mx-auto max-w-5xl">

        {/* The story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 via-card/60 to-card/40 p-8 md:p-12"
        >
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-5">
              {isArabic
                ? "بدأت Zeerotoai لأننا كنا نبني أنظمة أتمتة لمتجر Tech1Mart الخاص بنا في الإمارات. أصبحنا ماهرين جداً في ذلك لدرجة أن العلامات التجارية الأخرى أرادت نفس الأنظمة."
                : "Zeerotoai started because we were building automation systems for our own e-commerce store, Tech1Mart UAE. We got so good at it that other brands wanted the same systems."}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-5">
              {isArabic
                ? "نحن لسنا شركة استشارات تبيع نصائح. نحن مشغّلون يديرون 15 وكيل ذكاء اصطناعي عبر شركتين حيّتين — كل يوم. ما نبنيه لك هو نفس ما يشغّل عملياتنا."
                : "We are not a consulting firm selling advice. We are operators running 15 AI agents across 2 live businesses — every day. What we build for you is the same stack running our own operations."}
            </p>
            <p className="text-base text-primary font-bold font-mono tracking-wide">
              {isArabic ? "مشغّلون أولاً. وكالة ثانياً." : "Operators first. Agency second."}
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="flex-1 rounded-xl border border-primary/20 bg-card/60 p-6 text-center hover:border-primary/40 transition-colors"
            >
              <div
                className="text-4xl font-black mb-1"
                style={{ color: "rgb(0,217,255)", textShadow: "0 0 16px rgba(0,217,255,0.4)" }}
              >
                {s.value}
              </div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
                {isArabic ? s.label.ar : s.label.en}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How we work */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">
            {isArabic ? "كيف نعمل" : "How We Work"}
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="flex-1 group relative rounded-xl border border-primary/15 bg-card/60 hover:border-primary/40 hover:bg-card transition-all duration-300 p-6 overflow-hidden"
              >
                <div className="text-5xl font-black mb-4 leading-none" style={{ color: "rgba(0,217,255,0.15)" }}>
                  {step.n}
                </div>
                <h3 className="text-lg font-black mb-2 group-hover:text-primary transition-colors">
                  {isArabic ? step.title.ar : step.title.en}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {isArabic ? step.desc.ar : step.desc.en}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-primary/20 bg-card/40 p-8"
        >
          <h2 className="text-xl font-black mb-6 text-center">
            {isArabic ? "ضماناتنا" : "Our Guarantees"}
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {guarantees.map((g, i) => {
              const Icon = g.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isArabic ? g.ar : g.en}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm mb-5">
            {isArabic ? "مستعد لتشغيل أول أتمتة لك؟" : "Ready to run your first automation?"}
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-background font-black text-base hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/30"
          >
            {isArabic ? "احجز تدقيقاً مجانياً" : "Book a Free Audit"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
