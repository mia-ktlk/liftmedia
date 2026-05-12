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
    <div
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
      }}
    >
      <div>
        <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: dark ? "#F0F0F5" : "#0A0A0F", marginBottom: "0.375rem" }}>
          {headline}
        </h3>
        <p style={{ fontSize: "0.9375rem", color: dark ? "#7070A0" : "#5050A0" }}>{sub}</p>
      </div>
      <button className="btn-primary" onClick={onOpenModal} style={{ flexShrink: 0 }}>
        {cta} <ArrowRight size={15} />
      </button>
    </div>
  );
}
