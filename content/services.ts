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
      en: "Stop paying people to do what machines should. We map your highest-cost manual processes and replace them with intelligent, self-running workflows — connected across your entire tool stack.",
      ar: "توقف عن دفع رواتب للأشخاص لأداء ما يجب أن تقوم به الآلات. نرسم عملياتك اليدوية الأكثر تكلفة ونستبدلها بسير عمل ذكي يعمل تلقائياً عبر جميع أدواتك.",
    },
    bullets: [
      "Cross-platform workflow orchestration (n8n, Make)",
      "AI decision layers that escalate only when needed",
      "Full audit trail — every action logged and reviewable"
    ],
    tags: ["n8n", "Make", "OpenAI", "Supabase"]
  },
  {
    key: "lead-generation",
    id: "lead-generation",
    icon: "Target",
    title: {
      en: "AI Lead Generation & Outreach",
      ar: "توليد العملاء المحتملين والتواصل بالذكاء الاصطناعي",
    },
    description: {
      en: "Your sales team should be closing, not scraping. We build pipelines that find verified decision-makers, craft hyper-personalized outreach, and book meetings on autopilot — at a scale no human team can match.",
      ar: "فريق مبيعاتك يجب أن يُغلق الصفقات لا يجمع البيانات. نبني خطوط أنابيب تجد صانعي القرار المُتحققين وتصنع تواصلاً مخصصاً وتحجز اجتماعات تلقائياً.",
    },
    bullets: [
      "Verified B2B contact sourcing at scale",
      "AI-personalized sequences that feel human",
      "Auto-qualified leads delivered to your CRM"
    ],
    tags: ["Phantombuster", "Instantly", "Apollo", "OpenAI"]
  },
  {
    key: "ai-websites",
    id: "ai-websites",
    icon: "Code",
    title: {
      en: "AI-Powered Websites & SaaS",
      ar: "مواقع ويب وSaaS مدعومة بالذكاء الاصطناعي",
    },
    description: {
      en: "Ship a production-ready product in weeks, not quarters. We build fast, SEO-optimised web apps and SaaS platforms using AI-augmented engineering — so you get the quality of a 6-month build in a fraction of the time.",
      ar: "أطلق منتجاً جاهزاً للإنتاج في أسابيع لا أشهر. نبني تطبيقات ويب سريعة ومحسّنة لمحركات البحث ومنصات SaaS باستخدام الهندسة المعززة بالذكاء الاصطناعي.",
    },
    bullets: [
      "Full-stack Next.js + Supabase production builds",
      "SEO-first architecture from day one",
      "Integrated AI features (chat, search, recommendations)"
    ],
    tags: ["Next.js", "Supabase", "Vercel", "TypeScript"]
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
      en: "Handle 80% of support queries without hiring a single extra person. Our AI agents resolve, escalate, and document — in Arabic and English — 24/7 across WhatsApp, chat, and phone.",
      ar: "تعامل مع 80% من استفسارات الدعم بدون توظيف شخص إضافي واحد. وكلاؤنا يحلون ويصعّدون ويوثّقون — عربياً وإنجليزياً — على مدار الساعة.",
    },
    bullets: [
      "Arabic + English bilingual by default",
      "WhatsApp, web chat, and voice channels",
      "Smart escalation — AI handles it, humans close it"
    ],
    tags: ["Voiceflow", "Vapi", "WhatsApp", "RAG"]
  },
  {
    key: "social-media",
    id: "social-media",
    icon: "Share2",
    title: {
      en: "AI-Powered Social Media Operations",
      ar: "عمليات وسائل التواصل بالذكاء الاصطناعي",
    },
    description: {
      en: "Consistent content at scale — without a full-time team. We automate content generation, scheduling, DM management, and performance reporting so your brand stays active and growing while you focus on the business.",
      ar: "محتوى متسق على نطاق واسع — بدون فريق بدوام كامل. نؤتمت إنشاء المحتوى والجدولة وإدارة الرسائل المباشرة وتقارير الأداء.",
    },
    bullets: [
      "AI video + caption generation (Veo, Runway)",
      "Auto-schedule and publish across platforms",
      "DM qualification — warm leads auto-routed to sales"
    ],
    tags: ["Runway", "Veo", "n8n", "Buffer"]
  },
  {
    key: "ecommerce",
    id: "ecommerce",
    icon: "ShoppingCart",
    title: {
      en: "AI E-Commerce Operations",
      ar: "عمليات التجارة الإلكترونية بالذكاء الاصطناعي",
    },
    description: {
      en: "Turn your store into a 24/7 sales machine. From automated product imports and AI-written descriptions to smart inventory alerts and order routing — we cut the manual ops so you can focus on growth.",
      ar: "حوّل متجرك إلى آلة مبيعات تعمل على مدار الساعة. من استيراد المنتجات الآلي والأوصاف المكتوبة بالذكاء الاصطناعي إلى تنبيهات المخزون الذكية وتوجيه الطلبات.",
    },
    bullets: [
      "Automated product listing & description generation",
      "AI customer support for order queries",
      "Smart order routing to CJ, Zara, or custom suppliers"
    ],
    tags: ["WooCommerce", "Shopify", "OpenAI", "n8n"]
  }
];

export type Service = (typeof services)[number];
