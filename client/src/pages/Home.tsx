/*
 * LIFT MEDIA — Home Page
 * Design: Premium SaaS × Fitness Media — Dark Mode
 * All sections assembled here with shared modal state
 */
import { useState, useEffect } from "react";
import { useGlobalScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import PainPointsSection from "@/components/PainPointsSection";
import ContentMultiplicationSection from "@/components/ContentMultiplicationSection";
import ServicesSection from "@/components/ServicesSection";
import LeadMagnetsSection from "@/components/LeadMagnetsSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import FloatingCTA from "@/components/FloatingCTA";
import InlineCTABanner from "@/components/InlineCTABanner";
import WalkingWeightlifter from "@/components/WalkingWeightlifter";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState<string | undefined>();

  // Global scroll reveal for all sections
  useGlobalScrollReveal();

  // Trigger hero reveals immediately on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".hero-section .reveal").forEach(el => el.classList.add("visible"));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (source?: string) => {
    setModalSource(source);
    setModalOpen(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F" }}>
      <Navbar onOpenModal={() => openModal()} />

      <HeroSection onOpenModal={() => openModal()} />
      <StatsBar />
      <PainPointsSection onOpenModal={() => openModal()} />
      <ContentMultiplicationSection onOpenModal={() => openModal("checklist")} />
      <ServicesSection onOpenModal={() => openModal()} />

      {/* Inline CTA after services */}
      <div style={{ background: "#111118" }}>
        <div className="container">
          <InlineCTABanner
            headline="Busy Gym Owners Need Systems, Not More Tasks."
            sub="Stop starting from scratch every time you post. Get the content system built for gym operators."
            cta="Get Early Access"
            onOpenModal={() => openModal()}
          />
        </div>
      </div>

      <CaseStudiesSection onOpenModal={() => openModal()} />
      <ProcessSection onOpenModal={() => openModal()} />
      <LeadMagnetsSection onOpenModal={openModal} />
      <FAQSection onOpenModal={() => openModal()} />

      {/* Inline CTA after FAQ */}
      <div style={{ background: "#111118", padding: "0 0 1rem" }}>
        <div className="container">
          <InlineCTABanner
            headline="Gym owners winning online aren't posting more. They're posting with a strategy."
            sub="Stop guessing what to post. Get the free content system checklist and start turning every coaching moment into a week of content."
            cta="Get The Free Checklist"
            onOpenModal={() => openModal("checklist")}
          />
        </div>
      </div>

      <NewsletterSection onOpenModal={() => openModal()} />
      <FinalCTASection onOpenModal={() => openModal()} />
      <Footer onOpenModal={() => openModal()} />

      <FloatingCTA onOpenModal={() => openModal()} />

      <EarlyAccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source={modalSource}
      />
    </div>
  );
}
