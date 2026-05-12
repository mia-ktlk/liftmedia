// Design: Light mode resource page — clean white background, dark navy text, electric blue accents
// Consistent with course light-mode content style. Premium, readable, shareable.

import { useState } from "react";
import { Link } from "wouter";
import { Copy, Check, Search, Zap } from "lucide-react";

// ── Hook Data ──────────────────────────────────────────────────────────────────

type HookCategory = "Pattern Interrupt" | "Curiosity Gap" | "Controversy" | "Social Proof" | "Transformation" | "Fear / Loss" | "Challenge";

interface Hook {
  id: number;
  text: string;
  category: HookCategory;
  tip: string;
}

const hooks: Hook[] = [
  // ── Pattern Interrupt ──
  { id: 1, category: "Pattern Interrupt", text: "Stop doing cardio if you actually want to lose weight.", tip: "Challenges the most common gym assumption. Works best as an on-screen text hook paired with you walking into frame." },
  { id: 2, category: "Pattern Interrupt", text: "I quit posting every day and my gym grew faster.", tip: "Contradicts the 'post more' advice everyone gives. Pairs well with a before/after follower count reveal." },
  { id: 3, category: "Pattern Interrupt", text: "The worst thing you can do for new members is give them a tour.", tip: "Counterintuitive gym ops take. Great for CrossFit/boutique gym owners." },
  { id: 4, category: "Pattern Interrupt", text: "Your gym's biggest competitor isn't the gym down the street.", tip: "Opens with a mystery — the answer (Netflix, the couch, inertia) lands hard." },
  { id: 5, category: "Pattern Interrupt", text: "We turned down 12 new members last month. Here's why.", tip: "Scarcity and exclusivity in one line. Works for community-focused gyms." },
  { id: 6, category: "Pattern Interrupt", text: "Everything you've been told about warming up is wrong.", tip: "Classic pattern interrupt. Follow with a 60-second corrective warm-up demo." },
  { id: 7, category: "Pattern Interrupt", text: "The gym with the best equipment in our city is always empty.", tip: "Sets up a story about community vs. equipment. Relatable for small gym owners." },
  { id: 8, category: "Pattern Interrupt", text: "I stopped offering free trials and sign-ups went up.", tip: "Business counterintuitive take. Great for gym owners talking to other gym owners." },

  // ── Curiosity Gap ──
  { id: 9, category: "Curiosity Gap", text: "The one thing our top members do that beginners never do.", tip: "Creates a gap — viewers need to know the secret. Keep the answer genuinely useful." },
  { id: 10, category: "Curiosity Gap", text: "We tracked 100 new gym members for 90 days. Here's what we found.", tip: "Data-driven curiosity. The number '100' adds credibility." },
  { id: 11, category: "Curiosity Gap", text: "This is the exercise most coaches are too scared to program.", tip: "Mystery + controversy. Works for strength coaches and CrossFit gyms." },
  { id: 12, category: "Curiosity Gap", text: "The real reason people quit your gym in month 3.", tip: "Speaks directly to gym owners' biggest pain point. High save rate." },
  { id: 13, category: "Curiosity Gap", text: "I asked 50 gym members why they almost quit. Their answers surprised me.", tip: "Research hook. The word 'surprised' signals the answer is unexpected." },
  { id: 14, category: "Curiosity Gap", text: "What a $30/month gym does that a $200/month gym doesn't.", tip: "Price comparison creates instant curiosity. Works for community-focused gyms." },
  { id: 15, category: "Curiosity Gap", text: "The 3-second rule that keeps members coming back for years.", tip: "Specific number + specific outcome. 'Rule' implies a system worth learning." },
  { id: 16, category: "Curiosity Gap", text: "Nobody talks about what happens to your body after 6 months of consistent training.", tip: "Long-form curiosity. Great for educational content about real physical adaptation." },
  { id: 17, category: "Curiosity Gap", text: "The thing I wish someone had told me before opening a gym.", tip: "Personal story hook. High relatability for aspiring gym owners in your audience." },
  { id: 18, category: "Curiosity Gap", text: "This one coaching cue changed how 80% of our members squat.", tip: "Specific stat + specific result. Coaches love sharing this type of content." },

  // ── Controversy ──
  { id: 19, category: "Controversy", text: "Hot take: most personal trainers are keeping their clients weak on purpose.", tip: "Provocative but defensible. Follow with a nuanced explanation to avoid backlash." },
  { id: 20, category: "Controversy", text: "Your gym's group class is probably hurting more people than it's helping.", tip: "Speaks to programming quality. Pairs well with a corrective programming tip." },
  { id: 21, category: "Controversy", text: "Unpopular opinion: beginners should NOT do CrossFit.", tip: "Will get both agreement and pushback — both drive engagement." },
  { id: 22, category: "Controversy", text: "Gym culture is broken and most gym owners are the problem.", tip: "Bold. Back it up with a specific example and a solution or it reads as a rant." },
  { id: 23, category: "Controversy", text: "The fitness industry is selling you supplements you don't need.", tip: "Anti-establishment hook. High share rate among health-conscious audiences." },
  { id: 24, category: "Controversy", text: "I'm going to say something most coaches are afraid to say about rest days.", tip: "Builds anticipation. The 'afraid to say' framing signals insider knowledge." },
  { id: 25, category: "Controversy", text: "Machines vs. free weights — and the answer isn't what you think.", tip: "Classic debate with a twist. The 'not what you think' signals a nuanced take." },
  { id: 26, category: "Controversy", text: "Stop celebrating every PR. Here's why it's hurting your gym culture.", tip: "Counterintuitive community management take. Great for gym owners." },

  // ── Social Proof ──
  { id: 27, category: "Social Proof", text: "This member walked in 90 days ago unable to do a single pull-up. Watch this.", tip: "Show don't tell. The transformation is the hook — let the video do the work." },
  { id: 28, category: "Social Proof", text: "We've helped 200+ gym owners grow their membership without spending on ads.", tip: "Specific number + specific outcome. Credibility through volume." },
  { id: 29, category: "Social Proof", text: "Our 6am class has had a 2-year waitlist. Here's what we do differently.", tip: "Scarcity as social proof. The waitlist implies extreme desirability." },
  { id: 30, category: "Social Proof", text: "She told me she hadn't exercised in 10 years. This is her 6-month update.", tip: "Long transformation arc. High emotional resonance, high share rate." },
  { id: 31, category: "Social Proof", text: "I've coached 500+ athletes. The ones who succeed all do this one thing.", tip: "Experience-based authority. The 'one thing' creates a curiosity gap too." },
  { id: 32, category: "Social Proof", text: "This gym went from 40 to 200 members in 8 months without a single paid ad.", tip: "Specific numbers make it credible. Pairs well with a breakdown of their strategy." },
  { id: 33, category: "Social Proof", text: "Our retention rate is 94%. Most gyms are at 60%. Here's the difference.", tip: "Stat comparison hook. The gap between 94% and 60% is the story." },
  { id: 34, category: "Social Proof", text: "This is what 1 year of showing up 3x per week looks like.", tip: "Realistic transformation hook. Resonates with beginners who feel overwhelmed." },

  // ── Transformation ──
  { id: 35, category: "Transformation", text: "I lost 30 pounds in 4 months. I didn't change my diet once.", tip: "Controversial transformation claim. The 'no diet change' element is the hook." },
  { id: 36, category: "Transformation", text: "From couch to 5k in 8 weeks. Here's the exact plan we used.", tip: "Specific timeline + specific outcome + promise of a plan. Very high save rate." },
  { id: 37, category: "Transformation", text: "My back pain is gone. I've been doing this every morning for 30 days.", tip: "Pain point resolution hook. Back pain is universal. High relatability." },
  { id: 38, category: "Transformation", text: "What 100 days of consistent training actually looks like (not what you see on Instagram).", tip: "Authenticity hook. The 'not what you see on Instagram' builds trust." },
  { id: 39, category: "Transformation", text: "She joined our gym at 62. This is what she can do now.", tip: "Age-defying transformation. Resonates with older demographics and their families." },
  { id: 40, category: "Transformation", text: "I've been training for 2 years. Here's what nobody told me would happen.", tip: "Long-arc personal story. The 'nobody told me' creates a curiosity gap." },
  { id: 41, category: "Transformation", text: "Before and after 6 months of strength training — but not what you expect.", tip: "The 'not what you expect' signals a non-aesthetic transformation (mindset, energy, etc.)." },
  { id: 42, category: "Transformation", text: "This is what happens to your body when you finally get consistent.", tip: "Educational transformation hook. Works well with a visual timeline graphic." },

  // ── Fear / Loss ──
  { id: 43, category: "Fear / Loss", text: "If your gym doesn't have this, you're losing members every month.", tip: "Loss aversion is powerful. Make the 'this' something genuinely impactful (community, programming, etc.)." },
  { id: 44, category: "Fear / Loss", text: "Most gym owners will be out of business in 3 years. Here's why.", tip: "Urgency hook for gym owner audiences. Follow with actionable solutions." },
  { id: 45, category: "Fear / Loss", text: "You're wasting your workouts if you're not doing this after training.", tip: "Fear of wasted effort. Works for recovery, nutrition, and sleep content." },
  { id: 46, category: "Fear / Loss", text: "The silent reason your members are leaving and never telling you.", tip: "Speaks to gym owners' blind spots. High save rate among gym owner audiences." },
  { id: 47, category: "Fear / Loss", text: "Every year you wait to start training costs you more than you think.", tip: "Long-term consequence framing. Works for recruiting new members." },

  // ── Challenge ──
  { id: 48, category: "Challenge", text: "Most people can't last 30 seconds in a dead hang. Can you?", tip: "Direct challenge to the viewer. Drives comments and duets/stitches." },
  { id: 49, category: "Challenge", text: "Try this 10-minute workout. I bet you can't finish it without stopping.", tip: "Bet/dare framing. Extremely high engagement — people want to prove you wrong." },
  { id: 50, category: "Challenge", text: "I dare you to try this for 7 days and tell me you don't feel different.", tip: "Low-commitment challenge with a bold promise. Great for habit-based content." },
];

