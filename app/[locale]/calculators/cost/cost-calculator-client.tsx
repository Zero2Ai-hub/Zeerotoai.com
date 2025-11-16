"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import * as Icons from "lucide-react";
import Link from "next/link";

interface CostCalculatorClientProps {
  isArabic: boolean;
}

// Service types with base pricing (10% reduced from research)
const serviceTypes = {
  "ai-automation": {
    name: { en: "AI Automation Workflows", ar: "سير عمل الأتمتة بالذكاء الاصطناعي" },
    icon: "Workflow",
    basePrices: {
      simple: { min: 1080, max: 2250 },    // 2-3 apps
      medium: { min: 2700, max: 7200 },    // 4-8 apps
      complex: { min: 9000, max: 27000 },  // 9+ apps
    }
  },
  "chatbot": {
    name: { en: "AI Chatbot", ar: "روبوت محادثة الذكاء الاصطناعي" },
    icon: "MessageSquare",
    basePrices: {
      simple: { min: 1480, max: 2250 },    // Basic AI chatbot
      medium: { min: 4500, max: 10800 },   // AI-powered with NLP
      complex: { min: 10800, max: 27000 }, // Advanced multi-channel
    }
  },
  "lead-generation": {
    name: { en: "Lead Generation System", ar: "نظام توليد العملاء المحتملين" },
    icon: "Target",
    basePrices: {
      simple: { min: 4050, max: 6300 },    // Basic scraping + outreach
      medium: { min: 6300, max: 10800 },   // + AI personalization
      complex: { min: 10800, max: 22500 }, // + Multi-channel + analytics
    }
  },
  "customer-support": {
    name: { en: "Customer Support Agent", ar: "وكيل دعم العملاء" },
    icon: "Headphones",
    basePrices: {
      simple: { min: 1480, max: 9000 },    // Basic chatbot support
      medium: { min: 9000, max: 16200 },   // Multi-channel
      complex: { min: 16200, max: 36000 }, // Full suite + voice
    }
  },
  "social-media": {
    name: { en: "Social Media Automation", ar: "أتمتة وسائل التواصل الاجتماعي" },
    icon: "Share2",
    basePrices: {
      simple: { min: 3850, max: 8100 },    // Basic content + scheduling
      medium: { min: 8100, max: 13500 },   // AI content, multi-platform
      complex: { min: 13500, max: 22500 }, // Video gen, DMs, analytics
    }
  },
  "ecommerce": {
    name: { en: "E-commerce Automation", ar: "أتمتة التجارة الإلكترونية" },
    icon: "ShoppingCart",
    basePrices: {
      simple: { min: 1480, max: 5400 },    // Basic chatbot + descriptions
      medium: { min: 9000, max: 18000 },   // + Orders + customer service
      complex: { min: 18000, max: 45000 }, // + PPC + analytics + recommendations
    }
  },
  "website": {
    name: { en: "Website/SaaS Development", ar: "تطوير موقع الويب / SaaS" },
    icon: "Globe",
    basePrices: {
      simple: { min: 1350, max: 3600 },     // Landing page
      medium: { min: 3600, max: 10800 },    // Business site
      complex: { min: 10800, max: 135000 }, // Web app / SaaS platform
    }
  },
};

