"use client";

import { DemoHero } from "./demo";
import { BentoGridSection } from "@/components/ui/bento-grid-section";
import { WorkshopSection } from "@/components/ui/workshop-section";
import { WorkshopDetailsSection } from "@/components/ui/workshop-details-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { WhoIsTraceySection } from "@/components/ui/who-is-tracey-section";
import { FAQSection } from "@/components/ui/faq-section";
import { FooterSection } from "@/components/ui/footer-section";

export default function Page() {
  return (
    <>
      <DemoHero />
      <BentoGridSection />
      <WorkshopSection />
      <WorkshopDetailsSection />
      <TestimonialsSection />
      <WhoIsTraceySection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
