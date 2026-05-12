/**
 * PainPointsSection
 * Design: Navy background, white cards, electric-blue accents.
 * Each card has a "See Solution" button that opens SolutionModal at that index.
 * Solutions are navigable left/right within the modal.
 */
import { useRef, useEffect, useState } from "react";
import { XCircle, ArrowRight, Zap } from "lucide-react";
import ElectricHeading from "./ElectricHeading";
import SolutionModal, { type PainSolution } from "./SolutionModal";

const painSolutions: PainSolution[] = [
  {
    title: "Posting Without a Strategy",
    problem: "Random posts with no clear goal, audience, or content mix. Effort goes in, but nothing comes back — no leads, no enquiries, no growth.",
    solution: "A content strategy for a gym isn't complicated, but it does need to be intentional. Lift Media builds you a content operating system: a repeatable weekly mix of educational, social proof, and conversion content that compounds over time.",
    bullets: [
      "A defined weekly content mix (educational, proof, conversion, community)",
      "Platform-specific formats matched to your gym's audience",
      "A 30-day content calendar so you always know what to post next",
    ],
    resourceLabel: "30-Day Gym Content Calendar — free download",
    resourceHref: "/resources/30-day-gym-content-calendar",
  },
  {
    title: "No Hooks That Stop The Scroll",
    problem: "The first 2 seconds determine everything. Most gym content loses viewers immediately because the opening line doesn't give them a reason to stay.",
    solution: "Lift Media teaches you the exact hook formulas that stop the scroll for fitness content — built from data across hundreds of gym reels, not guesswork.",
    bullets: [
      "The 7-second hook formula proven across gym content",
      "50 viral hook templates ready to use this week",
      "Hook testing framework to identify what resonates with your audience",
    ],
    resourceLabel: "The 7-Second Hook Formula That Stops Gym Owners From Losing Viewers",
    resourceHref: "/resources/7-second-hook-formula",
  },
  {
    title: "Generic Fitness Content",
    problem: "Copying what every other gym posts. Motivational quotes, generic workout clips, and stock-photo vibes that could belong to any gym in any city.",
    solution: "Your gym has a story, a community, and a specific type of member it serves best. Lift Media helps you find your unique angle and build content that only your gym could create.",
    bullets: [
      "Ideal member profile workshop to define your niche",
      "Brand voice and messaging framework unique to your gym",
      "Content pillars that showcase what makes your gym different",
    ],
    resourceLabel: "Why Educational Content Converts Better Than Motivational Content",
    resourceHref: "/resources/educational-vs-motivational-content",
  },
  {
    title: "No Funnel Behind The Content",
    problem: "Views without conversions. Engagement without leads. Effort without ROI. Your content is getting attention but no one is booking a trial or sending a DM.",
    solution: "Lift Media restructures your content so every post has a purpose in a funnel — awareness, interest, decision, action. Your best-performing content drives people toward a booking, not just a double-tap.",
    bullets: [
      "Conversion-focused CTA frameworks for every post type",
      "Reel-to-membership funnel strategy with clear next steps",
      "DM conversation scripts to convert enquiries into consultations",
    ],
    resourceLabel: "How to Turn Reels Into Memberships: The Full Funnel Strategy",
    resourceHref: "/resources/reels-to-memberships-funnel",
  },
  {
    title: "Spending Hours Editing",
    problem: "Hours editing reels that don't perform, when you should be running your gym. Content creation is eating into coaching time, admin time, and personal time.",
    solution: "Most gym owners over-produce content. Lift Media teaches you the minimum-viable production approach — simple filming setups, fast editing workflows, and AI tools that cut your content creation time from hours to minutes.",
    bullets: [
      "Phone filming system that looks professional without a crew",
      "Fast-edit reel structure (hook, value, CTA in under 60 seconds)",
      "AI tools that write captions, hooks, and scripts in seconds",
    ],
    resourceLabel: "How to Film Gym Reels With Just a Phone (No Crew Needed)",
    resourceHref: "/resources/film-gym-reels-with-phone",
  },
  {
    title: "No Follow-Up Automation",
    problem: "Leads fall through the cracks because there's no system to capture and convert them. Someone watches your reel, visits your profile, and then disappears — because there's no next step.",
    solution: "Lift Media builds a lead capture and follow-up system that works while you're coaching. From bio links to DM automations, every interested viewer gets a clear path to becoming a member.",
    bullets: [
      "Optimised Instagram bio with a single high-converting CTA",
      "Lead magnet strategy to capture emails from social traffic",
      "DM automation and follow-up sequence templates",
    ],
    resourceLabel: "Instagram Bio Optimisation Checklist for Gym Owners",
    resourceHref: "/resources/instagram-bio-checklist",
  },
  {
    title: "Not Knowing What Converts",
    problem: "Guessing what to post instead of using proven frameworks. You're creating content based on what feels right, not what the data and proven gym marketing frameworks say actually works.",
    solution: "Lift Media gives you access to frameworks built from real gym marketing data — hook formulas, caption structures, and content types that have been tested across dozens of fitness businesses.",
    bullets: [
      "Proven caption frameworks (problem-agitate-solve, story, education)",
      "Content performance tracking to double down on what works",
      "AI Prompt Pack with 50+ gym-specific prompts that produce real results",
    ],
    resourceLabel: "AI Prompt Pack For Gym Owners: 50+ Prompts That Actually Work",
    resourceHref: "/resources/ai-prompt-pack-gym-owners",
  },
  {
    title: "No Content Repurposing System",
    problem: "Creating content once and throwing it away instead of multiplying it across every platform. One reel could become a caption, a story, a Google post, and an email — but most gym owners start from scratch every time.",
    solution: "Lift Media builds a content multiplication system so every piece of content you create gets repurposed across Instagram, Facebook, Google Business, email, and more — without extra filming.",
    bullets: [
      "Content repurposing workflow: one video → 5+ pieces of content",
      "AI tools to reformat and rewrite content for each platform",
      "Monthly content audit to identify top performers worth repurposing",
    ],
    resourceLabel: "AI Tools for Gym Marketing That Save Hours Every Week",
    resourceHref: "/resources/ai-tools-gym-marketing",
  },
];

