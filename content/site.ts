import { services } from "./services";
import { projects } from "./projects";

export type Lang = "en" | "ar";

export const site = {
  brand: {
    name: "Zero2AI",
    domain: "https://www.zero2ai.com",
    email: "founder@zeerotoai.com",
    whatsapp: "https://wa.me/971503385859",
  },
  tagline: {
    en: "Build clever automations Ship faster",
    ar: "ابنِ أتمتة ذكية وانطلق بسرعة",
  },
  hero: {
    headline: {
      en: "Build Clever Automations Ship Faster",
      ar: "ابنِ أتمتة ذكية وانطلق بسرعة",
    },
    headlineLine1: {
      en: "Build Clever Automations",
      ar: "ابنِ أتمتة ذكية",
    },
    headlineLine2: {
      en: "Ship Faster",
      ar: "وانطلق بسرعة",
    },
    subheadline: {
      en: "Save 15+ hours every week by automating repetitive tasks. Launch AI-powered workflows in 48 hours, not months",
      ar: "وفر 15+ ساعة كل أسبوع من خلال أتمتة المهام المتكررة. أطلق سير عمل مدعوم بالذكاء الاصطناعي في 48 ساعة، وليس أشهر",
    },
    credibility: {
      en: "Trusted by teams building with n8n, Voiceflow, Cursor, Runway AI, Make & more",
      ar: "موثوق به من قبل الفرق التي تبني باستخدام n8n و Voiceflow و Cursor و Runway AI و Make والمزيد",
    },
  },
  cta: {
    primary: {
      label: { en: "Book a Free Call", ar: "احجز مكالمة مجانية" },
      href: "/signup",
    },
    secondary: {
      label: { en: "See Portfolio", ar: "شاهد الأعمال" },
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
      en: "We believe every repetitive task is a problem waiting to be solved Our mission is to build intelligent automations that free up your time so you can focus on what truly matters: growth, creativity, and impact",
      ar: "نحن نؤمن بأن كل مهمة متكررة هي مشكلة تنتظر الحل مهمتنا هي بناء أتمتة ذكية تحرر وقتك حتى تتمكن من التركيز على ما يهم حقًا: النمو والإبداع والتأثير",
    },
    approach: {
      title: {
        en: "Our Approach",
        ar: "نهجنا",
      },
      steps: [
        {
          en: "Understand your bottlenecks and goals",
          ar: "فهم الاختناقات والأهداف الخاصة بك",
        },
        {
          en: "Design a scalable automation blueprint",
          ar: "تصميم مخطط أتمتة قابل للتوسع",
        },
        {
          en: "Build, test, and deploy with zero downtime",
          ar: "البناء والاختبار والنشر بدون توقف",
        },
        {
          en: "Train your team and hand off docs",
          ar: "تدريب فريقك وتسليم الوثائق",
        },
      ],
    },
    tools: {
      title: {
        en: "Tools We Master",
        ar: "الأدوات التي نتقنها",
      },
      list: ["n8n", "Make", "Voiceflow", "Cursor AI", "Runway AI", "Zapier", "OpenAI API", "Airtable", "Supabase", "FFmpeg"],
    },
  },
  socials: {
    x: "https://x.com/ZeroToAI_",
    linkedin: "https://www.linkedin.com/in/zero2-ai-644136390/",
    youtube: "https://www.youtube.com/@Zero2Ai_Demos",
  },
  footer: {
    copyright: {
      en: "© 2025 Zero2AI All rights reserved",
      ar: "© 2025 Zero2AI جميع الحقوق محفوظة",
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

