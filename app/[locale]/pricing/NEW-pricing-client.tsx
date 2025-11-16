"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlowingBorder } from "@/components/glowing-border";
import Link from "next/link";
import { 
  CheckCircle2, 
  Zap, 
  Rocket, 
  Building2, 
  ArrowRight,
  Clock,
  Sparkles,
  Target,
  TrendingUp,
  MessageSquare,
  Users,
  ShoppingCart,
  Workflow,
  ChevronDown,
  ChevronUp,
  Calculator,
  DollarSign,
  Calendar,
  Shield,
  HeadphonesIcon,
  RefreshCw,
  LineChart,
  AlertCircle
} from "lucide-react";

interface PricingClientProps {
  isArabic: boolean;
}

export function PricingClient({ isArabic }: PricingClientProps) {
  const [expandedPainPoint, setExpandedPainPoint] = useState<string | null>(null);

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Pain Points Data
  const painPoints = [
    {
      id: "leads",
      icon: Target,
      title: { en: "I Need More Leads", ar: "أحتاج المزيد من العملاء المحتملين" },
      solutions: [
        { en: "LinkedIn lead generation", ar: "توليد العملاء المحتملين على LinkedIn" },
        { en: "AI-powered outreach campaigns", ar: "حملات التواصل المدعومة بالذكاء الاصطناعي" },
        { en: "Multi-channel lead capture", ar: "التقاط العملاء المحتملين متعدد القنوات" }
      ],
      results: { en: "500-3,000 leads/month • 3-5x pipeline increase", ar: "500-3,000 عميل محتمل/شهر • زيادة 3-5x في خط الأنابيب" },
      investment: { en: "$3,150 - $10,800", ar: "3,150 - 10,800 دولار" },
      roi: { en: "6-8 weeks", ar: "6-8 أسابيع" }
    },
    {
      id: "support",
      icon: MessageSquare,
      title: { en: "I Need Better Customer Support", ar: "أحتاج دعم عملاء أفضل" },
      solutions: [
        { en: "24/7 AI chatbot", ar: "روبوت دردشة AI على مدار الساعة" },
        { en: "Multi-channel support (WhatsApp, Web, Social)", ar: "دعم متعدد القنوات (WhatsApp، ويب، وسائل التواصل)" },
        { en: "Automated ticket routing", ar: "توجيه التذاكر الآلي" }
      ],
      results: { en: "60% tickets automated • 30 sec response time", ar: "60٪ من التذاكر تلقائية • 30 ثانية وقت الاستجابة" },
      investment: { en: "$4,500 - $16,200", ar: "4,500 - 16,200 دولار" },
      roi: { en: "4-6 weeks", ar: "4-6 أسابيع" }
    },
    {
      id: "social",
      icon: Users,
      title: { en: "I Need to Scale Social Media", ar: "أحتاج لتوسيع وسائل التواصل الاجتماعي" },
      solutions: [
        { en: "AI content generation", ar: "توليد المحتوى بالذكاء الاصطناعي" },
        { en: "Multi-platform scheduling", ar: "جدولة متعددة المنصات" },
        { en: "DM automation & analytics", ar: "أتمتة الرسائل المباشرة والتحليلات" }
      ],
      results: { en: "12+ hours/week saved • 3x content output", ar: "12+ ساعة/أسبوع موفرة • 3x إنتاج المحتوى" },
      investment: { en: "$3,600 - $13,500", ar: "3,600 - 13,500 دولار" },
      roi: { en: "8-10 weeks", ar: "8-10 أسابيع" }
    },
    {
      id: "ecommerce",
      icon: ShoppingCart,
      title: { en: "I Need E-commerce Automation", ar: "أحتاج أتمتة التجارة الإلكترونية" },
      solutions: [
        { en: "Product description generation", ar: "توليد أوصاف المنتجات" },
        { en: "Inventory & order automation", ar: "أتمتة المخزون والطلبات" },
        { en: "Customer service bot", ar: "روبوت خدمة العملاء" }
      ],
      results: { en: "18+ hours/week saved • Zero order errors", ar: "18+ ساعة/أسبوع موفرة • صفر أخطاء في الطلبات" },
      investment: { en: "$5,400 - $22,500", ar: "5,400 - 22,500 دولار" },
      roi: { en: "4-6 weeks", ar: "4-6 أسابيع" }
    },
    {
      id: "workflows",
      icon: Workflow,
      title: { en: "I Need Workflow Efficiency", ar: "أحتاج كفاءة سير العمل" },
      solutions: [
        { en: "Cross-app integrations", ar: "تكاملات عبر التطبيقات" },
        { en: "Data sync automation", ar: "أتمتة مزامنة البيانات" },
        { en: "Custom business workflows", ar: "سير عمل الأعمال المخصص" }
      ],
      results: { en: "10-20 hours/week saved per workflow", ar: "10-20 ساعة/أسبوع موفرة لكل سير عمل" },
      investment: { en: "$2,700 - $9,000", ar: "2,700 - 9,000 دولار" },
      roi: { en: "6-8 weeks", ar: "6-8 أسابيع" }
    },
    {
      id: "enterprise",
      icon: Building2,
      title: { en: "I Need Enterprise Transformation", ar: "أحتاج تحول المؤسسات" },
      solutions: [
        { en: "Complete automation infrastructure", ar: "البنية التحتية الكاملة للأتمتة" },
        { en: "Custom AI model development", ar: "تطوير نموذج AI مخصص" },
        { en: "Multi-department integration", ar: "تكامل متعدد الأقسام" }
      ],
      results: { en: "40+ hours/week saved company-wide", ar: "40+ ساعة/أسبوع موفرة على مستوى الشركة" },
      investment: { en: "$27,000 - $135,000+", ar: "27,000 - 135,000+ دولار" },
      roi: { en: "8-12 weeks", ar: "8-12 أسابيع" }
    }
  ];

  // Investment Ranges Data (10% off research prices)
  const investmentRanges = [
    {
      id: "starter",
      name: { en: "Quick Wins", ar: "انتصارات سريعة" },
      price: { en: "$1,080 - $2,250", ar: "1,080 - 2,250 دولار" },
      description: { 
        en: "Perfect for testing automation with single workflows", 
        ar: "مثالي لاختبار الأتمتة مع سير عمل واحد" 
      },
      icon: Zap,
      features: [
        { en: "1-2 workflow automations", ar: "1-2 أتمتة سير عمل" },
        { en: "Basic integrations (2-3 apps)", ar: "تكاملات أساسية (2-3 تطبيقات)" },
        { en: "1-2 week delivery", ar: "التسليم خلال 1-2 أسبوع" },
        { en: "30 days support", ar: "دعم لمدة 30 يومًا" },
      ],
      examples: [
        { en: "CRM automation: $1,080-$1,620", ar: "أتمتة CRM: 1,080-1,620 دولار" },
        { en: "Email workflow: $1,350-$1,980", ar: "سير عمل البريد الإلكتروني: 1,350-1,980 دولار" },
        { en: "Basic chatbot: $1,800-$2,250", ar: "روبوت دردشة أساسي: 1,800-2,250 دولار" },
      ],
      roi: { en: "4-6 weeks", ar: "4-6 أسابيع" },
    },
    {
      id: "growth",
      name: { en: "Growth Engine", ar: "محرك النمو" },
      price: { en: "$2,700 - $7,200", ar: "2,700 - 7,200 دولار" },
      description: { 
        en: "Multi-workflow solutions for growing businesses", 
        ar: "حلول متعددة سير العمل للشركات النامية" 
      },
      icon: Rocket,
      badge: { en: "Most Popular", ar: "الأكثر شعبية" },
      features: [
        { en: "2-4 workflow automations", ar: "2-4 أتمتة سير عمل" },
        { en: "AI-powered features", ar: "ميزات مدعومة بالذكاء الاصطناعي" },
        { en: "Medium complexity (4-8 apps)", ar: "تعقيد متوسط (4-8 تطبيقات)" },
        { en: "2-4 week delivery", ar: "التسليم خلال 2-4 أسابيع" },
        { en: "60 days support + training", ar: "دعم وتدريب لمدة 60 يومًا" },
      ],
      examples: [
        { en: "Lead generation system: $4,050", ar: "نظام توليد العملاء المحتملين: 4,050 دولار" },
        { en: "Multi-channel chatbot: $4,950", ar: "روبوت دردشة متعدد القنوات: 4,950 دولار" },
        { en: "Social media automation: $5,400", ar: "أتمتة وسائل التواصل الاجتماعي: 5,400 دولار" },
      ],
      roi: { en: "6-8 weeks", ar: "6-8 أسابيع" },
    },
    {
      id: "professional",
      name: { en: "Professional", ar: "محترف" },
      price: { en: "$9,000 - $22,500", ar: "9,000 - 22,500 دولار" },
      description: { 
        en: "Comprehensive systems for established businesses", 
        ar: "أنظمة شاملة للشركات القائمة" 
      },
      icon: Target,
      features: [
        { en: "5-10 workflow automations", ar: "5-10 أتمتة سير عمل" },
        { en: "Advanced AI features", ar: "ميزات AI متقدمة" },
        { en: "Complex integrations (10+ apps)", ar: "تكاملات معقدة (10+ تطبيقات)" },
        { en: "Custom development", ar: "تطوير مخصص" },
        { en: "4-8 week delivery", ar: "التسليم خلال 4-8 أسابيع" },
        { en: "90 days support", ar: "دعم لمدة 90 يومًا" },
        { en: "🎁 1 month FREE optimization", ar: "🎁 1 شهر تحسين مجاني" },
      ],
      examples: [
        { en: "Complete lead gen + nurture: $10,800", ar: "توليد العملاء المحتملين + الرعاية الكاملة: 10,800 دولار" },
        { en: "Multi-channel support: $13,500", ar: "دعم متعدد القنوات: 13,500 دولار" },
        { en: "Social media suite: $16,200", ar: "مجموعة وسائل التواصل الاجتماعي: 16,200 دولار" },
      ],
      roi: { en: "6-10 weeks", ar: "6-10 أسابيع" },
    },
    {
      id: "enterprise",
      name: { en: "Enterprise", ar: "مؤسسات" },
      price: { en: "$27,000 - $135,000+", ar: "27,000 - 135,000+ دولار" },
      description: { 
        en: "Strategic partnerships for digital transformation", 
        ar: "شراكات استراتيجية للتحول الرقمي" 
      },
      icon: Building2,
      features: [
        { en: "Complete automation infrastructure", ar: "البنية التحتية الكاملة للأتمتة" },
        { en: "Custom AI models", ar: "نماذج AI مخصصة" },
        { en: "Organization-wide integration", ar: "تكامل على مستوى المنظمة" },
        { en: "Dedicated account team", ar: "فريق حساب مخصص" },
        { en: "8-16+ week delivery", ar: "التسليم خلال 8-16+ أسبوع" },
        { en: "12 months support", ar: "دعم لمدة 12 شهرًا" },
        { en: "🎁 1 month FREE strategic partnership", ar: "🎁 1 شهر شراكة استراتيجية مجانية" },
      ],
      examples: [
        { en: "Digital transformation: $45,000", ar: "التحول الرقمي: 45,000 دولار" },
        { en: "Multi-department system: $67,500", ar: "نظام متعدد الأقسام: 67,500 دولار" },
        { en: "Enterprise AI infrastructure: $90,000+", ar: "البنية التحتية AI للمؤسسات: 90,000+ دولار" },
      ],
      roi: { en: "8-12 weeks", ar: "8-12 أسابيع" },
    }
  ];

  // Retainer Packages (10% off research prices)
  const retainerPackages = [
    {
      name: { en: "Maintenance", ar: "صيانة" },
      price: { en: "$450 - $810/month", ar: "450 - 810 دولار/شهر" },
      icon: HeadphonesIcon,
      description: { en: "For Starter/Growth clients", ar: "لعملاء المبتدئين/النمو" },
      features: [
        { en: "Bug fixes & updates", ar: "إصلاح الأخطاء والتحديثات" },
        { en: "Monitoring & alerts", ar: "المراقبة والتنبيهات" },
        { en: "Email support (48hr)", ar: "دعم البريد الإلكتروني (48 ساعة)" },
        { en: "Monthly health report", ar: "تقرير الصحة الشهري" },
        { en: "3 hours/month included", ar: "3 ساعات/شهر مشمولة" }
      ]
    },
    {
      name: { en: "Optimization", ar: "تحسين" },
      price: { en: "$1,350 - $2,700/month", ar: "1,350 - 2,700 دولار/شهر" },
      icon: RefreshCw,
      description: { en: "For Growth/Professional clients", ar: "لعملاء النمو/المحترفين" },
      badge: { en: "Most Popular", ar: "الأكثر شعبية" },
      features: [
        { en: "Everything in Maintenance", ar: "كل شيء في الصيانة" },
        { en: "Performance improvements", ar: "تحسينات الأداء" },
        { en: "New features (8-12 hrs/month)", ar: "ميزات جديدة (8-12 ساعة/شهر)" },
        { en: "Priority support (24hr)", ar: "دعم ذو أولوية (24 ساعة)" },
        { en: "Quarterly strategy call", ar: "مكالمة استراتيجية ربع سنوية" }
      ]
    },
    {
      name: { en: "Growth", ar: "نمو" },
      price: { en: "$3,600 - $6,300/month", ar: "3,600 - 6,300 دولار/شهر" },
      icon: LineChart,
      description: { en: "For Professional/Enterprise", ar: "للمحترفين/المؤسسات" },
      features: [
        { en: "Everything in Optimization", ar: "كل شيء في التحسين" },
        { en: "Bi-weekly strategy calls", ar: "مكالمات استراتيجية كل أسبوعين" },
        { en: "20-30 hours development", ar: "20-30 ساعة تطوير" },
        { en: "A/B testing & analytics", ar: "اختبار A/B والتحليلات" },
        { en: "Dedicated support channel", ar: "قناة دعم مخصصة" }
      ]
    },
    {
      name: { en: "Strategic", ar: "استراتيجي" },
      price: { en: "$9,000 - $22,500+/month", ar: "9,000 - 22,500+ دولار/شهر" },
      icon: Shield,
      description: { en: "Enterprise only", ar: "للمؤسسات فقط" },
      features: [
        { en: "Everything in Growth", ar: "كل شيء في النمو" },
        { en: "Dedicated strategist", ar: "استراتيجي مخصص" },
        { en: "Unlimited support", ar: "دعم غير محدود" },
        { en: "50-100 hours/month", ar: "50-100 ساعة/شهر" },
        { en: "C-level reporting", ar: "تقارير للإدارة العليا" }
      ]
    }
  ];

  return (
    <div className="relative z-10 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        
        {/* ========== PAIN POINTS SECTION ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {isArabic ? "ما هو أكبر تحديك؟" : "What's Your Biggest Challenge?"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isArabic
                ? "اختر حاجتك ونوضح لك كيف يمكننا المساعدة"
                : "Select your need and we'll show you how we can help"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point) => {
              const IconComponent = point.icon;
              const isExpanded = expandedPainPoint === point.id;

              return (
                <Card
                  key={point.id}
                  className={`border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    isExpanded 
                      ? 'border-primary/60 bg-gradient-to-br from-primary/10 to-card shadow-xl shadow-primary/20' 
                      : 'border-primary/20 bg-card/80 hover:border-primary/40'
                  }`}
                  onClick={() => setExpandedPainPoint(isExpanded ? null : point.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                    </div>
                    <CardTitle className="text-xl">
                      {isArabic ? point.title.ar : point.title.en}
                    </CardTitle>
                  </CardHeader>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-0">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-bold text-sm mb-2">{isArabic ? "الحلول:" : "Solutions:"}</h4>
                              <ul className="space-y-1">
                                {point.solutions.map((solution, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{isArabic ? solution.ar : solution.en}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-3 border-t border-primary/20">
                              <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                                <TrendingUp className="w-4 h-4 text-primary" />
                                <span>{isArabic ? "النتائج النموذجية:" : "Typical Results:"}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {isArabic ? point.results.ar : point.results.en}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-primary/20">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-semibold">{isArabic ? "الاستثمار:" : "Investment:"}</span>
                                <span className="text-primary font-bold">{isArabic ? point.investment.ar : point.investment.en}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold">{isArabic ? "عائد الاستثمار:" : "ROI:"}</span>
                                <span className="text-sm text-muted-foreground">{isArabic ? point.roi.ar : point.roi.en}</span>
                              </div>
                            </div>

                            <div className="flex gap-2 pt-3">
                              <Button asChild size="sm" className="flex-1">
                                <Link href="/signup">
                                  {isArabic ? "احصل على عرض" : "Get Quote"}
                                </Link>
                              </Button>
                              <Button asChild size="sm" variant="outline" className="flex-1">
                                <Link href="/portfolio">
                                  {isArabic ? "أمثلة مشابهة" : "See Examples"}
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* ========== INVESTMENT RANGES SECTION ========== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {isArabic ? "نطاقات الاستثمار حسب نطاق المشروع" : "Investment Ranges by Project Scope"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isArabic
                ? "أسعار شفافة تعتمد على احتياجاتك المحددة"
                : "Transparent pricing based on your specific needs"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {investmentRanges.map((tier, index) => {
              const IconComponent = tier.icon;
              const isPopular = tier.badge;

              return (
                <motion.div key={tier.id} variants={item}>
                  <GlowingBorder>
                    <Card className={`h-full relative overflow-hidden border-2 ${
                      isPopular 
                        ? 'border-primary/60 bg-gradient-to-br from-primary/10 to-card/80' 
                        : 'border-primary/30 bg-card/80'
                    } backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 flex flex-col`}>
                      {/* Popular badge */}
                      {isPopular && (
                        <div className="absolute top-4 right-4 z-10">
                          <Badge className="bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/50">
                            {isArabic ? tier.badge.ar : tier.badge.en}
                          </Badge>
                        </div>
                      )}

                      <CardHeader className="relative z-10 pb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40 mb-4">
                          <IconComponent className="h-6 w-6 text-background" />
                        </div>
                        <CardTitle className="text-2xl font-black mb-2">
                          {isArabic ? tier.name.ar : tier.name.en}
                        </CardTitle>
                        <div className="text-3xl font-black text-primary mb-2">
                          {isArabic ? tier.price.ar : tier.price.en}
                        </div>
                        <CardDescription className="text-sm">
                          {isArabic ? tier.description.ar : tier.description.en}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="relative z-10 flex-1 flex flex-col pt-0">
                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="font-bold text-xs uppercase text-muted-foreground mb-2">
                            {isArabic ? "يتضمن:" : "Includes:"}
                          </h4>
                          <ul className="space-y-1.5">
                            {tier.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{isArabic ? feature.ar : feature.en}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Examples */}
                        <div className="mb-4">
                          <h4 className="font-bold text-xs uppercase text-muted-foreground mb-2">
                            {isArabic ? "أمثلة:" : "Examples:"}
                          </h4>
                          <div className="space-y-1">
                            {tier.examples.map((example, idx) => (
                              <p key={idx} className="text-xs text-muted-foreground">
                                • {isArabic ? example.ar : example.en}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* ROI */}
                        <div className="mb-4 p-2 bg-primary/5 rounded-lg border border-primary/20">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold">{isArabic ? "عائد الاستثمار:" : "ROI Timeline:"}</span>
                            <span className="text-primary font-bold">{isArabic ? tier.roi.ar : tier.roi.en}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <Button
                          asChild
                          className={`w-full mt-auto ${
                            isPopular
                              ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/40'
                              : 'bg-primary/10 hover:bg-primary/20 text-primary border-2 border-primary/30'
                          }`}
                          size="sm"
                        >
                          <Link href="/signup" className="flex items-center justify-center gap-2">
                            {isArabic ? "احصل على عرض مخصص" : "Get Custom Quote"}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>

                      {/* Bottom glow */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    </Card>
                  </GlowingBorder>
                </motion.div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">
                    {isArabic ? "إخلاء مسؤولية التسعير" : "Pricing Disclaimer"}
                  </p>
                  <p>
                    {isArabic
                      ? "جميع نطاقات الاستثمار المعروضة هي تقديرات بناءً على نطاق المشروع النموذجي. قد يكون استثمارك الفعلي أعلى أو أقل اعتمادًا على المتطلبات الفنية المحددة، وعدد التكاملات وتعقيدها، ومستوى تخصيص الذكاء الاصطناعي المطلوب، والجدول الزمني، وحجم الفريق، وتفضيلات الدعم المستمر. نقدم عروض أسعار ثابتة شفافة بعد فهم احتياجاتك الفريدة خلال استشارة مجانية."
                      : "All investment ranges shown are estimates based on typical project scope. Your actual investment may be higher or lower depending on specific technical requirements, number and complexity of integrations, level of AI customization needed, timeline, team size, and ongoing support preferences. We provide transparent, fixed-price proposals after understanding your unique needs during a free consultation."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ========== RETAINER PACKAGES SECTION ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {isArabic ? "شراكة مستمرة لنمو مستمر" : "Ongoing Partnership for Continuous Growth"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isArabic
                ? "حافظ على تحسين الأتمتة مع خطط الصيانة الشهرية"
                : "Keep your automation optimized with monthly maintenance plans"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {retainerPackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              const isPopular = pkg.badge;

              return (
                <Card
                  key={index}
                  className={`border-2 ${
                    isPopular 
                      ? 'border-primary/60 bg-gradient-to-br from-primary/10 to-card shadow-lg shadow-primary/20' 
                      : 'border-primary/20 bg-card/80'
                  } hover:border-primary/40 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col`}
                >
                  {isPopular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground font-bold text-xs">
                        {isArabic ? pkg.badge.ar : pkg.badge.en}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      {isArabic ? pkg.name.ar : pkg.name.en}
                    </CardTitle>
                    <div className="text-2xl font-black text-primary">
                      {isArabic ? pkg.price.ar : pkg.price.en}
                    </div>
                    <CardDescription className="text-xs">
                      {isArabic ? pkg.description.ar : pkg.description.en}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 pt-0">
                    <ul className="space-y-1.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{isArabic ? feature.ar : feature.en}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-card inline-block">
              <CardContent className="p-4">
                <p className="text-sm">
                  <strong>{isArabic ? "🎁 عرض خاص:" : "🎁 Special Offer:"}</strong>{" "}
                  {isArabic
                    ? "جميع عملاء المحترفين والمؤسسات يحصلون على شهر واحد مجاني لتجربة قيمة الشراكة المستمرة"
                    : "All Professional & Enterprise clients get 1 month FREE to experience the value of ongoing partnership"}
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* ========== FINAL CTA ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/20 via-primary/10 to-card/80 backdrop-blur-sm overflow-hidden relative max-w-3xl mx-auto">
            <div className="absolute inset-0 circuit-pattern opacity-10" />
            <CardContent className="p-12 relative z-10">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-black mb-4">
                {isArabic ? "جاهز لأتمتة عملك؟" : "Ready to Automate Your Business?"}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {isArabic
                  ? "احجز مكالمة استشارية مجانية مدتها 30 دقيقة. سنحلل سير عملك ونوصي بالحل الأمثل لاحتياجاتك وميزانيتك"
                  : "Book a free 30-minute consultation. We'll analyze your workflow and recommend the perfect solution for your needs and budget"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/60 transition-all hover:scale-105"
                >
                  <Link href="/signup" className="flex items-center gap-2">
                    {isArabic ? "احجز استشارة مجانية" : "Book Free Consultation"}
                    <Calendar className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-primary/30"
                >
                  <Link href="/portfolio" className="flex items-center gap-2">
                    {isArabic ? "عرض مشاريعنا" : "View Our Work"}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}

