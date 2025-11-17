import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { SuccessStoriesPreview } from "@/components/sections/success-stories-preview";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { CtaSection } from "@/components/sections/cta-section";
import { CircuitDivider } from "@/components/circuit-divider";
import { PreloadHeroImage } from "@/components/preload-hero-image";

export default function HomePage() {
  return (
    <>
      {/* Preload hero image ONLY on homepage for optimal performance */}
      <PreloadHeroImage />
      
      <Navbar />
      <main>
        <Hero />
        <CircuitDivider />
        <ServicesPreview />
        <CircuitDivider />
        <SuccessStoriesPreview />
        <CircuitDivider />
        <PortfolioPreview />
        <CircuitDivider />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

