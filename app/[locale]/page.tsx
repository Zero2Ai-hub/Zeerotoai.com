import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Zeerotoai — AI Automation for E-commerce | UAE & GCC",
  description: "We automate your entire e-commerce operation — sourcing, listings, fulfillment, Amazon ads, TikTok content. UAE/GCC brands. Live in 2 weeks.",
  alternates: {
    canonical: "https://www.zeerotoai.com",
  },
};
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyUs } from "@/components/sections/why-us";
import { CaseStudy } from "@/components/sections/case-study";
import { TechStack } from "@/components/sections/tech-stack";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { CtaSection } from "@/components/sections/cta-section";
import { CircuitDivider } from "@/components/circuit-divider";
import { TrustedBy } from "@/components/sections/trusted-by";
import { PreloadHeroImage } from "@/components/preload-hero-image";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function HomePage() {
  return (
    <>
      <PreloadHeroImage />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <CircuitDivider />
        <ServicesPreview />
        <CircuitDivider />
        <WhyUs />
        <CircuitDivider />
        <CaseStudy />
        <CircuitDivider />
        <TechStack />
        <CircuitDivider />
        <CircuitDivider />
        <PortfolioPreview />
        <CircuitDivider />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
