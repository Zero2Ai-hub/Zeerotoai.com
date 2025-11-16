"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { 
  Calculator,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface CalculatorsClientProps {
  isArabic: boolean;
}

export function CalculatorsClient({ isArabic }: CalculatorsClientProps) {
  // Cost Calculator State
  const [serviceType, setServiceType] = useState<string>("");
  const [complexity, setComplexity] = useState<string>("");
  const [apps, setApps] = useState<number>(3);
  const [urgency, setUrgency] = useState<string>("standard");
  const [region, setRegion] = useState<string>("north-america");
  const [costEstimate, setCostEstimate] = useState<{ min: number; max: number; tier: string; delivery: string } | null>(null);

  // ROI Calculator State
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(15);
  const [hourlyRate, setHourlyRate] = useState<number>(50);
  const [errorRate, setErrorRate] = useState<number>(10);
  const [errorCost, setErrorCost] = useState<number>(500);
  const [automationCost, setAutomationCost] = useState<number>(5000);
  const [roiResults, setRoiResults] = useState<{
    currentAnnualCost: number;
    annualSavings: number;
    errorSavings: number;
    totalAnnualSavings: number;
    paybackMonths: number;
    roi1Year: number;
    roi3Years: number;
  } | null>(null);

  const serviceTypes = [
    { value: "ai-automation", label: { en: "AI Automation Workflows", ar: "سير عمل الأتمتة" }, basePrice: { min: 1200, max: 30000 } },
    { value: "chatbot", label: { en: "AI Chatbot", ar: "روبوت الدردشة" }, basePrice: { min: 1480, max: 16200 } },
    { value: "lead-gen", label: { en: "Lead Generation System", ar: "نظام توليد العملاء المحتملين" }, basePrice: { min: 4050, max: 10800 } },
    { value: "customer-support", label: { en: "Customer Support Agent", ar: "وكيل دعم العملاء" }, basePrice: { min: 1480, max: 16200 } },
    { value: "social-media", label: { en: "Social Media Automation", ar: "أتمتة وسائل التواصل الاجتماعي" }, basePrice: { min: 3850, max: 13500 } },
    { value: "ecommerce", label: { en: "E-commerce Automation", ar: "أتمتة التجارة الإلكترونية" }, basePrice: { min: 1480, max: 22500 } },
    { value: "website", label: { en: "Website/SaaS Development", ar: "تطوير الموقع/SaaS" }, basePrice: { min: 1500, max: 150000 } },
  ];

  const complexityLevels = [
    { value: "simple", label: { en: "Simple (1-3 apps, basic logic)", ar: "بسيط (1-3 تطبيقات، منطق أساسي)" }, multiplier: 1.0 },
    { value: "standard", label: { en: "Standard (4-8 apps, some complexity)", ar: "قياسي (4-8 تطبيقات، بعض التعقيد)" }, multiplier: 1.5 },
    { value: "complex", label: { en: "Complex (9+ apps, custom code)", ar: "معقد (9+ تطبيقات، كود مخصص)" }, multiplier: 2.5 },
    { value: "enterprise", label: { en: "Enterprise (Complete infrastructure)", ar: "مؤسسي (بنية تحتية كاملة)" }, multiplier: 4.0 },
  ];

  const urgencyLevels = [
    { value: "standard", label: { en: "Standard (2-4 weeks)", ar: "قياسي (2-4 أسابيع)" }, multiplier: 1.0 },
    { value: "fast", label: { en: "Fast Track (1-2 weeks)", ar: "سريع (1-2 أسابيع)" }, multiplier: 1.3 },
    { value: "urgent", label: { en: "Urgent (< 1 week)", ar: "عاجل (< 1 أسبوع)" }, multiplier: 1.5 },
  ];

  const regions = [
    { value: "uae-saudi", label: { en: "UAE/Saudi Arabia", ar: "الإمارات/السعودية" }, multiplier: 1.35 },
    { value: "north-america", label: { en: "North America", ar: "أمريكا الشمالية" }, multiplier: 1.15 },
    { value: "europe", label: { en: "Western Europe", ar: "أوروبا الغربية" }, multiplier: 1.1 },
    { value: "australia", label: { en: "Australia", ar: "أستراليا" }, multiplier: 1.1 },
    { value: "eastern-europe", label: { en: "Eastern Europe", ar: "أوروبا الشرقية" }, multiplier: 0.9 },
    { value: "asia-latam", label: { en: "Asia/Latin America", ar: "آسيا/أمريكا اللاتينية" }, multiplier: 0.75 },
  ];

  const calculateCost = () => {
    if (!serviceType || !complexity) {
      return;
    }

    const service = serviceTypes.find(s => s.value === serviceType);
    const complexityLevel = complexityLevels.find(c => c.value === complexity);
    const urgencyLevel = urgencyLevels.find(u => u.value === urgency);
    const regionMultiplier = regions.find(r => r.value === region);

    if (!service || !complexityLevel || !urgencyLevel || !regionMultiplier) {
      return;
    }

    // Calculate base price with complexity
    let minPrice = service.basePrice.min * complexityLevel.multiplier;
    let maxPrice = service.basePrice.max * complexityLevel.multiplier;

    // Apply urgency multiplier
    minPrice *= urgencyLevel.multiplier;
    maxPrice *= urgencyLevel.multiplier;

    // Apply regional multiplier
    minPrice *= regionMultiplier.multiplier;
    maxPrice *= regionMultiplier.multiplier;

    // Apply 10% discount (already applied in base prices, but ensuring consistency)
    minPrice *= 0.9;
    maxPrice *= 0.9;

    // Round to nearest 50
    minPrice = Math.round(minPrice / 50) * 50;
    maxPrice = Math.round(maxPrice / 50) * 50;

    // Determine tier and delivery time
    let tier = "Quick Wins";
    let delivery = "1-2 weeks";
    
    if (maxPrice >= 30000) {
      tier = "Enterprise";
      delivery = urgency === "urgent" ? "1-2 weeks" : urgency === "fast" ? "2-4 weeks" : "8-16 weeks";
    } else if (maxPrice >= 10000) {
      tier = "Professional";
      delivery = urgency === "urgent" ? "1 week" : urgency === "fast" ? "1-2 weeks" : "4-8 weeks";
    } else if (maxPrice >= 3000) {
      tier = "Growth Engine";
      delivery = urgency === "urgent" ? "< 1 week" : urgency === "fast" ? "1 week" : "2-4 weeks";
    } else {
      delivery = urgency === "urgent" ? "3-5 days" : urgency === "fast" ? "5-7 days" : "1-2 weeks";
    }

    setCostEstimate({
      min: minPrice,
      max: maxPrice,
      tier,
      delivery,
    });
  };

  const calculateROI = () => {
    // Current annual cost (time cost)
    const currentAnnualCost = hoursPerWeek * hourlyRate * 52;

    // Assuming 80% automation (realistic estimate)
    const hoursSaved = hoursPerWeek * 0.8;
    const annualSavings = hoursSaved * hourlyRate * 52;

    // Error cost savings (assuming automation reduces errors by 95%)
    const currentAnnualErrorCost = (errorRate / 100) * errorCost * 52; // errors per week
    const errorSavings = currentAnnualErrorCost * 0.95;

    // Total annual savings
    const totalAnnualSavings = annualSavings + errorSavings;

    // Payback period
    const paybackMonths = (automationCost / totalAnnualSavings) * 12;

    // ROI percentages
    const roi1Year = ((totalAnnualSavings - automationCost) / automationCost) * 100;
    const roi3Years = ((totalAnnualSavings * 3 - automationCost) / automationCost) * 100;

    setRoiResults({
      currentAnnualCost,
      annualSavings,
      errorSavings,
      totalAnnualSavings,
      paybackMonths,
      roi1Year,
      roi3Years,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="container mx-auto px-4 pb-24 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* COST CALCULATOR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="h-full border-2 border-primary/30 bg-gradient-to-br from-background via-background to-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-3xl">
                  {isArabic ? "حاسبة التكلفة" : "Cost Calculator"}
                </CardTitle>
              </div>
              <CardDescription className="text-base">
                {isArabic
                  ? "احصل على تقدير دقيق لتكلفة مشروعك"
                  : "Get an accurate estimate for your automation project"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Service Type */}
              <div className="space-y-2">
                <Label htmlFor="service-type" className="text-base font-semibold">
                  {isArabic ? "نوع الخدمة" : "Service Type"}
                </Label>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger id="service-type" className="bg-card/50 border-primary/30">
                    <SelectValue placeholder={isArabic ? "اختر الخدمة..." : "Select service..."} />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {isArabic ? service.label.ar : service.label.en}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Complexity */}
              <div className="space-y-2">
                <Label htmlFor="complexity" className="text-base font-semibold">
                  {isArabic ? "التعقيد" : "Complexity Level"}
                </Label>
                <Select value={complexity} onValueChange={setComplexity}>
                  <SelectTrigger id="complexity" className="bg-card/50 border-primary/30">
                    <SelectValue placeholder={isArabic ? "اختر المستوى..." : "Select level..."} />
                  </SelectTrigger>
                  <SelectContent>
                    {complexityLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {isArabic ? level.label.ar : level.label.en}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Urgency */}
              <div className="space-y-2">
                <Label htmlFor="urgency" className="text-base font-semibold">
                  {isArabic ? "الاستعجال" : "Timeline"}
                </Label>
                <Select value={urgency} onValueChange={setUrgency}>
                  <SelectTrigger id="urgency" className="bg-card/50 border-primary/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {isArabic ? level.label.ar : level.label.en}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Region */}
              <div className="space-y-2">
                <Label htmlFor="region" className="text-base font-semibold">
                  {isArabic ? "المنطقة" : "Your Region"}
                </Label>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger id="region" className="bg-card/50 border-primary/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((r) => (
                      <SelectItem key={r.value} value={r.value}>
                        {isArabic ? r.label.ar : r.label.en}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Calculate Button */}
              <Button 
                onClick={calculateCost}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg"
                disabled={!serviceType || !complexity}
              >
                <Calculator className="w-5 h-5 mr-2" />
                {isArabic ? "احسب التكلفة" : "Calculate Cost"}
              </Button>

              {/* Results */}
              {costEstimate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-6 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/30 space-y-4"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h4 className="text-xl font-bold text-primary">
                      {isArabic ? "التقدير الخاص بك" : "Your Estimate"}
                    </h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-primary/20">
                      <span className="text-muted-foreground">{isArabic ? "الفئة" : "Tier"}:</span>
                      <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1 text-base">
                        {costEstimate.tier}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center pb-3 border-b border-primary/20">
                      <span className="text-muted-foreground">{isArabic ? "نطاق السعر" : "Price Range"}:</span>
                      <span className="text-2xl font-black text-primary">
                        {formatCurrency(costEstimate.min)} - {formatCurrency(costEstimate.max)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-3 border-b border-primary/20">
                      <span className="text-muted-foreground">{isArabic ? "وقت التسليم" : "Delivery"}:</span>
                      <span className="font-semibold">{costEstimate.delivery}</span>
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm text-muted-foreground flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        {isArabic
                          ? "هذا تقدير. السعر النهائي قد يختلف بناءً على المتطلبات المحددة."
                          : "This is an estimate. Final price may vary based on specific requirements."}
                      </span>
                    </p>
                  </div>

                  <Button asChild className="w-full mt-4">
                    <Link href="/signup">
                      {isArabic ? "احصل على عرض دقيق" : "Get Exact Quote"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* ROI CALCULATOR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="h-full border-2 border-primary/30 bg-gradient-to-br from-background via-background to-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-3xl">
                  {isArabic ? "حاسبة العائد على الاستثمار" : "ROI Calculator"}
                </CardTitle>
              </div>
              <CardDescription className="text-base">
                {isArabic
                  ? "احسب عائدك على الاستثمار في الأتمتة"
                  : "Calculate your return on automation investment"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Hours per week */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="hours-week" className="text-base font-semibold">
                    {isArabic ? "ساعات العمل اليدوي في الأسبوع" : "Manual Hours per Week"}
                  </Label>
                  <span className="text-2xl font-bold text-primary">{hoursPerWeek}h</span>
                </div>
                <Slider
                  id="hours-week"
                  min={1}
                  max={80}
                  step={1}
                  value={[hoursPerWeek]}
                  onValueChange={(value) => setHoursPerWeek(value[0])}
                  className="cursor-pointer"
                />
              </div>

              {/* Hourly rate */}
              <div className="space-y-2">
                <Label htmlFor="hourly-rate" className="text-base font-semibold">
                  {isArabic ? "التكلفة بالساعة ($)" : "Hourly Cost ($)"}
                </Label>
                <Input
                  id="hourly-rate"
                  type="number"
                  min="10"
                  max="500"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="bg-card/50 border-primary/30"
                />
                <p className="text-xs text-muted-foreground">
                  {isArabic
                    ? "تكلفة موظف أو وقتك (راتب + تكاليف إضافية)"
                    : "Employee cost or your time (salary + overhead)"}
                </p>
              </div>

              {/* Error rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="error-rate" className="text-base font-semibold">
                    {isArabic ? "معدل الأخطاء (%)" : "Error Rate (%)"}
                  </Label>
                  <span className="text-xl font-bold text-primary">{errorRate}%</span>
                </div>
                <Slider
                  id="error-rate"
                  min={0}
                  max={50}
                  step={1}
                  value={[errorRate]}
                  onValueChange={(value) => setErrorRate(value[0])}
                  className="cursor-pointer"
                />
              </div>

              {/* Error cost */}
              <div className="space-y-2">
                <Label htmlFor="error-cost" className="text-base font-semibold">
                  {isArabic ? "متوسط تكلفة الخطأ ($)" : "Avg. Cost per Error ($)"}
                </Label>
                <Input
                  id="error-cost"
                  type="number"
                  min="0"
                  max="10000"
                  step="50"
                  value={errorCost}
                  onChange={(e) => setErrorCost(Number(e.target.value))}
                  className="bg-card/50 border-primary/30"
                />
                <p className="text-xs text-muted-foreground">
                  {isArabic
                    ? "الوقت المستغرق لإصلاح الأخطاء، خسارة العملاء، إلخ."
                    : "Time to fix errors, lost customers, etc."}
                </p>
              </div>

              {/* Automation cost */}
              <div className="space-y-2">
                <Label htmlFor="automation-cost" className="text-base font-semibold">
                  {isArabic ? "تكلفة الأتمتة ($)" : "Automation Cost ($)"}
                </Label>
                <Input
                  id="automation-cost"
                  type="number"
                  min="1000"
                  max="150000"
                  step="500"
                  value={automationCost}
                  onChange={(e) => setAutomationCost(Number(e.target.value))}
                  className="bg-card/50 border-primary/30"
                />
                <p className="text-xs text-muted-foreground">
                  {isArabic
                    ? "استخدم تقدير حاسبة التكلفة"
                    : "Use estimate from Cost Calculator"}
                </p>
              </div>

              {/* Calculate Button */}
              <Button 
                onClick={calculateROI}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                {isArabic ? "احسب العائد على الاستثمار" : "Calculate ROI"}
              </Button>

              {/* Results */}
              {roiResults && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-6 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/30 space-y-4"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h4 className="text-xl font-bold text-primary">
                      {isArabic ? "نتائج العائد على الاستثمار" : "Your ROI Results"}
                    </h4>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Current Cost */}
                    <div className="p-4 rounded-lg bg-card/50 border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-1">
                        {isArabic ? "التكلفة السنوية الحالية" : "Current Annual Cost"}
                      </div>
                      <div className="text-2xl font-black text-red-500">
                        {formatCurrency(roiResults.currentAnnualCost)}
                      </div>
                    </div>

                    {/* Annual Savings */}
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                      <div className="text-sm text-muted-foreground mb-1">
                        {isArabic ? "التوفير السنوي (الوقت)" : "Annual Savings (Time)"}
                      </div>
                      <div className="text-2xl font-black text-green-500">
                        {formatCurrency(roiResults.annualSavings)}
                      </div>
                    </div>

                    {/* Error Savings */}
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                      <div className="text-sm text-muted-foreground mb-1">
                        {isArabic ? "التوفير من تقليل الأخطاء" : "Error Reduction Savings"}
                      </div>
                      <div className="text-2xl font-black text-green-500">
                        {formatCurrency(roiResults.errorSavings)}
                      </div>
                    </div>

                    {/* Total Annual Savings */}
                    <div className="p-4 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/40">
                      <div className="text-sm text-muted-foreground mb-1 font-semibold">
                        {isArabic ? "إجمالي التوفير السنوي" : "Total Annual Savings"}
                      </div>
                      <div className="text-3xl font-black text-primary">
                        {formatCurrency(roiResults.totalAnnualSavings)}
                      </div>
                    </div>

                    {/* Payback Period */}
                    <div className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-primary/20">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-semibold">
                          {isArabic ? "فترة الاسترداد" : "Payback Period"}
                        </span>
                      </div>
                      <span className="text-xl font-black text-primary">
                        {roiResults.paybackMonths.toFixed(1)} {isArabic ? "أشهر" : "months"}
                      </span>
                    </div>

                    {/* ROI Percentages */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-card/50 border border-primary/20 text-center">
                        <div className="text-sm text-muted-foreground mb-1">
                          {isArabic ? "عائد الاستثمار (سنة واحدة)" : "ROI (1 Year)"}
                        </div>
                        <div className="text-2xl font-black text-primary">
                          {roiResults.roi1Year > 0 ? "+" : ""}{roiResults.roi1Year.toFixed(0)}%
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-card/50 border border-primary/20 text-center">
                        <div className="text-sm text-muted-foreground mb-1">
                          {isArabic ? "عائد الاستثمار (3 سنوات)" : "ROI (3 Years)"}
                        </div>
                        <div className="text-2xl font-black text-primary">
                          {roiResults.roi3Years > 0 ? "+" : ""}{roiResults.roi3Years.toFixed(0)}%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                    <p className="text-sm font-semibold flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {isArabic
                          ? `في 3 سنوات، ستوفر ${formatCurrency(roiResults.totalAnnualSavings * 3)} من استثمار ${formatCurrency(automationCost)}`
                          : `Over 3 years, you'll save ${formatCurrency(roiResults.totalAnnualSavings * 3)} from a ${formatCurrency(automationCost)} investment`}
                      </span>
                    </p>
                  </div>

                  <Button asChild className="w-full mt-4">
                    <Link href="/signup">
                      {isArabic ? "ابدأ التوفير الآن" : "Start Saving Now"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/30 text-center p-8">
          <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {isArabic ? "هل أنت مستعد للبدء؟" : "Ready to Get Started?"}
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {isArabic
              ? "احجز مكالمة استشارية مجانية لمناقشة احتياجاتك والحصول على عرض مخصص"
              : "Book a free consultation call to discuss your needs and get a custom quote"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Link href="/signup">
                {isArabic ? "احجز استشارة مجانية" : "Book Free Consultation"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10">
              <Link href="/pricing">
                {isArabic ? "عرض الأسعار الكاملة" : "View Full Pricing"}
              </Link>
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

