import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { site } from "@/content/site";
import { PackageDetail } from "./package-detail";
import { notFound } from "next/navigation";

// Package slugs
const packageSlugs = [
  "ai-chatbot",
  "lead-generation-system",
  "social-media-automation",
  "ecommerce-starter-kit",
  "email-marketing-automation",
  "multi-channel-support-bot"
];

export async function generateStaticParams() {
  return packageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  // Package names for metadata
  const packageNames: Record<string, string> = {
    "ai-chatbot": "Basic AI Chatbot - $1,480",
    "lead-generation-system": "Lead Generation System - $4,050",
    "social-media-automation": "Social Media Automation Suite - $5,400",
    "ecommerce-starter-kit": "E-commerce Starter Kit - $3,600",
    "email-marketing-automation": "Email Marketing Automation - $2,700",
    "multi-channel-support-bot": "Multi-Channel Support Bot - $4,950"
  };

  const title = packageNames[slug] || "Productized Package";

  return {
    title: `${title} | Zero2AI`,
    description: `Get your automation up and running in days with our ${title}. Fixed price, fast delivery, proven results.`,
    alternates: {
      canonical: `${site.brand.domain}/packages/${slug}`,
      languages: {
        'en': `${site.brand.domain}/en/packages/${slug}`,
        'ar': `${site.brand.domain}/ar/packages/${slug}`,
      },
    },
  };
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const locale = await getLocale();
  const isArabic = locale === "ar";
  const { slug } = await params;

  // Validate slug
  if (!packageSlugs.includes(slug)) {
    notFound();
  }

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

        <PackageDetail slug={slug} isArabic={isArabic} />
      </main>
      <Footer />
    </>
  );
}

