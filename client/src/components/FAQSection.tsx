/**
 * FAQSection
 * Design: Dark #0A0A0F background, lift-card accordion items.
 * Each FAQ has:
 *   1. A unique resource CTA linking to a relevant resource/article
 *   2. A "Join Lift Media" button that opens the JoinCommunityModal
 */
import { useEffect, useRef, useState } from "react";
import ElectricHeading from "@/components/ElectricHeading";
import { ChevronDown, ArrowRight, Users } from "lucide-react";
import { Link } from "wouter";
import JoinCommunityModal from "./JoinCommunityModal";

const faqs = [
  {
    q: "How often should gyms post?",
    a: "Consistency beats frequency. 3–5 reels per week outperforms 1 post per day with no strategy. The gyms seeing the best results post with a clear content calendar — mixing educational, motivational, and behind-the-scenes content.",
    resourceLabel: "Get the 30-Day Content Calendar",
    resourceHref: "/resources/30-day-gym-content-calendar",
  },
  {
    q: "Do reels still work in 2025?",
    a: "Short-form video is the highest-ROI content format for gym businesses right now. Gyms using strategic reels are generating 10x more reach than static posts. The key is the hook — the first 2 seconds determine everything.",
    resourceLabel: "Read: The 7-Second Hook Formula",
    resourceHref: "/resources/7-second-hook-formula",
  },
  {
    q: "What kind of gym content converts best?",
    a: "Educational content converts better than motivational content. Teaching your audience something — a movement cue, a nutrition tip, a mindset principle — builds trust before someone walks through your door. Trust converts to memberships.",
    resourceLabel: "Read: Why Educational Content Converts",
    resourceHref: "/resources/educational-content-converts",
  },
  {
    q: "Should gym owners use AI for content?",
    a: "Yes — but strategically. AI is a tool for scale, not a replacement for your expertise. The gyms winning online use AI to repurpose their coaching knowledge faster, not to generate generic content. Your voice and expertise are your competitive advantage.",
    resourceLabel: "Take the Free AI in Gym Marketing Course",
    resourceHref: "/course/ai-gym-marketing",
  },
  {
    q: "How long should gym reels be?",
    a: "7–30 seconds for pure reach. 30–60 seconds for education and trust-building. The length should match the depth of the idea — never pad a reel to hit a time target. The hook matters more than the length.",
    resourceLabel: "Get the Gym Reel Script Checklist",
    resourceHref: "/resources/gym-reel-script-checklist",
  },
  {
    q: "Can content actually generate memberships?",
    a: "Absolutely — but only with the right funnel behind it. Views without a clear CTA, lead magnet, or follow-up system are just vanity metrics. The gyms generating memberships from content have a system that captures leads and converts them.",
    resourceLabel: "Read: How to Turn Reels Into Memberships",
    resourceHref: "/resources/reels-into-memberships",
  },
];

interface FAQSectionProps {
  onOpenModal: () => void;
}

export default function FAQSection({ onOpenModal }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [communityModalOpen, setCommunityModalOpen] = useState(false);
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
    <>
      <section id="faq" ref={sectionRef} style={{ padding: "6rem 0", background: "#0A0A0F" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">FAQ</span>
            <ElectricHeading as="h2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              Questions Gym Owners Ask
            </ElectricHeading>
            <p style={{ fontSize: "1.0625rem", color: "#7070A0", maxWidth: "500px", margin: "0 auto" }}>
              Straight answers to the questions that matter most for growing your gym with content.
            </p>
          </div>

          <div className="stagger" style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="lift-card"
                style={{ overflow: "hidden" }}
              >
                {/* Question row — clickable */}
                <div
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", gap: "1rem", cursor: "pointer" }}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#F0F0F5", lineHeight: 1.4 }}>{faq.q}</h3>
                  <ChevronDown
                    size={18}
                    color="#7070A0"
                    style={{ flexShrink: 0, transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
                  />
                </div>

                {/* Answer + CTAs */}
                {openIndex === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <p style={{ fontSize: "0.9375rem", color: "#9090B0", lineHeight: 1.75, paddingTop: "1rem", marginBottom: "1.25rem" }}>
                      {faq.a}
                    </p>

                    {/* Dual CTA row */}
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      {/* Resource CTA */}
                      <Link
                        href={faq.resourceHref}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "0.4rem",
                          background: "linear-gradient(135deg, #3B82F6, #6366F1)",
                          color: "#fff", textDecoration: "none",
                          padding: "0.625rem 1.125rem",
                          borderRadius: "0.5rem",
                          fontSize: "0.8125rem", fontWeight: 700,
                          transition: "opacity 0.2s",
                          whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {faq.resourceLabel} <ArrowRight size={13} />
                      </Link>

                      {/* Join Lift Media CTA */}
                      <button
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "0.4rem",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: "#C0C0D0",
                          padding: "0.625rem 1.125rem",
                          borderRadius: "0.5rem",
                          fontSize: "0.8125rem", fontWeight: 600,
                          cursor: "pointer",
                          transition: "border-color 0.2s, color 0.2s, background 0.2s",
                          whiteSpace: "nowrap",
                          fontFamily: "inherit",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
                          e.currentTarget.style.color = "#F0F0F5";
                          e.currentTarget.style.background = "rgba(59,130,246,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                          e.currentTarget.style.color = "#C0C0D0";
                          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                        }}
                        onClick={(e) => { e.stopPropagation(); setCommunityModalOpen(true); }}
                      >
                        <Users size={13} /> Join Lift Media
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Section-level CTA */}
          <div className="reveal" style={{ textAlign: "center", marginTop: "3rem" }}>
            <button className="btn-primary" onClick={onOpenModal} style={{ fontSize: "1rem" }}>
              Send Me The Free Resources <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Community modal */}
      <JoinCommunityModal isOpen={communityModalOpen} onClose={() => setCommunityModalOpen(false)} />
    </>
  );
}
