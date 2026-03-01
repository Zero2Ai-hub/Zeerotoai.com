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
      "Dropshipping Suppliers → your store auto-sync",
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
      ar: "كل طلب يُقدَّم في متجرك يُرسل تلقائياً إلى موردك، وأرقام التتبع تُجلب وتُعاد، ويُخطر العملاء — صفر خطوات يدوية، صفر طلبات مفقودة.",
    },
    bullets: [
      "Order placed in your store → auto-submitted to Dropshipping Suppliers",
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
      en: "Manage your Amazon store and ad spend on autopilot. We connect the Amazon API for order management and build daily bid optimizers that cut wasted spend and scale what's working — without you logging into Seller Central.",
      ar: "أدِر متجرك على Amazon وإنفاقك الإعلاني تلقائياً. نربط Amazon API لإدارة الطلبات وننشئ محسنات عروض أسعار يومية تقطع الإنفاق الضائع وتوسع ما ينجح — دون أن تسجل الدخول إلى Seller Central.",
    },
    bullets: [
      "Amazon: orders, inventory, listing health — automated",
      "Daily bid optimizer across Exact, Phrase & Discovery campaigns",
      "Negative keyword automation — stop burning budget on bad terms"
    ],
    tags: ["Amazon", "Amazon Ads", "n8n"]
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
      en: "Turn any product into a ready-to-post TikTok or Reel in under 10 minutes. We generate UGC-style video scripts, produce short-form videos with AI Video Generation, overlay animated captions, and auto-post to TikTok and Instagram.",
      ar: "حوّل أي منتج إلى TikTok أو Reel جاهز للنشر في أقل من 10 دقائق. نولّد نصوص فيديو بأسلوب UGC وننتج مقاطع قصيرة مع AI Video Generation Gen4 ونضيف تعليقات متحركة وننشر تلقائياً على TikTok وInstagram.",
    },
    bullets: [
      "AI Video Generation — UGC-style product videos from $0.25",
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
    key: "storefront-creation",
    id: "storefront-creation",
    icon: "Store",
    title: {
      en: "AI Storefront & Website Creation",
      ar: "إنشاء المتاجر والمواقع بالذكاء الاصطناعي",
    },
    description: {
      en: "Launch a professional e-commerce store or business website in days, not months. We use AI-powered tools to design, build, and configure your entire online presence — full product catalog, payment gateway, and mobile-first design — ready to take orders from day one.",
      ar: "أطلق متجراً إلكترونياً احترافياً أو موقع أعمال في أيام لا أشهر. نستخدم أدوات مدعومة بالذكاء الاصطناعي لتصميم وبناء وتهيئة حضورك الرقمي الكامل — جاهز لاستقبال الطلبات من اليوم الأول.",
    },
    bullets: [
      "Full store setup: domain, hosting, payments & shipping — done-for-you",
      "AI-generated product pages, descriptions & SEO from the start",
      "Mobile-first design built to convert visitors into buyers"
    ],
    tags: ["WooCommerce", "Shopify", "Next.js", "Stripe", "Bolt.ai"]
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
