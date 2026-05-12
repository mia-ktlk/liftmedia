/**
 * JoinCommunityModal
 * Design: Dark card modal matching the site's navy/blue palette.
 * Opened by "Join Lift Media" buttons throughout the site.
 * Requires: name, email, gym name, consent checkbox (pre-checked, required).
 */
import { useState, useEffect } from "react";
import { X, Users, CheckCircle, Zap } from "lucide-react";

interface JoinCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PERKS = [
  "Weekly gym marketing tips & playbooks",
  "Free resources delivered to your inbox",
  "Early access to new tools & courses",
  "Private community of gym owners",
];

export default function JoinCommunityModal({ isOpen, onClose }: JoinCommunityModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gymName, setGymName] = useState("");
  const [consent, setConsent] = useState(true); // pre-checked
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; gymName?: string; consent?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setName(""); setEmail(""); setGymName("");
        setConsent(true); setSubmitted(false);
        setErrors({}); setSubmitting(false);
      }, 300);
    }
  }, [isOpen]);

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email.";
    if (!gymName.trim()) e.gymName = "Please enter your gym name.";
    if (!consent) e.consent = "You must agree to receive free resources and the newsletter to join.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{ zIndex: 99999 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="modal-box"
        role="dialog"
        aria-modal="true"
        style={{ maxWidth: "560px", position: "relative" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: "none", border: "none", color: "#7070A0", cursor: "pointer" }}
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
              <div style={{
                width: 52, height: 52,
                background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(129,140,248,0.2))",
                border: "1px solid rgba(59,130,246,0.35)",
                borderRadius: "0.875rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1rem",
              }}>
                <Users size={24} color="#60A5FA" />
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)",
                borderRadius: "999px", padding: "0.25rem 0.875rem",
                fontSize: "0.75rem", fontWeight: 700, color: "#60A5FA",
                letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.875rem",
              }}>
                <Zap size={11} color="#60A5FA" fill="#60A5FA" /> Early Access
              </div>
              <h2 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1.625rem", fontWeight: 800,
                color: "#F0F0F5", marginBottom: "0.625rem",
                letterSpacing: "-0.02em", lineHeight: 1.2,
              }}>
                Request Early Access to the Community
              </h2>
              <p style={{ color: "#9090B0", fontSize: "0.9375rem", lineHeight: 1.65, maxWidth: "420px", margin: "0 auto" }}>
                Join gym owners getting the tools, resources, and community they need to grow with content.
              </p>
            </div>

            {/* Perks */}
            <div style={{
              background: "rgba(59,130,246,0.05)",
              border: "1px solid rgba(59,130,246,0.15)",
              borderRadius: "0.75rem",
              padding: "1rem 1.25rem",
              marginBottom: "1.5rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.5rem 1rem",
            }} className="community-perks-grid">
              {PERKS.map((p) => (
                <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                  <CheckCircle size={14} color="#22C55E" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                  <span style={{ fontSize: "0.8125rem", color: "#C0C0D0", lineHeight: 1.45 }}>{p}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {/* Name */}
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#C0C0D0", marginBottom: "0.375rem" }}>
                  Your Name <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <input
                  className="lift-input"
                  type="text"
                  placeholder="Alex Johnson"
                  value={name}
                  onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((prev) => ({ ...prev, name: undefined })); }}
                  style={errors.name ? { borderColor: "rgba(239,68,68,0.5)" } : {}}
                />
                {errors.name && <p style={{ fontSize: "0.8rem", color: "#EF4444", marginTop: "0.25rem" }}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#C0C0D0", marginBottom: "0.375rem" }}>
                  Email Address <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <input
                  className="lift-input"
                  type="email"
                  placeholder="you@yourgym.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((prev) => ({ ...prev, email: undefined })); }}
                  style={errors.email ? { borderColor: "rgba(239,68,68,0.5)" } : {}}
                />
                {errors.email && <p style={{ fontSize: "0.8rem", color: "#EF4444", marginTop: "0.25rem" }}>{errors.email}</p>}
              </div>

              {/* Gym name */}
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#C0C0D0", marginBottom: "0.375rem" }}>
                  Gym Name <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <input
                  className="lift-input"
                  type="text"
                  placeholder="Iron House Fitness"
                  value={gymName}
                  onChange={(e) => { setGymName(e.target.value); if (errors.gymName) setErrors((prev) => ({ ...prev, gymName: undefined })); }}
                  style={errors.gymName ? { borderColor: "rgba(239,68,68,0.5)" } : {}}
                />
                {errors.gymName && <p style={{ fontSize: "0.8rem", color: "#EF4444", marginTop: "0.25rem" }}>{errors.gymName}</p>}
              </div>

              {/* Consent — pre-checked, required */}
              <label style={{
                display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer",
                padding: "0.875rem", borderRadius: "0.5rem",
                background: errors.consent ? "rgba(239,68,68,0.06)" : "rgba(255,255,255,0.04)",
                border: errors.consent ? "1px solid rgba(239,68,68,0.4)" : "1px solid rgba(255,255,255,0.08)",
              }}>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => { setConsent(e.target.checked); if (e.target.checked) setErrors((prev) => ({ ...prev, consent: undefined })); }}
                  style={{ width: 18, height: 18, accentColor: "#3B82F6", cursor: "pointer", flexShrink: 0, marginTop: "0.1rem" }}
                />
                <span style={{ fontSize: "0.8125rem", color: "#C0C0D0", lineHeight: 1.55 }}>
                  I agree to receive <strong style={{ color: "#F0F0F5" }}>free gym marketing resources</strong> and the{" "}
                  <strong style={{ color: "#F0F0F5" }}>Lift Media newsletter</strong> with weekly tips. I can unsubscribe anytime.{" "}
                  <span style={{ color: "#EF4444", fontWeight: 700 }}>Required to join.</span>
                </span>
              </label>
              {errors.consent && <p style={{ fontSize: "0.8rem", color: "#EF4444", marginTop: "-0.375rem" }}>{errors.consent}</p>}

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "0.9375rem", marginTop: "0.25rem" }}
                disabled={submitting}
              >
                {submitting ? (
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 0.8s linear infinite" }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Requesting access...
                  </span>
                ) : "Request Early Access →"}
              </button>
            </form>
          </>
        ) : (
          /* Success state */
          <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
            <div style={{
              width: 64, height: 64,
              background: "rgba(34,197,94,0.12)",
              border: "1px solid rgba(34,197,94,0.3)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 1.25rem",
            }}>
              <CheckCircle size={32} color="#22C55E" />
            </div>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1.625rem", fontWeight: 800,
              color: "#F0F0F5", marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}>
              You're on the list!
            </h2>
            <p style={{ color: "#9090B0", fontSize: "0.9375rem", lineHeight: 1.7, maxWidth: "380px", margin: "0 auto 2rem" }}>
              We'll be in touch with your early access details and your first free resources shortly. Welcome to the community.
            </p>
            <button className="btn-primary" style={{ justifyContent: "center", padding: "0.875rem 2.5rem" }} onClick={onClose}>
              Keep Exploring 💪
            </button>
          </div>
        )}

        <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @media (max-width: 480px) {
            .community-perks-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </div>
  );
}
