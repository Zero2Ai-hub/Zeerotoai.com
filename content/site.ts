import { services } from "./services";
import { projects } from "./projects";

export type Lang = "en" | "ar";

export const site = {
  brand: {
    name: "Zeerotoai",
    domain: "https://www.zeerotoai.com",
    email: "founder@zeerotoai.com",
    whatsapp: "https://wa.me/971503385859",
  },
  tagline: {
    en: "We Run Your E-commerce Store On Autopilot.",
    ar: "لا نبيع برمجيات. نبني أنظمة ذكاء اصطناعي تحل محلها.",
  },
  hero: {
    headline: {
      en: "We Run Your E-commerce Store On Autopilot",
      ar: "ندير متجرك الإلكتروني بالكامل تلقائياً",
    },
    headlineLine1: {
      en: "We Run Your E-commerce",
      ar: "ندير متجرك الإلكتروني",
    },
    headlineLine2: {
      en: "Store On Autopilot",
      ar: "بالكامل تلقائياً",
    },
    subheadline: {
      en: "Sourcing. Listings. Fulfillment. Ads. Content. Built for UAE/GCC e-commerce brands — you own the system, we build it.",
      ar: "التوريد. القوائم. التنفيذ. الإعلانات. المحتوى. مبني لعلامات التجارة الإلكترونية في الإمارات والخليج — تملك النظام، نبنيه نحن.",
    },
    credibility: {
      en: "Trusted by e-commerce brands across UAE & GCC",
      ar: "موثوق به من علامات التجارة الإلكترونية في الإمارات والخليج",
    },
    badge: {
      en: "E-commerce Automation — UAE & GCC",
      ar: "أتمتة التجارة الإلكترونية — الإمارات والخليج",
    },
  },
  cta: {
    primary: {
      label: { en: "See How We Did It →", ar: "شاهد كيف فعلنا ذلك →" },
      href: "/contact",
    },
    secondary: {
      label: { en: "Book a Free Call", ar: "احجز مكالمة مجانية" },
      href: "/contact",
    },
  },
  nav: [
    { slug: "/", en: "Home", ar: "الرئيسية" },
    { slug: "/services", en: "Services", ar: "الخدمات" },
    { slug: "/portfolio", en: "Portfolio", ar: "الأعمال" },
    { slug: "/pricing", en: "Pricing", ar: "التسعير" },
    { slug: "/about", en: "About", ar: "من نحن" },
    { slug: "/faq", en: "FAQ", ar: "الأسئلة" },
    { slug: "/contact", en: "Contact", ar: "تواصل" },
  ],
  services,
  portfolio: projects,
  about: {
    mission: {
      en: "We believe every repetitive task is a cost centre waiting to be closed. Our mission is to build governed AI systems that free your team from busywork — so you can compete on strategy, not spreadsheets.",
      ar: "نحن نؤمن بأن كل مهمة متكررة هي تكلفة تنتظر الإغلاق. مهمتنا بناء أنظمة ذكاء اصطناعي محكومة تحرر فريقك.",
    },
    approach: {
      title: {
        en: "How We Work",
        ar: "كيف نعمل",
      },
      steps: [
        {
          en: "Audit your current tools, costs, and bottlenecks",
          ar: "مراجعة أدواتك الحالية وتكاليفك ونقاط الاختناق",
        },
        {
          en: "Design a governed AI system blueprint — no black boxes",
          ar: "تصميم مخطط نظام ذكاء اصطناعي محكوم — بدون صناديق سوداء",
        },
        {
          en: "Build, test, and deploy with full audit trails",
          ar: "البناء والاختبار والنشر مع سجلات مراجعة كاملة",
        },
        {
          en: "Hand off docs, train your team, you own the system",
          ar: "تسليم الوثائق وتدريب فريقك وامتلاك النظام",
        },
      ],
    },
    tools: {
      title: {
        en: "Our Infrastructure",
        ar: "بنيتنا التحتية",
      },
      list: ["OpenClaw", "MCP Protocol", "Claude / GPT-4o / Gemini", "n8n", "Vercel", "Supabase", "Voiceflow", "Vapi", "Make", "Airtable"],
    },
  },
  socials: {
    x: "https://x.com/ZeroToAI_",
    linkedin: "https://www.linkedin.com/in/zero2-ai-644136390/",
    youtube: "https://www.youtube.com/@Zero2Ai_Demos",
  },
  footer: {
    copyright: {
      en: "© 2025 Zeerotoai. All rights reserved.",
      ar: "© 2025 Zeerotoai. جميع الحقوق محفوظة.",
    },
    quickLinks: {
      title: { en: "Quick Links", ar: "روابط سريعة" },
    },
    legal: {
      title: { en: "Legal", ar: "قانوني" },
      privacy: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
      terms: { en: "Terms of Service", ar: "شروط الخدمة" },
    },
  },
} as const;
