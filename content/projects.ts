export const projects = [
  {
    slug: "tech1mart-ecommerce-automation",
    id: "tech1mart-ecommerce-automation",
    badge: {
      en: "40 hrs/week automated",
      ar: "40 ساعة/أسبوع مؤتمتة",
    },
    title: {
      en: "Tech1Mart UAE — Full E-commerce Ops Automation",
      ar: "Tech1Mart الإمارات — أتمتة عمليات التجارة الإلكترونية الكاملة",
    },
    summary: {
      en: "End-to-end automation for a UAE-based e-commerce brand: Supplier → store catalog auto-sync, Amazon order management, AI-powered product gallery engine, TikTok video generation pipeline, and daily reporting. Replaced 40+ hours of manual work per week — deployed in 2 weeks.",
      ar: "أتمتة شاملة لعلامة تجارية للتجارة الإلكترونية في الإمارات: مزامنة كتالوج Supplier → store catalog sync، إدارة طلبات Amazon، محرك معرض منتجات بالذكاء الاصطناعي، خط أنابيب إنشاء فيديو TikTok، وتقارير يومية. استُبدل أكثر من 40 ساعة من العمل اليدوي أسبوعياً — نُشر في أسبوعين.",
    },
    metric: {
      en: "40+ hours/week saved from day one",
      ar: "توفير أكثر من 40 ساعة/أسبوع من اليوم الأول",
    },
    metrics: [
      { label: "Time saved", value: "40 hrs/wk" },
      { label: "Catalog capacity", value: "10×" },
      { label: "Deploy time", value: "2 weeks" },
    ],
    tags: ["your store", "Amazon", "Dropshipping suppliers", "n8n", "TikTok"],
    href: "/portfolio/tech1mart-ecommerce-automation",
    demoUrl: "/contact",
    image: "/portfolio/tech1mart-automation.jpg",
    gallery: [],
  },
  {
    slug: "ai-tiktok-content-pipeline",
    id: "ai-tiktok-content-pipeline",
    badge: {
      en: "Idea → posted in <10 min",
      ar: "فكرة ← نشر في أقل من 10 دقائق",
    },
    title: {
      en: "AI TikTok Video Generation & Posting Pipeline",
      ar: "خط أنابيب إنشاء ونشر فيديو TikTok بالذكاء الاصطناعي",
    },
    summary: {
      en: "Automated content engine for e-commerce product launches: generates UGC-style video scripts, produces short-form videos via AI Video Generation Gen4, adds animated captions, and auto-posts to TikTok. Each video costs $0.25 and takes under 10 minutes from product image to posted reel. 3 products launched.",
      ar: "محرك محتوى آلي لإطلاق منتجات التجارة الإلكترونية: يولّد نصوص فيديو بأسلوب UGC وينتج مقاطع قصيرة عبر AI Video Generation Gen4 ويضيف تعليقات متحركة وينشر تلقائياً على TikTok. تكلفة كل فيديو 0.25 دولار ويستغرق أقل من 10 دقائق من صورة المنتج إلى ريل منشور.",
    },
    metric: {
      en: "$0.25/video — product to posted in minutes",
      ar: "0.25 دولار/فيديو — من المنتج إلى النشر في دقائق",
    },
    metrics: [
      { label: "Time to post", value: "< 10 min" },
      { label: "Cost per video", value: "$0.25" },
      { label: "Products launched", value: "3" },
    ],
    tags: ["AI Video Generation", "AI Video Generation", "TikTok", "", "n8n"],
    href: "/portfolio/ai-tiktok-content-pipeline",
    demoUrl: "/contact",
    image: "/portfolio/tiktok-pipeline.jpg",
    gallery: [],
  },
  {
    slug: "amazon-ads-autopilot",
    id: "amazon-ads-autopilot",
    badge: {
      en: "3 campaigns, daily optimizer",
      ar: "3 حملات، محسّن يومي",
    },
    title: {
      en: "Amazon Ads Autopilot",
      ar: "أتمتة إعلانات Amazon",
    },
    summary: {
      en: "Built and launched 3 Amazon Sponsored Products campaigns (Exact, Phrase, Discovery) with a 15 AED/day budget. A daily bid optimizer runs automatically — harvesting winning keywords, adding negatives, and adjusting bids based on ACoS targets. No manual intervention needed.",
      ar: "بناء وإطلاق 3 حملات Amazon Sponsored Products (Exact وPhrase وDiscovery) بميزانية 15 درهم/يوم. يعمل محسّن العروض اليومي تلقائياً — يجني الكلمات المفتاحية الرابحة ويضيف الكلمات السلبية ويضبط العروض بناءً على أهداف ACoS. لا تدخل يدوي مطلوب.",
    },
    metric: {
      en: "Daily optimization — zero manual ad management",
      ar: "تحسين يومي — صفر إدارة إعلانات يدوية",
    },
    metrics: [
      { label: "Campaigns", value: "3 live" },
      { label: "Daily budget", value: "15 AED" },
      { label: "Management", value: "100% auto" },
    ],
    tags: ["Amazon Ads", "Amazon", "n8n", "Bid Optimizer"],
    href: "/portfolio/amazon-ads-autopilot",
    demoUrl: "/contact",
    image: "/portfolio/amazon-ads-autopilot.jpg",
    gallery: [],
  },
];

export type Project = (typeof projects)[number];
