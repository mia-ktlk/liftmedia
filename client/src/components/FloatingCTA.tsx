import { useState, useEffect } from "react";
import { Zap } from "lucide-react";

interface FloatingCTAProps {
  onOpenModal: () => void;
}

export default function FloatingCTA({ onOpenModal }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div
        className="floating-cta-wrap"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 900,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <button
          className="btn-primary float-cta"
          onClick={onOpenModal}
          style={{
            padding: "0.875rem 1.5rem",
            borderRadius: "999px",
            boxShadow: "0 8px 32px rgba(59,130,246,0.4)",
            fontSize: "0.9375rem",
            gap: "0.5rem",
          }}
        >
          <Zap size={16} fill="currentColor" />
          Get Early Access
        </button>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .floating-cta-wrap {
            right: 1rem !important;
            bottom: 1rem !important;
          }
          .float-cta {
            padding: 0.625rem 1rem !important;
            font-size: 0.8125rem !important;
          }
        }
      `}</style>
    </>
  );
}
