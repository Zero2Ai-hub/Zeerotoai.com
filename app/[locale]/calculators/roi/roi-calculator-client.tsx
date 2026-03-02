"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import * as Icons from "lucide-react";
import Link from "next/link";

interface RoiCalculatorClientProps {
  isArabic: boolean;
}

export function RoiCalculatorClient({ isArabic }: RoiCalculatorClientProps) {
  // Input states
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
  const [hourlyCost, setHourlyCost] = useState<number>(50);
  const [automationType, setAutomationType] = useState<string>("");
  const [serviceType, setServiceType] = useState<string>("");
  const [projectCost, setProjectCost] = useState<number>(5000);
  
  // Calculated results
  const currentAnnualCost = hoursPerWeek * hourlyCost * 52;
  
  // Time savings based on automation type
  const timeReductionRate = automationType === "full" ? 0.875 : automationType === "partial" ? 0.5 : 0;
  const hoursSavedPerWeek = hoursPerWeek * timeReductionRate;
  const annualSavings = hoursSavedPerWeek * hourlyCost * 52;
  
  // Error cost and savings (calculated automatically)
  const monthlyErrorCost = (hoursPerWeek * hourlyCost * 4.33) * 0.1;
  const errorSavings = monthlyErrorCost * 12 * 0.93; // 93% error reduction
  
  // Revenue increase based on service type
  const revenueIncreaseRates: { [key: string]: number } = {
    "ai-automation": 0.25,
    "chatbot": 0.35,
    "lead-gen": 0.45,
    "customer-support": 0.30,
    "social-media": 0.20,
    "ecommerce": 0.40,
    "website": 0.50,
  };
  const revenueIncreaseRate = revenueIncreaseRates[serviceType] || 0;
  const revenueLift = currentAnnualCost * revenueIncreaseRate;
  
  const totalAnnualBenefit = annualSavings + errorSavings + revenueLift;
  const paybackMonths = totalAnnualBenefit > 0 ? (projectCost / (totalAnnualBenefit / 12)) : 0;
  const threeYearROI = totalAnnualBenefit > 0 ? (((totalAnnualBenefit * 3 - projectCost) / projectCost) * 100) : 0;
  const threeYearNetBenefit = (totalAnnualBenefit * 3) - projectCost;

  const handleReset = () => {
    setHoursPerWeek(10);
    setHourlyCost(50);
    setAutomationType("");
    setServiceType("");
    setProjectCost(5000);
  };

  return (
    <div className="relative z-10 container mx-auto px-4 pb-16 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Icons.Calculator className="w-7 h-7 text-primary" />
                {isArabic ? "أدخل بياناتك الحالية" : "Enter Your Current Data"}
              </CardTitle>
              <CardDescription>
                {isArabic
                  ? "أدخل معلومات عملك الحالية لحساب عائد الاستثمار"
                  : "Input your current business metrics to calculate ROI"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Time Investment Section */}
              <div className="space-y-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Icons.Clock className="w-5 h-5 text-primary" />
                  {isArabic ? "الاستثمار الزمني" : "Time Investment"}
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="hoursPerWeek">
                    {isArabic ? "كم ساعة في الأسبوع تنفق على هذه المهمة؟" : "Hours spent per week on this task?"}
                  </Label>
                  <Input
                    id="hoursPerWeek"
                    type="number"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    min={0}
                    max={168}
                    className="bg-card/50"
                  />
                  <p className="text-xs text-muted-foreground">
                    {isArabic ? `التكلفة السنوية الحالية: $${currentAnnualCost.toLocaleString()}` : `Current annual cost: $${currentAnnualCost.toLocaleString()}`}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hourlyCost">
                    {isArabic ? "التكلفة بالساعة" : "Hourly Cost"}
                  </Label>
                  <Input
                    id="hourlyCost"
                    type="number"
                    value={hourlyCost}
                    onChange={(e) => setHourlyCost(Number(e.target.value))}
                    min={0}
                    className="bg-card/50"
                  />
                  <p className="text-xs text-muted-foreground">
                    {isArabic ? "نصيحة: تتراوح عادة من $30-$150 حسب الدور" : "Tip: typically $30-$150 depending on role"}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="automationType">
                    {isArabic ? "نوع الأتمتة" : "Automation Type"}
                  </Label>
                  <Select value={automationType} onValueChange={setAutomationType}>
                    <SelectTrigger className="bg-card/50">
                      <SelectValue placeholder={isArabic ? "اختر نوع الأتمتة" : "Select automation type"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">
                        {isArabic ? "أتمتة كاملة" : "Full Automation"}
                      </SelectItem>
                      <SelectItem value="partial">
                        {isArabic ? "أتمتة جزئية" : "Partial Automation"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    {automationType === "full"
                      ? isArabic
                        ? "توفير الوقت: 80-95%"
                        : "Time savings: 80-95%"
                      : automationType === "partial"
                      ? isArabic
                        ? "توفير الوقت: 40-60%"
                        : "Time savings: 40-60%"
                      : isArabic
                      ? "نصيحة: الأتمتة الكاملة = 80-95%، الأتمتة الجزئية = 40-60%"
                      : "Tip: Full automation = 80-95%, Partial = 40-60%"}
                  </p>
                </div>
              </div>

              {/* Service Type Selection */}
              <div className="space-y-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Icons.Briefcase className="w-5 h-5 text-primary" />
                  {isArabic ? "نوع الخدمة" : "Service Type"}
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="serviceType">
                    {isArabic ? "اختر الخدمة التي تحتاجها" : "Select the service you need"}
                  </Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger className="bg-card/50">
                      <SelectValue placeholder={isArabic ? "اختر خدمة" : "Select a service"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-automation">
                        {isArabic ? "سير عمل الأتمتة" : "AI Automation Workflows"}
                      </SelectItem>
                      <SelectItem value="chatbot">
                        {isArabic ? "روبوت الدردشة" : "AI Chatbot"}
                      </SelectItem>
                      <SelectItem value="lead-gen">
                        {isArabic ? "نظام توليد العملاء" : "Lead Generation System"}
                      </SelectItem>
                      <SelectItem value="customer-support">
                        {isArabic ? "وكيل دعم العملاء" : "Customer Support Agent"}
                      </SelectItem>
                      <SelectItem value="social-media">
                        {isArabic ? "أتمتة وسائل التواصل" : "Social Media Automation"}
                      </SelectItem>
                      <SelectItem value="ecommerce">
                        {isArabic ? "أتمتة التجارة الإلكترونية" : "E-commerce Automation"}
                      </SelectItem>
                      <SelectItem value="website">
                        {isArabic ? "تطوير الموقع/SaaS" : "Website/SaaS Development"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    {serviceType === "ai-automation"
                      ? isArabic
                        ? "💡 زيادة الإيرادات المتوقعة: +25% | تقليل الأخطاء: 93%"
                        : "💡 Expected revenue increase: +25% | Error reduction: 93%"
                      : serviceType === "chatbot"
                      ? isArabic
                        ? "💡 زيادة الإيرادات المتوقعة: +35% | تقليل الأخطاء: 93%"
                        : "💡 Expected revenue increase: +35% | Error reduction: 93%"
                      : serviceType === "lead-gen"
                      ? isArabic
                        ? "💡 زيادة الإيرادات المتوقعة: +45% | تقليل الأخطاء: 93%"
                        : "💡 Expected revenue increase: +45% | Error reduction: 93%"
                      : serviceType === "customer-support"
                      ? isArabic
                        ? "💡 زيادة الإيرادات المتوقعة: +30% | تقليل الأخطاء: 93%"
                        : "💡 Expected revenue increase: +30% | Error reduction: 93%"
                      : serviceType === "social-media"
                      ? isArabic
                        ? "💡 زيادة الإيرادات المتوقعة: +20% | تقليل الأخطاء: 93%"
                        : "💡 Expected revenue increase: +20% | Error reduction: 93%"
                      : serviceType === "ecommerce"
                      ? isArabic
                        ? "💡 زيادة الإيرادات المتوقعة: +40% | تقليل الأخطاء: 93%"
                        : "💡 Expected revenue increase: +40% | Error reduction: 93%"
                      : serviceType === "website"
                      ? isArabic
                        ? "💡 زيادة الإيرادات المتوقعة: +50% | تقليل الأخطاء: 93%"
                        : "💡 Expected revenue increase: +50% | Error reduction: 93%"
                      : isArabic
                      ? "اختر خدمة لرؤية التأثير المتوقع"
                      : "Select a service to see expected impact"}
                  </p>
                </div>
              </div>

              {/* Project Cost */}
              <div className="space-y-2">
                <Label htmlFor="projectCost">
                  {isArabic ? "تكلفة المشروع المقدرة ($)" : "Estimated Project Cost ($)"}
                </Label>
                <Input
                  id="projectCost"
                  type="number"
                  value={projectCost}
                  onChange={(e) => setProjectCost(Number(e.target.value))}
                  min={0}
                  className="bg-card/50"
                />
                <p className="text-xs text-muted-foreground">
                  {isArabic ? (
                    <>استخدم <Link href="/pricing" className="text-primary hover:underline">حاسبة التكلفة</Link> لتقدير تكلفة مشروعك</>
                  ) : (
                    <>Use our <Link href="/pricing" className="text-primary hover:underline">cost calculator</Link> to estimate your project cost</>
                  )}
                </p>
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
          {/* Key Metrics */}
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Icons.TrendingUp className="w-7 h-7 text-primary" />
                {isArabic ? "نتائج عائد الاستثمار" : "Your ROI Results"}
              </CardTitle>
              <CardDescription>
                {isArabic ? "بناءً على مدخلاتك" : "Based on your inputs"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Payback Period */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/40">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {isArabic ? "فترة الاسترداد" : "Payback Period"}
                  </span>
                  <Icons.Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="text-4xl font-black text-primary mb-1">
                  {paybackMonths > 0 ? paybackMonths.toFixed(1) : "∞"}
                  <span className="text-xl ml-2">{isArabic ? "أشهر" : "months"}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {paybackMonths > 0 && paybackMonths <= 12 ? (
                    isArabic ? "🚀 عائد سريع ممتاز!" : "🚀 Excellent fast return!"
                  ) : paybackMonths > 12 ? (
                    isArabic ? "💡 استثمار طويل الأجل" : "💡 Long-term investment"
                  ) : (
                    isArabic ? "⚠️ تحقق من مدخلاتك" : "⚠️ Check your inputs"
                  )}
                </p>
              </div>

              {/* Annual Savings Breakdown */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg">{isArabic ? "التوفير السنوي" : "Annual Savings"}</h3>
                
                <div className="p-4 rounded-lg bg-card/50 border border-primary/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{isArabic ? "توفير الوقت" : "Time Savings"}</span>
                    <span className="font-bold text-primary">${annualSavings.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {hoursSavedPerWeek.toFixed(1)} {isArabic ? "ساعات/أسبوع" : "hrs/week"} × ${hourlyCost} × 52 {isArabic ? "أسابيع" : "weeks"}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{isArabic ? "تكلفة الأخطاء الشهرية" : "Monthly Error Cost"}</span>
                    <span className="font-bold text-orange-500">${monthlyErrorCost.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {isArabic ? "محسوبة تلقائياً (10% من التكلفة الشهرية)" : "Calculated automatically (10% of monthly cost)"}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-card/50 border border-primary/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{isArabic ? "توفير تقليل الأخطاء" : "Error Reduction Savings"}</span>
                    <span className="font-bold text-primary">${errorSavings.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    ${monthlyErrorCost.toLocaleString()}/mo × 93% × 12 {isArabic ? "أشهر" : "months"}
                  </p>
                </div>

                {revenueLift > 0 && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{isArabic ? "زيادة الإيرادات المتوقعة" : "Expected Revenue Increase"}</span>
                      <span className="font-bold text-green-500">${revenueLift.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {isArabic ? "محسوبة بناءً على نوع الخدمة" : "Calculated based on service type"}
                    </p>
                  </div>
                )}

                <div className="p-4 rounded-lg bg-primary/10 border-2 border-primary/30">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{isArabic ? "إجمالي الفائدة السنوية" : "Total Annual Benefit"}</span>
                    <span className="text-2xl font-black text-primary">${totalAnnualBenefit.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* 3-Year Projection */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg">{isArabic ? "توقعات 3 سنوات" : "3-Year Projection"}</h3>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/40">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {isArabic ? "صافي الفائدة" : "Net Benefit"}
                      </div>
                      <div className="text-3xl font-black text-primary">
                        ${threeYearNetBenefit.toLocaleString()}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {isArabic ? "عائد الاستثمار" : "ROI"}
                      </div>
                      <div className="text-3xl font-black text-primary">
                        {threeYearROI > 0 ? `${threeYearROI.toFixed(0)}%` : "N/A"}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-primary/20">
                      <div className="text-xs text-muted-foreground">
                        {isArabic ? "الحساب" : "Calculation"}: (${totalAnnualBenefit.toLocaleString()} × 3 - ${projectCost.toLocaleString()}) / ${projectCost.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">
                    <Icons.Rocket className="w-4 h-4 mr-2" />
                    {isArabic ? "احصل على عرض أسعار دقيق" : "Get Accurate Quote"}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="/pricing">
                    <Icons.DollarSign className="w-4 h-4 mr-2" />
                    {isArabic ? "عرض دليل الأسعار" : "View Pricing Guide"}
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
                  ? "💡 هذه الحاسبة توفر تقديرات بناءً على مدخلاتك. قد تختلف النتائج الفعلية بناءً على تنفيذ المشروع المحدد واستخدامه."
                  : "💡 This calculator provides estimates based on your inputs. Actual results may vary based on specific project implementation and usage."}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Example Scenarios */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-black mb-8 text-center">
          {isArabic ? "أمثلة واقعية" : "Real-World Examples"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example 1: Lead Generation */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-primary/20 text-primary border-primary/30">
                {isArabic ? "توليد العملاء المحتملين" : "Lead Generation"}
              </Badge>
              <CardTitle className="text-xl">{isArabic ? "وكالة تسويق" : "Marketing Agency"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isArabic ? "الوقت الحالي" : "Current time"}:</span>
                <span>15 hrs/week</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isArabic ? "التكلفة بالساعة" : "Hourly cost"}:</span>
                <span>$60</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isArabic ? "تكلفة المشروع" : "Project cost"}:</span>
                <span>$6,500</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-primary/20 font-bold">
                <span>{isArabic ? "فترة الاسترداد" : "Payback"}:</span>
                <span className="text-primary">1.9 months</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>{isArabic ? "عائد الاستثمار لمدة 3 سنوات" : "3-Yr ROI"}:</span>
                <span className="text-primary">823%</span>
              </div>
            </CardContent>
          </Card>

          {/* Example 2: Customer Support */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-primary/20 text-primary border-primary/30">
                {isArabic ? "دعم العملاء" : "Customer Support"}
              </Badge>
              <CardTitle className="text-xl">{isArabic ? "شركة SaaS" : "SaaS Company"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isArabic ? "الوقت الحالي" : "Current time"}:</span>
                <span>25 hrs/week</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isArabic ? "التكلفة بالساعة" : "Hourly cost"}:</span>
                <span>$40</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isArabic ? "تكلفة المشروع" : "Project cost"}:</span>
                <span>$10,800</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-primary/20 font-bold">
                <span>{isArabic ? "فترة الاسترداد" : "Payback"}:</span>
                <span className="text-primary">2.6 months</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>{isArabic ? "عائد الاستثمار لمدة 3 سنوات" : "3-Yr ROI"}:</span>
                <span className="text-primary">1,185%</span>
              </div>
            </CardContent>
          </Card>

          {/* Example 3: Social Media */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-primary/20 text-primary border-primary/30">
                {isArabic ? "وسائل التواصل الاجتماعي" : "Social Media"}
              </Badge>
              <CardTitle className="text-xl">{isArabic ? "متجر التجارة الإلكترونية" : "E-commerce Store"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isArabic ? "الوقت الحالي" : "Current time"}:</span>
                <span>12 hrs/week</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isArabic ? "التكلفة بالساعة" : "Hourly cost"}:</span>
                <span>$50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{isArabic ? "تكلفة المشروع" : "Project cost"}:</span>
                <span>$8,100</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-primary/20 font-bold">
                <span>{isArabic ? "فترة الاسترداد" : "Payback"}:</span>
                <span className="text-primary">2.6 months</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>{isArabic ? "عائد الاستثمار لمدة 3 سنوات" : "3-Yr ROI"}:</span>
                <span className="text-primary">567%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}

