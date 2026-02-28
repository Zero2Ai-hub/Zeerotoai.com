"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ChevronDown, 
  MessageCircle, 
  Clock,
  DollarSign,
  Zap,
  Shield,
  Code,
  Users,
  ArrowRight
} from "lucide-react";

interface FaqClientProps {
  isArabic: boolean;
}

export function FaqClient({ isArabic }: FaqClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Improved scroll tracking - activates when section header is at viewport center
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const categoryElements = containerRef.current.querySelectorAll('[data-category]');
      // Activate when section header reaches viewport center (50%)
      const triggerPoint = window.scrollY + window.innerHeight * 0.5;
      
      let newActiveCategory = 0;
      
      categoryElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        
        // Only activate if element's top has passed the trigger point
        if (elementTop <= triggerPoint) {
          newActiveCategory = index;
        }
      });
      
      setActiveCategory(newActiveCategory);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqCategories = [
    {
      id: "general-process",
      category: { en: "General & Process", ar: "عام والعملية" },
      icon: MessageCircle,
      faqs: [
        {
          question: { 
            en: "What exactly do you automate?", 
            ar: "ماذا تقوم بأتمتة بالضبط؟" 
          },
          answer: { 
            en: "We automate repetitive business tasks using AI and no-code tools. This includes lead generation, email outreach, social media posting, chatbots, content creation, data sync between tools (Notion, Airtable, CRM), and custom workflows tailored to your business. If it's manual and repetitive, we can probably automate it.",
            ar: "نقوم بأتمتة المهام التجارية المتكررة باستخدام الذكاء الاصطناعي وأدوات بدون كود. يشمل ذلك توليد العملاء المحتملين، والتواصل عبر البريد الإلكتروني، والنشر على وسائل التواصل الاجتماعي، وروبوتات الدردشة، وإنشاء المحتوى، ومزامنة البيانات بين الأدوات (Notion، Airtable، CRM)، وسير العمل المخصص لعملك. إذا كان يدويًا ومتكررًا، يمكننا على الأرجح أتمتته."
          },
        },
        {
          question: { 
            en: "What's your typical process?", 
            ar: "ما هي عمليتك النموذجية؟" 
          },
          answer: { 
            en: "1) Discovery Call: We analyze your workflow and identify automation opportunities.\n\n2) Custom Proposal: We design a solution with clear timeline and pricing.\n\n3) Build & Test: We develop the automation and test thoroughly.\n\n4) Handoff & Training: We deliver documentation and train your team.\n\n5) Support: We provide ongoing support to ensure everything runs smoothly.",
            ar: "1) مكالمة اكتشاف: نحلل سير عملك ونحدد فرص الأتمتة.\n\n2) اقتراح مخصص: نصمم حلًا مع جدول زمني واضح وتسعير.\n\n3) البناء والاختبار: نطور الأتمتة ونختبر بدقة.\n\n4) التسليم والتدريب: نقدم الوثائق ونقوم بتدريب فريقك.\n\n5) الدعم: نقدم دعمًا مستمرًا لضمان سير كل شيء بسلاسة."
          },
        },
        {
          question: { 
            en: "Do I need technical knowledge?", 
            ar: "هل أحتاج إلى معرفة تقنية؟" 
          },
          answer: { 
            en: "Not at all! That's the whole point. We handle all the technical work and deliver a solution that's easy to use. We provide clear documentation and training so anyone on your team can manage it. You focus on your business, we handle the automation.",
            ar: "ليس على الإطلاق! هذه هي الفكرة بأكملها. نحن نتعامل مع كل العمل التقني ونقدم حلاً سهل الاستخدام. نقدم وثائق واضحة وتدريبًا حتى يتمكن أي شخص في فريقك من إدارته. أنت تركز على عملك، نحن نتعامل مع الأتمتة."
          },
        },
        {
          question: { 
            en: "What tools do you use?", 
            ar: "ما الأدوات التي تستخدمها؟" 
          },
          answer: { 
            en: "We primarily use n8n, Make.com, Zapier for workflow automation; Voiceflow and Vapi for AI chatbots; OpenAI API, Claude, and other LLMs for AI features; Airtable, Notion, Supabase for data management; and modern web frameworks like Next.js for custom applications. We choose the best tool for your specific needs.",
            ar: "نستخدم بشكل أساسي n8n و Make.com و Zapier لأتمتة سير العمل؛ Voiceflow و Vapi لروبوتات الدردشة بالذكاء الاصطناعي؛ OpenAI API و Claude ونماذج اللغة الكبيرة الأخرى لميزات الذكاء الاصطناعي؛ Airtable و Notion و Supabase لإدارة البيانات؛ وأطر الويب الحديثة مثل Next.js للتطبيقات المخصصة. نختار أفضل أداة لاحتياجاتك المحددة."
          },
        },
      ],
    },
    {
      id: "pricing-investment",
      category: { en: "Pricing & Investment", ar: "التسعير والاستثمار" },
      icon: DollarSign,
      faqs: [
        {
          question: { 
            en: "How much does automation cost?", 
            ar: "كم تكلفة الأتمتة؟" 
          },
          answer: { 
            en: "Our projects typically range from $500 for simple single-workflow automations to $5,000+ for enterprise solutions. Most clients invest $2,000-$5,000 for comprehensive automation that saves 10-20 hours per week. Check our Pricing page for detailed breakdown by service type.",
            ar: "تتراوح مشاريعنا عادةً من 500 دولار لأتمتة سير عمل واحد بسيط إلى 5,000 دولار + للحلول على مستوى المؤسسات. يستثمر معظم العملاء 2,000-5,000 دولار للأتمتة الشاملة التي توفر 10-20 ساعة في الأسبوع. تحقق من صفحة التسعير الخاصة بنا للحصول على تفصيل مفصل حسب نوع الخدمة."
          },
        },
        {
          question: { 
            en: "What's the ROI on automation?", 
            ar: "ما هو عائد الاستثمار على الأتمتة؟" 
          },
          answer: { 
            en: "Most clients see ROI within 1-3 months. For example, a $3,000 automation that saves 15 hours/week equals $780/week saved (at $50/hour rate), or $3,120/month. That's a 100% ROI in the first month alone, not counting the opportunity cost of focusing on higher-value work.",
            ar: "يرى معظم العملاء عائد الاستثمار خلال 1-3 أشهر. على سبيل المثال، أتمتة بقيمة 3,000 دولار توفر 15 ساعة / أسبوع تساوي 780 دولار / أسبوع محفوظ (بمعدل 50 دولار / ساعة)، أو 3,120 دولار / شهر. هذا عائد استثمار بنسبة 100٪ في الشهر الأول وحده، دون احتساب تكلفة الفرصة البديلة للتركيز على العمل ذي القيمة الأعلى."
          },
        },
        {
          question: { 
            en: "Do you offer payment plans?", 
            ar: "هل تقدمون خطط دفع؟" 
          },
          answer: { 
            en: "Yes! For projects over $2,000, we offer 50% upfront and 50% on delivery. For enterprise clients ($5,000+), we can discuss milestone-based payments. We want automation to be accessible, so we're flexible on payment structure for the right projects.",
            ar: "نعم! للمشاريع التي تزيد عن 2,000 دولار، نقدم 50٪ مقدمًا و 50٪ عند التسليم. لعملاء المؤسسات (5,000 دولار +)، يمكننا مناقشة المدفوعات القائمة على المعالم. نريد أن تكون الأتمتة متاحة، لذلك نحن مرنون بشأن هيكل الدفع للمشاريع المناسبة."
          },
        },
        {
          question: { 
            en: "Are there ongoing costs?", 
            ar: "هل هناك تكاليف مستمرة؟" 
          },
          answer: { 
            en: "You'll need to cover subscription costs for any tools we use (e.g., Make.com at $10-30/month, OpenAI API usage, etc.). We're transparent about these upfront. Optional: You can add ongoing maintenance ($200-500/month) if you want us to monitor, optimize, and update your automations as your business evolves.",
            ar: "ستحتاج إلى تغطية تكاليف الاشتراك في أي أدوات نستخدمها (على سبيل المثال، Make.com بسعر 10-30 دولار / شهر، استخدام OpenAI API، وما إلى ذلك). نحن شفافون بشأن هذه التكاليف مقدمًا. اختياري: يمكنك إضافة صيانة مستمرة (200-500 دولار / شهر) إذا كنت تريد منا مراقبة وتحسين وتحديث أتمتتك مع تطور عملك."
          },
        },
      ],
    },
    {
      id: "timeline-delivery",
      category: { en: "Timeline & Delivery", ar: "الجدول الزمني والتسليم" },
      icon: Clock,
      faqs: [
        {
          question: { 
            en: "How fast can you deliver?", 
            ar: "ما مدى سرعة التسليم؟" 
          },
          answer: { 
            en: "Simple automations (1-2 workflows): 48-72 hours. Standard projects (multi-step workflows): 5-7 days. Complex/enterprise solutions: 2-3 weeks. We're fast because we use AI-powered development tools and have pre-built templates for common use cases. Rush delivery available for urgent needs.",
            ar: "أتمتة بسيطة (1-2 سير عمل): 48-72 ساعة. مشاريع قياسية (سير عمل متعدد الخطوات): 5-7 أيام. حلول معقدة / على مستوى المؤسسات: 2-3 أسابيع. نحن سريعون لأننا نستخدم أدوات تطوير مدعومة بالذكاء الاصطناعي ولدينا قوالب جاهزة لحالات الاستخدام الشائعة. تسليم سريع متاح للاحتياجات العاجلة."
          },
        },
        {
          question: { 
            en: "What if I need changes after delivery?", 
            ar: "ماذا لو كنت بحاجة إلى تغييرات بعد التسليم؟" 
          },
          answer: { 
            en: "All projects include 1-4 weeks of support (depending on tier) for bug fixes and minor adjustments. After that, changes are billed hourly ($150/hour) or you can add a monthly maintenance package. We want your automation to work perfectly, so we're always available to help.",
            ar: "تتضمن جميع المشاريع 1-4 أسابيع من الدعم (حسب المستوى) لإصلاحات الأخطاء والتعديلات الطفيفة. بعد ذلك، يتم إصدار فواتير التغييرات بالساعة (150 دولار / ساعة) أو يمكنك إضافة حزمة صيانة شهرية. نريد أن تعمل أتمتتك بشكل مثالي، لذلك نحن متاحون دائمًا للمساعدة."
          },
        },
        {
          question: { 
            en: "Can you handle urgent projects?", 
            ar: "هل يمكنك التعامل مع المشاريع العاجلة؟" 
          },
          answer: { 
            en: "Absolutely. For urgent needs, we offer priority delivery (24-48 hour turnaround for simple projects). There's a 50% rush fee, but we'll get you running fast. Contact us on WhatsApp for immediate response on urgent automation needs.",
            ar: "بالتأكيد. للاحتياجات العاجلة، نقدم تسليمًا ذا أولوية (تسليم خلال 24-48 ساعة للمشاريع البسيطة). هناك رسوم تعجيل بنسبة 50٪، ولكننا سنجعلك تعمل بسرعة. اتصل بنا على WhatsApp للحصول على رد فوري بشأن احتياجات الأتمتة العاجلة."
          },
        },
      ],
    },
    {
      id: "technical-security",
      category: { en: "Technical & Security", ar: "التقنية والأمان" },
      icon: Shield,
      faqs: [
        {
          question: { 
            en: "Is my data secure?", 
            ar: "هل بياناتي آمنة؟" 
          },
          answer: { 
            en: "Yes. We follow industry best practices: OAuth authentication (never store passwords), encrypted API keys, GDPR-compliant data handling, and secure webhook connections. For sensitive data, we can implement additional security layers or use your own infrastructure. We sign NDAs if required.",
            ar: "نعم. نتبع أفضل ممارسات الصناعة: مصادقة OAuth (عدم تخزين كلمات المرور أبدًا)، ومفاتيح API مشفرة، ومعالجة البيانات المتوافقة مع GDPR، واتصالات webhook آمنة. للبيانات الحساسة، يمكننا تنفيذ طبقات أمان إضافية أو استخدام البنية التحتية الخاصة بك. نوقع على اتفاقيات عدم الإفشاء إذا لزم الأمر."
          },
        },
        {
          question: { 
            en: "What if an automation breaks?", 
            ar: "ماذا لو تعطلت الأتمتة؟" 
          },
          answer: { 
            en: "We build robust error handling and monitoring into every workflow. You'll get notifications if something fails. During your support period, we fix issues for free. After that, you can either fix it yourself (we provide documentation) or contact us for paid support. Most automations run for months without issues.",
            ar: "نبني معالجة أخطاء قوية ومراقبة في كل سير عمل. ستحصل على إشعارات إذا فشل شيء ما. خلال فترة الدعم الخاصة بك، نصلح المشكلات مجانًا. بعد ذلك، يمكنك إما إصلاحه بنفسك (نقدم الوثائق) أو الاتصال بنا للحصول على دعم مدفوع. تعمل معظم الأتمتة لأشهر دون مشاكل."
          },
        },
        {
          question: { 
            en: "Who owns the automation?", 
            ar: "من يملك الأتمتة؟" 
          },
          answer: { 
            en: "You do! You own all the code, workflows, and intellectual property. We provide full access to your automation accounts, documentation, and source code. You can modify, duplicate, or hire someone else to work on it. We're building for your success, not vendor lock-in.",
            ar: "أنت تملكها! أنت تملك كل الكود وسير العمل والملكية الفكرية. نقدم وصولاً كاملاً إلى حسابات الأتمتة الخاصة بك والوثائق والكود المصدري. يمكنك التعديل أو النسخ أو توظيف شخص آخر للعمل عليه. نحن نبني لنجاحك، وليس لحبسك مع بائع معين."
          },
        },
      ],
    },
    {
      id: "getting-started",
      category: { en: "Getting Started", ar: "البدء" },
      icon: Zap,
      faqs: [
        {
          question: { 
            en: "How do I get started?", 
            ar: "كيف أبدأ؟" 
          },
          answer: { 
            en: "1) Book a free 30-minute consultation (via our website or WhatsApp).\n\n2) We'll analyze your workflow and recommend solutions.\n\n3) You'll receive a custom proposal with timeline and pricing.\n\n4) Approve the proposal and we start building.\n\n5) Launch and celebrate your new free time!",
            ar: "1) احجز استشارة مجانية مدتها 30 دقيقة (عبر موقعنا أو WhatsApp).\n\n2) سنحلل سير عملك ونوصي بالحلول.\n\n3) ستتلقى اقتراحًا مخصصًا مع جدول زمني وتسعير.\n\n4) وافق على الاقتراح ونبدأ البناء.\n\n5) أطلق واحتفل بوقتك الحر الجديد!"
          },
        },
        {
          question: { 
            en: "What information do you need from me?", 
            ar: "ما المعلومات التي تحتاجها مني؟" 
          },
          answer: { 
            en: "Just a description of your current manual process and your goals. For example: 'I manually copy leads from LinkedIn to Airtable and want it automated' or 'I need a chatbot that answers customer questions 24/7.' We'll figure out the technical details - you just explain what you need.",
            ar: "مجرد وصف لعمليتك اليدوية الحالية وأهدافك. على سبيل المثال: 'أنا أنسخ يدويًا العملاء المحتملين من LinkedIn إلى Airtable وأريد أتمتتها' أو 'أحتاج إلى روبوت دردشة يجيب على أسئلة العملاء على مدار الساعة.' سنكتشف التفاصيل التقنية - أنت فقط اشرح ما تحتاجه."
          },
        },
        {
          question: { 
            en: "Do you work with businesses outside the UAE?", 
            ar: "هل تعمل مع شركات خارج الإمارات؟" 
          },
          answer: { 
            en: "Yes! We work with clients globally. All communication happens online (calls, Slack, WhatsApp), and we deliver everything digitally. We've automated workflows for clients in Europe, Asia, and North America. Time zones are never an issue - we're flexible.",
            ar: "نعم! نعمل مع عملاء على مستوى العالم. يحدث كل التواصل عبر الإنترنت (المكالمات، Slack، WhatsApp)، ونقدم كل شيء رقميًا. لقد قمنا بأتمتة سير العمل للعملاء في أوروبا وآسيا وأمريكا الشمالية. المناطق الزمنية ليست مشكلة أبدًا - نحن مرنون."
          },
        },
      ],
    },
  ];

  // Common myths from playbook
  const commonMyths = [
    {
      myth: {
        en: "AI automation is only for big companies with huge budgets",
        ar: "أتمتة الذكاء الاصطناعي فقط للشركات الكبيرة ذات الميزانيات الضخمة",
      },
      truth: {
        en: "Small businesses benefit the most because every hour saved has bigger impact",
        ar: "الشركات الصغيرة تستفيد أكثر لأن كل ساعة يتم توفيرها لها تأثير أكبر",
      },
    },
    {
      myth: {
        en: "I'll need to hire a programmer and spend months setting it up",
        ar: "سأحتاج إلى توظيف مبرمج وقضاء أشهر في الإعداد",
      },
      truth: {
        en: "With the right partner (like Zeerotoai), you can have working automation in days, not months",
        ar: "مع الشريك المناسب (مثل Zeerotoai)، يمكن أن يكون لديك أتمتة عاملة في أيام، وليس أشهر",
      },
    },
    {
      myth: {
        en: "AI will replace my team",
        ar: "سيحل الذكاء الاصطناعي محل فريقي",
      },
      truth: {
        en: "AI handles boring tasks so your team can do more valuable, creative work",
        ar: "يتعامل الذكاء الاصطناعي مع المهام الممل حتى يتمكن فريقك من القيام بعمل أكثر قيمة وإبداعًا",
      },
    },
    {
      myth: {
        en: "It's too complicated for my business",
        ar: "إنه معقد للغاية بالنسبة لعملي",
      },
      truth: {
        en: "If you use email, spreadsheets, or chat apps, you can benefit from automation",
        ar: "إذا كنت تستخدم البريد الإلكتروني أو جداول البيانات أو تطبيقات الدردشة، يمكنك الاستفادة من الأتمتة",
      },
    },
  ];

  return (
    <div className="relative z-10 py-16 px-4">
      {/* Circuit Progress Line - FIXED like services page */}
      <motion.div
        initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`hidden xl:block fixed ${isArabic ? 'right-20' : 'left-20'} top-1/3 z-40`}
      >
        <div className="h-[50vh] relative w-12">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          
          {/* Animated glow - enhanced */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-2 h-20"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgb(0 217 255 / 0.8), rgb(0 217 255 / 0.6), rgb(0 217 255 / 0.8), transparent)',
              filter: 'blur(6px)',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
            }}
            animate={{
              top: `${(activeCategory / (faqCategories.length - 1)) * 85}%`,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Nodes */}
          <div className="h-full flex flex-col justify-between py-4">
            {faqCategories.map((cat, idx) => {
              const Icon = cat.icon;
              const active = idx === activeCategory;
              return (
                <Link 
                  key={idx} 
                  href={`#${cat.id}`}
                  className="relative flex items-center justify-center group cursor-pointer"
                >
                  {/* Pulsating glow ring for active node */}
                  {active && (
                    <motion.div
                      className="absolute w-10 h-10 rounded-full border-2 border-primary/40"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                  
                  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 backdrop-blur-sm relative z-10 ${
                    active 
                      ? 'border-primary bg-primary/20 scale-110 shadow-lg shadow-primary/60' 
                      : 'border-primary/20 bg-card/30 group-hover:border-primary/40 group-hover:bg-card/50 group-hover:shadow-md group-hover:shadow-primary/30'
                  }`}>
                    <Icon className={`w-4 h-4 transition-colors ${active ? 'text-primary drop-shadow-lg' : 'text-muted-foreground/60 group-hover:text-primary/80'}`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>
      
      <div ref={containerRef} className="container mx-auto max-w-4xl">
        {/* Common Myths Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "دعونا نبدد بعض الخرافات" : "Let's Bust Some Myths"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {isArabic 
                ? "أكبر المفاهيم الخاطئة حول أتمتة الذكاء الاصطناعي"
                : "The biggest misconceptions about AI automation"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonMyths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-2 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
                  <CardContent className="p-6 relative z-10">
                    {/* Myth */}
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 mb-3">
                        <span className="text-red-500 font-bold text-sm">❌ MYTH</span>
                      </div>
                      <p className="font-semibold text-lg text-foreground/90">
                        &ldquo;{isArabic ? item.myth.ar : item.myth.en}&rdquo;
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-4" />

                    {/* Truth */}
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-3">
                        <span className="text-primary font-bold text-sm">✓ TRUTH</span>
                      </div>
                      <p className="text-foreground font-semibold leading-relaxed">
                        {isArabic ? item.truth.ar : item.truth.en}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Separator */}
          <div className="mt-16 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </motion.div>

        {faqCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <motion.div
              key={categoryIndex}
              id={category.id}
              data-category={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12 scroll-mt-24"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-black">
                  {isArabic ? category.category.ar : category.category.en}
                </h2>
              </div>

              {/* FAQs */}
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <Card
                      key={faqIndex}
                      className="border-2 border-primary/20 bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-all overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                      >
                        <h3 className="font-bold text-lg flex-1 group-hover:text-primary transition-colors">
                          {isArabic ? faq.question.ar : faq.question.en}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 mt-1 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CardContent className="px-6 pb-6 pt-0">
                              <div className="pt-4 border-t border-primary/10">
                                <div className="text-muted-foreground leading-relaxed space-y-4">
                                  {(isArabic ? faq.answer.ar : faq.answer.en)
                                    .split('\n\n')
                                    .map((paragraph, idx) => (
                                      <p key={idx}>{paragraph}</p>
                                    ))}
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
          );
        })}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/20 via-primary/10 to-card/80 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 circuit-pattern opacity-10" />
            <CardContent className="p-12 relative z-10 text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-black mb-4">
                {isArabic ? "هل لا تزال لديك أسئلة؟" : "Still Have Questions?"}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {isArabic
                  ? "نحن هنا للمساعدة! احجز مكالمة مجانية أو أرسل لنا رسالة على WhatsApp للحصول على رد فوري"
                  : "We're here to help! Book a free call or message us on WhatsApp for instant response"}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/40"
                >
                  <Link href="/signup" className="flex items-center gap-2">
                    {isArabic ? "احجز استشارة مجانية" : "Book Free Consultation"}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-primary/40 hover:border-primary hover:bg-primary/10"
                >
                  <a 
                    href={`https://wa.me/971503385859`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {isArabic ? "راسلنا على WhatsApp" : "Message on WhatsApp"}
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

