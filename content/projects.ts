export const projects = [
  // 🥇 COMPLETED PROJECTS (ordered: Lead Gen first, then others)
  {
    slug: "lead-generation-email-outreach",
    id: "lead-generation-email-outreach",
    badge: {
      en: "90% automation",
      ar: "90٪ أتمتة",
    },
    title: {
      en: "Lead Generation & Email Outreach Automation",
      ar: "أتمتة توليد العملاء المحتملين والتواصل عبر البريد الإلكتروني",
    },
    summary: {
      en: "End-to-end pipeline that scrapes LinkedIn via Sales Navigator, enriches contacts with verified emails, crafts AI-personalized icebreakers, and deploys multi-step outreach campaigns, all without touching a spreadsheet.",
      ar: "خط أنابيب شامل يستخرج LinkedIn عبر Sales Navigator، ويثري جهات الاتصال برسائل بريد إلكتروني موثقة، ويصوغ مقدمات مخصصة بالذكاء الاصطناعي، وينشر حملات تواصل متعددة الخطوات - كل ذلك دون لمس جدول بيانات.",
    },
    metric: {
      en: "Personalized outreach at scale",
      ar: "تواصل شخصي على نطاق واسع",
    },
    metrics: [{ label: "Automation", value: "90%" }],
    tags: ["Make.com", "Phantombuster", "Instantly", "OpenAI"],
    href: "/portfolio/lead-generation-email-outreach",
    demoUrl: "https://your-demo-link-here",
    image: "/portfolio/lead-gen-outreach.jpg",
    gallery: [],
  },
  {
    slug: "multilingual-business-support-chatbot",
    id: "multilingual-business-support-chatbot",
    badge: {
      en: "-52% support time",
      ar: "-52٪ من وقت الدعم",
    },
    title: {
      en: "Multilingual Business Setup Support Chatbot",
      ar: "روبوت دردشة دعم إعداد الأعمال متعدد اللغات",
    },
    summary: {
      en: "RAG-powered Voiceflow agent trained on business setup documentation, answering FAQs in Arabic and English with 24/7 availability. Escalates complex inquiries to human agents and captures qualified leads via Airtable.",
      ar: "وكيل Voiceflow مدعوم بـ RAG تم تدريبه على وثائق إعداد الأعمال، يجيب على الأسئلة الشائعة باللغتين العربية والإنجليزية مع توفر على مدار الساعة. يصعد الاستفسارات المعقدة إلى الوكلاء البشريين ويلتقط العملاء المحتملين المؤهلين عبر Airtable.",
    },
    metric: {
      en: "Slashed support hours by half",
      ar: "تقليص ساعات الدعم إلى النصف",
    },
    metrics: [{ label: "Support time", value: "-52%" }],
    tags: ["Voiceflow", "RAG", "Airtable", "Multilingual"],
    href: "/portfolio/multilingual-business-support-chatbot",
    demoUrl: "https://your-demo-link-here",
    image: "/portfolio/business-chatbot.jpg",
    gallery: [],
  },
  {
    slug: "ecommerce-presale-chatbot",
    id: "ecommerce-presale-chatbot",
    badge: {
      en: "24/7 pre-sale support",
      ar: "دعم ما قبل البيع على مدار الساعة",
    },
    title: {
      en: "E-commerce Pre-sale Support Chatbot",
      ar: "روبوت دردشة دعم ما قبل البيع للتجارة الإلكترونية",
    },
    summary: {
      en: "Always-on Voiceflow assistant that handles shipping questions, return policies, and product inquiries for e-commerce stores. Captures leads, provides instant answers, and eliminated the need to hire a full customer support team.",
      ar: "مساعد Voiceflow دائم التشغيل يتعامل مع أسئلة الشحن وسياسات الإرجاع واستفسارات المنتج لمتاجر التجارة الإلكترونية. يلتقط العملاء المحتملين، ويوفر إجابات فورية، وألغى الحاجة لتوظيف فريق دعم عملاء كامل.",
    },
    metric: {
      en: "Replaced entire CS team",
      ar: "استبدل فريق CS بالكامل",
    },
    metrics: [{ label: "Availability", value: "24/7" }],
    tags: ["Voiceflow", "E-commerce", "Airtable", "Lead Capture"],
    href: "/portfolio/ecommerce-presale-chatbot",
    demoUrl: "https://your-demo-link-here",
    image: "/portfolio/ecommerce-chatbot.jpg",
    gallery: [],
  },
  
  // 🚀 IN PROGRESS PROJECTS
  {
    slug: "autodemo-video-engine",
    id: "autodemo-video-engine",
    badge: {
      en: "Idea → video in 10 min",
      ar: "فكرة ← فيديو في 10 دقائق",
    },
    title: {
      en: "AutoDemo: AI-Powered Demo Video Generator",
      ar: "AutoDemo: مولد فيديو توضيحي مدعوم بالذكاء الاصطناعي",
    },
    summary: {
      en: "One-click Notion-to-video pipeline that transforms project briefs into polished 40-45s vertical demo videos. AI writes the script, generates scenes, adds voiceover, and delivers a shareable link, saving 4-8 hours of manual editing per video.",
      ar: "خط أنابيب Notion إلى الفيديو بنقرة واحدة يحول ملخصات المشروع إلى مقاطع فيديو توضيحية عمودية مصقولة مدتها 40-45 ثانية. يكتب الذكاء الاصطناعي النص، ويولد المشاهد، ويضيف التعليق الصوتي، ويقدم رابطًا قابلاً للمشاركة - مما يوفر 4-8 ساعات من التحرير اليدوي لكل فيديو.",
    },
    metric: {
      en: "4-8 hours saved per video",
      ar: "4-8 ساعات محفوظة لكل فيديو",
    },
    metrics: [{ label: "Time saved", value: "4-8 hrs/video" }],
    tags: ["n8n", "Notion", "OpenAI", "ElevenLabs", "Creatomate"],
    href: "/portfolio/autodemo-video-engine",
    demoUrl: "https://your-demo-link-here",
    image: "/portfolio/autodemo-video-engine.jpg",
    gallery: [],
  },
  {
    slug: "notion-telegram-workflow-hub",
    id: "notion-telegram-workflow-hub",
    badge: {
      en: "Single source of truth",
      ar: "مصدر واحد للحقيقة",
    },
    title: {
      en: "Notion + Telegram Workflow Infrastructure",
      ar: "بنية تحتية لسير عمل Notion + Telegram",
    },
    summary: {
      en: "Personal automation hub that syncs learning roadmaps, projects, and task updates between Notion and Telegram. Inline keyboards let you update skill levels, log hours, and trigger automations without opening Notion, keeping execution and learning perfectly aligned.",
      ar: "مركز أتمتة شخصي يزامن خرائط طريق التعلم والمشاريع وتحديثات المهام بين Notion و Telegram. تتيح لك لوحات المفاتيح المضمنة تحديث مستويات المهارات وتسجيل الساعات وتشغيل الأتمتة دون فتح Notion - مع إبقاء التنفيذ والتعلم متوافقين تمامًا.",
    },
    metric: {
      en: "Learning ↔ execution in sync",
      ar: "التعلم ↔ التنفيذ متزامن",
    },
    metrics: [{ label: "Sync", value: "Real-time" }],
    tags: ["n8n", "Notion", "Telegram", "Webhooks"],
    href: "/portfolio/notion-telegram-workflow-hub",
    demoUrl: "https://your-demo-link-here",
    image: "/portfolio/notion-telegram-hub.jpg",
    gallery: [],
  },
  {
    slug: "veo-social-video-autopost",
    id: "veo-social-video-autopost",
    badge: {
      en: "10× content output",
      ar: "10× إنتاج المحتوى",
    },
    title: {
      en: "Veo 3.1 Video Generation & Auto-posting Pipeline",
      ar: "خط أنابيب توليد الفيديو Veo 3.1 والنشر التلقائي",
    },
    summary: {
      en: "Daily content engine that generates short-form AI videos from prompts using Veo 3.1, logs everything to Google Sheets, and schedules auto-posts to Instagram and TikTok via Blotato. Turn one idea into 10+ platform-ready videos without manual editing.",
      ar: "محرك محتوى يومي يولد مقاطع فيديو AI قصيرة من الأوامر باستخدام Veo 3.1، ويسجل كل شيء في Google Sheets، ويجدول المنشورات التلقائية على Instagram و TikTok عبر Blotato. حول فكرة واحدة إلى 10+ مقاطع فيديو جاهزة للمنصة دون تحرير يدوي.",
    },
    metric: {
      en: "1 prompt → 10+ videos",
      ar: "أمر واحد ← 10+ مقاطع فيديو",
    },
    metrics: [{ label: "Output", value: "10× content" }],
    tags: ["Veo 3.1", "n8n", "Blotato", "Google Sheets", "Fal AI"],
    href: "/portfolio/veo-social-video-autopost",
    demoUrl: "https://your-demo-link-here",
    image: "/portfolio/veo-autopost.jpg",
    gallery: [],
  },

  // 💡 PLANNED PROJECTS
  {
    slug: "heygen-avatar-video-automation",
    id: "heygen-avatar-video-automation",
    badge: {
      en: "Script → avatar in clicks",
      ar: "نص ← صورة رمزية بنقرات",
    },
    title: {
      en: "HeyGen Avatar Video Automation",
      ar: "أتمتة فيديو الصورة الرمزية HeyGen",
    },
    summary: {
      en: "Automated pipeline that transforms scripts into professional avatar-based explainer videos using HeyGen. Generates consistent talking-head content ready for YouTube, LinkedIn, or internal training. No camera, no editing, no hiring talent.",
      ar: "خط أنابيب آلي يحول النصوص إلى مقاطع فيديو توضيحية احترافية قائمة على الصورة الرمزية باستخدام HeyGen. يولد محتوى رأس ناطق متسق جاهز لـ YouTube أو LinkedIn أو التدريب الداخلي - بدون كاميرا، بدون تحرير، بدون توظيف مواهب.",
    },
    metric: {
      en: "Professional videos without hiring talent",
      ar: "مقاطع فيديو احترافية بدون توظيف مواهب",
    },
    metrics: [{ label: "Speed", value: "Script → video in clicks" }],
    tags: ["HeyGen", "n8n", "OpenAI", "Blotato"],
    href: "/portfolio/heygen-avatar-video-automation",
    demoUrl: "https://your-demo-link-here",
    image: "/portfolio/heygen-video.jpg",
    gallery: [],
  },
  {
    slug: "winning-products-daily-scraper",
    id: "winning-products-daily-scraper",
    badge: {
      en: "Daily product intel",
      ar: "معلومات المنتج اليومية",
    },
    title: {
      en: "Winning Products Daily Scraper",
      ar: "كاشطة المنتجات الفائزة اليومية",
    },
    summary: {
      en: "Automated e-commerce intelligence system that scrapes trending products from multiple marketplaces, filters by profitability rules, and delivers a curated daily list of dropshipping opportunities straight to your inbox. Never run out of product ideas.",
      ar: "نظام استخبارات التجارة الإلكترونية الآلي الذي يستخرج المنتجات الرائجة من أسواق متعددة، ويصفي حسب قواعد الربحية، ويقدم قائمة يومية منسقة من فرص الدروبشيبينغ مباشرة إلى صندوق الوارد الخاص بك. لن تنفد أفكار المنتجات أبدًا.",
    },
    metric: {
      en: "Fresh opportunities daily",
      ar: "فرص جديدة يوميًا",
    },
    metrics: [{ label: "Frequency", value: "Daily updates" }],
    tags: ["Scraping", "E-commerce", "n8n", "Google Sheets"],
    href: "/portfolio/winning-products-daily-scraper",
    demoUrl: "https://your-demo-link-here",
    image: "/portfolio/products-scraper.jpg",
    gallery: [],
  },
  {
    slug: "b2b-lead-scraping-engine",
    id: "b2b-lead-scraping-engine",
    badge: {
      en: "Warm leads on demand",
      ar: "عملاء محتملون دافئون عند الطلب",
    },
    title: {
      en: "B2B Lead Scraping & Enrichment Engine",
      ar: "محرك استخراج وإثراء العملاء المحتملين B2B",
    },
    summary: {
      en: "Intelligent lead generation system that scrapes Google Maps and LinkedIn for B2B prospects, enriches profiles with contact data, scores lead quality, and routes hot leads to your CRM with ownership assignments. Build a qualified pipeline while you sleep.",
      ar: "نظام توليد عملاء محتملين ذكي يستخرج Google Maps و LinkedIn للعملاء المحتملين B2B، ويثري الملفات الشخصية ببيانات الاتصال، ويصنف جودة العميل المحتمل، ويوجه العملاء المحتملين الساخنين إلى CRM الخاص بك مع تعيينات الملكية. بناء خط أنابيب مؤهل أثناء نومك.",
    },
    metric: {
      en: "Qualified pipeline on autopilot",
      ar: "خط أنابيب مؤهل على الطيار الآلي",
    },
    metrics: [{ label: "Quality", value: "Scored & enriched" }],
    tags: ["Scraping", "Lead Gen", "CRM", "Google Maps", "LinkedIn"],
    href: "/portfolio/b2b-lead-scraping-engine",
    demoUrl: "https://your-demo-link-here",
    image: "/portfolio/b2b-scraper.jpg",
    gallery: [],
  },
  {
    slug: "notion-to-x-content-engine",
    id: "notion-to-x-content-engine",
    badge: {
      en: "Content on autopilot",
      ar: "محتوى على الطيار الآلي",
    },
    title: {
      en: "Notion → X Content Automation Engine",
      ar: "محرك أتمتة المحتوى Notion ← X",
    },
    summary: {
      en: "Daily posting system that transforms Notion project logs and plain-text ideas into viral-optimized X (Twitter) threads. AI crafts hooks, formats threads, schedules posts, and logs performance, so you build an audience without opening the app.",
      ar: "نظام نشر يومي يحول سجلات مشروع Notion وأفكار النص العادي إلى سلاسل X (Twitter) محسّنة للانتشار. يصوغ الذكاء الاصطناعي الخطافات، وينسق السلاسل، ويجدول المنشورات، ويسجل الأداء - لذا تبني جمهورًا دون فتح التطبيق.",
    },
    metric: {
      en: "Daily posts from one hub",
      ar: "منشورات يومية من مركز واحد",
    },
    metrics: [{ label: "Automation", value: "Fully automated" }],
    tags: ["Notion", "X (Twitter)", "n8n", "OpenAI"],
    href: "/portfolio/notion-to-x-content-engine",
    demoUrl: "https://your-demo-link-here",
    image: "/portfolio/notion-x-automation.jpg",
    gallery: [],
  },
  {
    slug: "zero2ai-website",
    id: "zero2ai-website",
    badge: {
      en: "AI-Powered Showcase",
      ar: "عرض مدعوم بالذكاء الاصطناعي",
    },
    title: {
      en: "Zero2AI Website - AI-Generated Portfolio & Dashboard",
      ar: "موقع Zero2AI - محفظة ولوحة تحكم تم إنشاؤها بالذكاء الاصطناعي",
    },
    summary: {
      en: "A modern, SEO-optimized portfolio website built entirely with AI-powered coding tools. Features a dynamic dashboard, authentication, bilingual support (English/Arabic), and seamless integrations with Supabase, Airtable, and Calendly. Want a similar website for your business? Request one now and we'll build it fast!",
      ar: "موقع محفظة حديث محسّن لمحركات البحث تم بناؤه بالكامل باستخدام أدوات البرمجة المدعومة بالذكاء الاصطناعي. يتميز بلوحة تحكم ديناميكية، ومصادقة، ودعم ثنائي اللغة (الإنجليزية/العربية)، وتكاملات سلسة مع Supabase و Airtable و Calendly. هل تريد موقعًا مشابهًا لعملك؟ اطلب واحدًا الآن وسنقوم ببنائه بسرعة!",
    },
    metric: {
      en: "Built in days, not months",
      ar: "تم بناؤه في أيام، وليس أشهر",
    },
    metrics: [
      { label: "Build Time", value: "< 1 week" },
      { label: "Languages", value: "2" },
    ],
    tags: ["Cursor AI", "Next.js", "Supabase", "Tailwind CSS"],
    href: "/portfolio/zero2ai-website",
    demoUrl: "https://www.zero2ai.com",
    image: "/portfolio/zero2ai-website.jpg",
    gallery: [],
  }
];

export type Project = (typeof projects)[number];

