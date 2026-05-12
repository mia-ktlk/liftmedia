import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Zap } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

const hashLinks = [
  { label: "Services", id: "services" },
  { label: "How It Works", id: "process" },
  { label: "Results", id: "results" },
  { label: "FAQ", id: "faq" },
];

const routeLinks = [
  { label: "Resources", href: "/resources" },
  { label: "Team", href: "/team" },
];

// Full ordered nav for rendering
const navLinks: Array<
  | { label: string; href: string; isRoute: true }
  | { label: string; id: string; isRoute?: false }
> = [
  { label: "Services", id: "services" },
  { label: "How It Works", id: "process" },
  { label: "Results", id: "results" },
  { label: "Resources", href: "/resources", isRoute: true },
  { label: "FAQ", id: "faq" },
  { label: "Team", href: "/team", isRoute: true },
];

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [location] = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  const isHomepage = location === "/";

  // Scroll listener for navbar blur
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // IntersectionObserver for active section — only on homepage
  useEffect(() => {
    if (!isHomepage) {
      setActiveSection(null);
      return;
    }

    const sectionIds = hashLinks.map((l) => l.id);

    // Disconnect any previous observer
    if (observerRef.current) observerRef.current.disconnect();

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      // Find the topmost visible section
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        setActiveSection(visible[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [isHomepage]);

  // When arriving on homepage via /#section, scroll to target
  useEffect(() => {
    if (isHomepage && window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [isHomepage]);

  const handleHashLink = (id: string) => {
    setMobileOpen(false);
    if (isHomepage) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const isHashActive = (id: string) => isHomepage && activeSection === id;
  const isRouteActive = (href: string) => location === href;

  const baseLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: 500,
    transition: "color 0.2s",
    whiteSpace: "nowrap",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    fontFamily: "inherit",
  };

  const activeDot = (
    <span
      style={{
        display: "inline-block",
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "#3B82F6",
        marginLeft: "0.35rem",
        verticalAlign: "middle",
        marginBottom: "1px",
      }}
    />
  );

  return (
    <nav
      className={scrolled ? "nav-blur" : ""}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "background 0.3s ease",
        background: scrolled ? undefined : "transparent",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              background: "linear-gradient(135deg, #3B82F6, #818CF8)",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Zap size={18} color="#fff" fill="#fff" />
          </div>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "1.25rem",
              color: "#F0F0F5",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            Lift<span style={{ color: "#3B82F6" }}>Media</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="nav-desktop-links">
          {navLinks.map((link) => {
            if ("isRoute" in link && link.isRoute) {
              const active = isRouteActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ ...baseLinkStyle, color: active ? "#F0F0F5" : "#C0C0D0", fontWeight: active ? 600 : 500 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F0F5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = active ? "#F0F0F5" : "#C0C0D0")}
                >
                  {link.label}
                  {active && activeDot}
                </Link>
              );
            } else {
              const id = (link as { label: string; id: string }).id;
              const active = isHashActive(id);
              return (
                <button
                  key={id}
                  onClick={() => handleHashLink(id)}
                  style={{ ...baseLinkStyle, color: active ? "#F0F0F5" : "#C0C0D0", fontWeight: active ? 600 : 500 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F0F5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = active ? "#F0F0F5" : "#C0C0D0")}
                >
                  {link.label}
                  {active && activeDot}
                </button>
              );
            }
          })}
        </div>

        {/* Right side: CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
          <button
            className="btn-primary nav-cta-btn"
            onClick={onOpenModal}
            style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem", whiteSpace: "nowrap" }}
          >
            Get Early Access
          </button>
          <button
            className="nav-hamburger"
            style={{ background: "none", border: "none", color: "#F0F0F5", padding: "0.25rem", cursor: "pointer" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{
            background: "#111118",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "1.25rem 1.5rem 1.5rem",
          }}
        >
          {navLinks.map((link) => {
            if ("isRoute" in link && link.isRoute) {
              const active = isRouteActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: active ? "#F0F0F5" : "#C0C0D0",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: active ? 600 : 500,
                    padding: "0.625rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {active && activeDot}
                </Link>
              );
            } else {
              const id = (link as { label: string; id: string }).id;
              const active = isHashActive(id);
              return (
                <button
                  key={id}
                  onClick={() => handleHashLink(id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    color: active ? "#F0F0F5" : "#C0C0D0",
                    fontSize: "1rem",
                    fontWeight: active ? 600 : 500,
                    padding: "0.625rem 0",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  {link.label}
                  {active && activeDot}
                </button>
              );
            }
          })}
          <button
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}
            onClick={() => {
              setMobileOpen(false);
              onOpenModal();
            }}
          >
            Get Early Access
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .nav-desktop-links {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            flex: 1;
            justify-content: center;
          }
          .nav-cta-btn { display: inline-flex !important; }
          .nav-hamburger { display: none !important; }
        }
        @media (max-width: 1023px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta-btn { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
