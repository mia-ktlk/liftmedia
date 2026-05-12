import { useEffect, useRef } from "react";
import ElectricHeading from "@/components/ElectricHeading";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Analyze Your Gym", desc: "We audit your current content, audience, and competitors to identify the fastest path to growth for your specific gym." },
  { num: "02", title: "Build Your Content Strategy", desc: "We create a custom content plan based on your gym's strengths, your market, and the content formats that convert best for your niche." },
  { num: "03", title: "Create High-Converting Scripts", desc: "Our team writes hooks and scripts that capture your coaching voice and turn your expertise into content that stops the scroll." },
  { num: "04", title: "Edit & Optimize", desc: "Professional editing with captions, sound design, and format optimization for every platform — Reels, TikTok, YouTube Shorts." },
  { num: "05", title: "Automate Follow-Up", desc: "We set up the lead capture systems and automations that turn viewers into leads and leads into booked consultations." },
  { num: "06", title: "Scale Membership Growth", desc: "Monthly strategy reviews, performance analytics, and continuous optimization to compound your results over time." },
];

interface ProcessSectionProps {
  onOpenModal: () => void;
}

export default function ProcessSection({ onOpenModal }: ProcessSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal, .stagger").forEach(e => e.classList.add("visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="section-blue-gradient" style={{ padding: "6rem 0" }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label" style={{ color: "rgba(255,255,255,0.65)" }}>How It Works</span>
          <ElectricHeading as="h2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Simple. Systematic. Scalable.
          </ElectricHeading>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.85)", maxWidth: "520px", margin: "0 auto" }}>
            From your first coaching session to a full content engine — here's exactly how Lift Media works.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="stagger">
            {steps.map((step, i) => (
              <div key={step.num} style={{ display: "flex", gap: "1.5rem", marginBottom: i < steps.length - 1 ? "0" : "0" }}>
                {/* Left: number + connector */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: 52, height: 52,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #3B82F6, #818CF8)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.875rem",
                    color: "#fff",
                    flexShrink: 0,
                    boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                  }}>
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: "2.5rem", background: "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.1))", margin: "0.375rem 0" }} />
                  )}
                </div>

                {/* Right: content */}
                <div style={{ paddingBottom: i < steps.length - 1 ? "2.5rem" : "0", paddingTop: "0.75rem" }}>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1875rem", color: "#ffffff", marginBottom: "0.5rem" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <button className="btn-primary process-cta-btn" onClick={onOpenModal} style={{ fontSize: "1rem" }}>
            Start Your Content System <ArrowRight size={16} />
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .process-cta-btn { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
