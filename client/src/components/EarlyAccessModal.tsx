import { useEffect, useState, type ReactNode } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { X, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

// Determine if the source is a resource download (not the general early access flow)
function isResourceSource(source?: string) {
  return source === "checklist" || source === "viral-hooks" || source === "calendar";
}

// Map source key to the exact human-readable resource name passed to Formspree
function getResourceName(source?: string): string {
  const map: Record<string, string> = {
    "checklist": "Free Gym Growth Checklist",
    "viral-hooks": "50 Viral Hooks for Gyms",
    "calendar": "30-Day Gym Content Calendar",
  };
  return source ? (map[source] ?? source) : "Unknown Resource";
}

// Resource-specific success copy
function getResourceSuccessCopy(source?: string): { heading: string; body: ReactNode; ctaHref: string; ctaLabel: string } {
  if (source === "viral-hooks") {
    return {
      heading: "Your resource is ready!",
      body: (
        <p style={{ color: "#C0C0D0", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
          Your <strong style={{ color: "#F0F0F5" }}>50 Viral Hooks for Gyms</strong> resource is ready to view. We'll also be in touch with more free resources and early access details.
        </p>
      ),
      ctaHref: "/resources/viral-hooks",
      ctaLabel: "View 50 Viral Hooks",
    };
  }
  if (source === "calendar") {
    return {
      heading: "Your resource is ready!",
      body: (
        <p style={{ color: "#C0C0D0", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
          Your <strong style={{ color: "#F0F0F5" }}>30-Day Gym Content Calendar</strong> is ready to view. We'll also be in touch with more free resources and early access details.
        </p>
      ),
      ctaHref: "/resources/content-calendar",
      ctaLabel: "View Content Calendar",
    };
  }
  // Default checklist / generic resource
  return {
    heading: "Your resource is ready!",
    body: (
      <p style={{ color: "#C0C0D0", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
        We'll send your resource to your inbox shortly. We'll also be in touch with more free resources and early access details.
      </p>
    ),
    ctaHref: "/resources/viral-hooks",
    ctaLabel: "View 50 Viral Hooks",
  };
}

export default function EarlyAccessModal({ isOpen, onClose, source }: EarlyAccessModalProps) {
  // General early-access form (waitlist)
  const [earlyAccessState, handleEarlyAccessSubmit] = useForm("xvzllpkk");
  // Resource-request form — separate Formspree endpoint so resource requests are tracked independently
  const [resourceState, handleResourceSubmit] = useForm("xgoddorj");

  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [gymName, setGymName] = useState("");

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const isResource = isResourceSource(source);
  // Route to the correct Formspree form and handler
  const state = isResource ? resourceState : earlyAccessState;
  const handleFormspreeSubmit = isResource ? handleResourceSubmit : handleEarlyAccessSubmit;
  const successCopy = getResourceSuccessCopy(source);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      setConsentError(true);
      return;
    }
    handleFormspreeSubmit(e);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setConsent(false);
      setConsentError(false);
      setGymName("");
    }, 300);
  };

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div
        className="modal-box"
        role="dialog"
        aria-modal="true"
        style={{
          width: "85vw",
          maxWidth: "820px",
          padding: "3rem",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: "none", border: "none", color: "#7070A0", cursor: "pointer", lineHeight: 1 }}
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {!state.succeeded ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="modal-inner-grid">
            {/* Left: copy */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                <div style={{ background: "rgba(59,130,246,0.15)", borderRadius: "0.5rem", padding: "0.5rem" }}>
                  <Zap size={20} color="#3B82F6" />
                </div>
                <span className="section-label">{isResource ? "Get Free Resource" : "Get Early Access"}</span>
              </div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.875rem", fontWeight: 800, color: "#F0F0F5", marginBottom: "1rem", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                {isResource ? "Get Your Free Resource" : "Start Growing Your Gym With Content That Converts"}
              </h2>
              <p style={{ color: "#C0C0D0", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {isResource
                  ? "Enter your email and we'll send you the resource directly. No spam — just the good stuff."
                  : "Join the waitlist and get free resources, early access, and a personalized content strategy for your gym."}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Free Gym Growth Checklist",
                  "Early access to the Lift Media app",
                  "Personalized content strategy",
                  "Weekly gym marketing tips",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <CheckCircle size={16} color="#3B82F6" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "0.9375rem", color: "#C0C0D0" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                {/* Hidden fields — always include source; include resource_name for resource requests */}
                <input type="hidden" name="source" value={source ?? "early_access"} />
                {isResource && (
                  <input type="hidden" name="resource_name" value={getResourceName(source)} />
                )}

                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#C0C0D0", marginBottom: "0.5rem" }}>
                    Gym Name
                  </label>
                  <input
                    className="lift-input"
                    type="text"
                    name="gym_name"
                    placeholder="e.g. Iron Forge Fitness"
                    value={gymName}
                    onChange={(e) => setGymName(e.target.value)}
                    required
                  />
                  <ValidationError field="gym_name" prefix="Gym Name" errors={state.errors} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#C0C0D0", marginBottom: "0.5rem" }}>
                    Email Address <span style={{ color: "#EF4444" }}>*</span>
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

                {/* Consent checkbox */}
                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      cursor: "pointer",
                      padding: "0.875rem",
                      borderRadius: "0.5rem",
                      background: consentError ? "rgba(239,68,68,0.06)" : "rgba(255,255,255,0.04)",
                      border: consentError ? "1px solid rgba(239,68,68,0.4)" : "1px solid rgba(255,255,255,0.08)",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <div style={{ position: "relative", flexShrink: 0, marginTop: "0.1rem" }}>
                      <input
                        type="checkbox"
                        name="consent"
                        checked={consent}
                        onChange={(e) => { setConsent(e.target.checked); if (e.target.checked) setConsentError(false); }}
                        style={{ width: 18, height: 18, accentColor: "#3B82F6", cursor: "pointer" }}
                      />
                    </div>
                    <span style={{ fontSize: "0.8125rem", color: "#C0C0D0", lineHeight: 1.55 }}>
                      I give Lift Media permission to send me resources, updates, and things like early access to their app via their newsletter. I understand I can unsubscribe at any time.
                    </span>
                  </label>
                  {consentError && (
                    <p style={{ fontSize: "0.8rem", color: "#EF4444", marginTop: "0.375rem", paddingLeft: "0.25rem" }}>
                      Please check this box to continue.
                    </p>
                  )}
                </div>

                {/* General form error */}
                <ValidationError errors={state.errors} />

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "0.9375rem", marginTop: "0.25rem" }}
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 0.8s linear infinite" }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    isResource ? "Email Me The Resource →" : "Get Early Access →"
                  )}
                </button>
              </form>

              <p style={{ textAlign: "center", fontSize: "0.8125rem", color: "#7070A0", marginTop: "1rem" }}>
                No spam. No commitments. Unsubscribe anytime.
              </p>
              <div style={{ marginTop: "1rem", padding: "0.875rem 1rem", borderRadius: "0.5rem", background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}>
                <p style={{ fontSize: "0.8rem", color: "#A0A0C0", lineHeight: 1.6, margin: 0, textAlign: "center" }}>
                  💬 <strong style={{ color: "#C0C0D0" }}>A real person reads every submission</strong> (not a bot!) — please allow up to 3 business days for a reply. We'll do our best to get back to you sooner. We're real people who genuinely want to connect with you. 🙏{" "}
                  <Link href="/team" target="_blank" rel="noopener noreferrer" style={{ color: "#60A5FA", fontWeight: 600, textDecoration: "underline" }}>Meet the team →</Link>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
              <CheckCircle size={56} color="#3B82F6" />
            </div>
            {isResource ? (
              <>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.875rem", fontWeight: 800, color: "#F0F0F5", marginBottom: "0.75rem" }}>
                  {successCopy.heading}
                </h2>
                {successCopy.body}
                <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <Link href={successCopy.ctaHref} onClick={handleClose}>
                    <button className="btn-primary" style={{ justifyContent: "center", padding: "0.875rem 2rem", display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {successCopy.ctaLabel} <ArrowRight size={15} />
                    </button>
                  </Link>
                  <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "0.75rem", padding: "0.875rem 2rem", color: "#A0A0C0", fontWeight: 600, fontSize: "0.9375rem", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif" }} onClick={handleClose}>
                    Close
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.875rem", fontWeight: 800, color: "#F0F0F5", marginBottom: "0.75rem" }}>
                  You're on the list!
                </h2>
                <p style={{ color: "#C0C0D0", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                  We'll be in touch shortly with your free resources and early access details for <strong style={{ color: "#F0F0F5" }}>{gymName || "your gym"}</strong>.
                </p>
                <button className="btn-primary" style={{ justifyContent: "center", padding: "0.875rem 2.5rem" }} onClick={handleClose}>
                  Done
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          .modal-inner-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  );
}
