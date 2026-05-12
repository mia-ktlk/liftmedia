import { useEffect, useRef } from "react";
import ElectricHeading from "@/components/ElectricHeading";
import { Link } from "wouter";
import { BookOpen, Smartphone, Briefcase, Check, ArrowRight, Star } from "lucide-react";

interface ServicesSectionProps {
  onOpenModal: () => void;
}

const courses = [
  { title: "Basic Filming For Social Media", desc: "Set up your audio, camera angle, and lighting for professional-looking reels. Learn to film, edit, and post content that looks great — straight from your phone.", free: true, href: "/course/basic-filming" },
  { title: "AI in Gym Marketing: Benefits, Drawbacks & What to Watch Out For", desc: "A balanced, no-hype guide to using AI intentionally — without losing the soul of your brand. Includes real stats, the Coca-Cola cautionary tale, and a security lesson.", free: true, href: "/course/ai-gym-marketing" },
  { title: "Writing Hooks For Reels", desc: "Master the first 2 seconds that stop the scroll and drive views.", href: undefined },
  { title: "SEO For Fitness Businesses", desc: "Get found on Google when people search for gyms in your area.", href: undefined },
  { title: "Newsletter Automations", desc: "Build an email list that converts subscribers into paying members.", href: undefined },
];

const appFeatures = [
  "Proven reel formats for every gym type",
  "Script generation assistance",
  "Plug-and-play content structures",
  "Caption frameworks that convert",
  "CTA templates for memberships",
  "AI-assisted scripting",
  "Trend database updated weekly",
  "Fitness-specific content examples",
];

const pricingTiers = [
  {
    name: "WARM-UP",
    price: "$1,497",
    period: "/mo",
    tagline: "For gyms ready to start building their content presence.",
    popular: false,
    features: [
      "8 Short-form reels/month",
      "Hook writing included",
      "Script writing included",
      "Professional editing",
      "1 Analytics review/month",
      "Monthly growth report",
    ],
  },
  {
    name: "TRAINING BLOCK",
    price: "$1,797",
    period: "/mo",
    tagline: "For gyms serious about consistent growth and lead generation.",
    popular: false,
    features: [
      "16 Short-form reels/month",
      "Hook writing included",
      "Script writing included",
      "Professional editing",
      "Posting support",
      "2 Analytics reviews/month",
      "Growth strategy call",
      "Monthly growth report",
    ],
  },
  {
    name: "PEAK PERFORMANCE",
    price: "$2,197",
    period: "/mo",
    tagline: "Full-service content domination for gyms that want to own their market.",
    popular: true,
    features: [
      "30 Short-form reels/month",
      "Hook writing included",
      "Script writing included",
      "Professional editing",
      "Full posting support",
      "Weekly analytics reviews",
      "2 Growth strategy calls/month",
      "AI-assisted optimization",
      "Monthly growth report",
      "Priority support",
    ],
  },
];

