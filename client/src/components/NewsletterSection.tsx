import { useEffect, useRef } from "react";
import ElectricHeading from "@/components/ElectricHeading";
import { Mail, ArrowRight } from "lucide-react";

const snippets = [
  { tag: "Strategy", title: "Why Educational Content Converts Better Than Motivational Content", read: "4 min read" },
  { tag: "Reels", title: "The 7-Second Hook Formula That Stops Gym Owners From Losing Viewers", read: "3 min read" },
  { tag: "SEO", title: "How To Rank Your Gym On Google Without Paying For Ads", read: "6 min read" },
  { tag: "AI Tools", title: "Using AI To Create 30 Days Of Gym Content In One Afternoon", read: "5 min read" },
];

interface NewsletterSectionProps {
  onOpenModal: () => void;
}

export default function NewsletterSection({ onOpenModal }: NewsletterSectionProps) {
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
    <section ref={sectionRef} className="section-navy" style={{ padding: "6rem 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(1.5rem, 4vw, 4rem)", alignItems: "center", minWidth: 0 }} className="newsletter-grid">

          {/* Left */}
          <div className="reveal newsletter-copy" style={{ minWidth: 0 }}>
            <span className="section-label" style={{ color: "rgba(255,255,255,0.6)" }}>Gym Growth Newsletter</span>
            <ElectricHeading as="h2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Marketing Advice Gym Owners Actually Need.
            </ElectricHeading>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              Weekly strategies, content ideas, and growth tactics delivered straight to your inbox. No fluff. No filler. Just actionable advice from the people who live and breathe gym marketing.
            </p>

            <div className="newsletter-join-row" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button className="btn-primary newsletter-join-btn" onClick={onOpenModal} style={{ fontSize: "0.9375rem" }}>
                <Mail size={16} style={{ flexShrink: 0 }} /> Join The Gym Growth Newsletter
              </button>
            </div>

            <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
              {["Free forever", "Weekly drops"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.6)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — content previews */}
          <div className="stagger newsletter-snippet-list" style={{ display: "flex", flexDirection: "column", gap: "0.875rem", minWidth: 0, width: "100%" }}>
            {snippets.map((s) => (
              <div
                key={s.title}
              className="lift-card-on-blue newsletter-snippet"
              style={{ padding: "1.125rem 1.25rem", display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer", maxWidth: "100%", boxSizing: "border-box" }}
                onClick={onOpenModal}
              >
                <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "999px", padding: "0.2rem 0.625rem", fontSize: "0.7rem", fontWeight: 700, color: "#fff", flexShrink: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {s.tag}
                </span>
                <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
                  <div style={{ fontSize: "clamp(0.8125rem, 2.8vw, 0.9rem)", fontWeight: 600, color: "#F0F0F5", lineHeight: 1.45, marginBottom: "0.25rem", overflowWrap: "anywhere", wordBreak: "break-word" }}>{s.title}</div>
                  <div style={{ fontSize: "0.75rem", color: "#7070A0" }}>{s.read}</div>
                </div>
                <ArrowRight size={15} color="#7070A0" style={{ flexShrink: 0, marginTop: "0.15rem" }} className="newsletter-snippet-arrow" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .newsletter-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .newsletter-copy { max-width: 100%; overflow: hidden; }
          .newsletter-join-row { width: 100%; }
          .newsletter-join-btn { width: 100% !important; justify-content: center !important; }
        }
        @media (max-width: 480px) {
          .newsletter-snippet {
            flex-wrap: wrap !important;
            padding: 1rem !important;
          }
          .newsletter-snippet-arrow {
            margin-left: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
