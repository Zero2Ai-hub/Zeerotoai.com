import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { site } from "@/content/site";
import { PricingClient } from "./pricing-client";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing & Investment Guide - Transparent Automation Costs",
  description: "Clear pricing for AI automation services. From simple workflows to enterprise solutions. Investment ranges start from $1,080. All prices are estimates based on your specific needs.",
  alternates: {
    canonical: `${site.brand.domain}/pricing`,
    languages: {
      'en': `${site.brand.domain}/en/pricing`,
      'ar': `${site.brand.domain}/ar/pricing`,
    },
  },
};

export default async function PricingPage() {
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
          
          {/* Floating orbs - Optimized for performance */}
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-4 px-4">
          <div className="container mx-auto text-center max-w-5xl">
            <div className="inline-block mb-8">
              <span className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm sm:text-base md:text-lg font-bold whitespace-nowrap">
                {isArabic ? "تسعير شفاف ونتائج مثبتة" : "Transparent Pricing • Proven Results"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              {isArabic ? "استثمر في أتمتة تحقق النتائج" : "Invest in Automation That Delivers"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              {isArabic
                ? "نطاقات استثمار واضحة، بدون مفاجآت، ونتائج قابلة للقياس. جميع الأسعار تقديرات تعتمد على احتياجاتك المحددة"
                : "Clear investment ranges, no surprises, and measurable results. All prices are estimates based on your specific needs"}
            </p>
            
            <div className="flex flex-col gap-4 justify-center items-center">
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#pain-points" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/60 transition-all hover:scale-105"
                >
                  {isArabic ? "ما هو تحديك؟" : "What's Your Challenge?"}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a 
                  href="#investment-ranges" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-background hover:bg-muted border-2 border-primary/30 hover:border-primary/50 text-foreground font-bold text-lg transition-all hover:scale-105"
                >
                  {isArabic ? "عرض النطاقات" : "View Ranges"}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              {/* Calculator CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 text-sm">
                <Link 
                  href="/calculators/cost" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-card/50 hover:bg-card border border-primary/20 hover:border-primary/40 text-foreground font-semibold transition-all hover:scale-105"
                  style={{ animation: "glowPulse 2s ease-in-out infinite" }}
                >
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  {isArabic ? "حاسبة التكلفة" : "Cost Calculator"}
                </Link>
                <Link 
                  href="/calculators/roi" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-card/50 hover:bg-card border border-primary/20 hover:border-primary/40 text-foreground font-semibold transition-all hover:scale-105"
                  style={{ animation: "glowPulse 2s ease-in-out infinite", animationDelay: "1s" }}
                >
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {isArabic ? "حاسبة العائد على الاستثمار" : "ROI Calculator"}
                </Link>
              </div>
            </div>

            {/* Ready-Made Packages CTA */}
            <div className="flex justify-center mt-6 mb-0">
              <a 
                href="#ready-made-packages" 
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border-2 border-cyan-500/40 hover:border-cyan-500/60 text-foreground font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-cyan-500/30"
              >
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {isArabic ? "حلول جاهزة؟ تسليم في أيام" : "Need It Fast? Ready-Made Solutions"}
              </a>
            </div>
          </div>
        </section>

        <PricingClient isArabic={isArabic} />
      </main>
      <Footer />
    </>
  );
}

