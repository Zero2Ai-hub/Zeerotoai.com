"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";

const differentiators = [
  {
    icon: "🛡️",
    title: { en: "Governed Autonomy", ar: "الاستقلالية المحكومة" },
    description: {
      en: "Every AI action is logged, reviewable, and reversible. Your system runs autonomously — but you stay in control. No surprises, no black boxes.",
      ar: "كل إجراء للذكاء الاصطناعي مسجل وقابل للمراجعة. نظامك يعمل باستقلالية — لكنك تبقى في السيطرة.",
    },
  },
  {
    icon: "📊",
    title: { en: "Outcome Accountability", ar: "المساءلة على النتائج" },
    description: {
      en: "We commit to measurable outcomes: hours saved, costs cut, revenue lifted. If it doesn't perform, we fix it.",
      ar: "نلتزم بنتائج قابلة للقياس: ساعات موفرة وتكاليف مخفضة وإيرادات محسّنة. إذا لم يؤدِّ، نصلحه.",
    },
  },
  {
    icon: "🔍",
    title: { en: "Full Rejection Logging", ar: "تسجيل الرفض الكامل" },
    description: {
      en: "When AI declines or escalates a task, it's captured and explained. You always know what happened — and why. Compliance-ready from day one.",
      ar: "عندما يرفض الذكاء الاصطناعي مهمة، يتم تسجيلها وشرحها. أنت تعرف دائماً ما حدث — ولماذا.",
    },
  },
  {
    icon: "🔓",
    title: { en: "You Own It. Forever.", ar: "أنت تملكه. للأبد." },
    description: {
      en: "No vendor lock-in, no recurring platform fees. Code, workflows, prompts — all yours. We build it, you own it.",
      ar: "لا ارتباط بمورد، لا رسوم منصة متكررة. الكود والسير والأوامر — كلها ملكك.",
    },
  },
  {
    icon: "🤖",
    title: { en: "Multi-Model Intelligence", ar: "ذكاء متعدد النماذج" },
    description: {
      en: "Claude, GPT-4o, and Gemini — deployed where each performs best. Your system gets the right brain for every task.",
      ar: "كلاود وGPT-4o وجيميني — كل حيث يتفوق. نظامك يحصل على العقل المناسب لكل مهمة.",
    },
  },
  {
    icon: "🇦🇪",
    title: { en: "UAE-First, GCC-Ready", ar: "الإمارات أولاً، الخليج جاهز" },
    description: {
      en: "Arabic-English bilingual systems, local compliance, WhatsApp-first workflows, and GCC payment rails. Built for here.",
      ar: "أنظمة ثنائية اللغة، الامتثال المحلي، سير العمل عبر واتساب، وبوابات الدفع الخليجية.",
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
            {isArabic
              ? "هناك المئات من وكالات الذكاء الاصطناعي."
              : "There Are Hundreds of AI Agencies."}
            <br />
            <span className="text-primary">
              {isArabic ? "إليك ما يجعلنا مختلفين." : "Here's What Makes Us Different."}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isArabic
              ? "لا نبيع خدمات. نبني أنظمة — مع المساءلة والشفافية والملكية الكاملة."
              : "We don't sell services. We build systems — with accountability, transparency, and full ownership."}
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
