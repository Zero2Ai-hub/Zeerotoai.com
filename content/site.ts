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
    en: "We don't sell software. We build AI systems that replace it.",
    ar: "لا نبيع برمجيات. نبني أنظمة ذكاء اصطناعي تحل محلها.",
  },
  hero: {
    headline: {
      en: "Your Competitors Are Already Using AI. Are You?",
      ar: "منافسوك يستخدمون الذكاء الاصطناعي بالفعل. وأنت؟",
    },
    headlineLine1: {
      en: "Your Competitors Are Already",
      ar: "منافسوك يستخدمون",
    },
    headlineLine2: {
      en: "Using AI. Are You?",
      ar: "الذكاء الاصطناعي. وأنت؟",
    },
    subheadline: {
      en: "UAE SMBs pay AED 15,000+ yearly on SaaS tools that don't talk to each other. We replace that stack with one intelligent AI system — built for your business, owned by you.",
      ar: "الشركات الصغيرة في الإمارات تدفع أكثر من 15,000 درهم سنوياً على أدوات SaaS لا تتكامل. نستبدل ذلك بنظام ذكاء اصطناعي واحد — مبني لعملك، تملكه أنت.",
    },
    credibility: {
      en: "Trusted by e-commerce, service & consulting businesses across UAE & GCC",
      ar: "موثوق به من قبل شركات التجارة الإلكترونية والخدمات والاستشارات في الإمارات والخليج",
    },
    badge: {
      en: "AI Systems for UAE & GCC Businesses",
      ar: "أنظمة الذكاء الاصطناعي لشركات الإمارات والخليج",
    },
  },
  cta: {
    primary: {
      label: { en: "Book a Free Strategy Call", ar: "احجز مكالمة استراتيجية مجانية" },
      href: "/contact",
    },
    secondary: {
      label: { en: "See Case Studies", ar: "شاهد دراسات الحالة" },
      href: "/portfolio",
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
