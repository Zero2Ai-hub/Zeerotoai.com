"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Star,
  Globe,
  Zap,
  Shield,
  BarChart3,
  Smartphone,
  Users,
} from "lucide-react";

interface LandingPagesClientProps {
  isArabic: boolean;
}

const tiers = [
  {
    id: "starter",
    name: { en: "Starter", ar: "المبتدئ" },
    price: { en: "1,500 AED", ar: "1,500 درهم" },
    priceNote: { en: "one-time", ar: "دفعة واحدة" },
    timeline: { en: "Delivered in 3 days", ar: "تسليم في 3 أيام" },
    description: {
      en: "A clean, fast landing page that converts visitors into calls and inquiries.",
      ar: "صفحة هبوط نظيفة وسريعة تحوّل الزوار إلى مكالمات واستفسارات.",
    },
    features: {
      en: [
        "1 conversion-focused page",
        "Mobile-first design",
        "WhatsApp click-to-chat button",
        "Google Maps embed",
        "Contact form + call button",
        "Basic SEO setup",
        "Delivered as hosted page",
      ],
      ar: [
        "صفحة واحدة مُحسَّنة للتحويل",
        "تصميم أولوية الجوال",
        "زر واتساب للتواصل الفوري",
        "خريطة جوجل مدمجة",
        "نموذج تواصل + زر اتصال",
        "إعداد SEO أساسي",
        "تسليم كصفحة مستضافة",
      ],
    },
    highlight: false,
    cta: { en: "Get Starter Page", ar: "احصل على الصفحة المبتدئة" },
    accentColor: "border-primary/30",
  },
  {
    id: "growth",
    name: { en: "Growth", ar: "النمو" },
    price: { en: "2,500 AED", ar: "2,500 درهم" },
    priceNote: { en: "one-time", ar: "دفعة واحدة" },
    timeline: { en: "Delivered in 5 days", ar: "تسليم في 5 أيام" },
    description: {
      en: "A full conversion machine — built to rank on Google and turn ad traffic into booked appointments.",
      ar: "آلة تحويل كاملة — مبنية للتصنيف على جوجل وتحويل حركة الإعلانات إلى مواعيد محجوزة.",
    },
    features: {
      en: [
        "Everything in Starter",
        "Multi-section layout (hero + trust + services + reviews + CTA)",
        "Google Reviews integration",
        "Full on-page SEO (schema, meta, headings)",
        "TikTok / Meta Pixel setup",
        "WhatsApp auto-reply flow",
        "Google Analytics connected",
        "1 revision round",
      ],
      ar: [
        "كل ما في الخطة المبتدئة",
        "تخطيط متعدد الأقسام (البطل + الثقة + الخدمات + التقييمات + CTA)",
        "تكامل تقييمات جوجل",
        "SEO كامل للصفحة (schema، meta، عناوين)",
        "إعداد بيكسل تيك توك / ميتا",
        "تدفق رد واتساب التلقائي",
        "جوجل أناليتيكس متصل",
        "جولة مراجعة واحدة",
      ],
    },
    highlight: true,
    cta: { en: "Get Growth Page", ar: "احصل على صفحة النمو" },
    accentColor: "border-primary",
    badge: { en: "Most Popular", ar: "الأكثر طلبًا" },
  },
  {
    id: "pro",
    name: { en: "Pro", ar: "المحترف" },
    price: { en: "4,000 AED", ar: "4,000 درهم" },
    priceNote: { en: "one-time", ar: "دفعة واحدة" },
    timeline: { en: "Delivered in 7 days", ar: "تسليم في 7 أيام" },
    description: {
      en: "A full mini-site with booking system, AI chat, and everything you need to win against bigger competitors.",
      ar: "موقع صغير كامل مع نظام حجز وذكاء اصطناعي وكل ما تحتاجه للفوز على المنافسين الأكبر.",
    },
    features: {
      en: [
        "Everything in Growth",
        "Online booking / appointment system",
        "AI-powered WhatsApp chatbot (Arabic + English)",
        "Arabic + English bilingual pages",
        "Lead capture CRM integration",
        "Custom domain setup",
        "2 revision rounds",
        "30-day post-launch support",
      ],
      ar: [
        "كل ما في خطة النمو",
        "نظام حجز / مواعيد أونلاين",
        "بوت واتساب بالذكاء الاصطناعي (عربي + إنجليزي)",
        "صفحات ثنائية اللغة عربي + إنجليزي",
        "تكامل CRM لالتقاط العملاء المحتملين",
        "إعداد نطاق مخصص",
        "جولتان للمراجعة",
        "دعم 30 يومًا بعد الإطلاق",
      ],
    },
    highlight: false,
    cta: { en: "Get Pro Page", ar: "احصل على الصفحة المحترفة" },
    accentColor: "border-primary/50",
  },
];

