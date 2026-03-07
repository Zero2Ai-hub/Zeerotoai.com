import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Zeerotoai — Converting Landing Pages for UAE & GCC | AED 1,500",
  description: "Landing pages that get UAE businesses more customers. Mobile-first, Arabic + English, delivered in 5 days. Clinics, salons, restaurants, contractors. From AED 1,500.",
  alternates: {
    canonical: "https://www.zeerotoai.com",
  },
};
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyUs } from "@/components/sections/why-us";
import { CaseStudy } from "@/components/sections/case-study";


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
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
