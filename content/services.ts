export const services = [
  {
    key: "ai-automation",
    id: "ai-automation",
    icon: "Workflow",
    title: {
      en: "AI Automation Systems",
      ar: "أنظمة الأتمتة بالذكاء الاصطناعي",
    },
    description: {
      en: "Transform repetitive tasks into intelligent workflows. From Telegram bots and Notion integrations to enterprise-grade automation systems tailored to your unique business processes.",
      ar: "حوّل المهام المتكررة إلى سير عمل ذكي. من روبوتات تيليجرام وتكاملات نوشن إلى أنظمة أتمتة على مستوى المؤسسات مصممة لعمليات عملك الفريدة.",
    },
    bullets: [
      "Simple Telegram bots & Notion sync",
      "Complex multi-step workflow orchestration",
      "Custom automation tailored to your needs"
    ],
    tags: ["n8n", "Make", "Telegram", "Notion"]
  },
  {
    key: "lead-generation",
    id: "lead-generation",
    icon: "Target",
    title: {
      en: "Automated Lead Generation + Outreach",
      ar: "توليد العملاء المحتملين + التواصل الآلي",
    },
    description: {
      en: "Capture thousands of qualified leads with a few clicks. Find verified emails, craft AI-personalized messages, and launch mass outreach campaigns that actually convert.",
      ar: "التقط آلاف العملاء المحتملين المؤهلين ببضع نقرات. اعثر على رسائل بريد إلكتروني موثقة، وصمم رسائل مخصصة بالذكاء الاصطناعي، وأطلق حملات تواصل جماعية تحقق النتائج بالفعل.",
    },
    bullets: [
      "Thousands of leads captured in few clicks",
      "Verified email finding & enrichment",
      "Mass personalized outreach campaigns"
    ],
    tags: ["Phantombuster", "Instantly", "Apollo", "OpenAI"]
  },
  {
    key: "ai-websites",
    id: "ai-websites",
    icon: "Code",
    title: {
      en: "AI Generated Websites & SaaS",
      ar: "مواقع ويب وSaaS تم إنشاؤها بالذكاء الاصطناعي",
    },
    description: {
      en: "Build production-ready websites and SaaS platforms in hours, not weeks. Leverage cutting-edge AI tools like Cursor, Bolt.ai, and vibe coding to go from idea to deployed product at lightning speed.",
      ar: "قم ببناء مواقع ومنصات SaaS جاهزة للإنتاج في ساعات، وليس أسابيع. استفد من أدوات الذكاء الاصطناعي المتطورة مثل Cursor و Bolt.ai و vibe coding للانتقال من الفكرة إلى المنتج المنشور بسرعة البرق.",
    },
    bullets: [
      "Full-stack web apps with AI-powered coding",
      "Rapid prototyping with Bolt.ai & Cursor",
      "Production-ready SaaS platforms in days"
    ],
    tags: ["Cursor", "Bolt.ai", "Next.js", "Vibe Coding"]
  },
  {
    key: "ai-support",
    id: "ai-support",
    icon: "Headphones",
    title: {
      en: "AI Customer Support Agents",
      ar: "وكلاء دعم العملاء بالذكاء الاصطناعي",
    },
    description: {
      en: "Deploy 24/7 multilingual AI agents that chat, call, and solve customer queries instantly. Capture leads, book appointments, and provide exceptional support without hiring more staff.",
      ar: "انشر وكلاء ذكاء اصطناعي متعددي اللغات يعملون على مدار الساعة للدردشة والمكالمات وحل استفسارات العملاء فورًا. التقط العملاء المحتملين واحجز المواعيد وقدم دعمًا استثنائيًا دون توظيف المزيد من الموظفين.",
    },
    bullets: [
      "Multilingual chat & phone callers",
      "Query solving & lead capture",
      "Automated appointment setting"
    ],
    tags: ["Voiceflow", "Vapi", "RAG", "WhatsApp"]
  },
  {
    key: "social-media",
    id: "social-media",
    icon: "Share2",
    title: {
      en: "AI x Social Media",
      ar: "الذكاء الاصطناعي × وسائل التواصل",
    },
    description: {
      en: "Put your social media on autopilot. Generate stunning videos, schedule posts automatically, manage DMs at scale, and run intelligent outreach, all powered by AI.",
      ar: "ضع وسائل التواصل الاجتماعي الخاصة بك على الطيار الآلي. أنشئ مقاطع فيديو مذهلة، وجدول المنشورات تلقائيًا، وأدر الرسائل المباشرة على نطاق واسع، ونفذ التواصل الذكي - كل ذلك مدعوم بالذكاء الاصطناعي.",
    },
    bullets: [
      "Automated video generation & posting",
      "Intelligent DM management",
      "AI-powered social outreach campaigns"
    ],
    tags: ["Runway", "Veo", "Buffer", "n8n"]
  },
  {
    key: "ecommerce",
    id: "ecommerce",
    icon: "ShoppingCart",
    title: {
      en: "AI x E-commerce",
      ar: "الذكاء الاصطناعي × التجارة الإلكترونية",
    },
    description: {
      en: "Supercharge your online store with AI. From generating compelling product descriptions to automated optimization reports and hands-free PPC campaign management.",
      ar: "عزز متجرك الإلكتروني بالذكاء الاصطناعي. من إنشاء أوصاف منتجات مقنعة إلى تقارير التحسين الآلي وإدارة حملات PPC دون تدخل يدوي.",
    },
    bullets: [
      "AI-generated product descriptions",
      "Automated optimization reports",
      "Intelligent PPC campaign management"
    ],
    tags: ["OpenAI", "Google Ads", "Shopify", "Analytics"]
  }
];

export type Service = (typeof services)[number];