const useCases = [
  { icon: Users, en: "Medical Clinics", ar: "العيادات الطبية" },
  { icon: Star, en: "Salons & Spas", ar: "الصالونات والسبا" },
  { icon: Globe, en: "Restaurants", ar: "المطاعم" },
  { icon: Shield, en: "Contractors", ar: "المقاولون" },
  { icon: BarChart3, en: "Tutors & Coaches", ar: "المعلمون والمدربون" },
  { icon: Smartphone, en: "Retail Shops", ar: "محلات التجزئة" },
];

const processSteps = [
  {
    step: "1",
    en: { title: "You share your info", body: "Send us your business name, services, and a few photos." },
    ar: { title: "تشارك معلوماتك", body: "أرسل لنا اسم نشاطك التجاري وخدماتك وبعض الصور." },
  },
  {
    step: "2",
    en: { title: "We build it", body: "Our team designs and builds your page — no back-and-forth meetings." },
    ar: { title: "نبنيه لك", body: "يصمم فريقنا ويبني صفحتك — دون اجتماعات مطولة." },
  },
  {
    step: "3",
    en: { title: "You review + go live", body: "One review round. Then it's live and converting in under 5 days." },
    ar: { title: "تراجع ثم تنطلق", body: "جولة مراجعة واحدة. ثم تنطلق وتبدأ في التحويل خلال 5 أيام." },
  },
];

