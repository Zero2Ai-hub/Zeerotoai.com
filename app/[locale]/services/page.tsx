import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { site } from "@/content/site";
import { ServicesDetailClient } from "./services-detail-client";

export const metadata: Metadata = {
  title: "E-commerce Automation Services — Zeerotoai",
  description: "Every part of your store operations — automated and running without you. UAE/GCC e-commerce brands.",
  alternates: {
    canonical: "https://www.zeerotoai.com/services",
    languages: {
      en: "https://www.zeerotoai.com/en/services",
      ar: "https://www.zeerotoai.com/ar/services",
    },
  },
};

export default async function ServicesPage() {
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

        {/* Services Detail Sections */}
        <ServicesDetailClient services={site.services} />
      </main>
      <Footer />
    </>
  );
}

