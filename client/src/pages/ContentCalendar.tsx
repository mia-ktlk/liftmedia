// 30-Day Gym Content Calendar Resource Page
// Design: Light mode content area, dark navy header/sidebar, electric blue accents
// Funnel framework: TOF (awareness) / MOF (consideration) / BOF (conversion)
// Social proof strategy woven throughout

import { useState } from "react";
import { Link } from "wouter";
import LockedProBlock from "@/components/LockedProBlock";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { getProOffering } from "@/data/proOfferings";

// ─── Types ──────────────────────────────────────────────────────────────────

type FunnelStage = "TOF" | "MOF" | "BOF";
type PostFormat = "Reel" | "Carousel" | "Story" | "Static";

interface DayPost {
  day: number;
  stage: FunnelStage;
  format: PostFormat;
  title: string;
  hook: string;
  caption: string;
  tip: string;
}

// ─── Calendar Data ───────────────────────────────────────────────────────────

const calendarData: DayPost[] = [
  // WEEK 1 — Foundation & Awareness (TOF heavy)
  {
    day: 1,
    stage: "TOF",
    format: "Reel",
    title: "Introduce Yourself & Your Gym",
    hook: "\"I opened this gym because I was tired of seeing gym owners struggle to fill their classes...\"",
    caption: "Tell your story in 30–60 seconds. Who you are, why you started, who you serve. Look off-camera (interview style) — it feels more authentic than reading to the lens.",
    tip: "Use the ChatGPT voice mode interviewer hack — have it ask you 'Why did you open your gym?' and film your natural answer.",
  },
  {
    day: 2,
    stage: "TOF",
    format: "Carousel",
    title: "3 Mistakes Beginners Make at the Gym",
    hook: "\"Stop doing this if you want to actually see results...\"",
    caption: "Educational carousel — each slide = one mistake + the fix. End slide = CTA to follow for more. Carousels that act as 'cheat sheets' get saved and shared.",
    tip: "First slide is your hook — treat it like a thumbnail. Bold text, clear contrast, no clutter.",
  },
  {
    day: 3,
    stage: "MOF",
    format: "Reel",
    title: "Gym Tour — Show Your Space",
    hook: "\"This is what $X/month gets you at [Gym Name]...\"",
    caption: "Walk through your gym like you're showing a friend around. Point out what makes it special — the community wall, the equipment, the vibe. Authenticity > production quality.",
    tip: "Film during a class so there's energy in the background. Empty gyms look sad on camera.",
  },
  {
    day: 4,
    stage: "TOF",
    format: "Reel",
    title: "Fitness Myth Busted",
    hook: "\"You've been told this your whole life and it's wrong...\"",
    caption: "Pick one common fitness myth your members believe. Bust it with confidence and back it up with a simple explanation. Controversy + education = shares.",
    tip: "Keep it under 30 seconds. One myth, one truth, one CTA.",
  },
  {
    day: 5,
    stage: "TOF",
    format: "Carousel",
    title: "5 Signs You're Ready to Join a Gym",
    hook: "\"If you've thought about joining a gym more than 3 times this month, read this...\"",
    caption: "Relatable checklist carousel. Each slide = one sign. Last slide = 'If you checked 3 or more, DM us the word READY.' This is a soft BOF lead gen move inside a TOF post.",
    tip: "The DM trigger is a powerful low-friction CTA. People who DM are warm leads.",
  },
  {
    day: 6,
    stage: "BOF",
    format: "Reel",
    title: "Member Transformation Story #1",
    hook: "\"[Member name] walked in 90 days ago and said they just wanted to lose 10 pounds...\"",
    caption: "Film a short interview with a real member. Ask: 'What was your life like before joining? What's different now?' Their words are more powerful than anything you could write.",
    tip: "Get permission first. Even a text screenshot of a member saying 'I love this gym' is social proof. Start collecting these from day one.",
  },
  {
    day: 7,
    stage: "TOF",
    format: "Reel",
    title: "Quick Workout You Can Do at Home",
    hook: "\"No gym? No problem. Here's a 10-minute workout that actually works...\"",
    caption: "TOF content that reaches people who don't have a gym yet. You're building trust with future members. End with: 'If you want to take this further, we'd love to have you in.'",
    tip: "This is top-of-funnel gold — it reaches non-members and positions you as generous and knowledgeable.",
  },

  // WEEK 2 — Community & Culture (MOF heavy)
  {
    day: 8,
    stage: "MOF",
    format: "Reel",
    title: "Meet a Coach / Staff Member",
    hook: "\"Meet [Name] — the person who's going to change the way you think about fitness...\"",
    caption: "Short coach intro. Their background, their coaching philosophy, one thing they love about working at your gym. This builds trust and makes your brand feel human.",
    tip: "Film this interview style — coach looks slightly off camera, you ask the questions from behind the lens.",
  },
  {
    day: 9,
    stage: "TOF",
    format: "Carousel",
    title: "What to Eat Before a Workout",
    hook: "\"The reason you feel like garbage mid-workout is probably this...\"",
    caption: "Simple, actionable nutrition tip. Not medical advice — just practical guidance. Educational carousels that solve a real problem get saved constantly.",
    tip: "Add a disclaimer slide: 'Not medical/nutritional advice — always consult a professional.' Protects you and adds credibility.",
  },
  {
    day: 10,
    stage: "MOF",
    format: "Reel",
    title: "Behind the Scenes — Class Setup",
    hook: "\"Here's what happens 30 minutes before every class at [Gym Name]...\"",
    caption: "BTS content humanises your brand. Show the work that goes into creating a great experience. Members and prospects both love seeing the effort behind the scenes.",
    tip: "Add upbeat music and quick cuts. Keep it under 30 seconds. The goal is energy and warmth, not information.",
  },
  {
    day: 11,
    stage: "TOF",
    format: "Reel",
    title: "\"Why Most People Quit the Gym\" — Honest Take",
    hook: "\"Most people quit the gym within 6 weeks. Here's the real reason why...\"",
    caption: "Honest, empathetic content. Don't shame quitters — explain the systemic reasons (wrong environment, no accountability, no community). Then position your gym as the solution without being salesy.",
    tip: "This is a great trial reel candidate. Post it to trial reels first to test the hook before pushing to your feed.",
  },
  {
    day: 12,
    stage: "BOF",
    format: "Static",
    title: "Screenshot Social Proof — DM or Review",
    hook: "\"We got this DM yesterday and it made our whole week...\"",
    caption: "Share a real DM, Google review, or text from a member (with permission). Unscripted social proof is more believable than polished testimonials. The rawer, the better.",
    tip: "Start a 'social proof folder' on your phone right now. Screenshot every positive DM and review you get. You'll thank yourself in 30 days.",
  },
  {
    day: 13,
    stage: "TOF",
    format: "Reel",
    title: "Common Question You Get Asked Every Week",
    hook: "\"I get asked this question at least 5 times a week so I'm just going to answer it here...\"",
    caption: "Answer a FAQ in 30–60 seconds. This is educational, builds authority, and signals to the algorithm that your content is relevant to your niche.",
    tip: "Keep a running notes app list of questions members and prospects ask you. That's your content calendar.",
  },
  {
    day: 14,
    stage: "MOF",
    format: "Reel",
    title: "Community Moment — Class Energy Clip",
    hook: "\"This is what a Tuesday at [Gym Name] looks like...\"",
    caption: "Raw, authentic class footage. People cheering, high-fiving, struggling together. This is the content that makes someone think 'I want to be part of that.' Community is your biggest differentiator.",
    tip: "Get consent from members before posting their faces. A simple 'Can I post this?' is all you need.",
  },

  // WEEK 3 — Social Proof & Trust (BOF heavy)
  {
    day: 15,
    stage: "TOF",
    format: "Carousel",
    title: "\"The 3 Types of Gym Members\" — Relatable Content",
    hook: "\"Which one are you? 👇\"",
    caption: "Relatable, shareable carousel. Funny archetypes that gym members recognise in themselves or their friends. This gets shared and tagged, expanding your reach organically.",
    tip: "End with: 'Tag a friend who's one of these.' Tags = free reach.",
  },
  {
    day: 16,
    stage: "BOF",
    format: "Reel",
    title: "Member Transformation Story #2",
    hook: "\"[Member] came in saying they had 'tried everything.' Here's what actually worked...\"",
    caption: "Second transformation story — different type of member than Day 6. Variety in social proof shows your gym works for different people with different goals.",
    tip: "The 'rapid-fire testimonial' format works well here: 3–4 members each saying one sentence. Fast, punchy, credible.",
  },
  {
    day: 17,
    stage: "TOF",
    format: "Reel",
    title: "Workout Tip — Form Fix",
    hook: "\"You're probably doing this wrong and it's why your [body part] hurts...\"",
    caption: "Quick form correction video. Before/after demo. This type of content gets saved and shared by people who recognise the mistake in themselves.",
    tip: "Film the 'wrong' version first, then the 'right' version. The contrast is the content.",
  },
  {
    day: 18,
    stage: "MOF",
    format: "Reel",
    title: "Your 'Why' — Personal Story",
    hook: "\"I almost didn't open this gym. Here's what changed my mind...\"",
    caption: "Personal founder story. Vulnerability builds trust. You don't need to share everything — just enough to be real. People buy from people they feel they know.",
    tip: "Use the ChatGPT voice mode interviewer hack for this one. Have it ask 'What almost stopped you from opening your gym?' and film your honest answer.",
  },
  {
    day: 19,
    stage: "TOF",
    format: "Carousel",
    title: "\"Gym Myths vs. Reality\" Cheat Sheet",
    hook: "\"Everything you've been told about getting fit is probably wrong. Here's the truth...\"",
    caption: "Save-worthy carousel. 5–7 myths with the reality on each slide. Educational, shareable, and positions you as the expert who cuts through the noise.",
    tip: "This is a great lead magnet candidate — 'Save this for the next time someone tells you [myth].'",
  },
  {
    day: 20,
    stage: "BOF",
    format: "Reel",
    title: "\"How to Get Started\" — Remove the Barrier",
    hook: "\"If you've been thinking about joining a gym but don't know where to start, this is for you...\"",
    caption: "Walk through exactly what happens when someone joins your gym. First day experience, what to expect, how welcoming it is. Remove every fear and objection a prospect might have.",
    tip: "This is your highest-converting piece of BOF content. Film it with warmth and specificity.",
  },
  {
    day: 21,
    stage: "MOF",
    format: "Static",
    title: "Member Spotlight — Community Post",
    hook: "\"Member of the Week: [Name]\"",
    caption: "Feature a member. Their goal, their progress, one thing they love about the gym. This makes existing members feel valued and shows prospects the kind of community they'd be joining.",
    tip: "Ask the member to share the post to their Stories. Their network = your new audience.",
  },

  // WEEK 4 — Conversion & Momentum (BOF + MOF)
  {
    day: 22,
    stage: "TOF",
    format: "Reel",
    title: "\"A Day in the Life\" at Your Gym",
    hook: "\"6am to 8pm at [Gym Name] — here's what actually happens...\"",
    caption: "Time-lapse style day-in-the-life. Early morning class energy, afternoon training, evening community. Shows the full picture of your gym culture.",
    tip: "Add timestamps as text overlays. It makes the video feel structured and intentional.",
  },
  {
    day: 23,
    stage: "TOF",
    format: "Carousel",
    title: "Nutrition Tip — Simple Meal Prep Idea",
    hook: "\"You don't need a meal prep service. You need this 20-minute Sunday routine...\"",
    caption: "Practical, actionable nutrition content. Not about your gym directly — just genuinely useful. This is the kind of content that makes people follow you for the value, not just the gym.",
    tip: "Educational content that isn't directly about your gym builds a broader audience. Some of those followers will eventually become members.",
  },
  {
    day: 24,
    stage: "BOF",
    format: "Reel",
    title: "Member Transformation Story #3 — Long-Term Member",
    hook: "\"[Member] has been with us for 2 years. Here's what 2 years of consistency actually looks like...\"",
    caption: "Long-term transformation. Not just physical — mental, lifestyle, community. This is the most powerful social proof you have. It shows what's possible with sustained commitment.",
    tip: "Ask: 'What would you tell someone who's on the fence about joining?' Their answer is your best sales pitch.",
  },
  {
    day: 25,
    stage: "MOF",
    format: "Reel",
    title: "\"What Makes Us Different\" — Direct Camera",
    hook: "\"There are 12 gyms within 5 miles of us. Here's why our members choose us...\"",
    caption: "Confident, direct-to-camera explanation of your differentiators. Not arrogant — honest. Community, coaching quality, programming, culture. Speak to your ideal member.",
    tip: "Don't try to be everything to everyone. Speak directly to your niche — CrossFit, HIIT, strength training, etc.",
  },
  {
    day: 26,
    stage: "TOF",
    format: "Reel",
    title: "Trending Audio + Gym Content",
    hook: "Use a trending audio clip with gym footage that matches the vibe",
    caption: "Trending audio can dramatically expand reach. Pair it with authentic gym footage — class energy, a PR moment, a funny coach moment. Keep it on-brand.",
    tip: "Check Instagram's Reels tab for trending audio. The lightning bolt icon next to an audio name means it's trending.",
  },
  {
    day: 27,
    stage: "BOF",
    format: "Carousel",
    title: "FAQ — \"What Does Membership Include?\"",
    hook: "\"The 5 questions we get asked before someone joins [Gym Name]...\"",
    caption: "Answer your 5 most common pre-joining questions. Pricing, schedule, what to bring, beginner-friendliness, trial options. Remove every objection before they DM you.",
    tip: "End with: 'Still have questions? DM us — a real person will reply, not a bot.' This is your conversion slide.",
  },
  {
    day: 28,
    stage: "MOF",
    format: "Reel",
    title: "Coaches Roundtable — Quick Tips",
    hook: "\"We asked all our coaches the same question. Here's what they said...\"",
    caption: "Feature multiple coaches each giving a 5-second tip. Fast cuts, high energy. Shows team depth and makes your gym feel like a real community of experts.",
    tip: "Film this in one batch session. Ask each coach: 'What's the one thing you wish every new member knew?' Edit into a single 30-second reel.",
  },
  {
    day: 29,
    stage: "TOF",
    format: "Reel",
    title: "Motivational / Mindset Content",
    hook: "\"The reason you're not seeing results has nothing to do with your workout...\"",
    caption: "Mindset content reaches a broad audience and gets shared. Keep it honest and specific — not generic motivational fluff. Tie it back to something real you've seen in your gym.",
    tip: "The best motivational content comes from real conversations you've had with members. What do you tell people when they want to quit?",
  },
  {
    day: 30,
    stage: "BOF",
    format: "Reel",
    title: "Month Recap + Soft Offer",
    hook: "\"30 days of content later — here's what we've learned about our community...\"",
    caption: "Recap the month. Highlight member wins, community moments, what you've been working on. End with a soft, genuine offer: 'If you've been watching and thinking about joining — now's the time. DM us the word START.'",
    tip: "This is your conversion post. The audience who watched all month is warm. A genuine, low-pressure CTA here will convert.",
  },
];

