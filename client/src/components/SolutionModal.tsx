/**
 * SolutionModal
 * Design: Dark modal overlay, electric-blue accent, Plus Jakarta Sans.
 * Shows a solution for each pain point with left/right navigation,
 * an optional resource link (opens in new tab), and a community join form.
 */
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, CheckCircle, ExternalLink, Users } from "lucide-react";

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

  const current = solutions[idx];

  const go = useCallback((dir: "prev" | "next") => {
    setAnimDir(dir === "next" ? "left" : "right");
    setTimeout(() => {
      setIdx(i => dir === "next" ? (i + 1) % solutions.length : (i - 1 + solutions.length) % solutions.length);
      setAnimDir(null);
    }, 180);
  }, [solutions.length]);

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
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(5,8,20,0.88)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
        overflowY: "auto",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#0d1117",
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: "1.25rem",
          width: "100%",
          maxWidth: "680px",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.1)",
          margin: "auto",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.25rem 1.5rem 0",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          paddingBottom: "1rem",
          position: "sticky", top: 0, background: "#0d1117", zIndex: 1,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{
              background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: "999px", padding: "0.2rem 0.75rem",
              fontSize: "0.7rem", fontWeight: 700, color: "#60A5FA", letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>
              Solution {idx + 1} of {solutions.length}
            </span>
          </div>
          <button
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
        <div style={{
          padding: "1.5rem",
          opacity: animDir ? 0 : 1,
          transform: animDir === "left" ? "translateX(-24px)" : animDir === "right" ? "translateX(24px)" : "translateX(0)",
          transition: "opacity 0.18s ease, transform 0.18s ease",
        }}>
          {/* Problem label */}
          <div style={{ marginBottom: "1rem" }}>
            <span style={{
              fontSize: "0.75rem", fontWeight: 700, color: "#EF4444",
              textTransform: "uppercase", letterSpacing: "0.07em",
            }}>
              The Problem
            </span>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.25rem, 4vw, 1.625rem)", color: "#F0F0F5",
              marginTop: "0.375rem", marginBottom: "0.5rem", lineHeight: 1.2,
            }}>
              {current.title}
            </h2>
            <p style={{ color: "#7070A0", fontSize: "0.9375rem", lineHeight: 1.65 }}>
              {current.problem}
            </p>
          </div>

          {/* Solution */}
          <div style={{
            background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.18)",
            borderRadius: "0.875rem", padding: "1.25rem", marginBottom: "1.25rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <CheckCircle size={16} color="#60A5FA" />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#60A5FA", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                The Lift Media Solution
              </span>
            </div>
            <p style={{ color: "#C0C8E0", fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1rem" }}>
              {current.solution}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {current.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "#A0B0D0", fontSize: "0.875rem", lineHeight: 1.55 }}>
                  <span style={{ color: "#60A5FA", flexShrink: 0, marginTop: "0.1rem" }}>→</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Resource link */}
          {current.resourceHref && (
            <a
              href={current.resourceHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "0.625rem",
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "0.625rem", padding: "0.75rem 1rem",
                color: "#A0B8D8", fontSize: "0.875rem", textDecoration: "none",
                marginBottom: "1.5rem", transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(59,130,246,0.08)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(59,130,246,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <ExternalLink size={14} color="#60A5FA" style={{ flexShrink: 0 }} />
              <span>
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
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <Users size={16} color="#60A5FA" />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "#F0F0F5" }}>
                  Join the Lift Media Community
                </span>
              </div>
              <p style={{ color: "#7070A0", fontSize: "0.8125rem", marginBottom: "1rem", lineHeight: 1.6 }}>
                Get the tools, resources, and community gym owners need to grow with content. Free to join.
              </p>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
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
                  }}
                />
                <label style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={e => setConsent(e.target.checked)}
                    style={{ marginTop: "0.2rem", accentColor: "#3B82F6", flexShrink: 0 }}
                  />
                  <span style={{ fontSize: "0.8rem", color: "#7070A0", lineHeight: 1.55 }}>
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
                    padding: "0.75rem 1.5rem", fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700, fontSize: "0.9375rem", cursor: "pointer",
                    transition: "opacity 0.2s, transform 0.2s",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
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
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1rem 1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          position: "sticky", bottom: 0, background: "#0d1117",
        }}>
          <button
            onClick={() => go("prev")}
            style={{
              display: "flex", alignItems: "center", gap: "0.375rem",
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "0.5rem", padding: "0.5rem 0.875rem",
              color: "#9090B0", fontSize: "0.8125rem", fontWeight: 600, cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLButtonElement).style.color = "#F0F0F5"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLButtonElement).style.color = "#9090B0"; }}
          >
            <ChevronLeft size={15} /> Prev
          </button>

          {/* Dot indicators */}
          <div style={{ display: "flex", gap: "0.375rem", alignItems: "center" }}>
            {solutions.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAnimDir(i > idx ? "left" : "right"); setTimeout(() => { setIdx(i); setAnimDir(null); }, 180); }}
                style={{
                  width: i === idx ? "1.5rem" : "0.5rem",
                  height: "0.5rem",
                  borderRadius: "999px",
                  background: i === idx ? "#3B82F6" : "rgba(255,255,255,0.2)",
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
                aria-label={`Go to solution ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => go("next")}
            style={{
              display: "flex", alignItems: "center", gap: "0.375rem",
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "0.5rem", padding: "0.5rem 0.875rem",
              color: "#9090B0", fontSize: "0.8125rem", fontWeight: 600, cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLButtonElement).style.color = "#F0F0F5"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLButtonElement).style.color = "#9090B0"; }}
          >
            Next <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
