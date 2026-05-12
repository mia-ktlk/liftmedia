import { useEffect, useRef } from "react";
import ElectricHeading from "@/components/ElectricHeading";
import { ArrowRight, Calendar } from "lucide-react";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export default function FinalCTASection({ onOpenModal }: FinalCTASectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach(e => e.classList.add("visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "8rem 0 9rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated gradient background */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(-45deg, #1a3a8f, #1e4fd6, #1447c0, #2563eb, #1d4ed8)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 10s ease infinite",
        zIndex: 0,
      }} />

      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 65%)", pointerEvents: "none", zIndex: 1 }} />
      <div style={{ position: "absolute", top: "20%", right: "10%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)", pointerEvents: "none", zIndex: 1 }} />

      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <div className="reveal">
          <span className="section-label" style={{ display: "block", marginBottom: "1.5rem", color: "rgba(255,255,255,0.7)" }}>Your Expertise Deserves An Audience</span>
          <ElectricHeading as="h2" className="final-cta-heading" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 6vw, 4.5rem)", color: "#F0F0F5", marginBottom: "1.5rem", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "800px", margin: "0 auto 1.5rem" }}>
            You're Already The Expert. Your Content Should Show It.
          </ElectricHeading>
          <p className="final-cta-body" style={{ fontSize: "clamp(0.9375rem, 3vw, 1.1875rem)", color: "rgba(255,255,255,0.75)", maxWidth: "580px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            You've spent years mastering your craft. Your marketing should match your expertise — not be an afterthought. Let's build a content system that finally reflects the quality of what you do.
          </p>

          <div className="final-cta-btns" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <button className="btn-primary final-cta-btn" onClick={onOpenModal} style={{ fontSize: "1.0625rem", padding: "1rem 2.25rem" }}>
              <Calendar size={18} /> Book A Strategy Call
            </button>
            <button className="btn-outline final-cta-btn" onClick={onOpenModal} style={{ fontSize: "1.0625rem", padding: "1rem 2.25rem", borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
              Get Free Resources <ArrowRight size={16} />
            </button>
          </div>

          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
            No commitment. No credit card. Just a conversation about your gym's growth.
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .final-cta-heading { font-size: 1.75rem !important; }
          .final-cta-body { font-size: 0.9375rem !important; }
          .final-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .final-cta-btn { width: 100% !important; justify-content: center !important; font-size: 1rem !important; }
        }
      `}</style>
    </section>
  );
}
