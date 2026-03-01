import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ContactForm } from "./contact-form";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Mail, CheckCircle2, Sparkles, Twitter, Linkedin, Youtube } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Let's Build Together",
  description: "Get in touch to discuss your automation needs. Book a free call or send us a message.",
  alternates: {
    canonical: "https://www.zeerotoai.com/contact",
    languages: {
      'en': "https://www.zeerotoai.com/en/contact",
      'ar': "https://www.zeerotoai.com/ar/contact",
    },
  },
};

export default async function ContactPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="circuit-pattern absolute inset-0 opacity-[0.03]" />
          
          {/* Floating orbs */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-32 px-4">
          <div className="container mx-auto text-center">
            <div className="inline-block px-8 py-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-lg font-bold backdrop-blur-sm mb-12">
              <span>{isArabic ? "ابدأ رحلتك" : "Start Your Journey"}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-12 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              {isArabic ? "لنبني شيئًا رائعًا معًا" : "Let's Build Something Great Together"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {isArabic
                ? "لديك مشروع في ذهنك؟ دعنا نتحدث عن كيفية أتمتة سير عملك وتحويل أفكارك إلى واقع"
                : "Have a project in mind? Let's discuss how we can automate your workflow and turn your ideas into reality"}
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="relative z-10 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch">
              {/* Form */}
              <div className="flex flex-col">
                <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden relative h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                  <div className="p-8 relative z-10 flex-1 flex flex-col">
                    <h2 className="text-3xl font-bold mb-6">
                      {isArabic ? "أرسل لنا رسالة" : "Send Us a Message"}
                    </h2>
                    <ContactForm isArabic={isArabic} />
                  </div>
                </Card>
              </div>

              {/* Direct Contact */}
              <div className="flex flex-col space-y-8">
                <div className="flex-1 flex flex-col">
                  <h2 className="text-3xl font-bold mb-6">
                    {isArabic ? "أو تواصل مباشرة" : "Or Reach Out Directly"}
                  </h2>
                  <div className="space-y-4 flex-1">
                    <Card className="group relative overflow-hidden border-2 border-primary/30 hover:border-primary/60 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                      <a
                        href={site.brand.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-6"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-110 transition-all">
                          <MessageCircle className="h-6 w-6 text-background" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-lg group-hover:text-primary transition-colors">
                            {isArabic ? "الدردشة على واتساب" : "Chat on WhatsApp"}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {isArabic ? "رد فوري" : "Instant response"}
                          </div>
                        </div>
                        <Sparkles className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Card>

                    <Card className="group relative overflow-hidden border-2 border-primary/30 hover:border-primary/60 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                      <a
                        href={`mailto:${site.brand.email}`}
                        className="flex items-center gap-4 p-6"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-110 transition-all">
                          <Mail className="h-6 w-6 text-background" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-lg group-hover:text-primary transition-colors">
                            {isArabic ? "راسلنا عبر البريد الإلكتروني" : "Email Us"}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {site.brand.email}
                          </div>
                        </div>
                        <Sparkles className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Card>

                    <Card className="group relative overflow-hidden border-2 border-primary/30 hover:border-primary/60 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                      <div className="flex items-center gap-4 p-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-110 transition-all flex-shrink-0">
                          <Sparkles className="h-6 w-6 text-background" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-lg group-hover:text-primary transition-colors">
                            {isArabic ? "تابعنا على وسائل التواصل" : "Follow Us"}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {isArabic ? "ابقَ على اطلاع بآخر الأخبار" : "Stay updated"}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <a
                            href={site.socials.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X (Twitter)"
                            className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center border border-primary/30 hover:border-primary/60 transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                          >
                            <Twitter className="h-4 w-4 text-primary" />
                          </a>
                          <a
                            href={site.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center border border-primary/30 hover:border-primary/60 transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                          >
                            <Linkedin className="h-4 w-4 text-primary" />
                          </a>
                          <a
                            href={site.socials.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center border border-primary/30 hover:border-primary/60 transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                          >
                            <Youtube className="h-4 w-4 text-primary" />
                          </a>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Card>
                  </div>
                </div>

                {/* What to Expect */}
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-card/50 to-card/50 backdrop-blur-sm p-6">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    {isArabic ? "ما يمكن توقعه" : "What to Expect"}
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        en: "Response within 24 hours",
                        ar: "رد خلال 24 ساعة",
                      },
                      {
                        en: "Free 30-minute discovery call",
                        ar: "مكالمة تعريفية مجانية مدتها 30 دقيقة",
                      },
                      {
                        en: "Custom proposal with pricing",
                        ar: "اقتراح مخصص مع التسعير",
                      },
                      {
                        en: "No commitment until you're ready",
                        ar: "عدم الالتزام حتى تكون مستعدًا",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-muted-foreground">
                          {isArabic ? item.ar : item.en}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