const categories: HookCategory[] = ["Pattern Interrupt", "Curiosity Gap", "Controversy", "Social Proof", "Transformation", "Fear / Loss", "Challenge"];

const categoryColors: Record<HookCategory, { bg: string; text: string; border: string }> = {
  "Pattern Interrupt": { bg: "#EFF6FF", text: "#1D4ED8", border: "#BFDBFE" },
  "Curiosity Gap":    { bg: "#F0FDF4", text: "#15803D", border: "#BBF7D0" },
  "Controversy":      { bg: "#FFF7ED", text: "#C2410C", border: "#FED7AA" },
  "Social Proof":     { bg: "#FAF5FF", text: "#7C3AED", border: "#E9D5FF" },
  "Transformation":   { bg: "#F0F9FF", text: "#0369A1", border: "#BAE6FD" },
  "Fear / Loss":      { bg: "#FFF1F2", text: "#BE123C", border: "#FECDD3" },
  "Challenge":        { bg: "#FFFBEB", text: "#B45309", border: "#FDE68A" },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      title="Copy hook"
      style={{
        background: copied ? "#D1FAE5" : "#F1F5F9",
        border: `1px solid ${copied ? "#6EE7B7" : "#E2E8F0"}`,
        borderRadius: "6px",
        padding: "0.375rem 0.625rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "0.3rem",
        fontSize: "0.75rem",
        color: copied ? "#065F46" : "#64748B",
        fontWeight: 600,
        transition: "all 0.2s",
        flexShrink: 0,
      }}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default function ViralHooks() {
  const [activeCategory, setActiveCategory] = useState<HookCategory | "All">("All");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = hooks.filter(h => {
    const matchCat = activeCategory === "All" || h.category === activeCategory;
    const matchSearch = h.text.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(10,14,26,0.97)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0.875rem 0",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <div style={{
              width: "30px", height: "30px", borderRadius: "7px",
              background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.875rem"
            }}>⚡</div>
            <span style={{ fontWeight: 800, fontSize: "1.0625rem", color: "#F0F0F5" }}>
              <span style={{ color: "#3B82F6" }}>Lift</span>Media
            </span>
          </Link>
          <Link href="/" style={{
            fontWeight: 600, fontSize: "0.875rem", color: "#A0A0C0", textDecoration: "none",
            display: "flex", alignItems: "center", gap: "0.375rem"
          }}>
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #0D1B3E 0%, #0A0E1A 100%)",
        padding: "4rem 0 3rem",
        textAlign: "center",
      }}>
        <div className="container">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)",
            borderRadius: "100px", padding: "0.375rem 1rem", marginBottom: "1.25rem"
          }}>
            <Zap size={13} color="#60A5FA" fill="#60A5FA" />
            <span style={{ fontSize: "0.75rem", color: "#60A5FA", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Free Resource · Lift Media
            </span>
          </div>
          <h1 style={{
            fontWeight: 800, fontSize: "clamp(1.5rem, 6vw, 3.25rem)",
            color: "#F0F0F5", lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-0.02em"
          }}>
            50 Viral Hooks for<br />
            <span style={{ color: "#3B82F6" }}>Gym Content</span>
          </h1>
          <p style={{ color: "#8080A0", fontSize: "clamp(0.9375rem, 3vw, 1.0625rem)", maxWidth: "520px", margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
            Copy-paste ready hooks organised by psychology type. Each one includes a coaching tip on how to use it effectively for your gym's content.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[["50", "Hooks"], ["7", "Categories"], ["100%", "Free"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#3B82F6" }}>{num}</div>
                <div style={{ fontSize: "0.8125rem", color: "#6060A0", fontWeight: 600 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Search bar */}
      <div style={{
        background: "#ffffff",
        borderBottom: "1px solid #E2E8F0",
        padding: "1rem 0",
        position: "sticky",
        top: "57px",
        zIndex: 90,
      }}>
        <div className="container">
          {/* Search */}
          <div style={{ position: "relative", marginBottom: "0.875rem" }}>
            <Search size={15} style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", color: "#94A3B8" }} />
            <input
              type="text"
              placeholder="Search hooks..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: "100%", padding: "0.625rem 0.875rem 0.625rem 2.25rem",
                border: "1px solid #E2E8F0", borderRadius: "0.625rem",
                fontSize: "0.9375rem", color: "#0F172A", background: "#F8FAFC",
                outline: "none", boxSizing: "border-box",
              }}
            />
          </div>
          {/* Category pills */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {(["All", ...categories] as (HookCategory | "All")[]).map(cat => {
              const active = activeCategory === cat;
              const color = cat === "All" ? { bg: "#0F172A", text: "#ffffff", border: "#0F172A" } : categoryColors[cat as HookCategory];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "0.3125rem 0.875rem",
                    borderRadius: "100px",
                    border: `1px solid ${active ? color.border : "#E2E8F0"}`,
                    background: active ? (cat === "All" ? "#0F172A" : color.bg) : "#ffffff",
                    color: active ? (cat === "All" ? "#ffffff" : color.text) : "#64748B",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hooks grid */}
      <main style={{ padding: "2rem 0 5rem" }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "#94A3B8" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🔍</div>
              <p style={{ fontWeight: 600 }}>No hooks match your search.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "1rem" }}>
              {filtered.map(hook => {
                const colors = categoryColors[hook.category];
                const isExpanded = expandedId === hook.id;
                return (
                  <div
                    key={hook.id}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #E2E8F0",
                      borderRadius: "0.875rem",
                      padding: "1.25rem",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                      transition: "box-shadow 0.2s, border-color 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#CBD5E1";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E8F0";
                    }}
                    onClick={() => setExpandedId(isExpanded ? null : hook.id)}
                  >
                    {/* Card header */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                        <span style={{
                          fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.05em",
                          textTransform: "uppercase", color: colors.text,
                          background: colors.bg, border: `1px solid ${colors.border}`,
                          borderRadius: "100px", padding: "0.1875rem 0.625rem",
                        }}>
                          {hook.category}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: "#94A3B8", fontWeight: 600 }}>#{hook.id}</span>
                      </div>
                      <CopyButton text={hook.text} />
                    </div>

                    {/* Hook text */}
                    <p style={{
                      fontWeight: 700, fontSize: "clamp(0.9375rem, 2.5vw, 1rem)",
                      color: "#0F172A", lineHeight: 1.55, marginBottom: isExpanded ? "0.875rem" : 0,
                    }}>
                      "{hook.text}"
                    </p>

                    {/* Tip — expanded */}
                    {isExpanded && (
                      <div style={{
                        background: "#F8FAFC", borderTop: "1px solid #E2E8F0",
                        borderRight: "1px solid #E2E8F0",
                        borderBottom: "1px solid #E2E8F0",
                        borderRadius: "0.5rem", padding: "0.75rem 0.875rem",
                        borderLeft: `3px solid ${colors.border}`,
                      }}>
                        <p style={{ fontSize: "0.8125rem", color: "#475569", lineHeight: 1.65, margin: 0 }}>
                          <span style={{ fontWeight: 700, color: "#0F172A" }}>💡 Coaching tip: </span>
                          {hook.tip}
                        </p>
                      </div>
                    )}

                    {/* Expand hint */}
                    <p style={{ fontSize: "0.75rem", color: "#94A3B8", marginTop: "0.625rem", marginBottom: 0 }}>
                      {isExpanded ? "▲ Hide tip" : "▼ Show coaching tip"}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom CTA */}
          <div style={{
            marginTop: "3.5rem",
            background: "linear-gradient(135deg, #0D1B3E, #0A0E1A)",
            borderRadius: "1.25rem",
            padding: "2.5rem",
            textAlign: "center",
            border: "1px solid rgba(59,130,246,0.15)",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🚀</div>
            <h2 style={{
              fontWeight: 800, fontSize: "clamp(1.375rem, 4vw, 1.875rem)",
              color: "#F0F0F5", marginBottom: "0.75rem", lineHeight: 1.2
            }}>
              Hooks are just the beginning.
            </h2>
            <p style={{ color: "#8080A0", fontSize: "clamp(0.9rem, 3vw, 1rem)", maxWidth: "480px", margin: "0 auto 1.75rem", lineHeight: 1.7 }}>
              A great hook gets the click. Lift Media's full content system turns that click into a new member — with scripted reels, automated follow-up, and a strategy built for your gym.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <button style={{
                  background: "#3B82F6", color: "#ffffff", border: "none",
                  borderRadius: "0.75rem", padding: "0.875rem 1.75rem",
                  fontWeight: 700, fontSize: "0.9375rem", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  <Zap size={15} fill="currentColor" /> Get Early Access
                </button>
              </Link>
              <Link href="/course/basic-filming" style={{ textDecoration: "none" }}>
                <button style={{
                  background: "transparent", color: "#A0A0C0",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "0.75rem", padding: "0.875rem 1.75rem",
                  fontWeight: 600, fontSize: "0.9375rem", cursor: "pointer",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  Take the Free Filming Course →
                </button>
              </Link>
            </div>
          </div>

          {/* Share row */}
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.875rem", color: "#94A3B8", marginBottom: "0.75rem" }}>
              Share this with your gym staff or coaching team
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
              style={{
                background: "#F1F5F9", border: "1px solid #E2E8F0",
                borderRadius: "0.625rem", padding: "0.5rem 1.25rem",
                fontSize: "0.875rem", color: "#475569", fontWeight: 600,
                cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.375rem",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              <Copy size={13} /> Copy page link
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
