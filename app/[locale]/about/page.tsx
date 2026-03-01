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
            <div className="inline-block mb-12">
              <span className="px-8 py-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-lg font-bold backdrop-blur-sm">
                {isArabic ? "عن Zeerotoai" : "About Zeerotoai"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-12 bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              {isArabic ? "نحن مشغّلون، لسنا مستشارين." : "We Are Operators, Not Consultants."}
            </h1>
            
            {/* Enhanced mission statement with visual interest */}
            <div className="max-w-4xl mx-auto">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-2xl" />
                
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-2xl" />
                
                <div className="text-xl md:text-2xl font-semibold text-foreground/90 leading-relaxed relative z-10 space-y-4">
                  {isArabic ? (
                    <>
                      <p>
                        <span className="text-primary font-bold">نحن نؤمن </span>
                        أن كل مهمة متكررة هي مشكلة تنتظر الحل.
                      </p>
                      <p>
                        مهمتنا هي بناء أتمتة ذكية تحرر وقتك حتى تتمكن من التركيز على ما يهم حقًا:
                      </p>
                      <p className="relative inline-block">
                        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-bold text-2xl md:text-3xl">
                          النمو والإبداع والتأثير
                        </span>
                        <span className="absolute inset-0 bg-primary/20 blur-xl -z-10" />
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <span className="text-primary font-bold">We believe </span>
                        every repetitive task is a problem waiting to be solved.
                      </p>
                      <p>
                        Our mission is to build intelligent automations that free up your time so you can focus on what truly matters:
                      </p>
                      <p className="relative inline-block">
                        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-bold text-2xl md:text-3xl">
                          Growth, Creativity, and Impact
                        </span>
                        <span className="absolute inset-0 bg-primary/20 blur-xl -z-10" />
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutClient isArabic={isArabic} about={site.about} />
      </main>
      <Footer />
    </>
  );
}