interface PainPointsSectionProps {
  onOpenModal: () => void;
}

export default function PainPointsSection({ onOpenModal }: PainPointsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    [sectionRef.current, gridRef.current].forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openSolution = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  return (
    <section ref={sectionRef} className="section-navy" style={{ padding: "6rem 0" }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label" style={{ color: "rgba(255,255,255,0.65)" }}>The Problem</span>
          <ElectricHeading as="h2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#ffffff", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Why Most Gym Content Fails
          </ElectricHeading>
          <p style={{ fontSize: "clamp(0.9375rem, 3.5vw, 1.125rem)", color: "rgba(255,255,255,0.75)", maxWidth: "560px", margin: "0 auto" }}>
            It's not that gym owners aren't working hard enough. It's that they're working without a system.
          </p>
        </div>

        <div
          ref={gridRef}
          className="stagger"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "1.25rem", marginBottom: "3rem" }}
        >
          {painSolutions.map((pain, index) => (
            <div
              key={pain.title}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.14)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)"; }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", flex: 1 }}>
                <XCircle size={20} color="#EF4444" style={{ flexShrink: 0, marginTop: "0.125rem" }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0a0a0f", marginBottom: "0.375rem" }}>{pain.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#3a3a4a", lineHeight: 1.6, marginBottom: "1rem" }}>
                    {pain.problem.split(".")[0]}.
                  </p>
                  <button
                    onClick={() => openSolution(index)}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.375rem",
                      background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)",
                      borderRadius: "0.5rem", padding: "0.375rem 0.75rem",
                      color: "#2563EB", fontSize: "0.8125rem", fontWeight: 700,
                      cursor: "pointer", transition: "background 0.2s, border-color 0.2s",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                    onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(59,130,246,0.15)"; b.style.borderColor = "rgba(59,130,246,0.5)"; }}
                    onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "rgba(59,130,246,0.08)"; b.style.borderColor = "rgba(59,130,246,0.25)"; }}
                  >
                    <Zap size={12} />
                    See Solution
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition copy + CTA */}
        <div className="reveal pain-cta-box" style={{ textAlign: "center", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "1rem", padding: "2.5rem", maxWidth: "700px", margin: "0 auto", backdropFilter: "blur(8px)" }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(1.125rem, 4vw, 1.375rem)", color: "#ffffff", marginBottom: "0.75rem" }}>
            "Most gyms don't need more content.<br />They need a system."
          </p>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "1.5rem", fontSize: "1rem" }}>
            Lift Media gives you the content operating system that turns your everyday coaching into leads, members, and growth — without adding more to your plate.
          </p>
          <button className="btn-primary" onClick={onOpenModal}>
            Get The Free Content System <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {modalOpen && (
        <SolutionModal
          solutions={painSolutions}
          initialIndex={modalIndex}
          onClose={() => setModalOpen(false)}
        />
      )}

      <style>{`
        @media (max-width: 640px) {
          .pain-cta-box { padding: 1.5rem !important; }
          .pain-cta-box button { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
