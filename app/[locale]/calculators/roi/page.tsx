import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { site } from "@/content/site";
import { RoiCalculatorClient } from "./roi-calculator-client";

export const metadata: Metadata = {
  title: "ROI Calculator - Calculate Your Automation Returns",
  description: "Calculate the exact return on investment for your automation project. See how much you'll save in time, costs, and efficiency with accurate ROI projections.",
  alternates: {
    canonical: `${site.brand.domain}/calculators/roi`,
    languages: {
      'en': `${site.brand.domain}/en/calculators/roi`,
      'ar': `${site.brand.domain}/ar/calculators/roi`,
    },
  },
};

export default async function RoiCalculatorPage() {
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
          <div className="container mx-auto text-center">
            <div className="inline-block mb-8">
              <span className="px-8 py-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-lg font-bold backdrop-blur-sm">
                {isArabic ? "حاسبة العائد على الاستثمار" : "ROI Calculator"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              {isArabic ? "احسب عائدك على الاستثمار" : "Calculate Your ROI"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {isArabic
                ? "اكتشف بالضبط كم ستوفر في الوقت والتكاليف والكفاءة مع الأتمتة"
                : "Discover exactly how much you'll save in time, costs, and efficiency with automation"}
            </p>
          </div>
        </section>

        <RoiCalculatorClient isArabic={isArabic} />
      </main>
      <Footer />
    </>
  );
}

