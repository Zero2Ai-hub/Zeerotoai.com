export const services = [
  {
    key: "catalog-listing",
    id: "catalog-listing",
    icon: "Package",
    title: {
      en: "Catalog & Listing Automation",
      ar: "أتمتة الكتالوج والقوائم",
    },
    description: {
      en: "Sync thousands of products from Dropshipping suppliers to your store platform automatically — with AI-written titles, descriptions, and mapped variants. No bulk CSVs. No copy-paste. Just a live catalog that updates itself.",
      ar: "مزامنة آلاف المنتجات من Dropshipping suppliers إلى your store أو your store تلقائياً — مع عناوين وأوصاف مكتوبة بالذكاء الاصطناعي ومتغيرات معينة. لا ملفات CSV ضخمة. لا نسخ ولصق. فقط كتالوج حي يتحدث نفسه.",
    },
    bullets: [
      "Supplier → store catalog sync / your store auto-sync",
      "AI-generated product titles, descriptions & SEO tags",
      "Variant mapping, image import & pricing rules — fully automated"
    ],
    tags: ["your store", "your store", "Dropshipping suppliers", "n8n", "OpenAI"]
  },
  {
    key: "order-fulfillment",
    id: "order-fulfillment",
    icon: "Truck",
    title: {
      en: "Order Fulfillment Automation",
      ar: "أتمتة تنفيذ الطلبات",
    },
    description: {
      en: "Every order placed in your store is automatically submitted to your supplier, tracking numbers are fetched and sent back, and customers get notified — zero manual steps, zero missed orders.",
      ar: "كل طلب يُقدَّم في متجرك يُرسل تلقائياً إلى المورد، وأرقام التتبع تُجلب وتُعاد، ويُخطر العملاء — صفر خطوات يدوية، صفر طلبات مفقودة.",
    },
    bullets: [
      "your store → Dropshipping suppliers auto-submit on every order",
      "Tracking number sync back to store & customer notification",
      "Error alerts + retry logic — no silent failures"
    ],
    tags: ["your store", "Dropshipping suppliers", "n8n", "Webhooks"]
  },
  {
    key: "amazon-fba-ads",
    id: "amazon-fba-ads",
    icon: "BarChart2",
    title: {
      en: "Amazon FBA & Ads Automation",
      ar: "أتمتة Amazon FBA والإعلانات",
    },
    description: {
      en: "Manage your Amazon store and ad spend on autopilot. We connect SP-API for order management and build daily bid optimizers that cut wasted spend and scale what's working — without you logging into Seller Central.",
      ar: "أدِر متجرك على Amazon وإنفاقك الإعلاني تلقائياً. نربط SP-API لإدارة الطلبات وننشئ محسنات عروض أسعار يومية تقطع الإنفاق الضائع وتوسع ما ينجح — دون أن تسجل الدخول إلى Seller Central.",
    },
    bullets: [
      "Amazon: orders, inventory, listing health — automated",
      "Daily bid optimizer across Exact, Phrase & Discovery campaigns",
      "Negative keyword automation — stop burning budget on bad terms"
    ],
    tags: ["Amazon", "Amazon Ads", "n8n", "Supabase"]
  },
  {
    key: "tiktok-content-engine",
    id: "tiktok-content-engine",
    icon: "Video",
    title: {
      en: "TikTok & Social Content Engine",
      ar: "محرك محتوى TikTok والسوشيال",
    },
    description: {
      en: "Turn any product into a ready-to-post TikTok or Reel in under 10 minutes. We generate UGC-style video scripts, produce short-form videos with AI Video Generation Gen4, overlay animated captions, and auto-post to TikTok and Instagram.",
      ar: "حوّل أي منتج إلى TikTok أو Reel جاهز للنشر في أقل من 10 دقائق. نولّد نصوص فيديو بأسلوب UGC وننتج مقاطع قصيرة مع AI Video Generation Gen4 ونضيف تعليقات متحركة وننشر تلقائياً على TikTok وInstagram.",
    },
    bullets: [
      "AI Video Generation Gen4 video generation — $0.25/video",
      "Animated caption overlays — 4 styles, optimised for mobile",
      "Auto-post to TikTok & Instagram on a content schedule"
    ],
    tags: ["AI Video Generation", "AI Video Generation", "TikTok", "Instagram", "n8n"]
  },
  {
    key: "ecommerce-support-agent",
    id: "ecommerce-support-agent",
    icon: "Headphones",
    title: {
      en: "E-commerce Support Agent",
      ar: "وكيل دعم التجارة الإلكترونية",
    },
    description: {
      en: "A 24/7 AI agent that handles shipping questions, return policies, order status, and product inquiries — in Arabic and English — across WhatsApp and web chat. It resolves. It escalates. It never sleeps.",
      ar: "وكيل ذكاء اصطناعي على مدار الساعة يتعامل مع أسئلة الشحن وسياسات الإرجاع وحالة الطلبات واستفسارات المنتج — بالعربية والإنجليزية — عبر WhatsApp والدردشة الإلكترونية. يحل. يصعّد. لا ينام.",
    },
    bullets: [
      "Arabic + English bilingual — WhatsApp & web chat",
      "Live order status lookup from your store platform",
      "Smart escalation to human agents — never drops the ball"
    ],
    tags: ["Voiceflow", "WhatsApp", "your store", "RAG", "Arabic"]
  },
  {
    key: "full-ops-stack",
    id: "full-ops-stack",
    icon: "Layers",
    title: {
      en: "Full E-commerce Ops Stack",
      ar: "حزمة عمليات التجارة الإلكترونية الكاملة",
    },
    description: {
      en: "All five systems, one team, one build. We become your entire e-commerce operations department — catalog, fulfillment, Amazon, content, and support — running in sync. Most clients save 40+ hours per week from day one.",
      ar: "خمسة أنظمة، فريق واحد، بناء واحد. نصبح قسم عمليات التجارة الإلكترونية بالكامل — الكتالوج والتنفيذ وAmazon والمحتوى والدعم — تعمل في تناسق. يوفر معظم العملاء أكثر من 40 ساعة في الأسبوع من اليوم الأول.",
    },
    bullets: [
      "All 5 systems integrated and running in sync",
      "2-week deploy — faster than hiring one operations manager",
      "You own the system. We hand over full docs and training."
    ],
    tags: ["your store", "Amazon", "TikTok", "Dropshipping suppliers", "n8n", "Full-Stack"]
  }
];

export type Service = (typeof services)[number];
