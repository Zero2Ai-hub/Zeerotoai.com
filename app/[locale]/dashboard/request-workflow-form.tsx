"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RequestWorkflowFormProps {
  userEmail: string;
  userName: string;
  isArabic?: boolean;
}

export function RequestWorkflowForm({ userEmail, userName, isArabic = false }: RequestWorkflowFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  const [formData, setFormData] = useState({
    name: userName,
    email: userEmail,
    serviceType: "",
    business: "",
    projectDetails: "",
    timeline: "",
    budget: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/request-workflow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form except name and email
        setFormData({
          ...formData,
          serviceType: "",
          business: "",
          projectDetails: "",
          timeline: "",
          budget: "",
        });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        if (response.status === 429) {
          alert(isArabic ? "طلبات كثيرة جدًا. يرجى المحاولة لاحقًا." : "Too many requests. Please try again later.");
        }
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    { value: "ai-automation", label: isArabic ? "أنظمة الأتمتة بالذكاء الاصطناعي" : "AI Automation Systems" },
    { value: "lead-generation", label: isArabic ? "توليد العملاء المحتملين + التواصل" : "Automated Lead Generation + Outreach" },
    { value: "customer-support", label: isArabic ? "وكلاء دعم العملاء بالذكاء الاصطناعي" : "AI Customer Support Agents" },
    { value: "ai-websites", label: isArabic ? "مواقع ويب وSaaS بالذكاء الاصطناعي" : "AI Generated Websites & SaaS" },
    { value: "social-media", label: isArabic ? "الذكاء الاصطناعي × وسائل التواصل الاجتماعي" : "AI x Social Media" },
    { value: "ecommerce", label: isArabic ? "الذكاء الاصطناعي × التجارة الإلكترونية" : "AI x E-commerce" },
    { value: "consultation", label: isArabic ? "غير متأكد / بحاجة إلى استشارة" : "Not Sure / Need Consultation" },
  ];

  const timelines = [
    { value: "asap", label: isArabic ? "بأسرع وقت (1-2 أسبوع)" : "ASAP (1-2 weeks)" },
    { value: "soon", label: isArabic ? "قريبًا (3-4 أسابيع)" : "Soon (3-4 weeks)" },
    { value: "flexible", label: isArabic ? "مرن (1-2 شهر)" : "Flexible (1-2 months)" },
    { value: "future", label: isArabic ? "تخطيط مستقبلي (3+ أشهر)" : "Future Planning (3+ months)" },
    { value: "exploring", label: isArabic ? "استكشاف فقط" : "Just Exploring" },
  ];

  const budgets = [
    { value: "under-2k", label: isArabic ? "أقل من $2,000" : "Under $2,000" },
    { value: "2k-5k", label: "$2,000 - $5,000" },
    { value: "5k-10k", label: "$5,000 - $10,000" },
    { value: "10k-plus", label: "$10,000+" },
    { value: "not-sure", label: isArabic ? "غير متأكد بعد" : "Not sure yet" },
    { value: "discuss", label: isArabic ? "أفضل المناقشة" : "Prefer to discuss" },
  ];

  return (
    <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur-sm overflow-hidden relative min-h-[700px] flex flex-col">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <CardHeader className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40">
            <Sparkles className="w-7 h-7 text-background" />
          </div>
          <div>
            <CardTitle className="text-2xl">
              {isArabic ? "اطلب سير عمل" : "Request a Workflow"}
            </CardTitle>
            <CardDescription>
              {isArabic 
                ? "أخبرنا بما تريد أتمتته وسنتواصل معك خلال 48 ساعة" 
                : "Tell us what you want to automate and we'll get back to you within 48 hours"}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 flex-1 flex flex-col">
        <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
          {/* Service Type */}
          <div className="space-y-2">
            <Label htmlFor="serviceType" className="text-sm font-medium">
              {isArabic ? "نوع الخدمة" : "Service Type"} <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
              required
            >
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder={isArabic ? "اختر خدمة..." : "Select a service..."} />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Business/Industry */}
          <div className="space-y-2">
            <Label htmlFor="business" className="text-sm font-medium">
              {isArabic ? "العمل / الصناعة" : "Your Business / Industry"} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="business"
              type="text"
              placeholder={isArabic ? "مثال: متجر أزياء إلكتروني، SaaS B2B..." : "e.g., E-commerce fashion store, B2B SaaS, Marketing agency..."}
              value={formData.business}
              onChange={(e) => setFormData({ ...formData, business: e.target.value })}
              required
              className="bg-background/50"
            />
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <Label htmlFor="projectDetails" className="text-sm font-medium">
              {isArabic ? "ما الذي تريد أتمتته؟" : "What do you want to automate?"} <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="projectDetails"
              placeholder={isArabic 
                ? "صف سير عملك، نقاط الألم، أو أهداف الأتمتة. كن مفصلاً قدر الإمكان - سنساعدك في معرفة ذلك في المكالمة!"
                : "Describe your workflow, pain points, or automation goals. Be as detailed as you like - we'll help you figure it out on the call!"}
              value={formData.projectDetails}
              onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
              required
              rows={7}
              className="bg-background/50 resize-none"
            />
          </div>

          {/* Timeline */}
          <div className="space-y-2">
            <Label htmlFor="timeline" className="text-sm font-medium">
              {isArabic ? "الجدول الزمني المتوقع" : "Expected Timeline"} <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.timeline}
              onValueChange={(value) => setFormData({ ...formData, timeline: value })}
              required
            >
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder={isArabic ? "متى تحتاجه؟" : "When do you need it?"} />
              </SelectTrigger>
              <SelectContent>
                {timelines.map((timeline) => (
                  <SelectItem key={timeline.value} value={timeline.value}>
                    {timeline.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Budget Range */}
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-sm font-medium">
              {isArabic ? "نطاق الميزانية (اختياري)" : "Budget Range (Optional)"}
            </Label>
            <Select
              value={formData.budget}
              onValueChange={(value) => setFormData({ ...formData, budget: value })}
            >
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder={isArabic ? "اختر نطاق الميزانية..." : "Select budget range..."} />
              </SelectTrigger>
              <SelectContent>
                {budgets.map((budget) => (
                  <SelectItem key={budget.value} value={budget.value}>
                    {budget.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Spacer to push button down */}
          <div className="flex-1 min-h-[3rem]" />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isArabic ? "جاري الإرسال..." : "Submitting..."}
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                {isArabic ? "أرسل طلبك" : "Submit Request"}
              </>
            )}
          </Button>
        </form>

        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <div className="mt-6 bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium">
                {isArabic ? "تم استلام طلبك!" : "Request received!"}
              </p>
              <p className="text-sm mt-1 text-green-300">
                {isArabic 
                  ? "سنرد عليك خلال 48 ساعة. تريد التحدث في وقت أقرب؟ احجز مكالمة أدناه! ⬇️"
                  : "We'll respond within 48 hours. Want to chat sooner? Book a call below! ⬇️"}
              </p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-6 bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg flex items-center gap-3">
            <XCircle className="h-5 w-5" />
            <span>
              {isArabic 
                ? "حدث خطأ. يرجى المحاولة مرة أخرى."
                : "An error occurred. Please try again."}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

