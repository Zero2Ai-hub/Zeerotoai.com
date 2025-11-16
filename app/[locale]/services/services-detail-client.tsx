"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as Icons from "lucide-react";
import { GlowingBorder } from "@/components/glowing-border";
import { projects } from "@/content/projects";

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

// Map services to related projects
const serviceProjectsMap: Record<string, string[]> = {
  "ai-automation": ["notion-to-x-content-engine"],
  "lead-generation": ["lead-generation-email-outreach", "b2b-lead-scraping-engine"],
  "ai-websites": ["zero2ai-website"],
  "ai-support": ["multilingual-business-support-chatbot", "ecommerce-presale-chatbot"],
  "social-media": ["veo-social-video-autopost", "notion-to-x-content-engine"],
  "ecommerce": ["winning-products-daily-scraper"],
};

// Process steps for each service
const serviceProcessSteps: Record<string, { icon: string; title: { en: string; ar: string }; description: { en: string; ar: string } }[]> = {
  "ai-automation": [
    { icon: "MessageSquareText", title: { en: "Discovery Call", ar: "مكالمة الاكتشاف" }, description: { en: "We map your workflow and identify automation opportunities", ar: "نرسم سير عملك ونحدد فرص الأتمتة" } },
    { icon: "PenTool", title: { en: "Design System", ar: "تصميم النظام" }, description: { en: "Blueprint your automation with tools and integrations", ar: "مخطط الأتمتة الخاص بك مع الأدوات والتكاملات" } },
    { icon: "Rocket", title: { en: "Build & Deploy", ar: "البناء والنشر" }, description: { en: "We create, test, and launch your automation", ar: "نقوم بإنشاء واختبار وإطلاق الأتمتة الخاصة بك" } },
    { icon: "BarChart3", title: { en: "Monitor & Optimize", ar: "المراقبة والتحسين" }, description: { en: "Continuous tracking and improvements", ar: "التتبع والتحسينات المستمرة" } },
  ],
  "lead-generation": [
    { icon: "Target", title: { en: "Define ICP", ar: "تحديد ICP" }, description: { en: "Identify your ideal customer profile and targeting criteria", ar: "حدد ملف تعريف العميل المثالي ومعايير الاستهداف" } },
    { icon: "Database", title: { en: "Scrape & Enrich", ar: "الاستخراج والإثراء" }, description: { en: "Collect leads and enrich with verified contact data", ar: "جمع العملاء المحتملين وإثراءهم ببيانات الاتصال الموثقة" } },
    { icon: "Sparkles", title: { en: "AI Personalization", ar: "التخصيص بالذكاء الاصطناعي" }, description: { en: "Craft personalized messages for each prospect", ar: "صياغة رسائل مخصصة لكل عميل محتمل" } },
    { icon: "Send", title: { en: "Launch Campaign", ar: "إطلاق الحملة" }, description: { en: "Automated multi-step outreach with follow-ups", ar: "تواصل متعدد الخطوات تلقائي مع متابعات" } },
  ],
  "ai-websites": [
    { icon: "Lightbulb", title: { en: "Scope & Plan", ar: "النطاق والتخطيط" }, description: { en: "Define features, tech stack, and project timeline", ar: "تحديد الميزات، المجموعة التقنية، والجدول الزمني" } },
    { icon: "Zap", title: { en: "Vibe Coding", ar: "البرمجة السريعة" }, description: { en: "Rapid development with Cursor and Bolt.ai", ar: "تطوير سريع مع Cursor و Bolt.ai" } },
    { icon: "TestTube", title: { en: "Test & Refine", ar: "الاختبار والتحسين" }, description: { en: "Quality checks and performance optimization", ar: "فحوصات الجودة وتحسين الأداء" } },
    { icon: "Rocket", title: { en: "Deploy Live", ar: "النشر المباشر" }, description: { en: "Launch on production with monitoring setup", ar: "الإطلاق على الإنتاج مع إعداد المراقبة" } },
  ],
  "ai-support": [
    { icon: "BookOpen", title: { en: "Knowledge Base", ar: "قاعدة المعرفة" }, description: { en: "Train AI on your docs, FAQs, and procedures", ar: "تدريب الذكاء الاصطناعي على المستندات والأسئلة الشائعة والإجراءات" } },
    { icon: "Bot", title: { en: "Build Agent", ar: "بناء الوكيل" }, description: { en: "Configure flows, intents, and responses", ar: "تكوين التدفقات والنوايا والردود" } },
    { icon: "Phone", title: { en: "Add Channels", ar: "إضافة القنوات" }, description: { en: "Integrate chat, phone, WhatsApp, email", ar: "دمج الدردشة والهاتف و WhatsApp والبريد الإلكتروني" } },
    { icon: "TrendingUp", title: { en: "Improve & Scale", ar: "التحسين والتوسع" }, description: { en: "Analyze conversations and enhance accuracy", ar: "تحليل المحادثات وتعزيز الدقة" } },
  ],
  "social-media": [
    { icon: "Calendar", title: { en: "Content Strategy", ar: "استراتيجية المحتوى" }, description: { en: "Plan themes, formats, and posting schedule", ar: "خطط المواضيع والصيغ وجدول النشر" } },
    { icon: "Video", title: { en: "AI Generation", ar: "التوليد بالذكاء الاصطناعي" }, description: { en: "Create videos, captions, and visuals with AI", ar: "إنشاء مقاطع فيديو وتعليقات ومرئيات بالذكاء الاصطناعي" } },
    { icon: "Upload", title: { en: "Auto-Post", ar: "النشر التلقائي" }, description: { en: "Schedule and publish across all platforms", ar: "جدولة ونشر عبر جميع المنصات" } },
    { icon: "MessageCircle", title: { en: "Engage & Monitor", ar: "التفاعل والمراقبة" }, description: { en: "Track performance and respond to DMs", ar: "تتبع الأداء والرد على الرسائل المباشرة" } },
  ],
  "ecommerce": [
    { icon: "ShoppingBag", title: { en: "Store Audit", ar: "تدقيق المتجر" }, description: { en: "Analyze your store and identify opportunities", ar: "تحليل متجرك وتحديد الفرص" } },
    { icon: "PenLine", title: { en: "AI Content", ar: "محتوى الذكاء الاصطناعي" }, description: { en: "Generate compelling product descriptions", ar: "إنشاء أوصاف منتجات مقنعة" } },
    { icon: "LineChart", title: { en: "PPC Setup", ar: "إعداد PPC" }, description: { en: "Launch and optimize ad campaigns", ar: "إطلاق وتحسين الحملات الإعلانية" } },
    { icon: "RefreshCw", title: { en: "Automate Reports", ar: "تقارير تلقائية" }, description: { en: "Daily insights and optimization suggestions", ar: "رؤى يومية واقتراحات التحسين" } },
  ],
};

