import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { site } from "@/content/site";
import { FaqClient } from "./faq-client";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions About AI Automation",
  description: "Got questions about automation? Find answers about pricing, timelines, process, and more.",
  alternates: {
    canonical: `${site.brand.domain}/faq`,
    languages: {
      'en': `${site.brand.domain}/en/faq`,
      'ar': `${site.brand.domain}/ar/faq`,
    },
  },
};

export default async function FaqPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="circuit-pattern absolute inset-0 opacity-[0.03]" />
          
          {/* Floating orbs */}
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-12 px-4">
          <div className="container mx-auto text-center">
            <div className="inline-block mb-12">
              <span className="px-8 py-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-lg font-bold backdrop-blur-sm">
                {isArabic ? "الأسئلة الشائعة" : "FAQ"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-12 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              {isArabic ? "لديك أسئلة؟ لدينا إجابات" : "Got Questions? We've Got Answers"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {isArabic
                ? "كل ما تحتاج معرفته عن خدمات الأتمتة لدينا، العملية، والتسعير"
                : "Everything you need to know about our automation services, process, and pricing"}
            </p>
          </div>
        </section>

        <FaqClient isArabic={isArabic} />
      </main>
      <Footer />
    </>
  );
}

