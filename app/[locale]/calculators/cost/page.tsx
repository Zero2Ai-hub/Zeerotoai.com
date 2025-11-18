import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { site } from "@/content/site";
import { CostCalculatorClient } from "./cost-calculator-client";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cost Calculator - Estimate Your Project Investment",
  description: "Get an accurate estimate for your automation project cost. Calculate pricing based on service type, complexity, integrations, and timeline.",
  alternates: {
    canonical: `${site.brand.domain}/calculators/cost`,
    languages: {
      'en': `${site.brand.domain}/en/calculators/cost`,
      'ar': `${site.brand.domain}/ar/calculators/cost`,
    },
  },
};

export default async function CostCalculatorPage() {
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-12 px-4">
          <div className="container mx-auto">
            {/* Back to Pricing Link */}
            <Link 
              href="/pricing"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
            >
              <svg 
                className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">
                {isArabic ? "العودة إلى التسعير" : "Back to Pricing"}
              </span>
            </Link>

            <div className="text-center">
              <div className="inline-block mb-8">
                <span className="px-8 py-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-lg font-bold backdrop-blur-sm">
                  {isArabic ? "حاسبة التكلفة" : "Cost Calculator"}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                {isArabic ? "احسب تكلفة مشروعك" : "Estimate Your Project Cost"}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {isArabic
                  ? "احصل على تقدير دقيق للاستثمار بناءً على احتياجاتك المحددة"
                  : "Get an accurate investment estimate based on your specific requirements"}
              </p>
            </div>
          </div>
        </section>

        <CostCalculatorClient isArabic={isArabic} />
      </main>
      <Footer />
    </>
  );
}