export function ServicesDetailClient({ services }: ServicesDetailClientProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className="relative">
      {/* Sticky Navigation Sidebar */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden lg:block fixed left-8 top-1/3 z-50"
      >
        <div className="space-y-3">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <Link
                key={service.id}
                href={`#${service.id}`}
                className="group flex items-center justify-center p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-card/80 transition-all w-12 hover:w-auto hover:justify-start hover:gap-3"
              >
                <div className="flex-shrink-0 flex items-center justify-center">
                  {IconComponent && <IconComponent className="w-5 h-5 text-primary" />}
                </div>
                <span className="text-sm font-medium whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-300 overflow-hidden">
                  {isArabic ? service.title.ar : service.title.en}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-8 pb-16 max-w-7xl">
        {services.map((service, index) => {
          const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
          const isEven = index % 2 === 0;
          const relatedProjectIds = serviceProjectsMap[service.key] || [];
          const relatedProjects = projects.filter(p => relatedProjectIds.includes(p.id));
          const processSteps = serviceProcessSteps[service.key] || [];

          return (
            <motion.section
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative mb-32 scroll-mt-24"
            >
              {/* Background glow */}
              <div className={`absolute ${isEven ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10`} />

              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                {/* Left/Right Content */}
                <div className="flex-1 space-y-8">
                  {/* Title & Icon */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40">
                      {IconComponent && <IconComponent className="w-8 h-8 text-background" />}
                    </div>
                    <h2 className="text-4xl font-black text-white">
                      {isArabic ? service.title.ar : service.title.en}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {isArabic ? service.description.ar : service.description.en}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-3">
                    {service.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Icons.CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground/80">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="group bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary/70 text-primary-foreground font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50">
                      <Link href="/signup">
                        <span>{isArabic ? "ابدأ الآن" : "Get Started"}</span>
                        <Icons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="group border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10">
                      <Link href="/pricing#investment-ranges">
                        <Icons.DollarSign className="w-4 h-4 mr-2" />
                        <span>{isArabic ? "عرض الأسعار" : "View Pricing"}</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right/Left Visual Content */}
                <div className="flex-1 space-y-8">
                  {/* How It Works */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-center">
                      {isArabic ? "كيف يعمل" : "How It Works"}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {processSteps.map((step, idx) => {
                        const StepIcon = Icons[step.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                          >
                            <GlowingBorder>
                              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
                                <CardContent className="p-4 space-y-2">
                                  <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                      {StepIcon && <StepIcon className="w-4 h-4 text-primary" />}
                                    </div>
                                    <span className="text-xs font-bold text-primary">Step {idx + 1}</span>
                                  </div>
                                  <h4 className="font-bold text-sm">
                                    {isArabic ? step.title.ar : step.title.en}
                                  </h4>
                                  <p className="text-xs text-muted-foreground">
                                    {isArabic ? step.description.ar : step.description.en}
                                  </p>
                                </CardContent>
                              </Card>
                            </GlowingBorder>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Related Projects */}
                  {relatedProjects.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        {isArabic ? "مشروع ذو صلة" : "Related Project"}
                      </h3>
                      <div className="space-y-4">
                        {relatedProjects.slice(0, 1).map((project, idx) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                          >
                            <Link href={project.href} className="block group">
                              <GlowingBorder>
                                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all group-hover:-translate-y-1">
                                  <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between gap-2">
                                      <CardTitle className="text-base font-bold group-hover:text-primary transition-colors">
                                        {isArabic ? project.title.ar : project.title.en}
                                      </CardTitle>
                                      <Badge className="text-xs bg-primary/20 text-primary border-0 whitespace-nowrap">
                                        {isArabic ? project.badge.ar : project.badge.en}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="pt-0">
                                    <CardDescription className="text-xs line-clamp-2">
                                      {isArabic ? project.summary.ar : project.summary.en}
                                    </CardDescription>
                                  </CardContent>
                                </Card>
                              </GlowingBorder>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom divider */}
              {index < services.length - 1 && (
                <div className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              )}
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}

