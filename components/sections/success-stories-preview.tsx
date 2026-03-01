"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";

export function SuccessStoriesPreview() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const successStories = [
    {
      icon: "BarChart3",
      title: {
        en: "Digital Marketing Agency",
        ar: "وكالة التسويق الرقمي",
      },
      subtitle: {
        en: "10x Lead Generation in 2 Weeks",
        ar: "10x توليد العملاء المحتملين في أسبوعين",
      },
      challenge: {
        en: "Spending 20 hours weekly manually scraping leads and sending outreach emails",
        ar: "قضاء 20 ساعة أسبوعيًا في استخراج العملاء المحتملين يدويًا وإرسال رسائل البريد الإلكتروني",
      },
      metrics: [
        {
          icon: Clock,
          value: "20hrs",
          label: { en: "Saved Weekly", ar: "يتم توفيرها أسبوعيًا" },
        },
        {
          icon: TrendingUp,
          value: "10x",
          label: { en: "Lead Increase", ar: "زيادة العملاء المحتملين" },
        },
        {
          icon: DollarSign,
          value: "2 weeks",
          label: { en: "Full ROI", ar: "عائد كامل على الاستثمار" },
        },
      ],
    },
    {
      icon: "🛍️",
      title: {
        en: "E-Commerce Business",
        ar: "أعمال التجارة الإلكترونية",
      },
      subtitle: {
        en: "+35% Conversion Rate",
        ar: "+35٪ معدل التحويل",
      },
      challenge: {
        en: "Growing online store with 500+ products, no time to write descriptions or manage customer inquiries",
        ar: "متجرك الإلكتروني متنامي يحتوي على أكثر من 500 منتج، ولا وقت لكتابة الأوصاف أو إدارة استفسارات العملاء",
      },
      metrics: [
        {
          icon: Clock,
          value: "Hours",
          label: { en: "vs Weeks for Descriptions", ar: "مقابل أسابيع للأوصاف" },
        },
        {
          icon: TrendingUp,
          value: "60%",
          label: { en: "Fewer Support Tickets", ar: "تذاكر دعم أقل" },
        },
        {
          icon: DollarSign,
          value: "+35%",
          label: { en: "Conversion Rate", ar: "معدل التحويل" },
        },
      ],
    },
    {
      icon: "BarChart3",
      title: {
        en: "Consulting Firm",
        ar: "شركة استشارية",
      },
      subtitle: {
        en: "80% Reduction in Admin Time",
        ar: "تخفيض 80٪ في وقت الإدارة",
      },
      challenge: {
        en: "Spending 15 hours weekly on administrative tasks—scheduling, email management, data entry",
        ar: "قضاء 15 ساعة أسبوعيًا في المهام الإدارية - الجدولة وإدارة البريد الإلكتروني وإدخال البيانات",
      },
      metrics: [
        {
          icon: TrendingUp,
          value: "80%",
          label: { en: "Less Admin Time", ar: "وقت إداري أقل" },
        },
        {
          icon: Clock,
          value: "Zero",
          label: { en: "Double Bookings", ar: "حجوزات مزدوجة" },
        },
        {
          icon: DollarSign,
          value: "+12hrs",
          label: { en: "Weekly Focus Time", ar: "وقت التركيز الأسبوعي" },
        },
      ],
    },
  ];

  return (
    <section className="relative z-10 py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 px-6 py-3 text-base bg-primary/10 text-primary border-primary/30">
            {isArabic ? "قصص النجاح" : "Success Stories"}
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
            {isArabic ? "نتائج حقيقية من عملاء حقيقيين" : "Real Results from Real Clients"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isArabic
              ? "تعرف على كيفية مساعدة الأتمتة الذكية للشركات مثل شركتك على توفير الوقت وزيادة الإيرادات والنمو بشكل أسرع"
              : "See how intelligent automation helped businesses like yours save time, increase revenue, and grow faster"}
          </p>
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full border-2 border-primary/20 bg-card/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden group flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
                
                <CardContent className="p-8 relative z-10 flex-1 flex flex-col">
                  {/* Icon & Title */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-4xl">{story.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {isArabic ? story.title.ar : story.title.en}
                    </h3>
                    <p className="text-lg font-semibold text-primary">
                      {isArabic ? story.subtitle.ar : story.subtitle.en}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-6" />

                  {/* Challenge */}
                  <div className="mb-6 flex-1">
                    <Badge className="mb-3 bg-card border-primary/30 text-foreground">
                      {isArabic ? "التحدي" : "Challenge"}
                    </Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isArabic ? story.challenge.ar : story.challenge.en}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-4 mt-auto">
                    <Badge className="bg-primary/10 text-primary border-primary/30">
                      {isArabic ? "النتائج" : "Results"}
                    </Badge>
                    {story.metrics.map((metric, idx) => {
                      const Icon = metric.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                        >
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-black text-2xl text-primary">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">
                              {isArabic ? metric.label.ar : metric.label.en}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            {isArabic ? "ابدأ قصة نجاحك" : "Start Your Success Story"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

