import { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { X, Gift, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const FREE_RESOURCES = [
  "🏋️ 30-Day Gym Content Calendar",
  "📱 10 Viral Reel Hook Templates",
  "✍️ 5 High-Converting Caption Frameworks",
  "🤖 AI Prompt Pack for Gym Owners",
  "📊 Gym Growth Checklist (PDF)",
];

export default function WalkingWeightlifter() {
  const [posX, setPosX] = useState(-60);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [passCount, setPassCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const [state, handleFormspreeSubmit] = useForm("xvzllpkk");

  const animRef = useRef<number | null>(null);
  const posRef = useRef(-60);
  const dirRef = useRef<1 | -1>(1);
  const pausedRef = useRef(false);
  const visibleRef = useRef(false);

  // Watch footer visibility via IntersectionObserver
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        visibleRef.current = isVisible;
        setVisible(isVisible);
        pausedRef.current = !isVisible;
      },
      { threshold: 0.05 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Animation loop — slow walk: 0.18 px/frame
  useEffect(() => {
    const speed = 0.18;

    const step = () => {
      if (!pausedRef.current && visibleRef.current) {
        const screenW = window.innerWidth;
        let next = posRef.current + speed * dirRef.current;

        if (next > screenW + 10) {
          next = screenW + 10;
          dirRef.current = -1;
          setDirection(-1);
          setPassCount((c) => c + 1);
        } else if (next < -60) {
          next = -60;
          dirRef.current = 1;
          setDirection(1);
          setPassCount((c) => c + 1);
        }

        posRef.current = next;
        setPosX(next);
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  const handleMouseEnter = () => { setHovered(true); pausedRef.current = true; };
  const handleMouseLeave = () => { setHovered(false); if (visibleRef.current) pausedRef.current = false; };
  const handleClick = () => { setModalOpen(true); pausedRef.current = true; };
  const handleCloseModal = () => {
    setModalOpen(false);
    if (visibleRef.current) pausedRef.current = false;
    setTimeout(() => {
      setConsent(false);
      setConsentError(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) { setConsentError(true); return; }
    handleFormspreeSubmit(e);
  };

  const emoji = passCount % 2 === 0 ? "🏋️" : "🏋🏽\u200d♀️";
  const scaleX = direction === -1 ? -1 : 1;

  return (
    <>
      <div
        id="weightlifter-anchor"
        style={{
          position: "absolute",
          top: -36,
          left: posX,
          zIndex: 9998,
          pointerEvents: visible ? "auto" : "none",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease",
          cursor: "pointer",
          userSelect: "none",
          fontSize: "2.25rem",
          lineHeight: 1,
          transform: `scaleX(${scaleX})`,
          transformOrigin: "center bottom",
          animation: hovered ? "none" : "lifterWalk 1.2s ease-in-out infinite",
          filter: hovered ? "drop-shadow(0 0 10px rgba(59,130,246,0.9))" : "none",
          willChange: "left, transform",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Click me!"
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleClick(); }}
      >
        {emoji}

        {/* Hover tooltip */}
        {hovered && (
          <div style={{
            position: "absolute",
            bottom: "115%",
            left: "50%",
            // When the parent has scaleX(-1) (walking left), counter-mirror the bubble
            // so the text always reads left-to-right.
            transform: direction === -1 ? `translateX(50%) scaleX(-1)` : `translateX(-50%) scaleX(1)`,
            background: "#3B82F6",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 700,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            padding: "0.3rem 0.75rem",
            borderRadius: "999px",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 20px rgba(59,130,246,0.5)",
            pointerEvents: "none",
            animation: "tooltipPop 0.15s ease forwards",
          }}>
            Click me! 👆
            <div style={{
              position: "absolute",
              bottom: "-5px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0, height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "5px solid #3B82F6",
            }} />
          </div>
        )}
      </div>

      {/* Reward Modal */}
      {modalOpen && (
        <div
          className="modal-overlay"
          style={{ zIndex: 99999 }}
          onClick={(e) => { if (e.target === e.currentTarget) handleCloseModal(); }}
        >
          <div
            className="modal-box"
            role="dialog"
            aria-modal="true"
            style={{ maxWidth: "620px", position: "relative" }}
          >
            <button
              onClick={handleCloseModal}
              style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: "none", border: "none", color: "#7070A0", cursor: "pointer" }}
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {!state.succeeded ? (
              <>
                <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
                  <div style={{ fontSize: "3.5rem", marginBottom: "0.75rem", display: "inline-block", animation: "lifterWalk 1.2s ease-in-out infinite" }}>🏋️</div>
                  <div style={{ display: "inline-block", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: "999px", padding: "0.25rem 0.875rem", fontSize: "0.75rem", fontWeight: 700, color: "#60A5FA", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.875rem" }}>
                    🎉 Secret Find!
                  </div>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#F0F0F5", marginBottom: "0.75rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    You Found Our Weightlifter!
                  </h2>
                  <p style={{ color: "#C0C0D0", fontSize: "1rem", lineHeight: 1.65, maxWidth: "480px", margin: "0 auto" }}>
                    As a reward for your curiosity, here are <strong style={{ color: "#60A5FA" }}>5 free gym marketing resources</strong> — yours instantly. Just drop your email below.
                  </p>
                </div>

                <div style={{
                  background: "rgba(59,130,246,0.06)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  borderRadius: "0.75rem",
                  padding: "1.25rem 1.5rem",
                  marginBottom: "1.75rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.625rem",
                }} className="resources-grid">
                  {FREE_RESOURCES.map((r) => (
                    <div key={r} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Gift size={14} color="#3B82F6" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: "0.875rem", color: "#C0C0D0", lineHeight: 1.4 }}>{r}</span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* Hidden source tag */}
                  <input type="hidden" name="source" value="easter_egg_weightlifter" />

                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#C0C0D0", marginBottom: "0.5rem" }}>
                      Your Email Address <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <input
                      className="lift-input"
                      type="email"
                      name="email"
                      placeholder="you@yourgym.com"
                      required
                    />
                    <ValidationError field="email" prefix="Email" errors={state.errors} />
                  </div>

                  <label style={{
                    display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer",
                    padding: "0.875rem", borderRadius: "0.5rem",
                    background: consentError ? "rgba(239,68,68,0.06)" : "rgba(255,255,255,0.04)",
                    border: consentError ? "1px solid rgba(239,68,68,0.4)" : "1px solid rgba(255,255,255,0.08)",
                  }}>
                    <input
                      type="checkbox"
                      name="consent"
                      checked={consent}
                      onChange={(e) => { setConsent(e.target.checked); if (e.target.checked) setConsentError(false); }}
                      style={{ width: 18, height: 18, accentColor: "#3B82F6", cursor: "pointer", flexShrink: 0, marginTop: "0.1rem" }}
                    />
                    <span style={{ fontSize: "0.8125rem", color: "#C0C0D0", lineHeight: 1.55 }}>
                      I give Lift Media permission to send me these resources and occasional gym marketing tips via email. I can unsubscribe anytime.
                    </span>
                  </label>
                  {consentError && (
                    <p style={{ fontSize: "0.8rem", color: "#EF4444", marginTop: "-0.5rem" }}>Please check this box to continue.</p>
                  )}

                  <ValidationError errors={state.errors} />

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "0.9375rem" }}
                    disabled={state.submitting}
                  >
                    {state.submitting ? (
                      <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 0.8s linear infinite" }}>
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Sending your resources...
                      </span>
                    ) : "Send Me The Free Resources 🎁"}
                  </button>

                  <div style={{ marginTop: "0.75rem", padding: "0.875rem 1rem", borderRadius: "0.5rem", background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}>
                    <p style={{ fontSize: "0.8rem", color: "#A0A0C0", lineHeight: 1.6, margin: 0, textAlign: "center" }}>
                      💬 <strong style={{ color: "#C0C0D0" }}>A real person reads every message</strong> (not a bot!) — please allow up to 3 business days for a reply. We'll try to get back to you sooner. We're real people who genuinely want to connect. 🙏{" "}
                      <Link href="/team" target="_blank" rel="noopener noreferrer" style={{ color: "#60A5FA", fontWeight: 600, textDecoration: "underline" }}>Meet the team →</Link>
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🏋️</div>
                <CheckCircle size={48} color="#3B82F6" style={{ marginBottom: "1rem" }} />
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#F0F0F5", marginBottom: "0.75rem" }}>
                  Resources On Their Way!
                </h2>
                <p style={{ color: "#C0C0D0", fontSize: "1rem", lineHeight: 1.7, maxWidth: "400px", margin: "0 auto 2rem" }}>
                  Check your inbox — your 5 free gym marketing resources are heading your way right now.
                </p>
                <button className="btn-primary" style={{ justifyContent: "center", padding: "0.875rem 2.5rem" }} onClick={handleCloseModal}>
                  Keep Exploring 💪
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes lifterWalk {
          0%   { transform: rotate(-7deg) translateY(0px); }
          25%  { transform: rotate(0deg)  translateY(-4px); }
          50%  { transform: rotate(7deg)  translateY(0px); }
          75%  { transform: rotate(0deg)  translateY(-4px); }
          100% { transform: rotate(-7deg) translateY(0px); }
        }
        @keyframes tooltipPop {
          from { opacity: 0; transform: translateX(-50%) scale(0.85); }
          to   { opacity: 1; transform: translateX(-50%) scale(1); }
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          .resources-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
