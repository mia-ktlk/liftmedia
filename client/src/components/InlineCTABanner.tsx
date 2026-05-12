import { ArrowRight } from "lucide-react";

interface InlineCTABannerProps {
  headline: string;
  sub: string;
  cta: string;
  onOpenModal: () => void;
  dark?: boolean;
}

export default function InlineCTABanner({ headline, sub, cta, onOpenModal, dark = true }: InlineCTABannerProps) {
  return (
    <>
      <div
        className="inline-cta-banner"
        style={{
          background: dark
            ? "linear-gradient(135deg, #111827 0%, #0d1535 100%)"
            : "#F4F4F8",
          border: dark ? "1px solid rgba(59,130,246,0.2)" : "1px solid rgba(0,0,0,0.08)",
          borderRadius: "1rem",
          padding: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
          margin: "3rem 0",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <div className="inline-cta-copy" style={{ flex: "1 1 14rem", minWidth: 0, maxWidth: "100%" }}>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(1.05rem, 4vw, 1.25rem)", color: dark ? "#F0F0F5" : "#0A0A0F", marginBottom: "0.375rem", lineHeight: 1.3, overflowWrap: "anywhere" }}>
            {headline}
          </h3>
          <p style={{ fontSize: "0.9375rem", color: dark ? "#7070A0" : "#5050A0", lineHeight: 1.6, overflowWrap: "anywhere" }}>{sub}</p>
        </div>
        <button className="btn-primary inline-cta-btn" onClick={onOpenModal} style={{ flexShrink: 0, maxWidth: "100%", boxSizing: "border-box" }}>
          {cta} <ArrowRight size={15} style={{ flexShrink: 0 }} />
        </button>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .inline-cta-banner {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 1.5rem !important;
            gap: 1.25rem !important;
          }
          .inline-cta-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </>
  );
}
