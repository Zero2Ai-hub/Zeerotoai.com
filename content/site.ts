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
    en: "We run your e-commerce store on autopilot.",
    ar: "ندير متجرك الإلكتروني بالكامل تلقائياً.",
  },
  meta: {
    title: "Zeerotoai — E-commerce Automation for UAE & GCC",
    description:
      "We automate your entire e-commerce operation — sourcing, listings, fulfillment, Amazon ads, TikTok content. UAE/GCC brands. Live in 2 weeks. You own the system.",
  },
  hero: {
    headline: {
      en: "Stop Running Your Store. Let AI Do It.",
      ar: "توقف عن إدارة متجرك. دع الذكاء الاصطناعي يفعل ذلك.",
    },
    headlineLine1: {
      en: "Stop Running Your Store.",
      ar: "توقف عن إدارة متجرك.",
    },
    headlineLine2: {
      en: "Let AI Do It.",
      ar: "دع الذكاء الاصطناعي يفعل ذلك.",
    },
    subheadline: {
      en: "UAE/GCC e-commerce brands — we automate sourcing, listings, fulfillment, ads, and content. You own the system. We build it in 2 weeks.",
      ar: "علامات التجارة الإلكترونية في الإمارات والخليج — نؤتمت المصادر والقوائم والتنفيذ والإعلانات والمحتوى.",
    },
    credibility: {
      en: "Trusted by e-commerce brands across UAE & GCC",
      ar: "موثوق به من علامات التجارة الإلكترونية في الإمارات والخليج",
    },
    badge: {
      en: "🛒 E-commerce Automation — UAE/GCC",
      ar: "🛒 أتمتة التجارة الإلكترونية — الإمارات والخليج",
    },
  },
  cta: {
    primary: {
      label: { en: "Automate My Store →", ar: "أتمت متجري →" },
      href: "/contact",
    },
    secondary: {
      label: { en: "See Real Results →", ar: "شاهد النتائج الحقيقية →" },
      href: "/portfolio",
    },
  },
  stats: [
    { value: "40+", label: { en: "Hours/week saved per client", ar: "ساعة/أسبوع توفير لكل عميل" } },
    { value: "2 weeks", label: { en: "Average deployment time", ar: "متوسط وقت النشر" } },
    { value: "10×", label: { en: "Catalog capacity increase", ar: "زيادة طاقة الكتالوج" } },
    { value: "0", label: { en: "Manual orders processed", ar: "طلبات يدوية معالجة" } },
  ],
  nav: [
    { slug: "/", en: "Home", ar: "الرئيسية" },
    { slug: "/services", en: "Services", ar: "الخدمات" },
    { slug: "/portfolio", en: "Results", ar: "النتائج" },
    { slug: "/pricing", en: "Pricing", ar: "التسعير" },
    { slug: "/about", en: "About", ar: "من نحن" },
    { slug: "/blog", en: "Blog", ar: "المدونة" },
    { slug: "/contact", en: "Contact", ar: "تواصل" },
  ],
  services,
  portfolio: projects,
  about: {
    mission: {
      en: "Zeerotoai started because we were building automation systems for our own e-commerce brand. We got so good at it that other brands wanted the same systems. Now we build them for you. We're not a consulting firm — we're operators who know what it takes to run a store at scale.",
      ar: "بدأت Zeerotoai لأننا كنا نبني أنظمة أتمتة لعلامتنا التجارية الخاصة في التجارة الإلكترونية. أصبحنا ماهرين جداً في ذلك لدرجة أن العلامات التجارية الأخرى أرادت نفس الأنظمة. الآن نبنيها لك. نحن لسنا شركة استشارات — نحن مشغّلون نعرف ما يتطلبه تشغيل متجر على نطاق واسع.",
    },
    approach: {
      title: {
        en: "How We Work",
        ar: "كيف نعمل",
      },
      steps: [
        {
          en: "Free audit — we map exactly what to automate first",
          ar: "تدقيق مجاني — نرسم بالضبط ما يجب أتمتته أولاً",
        },
        {
          en: "Design your automation stack — no black boxes",
          ar: "تصميم مجموعة الأتمتة الخاصة بك — بدون صناديق سوداء",
        },
        {
          en: "Build, test, and deploy in 2 weeks",
          ar: "البناء والاختبار والنشر في أسبوعين",
        },
        {
          en: "Hand over docs, walkthrough, you own everything",
          ar: "تسليم الوثائق والشرح، تملك كل شيء",
        },
      ],
    },
    tools: {
      title: {
        en: "The Stack",
        ar: "التقنيات",
      },
      list: ["WooCommerce", "Shopify", "CJ Dropshipping", "Amazon SP-API", "TikTok API", "n8n", "Veo 3.1", "Runway", "OpenClaw + MCP", "Supabase", "Claude + GPT-4o", "Vercel"],
    },
  },
  socials: {
    x: "https://x.com/ZeroToAI_",
    linkedin: "https://www.linkedin.com/in/zero2-ai-644136390/",
    youtube: "https://www.youtube.com/@Zero2Ai_Demos",
    tiktok: "https://www.tiktok.com/@zeerotoai",
  },
  footer: {
    tagline: {
      en: "Built for e-commerce brands that want to scale without the grind.",
      ar: "مبني لعلامات التجارة الإلكترونية التي تريد النمو بدون عناء.",
    },
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
