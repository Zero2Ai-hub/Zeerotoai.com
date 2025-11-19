"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { 
  CheckCircle2, 
  Zap, 
  Rocket, 
  Building2, 
  ArrowRight,
  Clock,
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
  AlertCircle,
  Bot,
  Mail,
  Package
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
      investment: { en: "$4,050 - $10,800", ar: "4,050 - 10,800 دولار" },
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
      investment: { en: "$1,480 - $16,200", ar: "1,480 - 16,200 دولار" },
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
      investment: { en: "$3,850 - $13,500", ar: "3,850 - 13,500 دولار" },
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
      investment: { en: "$1,480 - $22,500", ar: "1,480 - 22,500 دولار" },
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

  // Investment Ranges Data (Based on calculator configurations)
  const investmentRanges = [
    {
      id: "starter",
      name: { en: "Quick Wins", ar: "انتصارات سريعة" },
      price: { en: "$1,110 - $3,000", ar: "1,110 - 3,000 دولار" },
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
        { en: "Basic chatbot: $1,480-$2,250", ar: "روبوت دردشة أساسي: 1,480-2,250 دولار" },
        { en: "CRM automation: $1,080-$1,620", ar: "أتمتة CRM: 1,080-1,620 دولار" },
        { en: "Email workflow: $1,350-$1,980", ar: "سير عمل البريد الإلكتروني: 1,350-1,980 دولار" },
      ],
      roi: { en: "4-6 weeks", ar: "4-6 أسابيع" },
    },
    {
      id: "growth",
      name: { en: "Growth Engine", ar: "محرك النمو" },
      price: { en: "$3,000 - $15,000", ar: "3,000 - 15,000 دولار" },
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
        { en: "30 days support + training", ar: "دعم وتدريب لمدة 30 يومًا" },
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
      price: { en: "$15,000 - $50,000", ar: "15,000 - 50,000 دولار" },
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
        { en: "30 days support", ar: "دعم لمدة 30 يومًا" },
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
      price: { en: "$50,000 - $135,000+", ar: "50,000 - 135,000+ دولار" },
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
        { en: "180 days support", ar: "دعم لمدة 180 يومًا" },
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
      id: "maintenance",
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
      id: "optimization",
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
      id: "growth",
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
      id: "strategic",
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

  // Productized Packages (Ready-Made Solutions)
  const productizedPackages = [
    {
      id: "ai-chatbot",
      slug: "ai-chatbot",
      name: { en: "Basic AI Chatbot", ar: "روبوت دردشة AI أساسي" },
      shortDesc: { en: "24/7 customer support automation for your website", ar: "أتمتة دعم العملاء على مدار الساعة لموقعك" },
      icon: Bot,
      price: { en: "$1,480 - $2,250", ar: "1,480 - 2,250 دولار" },
      delivery: { en: "5-7 days", ar: "5-7 أيام" },
      includes: [
        { en: "Website chat widget", ar: "أداة الدردشة على الموقع" },
        { en: "FAQ knowledge base", ar: "قاعدة معرفة الأسئلة الشائعة" },
        { en: "Lead capture form", ar: "نموذج التقاط العملاء المحتملين" },
        { en: "Basic analytics dashboard", ar: "لوحة تحليلات أساسية" }
      ]
    },
    {
      id: "lead-gen",
      slug: "lead-generation-system",
      name: { en: "Lead Generation System", ar: "نظام توليد العملاء المحتملين" },
      shortDesc: { en: "Automated prospecting and outreach on autopilot", ar: "البحث والتواصل الآلي على الطيار الآلي" },
      icon: Target,
      price: { en: "$4,050 - $6,300", ar: "4,050 - 6,300 دولار" },
      delivery: { en: "7-10 days", ar: "7-10 أيام" },
      includes: [
        { en: "Lead scraping automation", ar: "أتمتة استخراج العملاء المحتملين" },
        { en: "Email sequence builder", ar: "منشئ تسلسل البريد الإلكتروني" },
        { en: "CRM integration", ar: "تكامل CRM" },
        { en: "Performance tracking", ar: "تتبع الأداء" }
      ]
    },
    {
      id: "social-media",
      slug: "social-media-automation",
      name: { en: "Social Media Automation Suite", ar: "مجموعة أتمتة وسائل التواصل الاجتماعي" },
      shortDesc: { en: "Content creation and scheduling across all platforms", ar: "إنشاء المحتوى والجدولة عبر جميع المنصات" },
      icon: Users,
      price: { en: "$3,850 - $8,100", ar: "3,850 - 8,100 دولار" },
      delivery: { en: "10-14 days", ar: "10-14 يوم" },
      includes: [
        { en: "AI content generation", ar: "توليد محتوى AI" },
        { en: "Multi-platform posting", ar: "النشر متعدد المنصات" },
        { en: "Auto-engagement bot", ar: "روبوت المشاركة التلقائية" },
        { en: "Analytics reporting", ar: "تقارير التحليلات" }
      ]
    },
    {
      id: "ecommerce-kit",
      slug: "ecommerce-starter-kit",
      name: { en: "E-commerce Starter Kit", ar: "مجموعة بداية التجارة الإلكترونية" },
      shortDesc: { en: "Product descriptions, inventory, and order automation", ar: "أوصاف المنتجات والمخزون وأتمتة الطلبات" },
      icon: ShoppingCart,
      price: { en: "$1,480 - $5,400", ar: "1,480 - 5,400 دولار" },
      delivery: { en: "7-10 days", ar: "7-10 أيام" },
      includes: [
        { en: "AI product descriptions", ar: "أوصاف منتجات AI" },
        { en: "Inventory sync automation", ar: "أتمتة مزامنة المخزون" },
        { en: "Order processing workflow", ar: "سير عمل معالجة الطلبات" },
        { en: "Customer notifications", ar: "إشعارات العملاء" }
      ]
    },
    {
      id: "email-marketing",
      slug: "email-marketing-automation",
      name: { en: "Email Marketing Automation", ar: "أتمتة التسويق عبر البريد الإلكتروني" },
      shortDesc: { en: "Nurture campaigns and sales sequences on autopilot", ar: "حملات الرعاية وتسلسلات المبيعات على الطيار الآلي" },
      icon: Mail,
      price: { en: "$2,700 - $4,050", ar: "2,700 - 4,050 دولار" },
      delivery: { en: "5-7 days", ar: "5-7 أيام" },
      includes: [
        { en: "Welcome series automation", ar: "أتمتة سلسلة الترحيب" },
        { en: "Segmentation rules", ar: "قواعد التقسيم" },
        { en: "A/B testing setup", ar: "إعداد اختبار A/B" },
        { en: "Email analytics", ar: "تحليلات البريد الإلكتروني" }
      ]
    },
    {
      id: "support-bot",
      slug: "multi-channel-support-bot",
      name: { en: "Multi-Channel Support Bot", ar: "روبوت دعم متعدد القنوات" },
      shortDesc: { en: "WhatsApp, web, and social media support in one system", ar: "دعم WhatsApp والويب ووسائل التواصل الاجتماعي في نظام واحد" },
      icon: MessageSquare,
      price: { en: "$4,950 - $7,200", ar: "4,950 - 7,200 دولار" },
      delivery: { en: "10-14 days", ar: "10-14 يوم" },
      includes: [
        { en: "WhatsApp Business API", ar: "WhatsApp Business API" },
        { en: "Website live chat", ar: "الدردشة المباشرة على الموقع" },
        { en: "Social media integration", ar: "تكامل وسائل التواصل الاجتماعي" },
        { en: "Unified inbox", ar: "صندوق وارد موحد" }
      ]
    }
  ];

  // State for selected productized package
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <div className="relative z-10 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        
        {/* ========== PAIN POINTS SECTION ========== */}
        <motion.div
          id="pain-points"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 scroll-mt-24"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {painPoints.map((point) => {
              const IconComponent = point.icon;
              const isExpanded = expandedPainPoint === point.id;

              return (
                <Card
                  key={point.id}
                  className={`border-2 cursor-pointer transition-all duration-300 hover:shadow-xl self-start ${
                    isExpanded 
                      ? 'border-primary/60 bg-gradient-to-br from-primary/10 to-card shadow-xl shadow-primary/20' 
                      : 'border-primary/20 bg-card/80 hover:border-primary/40'
                  }`}
                  onClick={() => setExpandedPainPoint(isExpanded ? null : point.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg md:text-xl leading-snug">
                          {isArabic ? point.title.ar : point.title.en}
                        </CardTitle>
                      </div>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                    </div>
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
          id="investment-ranges"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-20 scroll-mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {isArabic ? "نطاقات الاستثمار حسب نطاق المشروع" : "Investment Ranges by Project Scope"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {isArabic
                ? "نطاقات شفافة من $1,110 (الأبسط) إلى $135,000+ (المؤسسات). استخدم حاسبتنا للحصول على التقدير الدقيق بناءً على احتياجاتك المحددة."
                : "Transparent ranges from $1,110 (simplest) to $135,000+ (enterprise). Use our calculator for your exact estimate based on your specific needs."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-6xl mx-auto">
            {investmentRanges.map((tier, index) => {
              const IconComponent = tier.icon;
              const isPopular = tier.badge;

              return (
                <motion.div key={tier.id} variants={item}>
                    <Card className={`h-full relative overflow-hidden border-2 ${
                      isPopular 
                        ? 'border-primary/60 bg-gradient-to-br from-primary/10 to-card' 
                        : 'border-primary/30 bg-card'
                    } transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 flex flex-col`}>
                      {/* Popular badge */}
                      {isPopular && (
                        <div className="absolute top-4 right-4 z-10">
                          <Badge className="bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/50 text-xs">
                            {isArabic ? tier.badge.ar : tier.badge.en}
                          </Badge>
                        </div>
                      )}

                      <CardHeader className="relative z-10 pb-6">
                        <div className={`flex items-start gap-4 mb-4 ${isPopular ? 'pr-28' : ''}`}>
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40 flex-shrink-0">
                            <IconComponent className="h-7 w-7 text-background" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-2xl md:text-3xl font-black mb-1 leading-tight">
                              {isArabic ? tier.name.ar : tier.name.en}
                            </CardTitle>
                            <div className="text-3xl md:text-4xl font-black text-primary">
                              {isArabic ? tier.price.ar : tier.price.en}
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          {isArabic ? tier.description.ar : tier.description.en}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="relative z-10 flex-1 flex flex-col pt-0">
                        {/* Features */}
                        <div className="mb-5">
                          <h4 className="font-bold text-sm uppercase text-muted-foreground mb-3">
                            {isArabic ? "يتضمن:" : "Includes:"}
                          </h4>
                          <ul className="space-y-2">
                            {tier.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{isArabic ? feature.ar : feature.en}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Examples */}
                        <div className="mt-auto mb-5">
                          <h4 className="font-bold text-sm uppercase text-muted-foreground mb-3">
                            {isArabic ? "أمثلة:" : "Examples:"}
                          </h4>
                          <div className="space-y-1.5">
                            {tier.examples.map((example, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                                • {isArabic ? example.ar : example.en}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* ROI */}
                        <div className="p-3 bg-primary/5 rounded-lg border border-primary/20 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-semibold">{isArabic ? "عائد الاستثمار:" : "ROI Timeline:"}</span>
                            <span className="text-primary font-bold">{isArabic ? tier.roi.ar : tier.roi.en}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        {tier.id === "enterprise" ? (
                          <Button
                            disabled
                            className="w-full bg-muted hover:bg-muted text-muted-foreground cursor-not-allowed"
                            size="default"
                          >
                            {isArabic ? "قريباً" : "Coming Soon"}
                          </Button>
                        ) : (
                          <Button
                            asChild
                            className={`w-full ${
                              isPopular
                                ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/40'
                                : 'bg-primary/10 hover:bg-primary/20 text-primary border-2 border-primary/30'
                            }`}
                            size="default"
                          >
                            <Link href="/signup" className="flex items-center justify-center gap-2">
                              {isArabic ? "احصل على عرض مخصص" : "Get Custom Quote"}
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                      </CardContent>

                      {/* Bottom glow */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Calculator CTA Banner */}
          <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/20 via-primary/10 to-background shadow-xl shadow-primary/20 mb-8">
            <CardContent className="p-8 text-center">
              <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-black mb-3">
                {isArabic ? "احسب نطاق الاستثمار الدقيق الخاص بك" : "Calculate Your Exact Investment Range"}
              </h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                {isArabic
                  ? "أدخل احتياجاتك المحددة واحصل على تقدير فوري ودقيق بناءً على متطلبات مشروعك"
                  : "Enter your specific needs and get an instant, accurate estimate based on your project requirements"}
              </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                 <Button
                   asChild
                   size="lg"
                   className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/60 transition-all hover:scale-105"
                 >
                   <Link href="/calculators/cost" className="flex items-center gap-2">
                     <Calculator className="w-5 h-5" />
                     {isArabic ? "استخدم حاسبة التكلفة" : "Use Cost Calculator"}
                     <ArrowRight className="w-4 h-4" />
                   </Link>
                 </Button>
                 <Button
                   asChild
                   size="lg"
                   variant="outline"
                   className="border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10"
                 >
                   <Link href="/calculators/roi" className="flex items-center gap-2">
                     <TrendingUp className="w-5 h-5" />
                     {isArabic ? "احسب العائد على الاستثمار" : "Calculate ROI"}
                   </Link>
                 </Button>
               </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-2 border-primary/20 bg-card">
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

        {/* ========== PRODUCTIZED PACKAGES SECTION ========== */}
        <motion.div
          id="ready-made-packages"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 scroll-mt-24"
        >
          <Card className="border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-background shadow-2xl shadow-cyan-500/10 relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
            
            <CardContent className="relative z-10 p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge className="mb-4 text-sm px-4 py-2 bg-cyan-500/20 text-cyan-400 border-cyan-500/40">
                  <Zap className="w-4 h-4 inline mr-2" />
                  {isArabic ? "حلول جاهزة - تسليم سريع" : "Ready-Made Solutions - Fast Delivery"}
                </Badge>
                <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {isArabic ? "هل تحتاج إلى حل جاهز؟" : "Need It Faster?"}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {isArabic
                    ? "اختر حلاً مُعدًا مسبقًا وانطلق في أيام، وليس أسابيع. نطاقات أسعار واضحة، نطاق محدد، نتائج مضمونة."
                    : "Choose a pre-built solution and launch in days, not weeks. Clear price ranges, defined scope, guaranteed results."}
                </p>
              </div>

          {/* Dropdown Selector */}
          <div className="max-w-md mx-auto mb-8">
            <Select value={selectedPackage || ""} onValueChange={setSelectedPackage}>
              <SelectTrigger className="w-full h-14 text-lg bg-card/80 border-2 border-primary/30 hover:border-primary/50 transition-colors">
                <SelectValue placeholder={isArabic ? "اختر منتج..." : "Select product..."} />
              </SelectTrigger>
              <SelectContent>
                {productizedPackages.map((pkg) => (
                  <SelectItem key={pkg.id} value={pkg.id} className="text-base py-3">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      {isArabic ? pkg.name.ar : pkg.name.en}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Inline Preview */}
          <AnimatePresence mode="wait">
            {selectedPackage && (
              <motion.div
                key={selectedPackage}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto"
              >
                {(() => {
                  const pkg = productizedPackages.find(p => p.id === selectedPackage);
                  if (!pkg) return null;
                  const IconComponent = pkg.icon;

                  return (
                      <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-card shadow-xl shadow-primary/20">
                        <CardHeader className="pb-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40 flex-shrink-0">
                              <IconComponent className="h-8 w-8 text-background" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-2xl md:text-3xl font-black mb-2 leading-tight">
                                {isArabic ? pkg.name.ar : pkg.name.en}
                              </CardTitle>
                              <CardDescription className="text-base">
                                {isArabic ? pkg.shortDesc.ar : pkg.shortDesc.en}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          {/* What's Included */}
                          <div>
                            <h4 className="font-bold text-sm uppercase text-muted-foreground mb-3">
                              {isArabic ? "يتضمن:" : "What's Included:"}
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {pkg.includes.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{isArabic ? item.ar : item.en}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Price & Delivery */}
                          <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">
                                {isArabic ? "سعر التنفيذ:" : "Implementation:"}
                              </p>
                              <p className="text-3xl font-black text-primary">
                                {isArabic ? pkg.price.ar : pkg.price.en}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground mb-1">
                                {isArabic ? "التسليم:" : "Delivery:"}
                              </p>
                              <p className="text-xl font-bold text-foreground">
                                {isArabic ? pkg.delivery.ar : pkg.delivery.en}
                              </p>
                            </div>
                          </div>

                          {/* Disclaimer */}
                          <div className="p-3 bg-muted/50 rounded-lg border border-muted-foreground/20">
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              <strong className="text-foreground">{isArabic ? "ملاحظة:" : "Note:"}</strong>{" "}
                              {isArabic
                                ? "الأسعار المذكورة هي لتنفيذ النظام فقط. التكاليف الشهرية للاستضافة أو اشتراكات الأدوات (إن وجدت) تُحدد بشكل منفصل بناءً على اختيارك بين الاستضافة الذاتية أو استضافتنا المُدارة."
                                : "Prices shown are for system implementation only. Monthly hosting and tool subscription costs (if applicable) are separate and depend on whether you choose self-hosting or our managed hosting service."}
                            </p>
                          </div>

                          {/* CTA */}
                          <Button
                            asChild
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/40 text-lg h-12"
                            size="lg"
                          >
                            <Link href={`/packages/${pkg.slug}`} className="flex items-center justify-center gap-2">
                              {isArabic ? "احصل على هذه الحزمة" : "Get This Package"}
                              <ArrowRight className="w-5 h-5" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        {/* ========== AFTER SALES SERVICE SECTION ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Badge className="mb-6 text-base md:text-lg px-6 py-3 bg-primary/20 text-primary border-primary/30">
              <HeadphonesIcon className="w-5 h-5 inline mr-2" />
              {isArabic ? "خدمة ما بعد البيع" : "After Sales Service"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {isArabic ? "شراكة مستمرة لنمو مستمر" : "Ongoing Partnership for Continuous Growth"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isArabic
                ? "حافظ على تحسين الأتمتة مع خطط الصيانة الشهرية"
                : "Keep your automation optimized with monthly maintenance plans"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {retainerPackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              const isPopular = pkg.badge;

              return (
                <Card
                  key={pkg.id}
                  className={`relative border-2 ${
                    isPopular 
                      ? 'border-primary/60 bg-gradient-to-br from-primary/10 to-card shadow-lg shadow-primary/20' 
                      : 'border-primary/20 bg-card/80'
                  } hover:border-primary/40 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col`}
                >
                  {isPopular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-primary text-primary-foreground font-bold text-xs">
                        {isArabic ? pkg.badge.ar : pkg.badge.en}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl md:text-2xl font-black mb-1 leading-tight">
                          {isArabic ? pkg.name.ar : pkg.name.en}
                        </CardTitle>
                        <div className="text-2xl md:text-3xl font-black text-primary">
                          {isArabic ? pkg.price.ar : pkg.price.en}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm">
                      {isArabic ? pkg.description.ar : pkg.description.en}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col pt-0">
                    <ul className="space-y-2 flex-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{isArabic ? feature.ar : feature.en}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <div className="mt-4">
                      {pkg.id === "strategic" ? (
                        <Button
                          disabled
                          className="w-full bg-muted hover:bg-muted text-muted-foreground cursor-not-allowed"
                          size="default"
                        >
                          {isArabic ? "قريباً" : "Coming Soon"}
                        </Button>
                      ) : (
                        <Button
                          asChild
                          className={`w-full ${
                            isPopular
                              ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/40'
                              : 'bg-primary/10 hover:bg-primary/20 text-primary border-2 border-primary/30'
                          }`}
                          size="default"
                        >
                          <Link href="/signup" className="flex items-center justify-center gap-2">
                            {isArabic ? "ابدأ الآن" : "Get Started"}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/20 via-primary/10 to-card overflow-hidden relative max-w-3xl mx-auto">
            <div className="absolute inset-0 circuit-pattern opacity-10" />
            <CardContent className="p-12 relative z-10">
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

