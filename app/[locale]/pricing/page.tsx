import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { PricingClient } from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing — Zeerotoai E-commerce Automation",
  description: "Transparent automation packages for UAE/GCC e-commerce brands. From 3,000 AED. You own the system. Live in 2 weeks.",
  alternates: {
    canonical: "https://www.zeerotoai.com/pricing",
    languages: {
      en: "https://www.zeerotoai.com/en/pricing",
      ar: "https://www.zeerotoai.com/ar/pricing",
    },
  },
};

export default async function PricingPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <PricingClient isArabic={isArabic} />
      </main>
      <Footer />
    </>
  );
}