export default function ServicesSection({ onOpenModal }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal, .stagger");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} style={{ padding: "6rem 0", background: "#111118" }}>
      <div className="container">

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Services Ecosystem</span>
          <ElectricHeading as="h2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Resources Built For You.
          </ElectricHeading>
          <p style={{ fontSize: "1.125rem", color: "#C0C0D0", maxWidth: "560px", margin: "0 auto" }}>
            Lift Media is a complete content growth ecosystem — courses, tools, and done-for-you services built for gym owners.
          </p>
        </div>

        {/* ── A. Courses ── */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <div style={{ background: "rgba(59,130,246,0.15)", borderRadius: "0.5rem", padding: "0.5rem" }}>
              <BookOpen size={20} color="#3B82F6" />
            </div>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.375rem", color: "#F0F0F5" }}>Courses</h3>
          </div>
          <div className="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: "1rem" }}>
            {courses.map((c) => (
              <div key={c.title} className="lift-card" style={{ padding: "1.5rem", background: "#ffffff", border: c.free ? "2px solid #22C55E" : "1px solid #e5e7eb", position: "relative" }}>
                {c.free && (
                  <span style={{
                    position: "absolute", top: "-12px", right: "1rem",
                    background: "linear-gradient(135deg, #22C55E, #16A34A)",
                    color: "#fff", fontSize: "0.65rem", fontWeight: 800,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "0.25rem 0.75rem", borderRadius: "999px",
                    whiteSpace: "nowrap",
                  }}>Free</span>
                )}
                <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0a0a0f", marginBottom: "0.5rem" }}>{c.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "#4a4a5a", lineHeight: 1.6, marginBottom: "1rem" }}>{c.desc}</p>
                {c.free && c.href ? (
                  <Link href={c.href} style={{ textDecoration: "none" }}>
                    <button
                      className="btn-primary"
                      style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem", background: "#22C55E", boxShadow: "0 4px 14px rgba(34,197,94,0.35)" }}
                    >
                      Get Free Course <ArrowRight size={13} />
                    </button>
                  </Link>
                ) : (
                  <button
                    className="btn-primary"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}
                    onClick={onOpenModal}
                  >
                    Learn More <ArrowRight size={13} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── B. App Subscription ── */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <div style={{ background: "rgba(129,140,248,0.15)", borderRadius: "0.5rem", padding: "0.5rem" }}>
              <Smartphone size={20} color="#818CF8" />
            </div>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.375rem", color: "#F0F0F5" }}>App Library Subscription</h3>
          </div>

          <div className="reveal app-grid" style={{
            background: "linear-gradient(135deg, #16161F 0%, #1a1a2e 100%)",
            border: "1px solid rgba(129,140,248,0.3)",
            borderRadius: "1rem",
            padding: "2.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem",
            alignItems: "center",
          }}>
            <div>
              <div style={{ display: "inline-block", background: "rgba(129,140,248,0.15)", border: "1px solid rgba(129,140,248,0.3)", borderRadius: "999px", padding: "0.25rem 0.875rem", fontSize: "0.75rem", fontWeight: 700, color: "#818CF8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                The Netflix of Gym Content
              </div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.375rem, 4vw, 1.75rem)", color: "#F0F0F5", marginBottom: "1rem", lineHeight: 1.2 }}>
                High-Converting Content.<br />On Demand.
              </h3>
              <p style={{ color: "#C0C0D0", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Access a growing library of proven reel formats, script frameworks, caption templates, and AI tools — all built specifically for fitness businesses.
              </p>
              <button className="btn-primary services-demo-btn" onClick={onOpenModal}>
                Get Free Demo Access <ArrowRight size={16} />
              </button>
            </div>
            <div className="app-features-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {appFeatures.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                  <Check size={15} color="#818CF8" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                  <span style={{ fontSize: "0.875rem", color: "#C0C0D0", lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── C. Done-For-You Pricing ── */}
        <div id="pricing">
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ background: "rgba(34,197,94,0.15)", borderRadius: "0.5rem", padding: "0.5rem" }}>
              <Briefcase size={20} color="#22C55E" />
            </div>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.375rem", color: "#F0F0F5" }}>Done-For-You Packages</h3>
          </div>
          <div className="reveal" style={{ marginBottom: "2rem", maxWidth: "640px" }}>
            <p style={{ color: "#C0C0D0", fontSize: "1rem", lineHeight: 1.7 }}>
              We support you in DIY marketing with our courses and app — but if you're busy running your gym and just need it done for you, we handle that as well. Our done-for-you packages take content completely off your plate.
            </p>
          </div>

          <div className="stagger pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: tier.popular ? "linear-gradient(160deg, #1a1f3a 0%, #16161F 100%)" : "#16161F",
                  border: tier.popular ? "1px solid rgba(59,130,246,0.5)" : "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  position: "relative",
                  boxShadow: tier.popular ? "0 0 40px rgba(59,130,246,0.18), inset 0 0 40px rgba(59,130,246,0.04)" : "none",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
              >
                {tier.popular && (
                  <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}>
                    <span className="badge-popular"><Star size={10} style={{ flexShrink: 0, marginRight: "5px" }} />Most Popular</span>
                  </div>
                )}

                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", color: tier.popular ? "#60A5FA" : "#C0C0D0", textTransform: "uppercase", marginBottom: "0.5rem" }}>{tier.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "2.25rem", color: "#F0F0F5" }}>{tier.price}</span>
                    <span style={{ color: "#C0C0D0", fontSize: "0.9375rem" }}>{tier.period}</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "#C0C0D0", lineHeight: 1.5 }}>{tier.tagline}</p>
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.25rem", marginBottom: "1.75rem" }}>
                  {tier.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", marginBottom: "0.625rem" }}>
                      <Check size={15} color={tier.popular ? "#3B82F6" : "#22C55E"} style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                      <span style={{ fontSize: "0.9rem", color: "#C0C0D0" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={tier.popular ? "btn-primary" : "btn-outline"}
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={onOpenModal}
                >
                  Get Started <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .app-grid { grid-template-columns: 1fr !important; padding: 1.5rem !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .app-features-grid { grid-template-columns: 1fr !important; }
          .services-demo-btn { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