export function CostCalculatorClient({ isArabic }: CostCalculatorClientProps) {
  const [serviceType, setServiceType] = useState<string>("ai-automation");
  const [complexity, setComplexity] = useState<"simple" | "medium" | "complex">("simple");
  const [integrations, setIntegrations] = useState<number>(2);
  const [urgency, setUrgency] = useState<"standard" | "fast" | "urgent">("standard");
  const [customization, setCustomization] = useState<0 | 50 | 100>(50); // Template, Semi-Custom, Fully Custom
  const [support, setSupport] = useState<30 | 60 | 90 | 180>(30);

  // Auto-adjust support when complexity changes to/from complex
  useEffect(() => {
    if (complexity === "complex" && support === 30) {
      setSupport(60); // Auto-upgrade to 60 days for complex projects
    }
  }, [complexity, support]);
  
  const selectedService = serviceTypes[serviceType as keyof typeof serviceTypes];
  const basePrice = selectedService.basePrices[complexity];
  
  // Calculate price modifiers
  const urgencyMultiplier = urgency === "urgent" ? 1.3 : urgency === "fast" ? 1.15 : 1.0;
  // Template: -25%, Semi-Custom: baseline, Fully Custom: +25%
  const customizationMultiplier = customization === 0 ? 0.75 : customization === 50 ? 1.0 : 1.25;
  // Template option has NO support
  const effectiveSupport = customization === 0 ? 0 : support;
  // Complex tier gets 60 days FREE, 90 days +15%, 180 days +30%
  // Simple/Medium: 30 days baseline, 60 days +5%, 90 days +15%, 180 days +30%
  const supportMultiplier = complexity === "complex"
    ? (effectiveSupport === 30 ? 1.0 : effectiveSupport === 60 ? 1.0 : effectiveSupport === 90 ? 1.15 : effectiveSupport === 180 ? 1.3 : 1.0)
    : (effectiveSupport === 30 ? 1.0 : effectiveSupport === 60 ? 1.05 : effectiveSupport === 90 ? 1.15 : effectiveSupport === 180 ? 1.3 : 1.0);
  
  // Integration adjustments (more integrations = more complexity)
  const integrationMultiplier = complexity === "simple" 
    ? 1 + (Math.max(0, integrations - 3) * 0.05) // 5% per additional integration beyond 3
    : complexity === "medium"
    ? 1 + (Math.max(0, integrations - 6) * 0.05) // 5% per additional integration beyond 6
    : 1 + (Math.max(0, integrations - 10) * 0.05); // 5% per additional integration beyond 10
  
  // Calculate final price range
  const minPrice = Math.round(basePrice.min * urgencyMultiplier * customizationMultiplier * supportMultiplier * integrationMultiplier);
  const maxPrice = Math.round(basePrice.max * urgencyMultiplier * customizationMultiplier * supportMultiplier * integrationMultiplier);
  
  // Estimate delivery time
  const baseDeliveryDays = complexity === "simple" ? 10 : complexity === "medium" ? 21 : 42;
  const deliveryDays = urgency === "urgent" 
    ? Math.ceil(baseDeliveryDays * 0.6) 
    : urgency === "fast" 
    ? Math.ceil(baseDeliveryDays * 0.8) 
    : baseDeliveryDays;
  
  const IconComponent = Icons[selectedService.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  
  const handleReset = () => {
    setServiceType("ai-automation");
    setComplexity("simple");
    setIntegrations(2);
    setUrgency("standard");
    setCustomization(50);
    setSupport(30);
  };

  return (
    <div className="relative z-10 container mx-auto px-4 pb-16 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Configuration Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Icons.Settings className="w-7 h-7 text-primary" />
                {isArabic ? "تكوين مشروعك" : "Configure Your Project"}
              </CardTitle>
              <CardDescription>
                {isArabic
                  ? "اضبط هذه الإعدادات للحصول على تقدير دقيق للتكلفة"
                  : "Adjust these settings to get an accurate cost estimate"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Service Type */}
              <div className="space-y-3">
                <Label htmlFor="serviceType" className="text-base font-bold">
                  {isArabic ? "نوع الخدمة" : "Service Type"}
                </Label>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger id="serviceType" className="bg-card/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(serviceTypes).map(([key, value]) => (
                      <SelectItem key={key} value={key}>
                        {isArabic ? value.name.ar : value.name.en}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Complexity */}
              <div className="space-y-3">
                <Label className="text-base font-bold">
                  {isArabic ? "مستوى التعقيد" : "Complexity Level"}
                </Label>
                <p className="text-xs text-muted-foreground">
                  {isArabic ? "اختر بناءً على احتياجاتك" : "Choose based on your project scope and requirements"}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant={complexity === "simple" ? "default" : "outline"}
                    onClick={() => setComplexity("simple")}
                    className="h-auto flex-col py-3 group relative"
                    title={
                      serviceType === "chatbot" 
                        ? "Basic AI chatbot, FAQ handling, simple flows"
                        : serviceType === "ai-automation"
                        ? "2-3 apps, basic workflows, simple integrations"
                        : serviceType === "lead-generation"
                        ? "Basic scraping + email finding, 500-1K leads/mo"
                        : serviceType === "social-media"
                        ? "Template posts, single platform, basic scheduling"
                        : "Basic features, minimal customization"
                    }
                  >
                    <Icons.Zap className="w-5 h-5 mb-1" />
                    <span className="text-sm">{isArabic ? "بسيط" : "Simple"}</span>
                    <span className={`text-xs ${complexity === "simple" ? "text-white" : "text-muted-foreground group-hover:text-foreground"}`}>
                      {serviceType === "ai-automation" ? "2-3 apps" : 
                       serviceType === "chatbot" ? "Basic AI" :
                       serviceType === "lead-generation" ? "500-1K leads" :
                       serviceType === "social-media" ? "1 platform" :
                       serviceType === "website" ? "Landing" :
                       isArabic ? "أساسي" : "Basic"}
                    </span>
                  </Button>
                  <Button
                    variant={complexity === "medium" ? "default" : "outline"}
                    onClick={() => setComplexity("medium")}
                    className="h-auto flex-col py-3 group relative"
                    title={
                      serviceType === "chatbot" 
                        ? "AI-powered NLP, learning capabilities, smart responses"
                        : serviceType === "ai-automation"
                        ? "4-8 apps, AI-powered workflows, multiple integrations"
                        : serviceType === "lead-generation"
                        ? "AI outreach campaigns, personalization, 1K-3K leads/mo"
                        : serviceType === "social-media"
                        ? "AI content generation, multi-platform, analytics"
                        : "Standard features with customization"
                    }
                  >
                    <Icons.Layers className="w-5 h-5 mb-1" />
                    <span className="text-sm">{isArabic ? "متوسط" : "Medium"}</span>
                    <span className={`text-xs ${complexity === "medium" ? "text-white" : "text-muted-foreground group-hover:text-foreground"}`}>
                      {serviceType === "ai-automation" ? "4-8 apps" : 
                       serviceType === "chatbot" ? "AI + NLP" :
                       serviceType === "lead-generation" ? "1K-3K leads" :
                       serviceType === "social-media" ? "Multi-platform" :
                       serviceType === "website" ? "Multi-page" :
                       isArabic ? "قياسي" : "Standard"}
                    </span>
                  </Button>
                  <Button
                    variant={complexity === "complex" ? "default" : "outline"}
                    onClick={() => setComplexity("complex")}
                    className="h-auto flex-col py-3 group relative"
                    title={
                      serviceType === "chatbot" 
                        ? "Advanced multi-channel, voice, phone, custom AI models"
                        : serviceType === "ai-automation"
                        ? "9+ apps, enterprise integrations, custom logic, AI"
                        : serviceType === "lead-generation"
                        ? "Multi-channel + analytics + custom AI, 3K-10K+ leads/mo"
                        : serviceType === "social-media"
                        ? "Video generation, DMs automation, full analytics"
                        : "Enterprise-grade, fully custom solution"
                    }
                  >
                    <Icons.Rocket className="w-5 h-5 mb-1" />
                    <span className="text-sm">{isArabic ? "معقد" : "Complex"}</span>
                    <span className={`text-xs ${complexity === "complex" ? "text-white" : "text-muted-foreground group-hover:text-foreground"}`}>
                      {serviceType === "ai-automation" ? "9+ apps" : 
                       serviceType === "chatbot" ? "Multi-channel" :
                       serviceType === "lead-generation" ? "3K-10K leads" :
                       serviceType === "social-media" ? "Video + DMs" :
                       serviceType === "website" ? "SaaS Platform" :
                       isArabic ? "متقدم" : "Advanced"}
                    </span>
                  </Button>
                </div>
                
                {/* What's Included in Complexity */}
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-xs font-semibold text-primary mb-2">
                    {isArabic ? "ما المشمول:" : "What's Included:"}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {serviceType === "chatbot" && complexity === "simple" && (isArabic ? "روبوت دردشة AI أساسي، معالجة الأسئلة الشائعة، تدفقات بسيطة" : "Basic AI chatbot, FAQ handling, simple conversational flows")}
                    {serviceType === "chatbot" && complexity === "medium" && (isArabic ? "الذكاء الاصطناعي مع معالجة اللغة الطبيعية، قدرات التعلم، ردود ذكية" : "AI-powered with NLP, learning capabilities, smart context-aware responses")}
                    {serviceType === "chatbot" && complexity === "complex" && (isArabic ? "متعدد القنوات المتقدم، صوت، هاتف، نماذج AI مخصصة" : "Advanced multi-channel (chat, voice, phone), custom AI models, enterprise integrations")}
                    
                    {serviceType === "ai-automation" && complexity === "simple" && (isArabic ? "2-3 تطبيقات، سير عمل أساسي، تكاملات بسيطة" : "2-3 apps, basic workflows, simple data sync and triggers")}
                    {serviceType === "ai-automation" && complexity === "medium" && (isArabic ? "4-8 تطبيقات، سير عمل يعمل بالذكاء الاصطناعي، منطق مشروط معقد" : "4-8 apps, AI-powered workflows, complex conditional logic, multi-step automations")}
                    {serviceType === "ai-automation" && complexity === "complex" && (isArabic ? "9+ تطبيقات، تكاملات المؤسسات، رمز مخصص، نماذج AI" : "9+ apps, enterprise integrations, custom code, AI models, complete infrastructure")}
                    
                    {serviceType === "lead-generation" && complexity === "simple" && (isArabic ? "استخراج أساسي + البحث عن البريد الإلكتروني، 500-1K عميل محتمل/شهر" : "Basic scraping + email finding, simple outreach, 500-1K qualified leads/month")}
                    {serviceType === "lead-generation" && complexity === "medium" && (isArabic ? "حملات التواصل بالذكاء الاصطناعي، تخصيص، 1K-3K عميل محتمل/شهر" : "AI outreach campaigns, personalization, multi-step sequences, 1K-3K leads/month")}
                    {serviceType === "lead-generation" && complexity === "complex" && (isArabic ? "متعدد القنوات + تحليلات + AI مخصص، 3K-10K+ عميل محتمل/شهر" : "Multi-channel campaigns, advanced analytics, custom AI, CRM integration, 3K-10K+ leads/month")}
                    
                    {serviceType === "social-media" && complexity === "simple" && (isArabic ? "منشورات القالب، منصة واحدة، جدولة أساسية" : "Template-based posts, single platform, basic scheduling and posting")}
                    {serviceType === "social-media" && complexity === "medium" && (isArabic ? "توليد محتوى AI، متعدد المنصات، تحليلات" : "AI content generation, multi-platform posting, analytics, hashtag optimization")}
                    {serviceType === "social-media" && complexity === "complex" && (isArabic ? "توليد الفيديو، أتمتة الرسائل المباشرة، تحليلات كاملة" : "Video generation (AI avatars), DM automation, engagement tracking, full analytics dashboard")}
                    
                    {serviceType === "customer-support" && complexity === "simple" && (isArabic ? "دعم الدردشة فقط، الأسئلة الشائعة، التوجيه الأساسي" : "Chat-only support, FAQ handling, basic ticket routing")}
                    {serviceType === "customer-support" && complexity === "medium" && (isArabic ? "متعدد القنوات (دردشة، WhatsApp، وسائل التواصل)" : "Multi-channel (chat, WhatsApp, social media), smart routing, analytics")}
                    {serviceType === "customer-support" && complexity === "complex" && (isArabic ? "مجموعة كاملة + صوت + تكامل الهاتف" : "Full suite with voice AI, phone integration, sentiment analysis, enterprise CRM sync")}
                    
                    {serviceType === "ecommerce" && complexity === "simple" && (isArabic ? "أوصاف المنتجات + المخزون الأساسي" : "Product descriptions generation, basic inventory management")}
                    {serviceType === "ecommerce" && complexity === "medium" && (isArabic ? "أتمتة الطلبات + خدمة العملاء" : "Order automation, customer service bot, inventory sync across platforms")}
                    {serviceType === "ecommerce" && complexity === "complex" && (isArabic ? "تحسين PPC + تحليلات + توصيات" : "PPC campaign optimization, advanced analytics, AI recommendations, full automation")}
                    
                    {serviceType === "website" && complexity === "simple" && (isArabic ? "صفحة هبوط واحدة، نماذج، CMS أساسي" : "Single landing page, forms, basic CMS, mobile responsive")}
                    {serviceType === "website" && complexity === "medium" && (isArabic ? "موقع متعدد الصفحات، CMS، مدونة، تحسين محركات البحث" : "Multi-page site (5-10 pages), full CMS, blog, SEO optimization")}
                    {serviceType === "website" && complexity === "complex" && (isArabic ? "تطبيق ويب كامل / منصة SaaS مع مصادقة وقاعدة بيانات" : "Full-stack web app or SaaS platform, auth, database, API, admin dashboard")}
                  </p>
                </div>
              </div>

              {/* Integrations */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-bold">
                    {isArabic ? "عدد التكاملات" : "Number of Integrations"}
                  </Label>
                  <Badge variant="outline" className="text-lg px-3 py-1">
                    {integrations}
                  </Badge>
                </div>
                <Slider
                  value={[integrations]}
                  onValueChange={(value) => setIntegrations(value[0])}
                  min={1}
                  max={20}
                  step={1}
                  className="py-4"
                />
                <p className="text-xs text-muted-foreground">
                  {isArabic 
                    ? "التكاملات: API، قواعد البيانات، الأدوات الخارجية، إلخ" 
                    : "Integrations: APIs, databases, external tools, etc."}
                </p>
              </div>

              {/* Customization Level */}
              <div className="space-y-3">
                <Label className="text-base font-bold">
                  {isArabic ? "مستوى التخصيص" : "Customization Level"}
                </Label>
                <p className="text-xs text-muted-foreground">
                  {isArabic ? "كيف تريد بناء الحل الخاص بك" : "How you want your solution built"}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant={customization === 0 ? "default" : "outline"}
                    onClick={() => setCustomization(0)}
                    className="h-auto flex-col py-3 group relative"
                    title={isArabic ? "قوالب جاهزة مع تعديلات بسيطة. الخيار الأسرع والأكثر فعالية من حيث التكلفة. لا يشمل الدعم." : "Pre-built templates with minimal changes. Fastest and most cost-effective option. No support included."}
                  >
                    <Icons.Package className="w-5 h-5 mb-1" />
                    <span className="text-sm">{isArabic ? "قالب" : "Template"}</span>
                    <span className={`text-xs ${customization === 0 ? "text-white" : "text-muted-foreground group-hover:text-foreground"}`}>-25%</span>
                  </Button>
                  <Button
                    variant={customization === 50 ? "default" : "outline"}
                    onClick={() => setCustomization(50)}
                    className="h-auto flex-col py-3 group relative"
                    title={isArabic ? "قوالب مخصصة لتناسب احتياجاتك. التوازن المثالي بين التكلفة والمرونة. الأكثر شعبية." : "Customized templates to fit your needs. Perfect balance of cost and flexibility. Most popular choice."}
                  >
                    <Icons.PenLine className="w-5 h-5 mb-1" />
                    <span className="text-sm">{isArabic ? "شبه مخصص" : "Semi-Custom"}</span>
                    <span className={`text-xs ${customization === 50 ? "text-white" : "text-muted-foreground group-hover:text-foreground"}`}>{isArabic ? "قياسي" : "Baseline"}</span>
                  </Button>
                  <Button
                    variant={customization === 100 ? "default" : "outline"}
                    onClick={() => setCustomization(100)}
                    className="h-auto flex-col py-3 group relative"
                    title={isArabic ? "مبني من الصفر لمواصفاتك الدقيقة. أقصى قدر من المرونة والفرادة. للمشاريع الفريدة." : "Built from scratch to your exact specifications. Maximum flexibility and uniqueness. For unique projects."}
                  >
                    <Icons.Sparkles className="w-5 h-5 mb-1" />
                    <span className="text-sm">{isArabic ? "مخصص بالكامل" : "Fully Custom"}</span>
                    <span className={`text-xs ${customization === 100 ? "text-white" : "text-muted-foreground group-hover:text-foreground"}`}>+25%</span>
                  </Button>
                </div>
                
                {/* What's Included in Customization */}
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-xs font-semibold text-primary mb-2">
                    {isArabic ? "ما يعنيه هذا:" : "What This Means:"}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {customization === 0 && (isArabic 
                      ? "نستخدم قوالبنا الجاهزة مع تغييرات العلامة التجارية الأساسية فقط. الإعداد سريع والتكلفة أقل بنسبة 25٪. مثالي للبدء بسرعة، ويمكنك الترقية إلى شبه مخصص لاحقًا إذا لزم الأمر. ⚠️ لا يشمل الدعم بعد التسليم." 
                      : "We use our existing templates with only basic branding changes. Quick setup, 25% lower cost. Perfect to start fast, and you can upgrade to Semi-Custom later if needed. ⚠️ No post-delivery support included.")}
                    
                    {customization === 50 && (isArabic 
                      ? "نبدأ بالقوالب المثبتة ونخصصها لتناسب احتياجاتك الدقيقة. يمكننا تعديل سير العمل، إضافة ميزات، تغيير التصميم، ودمج أنظمتك. التوازن الأفضل بين التكلفة والمرونة. الخيار الأكثر شعبية." 
                      : "We start with proven templates and customize them to fit your exact needs. We can modify workflows, add features, change design, and integrate with your systems. Best balance of cost and flexibility. Most popular choice.")}
                    
                    {customization === 100 && (isArabic 
                      ? "نبني كل شيء من الصفر، مصمم بشكل فريد لعمليتك. كل سير العمل والميزة والتصميم يتم إنشاؤه خصيصًا لك. أقصى قدر من المرونة والفرادة. الأفضل للمشاريع ذات المتطلبات الفريدة جدًا." 
                      : "We build everything from scratch, uniquely designed for your process. Every workflow, feature, and design element is created specifically for you. Maximum flexibility and uniqueness. Best for projects with very unique requirements.")}
                  </p>
                </div>
              </div>

              {/* Urgency */}
              <div className="space-y-3">
                <Label className="text-base font-bold">
                  {isArabic ? "الجدول الزمني للتسليم" : "Delivery Timeline"}
                </Label>
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant={urgency === "standard" ? "default" : "outline"}
                    onClick={() => setUrgency("standard")}
                    className="h-auto flex-col py-3 group"
                  >
                    <Icons.Calendar className="w-5 h-5 mb-1" />
                    <span className="text-sm">{isArabic ? "قياسي" : "Standard"}</span>
                    <span className={`text-xs ${urgency === "standard" ? "text-white" : "text-muted-foreground group-hover:text-foreground"}`}>{isArabic ? "عادي" : "Normal"}</span>
                  </Button>
                  <Button
                    variant={urgency === "fast" ? "default" : "outline"}
                    onClick={() => setUrgency("fast")}
                    className="h-auto flex-col py-3 group"
                  >
                    <Icons.Zap className="w-5 h-5 mb-1" />
                    <span className="text-sm">{isArabic ? "سريع" : "Fast"}</span>
                    <span className={`text-xs ${urgency === "fast" ? "text-white" : "text-muted-foreground group-hover:text-foreground"}`}>+15%</span>
                  </Button>
                  <Button
                    variant={urgency === "urgent" ? "default" : "outline"}
                    onClick={() => setUrgency("urgent")}
                    className="h-auto flex-col py-3 group"
                  >
                    <Icons.Rocket className="w-5 h-5 mb-1" />
                    <span className="text-sm">{isArabic ? "عاجل" : "Urgent"}</span>
                    <span className={`text-xs ${urgency === "urgent" ? "text-white" : "text-muted-foreground group-hover:text-foreground"}`}>+30%</span>
                  </Button>
                </div>
              </div>

              {/* Support Period */}
              <div className="space-y-3">
                <Label className="text-base font-bold">
                  {isArabic ? "فترة الدعم" : "Support Period"}
                </Label>
                {customization === 0 ? (
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
                    <div className="flex items-start gap-2">
                      <Icons.AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-amber-500">
                          {isArabic ? "⚠️ لا يتضمن الدعم" : "⚠️ No Support Included"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {isArabic 
                            ? "خيار القالب لا يتضمن أي دعم بعد التسليم. يمكنك شراء الدعم بشكل منفصل إذا لزم الأمر." 
                            : "Template option does not include any post-delivery support. You can purchase support separately if needed."}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <Select value={support.toString()} onValueChange={(val) => setSupport(Number(val) as 30 | 60 | 90 | 180)}>
                      <SelectTrigger className="bg-card/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {complexity !== "complex" && (
                          <SelectItem value="30">{isArabic ? "30 يومًا" : "30 days"}</SelectItem>
                        )}
                        <SelectItem value="60">
                          {complexity === "complex" 
                            ? (isArabic ? "60 يومًا (مضمن مجاناً 🎉)" : "60 days (Included FREE 🎉)")
                            : (isArabic ? "60 يومًا (+5%)" : "60 days (+5%)")}
                        </SelectItem>
                        <SelectItem value="90">{isArabic ? "90 يومًا (+15%)" : "90 days (+15%)"}</SelectItem>
                        <SelectItem value="180">{isArabic ? "180 يومًا (+30%)" : "180 days (+30%)"}</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      {complexity === "complex" && support === 60
                        ? (isArabic 
                          ? "🎉 60 يومًا من الدعم المجاني مشمول مع المشاريع المعقدة!" 
                          : "🎉 60 days of FREE support included with Complex projects!")
                        : (isArabic 
                          ? "يتضمن إصلاحات الأخطاء والتحديثات والمراقبة" 
                          : "Includes bug fixes, updates, and monitoring")}
                    </p>
                  </>
                )}
              </div>

              <Button
                variant="outline"
                onClick={handleReset}
                className="w-full"
              >
                <Icons.RotateCcw className="w-4 h-4 mr-2" />
                {isArabic ? "إعادة تعيين" : "Reset"}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Estimated Cost */}
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                {IconComponent && <IconComponent className="w-7 h-7 text-primary" />}
                {isArabic ? "التكلفة المقدرة" : "Estimated Cost"}
              </CardTitle>
              <CardDescription>
                {isArabic ? selectedService.name.ar : selectedService.name.en}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Price Range */}
              <div className="p-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/40 text-center">
                <div className="text-sm text-muted-foreground mb-3">
                  {isArabic ? "نطاق الاستثمار" : "Investment Range"}
                </div>
                <div className="text-5xl font-black text-primary mb-3">
                  ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  {isArabic ? "السعر الفعلي يعتمد على المتطلبات المحددة" : "Actual price depends on specific requirements"}
                </p>
              </div>

              {/* Delivery Timeline */}
              <div className="p-5 rounded-lg bg-card/50 border border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icons.Clock className="w-5 h-5 text-primary" />
                    <span className="font-bold">{isArabic ? "وقت التسليم المقدر" : "Estimated Delivery"}</span>
                  </div>
                  <span className="text-xl font-black text-primary">
                    {deliveryDays} {isArabic ? "يوم" : "days"}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {isArabic 
                    ? `حوالي ${Math.ceil(deliveryDays / 7)} أسبوع من بدء المشروع` 
                    : `Approximately ${Math.ceil(deliveryDays / 7)} weeks from project start`}
                </p>
              </div>

              {/* Support Period */}
              <div className={`p-5 rounded-lg ${customization === 0 ? "bg-amber-500/10 border border-amber-500/30" : "bg-card/50 border border-primary/20"}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {customization === 0 ? (
                      <Icons.AlertCircle className="w-5 h-5 text-amber-500" />
                    ) : (
                      <Icons.Shield className="w-5 h-5 text-primary" />
                    )}
                    <span className="font-bold">{isArabic ? "الدعم المتضمن" : "Support Included"}</span>
                  </div>
                  <span className={`text-xl font-black ${customization === 0 ? "text-amber-500" : "text-primary"}`}>
                    {customization === 0 ? (isArabic ? "لا يوجد" : "None") : `${effectiveSupport} ${isArabic ? "يوم" : "days"}`}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  {customization === 0 
                    ? (isArabic ? "خيار القالب لا يتضمن الدعم" : "Template option does not include support")
                    : (isArabic ? "إصلاحات الأخطاء، التحديثات، والمراقبة" : "Bug fixes, updates, and monitoring")}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-primary/10" />

              {/* What's Included */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg">{isArabic ? "ما هو المشمول" : "What's Included"}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icons.CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">
                      {isArabic 
                        ? "مكالمة اكتشاف مجانية لتحديد النطاق" 
                        : "Free discovery call to scope requirements"}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icons.CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">
                      {isArabic 
                        ? "الوصول الكامل إلى الكود والسير العمل" 
                        : "Full access to code and workflows"}
                    </span>
                  </div>
                  {customization !== 0 && (
                    <div className="flex items-start gap-2">
                      <Icons.CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm">
                        {isArabic 
                          ? `الدعم لمدة ${effectiveSupport} يومًا بعد الإطلاق` 
                          : `${effectiveSupport} days post-launch support`}
                        {complexity === "complex" && effectiveSupport === 60 && (
                          <span className="text-primary font-semibold"> (Included FREE)</span>
                        )}
                      </span>
                    </div>
                  )}
                  <div className="flex items-start gap-2">
                    <Icons.CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">
                      {isArabic 
                        ? "الوثائق والتدريب" 
                        : "Documentation and training"}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icons.CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">
                      {isArabic 
                        ? "ضمان الجودة والاختبار" 
                        : "Quality assurance and testing"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 pt-6 border-t-2 border-primary/20">
                <h3 className="font-bold text-base text-muted-foreground">{isArabic ? "تفصيل السعر" : "Price Breakdown"}</h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{isArabic ? "السعر الأساسي" : "Base price"}:</span>
                    <span>${basePrice.min.toLocaleString()} - ${basePrice.max.toLocaleString()}</span>
                  </div>
                  {integrationMultiplier > 1 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{isArabic ? "التكاملات" : "Integrations"}:</span>
                      <span>+{((integrationMultiplier - 1) * 100).toFixed(0)}%</span>
                    </div>
                  )}
                  {customizationMultiplier !== 1 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{isArabic ? "التخصيص" : "Customization"}:</span>
                      <span className={customizationMultiplier < 1 ? "text-green-500" : ""}>
                        {customizationMultiplier < 1 ? "-" : "+"}
                        {Math.abs((customizationMultiplier - 1) * 100).toFixed(0)}%
                        {customizationMultiplier < 1 && " (Template)"}
                      </span>
                    </div>
                  )}
                  {urgencyMultiplier > 1 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{isArabic ? "التسليم العاجل" : "Rush delivery"}:</span>
                      <span>+{((urgencyMultiplier - 1) * 100).toFixed(0)}%</span>
                    </div>
                  )}
                  {complexity === "complex" && effectiveSupport === 60 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{isArabic ? "60 يوم دعم" : "60-day support"}:</span>
                      <span className="text-green-500 font-semibold">{isArabic ? "مجاني! 🎉" : "FREE! 🎉"}</span>
                    </div>
                  )}
                  {supportMultiplier > 1 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{isArabic ? "الدعم الممتد" : "Extended support"}:</span>
                      <span>+{((supportMultiplier - 1) * 100).toFixed(0)}%</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-primary/10" />

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <Button asChild size="lg" className="w-full">
                  <Link href="/signup">
                    <Icons.Rocket className="w-4 h-4 mr-2" />
                    {isArabic ? "ابدأ مشروعي" : "Start My Project"}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="/calculators/roi">
                    <Icons.TrendingUp className="w-4 h-4 mr-2" />
                    {isArabic ? "احسب عائد الاستثمار" : "Calculate ROI"}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="bg-card/30 border-primary/10">
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground text-center">
                {isArabic
                  ? "💡 هذه تقديرات بناءً على المعايير النموذجية. سيتم تقديم عرض أسعار دقيق بعد مكالمة الاكتشاف."
                  : "💡 These are estimates based on typical benchmarks. An accurate quote will be provided after a discovery call."}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Reference Tiers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-black mb-8 text-center">
          {isArabic ? "مرجع سريع للأسعار" : "Quick Pricing Reference"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Quick Wins */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-primary/20 text-primary border-primary/30">
                {isArabic ? "انتصارات سريعة" : "Quick Wins"}
              </Badge>
              <CardTitle className="text-xl">$1,080 - $2,250</CardTitle>
              <CardDescription className="text-xs">{isArabic ? "1-2 أسبوع" : "1-2 weeks"}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {isArabic 
                  ? "مثالي للشركات الصغيرة والأتمتة الفردية"
                  : "Ideal for small businesses, single automations"}
              </p>
            </CardContent>
          </Card>

          {/* Growth Engine */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-primary/20 text-primary border-primary/30">
                {isArabic ? "محرك النمو" : "Growth Engine"}
              </Badge>
              <CardTitle className="text-xl">$2,700 - $7,200</CardTitle>
              <CardDescription className="text-xs">{isArabic ? "2-4 أسابيع" : "2-4 weeks"}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {isArabic 
                  ? "للشركات النامية، سير عمل متعدد"
                  : "For growing businesses, multiple workflows"}
              </p>
            </CardContent>
          </Card>

          {/* Professional */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-primary/20 text-primary border-primary/30">
                {isArabic ? "احترافي" : "Professional"}
              </Badge>
              <CardTitle className="text-xl">$9,000 - $22,500</CardTitle>
              <CardDescription className="text-xs">{isArabic ? "4-8 أسابيع" : "4-8 weeks"}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {isArabic 
                  ? "للشركات القائمة، شامل"
                  : "For established businesses, comprehensive"}
              </p>
            </CardContent>
          </Card>

          {/* Enterprise */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-primary/20 text-primary border-primary/30">
                {isArabic ? "مؤسسات" : "Enterprise"}
              </Badge>
              <CardTitle className="text-xl">$27,000 - $135,000+</CardTitle>
              <CardDescription className="text-xs">{isArabic ? "8-16+ أسابيع" : "8-16+ weeks"}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {isArabic 
                  ? "للمنظمات الكبيرة، شراكات استراتيجية"
                  : "For large orgs, strategic partnerships"}
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}

