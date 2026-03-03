import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { AboutClient } from "./about-client";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Zeerotoai — We Are Operators, Not Consultants",
  description: "We started Zeerotoai running our own e-commerce store. Now we build the same automation systems for other UAE/GCC brands.",
  alternates: {
    canonical: "https://www.zeerotoai.com/about",
    languages: {
      'en': "https://www.zeerotoai.com/en/about",
      'ar': "https://www.zeerotoai.com/ar/about",
    },
  },
};

export default async function AboutPage() {
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
            <span className="inline-block px-5 py-2 rounded-full bg-primary/15 text-primary border border-primary/30 text-sm font-bold mb-6 tracking-wide">
              {isArabic ? "عن Zeerotoai" : "About Zeerotoai"}
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-5 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
              {isArabic ? "نحن مشغّلون، لسنا مستشارين." : "We Are Operators, Not Consultants."}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isArabic
                ? "نبني أنفس الأنظمة التي تشغّل عملياتنا — ثم نسلّمها لك."
                : "We build the same systems running our own operations — then hand them over to you."}
            </p>
          </div>
        </section>

        <AboutClient isArabic={isArabic} about={site.about} />
      </main>
      <Footer />
    </>
  );
}

