"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";

const stackItems = [
  { name: "OpenClaw", desc: { en: "Agent orchestration", ar: "تنسيق العملاء" }, icon: "🤖" },
  { name: "MCP Protocol", desc: { en: "Model Context Protocol", ar: "بروتوكول سياق النموذج" }, icon: "🔗" },
  { name: "Claude 3.5", desc: { en: "Frontier reasoning", ar: "الاستدلال المتقدم" }, icon: "🧠" },
  { name: "GPT-4o", desc: { en: "Multimodal intelligence", ar: "ذكاء متعدد الوسائط" }, icon: "⚡" },
  { name: "Gemini", desc: { en: "Google's AI powerhouse", ar: "قوة جوجل بالذكاء الاصطناعي" }, icon: "✨" },
  { name: "n8n", desc: { en: "Workflow automation engine", ar: "محرك أتمتة سير العمل" }, icon: "🔄" },
  { name: "Vercel", desc: { en: "Edge deployment", ar: "النشر على الحافة" }, icon: "▲" },
  { name: "Supabase", desc: { en: "Open-source backend", ar: "الخلفية مفتوحة المصدر" }, icon: "🗄️" },
  { name: "Voiceflow", desc: { en: "Conversational AI", ar: "الذكاء الاصطناعي للمحادثة" }, icon: "🎙️" },
  { name: "Vapi", desc: { en: "Voice AI infrastructure", ar: "بنية الذكاء الاصطناعي الصوتي" }, icon: "📞" },
];

export function TechStack() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 px-6 py-3 text-base bg-primary/10 text-primary border-primary/30">
            {isArabic ? "البنية التحتية" : "Our Stack"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {isArabic ? "نبني على بنية تحتية" : "We Build on Infrastructure"}
            <br />
            <span className="text-primary">{isArabic ? "قابلة للتوسع" : "That Scales"}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isArabic
              ? "أدوات بمستوى المؤسسات. مجمّعة بذكاء. منشورة بسرعة."
              : "Enterprise-grade tools. Assembled intelligently. Deployed fast."}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stackItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col items-center text-center p-5 rounded-xl border border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{item.name}</div>
              <div className="text-xs text-muted-foreground leading-tight">
                {isArabic ? item.desc.ar : item.desc.en}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-10 text-sm"
        >
          {isArabic
            ? "+ أكثر من 50 أداة وتكاملاً آخر حسب متطلبات مشروعك"
            : "+ 50+ other tools and integrations tailored to your project requirements"}
        </motion.p>
      </div>
    </section>
  );
}
