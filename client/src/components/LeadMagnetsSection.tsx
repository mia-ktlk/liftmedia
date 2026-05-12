import { useEffect, useRef } from "react";
import ElectricHeading from "@/components/ElectricHeading";
import { Download, ArrowRight } from "lucide-react";

const magnets = [
  {
    title: "50 Viral Hooks For Gyms",
    desc: "Stop the scroll instantly. 50 proven opening lines for gym reels that drive views and saves.",
    tag: "Reels",
    source: "viral-hooks",
  },
  {
    title: "Gym Reel Script Checklist",
    desc: "The exact structure for a high-converting gym reel — from hook to CTA in under 60 seconds.",
    tag: "Scripts",
    source: "checklist",
  },
  {
    title: "30-Day Gym Content Calendar",
    desc: "A complete month of content ideas, themes, and formats — ready to execute immediately.",
    tag: "Planning",
    source: "calendar",
  },
  {
    title: "AI Prompt Pack For Gym Owners",
    desc: "50+ AI prompts that generate captions, scripts, and hooks specifically for fitness businesses.",
    tag: "AI Tools",
    source: "checklist",
  },
  {
    title: "How To Turn Reels Into Memberships",
    desc: "The exact funnel strategy that converts reel viewers into booked consultations and new members.",
    tag: "Strategy",
    source: "checklist",
  },
  {
    title: "Instagram Bio Optimization Checklist",
    desc: "Turn your Instagram bio into a lead generation machine with this step-by-step checklist.",
    tag: "Instagram",
    source: "checklist",
  },
];

interface LeadMagnetsSectionProps {
  onOpenModal: (source?: string) => void;
}

export default function LeadMagnetsSection({ onOpenModal }: LeadMagnetsSectionProps) {
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
    <section id="resources" ref={sectionRef} style={{ padding: "6rem 0", background: "#111118" }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">Free Resources</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Your Gym Already Has Great Content.<br />
            <span className="gradient-text">We Help You Capture It.</span>
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#7070A0", maxWidth: "560px", margin: "0 auto" }}>
            Download free resources built specifically for gym owners. No fluff — just actionable systems you can use this week.
          </p>
        </div>

        <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "1.25rem" }}>
          {magnets.map((m) => (
            <div
              key={m.title}
              className="lift-card"
              style={{ padding: "1.75rem", display: "flex", flexDirection: "column", background: "#ffffff", border: "1px solid #e5e7eb", overflow: "hidden" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div style={{ background: "rgba(59,130,246,0.1)", borderRadius: "0.375rem", padding: "0.625rem" }}>
                  <Download size={18} color="#3B82F6" />
                </div>
                <span style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: "999px", padding: "0.2rem 0.625rem", fontSize: "0.75rem", fontWeight: 600, color: "#2563eb" }}>
                  {m.tag}
                </span>
              </div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "#0a0a0f", marginBottom: "0.625rem", lineHeight: 1.3 }}>{m.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#4a4a5a", lineHeight: 1.65, marginBottom: "1.5rem", flex: 1 }}>{m.desc}</p>
              <button
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "0.6875rem" }}
                onClick={() => onOpenModal(m.source)}
              >
                Get Free Resource <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Mid-section CTA */}
        <div className="reveal lead-magnets-pack-cta" style={{ marginTop: "3rem", textAlign: "center", paddingLeft: "0.25rem", paddingRight: "0.25rem" }}>
          <p style={{ color: "#7070A0", marginBottom: "1rem" }}>Want all 6 resources in one pack?</p>
          <button className="btn-primary lead-pack-btn" onClick={() => onOpenModal("checklist")} style={{ fontSize: "clamp(0.875rem, 3.2vw, 1rem)", maxWidth: "100%", boxSizing: "border-box" }}>
            Get The Complete Gym Growth Resource Pack <ArrowRight size={16} style={{ flexShrink: 0 }} />
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .lead-pack-btn {
            width: 100% !important;
            max-width: 100% !important;
            justify-content: center !important;
          }
          .lead-magnets-pack-cta { padding-left: 0 !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}
