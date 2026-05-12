import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Play, TrendingUp, Users, Eye, Zap, BookOpen } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const floatingCards = [
  { icon: <TrendingUp size={16} color="#3B82F6" />, label: "Reel Views", value: "+312%", sub: "engagement" },
  { icon: <Users size={16} color="#22C55E" />, label: "New Members", value: "73", sub: "in 30 days" },
  { icon: <Eye size={16} color="#A78BFA" />, label: "Impressions", value: "4.8M", sub: "this month" },
  { icon: <Zap size={16} color="#F59E0B" />, label: "Content Pieces", value: "120", sub: "repurposed" },
];

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Trigger all hero reveals immediately on mount
    const el = headlineRef.current;
    if (!el) return;
    setTimeout(() => {
      document.querySelectorAll(".hero-section .reveal").forEach(e => e.classList.add("visible"));
    }, 80);
  }, []);

  return (
    <section
      className="animated-gradient hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "20%", left: "10%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }} className="hero-grid">

          {/* LEFT */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: "999px", padding: "0.375rem 1rem", marginBottom: "1.5rem" }}>
              <Zap size={13} color="#3B82F6" fill="#3B82F6" />
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#60A5FA", letterSpacing: "0.05em" }}>Content Systems for Gym Owners</span>
            </div>

            <h1
              ref={headlineRef}
              className="reveal"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 7vw, 4rem)", lineHeight: 1.1, color: "#F0F0F5", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}
            >
              Turn Content Into{" "}
              <span className="gradient-text">Memberships.</span>
            </h1>

            <p className="reveal hero-body-text" style={{ fontSize: "clamp(0.9375rem, 3.5vw, 1.125rem)", color: "#9090B0", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "520px", transitionDelay: "0.1s" }}>
              Lift Media helps gym owners grow using social media systems, AI tools, content frameworks, and high-performing short-form content strategies — designed specifically for fitness businesses.
            </p>

            <div className="reveal hero-btn-row" style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "2.5rem", transitionDelay: "0.2s" }}>
              <button className="btn-primary" onClick={onOpenModal} style={{ fontSize: "1rem" }}>
                Get Free Gym Growth Checklist <ArrowRight size={16} />
              </button>
              <button className="btn-outline" onClick={onOpenModal}>
                <Play size={15} fill="currentColor" /> Book A Strategy Call
              </button>
            </div>

            {/* Trust bar */}
            <div className="reveal" style={{ transitionDelay: "0.3s" }}>
              {/* Free courses row */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                <Link
                  href="/course/basic-filming"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.22)",
                    borderRadius: "0.5rem", padding: "0.5rem 0.875rem",
                    textDecoration: "none", transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)"; e.currentTarget.style.background = "rgba(59,130,246,0.14)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.22)"; e.currentTarget.style.background = "rgba(59,130,246,0.08)"; }}
                >
                  <BookOpen size={13} color="#60A5FA" />
                  <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#60A5FA" }}>Free Course</span>
                  <span style={{ fontSize: "0.8125rem", color: "#9090B0" }}>Basic Filming for Social Media</span>
                </Link>
                <Link
                  href="/course/ai-gym-marketing"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.22)",
                    borderRadius: "0.5rem", padding: "0.5rem 0.875rem",
                    textDecoration: "none", transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)"; e.currentTarget.style.background = "rgba(167,139,250,0.14)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(167,139,250,0.22)"; e.currentTarget.style.background = "rgba(167,139,250,0.08)"; }}
                >
                  <BookOpen size={13} color="#A78BFA" />
                  <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#A78BFA" }}>Free Course</span>
                  <span style={{ fontSize: "0.8125rem", color: "#9090B0" }}>AI in Gym Marketing</span>
                </Link>
              </div>
              {/* Resources count */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.125rem" }}>📚</span>
                <span style={{ fontSize: "0.875rem", color: "#C0C0D8" }}>
                  <strong style={{ color: "#F0F0F5" }}>50+</strong> free resources for gym owners — no credit card needed
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — Animated mockup panel */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }} className="hero-right reveal">
            {/* Gym coaching image background */}
            <div style={{
              position: "absolute",
              inset: "-2rem",
              backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663394367455/AmRZ9Jaei72ba9Bc2x6B3g/lift-gym-coaching-6d6AWQDNjkp5AQDZpNDaor.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "1rem",
              opacity: 0.12,
              pointerEvents: "none",
            }} />
            {/* Main dashboard card */}
            <div style={{
              background: "#16161F",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: "1rem",
              padding: "1.5rem",
              width: "100%",
              maxWidth: "420px",
              boxShadow: "0 0 60px rgba(59,130,246,0.15)",
              animation: "float 6s ease-in-out infinite",
            }}>
              {/* Dashboard header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#7070A0", marginBottom: "0.25rem" }}>Content Performance</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#F0F0F5" }}>This Month</div>
                </div>
                <div style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "0.375rem", padding: "0.25rem 0.625rem", fontSize: "0.8125rem", fontWeight: 700, color: "#22C55E" }}>
                  ↑ 312%
                </div>
              </div>

              {/* Fake chart bars */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: "0.375rem", height: "80px", marginBottom: "1.25rem" }}>
                {[40, 55, 35, 70, 50, 85, 65, 90, 75, 95, 80, 100].map((h, i) => (
                  <div key={i} style={{
                    flex: 1,
                    height: `${h}%`,
                    background: i >= 10 ? "linear-gradient(to top, #3B82F6, #818CF8)" : "rgba(59,130,246,0.25)",
                    borderRadius: "3px 3px 0 0",
                    transition: "height 0.5s ease",
                  }} />
                ))}
              </div>

              {/* Metric row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
                {[
                  { label: "Reels", value: "24", color: "#3B82F6" },
                  { label: "Leads", value: "73", color: "#22C55E" },
                  { label: "Views", value: "4.8M", color: "#A78BFA" },
                ].map((m) => (
                  <div key={m.label} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "0.5rem", padding: "0.625rem", textAlign: "center" }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.125rem", color: m.color }}>{m.value}</div>
                    <div style={{ fontSize: "0.75rem", color: "#7070A0" }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating stat cards */}
            {floatingCards.map((card, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  background: "#1E1E2A",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "0.625rem",
                  padding: "0.625rem 0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                  animation: `float ${5 + i * 0.7}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                  ...(i === 0 ? { top: "-1rem", left: "-2rem" } :
                     i === 1 ? { bottom: "2rem", left: "-2.5rem" } :
                     i === 2 ? { top: "2rem", right: "-2rem" } :
                               { bottom: "-1rem", right: "-1rem" }),
                }}
              >
                {card.icon}
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#7070A0", lineHeight: 1 }}>{card.label}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "#F0F0F5", lineHeight: 1.2 }}>{card.value} <span style={{ fontSize: "0.7rem", color: "#7070A0", fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}>{card.sub}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logos bar */}
        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.875rem", color: "#A0A8D0", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.25rem", fontWeight: 600 }}>
            Helping gym owners create content that converts
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2.5rem", flexWrap: "wrap", opacity: 0.65 }}>
            {["CrossFit Box", "HIIT Studio", "Strength Gym", "Yoga Studio", "MMA Gym"].map((name) => (
              <span key={name} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#9090B0", letterSpacing: "0.05em", textTransform: "uppercase" }}>{name}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-right { display: none !important; }
          .hero-btn-row { flex-direction: column !important; }
          .hero-btn-row button { width: 100% !important; justify-content: center !important; }
          .hero-section .container { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
          .hero-section { padding-bottom: 5rem !important; }
          .hero-body-text { max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
