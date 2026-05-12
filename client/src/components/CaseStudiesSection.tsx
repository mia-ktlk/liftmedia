import { useEffect, useRef } from "react";
import ElectricHeading from "@/components/ElectricHeading";
import { TrendingUp, Users, Eye, Play, ArrowRight } from "lucide-react";

// ─── CASE STUDIES VISIBILITY FLAG ──────────────────────────────────────────
// Set to `true` when you have real client results and testimonials to display.
// The entire "Real Gyms. Real Results." section will appear automatically.
// TODO: Replace the placeholder data in the `caseStudies` array below with
//       real client results, then flip this flag to true.
const SHOW_CASE_STUDIES = false;
// ───────────────────────────────────────────────────────────────────────────

// TODO: Replace these placeholder case studies with real client data.
// Each entry needs:
//   gym        — gym name
//   location   — city, state
//   type       — gym type (e.g. "CrossFit Box", "HIIT Studio")
//   before     — { followers, leads (per month), members }
//   after      — { followers, leads (per month), members }
//   stats      — up to 3 highlight stats with icon, value, and label
//   quote      — a real testimonial quote from the owner
//   author     — "First Name L., Owner"
//   color      — accent hex color for this card (e.g. "#3B82F6")
const caseStudies = [
  {
    gym: "Iron Forge CrossFit",
    location: "Austin, TX",
    type: "CrossFit Box",
    before: { followers: "1.2k", leads: "4/mo", members: "87" },
    after: { followers: "14.8k", leads: "73/mo", members: "142" },
    stats: [
      { icon: <TrendingUp size={16} />, value: "+312%", label: "Engagement Rate" },
      { icon: <Eye size={16} />, value: "4.8M", label: "Reel Views" },
      { icon: <Users size={16} />, value: "+55", label: "New Members" },
    ],
    quote: "We went from struggling to fill classes to having a waitlist. The content system changed everything.",
    author: "Jake M., Owner",
    color: "#3B82F6",
  },
  {
    gym: "Elevate Fitness Studio",
    location: "Denver, CO",
    type: "HIIT & Strength",
    before: { followers: "800", leads: "2/mo", members: "61" },
    after: { followers: "9.2k", leads: "48/mo", members: "109" },
    stats: [
      { icon: <TrendingUp size={16} />, value: "+280%", label: "Organic Reach" },
      { icon: <Eye size={16} />, value: "2.1M", label: "Reel Views" },
      { icon: <Users size={16} />, value: "+48", label: "New Members" },
    ],
    quote: "73 new leads in 30 days from reels alone. I had no idea content could work this well for a gym.",
    author: "Sarah K., Owner",
    color: "#818CF8",
  },
  {
    gym: "Apex Strength & Conditioning",
    location: "Nashville, TN",
    type: "Strength & Performance",
    before: { followers: "2.1k", leads: "6/mo", members: "95" },
    after: { followers: "18.4k", leads: "91/mo", members: "178" },
    stats: [
      { icon: <TrendingUp size={16} />, value: "+410%", label: "Follower Growth" },
      { icon: <Eye size={16} />, value: "7.3M", label: "Reel Views" },
      { icon: <Users size={16} />, value: "+83", label: "New Members" },
    ],
    quote: "The repurposing system is the real game-changer. One coaching session becomes a month of content.",
    author: "Marcus T., Owner",
    color: "#22C55E",
  },
];

interface CaseStudiesSectionProps {
  onOpenModal: () => void;
}

export default function CaseStudiesSection({ onOpenModal }: CaseStudiesSectionProps) {
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

  // ── Hidden until SHOW_CASE_STUDIES = true (top of this file) ──────────────
  // To re-enable: set SHOW_CASE_STUDIES to true and replace the placeholder
  // data in the `caseStudies` array above with real client results.
  if (!SHOW_CASE_STUDIES) return null;
  // ──────────────────────────────────────────────────────────────────────────

  return (
    <section id="results" ref={sectionRef} style={{ padding: "6rem 0", background: "#0A0A0F" }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">Case Studies</span>
          <ElectricHeading as="h2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Real Gyms. Real Results.
          </ElectricHeading>
          <p style={{ fontSize: "clamp(0.9375rem, 3.5vw, 1.0625rem)", color: "#7070A0", maxWidth: "520px", margin: "0 auto" }}>
            The gyms winning attention online are the gyms winning memberships offline.
          </p>
        </div>

        <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {caseStudies.map((cs) => (
            <div key={cs.gym} className="lift-card" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "#F0F0F5", marginBottom: "0.25rem" }}>{cs.gym}</div>
                  <div style={{ fontSize: "0.8125rem", color: "#7070A0" }}>{cs.type} · {cs.location}</div>
                </div>
                <div style={{ background: `${cs.color}15`, border: `1px solid ${cs.color}30`, borderRadius: "0.375rem", padding: "0.375rem 0.625rem", fontSize: "0.75rem", fontWeight: 700, color: cs.color }}>
                  Case Study
                </div>
              </div>

              {/* Before/After */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: "0.5rem", padding: "0.875rem" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#EF4444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Before</div>
                  <div style={{ fontSize: "0.8125rem", color: "#9090B0" }}>{cs.before.followers} followers</div>
                  <div style={{ fontSize: "0.8125rem", color: "#9090B0" }}>{cs.before.leads} leads/mo</div>
                  <div style={{ fontSize: "0.8125rem", color: "#9090B0" }}>{cs.before.members} members</div>
                </div>
                <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "0.5rem", padding: "0.875rem" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#22C55E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>After</div>
                  <div style={{ fontSize: "0.8125rem", color: "#C0C0D0", fontWeight: 600 }}>{cs.after.followers} followers</div>
                  <div style={{ fontSize: "0.8125rem", color: "#C0C0D0", fontWeight: 600 }}>{cs.after.leads} leads/mo</div>
                  <div style={{ fontSize: "0.8125rem", color: "#C0C0D0", fontWeight: 600 }}>{cs.after.members} members</div>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
                {cs.stats.map((stat) => (
                  <div key={stat.label} style={{ flex: 1, textAlign: "center", background: "rgba(255,255,255,0.03)", borderRadius: "0.5rem", padding: "0.75rem 0.5rem" }}>
                    <div style={{ color: cs.color, marginBottom: "0.25rem" }}>{stat.icon}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#F0F0F5", lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontSize: "0.7rem", color: "#7070A0", marginTop: "0.25rem" }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Video testimonial button */}
              <div
                style={{ background: "#1E1E2A", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.625rem", padding: "1.25rem", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.875rem", cursor: "pointer" }}
                onClick={onOpenModal}
              >
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${cs.color}20`, border: `1px solid ${cs.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Play size={16} color={cs.color} fill={cs.color} />
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#F0F0F5" }}>Watch Video Testimonial</div>
                  <div style={{ fontSize: "0.75rem", color: "#7070A0" }}>3:24 · Owner interview</div>
                </div>
              </div>

              {/* Quote */}
              <blockquote style={{ borderLeft: `2px solid ${cs.color}`, paddingLeft: "1rem", marginBottom: "0", flex: 1 }}>
                <p style={{ fontSize: "0.9rem", color: "#C0C0D0", lineHeight: 1.65, fontStyle: "italic", marginBottom: "0.5rem" }}>"{cs.quote}"</p>
                <cite style={{ fontSize: "0.8125rem", color: "#7070A0", fontStyle: "normal" }}>— {cs.author}</cite>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "3rem" }}>
          <button className="btn-primary" onClick={onOpenModal} style={{ fontSize: "1rem" }}>
            Get Results Like These <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
