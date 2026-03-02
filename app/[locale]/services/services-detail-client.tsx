"use client";
import React from "react";

import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
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

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-background to-background" />
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-16 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-6 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold mb-6">
            {isArabic ? "خدماتنا" : "What We Automate"}
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-foreground">
            {isArabic ? "خدمات أتمتة التجارة الإلكترونية" : "E-commerce Automation Services"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isArabic
              ? "كل جزء من عمليات متجرك — مؤتمت ويعمل بدونك."
              : "Every part of your store operations — automated and running without you."}
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 px-4 pb-32">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative rounded-2xl p-6 border transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 scroll-mt-24"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: "rgba(0,217,255,0.12)" }}
                    >
                      {IconComponent && <IconComponent className="w-6 h-6" style={{ color: "rgb(0,217,255)" }} />}
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-foreground leading-tight">
                        {isArabic ? service.title.ar : service.title.en}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {isArabic ? service.description.ar : service.description.en}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icons.CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "rgb(0,217,255)" }} />
                        <span className="text-foreground/75">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full text-xs font-medium border"
                        style={{ background: "rgba(0,217,255,0.08)", borderColor: "rgba(0,217,255,0.2)", color: "rgba(0,217,255,0.85)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-sm font-bold transition-all"
                    style={{ color: "rgb(0,217,255)" }}
                  >
                    {isArabic ? "اطلب هذه الخدمة" : "Get This Automated"}
                    <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-6">
              {isArabic ? "غير متأكد من أين تبدأ؟ نقوم بتدقيق مجاني لعملياتك." : "Not sure where to start? We'll audit your operations for free."}
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-base transition-all hover:scale-105"
              style={{ background: "rgb(0,217,255)", color: "#0a0a0f", boxShadow: "0 0 30px rgba(0,217,255,0.3)" }}
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
