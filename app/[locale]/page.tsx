import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { SuccessStoriesPreview } from "@/components/sections/success-stories-preview";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { CtaSection } from "@/components/sections/cta-section";
import { CircuitDivider } from "@/components/circuit-divider";

// Lazy load non-critical components (loaded after initial page render)
const FloatingCalculatorButton = dynamic(
  () => import("@/components/floating-calculator-button").then(mod => ({ default: mod.FloatingCalculatorButton }))
);

export default function HomePage() {
  return (
    <>
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
      <FloatingCalculatorButton />
    </>
  );
}

