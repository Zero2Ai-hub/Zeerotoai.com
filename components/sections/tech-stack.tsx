"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Truck, ShoppingCart, Video, Workflow, Cpu, Network, Database, Bot, Globe2 } from "lucide-react";

const stackItems = [
  { name: "Online Store", desc: { en: "Your store front", ar: "واجهة متجرك" }, icon: ShoppingBag },
  { name: "Dropshipping suppliers", desc: { en: "Supplier pipeline", ar: "خط أنابيب الموردين" }, icon: Truck },
  { name: "Amazon", desc: { en: "Marketplace automation", ar: "أتمتة السوق" }, icon: "🏪" },
  { name: "TikTok API", desc: { en: "Content distribution", ar: "توزيع المحتوى" }, icon: Video },
  { name: "n8n", desc: { en: "Workflow orchestration", ar: "تنسيق سير العمل" }, icon: "🔄" },
  { name: "AI Video Generation", desc: { en: "AI video generation", ar: "توليد الفيديو بالذكاء الاصطناعي" }, icon: "✨" },
  { name: "our agent infrastructure", desc: { en: "Agent infrastructure", ar: "بنية العملاء التحتية" }, icon: Bot },
  { name: "Supabase", desc: { en: "Data & reporting", ar: "البيانات والتقارير" }, icon: "🗄️" },
  { name: "Claude + GPT-4o", desc: { en: "AI brain", ar: "عقل الذكاء الاصطناعي" }, icon: Cpu },
  { name: "Vercel", desc: { en: "Always-on deployment", ar: "نشر دائم التشغيل" }, icon: "▲" },
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
            {isArabic ? "التقنيات" : "The Stack"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {isArabic ? "التقنيات وراء أتمتتك" : "The Stack Behind Your Automation"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isArabic
              ? "أدوات بمستوى المؤسسات. مركّزة على التجارة الإلكترونية. كلها متصلة ببعض."
              : "Enterprise-grade tools. E-commerce focused. All wired together."}
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
            ? "+ أكثر من 50 أداة وتكاملاً آخر حسب متطلبات متجرك"
            : "+ 50+ other tools and integrations tailored to your store requirements"}
        </motion.p>
      </div>
    </section>
  );
}
