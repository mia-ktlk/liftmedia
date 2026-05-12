/**
 * LockedProBlock
 * ─────────────────────────────────────────────────────────────────────────────
 * Shown inside every resource article page.
 * Displays a teaser + blurred bullet list with a lock overlay.
 * Clicking "Unlock" opens the EarlyAccessModal.
 */

import { Lock, Sparkles } from "lucide-react";
import { ProOffering } from "@/data/proOfferings";

interface LockedProBlockProps {
  offering: ProOffering;
  onUnlock: () => void;
}

export default function LockedProBlock({ offering, onUnlock }: LockedProBlockProps) {
  const { icon, badge, headline, teaser, bullets, ctaLabel, accentColor } = offering;

  return (
    <div
      style={{
        marginTop: "2.5rem",
        marginBottom: "0.5rem",
        borderRadius: "1rem",
        overflow: "hidden",
        border: `1px solid ${accentColor}40`,
        background: "#111118",
        position: "relative",
      }}
    >
      {/* ── Header band ──────────────────────────────────────────────────── */}
      <div
        style={{
          background: `linear-gradient(135deg, ${accentColor}22 0%, ${accentColor}0a 100%)`,
          borderBottom: `1px solid ${accentColor}30`,
          padding: "1.25rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.875rem",
        }}
      >
        {/* Icon bubble */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "0.75rem",
            background: `${accentColor}20`,
            border: `1px solid ${accentColor}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>

        <div style={{ flex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              background: `${accentColor}20`,
              border: `1px solid ${accentColor}40`,
              borderRadius: "999px",
              padding: "0.2rem 0.625rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: accentColor,
              textTransform: "uppercase" as const,
              letterSpacing: "0.08em",
              marginBottom: "0.5rem",
            }}
          >
            <Lock size={10} />
            {badge}
          </div>

          {/* Headline */}
          <h3
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(0.9375rem, 2.5vw, 1.125rem)",
              color: "#F0F0F5",
              lineHeight: 1.3,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            {headline}
          </h3>
        </div>

        {/* Sparkles icon on desktop */}
        <Sparkles
          size={20}
          color={accentColor}
          style={{ flexShrink: 0, opacity: 0.7 }}
          className="pro-sparkles"
        />
      </div>

      {/* ── Body: teaser + blurred bullets ──────────────────────────────── */}
      <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
        {/* Teaser paragraph */}
        <p
          style={{
            fontSize: "0.9375rem",
            color: "#9090B0",
            lineHeight: 1.7,
            marginBottom: "1.25rem",
          }}
        >
          {teaser}
        </p>

        {/* Blurred bullet list */}
        <div style={{ position: "relative" }}>
          <ul
            style={{
              margin: 0,
              padding: "0 0 0 1.25rem",
              filter: "blur(5px)",
              userSelect: "none",
              pointerEvents: "none",
              opacity: 0.6,
            }}
            aria-hidden="true"
          >
            {bullets.map((b, i) => (
              <li
                key={i}
                style={{
                  fontSize: "0.9375rem",
                  color: "#C0C0D0",
                  lineHeight: 1.7,
                  marginBottom: "0.5rem",
                  listStyleType: "disc",
                }}
              >
                {b}
              </li>
            ))}
          </ul>

          {/* Lock overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              background:
                "linear-gradient(180deg, transparent 0%, #111118cc 40%, #111118 100%)",
              borderRadius: "0.5rem",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: `${accentColor}20`,
                border: `1px solid ${accentColor}50`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Lock size={18} color={accentColor} />
            </div>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "#7070A0",
                margin: 0,
                textAlign: "center",
              }}
            >
              {bullets.length} exclusive items inside
            </p>
          </div>
        </div>

        {/* CTA button */}
        <button
          onClick={onUnlock}
          style={{
            marginTop: "1.5rem",
            width: "100%",
            background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
            border: "none",
            borderRadius: "0.625rem",
            padding: "0.875rem 1.5rem",
            color: "#fff",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "0.9375rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.625rem",
            transition: "opacity 0.2s, transform 0.15s",
            letterSpacing: "-0.01em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          }}
        >
          <Lock size={15} />
          {ctaLabel}
        </button>

        {/* Sub-label */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            color: "#5050A0",
            marginTop: "0.625rem",
            marginBottom: 0,
          }}
        >
          Lift Media Members get access to all 6 pro resources — join free during early access.
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) { .pro-sparkles { display: none; } }
      `}</style>
    </div>
  );
}
