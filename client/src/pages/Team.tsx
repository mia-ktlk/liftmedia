import { Link } from "wouter";

// Design: Dark premium theme, electric blue accents, Plus Jakarta Sans
// Consistent with main site — dark navy bg, blue gradient hero, white cards

const team = [
  {
    name: "Emily",
    role: "Content Creator & Social Media Strategist",
    emoji: "🎬",
    color: "#3B82F6",
    bio: "Emily is a passionate gym-goer and full-time content creator who turned her love of fitness into a thriving online presence. With over 100,000 subscribers across platforms and more than 20 million video views, she knows exactly what it takes to build an audience in the fitness space. Backed by 5+ years of hands-on social media marketing experience, Emily brings a proven track record of turning everyday coaching moments into content that actually converts — helping gym owners grow their following and fill their membership roster.",
    highlights: ["100k+ subscribers across platforms", "20M+ video views", "5+ years social media marketing", "Proven conversion-focused content strategy"],
  },
  {
    name: "Linda",
    role: "Scriptwriter & Visual Content Editor",
    emoji: "🎞️",
    color: "#8B5CF6",
    bio: "Linda holds a minor in Film Studies and brings a trained eye for visual storytelling to every piece of content she touches. Her academic foundation in cinematography, narrative structure, and editing — combined with real-world production experience — means she doesn't just make content look good, she makes it tell a story. Linda is a proven scriptwriter and content editor who understands how to craft hooks that stop the scroll, build tension that keeps viewers watching, and deliver CTAs that drive action.",
    highlights: ["Minor in Film Studies", "Expert in visual storytelling & narrative", "Proven scriptwriter for short-form content", "Specialist in reel editing & post-production"],
  },
  {
    name: "Brett",
    role: "Business Strategy & Operations Advisor",
    emoji: "🏢",
    color: "#10B981",
    bio: "Brett brings over a decade of experience successfully managing multi-million dollar properties and commercial operations. Having navigated the day-to-day realities of running a small business — tight budgets, staff management, client retention, and growth planning — Brett understands what gym owners are actually dealing with. He helps Lift Media clients make smart, strategic marketing decisions that maximise their return on every dollar spent, ensuring that content efforts are always tied back to real business outcomes.",
    highlights: ["10+ years managing million-dollar properties", "Deep knowledge of small business operations", "Budget-maximisation & ROI strategy", "Bridges the gap between content and business growth"],
  },
  {
    name: "Mia",
    role: "Web & Software Developer · Podcaster · Tech Writer",
    emoji: "💻",
    color: "#F59E0B",
    bio: "Mia is a Web & Software Developer with a passion for helping gym owners harness the power of technology. She's also a content creator with over 50,000 followers across platforms and more than 12 million views. Mia has led the software development team at gym affiliate company MetFix, and has worked alongside CrossFit founder Greg Glassman and MetFix co-founder Emily Kaplan for over five years. At Lift Media, she bridges the gap between content strategy and technical execution — making sure the systems, tools, and automations behind your marketing work seamlessly together.",
    highlights: ["50k+ followers & 12M+ views as a content creator", "Led software development at MetFix", "5+ years working with CrossFit founder Greg Glassman", "Builds the systems that make content scale"],
    link: { label: "Visit helloitsmia.com", url: "https://helloitsmia.com" },
  },
  {
    name: "Ethan",
    role: "Computer Engineer · Data, Automations & AI",
    emoji: "🤖",
    color: "#06B6D4",
    bio: "Ethan is a computer engineer with deep expertise in data analysis, workflow automation, and artificial intelligence. He builds the intelligent systems that power Lift Media's content multiplication engine — from AI-assisted scripting tools to automated repurposing workflows that turn one coaching session into weeks of content across every platform. If there's a smarter, faster, or more scalable way to do something, Ethan has already built it. His work means gym owners spend less time on repetitive tasks and more time doing what they do best: coaching.",
    highlights: ["Computer Engineering background", "Expert in AI tools & prompt engineering", "Builds custom automation workflows", "Data-driven content performance analysis"],
  },
];

