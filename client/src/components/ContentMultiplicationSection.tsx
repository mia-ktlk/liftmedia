import { useEffect, useRef, useState, useCallback } from "react";
import ElectricHeading from "@/components/ElectricHeading";
import { ArrowDown, ArrowRight } from "lucide-react";

const flowSteps = [
  { label: "Coaching Session", icon: "🏋️", color: "#3B82F6", desc: "Your everyday coaching moment" },
  { label: "Short-Form Reel", icon: "🎬", color: "#818CF8", desc: "Captured & scripted in minutes" },
  { label: "Carousel Post", icon: "📱", color: "#A78BFA", desc: "Repurposed for Instagram & LinkedIn" },
  { label: "Email Newsletter", icon: "📧", color: "#60A5FA", desc: "Sent to your subscriber list" },
  { label: "Blog Article", icon: "📝", color: "#34D399", desc: "Long-form SEO content" },
  { label: "SEO Traffic", icon: "🔍", color: "#F59E0B", desc: "Google finds your gym" },
  { label: "New Members", icon: "🏆", color: "#22C55E", desc: "Leads convert to memberships" },
];

// Fixed height per card + arrow so the container never changes size
const CARD_H = 90;   // px — card height (tall enough for wrapped text)
const ARROW_H = 28;  // px — arrow connector height
const TOTAL_H = flowSteps.length * CARD_H + (flowSteps.length - 1) * ARROW_H;

interface ContentMultiplicationSectionProps {
  onOpenModal: () => void;
}

export default function ContentMultiplicationSection({ onOpenModal }: ContentMultiplicationSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stepRef = useRef(0);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopAnimation = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    if (resetTimerRef.current) { clearTimeout(resetTimerRef.current); resetTimerRef.current = null; }
  }, []);

  const startAnimation = useCallback(() => {
    stopAnimation();
    intervalRef.current = setInterval(() => {
      setActiveStep(stepRef.current);
      stepRef.current++;
      if (stepRef.current >= flowSteps.length) {
        stopAnimation();
        resetTimerRef.current = setTimeout(() => {
          setActiveStep(-1);
          setTimeout(() => {
            stepRef.current = 0;
            // Only restart if still visible
            if (intervalRef.current === null) startAnimation();
          }, 400);
        }, 1800);
      }
    }, 620);
  }, [stopAnimation]); // eslint-disable-line react-hooks/exhaustive-deps

  // Observe visibility — start/stop animation based on whether section is on screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
        if (visible) {
          el.querySelectorAll(".reveal, .stagger").forEach(e => e.classList.add("visible"));
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Start/stop animation when visibility changes
  useEffect(() => {
    if (isVisible && hasStarted) {
      startAnimation();
    } else {
      stopAnimation();
    }
    return stopAnimation;
  }, [isVisible, hasStarted, startAnimation, stopAnimation]);

  return (
    <section
      ref={sectionRef}
      className="section-blue-mid" style={{ padding: "6rem 0", position: "relative", overflow: "hidden" }}
    >
      {/* Background image subtle overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663394367455/AmRZ9Jaei72ba9Bc2x6B3g/lift-content-system-bcKxHyNXMAJZiqgs98dspn.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.06,
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="mult-grid">

          {/* LEFT — Copy */}
          <div>
            <div className="reveal">
              <span className="section-label">Content Multiplication System</span>
              <ElectricHeading as="h2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Turn One Coaching Moment Into Weeks Of Marketing.
              </ElectricHeading>
              <p style={{ fontSize: "clamp(0.9375rem, 3.5vw, 1.0625rem)", color: "#7070A0", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Lift Media helps gym owners capture the expertise they already use every day and transform it into high-performing content across every platform.
              </p>
              <p style={{ fontSize: "clamp(0.9375rem, 3.5vw, 1.0625rem)", color: "#9090B0", lineHeight: 1.75, marginBottom: "2rem" }}>
                You don't need to become a full-time creator.<br />
                <strong style={{ color: "#F0F0F5" }}>You need systems that make your knowledge scalable.</strong>
              </p>

              {/* Value props */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
                {[
                  "Your coaching cue becomes a reel",
                  "A reel becomes a carousel",
                  "A carousel becomes an email",
                  "An email becomes a blog post",
                  "A blog becomes SEO traffic",
                  "A client question becomes a week of content",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3B82F6", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.9375rem", color: "#C0C0D0" }}>{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary" onClick={onOpenModal} style={{ fontSize: "1rem" }}>
                Get The Free Content Repurposing Checklist <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT — Animated flow — FIXED HEIGHT so layout never shifts */}
          <div
            className="reveal"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // Fixed height = all cards + all arrows — no layout shift
              height: TOTAL_H,
              minHeight: TOTAL_H,
              maxHeight: TOTAL_H,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {flowSteps.map((step, i) => (
              <div
                key={step.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  // Each card+arrow slot is a fixed height
                  height: i < flowSteps.length - 1 ? CARD_H + ARROW_H : CARD_H,
                  flexShrink: 0,
                }}
              >
                {/* Card — fixed height */}
                <div
                  style={{
                    width: "100%",
                    maxWidth: "340px",
                    height: CARD_H,
                    background: activeStep === i ? `${step.color}30` : "rgba(255,255,255,0.1)",
                    border: `1px solid ${activeStep === i ? step.color : "rgba(255,255,255,0.18)"}`,
                    backdropFilter: "blur(8px)",
                    borderRadius: "0.75rem",
                    padding: "0 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
                    boxShadow: activeStep === i ? `0 0 24px ${step.color}30` : "none",
                    flexShrink: 0,
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{
                    width: 40, height: 40,
                    background: activeStep === i ? `${step.color}25` : "rgba(255,255,255,0.05)",
                    borderRadius: "0.5rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.25rem",
                    transition: "background 0.4s ease",
                    flexShrink: 0,
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: activeStep === i ? step.color : "#F0F0F5", transition: "color 0.4s ease", lineHeight: 1.3 }}>
                      {step.label}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#A0A0C0", lineHeight: 1.4, marginTop: "0.2rem" }}>{step.desc}</div>
                  </div>
                  {/* Checkmark — fixed width so it doesn't cause layout shift */}
                  <div style={{ width: 20, flexShrink: 0, textAlign: "center", color: "#22C55E", fontSize: "0.75rem", fontWeight: 700, opacity: activeStep > i ? 1 : 0, transition: "opacity 0.3s ease" }}>✓</div>
                </div>

                {/* Arrow connector — fixed height */}
                {i < flowSteps.length - 1 && (
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: ARROW_H,
                    flexShrink: 0,
                    color: activeStep > i ? "#3B82F6" : "#3A3A5A",
                    transition: "color 0.4s ease",
                  }}>
                    <ArrowDown size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .mult-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
      `}</style>
    </section>
  );
}
