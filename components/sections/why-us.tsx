"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Lock, Clock, Globe, BarChart3, PackageCheck, Video } from "lucide-react";

export function WhyUs() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

      <div className="container relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 text-sm font-bold mb-5 tracking-wide">
            {isArabic ? "لماذا تختارنا" : "Why Choose Us"}
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            {isArabic ? "لماذا تختارنا العلامات التجارية" : "Why E-commerce Brands Choose Us"}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {isArabic
              ? "لا نبيع استشارات. نبني أنظمة تعمل — ونسلّمها لك."
              : "We don't sell consulting. We build systems that run — and hand them over to you."}
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 auto-rows-auto">

          {/* 1 — You Own Everything — wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0 }}
            className="col-span-2 md:col-span-3 group relative rounded-2xl border border-primary/15 bg-card/60 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/10 p-6 flex flex-col gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,217,255,0.12)" }}>
                <Lock className="w-5 h-5" style={{ color: "rgb(0,217,255)" }} />
              </div>
              <div>
                <h3 className="text-lg font-black mb-1 group-hover:text-primary transition-colors">
                  {isArabic ? "أنت تملك كل شيء" : "You Own Everything"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {isArabic
                    ? "لا اشتراكات SaaS. الكود وسير العمل والبيانات — كلها تُنقل إليك."
                    : "No SaaS subscriptions. Code, workflows, data — all transferred to you."}
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* 2 — Live in 2 Weeks — stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}
            className="col-span-1 md:col-span-2 group relative rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 to-card/60 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/15 p-6 flex flex-col justify-between overflow-hidden"
          >
            <Clock className="w-5 h-5 mb-3" style={{ color: "rgb(0,217,255)" }} />
            <div>
              <div className="text-4xl md:text-5xl font-black text-primary mb-1" style={{ textShadow: "0 0 20px rgba(0,217,255,0.4)" }}>14</div>
              <div className="text-xs text-primary/60 font-mono uppercase tracking-widest mb-3">{isArabic ? "يوم أو أقل" : "days or less"}</div>
              <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                {isArabic ? "تشغيل في أسبوعين" : "Live in 2 Weeks"}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {isArabic ? "ليس مشروع استشارات. نشغّل أتمتتك الأولى في 14 يوماً." : "Not a consulting project. First automation live in 14 days."}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* 3 — UAE/GCC Native */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}
            className="col-span-1 md:col-span-1 group relative rounded-2xl border border-primary/15 bg-card/60 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/10 p-5 flex flex-col gap-2 overflow-hidden"
          >
            <Globe className="w-5 h-5 mb-1" style={{ color: "rgb(0,217,255)" }} />
            <h3 className="text-sm font-black group-hover:text-primary transition-colors leading-snug">
              {isArabic ? "مبني للإمارات والخليج" : "UAE/GCC Native"}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {isArabic ? "عربي، واتساب، موردون محليون، بوابات خليجية." : "Arabic, WhatsApp-first, local suppliers, GCC payments."}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* 4 — Real Proof — featured big card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
            className="col-span-2 md:col-span-3 group relative rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/12 via-card/80 to-card/40 hover:border-primary/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/20 p-7 overflow-hidden"
          >
            <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-bold tracking-wide">
              LIVE
            </div>
            <BarChart3 className="w-5 h-5 mb-4" style={{ color: "rgb(0,217,255)" }} />
            <div className="flex items-end gap-3 mb-4">
              <span className="text-5xl md:text-6xl font-black text-primary" style={{ textShadow: "0 0 24px rgba(0,217,255,0.5)" }}>40</span>
              <div className="pb-2">
                <div className="text-xs text-primary/60 font-mono uppercase tracking-widest">{isArabic ? "ساعة / أسبوع" : "hrs / week"}</div>
                <div className="text-xs text-muted-foreground">{isArabic ? "مؤتمتة بالكامل" : "fully automated"}</div>
              </div>
            </div>
            <h3 className="text-xl font-black mb-2 group-hover:text-primary transition-colors">
              {isArabic ? "دليل حقيقي" : "Real Proof"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {isArabic
                ? "Tech1Mart الإمارات تعمل على أنظمتنا. 40 ساعة من العمل اليدوي مؤتمتة كل أسبوع."
                : "Tech1Mart UAE runs on our systems. 40 hours of manual work automated every week."}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* 5 — Zero Manual Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.13 }}
            className="col-span-1 md:col-span-2 group relative rounded-2xl border border-primary/15 bg-card/60 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/10 p-6 flex flex-col gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <PackageCheck className="w-5 h-5" style={{ color: "rgb(0,217,255)" }} />
            <div className="relative z-10">
              <h3 className="text-base font-black mb-2 group-hover:text-primary transition-colors">
                {isArabic ? "صفر طلبات يدوية" : "Zero Manual Orders"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {isArabic
                  ? "كل طلب يُنفَّذ تلقائياً. التتبع يُرسل تلقائياً. أنت لا تلمسه أبداً."
                  : "Every order automatically fulfilled. Tracking pushed back. You never touch it."}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* 6 — AI Content $0.25 — stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.16 }}
            className="col-span-1 md:col-span-1 group relative rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 to-card/60 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/15 p-5 flex flex-col justify-between overflow-hidden"
          >
            <Video className="w-5 h-5 mb-2" style={{ color: "rgb(0,217,255)" }} />
            <div>
              <div className="text-3xl font-black text-primary mb-0.5" style={{ textShadow: "0 0 16px rgba(0,217,255,0.4)" }}>$0.25</div>
              <div className="text-xs text-primary/60 font-mono uppercase tracking-widest mb-2">{isArabic ? "لكل فيديو TikTok" : "per TikTok video"}</div>
              <h3 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                {isArabic ? "محتوى AI" : "AI Content"}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {isArabic ? "يُنشأ ويُكتب وينشر. لا وكالة، لا تصوير." : "Generated, captioned, posted. No agency, no filming."}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
