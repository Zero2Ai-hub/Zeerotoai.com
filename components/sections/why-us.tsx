"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";

const differentiators = [
  {
    icon: "🔓",
    title: { en: "You Own Everything", ar: "أنت تملك كل شيء" },
    description: {
      en: "No SaaS subscriptions. The system we build is yours. Code, workflows, data — all transferred to you.",
      ar: "لا اشتراكات SaaS. النظام الذي نبنيه ملكك. الكود وسير العمل والبيانات — كلها تُنقل إليك.",
    },
  },
  {
    icon: "⚡",
    title: { en: "Live in 2 Weeks", ar: "تشغيل في أسبوعين" },
    description: {
      en: "Not a 6-month consulting project. We deploy your first automation in 14 days or less.",
      ar: "ليس مشروع استشارات لمدة 6 أشهر. ننشر أتمتتك الأولى في 14 يوماً أو أقل.",
    },
  },
  {
    icon: "🇦🇪",
    title: { en: "UAE/GCC Native", ar: "مبني للإمارات والخليج" },
    description: {
      en: "Arabic workflows, WhatsApp-first, local suppliers, GCC payment rails. Built for here.",
      ar: "سير عمل عربي، واتساب أولاً، موردون محليون، بوابات دفع خليجية. مبني لهنا.",
    },
  },
  {
    icon: "📊",
    title: { en: "Real Proof", ar: "دليل حقيقي" },
    description: {
      en: "Tech1Mart UAE runs on our systems. 40 hours of manual work automated per week.",
      ar: "Tech1Mart الإمارات تعمل على أنظمتنا. 40 ساعة من العمل اليدوي مؤتمتة أسبوعياً.",
    },
  },
  {
    icon: "🤖",
    title: { en: "Zero Manual Orders", ar: "صفر طلبات يدوية" },
    description: {
      en: "Every order from your store is automatically fulfilled. Tracking pushed back. You never touch it.",
      ar: "كل طلب من متجرك يتم تنفيذه تلقائياً. التتبع يُرسل تلقائياً. أنت لا تلمسه أبداً.",
    },
  },
  {
    icon: "🎬",
    title: { en: "AI Content at $0.25", ar: "محتوى ذكاء اصطناعي بـ $0.25" },
    description: {
      en: "TikTok videos generated, captioned, and posted for $0.25 each. No agency, no filming.",
      ar: "مقاطع TikTok تُنشأ وتُكتب وتُنشر بـ $0.25 لكل منها. لا وكالة، لا تصوير.",
    },
  },
];

export function WhyUs() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 px-6 py-3 text-base bg-primary/10 text-primary border-primary/30">
            {isArabic ? "لماذا تختارنا" : "Why Choose Us"}
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
            {isArabic ? "لماذا تختارنا علامات التجارة الإلكترونية" : "Why E-commerce Brands Choose Us"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isArabic
              ? "لا نبيع استشارات. نبني أنظمة تعمل — ونسلّمها لك."
              : "We don't sell consulting. We build systems that run — and hand them over to you."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl border border-primary/10 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {isArabic ? item.title.ar : item.title.en}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {isArabic ? item.description.ar : item.description.en}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
