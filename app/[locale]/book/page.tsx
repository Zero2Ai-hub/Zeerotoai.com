import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingClient } from "./booking-client";
import { getLocale } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Automation Audit | Zeerotoai",
  description: "Book your free 30-minute automation audit. We identify your highest-ROI automation and show you how to build it in 30 days.",
};

export default async function BookPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";
  const calendlyUrl = "https://calendly.com/zeero-to-ai/website";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <BookingClient calendlyUrl={calendlyUrl} isArabic={isArabic} />
      </main>
      <Footer />
    </>
  );
}
