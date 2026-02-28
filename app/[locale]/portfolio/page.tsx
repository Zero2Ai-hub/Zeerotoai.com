import { getLocale } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PortfolioGrid } from "./portfolio-grid";
import { site } from "@/content/site";

export const metadata = {
  title: "Portfolio | Zeerotoai",
  description: "Explore our portfolio of AI automation projects",
  alternates: {
    canonical: `${site.brand.domain}/portfolio`,
    languages: {
      'en': `${site.brand.domain}/en/portfolio`,
      'ar': `${site.brand.domain}/ar/portfolio`,
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
            <div className="inline-block mb-12">
              <span className="px-8 py-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-lg font-bold backdrop-blur-sm">
                {isArabic ? "أعمالنا" : "Our Work"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-12 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              {isArabic ? "مشاريع تحكي قصص نجاح" : "Projects That Tell Success Stories"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {isArabic
                ? "حلول أتمتة حقيقية بنتائج قابلة للقياس، من الفكرة إلى التنفيذ الكامل"
                : "Real automation solutions with measurable results, from idea to full execution"}
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
