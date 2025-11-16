"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  CheckCircle2, 
  Clock, 
  Target,
  Zap,
  ArrowRight,
  Bot,
  Mail,
  Users,
  ShoppingCart,
  MessageSquare,
  Package
} from "lucide-react";

interface PackageDetailProps {
  slug: string;
  isArabic: boolean;
}

export function PackageDetail({ slug, isArabic }: PackageDetailProps) {
  // Package data
  const packages: Record<string, any> = {
    "ai-chatbot": {
      name: { en: "Basic AI Chatbot", ar: "روبوت دردشة AI أساسي" },
      tagline: { en: "24/7 Customer Support, Zero Hiring", ar: "دعم عملاء على مدار الساعة، بدون توظيف" },
      price: { en: "$1,480", ar: "1,480 دولار" },
      delivery: { en: "5-7 days", ar: "5-7 أيام" },
      icon: Bot,
      color: "from-cyan-500 to-blue-500",
      description: {
        en: "Deploy an intelligent AI chatbot on your website that handles customer inquiries 24/7, captures leads, and provides instant responses. Perfect for businesses receiving repetitive customer questions.",
        ar: "انشر روبوت دردشة AI ذكي على موقعك يتعامل مع استفسارات العملاء على مدار الساعة، ويلتقط العملاء المحتملين، ويقدم ردودًا فورية. مثالي للشركات التي تتلقى أسئلة عملاء متكررة."
      },
      includes: [
        { en: "Website chat widget (fully customizable)", ar: "أداة الدردشة على الموقع (قابلة للتخصيص بالكامل)" },
        { en: "FAQ knowledge base training (up to 50 Q&As)", ar: "تدريب قاعدة معرفة الأسئلة الشائعة (حتى 50 سؤال وجواب)" },
        { en: "Lead capture form integration", ar: "تكامل نموذج التقاط العملاء المحتملين" },
        { en: "Basic analytics dashboard", ar: "لوحة تحليلات أساسية" },
        { en: "Email notifications for urgent queries", ar: "إشعارات بريد إلكتروني للاستفسارات العاجلة" },
        { en: "Mobile-responsive design", ar: "تصميم متجاوب مع الهاتف المحمول" }
      ],
      perfectFor: [
        { en: "E-commerce stores with high customer inquiries", ar: "متاجر التجارة الإلكترونية ذات الاستفسارات العالية" },
        { en: "Service businesses with common FAQs", ar: "شركات الخدمات ذات الأسئلة الشائعة" },
        { en: "SaaS companies needing instant support", ar: "شركات SaaS التي تحتاج دعمًا فوريًا" },
        { en: "Startups without 24/7 support teams", ar: "الشركات الناشئة بدون فرق دعم على مدار الساعة" }
      ],
      outcomes: [
        { en: "Reduce support tickets by 60%", ar: "تقليل تذاكر الدعم بنسبة 60٪" },
        { en: "30-second average response time", ar: "متوسط وقت استجابة 30 ثانية" },
        { en: "Capture 40% more leads", ar: "التقاط 40٪ أكثر من العملاء المحتملين" },
        { en: "Save 10+ hours/week on customer support", ar: "توفير 10+ ساعات/أسبوع في دعم العملاء" }
      ],
      techStack: [
        { en: "OpenAI GPT-4 / Claude AI", ar: "OpenAI GPT-4 / Claude AI" },
        { en: "n8n workflow automation", ar: "أتمتة سير العمل n8n" },
        { en: "Your CRM (HubSpot, Pipedrive, etc.)", ar: "CRM الخاص بك (HubSpot، Pipedrive، إلخ)" },
        { en: "Hosted on your infrastructure", ar: "مستضاف على البنية التحتية الخاصة بك" }
      ],
      faq: [
        {
          q: { en: "Can I train it on my specific products/services?", ar: "هل يمكنني تدريبه على منتجاتي/خدماتي المحددة؟" },
          a: { en: "Yes! We train the bot on your FAQs, product catalog, and any documentation you provide.", ar: "نعم! نقوم بتدريب الروبوت على الأسئلة الشائعة وكتالوج المنتجات وأي وثائق تقدمها." }
        },
        {
          q: { en: "What happens if the bot doesn't know the answer?", ar: "ماذا يحدث إذا لم يعرف الروبوت الإجابة؟" },
          a: { en: "It will capture the question and send you an email notification, allowing you to respond manually.", ar: "سيلتقط السؤال ويرسل لك إشعارًا عبر البريد الإلكتروني، مما يسمح لك بالرد يدويًا." }
        },
        {
          q: { en: "Can I customize the design?", ar: "هل يمكنني تخصيص التصميم؟" },
          a: { en: "Absolutely! The widget is fully customizable to match your brand colors and style.", ar: "بالتأكيد! الأداة قابلة للتخصيص بالكامل لتتناسب مع ألوان علامتك التجارية وأسلوبها." }
        }
      ]
    },
    "lead-generation-system": {
      name: { en: "Lead Generation System", ar: "نظام توليد العملاء المحتملين" },
      tagline: { en: "Fill Your Pipeline on Autopilot", ar: "املأ خط أنابيبك على الطيار الآلي" },
      price: { en: "$4,050", ar: "4,050 دولار" },
      delivery: { en: "7-10 days", ar: "7-10 أيام" },
      icon: Target,
      color: "from-green-500 to-emerald-500",
      description: {
        en: "Automate your lead generation from prospecting to outreach. Find ideal customers, enrich their data, and run personalized email campaigns, all while you sleep.",
        ar: "قم بأتمتة توليد العملاء المحتملين من البحث إلى التواصل. ابحث عن العملاء المثاليين، وأثري بياناتهم، وقم بتشغيل حملات بريد إلكتروني مخصصة، كل ذلك أثناء نومك."
      },
      includes: [
        { en: "Lead scraping automation (LinkedIn, Google Maps, etc.)", ar: "أتمتة استخراج العملاء المحتملين (LinkedIn، خرائط Google، إلخ)" },
        { en: "Email validation & enrichment", ar: "التحقق من البريد الإلكتروني والإثراء" },
        { en: "Personalized email sequence builder (5 emails)", ar: "منشئ تسلسل بريد إلكتروني مخصص (5 رسائل إلكترونية)" },
        { en: "CRM integration (auto-sync leads)", ar: "تكامل CRM (مزامنة تلقائية للعملاء المحتملين)" },
        { en: "Performance tracking dashboard", ar: "لوحة معلومات تتبع الأداء" },
        { en: "A/B testing for subject lines", ar: "اختبار A/B لسطور الموضوع" }
      ],
      perfectFor: [
        { en: "B2B companies with ICP clarity", ar: "شركات B2B مع وضوح ICP" },
        { en: "Agencies acquiring new clients", ar: "الوكالات التي تكتسب عملاء جدد" },
        { en: "Sales teams spending hours on prospecting", ar: "فرق المبيعات التي تقضي ساعات في البحث" },
        { en: "Startups needing fast pipeline growth", ar: "الشركات الناشئة التي تحتاج نمو سريع لخط الأنابيب" }
      ],
      outcomes: [
        { en: "500-3,000 qualified leads/month", ar: "500-3,000 عميل محتمل مؤهل/شهر" },
        { en: "3-5x pipeline increase", ar: "زيادة خط الأنابيب 3-5x" },
        { en: "Save 20+ hours/week on prospecting", ar: "توفير 20+ ساعة/أسبوع في البحث" },
        { en: "10-15% email open rates", ar: "معدلات فتح بريد إلكتروني 10-15٪" }
      ],
      techStack: [
        { en: "Apollo.io / Hunter.io for scraping", ar: "Apollo.io / Hunter.io للاستخراج" },
        { en: "n8n workflow automation", ar: "أتمتة سير العمل n8n" },
        { en: "Your email provider (Gmail, Outlook, etc.)", ar: "مزود البريد الإلكتروني الخاص بك (Gmail، Outlook، إلخ)" },
        { en: "Your CRM (HubSpot, Pipedrive, Salesforce)", ar: "CRM الخاص بك (HubSpot، Pipedrive، Salesforce)" }
      ],
      faq: [
        {
          q: { en: "Is this compliant with GDPR/email laws?", ar: "هل هذا متوافق مع GDPR/قوانين البريد الإلكتروني؟" },
          a: { en: "Yes! We build in unsubscribe links and ensure compliance with all email regulations.", ar: "نعم! نقوم ببناء روابط إلغاء الاشتراك ونضمن الامتثال لجميع لوائح البريد الإلكتروني." }
        },
        {
          q: { en: "Can I target specific industries?", ar: "هل يمكنني استهداف صناعات محددة؟" },
          a: { en: "Absolutely! We configure filters based on your ICP (industry, company size, location, etc.).", ar: "بالتأكيد! نقوم بتكوين المرشحات بناءً على ICP الخاص بك (الصناعة، حجم الشركة، الموقع، إلخ)." }
        },
        {
          q: { en: "How do I avoid spam filters?", ar: "كيف أتجنب مرشحات البريد العشوائي؟" },
          a: { en: "We implement email warm-up, SPF/DKIM setup, and personalized messaging to maintain high deliverability.", ar: "نقوم بتنفيذ تهيئة البريد الإلكتروني، وإعداد SPF/DKIM، ورسائل مخصصة للحفاظ على إمكانية التسليم العالية." }
        }
      ]
    },
    "social-media-automation": {
      name: { en: "Social Media Automation Suite", ar: "مجموعة أتمتة وسائل التواصل الاجتماعي" },
      tagline: { en: "Post, Engage, Grow—All on Autopilot", ar: "انشر، تفاعل، نمو—كل ذلك على الطيار الآلي" },
      price: { en: "$5,400", ar: "5,400 دولار" },
      delivery: { en: "10-14 days", ar: "10-14 يوم" },
      icon: Users,
      color: "from-pink-500 to-rose-500",
      description: {
        en: "Create, schedule, and publish content across all social platforms with AI. Includes auto-engagement, hashtag optimization, and performance analytics.",
        ar: "قم بإنشاء المحتوى وجدولته ونشره عبر جميع منصات التواصل الاجتماعي باستخدام AI. يتضمن المشاركة التلقائية، وتحسين الهاشتاج، وتحليلات الأداء."
      },
      includes: [
        { en: "AI content generation (posts, captions, images)", ar: "توليد محتوى AI (المنشورات، التعليقات، الصور)" },
        { en: "Multi-platform posting (IG, Twitter, LinkedIn, FB)", ar: "النشر متعدد المنصات (IG، Twitter، LinkedIn، FB)" },
        { en: "Auto-engagement bot (likes, comments, follows)", ar: "روبوت المشاركة التلقائية (الإعجابات، التعليقات، المتابعات)" },
        { en: "Hashtag research & optimization", ar: "بحث وتحسين الهاشتاج" },
        { en: "Performance analytics dashboard", ar: "لوحة معلومات تحليلات الأداء" },
        { en: "Best-time-to-post scheduling", ar: "جدولة أفضل وقت للنشر" }
      ],
      perfectFor: [
        { en: "Personal brands building authority", ar: "العلامات التجارية الشخصية التي تبني السلطة" },
        { en: "Agencies managing multiple clients", ar: "الوكالات التي تدير عملاء متعددين" },
        { en: "E-commerce brands needing consistent content", ar: "علامات التجارة الإلكترونية التي تحتاج محتوى متسق" },
        { en: "Creators spending hours on social media", ar: "المبدعين الذين يقضون ساعات على وسائل التواصل الاجتماعي" }
      ],
      outcomes: [
        { en: "3x content output without extra hours", ar: "3x إنتاج محتوى بدون ساعات إضافية" },
        { en: "Save 12+ hours/week on social media", ar: "توفير 12+ ساعة/أسبوع على وسائل التواصل الاجتماعي" },
        { en: "20-30% follower growth in 3 months", ar: "نمو المتابعين 20-30٪ في 3 أشهر" },
        { en: "Consistent posting (7 days/week)", ar: "نشر متسق (7 أيام/أسبوع)" }
      ],
      techStack: [
        { en: "OpenAI DALL-E / Midjourney for images", ar: "OpenAI DALL-E / Midjourney للصور" },
        { en: "Buffer / Hootsuite API for scheduling", ar: "Buffer / Hootsuite API للجدولة" },
        { en: "n8n workflow automation", ar: "أتمتة سير العمل n8n" },
        { en: "Social platform APIs (IG, LinkedIn, etc.)", ar: "واجهات برمجة تطبيقات منصات التواصل الاجتماعي (IG، LinkedIn، إلخ)" }
      ],
      faq: [
        {
          q: { en: "Will the content sound robotic?", ar: "هل سيبدو المحتوى آليًا؟" },
          a: { en: "No! We train the AI on your brand voice and examples of your best-performing content.", ar: "لا! نقوم بتدريب AI على صوت علامتك التجارية وأمثلة على محتواك الأفضل أداءً." }
        },
        {
          q: { en: "Can I review posts before they go live?", ar: "هل يمكنني مراجعة المنشورات قبل نشرها؟" },
          a: { en: "Yes! We can set up an approval workflow or fully automate based on your preference.", ar: "نعم! يمكننا إعداد سير عمل الموافقة أو الأتمتة الكاملة بناءً على تفضيلاتك." }
        },
        {
          q: { en: "What platforms are supported?", ar: "ما هي المنصات المدعومة؟" },
          a: { en: "Instagram, LinkedIn, Twitter/X, Facebook, and TikTok (with limitations).", ar: "Instagram، LinkedIn، Twitter/X، Facebook، وTikTok (مع قيود)." }
        }
      ]
    },
    "ecommerce-starter-kit": {
      name: { en: "E-commerce Starter Kit", ar: "مجموعة بداية التجارة الإلكترونية" },
      tagline: { en: "Automate Products, Inventory & Orders", ar: "أتمتة المنتجات والمخزون والطلبات" },
      price: { en: "$3,600", ar: "3,600 دولار" },
      delivery: { en: "7-10 days", ar: "7-10 أيام" },
      icon: ShoppingCart,
      color: "from-orange-500 to-amber-500",
      description: {
        en: "Streamline your e-commerce operations with AI-generated product descriptions, automated inventory sync, order processing, and customer notifications.",
        ar: "قم بتبسيط عمليات التجارة الإلكترونية الخاصة بك باستخدام أوصاف منتجات AI، ومزامنة المخزون التلقائية، ومعالجة الطلبات، وإشعارات العملاء."
      },
      includes: [
        { en: "AI product descriptions (SEO-optimized)", ar: "أوصاف منتجات AI (محسّنة لتحسين محركات البحث)" },
        { en: "Inventory sync automation (Shopify, WooCommerce)", ar: "أتمتة مزامنة المخزون (Shopify، WooCommerce)" },
        { en: "Order processing workflow (payment → fulfillment)", ar: "سير عمل معالجة الطلبات (الدفع → التنفيذ)" },
        { en: "Customer notifications (order, shipping, delivery)", ar: "إشعارات العملاء (الطلب، الشحن، التسليم)" },
        { en: "Basic analytics dashboard", ar: "لوحة معلومات تحليلات أساسية" },
        { en: "Low-stock alerts", ar: "تنبيهات انخفاض المخزون" }
      ],
      perfectFor: [
        { en: "Shopify/WooCommerce store owners", ar: "أصحاب متاجر Shopify/WooCommerce" },
        { en: "Dropshippers managing multiple SKUs", ar: "Dropshippers الذين يديرون SKUs متعددة" },
        { en: "Product-based businesses scaling fast", ar: "الشركات القائمة على المنتجات التي تتوسع بسرعة" },
        { en: "Anyone tired of manual order processing", ar: "أي شخص سئم من معالجة الطلبات اليدوية" }
      ],
      outcomes: [
        { en: "Zero order errors", ar: "صفر أخطاء في الطلبات" },
        { en: "Save 18+ hours/week on operations", ar: "توفير 18+ ساعة/أسبوع في العمليات" },
        { en: "50% faster order fulfillment", ar: "تنفيذ الطلبات أسرع بنسبة 50٪" },
        { en: "30% better product descriptions (SEO)", ar: "أوصاف منتجات أفضل بنسبة 30٪ (SEO)" }
      ],
      techStack: [
        { en: "Shopify / WooCommerce API", ar: "Shopify / WooCommerce API" },
        { en: "OpenAI GPT-4 for product descriptions", ar: "OpenAI GPT-4 لأوصاف المنتجات" },
        { en: "n8n workflow automation", ar: "أتمتة سير العمل n8n" },
        { en: "Shipping providers (ShipStation, etc.)", ar: "مزودي الشحن (ShipStation، إلخ)" }
      ],
      faq: [
        {
          q: { en: "Will this work with my existing store?", ar: "هل سيعمل هذا مع متجري الحالي؟" },
          a: { en: "Yes! We integrate with Shopify, WooCommerce, and most major platforms.", ar: "نعم! نتكامل مع Shopify و WooCommerce ومعظم المنصات الرئيسية." }
        },
        {
          q: { en: "Can I customize the product description style?", ar: "هل يمكنني تخصيص نمط وصف المنتج؟" },
          a: { en: "Absolutely! We train the AI on your brand voice and provide example descriptions.", ar: "بالتأكيد! نقوم بتدريب AI على صوت علامتك التجارية ونقدم أمثلة على الأوصاف." }
        },
        {
          q: { en: "What if I have 1,000+ products?", ar: "ماذا لو كان لدي 1,000+ منتج؟" },
          a: { en: "No problem! We can handle bulk operations and prioritize based on your best-sellers.", ar: "لا مشكلة! يمكننا التعامل مع العمليات الجماعية وتحديد الأولويات بناءً على منتجاتك الأكثر مبيعًا." }
        }
      ]
    },
    "email-marketing-automation": {
      name: { en: "Email Marketing Automation", ar: "أتمتة التسويق عبر البريد الإلكتروني" },
      tagline: { en: "Nurture Leads While You Sleep", ar: "رعاية العملاء المحتملين أثناء نومك" },
      price: { en: "$2,700", ar: "2,700 دولار" },
      delivery: { en: "5-7 days", ar: "5-7 أيام" },
      icon: Mail,
      color: "from-purple-500 to-violet-500",
      description: {
        en: "Set up automated email sequences that nurture leads, convert prospects, and re-engage inactive customers. Includes A/B testing and advanced segmentation.",
        ar: "قم بإعداد تسلسلات بريد إلكتروني تلقائية ترعى العملاء المحتملين، وتحول العملاء المحتملين، وتعيد إشراك العملاء غير النشطين. يتضمن اختبار A/B والتقسيم المتقدم."
      },
      includes: [
        { en: "Welcome series automation (3-5 emails)", ar: "أتمتة سلسلة الترحيب (3-5 رسائل إلكترونية)" },
        { en: "Segmentation rules (behavior, demographics)", ar: "قواعد التقسيم (السلوك، التركيبة السكانية)" },
        { en: "A/B testing setup (subject lines, CTAs)", ar: "إعداد اختبار A/B (سطور الموضوع، CTAs)" },
        { en: "Re-engagement campaign (win back inactive)", ar: "حملة إعادة المشاركة (استعادة غير النشط)" },
        { en: "Email analytics dashboard", ar: "لوحة معلومات تحليلات البريد الإلكتروني" },
        { en: "ESP integration (Mailchimp, SendGrid, etc.)", ar: "تكامل ESP (Mailchimp، SendGrid، إلخ)" }
      ],
      perfectFor: [
        { en: "SaaS companies with free trials", ar: "شركات SaaS مع تجارب مجانية" },
        { en: "Coaches/consultants nurturing leads", ar: "المدربين/المستشارين الذين يرعون العملاء المحتملين" },
        { en: "E-commerce stores recovering abandoned carts", ar: "متاجر التجارة الإلكترونية التي تستعيد السلال المهجورة" },
        { en: "Anyone with a list but no follow-up system", ar: "أي شخص لديه قائمة ولكن لا يوجد نظام متابعة" }
      ],
      outcomes: [
        { en: "20-30% open rates", ar: "معدلات فتح 20-30٪" },
        { en: "5-10% click-through rates", ar: "معدلات النقر 5-10٪" },
        { en: "15% conversion lift from automation", ar: "رفع التحويل بنسبة 15٪ من الأتمتة" },
        { en: "Save 8+ hours/week on email management", ar: "توفير 8+ ساعات/أسبوع في إدارة البريد الإلكتروني" }
      ],
      techStack: [
        { en: "Your ESP (Mailchimp, ActiveCampaign, etc.)", ar: "ESP الخاص بك (Mailchimp، ActiveCampaign، إلخ)" },
        { en: "n8n workflow automation", ar: "أتمتة سير العمل n8n" },
        { en: "Your CRM for segmentation", ar: "CRM الخاص بك للتقسيم" },
        { en: "OpenAI GPT-4 for content personalization", ar: "OpenAI GPT-4 لتخصيص المحتوى" }
      ],
      faq: [
        {
          q: { en: "Can I use my existing email templates?", ar: "هل يمكنني استخدام قوالب البريد الإلكتروني الحالية؟" },
          a: { en: "Yes! We integrate with your ESP and use your branded templates.", ar: "نعم! نتكامل مع ESP الخاص بك ونستخدم قوالبك ذات العلامات التجارية." }
        },
        {
          q: { en: "How does segmentation work?", ar: "كيف يعمل التقسيم؟" },
          a: { en: "We set up rules based on behavior (opens, clicks), demographics, and purchase history.", ar: "نقوم بإعداد القواعد بناءً على السلوك (الفتحات، النقرات)، والتركيبة السكانية، وتاريخ الشراء." }
        },
        {
          q: { en: "What if my list is small (<1,000)?", ar: "ماذا لو كانت قائمتي صغيرة (<1,000)؟" },
          a: { en: "No problem! Automation is even more powerful for small lists, ensuring every lead is nurtured.", ar: "لا مشكلة! الأتمتة أكثر قوة للقوائم الصغيرة، مما يضمن رعاية كل عميل محتمل." }
        }
      ]
    },
    "multi-channel-support-bot": {
      name: { en: "Multi-Channel Support Bot", ar: "روبوت دعم متعدد القنوات" },
      tagline: { en: "WhatsApp, Web & Social in One System", ar: "WhatsApp والويب ووسائل التواصل في نظام واحد" },
      price: { en: "$4,950", ar: "4,950 دولار" },
      delivery: { en: "10-14 days", ar: "10-14 يوم" },
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-500",
      description: {
        en: "Unify customer support across WhatsApp, website, Facebook, and Instagram. One AI bot, one unified inbox, zero channel switching.",
        ar: "وحد دعم العملاء عبر WhatsApp والموقع الإلكتروني وFacebook وInstagram. روبوت AI واحد، صندوق وارد موحد، صفر تبديل القناة."
      },
      includes: [
        { en: "WhatsApp Business API setup", ar: "إعداد WhatsApp Business API" },
        { en: "Website live chat widget", ar: "أداة الدردشة المباشرة على الموقع" },
        { en: "Facebook Messenger integration", ar: "تكامل Facebook Messenger" },
        { en: "Instagram DM automation", ar: "أتمتة Instagram DM" },
        { en: "Unified inbox (all channels in one place)", ar: "صندوق وارد موحد (جميع القنوات في مكان واحد)" },
        { en: "Smart routing (AI vs. human handoff)", ar: "التوجيه الذكي (AI مقابل تسليم الإنسان)" }
      ],
      perfectFor: [
        { en: "Businesses receiving messages on multiple platforms", ar: "الشركات التي تتلقى رسائل على منصات متعددة" },
        { en: "E-commerce stores with high inquiry volume", ar: "متاجر التجارة الإلكترونية ذات حجم استفسار عالٍ" },
        { en: "Service businesses with international clients", ar: "شركات الخدمات مع عملاء دوليين" },
        { en: "Teams drowning in message chaos", ar: "الفرق التي تغرق في فوضى الرسائل" }
      ],
      outcomes: [
        { en: "60% of messages handled by AI", ar: "60٪ من الرسائل يتعامل معها AI" },
        { en: "Response time under 30 seconds", ar: "وقت الاستجابة أقل من 30 ثانية" },
        { en: "Save 15+ hours/week on support", ar: "توفير 15+ ساعة/أسبوع في الدعم" },
        { en: "40% improvement in customer satisfaction", ar: "تحسين بنسبة 40٪ في رضا العملاء" }
      ],
      techStack: [
        { en: "WhatsApp Business API (official)", ar: "WhatsApp Business API (رسمي)" },
        { en: "Facebook Graph API", ar: "Facebook Graph API" },
        { en: "OpenAI GPT-4 / Claude AI", ar: "OpenAI GPT-4 / Claude AI" },
        { en: "n8n workflow automation", ar: "أتمتة سير العمل n8n" }
      ],
      faq: [
        {
          q: { en: "Do I need WhatsApp Business API approval?", ar: "هل أحتاج إلى موافقة WhatsApp Business API؟" },
          a: { en: "We guide you through the approval process (usually takes 3-5 days).", ar: "نرشدك خلال عملية الموافقة (عادةً ما يستغرق 3-5 أيام)." }
        },
        {
          q: { en: "Can I still respond manually if needed?", ar: "هل يمكنني الرد يدويًا إذا لزم الأمر؟" },
          a: { en: "Yes! The system intelligently routes complex queries to your team.", ar: "نعم! يقوم النظام بتوجيه الاستفسارات المعقدة بذكاء إلى فريقك." }
        },
        {
          q: { en: "What languages are supported?", ar: "ما هي اللغات المدعومة؟" },
          a: { en: "The bot supports 50+ languages automatically, including Arabic, English, Spanish, etc.", ar: "يدعم الروبوت أكثر من 50 لغة تلقائيًا، بما في ذلك العربية والإنجليزية والإسبانية، إلخ." }
        }
      ]
    }
  };

  const packageData = packages[slug];
  if (!packageData) return null;

  const IconComponent = packageData.icon;

  return (
    <div className="relative z-10 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            href="/pricing#ready-made-packages"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {isArabic ? "العودة إلى التسعير" : "Back to Pricing"}
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-6 text-sm px-4 py-2 bg-primary/20 text-primary border-primary/30">
            <Clock className="w-4 h-4 inline mr-2" />
            {isArabic ? `التسليم: ${packageData.delivery.ar}` : `Delivery: ${packageData.delivery.en}`}
          </Badge>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${packageData.color} flex items-center justify-center shadow-2xl shadow-primary/40`}>
              <IconComponent className="h-10 w-10 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
            {isArabic ? packageData.name.ar : packageData.name.en}
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary font-bold mb-4">
            {isArabic ? packageData.tagline.ar : packageData.tagline.en}
          </p>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {isArabic ? packageData.description.ar : packageData.description.en}
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">{isArabic ? "السعر الثابت" : "Fixed Price"}</p>
              <p className="text-5xl font-black text-primary">
                {isArabic ? packageData.price.ar : packageData.price.en}
              </p>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/40 text-lg h-14 px-8"
          >
            <Link href="/signup" className="flex items-center gap-2">
              {isArabic ? "احصل على هذه الحزمة الآن" : "Get This Package Now"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-2 border-primary/20 bg-card/80">
            <CardHeader>
              <CardTitle className="text-3xl font-bold flex items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                {isArabic ? "ما المتضمن" : "What's Included"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageData.includes.map((item: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base">{isArabic ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Perfect For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-2 border-primary/20 bg-card/80">
            <CardHeader>
              <CardTitle className="text-3xl font-bold flex items-center gap-2">
                <Target className="w-8 h-8 text-primary" />
                {isArabic ? "مثالي لـ" : "Perfect For"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {packageData.perfectFor.map((item: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base">{isArabic ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Expected Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold flex items-center gap-2">
                <Target className="w-8 h-8 text-primary" />
                {isArabic ? "النتائج المتوقعة" : "Expected Outcomes"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageData.outcomes.map((item: any, idx: number) => (
                  <div key={idx} className="p-4 bg-card rounded-lg border border-primary/20">
                    <p className="text-lg font-bold text-primary">{isArabic ? item.ar : item.en}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-2 border-primary/20 bg-card/80">
            <CardHeader>
              <CardTitle className="text-3xl font-bold flex items-center gap-2">
                <Package className="w-8 h-8 text-primary" />
                {isArabic ? "المجموعة التقنية" : "Tech Stack"}
              </CardTitle>
              <CardDescription>
                {isArabic ? "الأدوات والتقنيات التي نستخدمها" : "Tools and technologies we use"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {packageData.techStack.map((item: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base">{isArabic ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-2 border-primary/20 bg-card/80">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {isArabic ? "أسئلة شائعة" : "Frequently Asked Questions"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {packageData.faq.map((item: any, idx: number) => (
                <div key={idx}>
                  <h4 className="text-lg font-bold mb-2">
                    {isArabic ? item.q.ar : item.q.en}
                  </h4>
                  <p className="text-muted-foreground">
                    {isArabic ? item.a.ar : item.a.en}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-card shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">
                {isArabic ? "جاهز للبدء؟" : "Ready to Get Started?"}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {isArabic
                  ? "احصل على حزمتك في 5-14 يومًا بسعر ثابت. لا توجد رسوم خفية، لا مفاجآت."
                  : "Get your package in 5-14 days at a fixed price. No hidden fees, no surprises."}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/40 text-lg h-14 px-8"
              >
                <Link href="/signup" className="flex items-center gap-2">
                  {isArabic ? "احصل على هذه الحزمة الآن" : "Get This Package Now"}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}

