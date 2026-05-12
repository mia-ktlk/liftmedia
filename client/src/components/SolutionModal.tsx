/**
 * SolutionModal
 * Design: Dark modal overlay, electric-blue accent, Plus Jakarta Sans.
 * Shows a solution for each pain point with left/right navigation,
 * an optional resource link (opens in new tab), and a community join form.
 */
import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, CheckCircle, ExternalLink, Users } from "lucide-react";

const SWIPE_THRESHOLD_PX = 56;
const INTERACTIVE_SEL = "input, textarea, select, button, a, [role='slider']";

export interface PainSolution {
  title: string;
  problem: string;
  solution: string;
  bullets: string[];
  resourceLabel?: string;
  resourceHref?: string;
}

interface SolutionModalProps {
  solutions: PainSolution[];
  initialIndex: number;
  onClose: () => void;
}

export default function SolutionModal({ solutions, initialIndex, onClose }: SolutionModalProps) {
  const [idx, setIdx] = useState(initialIndex);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gym, setGym] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const current = solutions[idx];

  const go = useCallback((dir: "prev" | "next") => {
    setAnimDir(dir === "next" ? "left" : "right");
    setTimeout(() => {
      setIdx(i => dir === "next" ? (i + 1) % solutions.length : (i - 1 + solutions.length) % solutions.length);
      setAnimDir(null);
    }, 180);
  }, [solutions.length]);

  const onSwipeTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const target = e.target as HTMLElement;
    if (target.closest(INTERACTIVE_SEL)) {
      touchStartRef.current = null;
      return;
    }
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const onSwipeTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const start = touchStartRef.current;
      touchStartRef.current = null;
      if (!start || e.changedTouches.length !== 1) return;
      const dx = e.changedTouches[0].clientX - start.x;
      const dy = e.changedTouches[0].clientY - start.y;
      if (Math.abs(dx) < SWIPE_THRESHOLD_PX) return;
      if (Math.abs(dx) <= Math.abs(dy)) return;
      if (dx > 0) go("prev");
      else go("next");
    },
    [go],
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go("prev");
      if (e.key === "ArrowRight") go("next");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, go]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) { setError("You must agree to receive resources and the newsletter to join."); return; }
    if (!name.trim() || !email.trim()) { setError("Please fill in your name and email."); return; }
    setError("");
    setSubmitted(true);
  };

  return (
    <>
    <div
      className="solution-modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(5,8,20,0.88)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "clamp(0.4rem, 2vw, 1rem)",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <div
        className="solution-modal-shell"
        onClick={e => e.stopPropagation()}
        style={{
          background: "#0d1117",
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: "1.25rem",
          width: "100%",
          maxWidth: "min(680px, calc(100vw - 1rem))",
          maxHeight: "90vh",
          overflowY: "auto",
          overflowX: "hidden",
          position: "relative",
          boxSizing: "border-box",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.1)",
          margin: "auto",
        }}
      >
        {/* Header */}
        <div className="solution-modal-header" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "0.5rem",
          padding: "clamp(0.75rem, 2.5vw, 1.25rem) clamp(0.75rem, 2.5vw, 1.5rem) 0",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          paddingBottom: "clamp(0.5rem, 2vw, 1rem)",
          position: "sticky", top: 0, background: "#0d1117", zIndex: 1,
          minWidth: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 0, flex: "1 1 auto" }}>
            <span
              className="solution-modal-pill"
              style={{
                background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)",
                borderRadius: "999px", padding: "0.2rem 0.75rem",
                fontSize: "0.7rem", fontWeight: 700, color: "#60A5FA", letterSpacing: "0.08em",
                textTransform: "uppercase",
                maxWidth: "100%",
                overflowWrap: "anywhere",
              }}
            >
              Solution {idx + 1} of {solutions.length}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "rgba(255,255,255,0.06)", border: "none", borderRadius: "50%",
              width: "2rem", height: "2rem", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#9090B0", transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
          >
            <X size={16} />
          </button>
        </div>

        {/* Content area — animated on nav */}
        <div
          className="solution-modal-body solution-modal-swipe"
          role="region"
          aria-label="Solution details. Swipe left or right to change solution."
          onTouchStart={onSwipeTouchStart}
          onTouchEnd={onSwipeTouchEnd}
          style={{
            padding: "clamp(0.75rem, 2.5vw, 1.5rem)",
            opacity: animDir ? 0 : 1,
            transform: animDir === "left" ? "translateX(-24px)" : animDir === "right" ? "translateX(24px)" : "translateX(0)",
            transition: "opacity 0.18s ease, transform 0.18s ease",
            minWidth: 0,
            overflowX: "hidden",
            touchAction: "pan-y",
          }}
        >
          <p className="solution-swipe-hint" style={{ display: "none", margin: "0 0 0.75rem", textAlign: "center", fontSize: "0.7rem", color: "#5a6578", lineHeight: 1.4 }}>
            Swipe left or right to browse solutions
          </p>
          {/* Problem label */}
          <div style={{ marginBottom: "1rem", minWidth: 0 }}>
            <span style={{
              fontSize: "0.75rem", fontWeight: 700, color: "#EF4444",
              textTransform: "uppercase", letterSpacing: "0.07em",
            }}>
              The Problem
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
                fontSize: "clamp(1.05rem, 3.8vw, 1.625rem)", color: "#F0F0F5",
                marginTop: "0.375rem", marginBottom: "0.5rem", lineHeight: 1.25,
                overflowWrap: "anywhere", wordBreak: "break-word",
              }}
            >
              {current.title}
            </h2>
            <p style={{ color: "#7070A0", fontSize: "clamp(0.8125rem, 2.5vw, 0.9375rem)", lineHeight: 1.6, overflowWrap: "anywhere", wordBreak: "break-word" }}>
              {current.problem}
            </p>
          </div>

          {/* Solution */}
          <div style={{
            background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.18)",
            borderRadius: "0.875rem", padding: "clamp(0.75rem, 2.5vw, 1.25rem)", marginBottom: "clamp(0.75rem, 2.5vw, 1.25rem)",
            minWidth: 0,
            overflowX: "hidden",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <CheckCircle size={16} color="#60A5FA" />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#60A5FA", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                The Lift Media Solution
              </span>
            </div>
            <p style={{ color: "#C0C8E0", fontSize: "clamp(0.8125rem, 2.5vw, 0.9375rem)", lineHeight: 1.65, marginBottom: "1rem", overflowWrap: "anywhere", wordBreak: "break-word" }}>
              {current.solution}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: 0 }}>
              {current.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "#A0B0D0", fontSize: "clamp(0.8rem, 2.3vw, 0.875rem)", lineHeight: 1.55, minWidth: 0 }}>
                  <span style={{ color: "#60A5FA", flexShrink: 0, marginTop: "0.1rem" }}>→</span>
                  <span style={{ minWidth: 0, overflowWrap: "anywhere", wordBreak: "break-word" }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource link */}
          {current.resourceHref && (
            <a
              className="solution-resource-link"
              href={current.resourceHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "flex-start", gap: "0.625rem",
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "0.625rem", padding: "0.75rem 1rem",
                color: "#A0B8D8", fontSize: "clamp(0.8rem, 2.3vw, 0.875rem)", textDecoration: "none",
                marginBottom: "1.5rem", transition: "background 0.2s, border-color 0.2s",
                minWidth: 0, maxWidth: "100%", boxSizing: "border-box",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(59,130,246,0.08)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(59,130,246,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <ExternalLink size={14} color="#60A5FA" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
              <span style={{ minWidth: 0, overflowWrap: "anywhere", wordBreak: "break-word" }}>
                <strong style={{ color: "#F0F0F5", fontWeight: 600 }}>Free resource: </strong>
                {current.resourceLabel}
              </span>
            </a>
          )}

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginBottom: "1.25rem" }} />

          {/* Community join form */}
          {!submitted ? (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", minWidth: 0 }}>
                <Users size={16} color="#60A5FA" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(0.85rem, 2.4vw, 0.9375rem)", color: "#F0F0F5", overflowWrap: "anywhere", wordBreak: "break-word" }}>
                  Join the Lift Media Community
                </span>
              </div>
              <p style={{ color: "#7070A0", fontSize: "clamp(0.75rem, 2.2vw, 0.8125rem)", marginBottom: "1rem", lineHeight: 1.6, overflowWrap: "anywhere", wordBreak: "break-word" }}>
                Get the tools, resources, and community gym owners need to grow with content. Free to join.
              </p>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "clamp(0.5rem, 2vw, 0.75rem)" }}>
                <div className="solution-join-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", minWidth: 0 }}>
                  <input
                    type="text"
                    placeholder="Your name *"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    style={{
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "0.5rem", padding: "0.625rem 0.875rem",
                      color: "#F0F0F5", fontSize: "0.875rem", outline: "none",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      minWidth: 0, width: "100%", maxWidth: "100%", boxSizing: "border-box",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email address *"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={{
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "0.5rem", padding: "0.625rem 0.875rem",
                      color: "#F0F0F5", fontSize: "0.875rem", outline: "none",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      minWidth: 0, width: "100%", maxWidth: "100%", boxSizing: "border-box",
                    }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Gym name"
                  value={gym}
                  onChange={e => setGym(e.target.value)}
                  style={{
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "0.5rem", padding: "0.625rem 0.875rem",
                    color: "#F0F0F5", fontSize: "0.875rem", outline: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    minWidth: 0, width: "100%", maxWidth: "100%", boxSizing: "border-box",
                  }}
                />
                <label style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={e => setConsent(e.target.checked)}
                    style={{ marginTop: "0.2rem", accentColor: "#3B82F6", flexShrink: 0 }}
                  />
                  <span style={{ fontSize: "clamp(0.72rem, 2.2vw, 0.8rem)", color: "#7070A0", lineHeight: 1.5 }}>
                    I agree to receive <strong style={{ color: "#A0B0D0" }}>free gym marketing resources</strong> and the{" "}
                    <strong style={{ color: "#A0B0D0" }}>Lift Media newsletter</strong> with weekly tips. I can unsubscribe anytime.{" "}
                    <span style={{ color: "#EF4444", fontSize: "0.75rem" }}>Required to join.</span>
                  </span>
                </label>
                {error && (
                  <p style={{ color: "#EF4444", fontSize: "0.8125rem", margin: 0 }}>{error}</p>
                )}
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                    color: "#fff", border: "none", borderRadius: "0.625rem",
                    padding: "0.75rem 1rem", fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700, fontSize: "clamp(0.8125rem, 2.3vw, 0.9375rem)", cursor: "pointer",
                    transition: "opacity 0.2s, transform 0.2s",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                    maxWidth: "100%", boxSizing: "border-box", overflowWrap: "anywhere",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.9"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
                >
                  Request Early Access →
                </button>
              </form>
            </div>
          ) : (
            <div style={{
              textAlign: "center", padding: "1.5rem",
              background: "rgba(59,130,246,0.07)", borderRadius: "0.875rem",
              border: "1px solid rgba(59,130,246,0.2)",
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🎉</div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.125rem", color: "#F0F0F5", marginBottom: "0.5rem" }}>
                You're on the list!
              </h3>
              <p style={{ color: "#7070A0", fontSize: "0.875rem", lineHeight: 1.6 }}>
                We'll be in touch with early access details and your free resources shortly.
              </p>
            </div>
          )}
        </div>

        {/* Navigation footer */}
        <div className="solution-modal-footer" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "0.5rem",
          padding: "clamp(0.5rem, 2vw, 1rem) clamp(0.75rem, 2.5vw, 1.5rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          position: "sticky", bottom: 0, background: "#0d1117",
          flexWrap: "wrap", minWidth: 0,
        }}>
          <div className="solution-modal-footer-row" style={{ display: "contents" }}>
            <button
              type="button"
              className="solution-footer-nav-btn"
              onClick={() => go("prev")}
              style={{
                display: "flex", alignItems: "center", gap: "0.375rem",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "0.5rem", padding: "0.5rem 0.75rem",
                color: "#9090B0", fontSize: "0.8125rem", fontWeight: 600, cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                flexShrink: 0,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLButtonElement).style.color = "#F0F0F5"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLButtonElement).style.color = "#9090B0"; }}
            >
              <ChevronLeft size={15} /> Prev
            </button>

            <div className="solution-footer-dots" style={{ display: "flex", gap: "0.375rem", alignItems: "center", flexShrink: 1, minWidth: 0, maxWidth: "100%", overflowX: "auto", WebkitOverflowScrolling: "touch", overscrollBehaviorX: "contain", paddingBottom: "2px" }}>
              {solutions.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => { setAnimDir(i > idx ? "left" : "right"); setTimeout(() => { setIdx(i); setAnimDir(null); }, 180); }}
                  style={{
                    width: i === idx ? "1.5rem" : "0.5rem",
                    height: "0.5rem",
                    borderRadius: "999px",
                    background: i === idx ? "#3B82F6" : "rgba(255,255,255,0.2)",
                    border: "none", cursor: "pointer", padding: 0, flexShrink: 0,
                    transition: "width 0.3s ease, background 0.3s ease",
                  }}
                  aria-label={`Go to solution ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="solution-footer-nav-btn"
              onClick={() => go("next")}
              style={{
                display: "flex", alignItems: "center", gap: "0.375rem",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "0.5rem", padding: "0.5rem 0.75rem",
                color: "#9090B0", fontSize: "0.8125rem", fontWeight: 600, cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                flexShrink: 0,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLButtonElement).style.color = "#F0F0F5"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLButtonElement).style.color = "#9090B0"; }}
            >
              Next <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
    <style>{`
      .solution-modal-overlay {
        overflow-x: hidden;
        box-sizing: border-box;
      }
      .solution-modal-shell * {
        box-sizing: border-box;
      }
      @media (max-width: 640px) {
        .solution-modal-shell {
          max-height: 96vh !important;
          border-radius: 0.75rem !important;
        }
        .solution-join-grid {
          grid-template-columns: 1fr !important;
        }
        .solution-swipe-hint {
          display: block !important;
        }
        .solution-modal-footer {
          flex-wrap: wrap !important;
          justify-content: center !important;
        }
        .solution-modal-footer-row {
          display: flex !important;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 0.35rem;
          min-width: 0;
          flex-wrap: wrap;
        }
        .solution-footer-dots {
          order: 3;
          flex: 1 1 100%;
          justify-content: center;
          max-width: 100%;
          overflow-x: auto;
          padding-top: 0.25rem;
        }
        .solution-footer-nav-btn {
          padding: 0.45rem 0.55rem !important;
          font-size: 0.75rem !important;
        }
        .solution-modal-pill {
          font-size: 0.65rem !important;
          padding: 0.15rem 0.5rem !important;
        }
      }
    `}</style>
    </>
  );
}
