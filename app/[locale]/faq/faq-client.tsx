"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ChevronDown, 
  MessageCircle, 
  Clock,
  DollarSign,
  Zap,
  Shield,
  Code,
  Users,
  ArrowRight
} from "lucide-react";

interface FaqClientProps {
  isArabic: boolean;
}

export function FaqClient({ isArabic }: FaqClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Improved scroll tracking - activates when section header is at viewport center
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const categoryElements = containerRef.current.querySelectorAll('[data-category]');
      // Activate when section header reaches viewport center (50%)
      const triggerPoint = window.scrollY + window.innerHeight * 0.5;
      
      let newActiveCategory = 0;
      
      categoryElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        
        // Only activate if element's top has passed the trigger point
        if (elementTop <= triggerPoint) {
          newActiveCategory = index;
        }
      });
      
      setActiveCategory(newActiveCategory);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqCategories = [
    {
      id: "getting-started",
      category: { en: "Getting Started", ar: "البدء" },
      icon: MessageCircle,
      faqs: [
        {
          question: {
            en: "How long does it take to automate my store?",
            ar: "كم يستغرق الأمر لأتمتة متجري؟"
          },
          answer: {
            en: "Most stores go live with their first automation in 14 days. Full ops stack in 3-4 weeks.",
            ar: "معظم المتاجر تعمل بأتمتتها الأولى في 14 يوماً. مجموعة العمليات الكاملة في 3-4 أسابيع."
          },
        },
        {
          question: {
            en: "Do I need to be technical?",
            ar: "هل أحتاج إلى خبرة تقنية؟"
          },
          answer: {
            en: "No. We handle everything. You get a working system and a walkthrough. No code knowledge needed.",
            ar: "لا. نتولى كل شيء. تحصل على نظام يعمل وشرح كامل. لا حاجة لأي معرفة بالبرمجة."
          },
        },
        {
          question: {
            en: "What platforms do you support?",
            ar: "ما المنصات التي تدعمونها؟"
          },
          answer: {
            en: "WooCommerce, Shopify, Amazon UAE, TikTok, Instagram. We can integrate most platforms with an API.",
            ar: "WooCommerce وShopify وأمازون الإمارات وTikTok وInstagram. يمكننا دمج معظم المنصات التي لديها API."
          },
        },
      ],
    },
    {
      id: "ownership",
      category: { en: "Ownership & Pricing", ar: "الملكية والتسعير" },
      icon: Shield,
      faqs: [
        {
          question: {
            en: "Do I own the automations after?",
            ar: "هل أملك الأتمتة بعد ذلك؟"
          },
          answer: {
            en: "100%. All code, workflows, and API connections are transferred to you. No monthly licensing fees.",
            ar: "100%. جميع الكودات وسير العمل وروابط API تُنقل إليك. لا رسوم ترخيص شهرية."
          },
        },
        {
          question: {
            en: "What is the minimum I need to get started?",
            ar: "ما الحد الأدنى للبدء؟"
          },
          answer: {
            en: "A store with at least 20 products and 10+ orders/month. We will audit it for free and tell you exactly what to automate.",
            ar: "متجر يحتوي على 20 منتجاً على الأقل و10+ طلبات/شهر. سنراجعه مجاناً ونخبرك بالضبط ما يجب أتمتته."
          },
        },
      ],
    },
    {
      id: "platforms",
      category: { en: "Amazon & TikTok", ar: "أمازون وتيكتوك" },
      icon: Zap,
      faqs: [
        {
          question: {
            en: "Can you automate my Amazon store?",
            ar: "هل يمكنكم أتمتة متجري على أمازون؟"
          },
          answer: {
            en: "Yes. We use the Amazon SP-API to manage inventory, optimize listings, run and auto-adjust ad campaigns daily.",
            ar: "نعم. نستخدم Amazon SP-API لإدارة المخزون وتحسين القوائم وتشغيل الحملات الإعلانية وضبطها يومياً تلقائياً."
          },
        },
        {
          question: {
            en: "Do you support Arabic?",
            ar: "هل تدعمون اللغة العربية؟"
          },
          answer: {
            en: "All systems are bilingual by default. Customer support agents, product listings, and reports in both Arabic and English.",
            ar: "جميع الأنظمة ثنائية اللغة بشكل افتراضي. وكلاء دعم العملاء وقوائم المنتجات والتقارير باللغتين العربية والإنجليزية."
          },
        },
      ],
    },
  ];


  const commonMyths = [
    {
      myth: { en: "AI automation is too expensive for small stores.", ar: "أتمتة الذكاء الاصطناعي مكلفة جداً للمتاجر الصغيرة." },
      truth: { en: "Our Starter package starts at 3,000 AED — less than what most stores pay monthly for SaaS tools that do the same job worse.", ar: "حزمتنا الأساسية تبدأ من 3,000 درهم — أقل مما تدفعه معظم المتاجر شهرياً لأدوات SaaS." }
    },
    {
      myth: { en: "You need a technical team to manage AI automations.", ar: "تحتاج إلى فريق تقني لإدارة أتمتة الذكاء الاصطناعي." },
      truth: { en: "We build it, hand it over, and train you in 30 minutes. If something breaks, we fix it. No technical knowledge required.", ar: "نبنيه ونسلمه لك مع تدريب 30 دقيقة. إذا حدث خطأ، نصلحه نحن." }
    },
    {
      myth: { en: "Automation will make mistakes and hurt my business.", ar: "الأتمتة ستخطئ وتضر بعملي." },
      truth: { en: "Every system we build has governed autonomy — audit logs, rejection rules, and human escalation paths. It handles the routine, humans handle the edge cases.", ar: "كل نظام نبنيه لديه حوكمة — سجلات تدقيق وقواعد رفض ومسارات تصعيد بشرية." }
    },
    {
      myth: { en: "It will take months to set up and integrate.", ar: "سيستغرق الإعداد والتكامل أشهراً." },
      truth: { en: "First automation live in 14 days. Full ops stack in 3-4 weeks. We've done this before — Tech1Mart UAE went live in 2 weeks.", ar: "أول أتمتة تعمل في 14 يوماً. المنظومة الكاملة في 3-4 أسابيع." }
    }
  ];


  return (
    <div className="relative z-10 py-16 px-4">
      {/* Circuit Progress Line - FIXED like services page */}
      <motion.div
        initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`hidden xl:block fixed ${isArabic ? 'right-20' : 'left-20'} top-1/3 z-40`}
      >
        <div className="h-[50vh] relative w-12">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          
          {/* Animated glow - enhanced */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-2 h-20"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgb(0 217 255 / 0.8), rgb(0 217 255 / 0.6), rgb(0 217 255 / 0.8), transparent)',
              filter: 'blur(6px)',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
            }}
            animate={{
              top: `${(activeCategory / (faqCategories.length - 1)) * 85}%`,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Nodes */}
          <div className="h-full flex flex-col justify-between py-4">
            {faqCategories.map((cat, idx) => {
              const Icon = cat.icon;
              const active = idx === activeCategory;
              return (
                <Link 
                  key={idx} 
                  href={`#${cat.id}`}
                  className="relative flex items-center justify-center group cursor-pointer"
                >
                  {/* Pulsating glow ring for active node */}
                  {active && (
                    <motion.div
                      className="absolute w-10 h-10 rounded-full border-2 border-primary/40"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                  
                  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 backdrop-blur-sm relative z-10 ${
                    active 
                      ? 'border-primary bg-primary/20 scale-110 shadow-lg shadow-primary/60' 
                      : 'border-primary/20 bg-card/30 group-hover:border-primary/40 group-hover:bg-card/50 group-hover:shadow-md group-hover:shadow-primary/30'
                  }`}>
                    <Icon className={`w-4 h-4 transition-colors ${active ? 'text-primary drop-shadow-lg' : 'text-muted-foreground/60 group-hover:text-primary/80'}`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>
      
      <div ref={containerRef} className="container mx-auto max-w-4xl">
        {/* Common Myths Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "دعونا نبدد بعض الخرافات" : "Let's Bust Some Myths"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {isArabic 
                ? "أكبر المفاهيم الخاطئة حول أتمتة الذكاء الاصطناعي"
                : "The biggest misconceptions about AI automation"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonMyths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-2 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
                  <CardContent className="p-6 relative z-10">
                    {/* Myth */}
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 mb-3">
                        <span className="text-red-500 font-bold text-sm">❌ MYTH</span>
                      </div>
                      <p className="font-semibold text-lg text-foreground/90">
                        &ldquo;{isArabic ? item.myth.ar : item.myth.en}&rdquo;
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-4" />

                    {/* Truth */}
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-3">
                        <span className="text-primary font-bold text-sm">✓ TRUTH</span>
                      </div>
                      <p className="text-foreground font-semibold leading-relaxed">
                        {isArabic ? item.truth.ar : item.truth.en}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Separator */}
          <div className="mt-16 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </motion.div>

        {faqCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <motion.div
              key={categoryIndex}
              id={category.id}
              data-category={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12 scroll-mt-24"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-black">
                  {isArabic ? category.category.ar : category.category.en}
                </h2>
              </div>

              {/* FAQs */}
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <Card
                      key={faqIndex}
                      className="border-2 border-primary/20 bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-all overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                      >
                        <h3 className="font-bold text-lg flex-1 group-hover:text-primary transition-colors">
                          {isArabic ? faq.question.ar : faq.question.en}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 mt-1 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CardContent className="px-6 pb-6 pt-0">
                              <div className="pt-4 border-t border-primary/10">
                                <div className="text-muted-foreground leading-relaxed space-y-4">
                                  {(isArabic ? faq.answer.ar : faq.answer.en)
                                    .split('\n\n')
                                    .map((paragraph, idx) => (
                                      <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                              </div>
                            </CardContent>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          );
        })}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/20 via-primary/10 to-card/80 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 circuit-pattern opacity-10" />
            <CardContent className="p-12 relative z-10 text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-black mb-4">
                {isArabic ? "هل لا تزال لديك أسئلة؟" : "Still Have Questions?"}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {isArabic
                  ? "نحن هنا للمساعدة! احجز مكالمة مجانية أو أرسل لنا رسالة على WhatsApp للحصول على رد فوري"
                  : "We're here to help! Book a free call or message us on WhatsApp for instant response"}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/40"
                >
                  <Link href="/book" className="flex items-center gap-2">
                    {isArabic ? "احجز استشارة مجانية" : "Book Free Consultation"}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-primary/40 hover:border-primary hover:bg-primary/10"
                >
                  <a 
                    href={`https://wa.me/971503385859`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {isArabic ? "راسلنا على WhatsApp" : "Message on WhatsApp"}
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

