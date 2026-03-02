"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Handshake, Sparkles } from "lucide-react";
import { GlowingBorder } from "@/components/glowing-border";
import Link from "next/link";

interface AboutData {
  mission: { en: string; ar: string };
  approach: {
    title: { en: string; ar: string };
    steps: ReadonlyArray<{ en: string; ar: string }>;
  };
  tools: {
    title: { en: string; ar: string };
    list: readonly string[];
  };
}

interface AboutClientProps {
  isArabic: boolean;
  about: AboutData;
}

export function AboutClient({ isArabic, about }: AboutClientProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  // Mission & Promise
  const ourPromise = {
    en: "We'll listen to your challenges, design solutions that work, and deliver results you can see.",
    ar: "سنستمع إلى تحدياتك، ونصمم حلولاً تعمل، ونقدم نتائج يمكنك رؤيتها.",
  };

  const ourStory = {
    title: {
      en: "Why We Started Zeerotoai",
      ar: "لماذا بدأنا Zero2AI",
    },
    content: {
      en: "Zeerotoai started because we were building automation systems for our own e-commerce brand. We got so good at it that other brands wanted the same systems. Now we build them for you. We are not a consulting firm — we are operators who know what it takes to run a store at scale.",
      ar: "بدأت Zeerotoai لأننا كنا نبني أنظمة أتمتة لعلامتنا التجارية الخاصة في التجارة الإلكترونية. أصبحنا ماهرين جداً في ذلك لدرجة أن العلامات التجارية الأخرى أرادت نفس الأنظمة. الآن نبنيها لك. نحن لسنا شركة استشارات — نحن مشغّلون نعرف ما يتطلبه تشغيل متجر على نطاق واسع.",
    },
  };

  // Process steps with detailed info
  const processSteps = [
    {
      title: { en: "Free Strategy Call", ar: "مكالمة استراتيجية مجانية" },
      description: {
        en: "We listen to your challenges, ask questions, and identify automation opportunities. No sales pressure, just honest advice.",
        ar: "نستمع إلى تحدياتك، ونطرح الأسئلة، ونحدد فرص الأتمتة. لا ضغط مبيعات، فقط نصيحة صادقة.",
      },
      duration: { en: "30 minutes", ar: "30 دقيقة" },
    },
    {
      title: { en: "Proposal & Planning", ar: "العرض والتخطيط" },
      description: {
        en: "We map out exactly what we'll build with clear pricing, timeline, and expected outcomes.",
        ar: "نرسم بالضبط ما سنبنيه مع تسعير واضح، والجدول الزمني، والنتائج المتوقعة.",
      },
      duration: { en: "2-3 days", ar: "2-3 أيام" },
    },
    {
      title: { en: "Build & Test", ar: "البناء والاختبار" },
      description: {
        en: "We design and build your automation, test rigorously, and keep you updated throughout.",
        ar: "نصمم ونبني الأتمتة الخاصة بك، ونختبرها بدقة، ونبقيك على اطلاع طوال الوقت.",
      },
      duration: { en: "1-2 weeks", ar: "1-2 أسبوع" },
    },
    {
      title: { en: "Launch & Training", ar: "الإطلاق والتدريب" },
      description: {
        en: "We deploy your automation, train you and your team, and provide comprehensive documentation.",
        ar: "نطلق الأتمتة الخاصة بك، وندرب فريقك، ونوفر وثائق شاملة.",
      },
      duration: { en: "1 day", ar: "يوم واحد" },
    },
    {
      title: { en: "Support & Optimization", ar: "الدعم والتحسين" },
      description: {
        en: "We monitor performance, make adjustments as needed, and remain available for questions.",
        ar: "نراقب الأداء، ونجري التعديلات حسب الحاجة، ونبقى متاحين للأسئلة.",
      },
      duration: { en: "Ongoing", ar: "مستمر" },
    },
  ];

  const values = [
    {
      en: "You own everything. No vendor lock-in, full access to all code and workflows",
      ar: "أنت تملك كل شيء - لا حبس لدى بائع، وصول كامل إلى جميع التعليمات البرمجية وسير العمل",
    },
    {
      en: "Proven track record with real, measurable results",
      ar: "سجل حافل بنتائج حقيقية وقابلة للقياس",
    },
    {
      en: "Fast turnaround. 48 hour delivery possible for urgent needs",
      ar: "تسليم سريع - تسليم خلال 48 ساعة ممكن للاحتياجات العاجلة",
    },
    {
      en: "Tailored solutions designed specifically for your needs",
      ar: "حلول مخصصة مصممة خصيصًا لاحتياجاتك",
    },
    {
      en: "Honest advice with no sales pressure. We're here to help, not push",
      ar: "نصيحة صادقة بدون ضغط مبيعات - نحن هنا للمساعدة، وليس للدفع",
    },
    {
      en: "Comprehensive training and documentation in plain English",
      ar: "تدريب شامل ووثائق بلغة بسيطة",
    },
  ];

  return (
    <>
      {/* Mission, Promise & Why Choose Us - Grid Layout */}
      <section className="relative z-10 py-16 px-4 border-t border-primary/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Mission & Promise Stacked */}
            <div className="space-y-8">
              {/* Our Mission */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-card/50 to-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                  <div className="p-8 md:p-10 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">
                        {isArabic ? "مهمتنا" : "Our Mission"}
                      </h2>
                    </div>
                    <p className="text-xl text-primary font-semibold leading-relaxed">
                      {isArabic 
                        ? "بناء أتمتة ذكية تجعل عملك أسرع وأذكى وأكثر ربحية."
                        : "Build clever automations that make your business faster, smarter, and more profitable."}
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Our Promise */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-card/50 to-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                  <div className="p-8 md:p-10 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Handshake className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">
                        {isArabic ? "وعدنا" : "Our Promise"}
                      </h2>
                    </div>
                    <p className="text-xl text-primary font-semibold leading-relaxed">
                      {isArabic ? ourPromise.ar : ourPromise.en}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Right Column: Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="p-8 md:p-10 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {isArabic ? "لماذا تختارنا" : "Why Choose Us"}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                        </div>
                        <p className="text-base text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                          {isArabic ? value.ar : value.en}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {isArabic ? ourStory.title.ar : ourStory.title.en}
            </h2>
            
            {/* Enhanced content with visual interest */}
            <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-2xl" />
              
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-2xl" />
              
              <div className="text-xl md:text-2xl font-semibold text-foreground/90 leading-relaxed relative z-10 space-y-4">
                {isArabic ? (
                  <>
                    <p>بدأنا Zero2AI لأننا رأينا الشركات مثل شركتك تعاني من نفس المشاكل: الكثير من العمل اليدوي، وعدم كفاية الوقت، والنمو الذي يبدو مستحيلاً.</p>
                    <p>
                      <span className="text-primary font-bold">نحن نؤمن </span>
                      بأن كل شركة تستحق الوصول إلى الأتمتة الذكية،
                    </p>
                    <p className="relative inline-block">
                      <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-bold text-2xl md:text-3xl">
                        وليس فقط شركات فورتشن 500
                      </span>
                      <span className="absolute inset-0 bg-primary/20 blur-xl -z-10" />
                    </p>
                  </>
                ) : (
                  <>
                    <p>We started Zero2AI because we saw businesses like yours struggling with the same problems: too much manual work, not enough time, and growth that feels impossible.</p>
                    <p>
                      <span className="text-primary font-bold">We believe </span>
                      every business deserves access to intelligent automation,
                    </p>
                    <p className="relative inline-block">
                      <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-bold text-2xl md:text-3xl">
                        Not Just Big Corporations
                      </span>
                      <span className="absolute inset-0 bg-primary/20 blur-xl -z-10" />
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="relative z-10 py-16 px-4 border-t border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "عمليتنا" : "Our Process"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {isArabic 
                ? "من الفكرة إلى التنفيذ في 5 خطوات بسيطة"
                : "From idea to deployment in 5 simple steps"}
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 -translate-x-1/2" />

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {isArabic ? step.title.ar : step.title.en}
                          </h3>
                          <Badge className="bg-primary/10 text-primary border-primary/30">
                            {isArabic ? step.duration.ar : step.duration.en}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {isArabic ? step.description.ar : step.description.en}
                        </p>
                      </div>
                    </Card>
                  </div>

                  {/* Center circle */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40 border-4 border-background">
                      <span className="text-2xl font-black text-background">{index + 1}</span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-md animate-pulse" />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? about.approach.title.ar : about.approach.title.en}
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
          >
            {about.approach.steps.map((step, index) => (
              <motion.div key={index} variants={item}>
                <GlowingBorder>
                  <Card className="h-full group relative overflow-hidden border-2 border-primary/30 hover:border-primary/60 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                          <span className="text-xl font-black text-background">{index + 1}</span>
                        </div>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                          {isArabic ? step.ar : step.en}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    {/* Bottom glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Card>
                </GlowingBorder>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="relative z-10 py-16 px-4 border-t border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              {isArabic ? about.tools.title.ar : about.tools.title.en}
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {about.tools.list.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Badge className="px-5 py-3 text-base font-semibold bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 hover:scale-110 transition-all cursor-default">
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-3">
              {isArabic ? "هل أنت مستعد للبدء؟" : "Ready to Transform Your Workflow?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {isArabic
                ? "دعنا نناقش كيف يمكننا بناء الحل المثالي لك"
                : "Let's discuss how we can build the perfect solution for you"}
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              {isArabic ? "تواصل معنا" : "Get in Touch"}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