export function LandingPagesClient({ isArabic }: LandingPagesClientProps) {
  const t = (obj: { en: string; ar: string }) => (isArabic ? obj.ar : obj.en);
  const tArr = (obj: { en: string[]; ar: string[] }) => (isArabic ? obj.ar : obj.en);

  return (
    <div className={`relative z-10 ${isArabic ? "rtl" : "ltr"}`}>
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              {isArabic ? "تسليم في 5 أيام أو أقل" : "Delivered in 5 days or less"}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? (
                <>
                  موقعك القديم{" "}
                  <span className="text-primary">يُرسل عملاءك</span>
                  {" "}إلى منافسيك
                </>
              ) : (
                <>
                  Your old website is{" "}
                  <span className="text-primary">sending customers</span> to your
                  competitor
                </>
              )}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {isArabic
                ? "ليست مجرد صفحة جميلة — مبنية لتجلب لك عملاء. لا رسوم شهرية. تسليم في 5 أيام."
                : "Not just a pretty page — built to get you customers. No monthly fees. Delivered in 5 days."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105"
              >
                {isArabic ? "احجز استشارة مجانية" : "Book Free Consultation"}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-foreground rounded-lg font-semibold hover:border-primary/60 hover:bg-primary/10 transition-all duration-200"
              >
                {isArabic ? "عرض الأسعار" : "See Pricing"}
              </Link>
            </div>

            {/* Social proof bar */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {isArabic ? "5 أيام عمل" : "5 business days"}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {isArabic ? "بدون رسوم شهرية" : "Zero monthly fees"}
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-primary" />
                {isArabic ? "متوافق مع الجوال 100%" : "100% mobile optimized"}
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                {isArabic ? "عربي + إنجليزي" : "Arabic + English"}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-8">
            {isArabic ? "مثالي لـ" : "Perfect for"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {useCases.map(({ icon: Icon, en, ar }) => (
              <motion.div
                key={en}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 text-center"
              >
                <Icon className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">{isArabic ? ar : en}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isArabic ? "كيف يعمل" : "How it works"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => {
              const content = isArabic ? step.ar : step.en;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{content.title}</h3>
                  <p className="text-muted-foreground text-sm">{content.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "اختر خطتك" : "Choose your plan"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {isArabic
                ? "لا رسوم خفية. لا اشتراكات. تملك الصفحة بالكامل."
                : "No hidden fees. No subscriptions. You own the page outright."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl border-2 ${tier.accentColor} ${
                  tier.highlight
                    ? "bg-primary/5 shadow-2xl shadow-primary/20 scale-105"
                    : "bg-card/80"
                } p-8 flex flex-col backdrop-blur-sm`}
              >
                {tier.highlight && tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                    {t(tier.badge)}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{t(tier.name)}</h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-primary">{t(tier.price)}</span>
                    <span className="text-muted-foreground text-sm">{t(tier.priceNote)}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    {t(tier.timeline)}
                  </div>
                  <p className="text-muted-foreground text-sm">{t(tier.description)}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {tArr(tier.features).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
                    tier.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-primary/40 hover:border-primary hover:bg-primary/10"
                  }`}
                >
                  {t(tier.cta)}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objection busting */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            {isArabic ? "أسئلة شائعة" : "Common questions"}
          </h2>
          <div className="space-y-6">
            {[
              {
                q: { en: "I already have a website. Why do I need this?", ar: "لدي موقع بالفعل. لماذا أحتاج هذا؟" },
                a: {
                  en: "Most business websites in the UAE were built before 2020 and aren't optimized for mobile or Google. We build pages that are built to convert — not just exist.",
                  ar: "معظم مواقع الشركات في الإمارات بُنيت قبل 2020 وليست محسّنة للجوال أو جوجل. نبني صفحات مصممة للتحويل — لا مجرد الوجود على الإنترنت.",
                },
              },
              {
                q: { en: "Do I need to write content myself?", ar: "هل أحتاج لكتابة المحتوى بنفسي؟" },
                a: {
                  en: "No. We write all the copy for you based on a short brief you fill in. Just send us your services and we handle the rest.",
                  ar: "لا. نكتب جميع النصوص بناءً على ملخص قصير تملؤه. أرسل لنا خدماتك ونتولى الباقي.",
                },
              },
              {
                q: { en: "Can I run ads to this page?", ar: "هل يمكنني تشغيل إعلانات لهذه الصفحة؟" },
                a: {
                  en: "Yes — that's exactly what Growth and Pro tiers are built for. Pixel setup is included so your ad spend is tracked from day 1.",
                  ar: "نعم — هذا بالضبط ما صُممت له خطتا النمو والمحترف. إعداد البيكسل مضمّن حتى يُتتبع إنفاقك الإعلاني من اليوم الأول.",
                },
              },
              {
                q: { en: "What happens after delivery?", ar: "ماذا يحدث بعد التسليم؟" },
                a: {
                  en: "You own the page fully. No monthly fees. Pro tier includes 30-day support. We're also available for future updates.",
                  ar: "تمتلك الصفحة بالكامل. لا رسوم شهرية. الخطة المحترفة تشمل دعم 30 يومًا. كما نحن متاحون للتحديثات المستقبلية.",
                },
              },
            ].map(({ q, a }) => (
              <div
                key={q.en}
                className="rounded-xl border border-primary/20 p-6 hover:border-primary/40 transition-colors duration-200"
              >
                <h3 className="font-semibold mb-2">{t(q)}</h3>
                <p className="text-muted-foreground text-sm">{t(a)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-primary/30 bg-primary/5 p-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {isArabic
                ? "جاهز للحصول على صفحة تُجلب عملاء؟"
                : "Ready for a page that actually brings customers?"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isArabic
                ? "احجز استشارة مجانية لمدة 15 دقيقة. نرى موقعك الحالي ونخبرك بالضبط ما يجب فعله."
                : "Book a free 15-minute call. We look at your current site and tell you exactly what needs fixing."}
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            >
              {isArabic ? "احجز الآن — مجانًا" : "Book Now — It's Free"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
