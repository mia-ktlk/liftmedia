/**
 * proOfferings.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Defines the 6 unique "Lift Media Member" locked content blocks.
 * Each resource in resourcesData.ts references one of these by `id`.
 *
 * Design intent: each offering should feel like something a gym owner would
 * genuinely pay for — not just "more content" but a specific tool, template,
 * or system that saves real time or makes real money.
 */

export interface ProOffering {
  id: string;
  /** Short badge label shown in the lock icon area */
  badge: string;
  /** Headline of the locked block */
  headline: string;
  /** 1–2 sentence sell copy shown before the blur */
  teaser: string;
  /** Emoji icon for visual identity */
  icon: string;
  /** 3–5 bullet points of what's inside (shown blurred) */
  bullets: string[];
  /** The "unlock" CTA label */
  ctaLabel: string;
  /** Accent colour for the block (hex) */
  accentColor: string;
}

export const proOfferings: ProOffering[] = [
  // ── 1. 90-Day Content Machine ──────────────────────────────────────────
  {
    id: "content-machine",
    badge: "Members Only",
    icon: "📅",
    headline: "90-Day Content Machine: Done-For-You Calendar",
    teaser:
      "The free calendar covers 30 days. Members get the full 90-day system — every post planned, every hook written, every format mapped out by week and by funnel stage.",
    bullets: [
      "90 daily post briefs with hook, format, caption angle, and CTA",
      "Week-by-week funnel balance tracker (TOF / MOF / BOF split)",
      "Seasonal campaign overlays for January, summer, and back-to-school rushes",
      "Editable Google Sheets version with auto-scheduling columns",
      "Bonus: 12 'emergency post' ideas for days you have nothing planned",
    ],
    ctaLabel: "Unlock the 90-Day Calendar",
    accentColor: "#f59e0b",
  },

  // ── 2. Competitor Content Audit Template ──────────────────────────────
  {
    id: "competitor-audit",
    badge: "Members Only",
    icon: "🔍",
    headline: "Competitor Content Audit: Steal What's Working in Your Market",
    teaser:
      "Knowing what your local competitors are posting — and what's performing — is worth more than any general strategy guide. This template shows you exactly how to reverse-engineer their best content.",
    bullets: [
      "Step-by-step audit framework for analysing any gym's Instagram",
      "Engagement rate benchmarks by gym type (CrossFit, HIIT, PT studio, etc.)",
      "Content gap identifier: what they're NOT posting that you should be",
      "Hook swipe file: how to ethically adapt their best-performing hooks",
      "Tracking spreadsheet to monitor 5 competitors monthly",
    ],
    ctaLabel: "Unlock the Competitor Audit",
    accentColor: "#8b5cf6",
  },

  // ── 3. Reel-to-DM Conversion Script Pack ─────────────────────────────
  {
    id: "dm-scripts",
    badge: "Members Only",
    icon: "💬",
    headline: "Reel-to-DM Conversion Scripts: Turn Comments Into Consultations",
    teaser:
      "Views are vanity. DMs are money. These word-for-word scripts show you exactly what to say when someone comments on your reel — turning passive viewers into booked consultations without being pushy.",
    bullets: [
      "12 DM conversation openers for different reel types",
      "The 3-message sequence that books a consultation without a sales pitch",
      "Objection-handling scripts for 'I'll think about it', 'too expensive', and 'not ready yet'",
      "Follow-up sequence for leads who go cold after showing interest",
      "Copy-paste templates for Instagram, Facebook, and WhatsApp",
    ],
    ctaLabel: "Unlock the DM Scripts",
    accentColor: "#10b981",
  },

  // ── 4. Local SEO Domination Toolkit ──────────────────────────────────
  {
    id: "seo-toolkit",
    badge: "Members Only",
    icon: "📍",
    headline: "Local SEO Domination Toolkit: Rank #1 in Your Area",
    teaser:
      "The free article explains the strategy. The toolkit gives you the exact templates, keyword lists, and Google Business Profile scripts to execute it in a single afternoon.",
    bullets: [
      "Pre-researched keyword list for 8 gym types (CrossFit, yoga, PT, boxing, etc.)",
      "Google Business Profile post templates (weekly, monthly, event-based)",
      "Review request scripts — text, email, and in-person versions",
      "Local citation checklist: 25 directories your gym should be listed on",
      "Monthly SEO audit checklist to maintain your ranking",
    ],
    ctaLabel: "Unlock the SEO Toolkit",
    accentColor: "#3b82f6",
  },

  // ── 5. AI Content OS (Notion Template) ───────────────────────────────
  {
    id: "ai-content-os",
    badge: "Members Only",
    icon: "🤖",
    headline: "AI Content OS: Your Entire Content System in One Notion Template",
    teaser:
      "Stop juggling prompts, ideas, and drafts across 5 different apps. The AI Content OS is a complete Notion workspace that connects your content calendar, prompt library, reel scripts, and performance tracker in one place.",
    bullets: [
      "Notion template with 200+ pre-built AI prompts organised by content type",
      "Content brief generator: fill in 3 fields, get a full reel script",
      "Repurposing engine: turn one reel into 5 formats automatically",
      "Brand voice guide template so AI always sounds like you",
      "Weekly content review dashboard with engagement tracking",
    ],
    ctaLabel: "Unlock the AI Content OS",
    accentColor: "#6366f1",
  },

  // ── 6. Membership Sales Funnel Blueprint ─────────────────────────────
  {
    id: "sales-funnel",
    badge: "Members Only",
    icon: "🎯",
    headline: "Membership Sales Funnel Blueprint: The Exact System We Use for Clients",
    teaser:
      "This is the full end-to-end funnel — from first reel view to signed membership — that we build for every Lift Media client. Now available as a self-serve blueprint for members.",
    bullets: [
      "Full funnel map: content types, touchpoints, and conversion triggers at each stage",
      "Lead magnet templates: 3 proven free offers that attract serious prospects",
      "Email nurture sequence: 7 emails that turn leads into members over 14 days",
      "Consultation call framework: the 20-minute call structure that closes 60%+ of leads",
      "Retargeting content strategy: what to post to bring back people who didn't convert",
    ],
    ctaLabel: "Unlock the Funnel Blueprint",
    accentColor: "#ef4444",
  },
];

/** Quick lookup by id */
export function getProOffering(id: string): ProOffering | undefined {
  return proOfferings.find((o) => o.id === id);
}