export default function Team() {
  return (
    <div className="min-h-screen" style={{ background: "#0A0E1A" }}>
      {/* Navbar */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(10,14,26,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "1rem 0"
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "8px",
              background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem"
            }}>⚡</div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.125rem", color: "#F0F0F5" }}>
              <span style={{ color: "#3B82F6" }}>Lift</span>Media
            </span>
          </Link>
          <Link href="/" style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600,
            fontSize: "0.9375rem", color: "#A0A0C0", textDecoration: "none",
            display: "flex", alignItems: "center", gap: "0.375rem"
          }}>
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        padding: "5rem 0 3.5rem",
        background: "linear-gradient(180deg, #0D1B3E 0%, #0A0E1A 100%)",
        textAlign: "center"
      }}>
        <div className="container">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)",
            borderRadius: "100px", padding: "0.375rem 1rem", marginBottom: "1.5rem"
          }}>
            <span style={{ fontSize: "0.8125rem", color: "#60A5FA", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              The People Behind Lift Media
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
            fontSize: "clamp(1.5rem, 7vw, 3.5rem)", color: "#F0F0F5",
            lineHeight: 1.1, marginBottom: "1.25rem"
          }}>
            Real People. Real Expertise.
          </h1>
          <p style={{
            fontSize: "clamp(0.9375rem, 3.5vw, 1.1875rem)", color: "#8080A0",
            maxWidth: "560px", margin: "0 auto", lineHeight: 1.7
          }}>
            We're not an agency full of account managers. We're a tight-knit team of creators, strategists, engineers, and business operators who genuinely care about helping gym owners win online.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section style={{ padding: "3rem 0 6rem" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "1.75rem"
          }}>
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  background: "#111827",
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${member.color}33`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Accent glow top-left */}
                <div style={{
                  position: "absolute", top: 0, left: 0, width: "200px", height: "200px",
                  background: `radial-gradient(circle at 0% 0%, ${member.color}18, transparent 70%)`,
                  pointerEvents: "none"
                }} />

                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "14px", flexShrink: 0,
                    background: `linear-gradient(135deg, ${member.color}22, ${member.color}11)`,
                    border: `1px solid ${member.color}33`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.75rem"
                  }}>
                    {member.emoji}
                  </div>
                  <div>
                    <h2 style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
                      fontSize: "1.375rem", color: "#F0F0F5", margin: 0, lineHeight: 1.2
                    }}>{member.name}</h2>
                    <p style={{ fontSize: "0.875rem", color: member.color, fontWeight: 600, margin: "0.25rem 0 0" }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p style={{
                  fontSize: "clamp(0.875rem, 3vw, 0.9375rem)", color: "#9090B0", lineHeight: 1.75,
                  marginBottom: "1.5rem"
                }}>
                  {member.bio}
                </p>

                {/* Highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {member.highlights.map((h) => (
                    <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <span style={{ color: member.color, fontSize: "0.875rem", marginTop: "1px", flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: "0.875rem", color: "#C0C0D8", lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* External link if present */}
                {member.link && (
                  <a
                    href={member.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.375rem",
                      marginTop: "1.25rem", fontSize: "0.875rem", color: member.color,
                      fontWeight: 600, textDecoration: "none",
                      borderBottom: `1px solid ${member.color}44`,
                      paddingBottom: "1px", transition: "border-color 0.2s"
                    }}
                  >
                    {member.link.label} ↗
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Personal outreach banner */}
          <div className="team-outreach-banner" style={{
            marginTop: "4rem",
            padding: "2rem 2.5rem",
            background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(16,185,129,0.08))",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: "1.25rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "1.25rem",
          }}>
            <div style={{
              fontSize: "2rem", flexShrink: 0, lineHeight: 1,
              marginTop: "0.125rem"
            }}>💬</div>
            <div>
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
                fontSize: "1.25rem", color: "#F0F0F5", margin: "0 0 0.625rem"
              }}>
                When you reach out, one of us reads your message — not a bot.
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "#8080A0", lineHeight: 1.75, margin: 0 }}>
                Every message sent through our site lands in a real inbox, read by a real person from this team. We genuinely want to connect with you, understand your gym, and figure out how we can help you grow. No automated replies, no form-letter responses — just an honest conversation with people who care.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{
            marginTop: "2rem", textAlign: "center",
            padding: "3rem 2rem",
            background: "linear-gradient(135deg, #1a3a8f22, #0D1B3E)",
            border: "1px solid rgba(59,130,246,0.15)",
            borderRadius: "1.25rem"
          }}>
            <p style={{ fontSize: "0.875rem", color: "#6060A0", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "0.75rem" }}>
              Ready to work with us?
            </p>
            <h3 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F0F0F5",
              marginBottom: "1rem"
            }}>
              Your expertise deserves a team that gets it.
            </h3>
            <p style={{ color: "#8080A0", fontSize: "1rem", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
              We're gym people, content people, and tech people — all in one place. Let's build something together.
            </p>
            <Link href="/" style={{ textDecoration: "none" }}>
              <button className="btn-primary" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
                Get Early Access ⚡
              </button>
            </Link>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 640px) {
          .team-outreach-banner { flex-direction: column !important; padding: 1.5rem !important; }
          .team-nav-back span { display: none !important; }
          .team-nav-back::before { content: "← Home" !important; }
        }
      `}</style>
    </div>
  );
}
