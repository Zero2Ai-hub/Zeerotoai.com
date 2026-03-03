"use client";
import React from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface Service {
  key: string;
  id: string;
  icon: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  bullets: string[];
  tags: string[];
}

interface ServicesDetailClientProps {
  services: Service[];
}

export function ServicesDetailClient({ services }: ServicesDetailClientProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const agentCommerce = services.find(s => s.key === "agent-commerce-ready")!;
  const otherServices = services.filter(s => s.key !== "agent-commerce-ready");
  const AgentIcon = Icons[agentCommerce.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative z-10 pt-32 pb-12 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-5 py-2 rounded-full bg-primary/15 text-primary border border-primary/30 text-sm font-bold mb-5 tracking-wide">
            {isArabic ? "خدماتنا" : "What We Automate"}
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-foreground">
            {isArabic ? "خدمات أتمتة التجارة الإلكترونية" : "E-commerce Automation Services"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isArabic
              ? "كل جزء من عمليات متجرك — مؤتمت ويعمل بدونك."
              : "Every part of your store operations — automated and running without you."}
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 px-4 pb-24">
        <div className="container mx-auto max-w-5xl space-y-5">

          {/* Agent Commerce — Featured Hero Card */}
          <motion.div
            id={agentCommerce.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="scroll-mt-24"
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary/60 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-8 md:p-10 hover:border-primary hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 group">
              {/* Badges */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 flex-wrap justify-end">
                <span className="px-3 py-1 rounded-full bg-primary text-background text-xs font-black tracking-widest uppercase">
                  {isArabic ? "جديد" : "NEW"}
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold">
                  {isArabic ? "الأول في الإمارات" : "First in UAE/GCC"}
                </span>
              </div>

              <div className="flex items-start gap-5 mb-5">
                <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-xl shadow-primary/40 group-hover:scale-110 transition-transform duration-300">
                  {AgentIcon && <AgentIcon className="h-8 w-8 text-background" />}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors mb-1">
                    {isArabic ? agentCommerce.title.ar : agentCommerce.title.en}
                  </h2>
                  <p className="text-xs text-primary/60 font-mono tracking-wide">
                    MoonPay · Coinbase Commerce · Base · x402 · MCP
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg text-muted-foreground/90 group-hover:text-foreground/80 transition-colors mb-6 max-w-3xl leading-relaxed">
                {isArabic ? agentCommerce.description.ar : agentCommerce.description.en}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {agentCommerce.bullets?.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm bg-primary/5 border border-primary/20 rounded-lg px-3 py-2">
                    <Icons.CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {agentCommerce.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-primary/30 text-primary/80 bg-primary/5">{tag}</span>
                  ))}
                </div>
                <Link
                  href="/book"
                  className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-background text-sm font-black hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/30"
                >
                  {isArabic ? "ابدأ الآن" : "Get Started"}
                  <Icons.ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Other services — 2 col detailed cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherServices.map((service, index) => {
              const Icon = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="scroll-mt-24 group relative rounded-xl border border-primary/15 bg-card/60 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 p-6 flex flex-col gap-4 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                  {/* Header */}
                  <div className="relative flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      {Icon && <Icon className="w-5 h-5 text-primary" />}
                    </div>
                    <h2 className="text-lg font-black text-foreground group-hover:text-primary transition-colors leading-snug">
                      {isArabic ? service.title.ar : service.title.en}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="relative text-sm text-muted-foreground leading-relaxed">
                    {isArabic ? service.description.ar : service.description.en}
                  </p>

                  {/* Bullets */}
                  <ul className="relative space-y-1.5">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-foreground/70">
                        <Icons.CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags + CTA */}
                  <div className="relative mt-auto pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.filter(Boolean).slice(0, 4).map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded border border-white/10 text-muted-foreground">{tag}</span>
                      ))}
                    </div>
                    <Link
                      href="/book"
                      className="flex items-center gap-1.5 text-xs font-bold text-primary hover:gap-2.5 transition-all"
                    >
                      {isArabic ? "اطلب الخدمة" : "Get This Automated"}
                      <Icons.ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <p className="text-muted-foreground text-sm mb-5">
              {isArabic ? "غير متأكد من أين تبدأ؟ نقوم بتدقيق مجاني لعملياتك." : "Not sure where to start? We'll audit your ops for free."}
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-background font-black text-base hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/30"
            >
              {isArabic ? "احجز التدقيق المجاني" : "Book Free Audit"}
              <Icons.ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
