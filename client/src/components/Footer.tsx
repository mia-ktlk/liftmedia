import { Zap, Instagram, Twitter, Youtube, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import WalkingWeightlifter from "./WalkingWeightlifter";

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer style={{ background: "#0A0A0F", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "4rem 0 2rem", position: "relative" }}>
      <WalkingWeightlifter />
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="footer-grid">

          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: 32, height: 32, background: "linear-gradient(135deg, #3B82F6, #818CF8)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Zap size={18} color="#fff" fill="#fff" />
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#F0F0F5", letterSpacing: "-0.02em" }}>
                Lift<span style={{ color: "#3B82F6" }}>Media</span>
              </span>
            </div>
            <p style={{ fontSize: "0.9375rem", color: "#7070A0", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "280px" }}>
              Lift Media helps gym owners turn content into community, attention into leads, and followers into members.
            </p>

            {/* Newsletter mini form */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={onOpenModal} style={{ padding: "0.625rem 1.125rem", fontSize: "0.875rem" }}>
                Join Newsletter <ArrowRight size={14} />
              </button>
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{ width: 36, height: 36, borderRadius: "0.5rem", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7070A0", transition: "color 0.2s, border-color 0.2s, background 0.2s" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#3B82F6"; el.style.borderColor = "rgba(59,130,246,0.4)"; el.style.background = "rgba(59,130,246,0.1)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#7070A0"; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.background = "rgba(255,255,255,0.06)"; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F5", marginBottom: "1.25rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Services</h4>
            {["Courses", "App Subscription", "Done-For-You", "Strategy Calls", "Content Audits"].map((item) => (
              <button key={item} onClick={onOpenModal} style={{ display: "block", background: "none", border: "none", padding: "0.375rem 0", fontSize: "0.9375rem", color: "#7070A0", textAlign: "left", transition: "color 0.2s", width: "100%" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C0C0D0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7070A0")}>
                {item}
              </button>
            ))}
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F5", marginBottom: "1.25rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Free Resources</h4>
            {[
              { label: "50 Viral Hooks for Gyms", href: "/resources/viral-hooks" },
              { label: "30-Day Content Calendar", href: "/resources/content-calendar" },
              { label: "Instagram Bio Checklist", href: "/resources/instagram-bio-checklist" },
              { label: "AI Prompt Pack", href: "/resources/ai-prompt-pack" },
              { label: "Gym Reel Script Checklist", href: "/resources/gym-reel-script-checklist" },
              { label: "How to Turn Reels Into Members", href: "/resources/reels-into-memberships" },
              { label: "All Resources →", href: "/resources" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ display: "block", padding: "0.375rem 0", fontSize: "0.875rem", color: "#7070A0", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C0C0D0")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#7070A0")}>
                {label}
              </Link>
            ))}
          </div>
          {/* Articles */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F5", marginBottom: "1.25rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Articles</h4>
            {[
              { label: "Instagram Reels for Gym Owners", href: "/resources/instagram-reels-for-gym-owners" },
              { label: "Get More Gym Members on Instagram", href: "/resources/get-more-gym-members-instagram" },
              { label: "Gym Social Media Posting Schedule", href: "/resources/gym-owner-social-media-posting-schedule" },
              { label: "Reels Ideas for Personal Trainers", href: "/resources/reels-ideas-personal-trainers" },
              { label: "How to Film Gym Reels With a Phone", href: "/resources/how-to-film-gym-reels-with-phone" },
              { label: "AI Tools for Gym Marketing", href: "/resources/ai-tools-gym-marketing" },
              { label: "Local SEO for Gyms", href: "/resources/local-seo-for-gyms" },
              { label: "Instagram Captions for Gyms", href: "/resources/instagram-captions-for-gyms" },
              { label: "Sitemaps & AEO for Gyms", href: "/resources/how-to-get-gym-website-found-google" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ display: "block", padding: "0.375rem 0", fontSize: "0.875rem", color: "#7070A0", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C0C0D0")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#7070A0")}>
                {label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F5", marginBottom: "1.25rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Company</h4>
            {["About", "Case Studies", "FAQ", "Contact", "Book A Call"].map((item) => (
              <button key={item} onClick={onOpenModal} style={{ display: "block", background: "none", border: "none", padding: "0.375rem 0", fontSize: "0.9375rem", color: "#7070A0", textAlign: "left", transition: "color 0.2s", width: "100%" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C0C0D0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7070A0")}>
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.875rem", color: "#7070A0" }}>
            © {new Date().getFullYear()} Lift Media. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" style={{ fontSize: "0.875rem", color: "#5050A0", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#9090B0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5050A0")}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; gap: 2rem !important; } }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
