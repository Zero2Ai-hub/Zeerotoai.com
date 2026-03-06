import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LandingPagesClient } from "./landing-pages-client";
import { getLocale } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Converting Landing Pages for UAE Businesses | Zeerotoai",
  description:
    "Get a high-converting landing page built in 5 days. Designed for UAE SMBs — clinics, salons, restaurants, contractors. Starts from AED 1,500.",
  alternates: {
    canonical: "https://www.zeerotoai.com/landing-pages",
  },
  openGraph: {
    title: "Converting Landing Pages for UAE Businesses | Zeerotoai",
    description:
      "Not just a pretty page — built to get you customers. Delivered in 5 days. From AED 1,500.",
    url: "https://www.zeerotoai.com/landing-pages",
    siteName: "Zeerotoai",
    locale: "en_AE",
    type: "website",
  },
};

export default async function LandingPagesPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <LandingPagesClient isArabic={isArabic} />
      </main>
      <Footer />
    </>
  );
}
