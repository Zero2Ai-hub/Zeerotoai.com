"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import * as Icons from "lucide-react";
import { FileText } from "lucide-react";

const landingPagesCard = {
  titleEn: "Converting Landing Pages",
  titleAr: "صفحات هبوط تُحوِّل الزوار",
  badge1: "FEATURED",
  badge2: "From AED 1,500",
  subtitle: "Clinics · Salons · Restaurants · Contractors",
  descriptionEn: "Your old website is sending customers to your competitors. We build a fast, mobile-first page that actually converts — delivered in 5 days, no monthly fees, Arabic + English.",
  descriptionAr: "موقعك القديم يُرسل عملاءك إلى منافسيك. نبني صفحة سريعة ومتوافقة مع الجوال تُحوِّل الزوار فعلاً — تسليم في 5 أيام، بدون رسوم شهرية، عربي وإنجليزي.",
  bulletsEn: ["Delivered in 3–7 days", "Mobile-first + SEO optimized", "Arabic + English bilingual", "WhatsApp + booking integration", "From AED 1,500 — you own it"],
  bulletsAr: ["تسليم في 3–7 أيام", "أولوية الجوال + محسّن لجوجل", "ثنائي اللغة عربي + إنجليزي", "تكامل واتساب + حجز مواعيد", "من 1,500 درهم — تملكها بالكامل"],
  href: "/landing-pages",
  ctaEn: "See Packages & Pricing",
  ctaAr: "عرض الباقات والأسعار",
};

export function ServicesPreview() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const allServices = site.services;

  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />

      {/* borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/30" style={{ boxShadow: "0 0 20px rgba(0,217,255,0.4), 0 0 60px rgba(0,217,255,0.1)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30" style={{ boxShadow: "0 0 20px rgba(0,217,255,0.4), 0 0 60px rgba(0,217,255,0.1)" }} />
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20" style={{ background: "linear-gradient(to bottom, hsl(220,32%,11%) 0%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20" style={{ background: "linear-gradient(to top, hsl(220,32%,11%) 0%, transparent 100%)" }} />

      <div className="container relative z-50 mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-6 py-3 rounded-full bg-primary/40 text-white border-2 border-primary/60 text-lg font-black backdrop-blur-xl shadow-2xl shadow-primary/30 mb-6">
            {isArabic ? "خدماتنا" : "Our Services"}
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-3 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            {isArabic ? "ما نقدمه" : "What We Offer"}
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            {isArabic ? "حلول أتمتة شاملة مصممة خصيصًا لسير عملك" : "End-to-end automation solutions tailored to your workflow"}
          </p>
        </div>

        {/* Landing Pages — Featured Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href={`/${locale}${landingPagesCard.href}`} className="block group">
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary/60 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-8 md:p-10 hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
              {/* Badges */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary text-background text-xs font-black tracking-widest uppercase">
                  {landingPagesCard.badge1}
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold tracking-wide">
                  {landingPagesCard.badge2}
                </span>
              </div>

              <div className="flex items-start gap-5 mb-5">
                <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-xl shadow-primary/40 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-background" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors duration-300 mb-1">
                    {isArabic ? landingPagesCard.titleAr : landingPagesCard.titleEn}
                  </h3>
                  <p className="text-sm text-primary/70 font-mono tracking-wide">
                    {landingPagesCard.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg text-muted-foreground/90 group-hover:text-foreground/80 transition-colors mb-6 max-w-3xl leading-relaxed">
                {isArabic ? landingPagesCard.descriptionAr : landingPagesCard.descriptionEn}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {(isArabic ? landingPagesCard.bulletsAr : landingPagesCard.bulletsEn).map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm bg-primary/5 border border-primary/20 rounded-lg px-3 py-2">
                    <Icons.CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                <span>{isArabic ? landingPagesCard.ctaAr : landingPagesCard.ctaEn}</span>
                <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Link>
        </motion.div>

        {/* Other services — compact grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10"
        >
          {allServices.map((service, idx) => {
            const Icon = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <Link href={`/${locale}/services#${service.id}`} className="block group h-full">
                  <div className="h-full relative overflow-hidden rounded-xl border border-primary/20 hover:border-primary/50 bg-card/60 hover:bg-card p-4 flex flex-col gap-3 transition-all duration-200 hover:shadow-lg hover:shadow-primary/15 hover:-translate-y-0.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                        {Icon && <Icon className="h-4 w-4 text-primary" />}
                      </div>
                      <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {isArabic ? service.title.ar : service.title.en}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {isArabic
                        ? service.description.ar.split('.')[0] + '.'
                        : service.description.en.split('.')[0] + '.'}
                    </p>
                    <div className="mt-auto flex items-center gap-1 text-primary/60 group-hover:text-primary text-xs font-medium transition-colors">
                      <span>{isArabic ? "تفاصيل" : "Details"}</span>
                      <Icons.ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center relative"
        >
          <Link
            href={`/${locale}/services`}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 transition-all font-bold text-lg shadow-[0_8px_30px_rgb(0,217,255,0.3)] hover:shadow-[0_12px_40px_rgb(0,217,255,0.5)] hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">{isArabic ? "استكشف جميع الخدمات" : "Explore All Services"}</span>
            <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </Link>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-primary/30 blur-2xl rounded-full" />
        </motion.div>

        {/* Platform independence trust signal */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground/70 mt-10 flex items-center justify-center gap-2"
        >
          <Icons.ShieldCheck className="w-4 h-4 text-primary/60 flex-shrink-0" />
          <span>
            {isArabic
              ? "أتمتتك تعمل على بنيتك التحتية. لا يمكن لأي منصة إيقافها."
              : "Your automation runs on your infrastructure. No platform can turn it off."}
          </span>
        </motion.p>

        {/* No vendor lock-in trust signal */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground/70 mt-3 flex items-center justify-center gap-2"
        >
          <Icons.Unlock className="w-4 h-4 text-primary/60 flex-shrink-0" />
          <span>
            {isArabic
              ? "نستخدم معايير مفتوحة. تملك كل ما نبنيه — بدون اشتراكات، بدون قيود."
              : "We use open standards. You own everything we build — no subscriptions, no lock-in."}
          </span>
        </motion.p>

      </div>
    </section>
  );
}
