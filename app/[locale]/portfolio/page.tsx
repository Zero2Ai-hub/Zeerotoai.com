import { getLocale } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PortfolioGrid } from "./portfolio-grid";
import { site } from "@/content/site";

export const metadata = {
  title: "Portfolio | Zero2AI",
  description: "Live automation systems running for real e-commerce stores in UAE/GCC.",
  alternates: {
    canonical: "https://www.zeerotoai.com/portfolio",
    languages: {
      'en': "https://www.zeerotoai.com/en/portfolio",
      'ar': "https://www.zeerotoai.com/ar/portfolio",
    },
  },
};

export default async function PortfolioPage() {
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
            <span className="inline-block px-5 py-2 rounded-full bg-primary/15 text-primary border border-primary/30 text-sm font-bold mb-6 tracking-wide">
              {isArabic ? "أعمالنا" : "Our Work"}
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-5 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
              {isArabic ? "أنظمة حقيقية. نتائج حقيقية." : "Real Systems. Real Results."}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {isArabic
                ? "لا نعرض نماذج. هذه أنظمة حية تعمل في متاجر حقيقية الآن."
                : "No mockups. No case study theatre. These are live automations running right now."}
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <PortfolioGrid projects={site.portfolio} isArabic={isArabic} />
      </main>
      <Footer />
    </>
  );
}
