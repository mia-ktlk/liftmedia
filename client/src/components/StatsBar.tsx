import { useState, useEffect, useRef } from "react";

// ─── TESTIMONIALS VISIBILITY FLAG ──────────────────────────────────────────
// Set to `true` when you have real client testimonials ready to display.
// The scrolling ticker below the stats counters will appear automatically.
// TODO: Replace the placeholder quotes in the `testimonials` array below with
//       real client quotes, then flip this flag to true.
const SHOW_TESTIMONIALS = false;
// ───────────────────────────────────────────────────────────────────────────

const stats = [
  { value: 10, suffix: "M+", label: "Reel Views Generated" },
  { value: 5000, suffix: "+", label: "Hooks Tested" },
  { value: 1000, suffix: "+", label: "Content Scripts" },
];

// TODO: Replace these placeholder testimonials with real client quotes.
// Each entry needs: text (the quote), author (first name + last initial), gym (gym name).
const testimonials = [
  { text: "We went from 200 followers to 12k in 4 months. The content system is unreal.", author: "Jake M.", gym: "Iron Forge CrossFit" },
  { text: "73 new leads in 30 days from reels alone. Lift Media changed how we market.", author: "Sarah K.", gym: "Elevate Fitness Studio" },
  { text: "Finally a system that doesn't require me to become a full-time creator.", author: "Marcus T.", gym: "Apex Strength & Conditioning" },
  { text: "Our reels hit 4.8M views. We had to hire two new coaches to handle demand.", author: "Priya L.", gym: "Flow Yoga & Wellness" },
  { text: "The content repurposing system saves me 10 hours a week minimum.", author: "Derek W.", gym: "Compound Athletics" },
  { text: "Best investment we made for the gym. ROI was visible within the first month.", author: "Tanya R.", gym: "Peak Performance Gym" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);
  return count;
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 2200, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display = value >= 1000 ? (count >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}k` : count.toString()) : count.toString();

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "#F0F0F5", lineHeight: 1, marginBottom: "0.5rem" }}>
        {display}{suffix}
      </div>
      <div style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section
      className="section-blue-gradient"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.15)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        overflow: "hidden",
        // Reduce bottom padding when ticker is hidden so the section doesn't feel too tall
        padding: SHOW_TESTIMONIALS ? "2.5rem 0" : "2.5rem 0 2.5rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "4rem",
            flexWrap: "wrap",
            // Only add bottom border/padding when the ticker is visible below
            paddingBottom: SHOW_TESTIMONIALS ? "3.5rem" : "0",
            borderBottom: SHOW_TESTIMONIALS ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}
          className="stats-grid"
        >
          {stats.map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </div>

      {/* ── Scrolling testimonial ticker ──────────────────────────────────
          Hidden until SHOW_TESTIMONIALS = true (top of this file).
          To re-enable: set SHOW_TESTIMONIALS to true and replace the
          placeholder quotes in the `testimonials` array above.
      ─────────────────────────────────────────────────────────────────── */}
      {SHOW_TESTIMONIALS && (
        <div style={{ overflow: "hidden", padding: "2rem 0", position: "relative" }}>
          {/* Fade edges */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, #1a3a8f, transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, #1a3a8f, transparent)", zIndex: 2, pointerEvents: "none" }} />

          <div className="ticker-inner">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "0.75rem",
                  padding: "1.25rem 1.5rem",
                  marginRight: "1.25rem",
                  maxWidth: "340px",
                  minWidth: "300px",
                }}
              >
                <div style={{ display: "flex", gap: "0.2rem", marginBottom: "0.625rem" }}>
                  {[1,2,3,4,5].map(j => <span key={j} style={{ color: "#F59E0B", fontSize: "0.8125rem" }}>★</span>)}
                </div>
                <p style={{ fontSize: "0.9375rem", color: "#ffffff", lineHeight: 1.6, marginBottom: "0.875rem" }}>"{t.text}"</p>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)" }}>
                  <strong style={{ color: "#F0F0F5" }}>{t.author}</strong> · {t.gym}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) { .stats-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