// ─── Stage Config ─────────────────────────────────────────────────────────────

const stageConfig = {
  TOF: {
    label: "Top of Funnel",
    short: "TOF",
    color: "#3b82f6",
    bg: "#eff6ff",
    border: "#bfdbfe",
    description: "Awareness — reach new eyes",
  },
  MOF: {
    label: "Middle of Funnel",
    short: "MOF",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    border: "#ddd6fe",
    description: "Consideration — build trust",
  },
  BOF: {
    label: "Bottom of Funnel",
    short: "BOF",
    color: "#10b981",
    bg: "#ecfdf5",
    border: "#a7f3d0",
    description: "Conversion — turn followers into members",
  },
};

const formatColors: Record<PostFormat, string> = {
  Reel: "#f59e0b",
  Carousel: "#6366f1",
  Story: "#ec4899",
  Static: "#64748b",
};

// ─── Components ──────────────────────────────────────────────────────────────

function FunnelExplainer() {
  return (
    <div style={{
      background: "#0f172a",
      borderRadius: "1rem",
      padding: "2rem",
      marginBottom: "2.5rem",
    }}>
      <h2 style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        Understanding the Content Funnel
      </h2>
      <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
        Most gym owners post randomly — a workout tip here, a promo there. The gyms that grow consistently treat their content like a sales funnel: different posts serve different purposes depending on where someone is in their journey from stranger to member.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "1rem" }}>
        {(["TOF", "MOF", "BOF"] as FunnelStage[]).map((stage) => {
          const s = stageConfig[stage];
          return (
            <div key={stage} style={{
              background: "rgba(255,255,255,0.05)",
              border: `1px solid rgba(255,255,255,0.1)`,
              borderRadius: "0.75rem",
              padding: "1.25rem",
            }}>
              <div style={{
                display: "inline-block",
                background: s.color,
                color: "#fff",
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                padding: "0.25rem 0.6rem",
                borderRadius: "999px",
                marginBottom: "0.75rem",
              }}>{stage}</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.25rem" }}>{s.label}</div>
              <div style={{ color: "#94a3b8", fontSize: "0.82rem", marginBottom: "0.75rem" }}>{s.description}</div>
              <div style={{ color: "#64748b", fontSize: "0.78rem" }}>
                {stage === "TOF" && "Educational tips, myths, relatable humor, trending content — ~50% of posts"}
                {stage === "MOF" && "Behind the scenes, team intros, your story, community moments — ~30% of posts"}
                {stage === "BOF" && "Testimonials, transformations, FAQs, soft offers, DM triggers — ~20% of posts"}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{
        marginTop: "1.5rem",
        background: "rgba(59,130,246,0.1)",
        border: "1px solid rgba(59,130,246,0.2)",
        borderRadius: "0.75rem",
        padding: "1rem 1.25rem",
      }}>
        <p style={{ color: "#93c5fd", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
          <strong style={{ color: "#60a5fa" }}>The Social Proof Rule:</strong> Every prospect will scroll your Instagram before they ever walk through your door. Make sure your social proof (testimonials, transformations, member moments) is visible in your first 9 posts. Think of your grid as your sales page — it needs to answer: "Is this gym for someone like me?"
        </p>
      </div>
    </div>
  );
}

function SocialProofSection() {
  return (
    <div style={{
      background: "#0f172a",
      borderRadius: "1rem",
      padding: "2rem",
      marginBottom: "2.5rem",
    }}>
      <h2 style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        Social Proof Strategy
      </h2>
      <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
        Social proof is not about bragging — it's about helping prospects see themselves in your members. There are three types, and you need all three.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
        {[
          {
            title: "Micro Social Proof",
            icon: "💬",
            desc: "Screenshots of DMs, comments, and texts from members. Raw and unscripted — the most believable kind. Start collecting these from day one.",
            example: "\"Just got this DM after yesterday's class...\"",
          },
          {
            title: "Macro Social Proof",
            icon: "🏆",
            desc: "Before/after transformations, written reviews, video testimonials. Takes longer to collect but has the highest conversion power.",
            example: "\"[Member] has been with us for 90 days. Here's their story...\"",
          },
          {
            title: "Expert Social Proof",
            icon: "⭐",
            desc: "Your credentials, certifications, partnerships, and media mentions. Builds authority with people who don't know you yet.",
            example: "\"Our head coach is a [certification] certified trainer with 10 years of experience...\"",
          },
        ].map((item) => (
          <div key={item.title} style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "0.75rem",
            padding: "1.25rem",
          }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.4rem" }}>{item.title}</div>
            <div style={{ color: "#94a3b8", fontSize: "0.8rem", lineHeight: 1.5, marginBottom: "0.75rem" }}>{item.desc}</div>
            <div style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: "0.5rem",
              padding: "0.5rem 0.75rem",
              color: "#93c5fd",
              fontSize: "0.75rem",
              fontStyle: "italic",
            }}>{item.example}</div>
          </div>
        ))}
      </div>
      <div style={{
        background: "rgba(16,185,129,0.1)",
        border: "1px solid rgba(16,185,129,0.2)",
        borderRadius: "0.75rem",
        padding: "1rem 1.25rem",
      }}>
        <p style={{ color: "#6ee7b7", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
          <strong style={{ color: "#34d399" }}>Pro tip from Personal Brand Launch:</strong> The "rapid-fire testimonial" format — 3–4 members each saying one sentence in quick cuts — is one of the highest-performing social proof formats for gyms. It's fast, authentic, and shows variety. Ask members: "What would you tell someone who's on the fence about joining?" Film it in 60 seconds.
        </p>
      </div>
    </div>
  );
}

function DayCard({ post, isExpanded, onToggle }: { post: DayPost; isExpanded: boolean; onToggle: () => void }) {
  const stage = stageConfig[post.stage];
  const fmtColor = formatColors[post.format];
  const weekNum = Math.ceil(post.day / 7);
  const weekLabels = ["Foundation & Awareness", "Community & Culture", "Social Proof & Trust", "Conversion & Momentum"];

  return (
    <div
      onClick={onToggle}
      style={{
        background: "#fff",
        borderTop: `1px solid ${isExpanded ? stage.border : "#e2e8f0"}`,
        borderRight: `1px solid ${isExpanded ? stage.border : "#e2e8f0"}`,
        borderBottom: `1px solid ${isExpanded ? stage.border : "#e2e8f0"}`,
        borderLeft: `4px solid ${stage.color}`,
        borderRadius: "0.75rem",
        padding: "1rem 1.25rem",
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: isExpanded ? "0 4px 20px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
        <div style={{
          background: "#0f172a",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 800,
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}>
          {post.day}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", lineHeight: 1.3 }}>{post.title}</div>
        </div>
        <div style={{ display: "flex", gap: "0.4rem", alignItems: "center", flexShrink: 0 }}>
          <span style={{
            background: stage.bg,
            color: stage.color,
            border: `1px solid ${stage.border}`,
            fontSize: "0.65rem",
            fontWeight: 800,
            letterSpacing: "0.08em",
            padding: "0.2rem 0.5rem",
            borderRadius: "999px",
          }}>{post.stage}</span>
          <span style={{
            background: `${fmtColor}15`,
            color: fmtColor,
            fontSize: "0.65rem",
            fontWeight: 700,
            padding: "0.2rem 0.5rem",
            borderRadius: "999px",
            border: `1px solid ${fmtColor}30`,
          }}>{post.format}</span>
          <span style={{
            color: "#94a3b8",
            fontSize: "0.75rem",
            marginLeft: "0.25rem",
            transition: "transform 0.2s",
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            display: "inline-block",
          }}>▾</span>
        </div>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ marginBottom: "0.75rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.3rem" }}>Hook</div>
            <div style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "0.5rem",
              padding: "0.6rem 0.75rem",
              color: "#0f172a",
              fontSize: "0.85rem",
              fontStyle: "italic",
              lineHeight: 1.5,
            }}>{post.hook}</div>
          </div>
          <div style={{ marginBottom: "0.75rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.3rem" }}>Content Direction</div>
            <div style={{ color: "#334155", fontSize: "0.85rem", lineHeight: 1.6 }}>{post.caption}</div>
          </div>
          <div style={{
            background: "#fffbeb",
            border: "1px solid #fde68a",
            borderRadius: "0.5rem",
            padding: "0.6rem 0.75rem",
            display: "flex",
            gap: "0.5rem",
            alignItems: "flex-start",
          }}>
            <span style={{ fontSize: "0.9rem", flexShrink: 0 }}>💡</span>
            <div style={{ color: "#92400e", fontSize: "0.8rem", lineHeight: 1.5 }}>{post.tip}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ContentCalendar() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [filterStage, setFilterStage] = useState<FunnelStage | "ALL">("ALL");
  const [expandAll, setExpandAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState<string | undefined>(undefined);
  const openModal = (source?: string) => { setModalSource(source); setModalOpen(true); };

  const filtered = filterStage === "ALL" ? calendarData : calendarData.filter(p => p.stage === filterStage);

  // Days 1-7 → week 1, 8-14 → week 2, 15-21 → week 3, 22-30 → week 4
  const weekGroups = [1, 2, 3, 4].map(w => ({
    week: w,
    label: ["Foundation & Awareness", "Community & Culture", "Social Proof & Trust", "Conversion & Momentum"][w - 1],
    posts: filtered.filter(p => {
      if (w === 4) return p.day >= 22;
      return Math.ceil(p.day / 7) === w;
    }),
  }));

  const tofCount = calendarData.filter(p => p.stage === "TOF").length;
  const mofCount = calendarData.filter(p => p.stage === "MOF").length;
  const bofCount = calendarData.filter(p => p.stage === "BOF").length;

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Top nav */}
      <div style={{
        background: "#0a1628",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "1rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <div style={{
            width: "2rem",
            height: "2rem",
            background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            borderRadius: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
          }}>⚡</div>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>
            <span style={{ color: "#60a5fa" }}>Lift</span>Media
          </span>
        </Link>
        <Link href="/" style={{
          color: "#94a3b8",
          textDecoration: "none",
          fontSize: "0.85rem",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
        }}>
          ← Back to Home
        </Link>
      </div>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%)",
        padding: "3rem 1.5rem 2.5rem",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "rgba(16,185,129,0.15)",
          border: "1px solid rgba(16,185,129,0.3)",
          borderRadius: "999px",
          padding: "0.35rem 1rem",
          marginBottom: "1.25rem",
        }}>
          <span style={{ color: "#34d399", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>FREE RESOURCE</span>
        </div>
        <h1 style={{
          color: "#fff",
          fontSize: "clamp(1.5rem, 5vw, 2.75rem)",
          fontWeight: 900,
          lineHeight: 1.15,
          marginBottom: "1rem",
          maxWidth: "700px",
          margin: "0 auto 1rem",
        }}>
          30-Day Gym Content Calendar
        </h1>
        <p style={{
          color: "#94a3b8",
          fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
          maxWidth: "560px",
          margin: "0 auto 1.5rem",
          lineHeight: 1.6,
        }}>
          A strategic mix of top, middle, and bottom-of-funnel content — designed to build awareness, earn trust, and convert followers into members.
        </p>
        {/* Stats row */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          {[
            { label: "TOF Posts", value: tofCount, color: "#3b82f6" },
            { label: "MOF Posts", value: mofCount, color: "#8b5cf6" },
            { label: "BOF Posts", value: bofCount, color: "#10b981" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ color: s.color, fontSize: "1.75rem", fontWeight: 900 }}>{s.value}</div>
              <div style={{ color: "#64748b", fontSize: "0.75rem", fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <FunnelExplainer />
        <SocialProofSection />

        {/* Filter + expand controls */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginBottom: "1.5rem",
        }}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {(["ALL", "TOF", "MOF", "BOF"] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilterStage(f)}
                style={{
                  padding: "0.4rem 0.9rem",
                  borderRadius: "999px",
                  border: "1px solid",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.15s",
                  borderColor: filterStage === f ? (f === "ALL" ? "#0f172a" : stageConfig[f]?.color || "#0f172a") : "#e2e8f0",
                  background: filterStage === f ? (f === "ALL" ? "#0f172a" : stageConfig[f]?.bg || "#f8fafc") : "#fff",
                  color: filterStage === f ? (f === "ALL" ? "#fff" : stageConfig[f]?.color || "#0f172a") : "#64748b",
                }}
              >
                {f === "ALL" ? "All 30 Days" : `${f} — ${stageConfig[f].description}`}
              </button>
            ))}
          </div>
          <button
            onClick={() => setExpandAll(!expandAll)}
            style={{
              padding: "0.4rem 0.9rem",
              borderRadius: "999px",
              border: "1px solid #e2e8f0",
              fontSize: "0.78rem",
              fontWeight: 600,
              cursor: "pointer",
              background: "#fff",
              color: "#64748b",
            }}
          >
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>

        {/* Weekly sections */}
        {weekGroups.map(({ week, label, posts }) => {
          if (posts.length === 0) return null;
          return (
            <div key={week} style={{ marginBottom: "2.5rem" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}>
                <div style={{
                  background: "#0f172a",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  padding: "0.3rem 0.75rem",
                  borderRadius: "999px",
                  letterSpacing: "0.05em",
                }}>WEEK {week}</div>
                <div style={{ color: "#334155", fontWeight: 700, fontSize: "1rem" }}>{label}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {posts.map(post => (
                  <DayCard
                    key={post.day}
                    post={post}
                    isExpanded={expandAll || expandedDay === post.day}
                    onToggle={() => setExpandedDay(expandedDay === post.day && !expandAll ? null : post.day)}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* ── Locked Pro Block — 90-Day Content Machine ────────────────── */}
        {(() => {
          const offering = getProOffering("content-machine");
          return offering ? (
            <div style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>
              <LockedProBlock offering={offering} onUnlock={() => openModal("content-calendar-pro")} />
            </div>
          ) : null;
        })()}

        {/* Bottom CTA */}
        <div style={{
          background: "#0f172a",
          borderRadius: "1rem",
          padding: "2rem",
          textAlign: "center",
          marginTop: "1rem",
        }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>🚀</div>
          <h3 style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem" }}>
            Want Us to Build This System For You?
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.25rem", maxWidth: "480px", margin: "0 auto 1.25rem" }}>
            Lift Media builds done-for-you content systems that turn your everyday coaching into leads, members, and growth — without adding more to your plate.
          </p>
          <Link href="/" style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            color: "#fff",
            padding: "0.75rem 2rem",
            borderRadius: "0.75rem",
            fontWeight: 700,
            fontSize: "0.95rem",
            textDecoration: "none",
          }}>
            Get Early Access ⚡
          </Link>
          <div style={{ marginTop: "1rem" }}>
            <Link href="/resources/viral-hooks" style={{ color: "#60a5fa", fontSize: "0.85rem", textDecoration: "none" }}>
              ← Also check out: 50 Viral Hooks for Gyms
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .cal-filter-row { flex-direction: column !important; align-items: stretch !important; }
          .cal-filter-row > div { flex-wrap: wrap !important; }
          .cal-filter-row button { flex: 1 !important; min-width: 0 !important; }
        }
      `}</style>
      {/* Early Access Modal */}
      <EarlyAccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source={modalSource}
      />
    </div>
  );
}
