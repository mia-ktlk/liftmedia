// ─── Resources Data ─────────────────────────────────────────────────────────
// All resource entries for the Resources hub.
// type: "article" = long-form marketing advice article
//       "tool"    = downloadable / interactive resource (checklist, calendar, etc.)
//
// Article content uses a simple block format:
//   { type: "h2" | "h3" | "p" | "ul" | "ol" | "tip" | "callout" | "cta-course", ... }

export type ResourceBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; icon: string; text: string }
  | { type: "callout"; text: string }
  | { type: "cta-course"; course: "basic-filming" | "ai-gym-marketing"; label: string };

export interface Resource {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  type: "article" | "tool";
  /** For tools: the internal route to the existing page */
  toolRoute?: string;
  content?: ResourceBlock[];
  /** Related resource slugs shown in "You May Also Like" */
  related: string[];
  /** ID of the pro locked offering shown at the bottom of this resource */
  proLock?: string;
  /** SEO <title> tag (falls back to title if not set) */
  seoTitle?: string;
  /** SEO meta description */
  seoDescription?: string;
}

export const CATEGORIES = [
  "All",
  "Strategy",
  "Reels",
  "SEO",
  "AI Tools",
  "Instagram",
  "Scripts",
  "Planning",
  "Growth",
];

export const resources: Resource[] = [
  // ─── ARTICLE: Why Educational Content Converts Better ──────────────────
  {
    slug: "educational-content-converts",
    title: "Why Educational Content Converts Better Than Motivational Content",
    description:
      "Most gyms post motivational quotes and hype clips. Here's why that's costing you members — and what to post instead.",
    category: "Strategy",
    readTime: "4 min read",
    type: "article",
    related: ["7-second-hook-formula", "reels-into-memberships", "30-day-content-calendar"],
    proLock: "sales-funnel",
    content: [
      {
        type: "p",
        text: "Open any gym's Instagram page and you'll see the same thing: a sunrise quote, a transformation photo, a hype reel with a Drake beat. It looks like marketing. It feels like effort. But it's quietly killing your growth.",
      },
      {
        type: "p",
        text: "Here's the uncomfortable truth: motivational content is easy to scroll past. Educational content stops the scroll — because it answers a question your audience is already asking.",
      },
      { type: "h2", text: "The Psychology Behind the Scroll" },
      {
        type: "p",
        text: "When someone sees a motivational post, their brain processes it as entertainment. It might get a like. It rarely gets a save, a share, or a DM. Educational content triggers a different response: 'I need to remember this.' That's what drives saves — and saves are the highest-value signal Instagram's algorithm rewards.",
      },
      {
        type: "tip",
        icon: "💡",
        text: "Instagram's algorithm weighs saves 3–5x more heavily than likes when deciding who to show your content to. Educational posts that people save drive organic reach far better than inspirational posts.",
      },
      { type: "h2", text: "What 'Educational' Actually Means for a Gym" },
      {
        type: "p",
        text: "You don't need to be a professor. Educational content for a gym means answering the questions your members ask you every single week. Think about the last 10 conversations you had on the gym floor. Every one of those is a reel.",
      },
      {
        type: "ul",
        items: [
          '"What should I eat before a morning workout?"',
          '"How do I know if my form is right?"',
          '"Why am I not losing weight even though I\'m coming 4 days a week?"',
          '"What\'s the difference between HIIT and strength training?"',
          '"How long before I start seeing results?"',
        ],
      },
      {
        type: "p",
        text: "These aren't just content ideas — they're the exact search queries your potential members are typing into Google and TikTok. When you answer them on Instagram, you're not just posting content. You're becoming the trusted authority in your area.",
      },
      { type: "h2", text: "The Conversion Difference" },
      {
        type: "p",
        text: "Motivational content builds passive followers. Educational content builds active trust. And trust is what converts a follower into a member.",
      },
      {
        type: "p",
        text: "Think about it from the prospect's perspective. They're on the fence about joining a gym. They've been following you for two weeks. If all they've seen is hype clips and quotes, they know you have a gym. If they've seen you explain why most people plateau after 6 weeks, how to structure a beginner workout, and what a realistic 90-day transformation looks like — they trust you. And they're far more likely to walk through your door.",
      },
      {
        type: "callout",
        text: "The gym that educates wins the member. Your competitor is posting motivation. You should be posting answers.",
      },
      { type: "h2", text: "The 70/20/10 Content Mix" },
      {
        type: "p",
        text: "This doesn't mean you should never post motivational content. It means you should be intentional about the ratio.",
      },
      {
        type: "ul",
        items: [
          "70% Educational — tips, myth-busting, how-tos, explainers, Q&As",
          "20% Community & Culture — member moments, behind the scenes, staff spotlights",
          "10% Promotional — offers, membership CTAs, event announcements",
        ],
      },
      {
        type: "p",
        text: "Motivational content can live inside that 20% community bucket. A great transformation story with a real member quote? That's educational AND motivational. That's the sweet spot.",
      },
      { type: "h2", text: "How to Start This Week" },
      {
        type: "ol",
        items: [
          "Write down the 5 most common questions you get asked on the gym floor",
          "Turn each one into a 30–60 second reel script (answer the question directly, no fluff)",
          "Film them in one session — you can batch 5 reels in under 2 hours",
          "Post one per day for a week and watch your save rate climb",
        ],
      },
      {
        type: "cta-course",
        course: "basic-filming",
        label: "Take our free course: Basic Filming for Social Media",
      },
    ],
  },

  // ─── ARTICLE: The 7-Second Hook Formula ────────────────────────────────
  {
    slug: "7-second-hook-formula",
    title: "The 7-Second Hook Formula That Stops Gym Owners From Losing Viewers",
    description:
      "You have 7 seconds before someone swipes away. Here's the exact formula for a hook that makes them stay.",
    category: "Reels",
    readTime: "3 min read",
    type: "article",
    related: ["educational-content-converts", "gym-reel-script-checklist", "viral-hooks"],
    proLock: "dm-scripts",
    content: [
      {
        type: "p",
        text: "The first 7 seconds of your reel determine whether someone watches the whole thing or swipes away forever. Most gym owners waste those 7 seconds on intros, logos, or slow pans of their equipment. Here's what to do instead.",
      },
      { type: "h2", text: "Why 7 Seconds?" },
      {
        type: "p",
        text: "Instagram's algorithm measures 'watch time' — the percentage of your video that the average viewer watches. A video that gets watched to 80% will be pushed to far more people than one that gets watched to 20%. The hook is the only thing standing between your content and the algorithm's favour.",
      },
      { type: "h2", text: "The 3-Part Hook Formula" },
      {
        type: "p",
        text: "Every great gym reel hook has three components: a pattern interrupt, a promise, and a reason to stay.",
      },
      {
        type: "ol",
        items: [
          "Pattern Interrupt — something visually or verbally unexpected that stops the scroll",
          "Promise — what the viewer will get if they keep watching",
          "Reason to Stay — a micro-cliffhanger or open loop that creates curiosity",
        ],
      },
      {
        type: "tip",
        icon: "🎯",
        text: "The strongest hooks start with the word 'Stop', 'If you', 'Most people', or a specific number. These trigger pattern recognition in the brain and signal that value is coming.",
      },
      { type: "h2", text: "Examples That Work" },
      {
        type: "ul",
        items: [
          '"Stop doing this if you want to actually see results at the gym..." (Pattern interrupt + promise)',
          '"If you\'ve been going to the gym for 3 months and not seeing results, watch this..." (Specific audience + promise)',
          '"Most gym owners don\'t know this about Instagram — and it\'s costing them members..." (Curiosity + stakes)',
          '"3 things I wish someone told me before I opened my gym..." (Number + personal credibility)',
        ],
      },
      { type: "h2", text: "The Millennial Pause Problem" },
      {
        type: "p",
        text: "There's a common mistake called the 'millennial pause' — the 1–2 second gap before you start speaking where you're adjusting to the camera. Cut this. Your hook starts the moment the video starts. If your first frame is you walking into shot or adjusting your phone, you've already lost a third of your audience.",
      },
      {
        type: "callout",
        text: "Film your hook first. Say it before you even think about what comes next. The rest of the video can be planned — the hook needs to feel immediate and urgent.",
      },
      { type: "h2", text: "Test and Iterate" },
      {
        type: "p",
        text: "The best way to improve your hooks is to post consistently and check your Instagram Insights. Look at 'Average watch percentage' for each reel. When you find a hook that gets above 50% watch time, reverse-engineer it and use the same structure again.",
      },
      {
        type: "cta-course",
        course: "basic-filming",
        label: "Take our free course: Basic Filming for Social Media",
      },
    ],
  },

  // ─── ARTICLE: How To Rank Your Gym on Google ───────────────────────────
  {
    slug: "rank-gym-on-google",
    title: "How To Rank Your Gym On Google Without Paying For Ads",
    description:
      "Local SEO is the most underused marketing channel for gyms. Here's a step-by-step guide to ranking on page one for free.",
    category: "SEO",
    readTime: "6 min read",
    type: "article",
    related: ["educational-content-converts", "instagram-bio-checklist", "reels-into-memberships"],
    proLock: "seo-toolkit",
    content: [
      {
        type: "p",
        text: "When someone in your city types 'gym near me' into Google, are you showing up? If not, you're invisible to the highest-intent prospects on the internet — people who are actively looking for exactly what you offer.",
      },
      {
        type: "p",
        text: "The good news: local SEO for gyms is not complicated. Most gyms don't do it at all, which means the bar is low. Here's how to rank on page one without spending a dollar on ads.",
      },
      { type: "h2", text: "Step 1: Claim and Optimise Your Google Business Profile" },
      {
        type: "p",
        text: "Your Google Business Profile (formerly Google My Business) is the single most important local SEO asset you have. If you haven't claimed it, do that first at business.google.com.",
      },
      {
        type: "ul",
        items: [
          "Use your exact business name — no keyword stuffing",
          "Choose the most specific category (e.g. 'Fitness Centre', 'CrossFit Gym', 'Yoga Studio')",
          "Add your full address, phone number, and website — consistently",
          "Upload 10–20 high-quality photos of your space, classes, and team",
          "Set your hours and keep them updated",
          "Add a 750-character description with your city name and key services",
        ],
      },
      { type: "h2", text: "Step 2: Get More Google Reviews" },
      {
        type: "p",
        text: "Google's local ranking algorithm heavily weights the number and recency of reviews. A gym with 80 reviews will almost always outrank a gym with 12, even if the lower-reviewed gym has better facilities.",
      },
      {
        type: "tip",
        icon: "⭐",
        text: "The easiest way to get reviews: send a WhatsApp or text to your 10 most engaged members with a direct link to your Google review page. Ask them personally. Most people are happy to help — they just never think to do it unprompted.",
      },
      { type: "h2", text: "Step 3: Build Local Citations" },
      {
        type: "p",
        text: "A citation is any mention of your gym's name, address, and phone number (NAP) on another website. Google uses citations to verify that your business is legitimate and local.",
      },
      {
        type: "ul",
        items: [
          "Yelp",
          "Facebook Business Page",
          "Apple Maps",
          "Bing Places",
          "Local chamber of commerce directory",
          "Mindbody or other fitness booking platforms",
        ],
      },
      {
        type: "p",
        text: "The key is consistency. Your name, address, and phone number must be identical across every listing. Even small differences (St vs Street, Suite vs Ste) can dilute your ranking signals.",
      },
      { type: "h2", text: "Step 4: Create Location-Specific Content" },
      {
        type: "p",
        text: "Your website should mention your city and neighbourhood naturally throughout its content. Not in a spammy way — in a way that makes sense for a local business.",
      },
      {
        type: "ul",
        items: [
          "Title tag: 'CrossFit Gym in [City] | [Gym Name]'",
          "Meta description: mention your city and a key benefit",
          "Homepage headline: include your location",
          "About page: tell the story of why you opened in this specific community",
          "Blog posts: 'Best Pre-Workout Meals in [City]', 'How [City] Residents Are Transforming Their Fitness'",
        ],
      },
      { type: "h2", text: "Step 5: Get Local Backlinks" },
      {
        type: "p",
        text: "A backlink is when another website links to yours. Local backlinks — from other businesses, news sites, or community organisations in your area — are particularly powerful for local SEO.",
      },
      {
        type: "ul",
        items: [
          "Sponsor a local event and get a mention on their website",
          "Partner with a local nutritionist or physio and exchange links",
          "Get featured in a local newspaper or blog",
          "Offer a free class to a local charity and ask for a mention",
        ],
      },
      {
        type: "callout",
        text: "Local SEO is a long game. Most gyms see meaningful results within 3–6 months of consistent effort. The gyms that start now will own their local search results before their competitors even realise what's happening.",
      },
    ],
  },

  // ─── ARTICLE: Using AI to Create 30 Days of Content ────────────────────
  {
    slug: "ai-30-days-content",
    title: "Using AI To Create 30 Days Of Gym Content In One Afternoon",
    description:
      "A practical, step-by-step system for using AI tools to batch-create a full month of Instagram content without losing your authentic voice.",
    category: "AI Tools",
    readTime: "5 min read",
    type: "article",
    related: ["ai-prompt-pack", "30-day-content-calendar", "educational-content-converts"],
    proLock: "ai-content-os",
    content: [
      {
        type: "p",
        text: "The biggest content problem gym owners face isn't creativity — it's time. You know what to post. You just don't have 3 hours every week to write scripts, film, edit, and caption. AI changes that equation.",
      },
      {
        type: "p",
        text: "Here's a system for using AI tools to batch-create 30 days of content in a single afternoon — without sounding like a robot.",
      },
      { type: "h2", text: "The Golden Rule: AI Drafts, You Refine" },
      {
        type: "p",
        text: "The mistake most people make with AI content is posting the first output without editing. AI-generated content has a recognisable 'slop' quality — overly polished, generic, and devoid of personality. Your job is to use AI to handle the structure and the first draft, then inject your voice, your specific gym, and your real experiences.",
      },
      {
        type: "tip",
        icon: "🤖",
        text: "The best AI content starts with a great prompt. Vague prompts produce vague content. Specific prompts — with your gym's name, your audience, and your specific angle — produce content that actually sounds like you.",
      },
      { type: "h2", text: "Step 1: Build Your Content Brief" },
      {
        type: "p",
        text: "Before you open ChatGPT, spend 15 minutes writing a content brief. This is the context you'll paste into every AI prompt to keep your content consistent.",
      },
      {
        type: "ul",
        items: [
          "Gym name and type (e.g. 'Iron Forge CrossFit, a community-focused box in Austin, TX')",
          "Target audience (e.g. 'adults 25–45 who want to get fit but feel intimidated by traditional gyms')",
          "Brand voice (e.g. 'direct, encouraging, no-nonsense, occasionally funny')",
          "3 things that make your gym different",
          "Common objections your prospects have",
        ],
      },
      { type: "h2", text: "Step 2: Generate Your 30-Day Content Plan" },
      {
        type: "p",
        text: "Paste your content brief into ChatGPT and ask it to generate a 30-day content calendar with a mix of TOF (educational), MOF (community), and BOF (conversion) content. Use our free 30-Day Content Calendar as a starting point — then ask AI to customise it for your specific gym.",
      },
      { type: "h2", text: "Step 3: Batch-Write Your Scripts" },
      {
        type: "p",
        text: "Once you have your 30 topics, batch-write the scripts. Give AI one topic at a time with your content brief and ask for a 30–60 second reel script in your brand voice. Then read it out loud and edit anything that doesn't sound like you.",
      },
      {
        type: "ol",
        items: [
          "Paste your content brief",
          "Give the topic and format (e.g. 'educational reel about why most people plateau after 6 weeks')",
          "Specify the hook style (e.g. 'start with a pattern interrupt, no millennial pause')",
          "Ask for 3 hook variations so you can choose the best one",
          "Edit the output to add your specific examples and voice",
        ],
      },
      { type: "h2", text: "Step 4: The ChatGPT Interviewer Hack" },
      {
        type: "p",
        text: "One of the most powerful AI content techniques is using ChatGPT as an interviewer. Instead of writing a script, you have a conversation with AI where it asks you questions about the topic. Your answers become the raw material for the script — and it sounds authentic because it came from you.",
      },
      {
        type: "callout",
        text: 'Try this prompt: "Act as an interviewer. Ask me 5 questions about [topic] as if you\'re interviewing me for a podcast. I\'ll answer each one, and then you\'ll turn my answers into a 60-second reel script in my voice."',
      },
      {
        type: "cta-course",
        course: "ai-gym-marketing",
        label: "Take our free course: AI in Gym Marketing",
      },
    ],
  },

  // ─── ARTICLE: Instagram Bio Optimization Checklist ─────────────────────
  {
    slug: "instagram-bio-checklist",
    title: "Instagram Bio Optimisation Checklist for Gym Owners",
    description:
      "Your Instagram bio is your digital storefront. Here's exactly what it needs to turn profile visitors into followers — and followers into members.",
    category: "Instagram",
    readTime: "4 min read",
    type: "article",
    related: ["reels-into-memberships", "7-second-hook-formula", "rank-gym-on-google"],
    proLock: "competitor-audit",
    content: [
      {
        type: "p",
        text: "When someone visits your Instagram profile for the first time, you have about 3 seconds to answer three questions: Who are you? Who is this for? What should I do next? Most gym bios fail all three.",
      },
      { type: "h2", text: "The 5 Elements of a High-Converting Gym Bio" },
      { type: "h3", text: "1. The Name Field (Not Just Your Gym Name)" },
      {
        type: "p",
        text: "The name field in your bio is searchable. Most gyms just put their gym name — which is a wasted opportunity. Instead, use: '[Gym Name] | [City] Gym' or '[Gym Name] | CrossFit [City]'. This makes you discoverable when people search for gyms in your area.",
      },
      { type: "h3", text: "2. The Value Proposition Line" },
      {
        type: "p",
        text: "Your first line should tell a stranger exactly what you do and who you do it for. Not 'We help people get fit.' Something specific: 'Helping busy [City] professionals build strength in 45 minutes or less.'",
      },
      { type: "h3", text: "3. Social Proof" },
      {
        type: "p",
        text: "One line of social proof — a number, a result, or a credibility signal. Examples: '500+ members transformed' / 'Voted #1 gym in [City] 2024' / 'As seen in [Local Publication]'.",
      },
      { type: "h3", text: "4. The CTA" },
      {
        type: "p",
        text: "Tell people exactly what to do next. 'Book your free trial below ↓' or 'Get our free 30-day plan in bio ↓'. The arrow emoji pointing down to your link is a proven conversion driver.",
      },
      { type: "h3", text: "5. The Link" },
      {
        type: "p",
        text: "Use a link-in-bio tool (Linktree, Stan Store, or a simple landing page) with 2–3 clear options: Book a free trial, Get a free resource, Watch our story. Don't send people to your homepage — send them to a specific action.",
      },
      {
        type: "tip",
        icon: "📍",
        text: "Add your location to your bio even if it's already in your profile settings. Many people don't check the location tag — they read the bio. 'Based in [City], [State]' takes 5 seconds to add and filters in the right audience.",
      },
      { type: "h2", text: "The Bio Audit Checklist" },
      {
        type: "ul",
        items: [
          "✅ Name field includes your city and gym type",
          "✅ First line states who you help and how",
          "✅ Second line includes a social proof signal",
          "✅ CTA tells people exactly what to do next",
          "✅ Link goes to a specific action (not your homepage)",
          "✅ Profile photo is your logo or a clear headshot (not a group photo)",
          "✅ Story highlights are labelled and cover: About, Results, Classes, FAQ",
        ],
      },
      {
        type: "callout",
        text: "Your bio should be updated every time you have a new offer, a new result, or a seasonal promotion. It's not set-and-forget — it's your most-viewed piece of real estate on Instagram.",
      },
    ],
  },

  // ─── ARTICLE: How to Turn Reels Into Memberships ───────────────────────
  {
    slug: "reels-into-memberships",
    title: "How To Turn Reels Into Memberships: The Full Funnel Strategy",
    description:
      "Getting views is the easy part. Here's the exact system for converting reel viewers into booked consultations and paying members.",
    category: "Strategy",
    readTime: "5 min read",
    type: "article",
    related: ["educational-content-converts", "7-second-hook-formula", "instagram-bio-checklist"],
    proLock: "sales-funnel",
    content: [
      {
        type: "p",
        text: "A reel with 100,000 views that generates zero new members is a vanity metric. A reel with 5,000 views that books 3 consultations is a business asset. The difference is the system behind the content.",
      },
      { type: "h2", text: "The 3-Stage Reel Funnel" },
      {
        type: "p",
        text: "Every piece of content you post should serve one of three stages: awareness (TOF), consideration (MOF), or conversion (BOF). Most gyms only post TOF content — which means they're building an audience but not converting it.",
      },
      { type: "h3", text: "Stage 1: Top of Funnel (TOF) — Reach New Eyes" },
      {
        type: "p",
        text: "TOF content is designed to reach people who don't know you yet. Educational reels, myth-busting, relatable fitness content. The goal is views, follows, and saves — not sales. Aim for 60–70% of your content here.",
      },
      { type: "h3", text: "Stage 2: Middle of Funnel (MOF) — Build Trust" },
      {
        type: "p",
        text: "MOF content is for people who already follow you. Behind-the-scenes, member spotlights, your personal story, community moments. The goal is to deepen the relationship and make your gym feel real and human. Aim for 20–25% of your content here.",
      },
      { type: "h3", text: "Stage 3: Bottom of Funnel (BOF) — Convert" },
      {
        type: "p",
        text: "BOF content is direct. Transformation stories, testimonials, limited-time offers, FAQ reels that address objections. The goal is to move a warm follower to take action. Aim for 10–15% of your content here.",
      },
      {
        type: "tip",
        icon: "🔄",
        text: "The most common mistake: posting only TOF content and wondering why followers don't convert. You need all three stages working together. Think of it as a relationship — you can't propose on the first date.",
      },
      { type: "h2", text: "The DM Funnel" },
      {
        type: "p",
        text: "The most effective conversion mechanism for gym reels is the DM funnel. At the end of a BOF reel, say: 'If you're ready to start, DM me the word [KEYWORD] and I'll send you our free trial details.' Then set up an automated DM response using ManyChat or Instagram's native automation.",
      },
      {
        type: "ol",
        items: [
          "Viewer watches your transformation reel",
          "You end with: 'DM me START for your free trial'",
          "They DM you — automation sends them a link to book",
          "They book a free consultation or trial class",
          "You convert them in person",
        ],
      },
      { type: "h2", text: "The Bio Bridge" },
      {
        type: "p",
        text: "Every reel should drive traffic to your bio. Your bio should have one clear CTA. Your link should go to a specific landing page (free trial, free resource, or booking page). This is the bridge between content and conversion.",
      },
      {
        type: "callout",
        text: "The gym that converts best isn't the one with the most followers. It's the one with the clearest path from 'I found your reel' to 'I'm a member now.'",
      },
      {
        type: "cta-course",
        course: "basic-filming",
        label: "Take our free course: Basic Filming for Social Media",
      },
    ],
  },

  // ─── ARTICLE: AI Prompt Pack ────────────────────────────────────────────
  {
    slug: "ai-prompt-pack",
    title: "AI Prompt Pack For Gym Owners: 50+ Prompts That Actually Work",
    description:
      "Stop getting generic AI output. These prompts are built specifically for fitness businesses and produce captions, scripts, and hooks that sound like you.",
    category: "AI Tools",
    readTime: "6 min read",
    type: "article",
    related: ["ai-30-days-content", "gym-reel-script-checklist", "30-day-content-calendar"],
    proLock: "ai-content-os",
    content: [
      {
        type: "p",
        text: "The difference between AI content that sounds robotic and AI content that sounds like you comes down to one thing: the quality of your prompt. Here are 50+ prompts built specifically for gym owners.",
      },
      { type: "h2", text: "How to Use These Prompts" },
      {
        type: "p",
        text: "Before using any prompt, paste this context block at the top of your ChatGPT conversation. This tells the AI who you are so every output is tailored to your gym.",
      },
      {
        type: "callout",
        text: 'Context block: "My gym is called [NAME]. It\'s a [TYPE] gym in [CITY]. My target member is [DESCRIBE]. My brand voice is [DESCRIBE — e.g. direct, warm, no-nonsense]. My gym\'s biggest differentiator is [DESCRIBE]. Use this context for all responses."',
      },
      { type: "h2", text: "Caption Prompts" },
      {
        type: "ul",
        items: [
          '"Write a 3-sentence Instagram caption for a reel about [TOPIC]. End with a question to drive comments. Brand voice: [VOICE]."',
          '"Write 5 caption variations for a transformation reel. Make each one feel different — one emotional, one data-driven, one humorous, one inspirational, one direct."',
          '"Write a caption that addresses the objection: \'I don\'t have time to go to the gym.\' Keep it under 100 words."',
        ],
      },
      { type: "h2", text: "Reel Script Prompts" },
      {
        type: "ul",
        items: [
          '"Write a 45-second reel script about [TOPIC]. Start with a pattern interrupt hook. No millennial pause. End with a soft CTA to follow for more."',
          '"Give me 5 hook variations for a reel about [TOPIC]. Each hook should be under 10 words and create curiosity or urgency."',
          '"Write a \'myth vs reality\' reel script about [COMMON FITNESS MYTH]. 3 myths, 3 realities, 60 seconds max."',
          '"Act as an interviewer. Ask me 5 questions about [TOPIC] as if for a podcast. I\'ll answer, then you turn my answers into a reel script."',
        ],
      },
      { type: "h2", text: "Content Planning Prompts" },
      {
        type: "ul",
        items: [
          '"Give me 10 educational reel ideas for a [GYM TYPE] targeting [AUDIENCE]. Each idea should answer a question my audience is already asking."',
          '"Create a 4-week content calendar with a 70/20/10 split: 70% educational, 20% community, 10% promotional. Include post type (reel, carousel, static) for each."',
          '"What are the 10 most common objections someone has before joining a gym? Turn each into a content idea."',
        ],
      },
      { type: "h2", text: "SEO & Bio Prompts" },
      {
        type: "ul",
        items: [
          '"Write an Instagram bio for my gym that includes: who we help, our location, one social proof signal, and a CTA. Keep it under 150 characters per line."',
          '"Write 5 Instagram Reel descriptions (for the caption field) optimised for the keyword \'[CITY] gym\'. Each should be 2–3 sentences."',
          '"Generate 20 hashtag ideas for a [GYM TYPE] in [CITY]. Mix local hashtags, niche hashtags, and broad fitness hashtags."',
        ],
      },
      {
        type: "cta-course",
        course: "ai-gym-marketing",
        label: "Take our free course: AI in Gym Marketing",
      },
    ],
  },

  // ─── ARTICLE: Gym Reel Script Checklist ────────────────────────────────
  {
    slug: "gym-reel-script-checklist",
    title: "Gym Reel Script Checklist: The Exact Structure for a High-Converting Reel",
    description:
      "Every high-performing gym reel follows the same structure. Here's the checklist — from hook to CTA in under 60 seconds.",
    category: "Scripts",
    readTime: "4 min read",
    type: "article",
    related: ["7-second-hook-formula", "viral-hooks", "reels-into-memberships"],
    proLock: "dm-scripts",
    content: [
      {
        type: "p",
        text: "A great gym reel isn't improvised. The best creators in the fitness space follow a repeatable structure that maximises watch time, saves, and conversions. Here's the exact checklist.",
      },
      { type: "h2", text: "The 5-Part Reel Structure" },
      { type: "h3", text: "Part 1: The Hook (0–3 seconds)" },
      {
        type: "p",
        text: "Your hook must do one thing: stop the scroll. It should create curiosity, make a bold claim, or speak directly to a pain point. Start speaking immediately — no intro, no logo, no 'hey guys'.",
      },
      {
        type: "tip",
        icon: "🎣",
        text: "The best hooks start mid-thought. Imagine you're already in the middle of telling someone something important. That energy is what stops the scroll.",
      },
      { type: "h3", text: "Part 2: The Promise (3–7 seconds)" },
      {
        type: "p",
        text: "After the hook, tell them what they'll get if they keep watching. 'In the next 30 seconds I'm going to show you...' or 'Here's exactly what I do with every new member who...' This is the bridge between the hook and the content.",
      },
      { type: "h3", text: "Part 3: The Value (7–50 seconds)" },
      {
        type: "p",
        text: "Deliver the value you promised. Keep it tight. Every sentence should earn its place. If you can cut it without losing meaning, cut it. Use visual cues, text overlays, and B-roll to reinforce your points.",
      },
      { type: "h3", text: "Part 4: The Proof (optional, 5–10 seconds)" },
      {
        type: "p",
        text: "A quick social proof moment — a member result, a stat, a before/after — that validates what you just said. This is especially powerful in BOF content.",
      },
      { type: "h3", text: "Part 5: The CTA (last 3–5 seconds)" },
      {
        type: "p",
        text: "Tell them exactly what to do next. One CTA only. 'Follow for more', 'Save this for later', 'DM me START', 'Link in bio to book your free trial'. Don't give them three options — they'll pick none.",
      },
      { type: "h2", text: "The Pre-Film Checklist" },
      {
        type: "ul",
        items: [
          "✅ Hook written and memorised (under 10 words)",
          "✅ Promise stated clearly",
          "✅ Value points listed (3 max for a 60-second reel)",
          "✅ CTA decided before filming",
          "✅ Location set up — good light, clean background",
          "✅ Audio checked — no background noise",
          "✅ Phone horizontal or vertical (decide before you start)",
        ],
      },
      { type: "h2", text: "The Post-Film Checklist" },
      {
        type: "ul",
        items: [
          "✅ First 3 seconds reviewed — do you start speaking immediately?",
          "✅ Captions added (80% of reels are watched without sound)",
          "✅ Text overlays reinforce key points",
          "✅ Cover image selected (not a blurry mid-frame)",
          "✅ Caption written with hook, value, and CTA",
          "✅ Hashtags added (5–10 relevant ones)",
          "✅ Location tag added",
        ],
      },
      {
        type: "cta-course",
        course: "basic-filming",
        label: "Take our free course: Basic Filming for Social Media",
      },
    ],
  },

  // ─── ARTICLE: Instagram Reels for Gym Owners ──────────────────────────────
  {
    slug: "instagram-reels-for-gym-owners",
    title: "Instagram Reels for Gym Owners That Get New Members",
    description: "The exact Reels strategy gym owners use to turn views into membership enquiries — with hook formulas, posting frequency, and what to film this week.",
    category: "Reels",
    readTime: "5 min read",
    type: "article",
    seoTitle: "Instagram Reels for Gym Owners That Get New Members | Lift Media",
    seoDescription: "Learn the exact Instagram Reels strategy gym owners use to turn views into membership enquiries. Includes hook formulas, posting frequency, and what to film this week.",
    related: ["7-second-hook-formula", "reels-into-memberships", "gym-reel-script-checklist"],
    proLock: "dm-scripts",
    content: [
      { type: "p", text: "Most gym owners post Reels and get a handful of likes from their existing members. A few hundred views, maybe a save or two. Then nothing. No DMs. No enquiries. No new faces walking through the door." },
      { type: "p", text: "The problem is not the algorithm. The problem is the content strategy. Specifically, most gym Reels are built to entertain existing followers — not to attract new members who are actively looking for a gym like yours." },
      { type: "h2", text: "Why Most Gym Reels Don't Convert" },
      { type: "p", text: "There are three types of content on Instagram: content that entertains, content that educates, and content that converts. Most gym Reels live entirely in the first category. Highlight reels of your best athletes, motivational music montages, and transformation videos are all entertaining — but they don't give a prospective member a reason to reach out." },
      { type: "p", text: "Converting Reels do something different. They speak directly to the person who is already thinking about joining a gym. They address a specific fear, answer a specific question, or show a specific result that the viewer wants for themselves." },
      { type: "h2", text: "The Three Reels That Actually Drive Enquiries" },
      { type: "h3", text: "1. The 'For Someone Like You' Reel" },
      { type: "p", text: "This format directly names your ideal member in the first second. 'This is for anyone who's never set foot in a gym before.' 'If you're over 40 and want to get strong without getting hurt, watch this.' The specificity is the hook. When someone hears themselves described exactly, they stop scrolling." },
      { type: "h3", text: "2. The Objection-Crusher Reel" },
      { type: "p", text: "Every prospective member has a reason they haven't joined yet. They think they're not fit enough. They're worried about being judged. They don't know what to do when they get there. A Reel that directly addresses one of these objections — and dismantles it in 30 seconds — is one of the highest-converting formats you can post." },
      { type: "h3", text: "3. The 'Day in the Life' Member Story" },
      { type: "p", text: "Not a transformation photo. An actual story. Film a member talking about where they were six months ago, what their first week was like, and what's different now. Keep it raw and unpolished. This format builds trust faster than any highlight reel because it's real." },
      { type: "h2", text: "How Often Should Gym Owners Post Reels?" },
      { type: "p", text: "The research consistently points to three to five Reels per week as the sweet spot for gym accounts trying to grow. More than that and quality drops. Fewer than that and the algorithm deprioritises your account. The key is consistency over volume — three good Reels every week beats seven mediocre ones." },
      { type: "tip", icon: "📱", text: "Film five Reels in one session each week. Batch your content creation so you're not scrambling for ideas daily. One hour of filming on Monday gives you your whole week." },
      { type: "h2", text: "What to Film This Week" },
      { type: "ol", items: ["Walk through your gym and name one thing that makes it different from a commercial gym. Film it in 30 seconds.", "Ask your longest-standing member why they've stayed. Film their answer unedited.", "Answer the most common question you get from people who've never been to your gym before.", "Show what a first session at your gym actually looks like — from walking in the door to leaving.", "Film yourself explaining your pricing or membership options simply and directly."] },
      { type: "h2", text: "The CTA That Gets DMs" },
      { type: "p", text: "Every converting Reel needs a clear call to action. The best one for gym owners is simple: 'DM me the word [WORD] and I'll send you our free trial details.' This works because it's low-commitment, it's specific, and it gives you a reason to start a conversation. Once someone DMs you, you're no longer competing with every other gym on their feed." },
      { type: "cta-course", course: "basic-filming", label: "Learn how to film professional Reels with just your phone" },
      { type: "callout", text: "Want 50 proven hook lines for gym Reels? Check out the 50 Viral Hooks for Gyms resource — free in the resource library." },
    ],
  },

  // ─── ARTICLE: Social Media Strategy for CrossFit Box ──────────────────────
  {
    slug: "social-media-strategy-crossfit-box",
    title: "Social Media Content Strategy for CrossFit Box Owners",
    description: "A proven social media content strategy built specifically for CrossFit box owners — covering what to post, when to post, and how to turn followers into members.",
    category: "Strategy",
    readTime: "5 min read",
    type: "article",
    seoTitle: "Social Media Content Strategy for CrossFit Box Owners | Lift Media",
    seoDescription: "A proven social media content strategy built specifically for CrossFit box owners — covering what to post, when to post, and how to turn followers into members.",
    related: ["educational-content-converts", "gym-owner-social-media-posting-schedule", "reels-into-memberships"],
    proLock: "content-machine",
    content: [
      { type: "p", text: "CrossFit boxes have a unique social media challenge. Your community is incredibly tight-knit and passionate — which means your existing members love your content. But that same insularity can make it hard to attract people who've never heard of CrossFit, or who think it's not for them." },
      { type: "p", text: "A content strategy for a CrossFit box needs to do two things simultaneously: deepen loyalty with your existing community and lower the barrier for people on the outside looking in." },
      { type: "h2", text: "The CrossFit Box Content Mix" },
      { type: "p", text: "The most effective CrossFit box social media strategies follow a 40/40/20 content split. Forty percent community content — celebrating members, sharing WOD results, and showing the culture of your box. Forty percent educational content — technique tips, nutrition advice, and answers to common questions new members ask. Twenty percent conversion content — direct CTAs, free trial offers, and member testimonials." },
      { type: "h2", text: "The Biggest Mistake CrossFit Boxes Make on Social Media" },
      { type: "p", text: "Posting content that only makes sense if you already do CrossFit. Acronyms like WOD, AMRAP, and EMOM are second nature to your members — but they're alienating to the person who's never been to a box. Every piece of content you post should be understandable to someone who has never done CrossFit in their life." },
      { type: "tip", icon: "🎯", text: "Write every caption as if it's being read by someone who just moved to your city and is looking for a gym for the first time. Would they understand it? Would it make them want to come in?" },
      { type: "h2", text: "Content Pillars for CrossFit Boxes" },
      { type: "ul", items: ["Member spotlights: Real stories from real members about why they joined and what's changed", "Coach introductions: Short videos of your coaches explaining their training philosophy", "WOD breakdowns: Explain the movements in a WOD in plain English for beginners", "Myth-busting: Address the 'CrossFit is dangerous' or 'CrossFit is only for elite athletes' objections directly", "Behind the scenes: Show what a normal class looks like from start to finish", "Results without photos: Share non-physical wins — better sleep, more energy, confidence in daily life"] },
      { type: "h2", text: "Posting Frequency for CrossFit Boxes" },
      { type: "p", text: "Three to four posts per week on Instagram is the right cadence for most CrossFit boxes. One community post, one educational post, and one conversion post per week is a simple framework that keeps your feed balanced and your pipeline moving." },
      { type: "h2", text: "How to Turn Followers Into Members" },
      { type: "p", text: "The most effective conversion mechanism for CrossFit boxes is the free trial class. Every piece of conversion content should point to a free trial — not a sign-up page, not a pricing page, not a contact form. A free trial removes all the risk and lets your coaching and community do the selling for you." },
      { type: "cta-course", course: "basic-filming", label: "Take the free filming course to make better content with your phone" },
      { type: "callout", text: "Use the 30-Day Gym Content Calendar to plan your CrossFit box content a month in advance — free in the resource library." },
    ],
  },

  // ─── ARTICLE: Get More Gym Members With Instagram ─────────────────────────
  {
    slug: "get-more-gym-members-instagram",
    title: "How to Get More Gym Members With Instagram in 2025",
    description: "The step-by-step Instagram growth system gym owners use to consistently attract new members — without paid ads or dancing on camera.",
    category: "Growth",
    readTime: "6 min read",
    type: "article",
    seoTitle: "How to Get More Gym Members With Instagram in 2025 | Lift Media",
    seoDescription: "The step-by-step Instagram growth system gym owners use to consistently attract new members — without paid ads or dancing on camera.",
    related: ["instagram-reels-for-gym-owners", "reels-into-memberships", "fitness-studio-instagram-bio-that-converts"],
    proLock: "sales-funnel",
    content: [
      { type: "p", text: "Instagram is the single most effective organic marketing channel for gym owners right now. Not because of follower counts or viral moments — but because it's where people go when they're actively thinking about their health and fitness. The question is not whether Instagram can get you new members. It's whether your Instagram is set up to convert the people already looking for a gym like yours." },
      { type: "h2", text: "Step 1: Optimise Your Profile for Discovery" },
      { type: "p", text: "Before you post a single Reel, your profile needs to be set up to convert. Your name field should include your city and gym type — not just your gym name. Your bio should answer three questions in three lines: who you help, what you do, and what to do next. Your link in bio should go to a free trial page or a direct booking link — not your homepage." },
      { type: "h2", text: "Step 2: Post Content That Attracts Non-Members" },
      { type: "p", text: "The biggest mistake gym owners make on Instagram is posting content for their existing members. Celebration posts, WOD results, and inside jokes build community — but they don't attract new people. You need a consistent stream of content that speaks directly to someone who is not yet a member but is thinking about it." },
      { type: "ul", items: ["Answer the questions your front desk gets asked every week", "Address the fears that stop people from walking through your door", "Show what a first visit to your gym actually looks like", "Share results from members who started exactly where your ideal prospect is now"] },
      { type: "h2", text: "Step 3: Use Reels as Your Discovery Engine" },
      { type: "p", text: "Instagram's algorithm distributes Reels to non-followers at a much higher rate than any other content format. A well-made Reel can reach thousands of people in your city who have never heard of your gym. This is your primary organic acquisition channel. Aim for three Reels per week, each one designed to speak to someone who doesn't know you yet." },
      { type: "h2", text: "Step 4: Convert Viewers Into Conversations" },
      { type: "p", text: "Views and followers are vanity metrics. DMs are what matter. Every piece of content you post should have a clear, low-friction CTA that invites people to start a conversation. 'DM me the word TRIAL and I'll send you details' is more effective than 'link in bio' because it creates a direct, personal interaction." },
      { type: "tip", icon: "💬", text: "Reply to every comment and DM within 24 hours. The algorithm rewards accounts with high engagement, and a fast reply to a prospective member can be the difference between them joining your gym or the one down the road." },
      { type: "h2", text: "Step 5: Build a Simple Content System" },
      { type: "p", text: "Consistency beats quality every time. A gym that posts three decent Reels every week will outgrow a gym that posts one perfect Reel every month. Build a simple weekly content system — one filming session, five pieces of content, scheduled in advance — and stick to it for 90 days. The results compound." },
      { type: "cta-course", course: "basic-filming", label: "Learn the complete Instagram growth system for gym owners" },
    ],
  },

  // ─── ARTICLE: Gym Owner Social Media Posting Schedule ─────────────────────
  {
    slug: "gym-owner-social-media-posting-schedule",
    title: "Gym Owner Social Media Posting Schedule That Converts",
    description: "Stop guessing what to post and when. This gym owner posting schedule is built around the content mix that drives enquiries, not just likes.",
    category: "Planning",
    readTime: "4 min read",
    type: "article",
    seoTitle: "Gym Owner Social Media Posting Schedule That Converts | Lift Media",
    seoDescription: "Stop guessing what to post and when. This gym owner social media posting schedule is built around the content mix that drives enquiries, not just likes.",
    related: ["30-day-content-calendar", "educational-content-converts", "social-media-strategy-crossfit-box"],
    proLock: "content-machine",
    content: [
      { type: "p", text: "The most common question gym owners ask about social media is: 'How often should I be posting?' The honest answer is that frequency matters far less than what you post and why. A gym posting seven times a week with no strategy will get fewer enquiries than a gym posting three times a week with a clear content mix." },
      { type: "h2", text: "The Weekly Posting Framework" },
      { type: "h3", text: "Monday: Education Post" },
      { type: "p", text: "Start the week with something genuinely useful. A technique tip, a nutrition myth debunked, an answer to a question your members ask all the time. Educational content builds authority and gets saved — and saves are the highest-value engagement signal on Instagram." },
      { type: "h3", text: "Wednesday: Community Post" },
      { type: "p", text: "Mid-week is the right time for community content. A member spotlight, a class photo, a behind-the-scenes look at your coaching team. This content deepens loyalty with your existing members and shows prospective members what the culture of your gym is like." },
      { type: "h3", text: "Friday: Conversion Post" },
      { type: "p", text: "End the week with a direct CTA. A free trial offer, a member transformation story, or a direct invitation to book a consultation. Friday and Saturday are when people make decisions about their health and fitness — meet them there." },
      { type: "tip", icon: "📅", text: "Batch-create all three posts on Sunday or Monday morning. Spend one hour filming and writing, schedule everything in advance, and your social media is done for the week before it starts." },
      { type: "h2", text: "When to Post for Maximum Reach" },
      { type: "p", text: "For gym accounts, the best posting times are 6–8am (before work), 12–1pm (lunch), and 6–8pm (after work). These windows align with when your audience is thinking about fitness. Test each window for a month and check your Instagram Insights to see which performs best for your specific audience." },
      { type: "h2", text: "The Content Mix That Drives Enquiries" },
      { type: "p", text: "The most effective gym social media accounts follow a rough 40/40/20 split: 40% educational content, 40% community content, and 20% conversion content. If your feed is more than 30% conversion content, people will tune out. If it's less than 10%, you're building an audience but not a business." },
      { type: "h2", text: "Scaling Up: What to Do When You Have More Time" },
      { type: "p", text: "Once you've mastered three posts per week, add a fourth — a Reels-only post designed for discovery. Reels reach non-followers at a much higher rate than static posts or Stories, so adding one extra Reel per week is the highest-leverage way to grow your reach without doubling your workload." },
      { type: "callout", text: "The 30-Day Gym Content Calendar gives you a full month of post ideas, themes, and formats — free in the resource library." },
      { type: "cta-course", course: "basic-filming", label: "Learn how to create a week's worth of content in one hour" },
    ],
  },

  // ─── ARTICLE: Reels Ideas for Personal Trainers ───────────────────────────
  {
    slug: "reels-ideas-personal-trainers",
    title: "Best Reels Ideas for Personal Trainers to Attract Clients",
    description: "15 proven Reels ideas personal trainers use to attract new clients on Instagram — with hooks, formats, and filming tips for each one.",
    category: "Reels",
    readTime: "5 min read",
    type: "article",
    seoTitle: "Best Reels Ideas for Personal Trainers to Attract Clients | Lift Media",
    seoDescription: "15 proven Reels ideas personal trainers use to attract new clients on Instagram — with hooks, formats, and filming tips for each one.",
    related: ["instagram-reels-for-gym-owners", "7-second-hook-formula", "gym-reel-script-checklist"],
    proLock: "dm-scripts",
    content: [
      { type: "p", text: "Personal trainers have a unique advantage on Instagram: you are the product. Your knowledge, your personality, and your results are exactly what prospective clients are looking for. The challenge is translating that into content that consistently attracts new clients — not just engagement from people who already follow you." },
      { type: "h2", text: "The 15 Best Reels Ideas for Personal Trainers" },
      { type: "h3", text: "1. The 'I Wish Someone Had Told Me' Reel" },
      { type: "p", text: "Hook: 'I wish someone had told me this before I started training clients.' Share one insight that took you years to learn. This format positions you as experienced and builds immediate trust." },
      { type: "h3", text: "2. The Common Mistake Correction" },
      { type: "p", text: "Hook: 'Stop doing this exercise like this.' Film yourself correcting a common form mistake. This is one of the most-saved formats on Instagram because it's immediately actionable." },
      { type: "h3", text: "3. The 'For [Specific Person]' Reel" },
      { type: "p", text: "Hook: 'This is for anyone who's been told they're too old to start lifting.' Naming your ideal client in the first second stops the right people from scrolling." },
      { type: "h3", text: "4. The Day in the Life" },
      { type: "p", text: "Show what a typical training session with you actually looks like. Not the highlight reel — the warm-up, the coaching cues, the check-ins. This demystifies the process for people who've never worked with a PT." },
      { type: "h3", text: "5. The Client Result Story" },
      { type: "p", text: "Not a before/after photo. A story. Film your client talking about where they were when they started, what the first month was like, and what's different now. Keep it real and unscripted." },
      { type: "h3", text: "6. The Myth Buster" },
      { type: "p", text: "Hook: 'You don't need to train six days a week to see results. Here's what actually matters.' Busting a common fitness myth positions you as a trusted authority and gets shares from people who've believed the myth." },
      { type: "h3", text: "7. The '3 Things' List" },
      { type: "p", text: "Hook: '3 things I'd do differently if I was starting my fitness journey today.' List formats are easy to consume and highly shareable. Keep each point to one sentence." },
      { type: "h3", text: "8. The Q&A Response" },
      { type: "p", text: "Answer a question from a follower or a question you get asked in DMs all the time. This shows you're engaged with your audience and creates content that's directly relevant to what your prospective clients are thinking about." },
      { type: "h3", text: "9. The Equipment-Free Workout" },
      { type: "p", text: "Show a full workout that requires no equipment. This reaches people who don't have a gym membership yet — your most likely prospective clients." },
      { type: "h3", text: "10. The 'What I Eat in a Day'" },
      { type: "p", text: "A simple, honest look at what you actually eat. Not a perfect meal plan — a real day. This humanises you and builds the kind of trust that converts followers into clients." },
      { type: "h3", text: "11. The Before/After Mindset Shift" },
      { type: "p", text: "Hook: 'Before I started training: [negative belief]. After 6 months: [positive shift].' This format works because it's relatable and shows that the transformation is about more than just the physical." },
      { type: "h3", text: "12. The 'This or That' Comparison" },
      { type: "p", text: "Compare two approaches to the same goal. 'Cardio vs. weights for fat loss: here's what the research actually says.' Comparison content gets high engagement because people have strong opinions." },
      { type: "h3", text: "13. The Behind the Scenes" },
      { type: "p", text: "Show what goes into preparing a training programme, writing a nutrition plan, or running a group session. This builds appreciation for your expertise and justifies your pricing." },
      { type: "h3", text: "14. The Direct CTA Reel" },
      { type: "p", text: "Once a week, post a Reel that is purely a CTA. 'I have two online coaching spots opening up next month. DM me the word COACHING and I'll send you the details.' Direct, simple, and effective." },
      { type: "h3", text: "15. The Transformation Breakdown" },
      { type: "p", text: "Walk through exactly what you did with a client to get their result. Not just 'they trained hard' — the specific programme, the nutrition approach, the mindset work. This shows your methodology and builds confidence in prospective clients." },
      { type: "cta-course", course: "basic-filming", label: "Learn how to film all 15 of these Reels with just your phone" },
      { type: "callout", text: "Need hooks for all 15 formats? The 50 Viral Hooks for Gyms resource has opening lines for every one of these Reel types — free in the resource library." },
    ],
  },

  // ─── ARTICLE: Fitness Studio Instagram Bio ────────────────────────────────
  {
    slug: "fitness-studio-instagram-bio-that-converts",
    title: "Fitness Studio Instagram Bio That Converts Visitors to Leads",
    description: "Your Instagram bio is your gym's digital front door. Learn how to write a fitness studio Instagram bio that turns profile visitors into booked consultations.",
    category: "Instagram",
    readTime: "4 min read",
    type: "article",
    seoTitle: "Fitness Studio Instagram Bio That Converts Visitors to Leads | Lift Media",
    seoDescription: "Your Instagram bio is your gym's digital front door. Learn how to write a fitness studio Instagram bio that turns profile visitors into booked consultations.",
    related: ["instagram-bio-optimisation-checklist", "get-more-gym-members-instagram", "instagram-captions-for-gyms"],
    proLock: "seo-toolkit",
    content: [
      { type: "p", text: "When someone discovers your gym on Instagram — through a Reel, a tag, or a search — the first thing they do is visit your profile. You have approximately three seconds to convince them to follow you, click your link, or send you a DM. Your Instagram bio is doing all of that work." },
      { type: "p", text: "Most fitness studio Instagram bios fail at this job. They list the gym's name, a generic tagline, and a link to the homepage. That's not a bio — that's a missed opportunity." },
      { type: "h2", text: "The Anatomy of a High-Converting Fitness Studio Bio" },
      { type: "h3", text: "Line 1: Who You Help" },
      { type: "p", text: "The first line of your bio should immediately tell a profile visitor whether your gym is for them. 'Strength training for women over 35' is infinitely more powerful than 'Your local fitness studio.' Specificity attracts the right people and repels the wrong ones — and that's a good thing." },
      { type: "h3", text: "Line 2: What You Do Differently" },
      { type: "p", text: "The second line should communicate your unique approach or philosophy. What makes your gym different from the one down the road? 'No intimidation. No ego. Just results.' or 'Small group training capped at 8 people.' One sentence that captures your differentiator." },
      { type: "h3", text: "Line 3: The CTA" },
      { type: "p", text: "The third line should tell people exactly what to do next. 'Book your free trial below' or 'DM us TRIAL for your first week free.' Make the action specific and the offer clear. A vague CTA like 'Check out our website' converts at a fraction of the rate of a specific offer." },
      { type: "tip", icon: "🔗", text: "Use a link-in-bio tool like Linktree or a simple landing page to give profile visitors one clear action: book a free trial. Don't send them to your homepage — send them to a page with one button." },
      { type: "h2", text: "The Name Field: Your Hidden SEO Lever" },
      { type: "p", text: "Most gym owners put only their gym name in the Instagram name field. This is a significant missed opportunity. Instagram's search algorithm uses the name field as a keyword. If your name field says 'Iron Forge Fitness | CrossFit Gym Manchester', you'll appear in searches for 'CrossFit gym Manchester' — even if your username doesn't contain those words." },
      { type: "h2", text: "Profile Photo: Face or Logo?" },
      { type: "p", text: "For independent gym owners and personal trainers, a face photo consistently outperforms a logo. People follow people, not brands. If you are the face of your gym, use your face. If you run a larger studio with multiple coaches, a clean logo works — but make sure it's legible at 40 pixels wide." },
      { type: "h2", text: "Highlights: Your Silent Sales Team" },
      { type: "p", text: "Instagram Highlights sit directly below your bio and are the first thing a profile visitor sees after reading it. Create highlights for: Free Trial (how to get one), Results (member stories), Classes (what you offer), and Team (who the coaches are). These four highlights answer the four questions every prospective member has before they reach out." },
      { type: "h2", text: "The Bio Audit: Five Questions to Ask" },
      { type: "ol", items: ["Does line one tell a stranger exactly who your gym is for?", "Does line two communicate one thing that makes your gym different?", "Does line three tell people exactly what to do next?", "Does your name field include your city and gym type?", "Does your link in bio go to a free trial page or booking link?"] },
      { type: "cta-course", course: "basic-filming", label: "Take the free filming course and learn how to create content that drives profile visits" },
      { type: "callout", text: "Download the Instagram Bio Optimisation Checklist for a step-by-step audit of your entire profile — free in the resource library." },
    ],
  },

  // ─── ARTICLE: How to Film Gym Reels With Phone ────────────────────────────
  {
    slug: "how-to-film-gym-reels-with-phone",
    title: "How to Film Gym Reels With Just a Phone (No Crew Needed)",
    description: "Everything you need to film professional-looking gym Reels with only your phone — lighting, angles, audio, and the exact setup that works on a gym floor.",
    category: "Reels",
    readTime: "5 min read",
    type: "article",
    seoTitle: "How to Film Gym Reels With Just a Phone (No Crew Needed) | Lift Media",
    seoDescription: "Everything you need to film professional-looking gym Reels with only your phone — lighting, angles, audio, and the exact setup that works on a gym floor.",
    related: ["instagram-reels-for-gym-owners", "reels-ideas-personal-trainers", "7-second-hook-formula"],
    proLock: "ai-content-os",
    content: [
      { type: "p", text: "The number one reason gym owners don't post Reels consistently is not lack of ideas — it's the belief that they need better equipment. A camera crew, a ring light, a professional editor. The reality is that the most effective gym Reels are filmed on a phone, in the gym, with no crew and no editing software beyond the native camera app." },
      { type: "h2", text: "The Only Equipment You Actually Need" },
      { type: "ul", items: ["Your phone (any model from the last three years is more than sufficient)", "A phone tripod or clip mount", "A small clip-on microphone for talking-head videos", "Natural light from a window, or the gym's existing overhead lighting"] },
      { type: "p", text: "That's it. Everything else is optional. The biggest quality upgrade you can make is not a camera — it's a microphone. Bad audio will kill a Reel faster than bad video every time." },
      { type: "h2", text: "Lighting on a Gym Floor" },
      { type: "p", text: "Gyms are notoriously difficult to film in. High ceilings, mixed lighting, and lots of reflective surfaces. The simplest fix is to film facing a window or a bright light source — not with it behind you. If you're filming in a darker area of the gym, move closer to the light rather than trying to compensate in editing." },
      { type: "tip", icon: "💡", text: "Film between 10am and 2pm when natural light is strongest. If your gym has no windows, position yourself directly under an overhead light and face it. Avoid filming with a light source behind you — it creates silhouettes." },
      { type: "h2", text: "Camera Angles That Work in a Gym" },
      { type: "h3", text: "For talking-head videos" },
      { type: "p", text: "Position your phone at eye level or slightly above. Eye level feels natural and conversational. Slightly above is flattering. Never film from below — it creates an unflattering angle and makes the background look chaotic." },
      { type: "h3", text: "For exercise demonstrations" },
      { type: "p", text: "Use a side-on angle for most exercises — it shows the full range of motion and makes form corrections easy to see. For exercises like squats and deadlifts, a 45-degree angle from the front shows both depth and bar path simultaneously." },
      { type: "h3", text: "For gym tours and walkthroughs" },
      { type: "p", text: "Hold the phone in landscape orientation and move slowly. Fast panning makes viewers dizzy. Walk through the space at a normal pace and let the environment speak for itself." },
      { type: "h2", text: "The 60-Second Filming Setup" },
      { type: "p", text: "When you're ready to film, this is the setup that takes 60 seconds and produces consistent results: clip your phone to the tripod, position it at eye level, check that the background is tidy and recognisably a gym, attach your clip mic if you're speaking to camera, and press record." },
      { type: "h2", text: "Editing: Keep It Simple" },
      { type: "p", text: "The native Instagram Reels editor is sufficient for most gym content. Add captions (Instagram's auto-caption feature is 90% accurate), trim the start and end of your clip, and add one piece of text on screen if you're making a key point. That's a complete edit. Resist the urge to add transitions, effects, and music that competes with your message." },
      { type: "cta-course", course: "basic-filming", label: "Take the full free course on filming professional gym content with your phone" },
    ],
  },

  // ─── ARTICLE: AI Tools for Gym Marketing ─────────────────────────────────
  {
    slug: "ai-tools-gym-marketing",
    title: "AI Tools for Gym Marketing That Save Hours Every Week",
    description: "The best AI tools gym owners are using right now to write captions, plan content, and repurpose Reels — without losing the authentic voice that builds trust.",
    category: "AI Tools",
    readTime: "5 min read",
    type: "article",
    seoTitle: "AI Tools for Gym Marketing That Save Hours Every Week | Lift Media",
    seoDescription: "The best AI tools gym owners are using right now to write captions, plan content, and repurpose Reels — without losing the authentic voice that builds trust.",
    related: ["ai-30-days-content", "ai-prompt-pack", "educational-content-converts"],
    proLock: "ai-content-os",
    content: [
      { type: "p", text: "The gym owners who are winning on social media right now are not necessarily the ones with the most time or the biggest budgets. They're the ones who've figured out how to use AI tools to do in 30 minutes what used to take three hours — without their content sounding like it was written by a robot." },
      { type: "h2", text: "The Golden Rule of AI for Gym Marketing" },
      { type: "p", text: "AI is a first-draft machine, not a publishing machine. The gym owners who use AI most effectively treat it as a starting point — they use it to generate options, then edit those options in their own voice. The gym owners who use AI badly copy and paste directly from the output. The difference is immediately obvious to anyone who follows multiple gym accounts." },
      { type: "h2", text: "ChatGPT: Your Caption and Content Planning Tool" },
      { type: "p", text: "ChatGPT is the most versatile AI tool for gym marketing. Use it to generate five caption options for a Reel you've already filmed, to brainstorm content ideas for the next month, or to write the first draft of an email to your members. The key is to give it specific context — your gym name, your target member, your tone of voice — and then edit the output heavily." },
      { type: "tip", icon: "🤖", text: "The best prompt structure for gym captions: 'Write 5 Instagram captions for a gym Reel about [topic]. The gym is [name] in [city]. The tone is [friendly/motivational/educational]. The target audience is [description]. Each caption should end with a CTA to DM us for a free trial.'" },
      { type: "h2", text: "The ChatGPT Interviewer Hack" },
      { type: "p", text: "One of the most powerful AI techniques for gym owners is using ChatGPT as an interviewer. Set it up with this prompt: 'You are a journalist interviewing a gym owner for an article about their training philosophy. Ask me one question at a time and use my answers to write a 300-word Instagram caption in my voice.' Then just answer the questions naturally. The result sounds like you — because it is you." },
      { type: "h2", text: "Canva AI: Design Without a Designer" },
      { type: "p", text: "Canva's AI features allow gym owners to create professional-looking graphics, resize content for different platforms, and generate background images — all without any design skills. The magic eraser tool alone saves hours of time that used to be spent on photo editing." },
      { type: "h2", text: "Opus Clip: Turn One Video Into Ten" },
      { type: "p", text: "Opus Clip uses AI to identify the most engaging moments in a longer video and automatically creates short-form clips from them. If you film a 10-minute training session or a Q&A, Opus Clip can turn it into five or six Reels in minutes. This is one of the highest-leverage AI tools for gym owners who already create video content." },
      { type: "h2", text: "What AI Cannot Replace" },
      { type: "p", text: "AI cannot replace your face, your voice, your community, or your results. The gym owners who are failing with AI are the ones who've removed themselves from their content entirely. AI should handle the writing and planning so that you can spend more time on the parts that only you can do — showing up on camera, building relationships, and sharing your genuine expertise." },
      { type: "cta-course", course: "ai-gym-marketing", label: "Take the free AI in Gym Marketing course to learn exactly how to use these tools" },
      { type: "callout", text: "Get 50+ ready-to-use AI prompts for gym marketing in the AI Prompt Pack — free in the resource library." },
    ],
  },

  // ─── ARTICLE: Instagram Captions for Gyms ────────────────────────────────
  {
    slug: "instagram-captions-for-gyms",
    title: "How to Write Instagram Captions for Gyms That Drive DMs",
    description: "A practical guide to writing Instagram captions for gyms that spark conversations, drive DMs, and convert followers into paying members.",
    category: "Instagram",
    readTime: "4 min read",
    type: "article",
    seoTitle: "How to Write Instagram Captions for Gyms That Drive DMs | Lift Media",
    seoDescription: "A practical guide to writing Instagram captions for gyms that spark conversations, drive DMs, and convert followers into paying members.",
    related: ["instagram-reels-for-gym-owners", "7-second-hook-formula", "fitness-studio-instagram-bio-that-converts"],
    proLock: "dm-scripts",
    content: [
      { type: "p", text: "Most gym Instagram captions are an afterthought. A generic motivational quote, a list of hashtags, and maybe an emoji or two. The Reel gets posted, a few people like it, and nothing happens. No DMs. No enquiries. No new members." },
      { type: "p", text: "The caption is not an afterthought. For gym owners trying to convert followers into members, the caption is where the conversion actually happens. Here's how to write captions that do that job." },
      { type: "h2", text: "The Three-Part Caption Formula" },
      { type: "h3", text: "Part 1: The Hook (First Line)" },
      { type: "p", text: "The first line of your caption is the only line most people see before they tap 'more.' It needs to stop them from scrolling past. The best gym caption hooks are either a bold statement, a direct question, or a specific promise." },
      { type: "h3", text: "Part 2: The Value (Middle)" },
      { type: "p", text: "The middle of your caption should deliver on the promise of the hook. Give real information, share a real story, or make a real argument. Don't pad it out. Every sentence should earn its place. Two to four sentences is usually enough." },
      { type: "h3", text: "Part 3: The CTA (Last Line)" },
      { type: "p", text: "The last line of your caption should tell people exactly what to do next. The most effective CTA for gym owners is a DM trigger: 'DM me the word TRIAL and I'll send you details for your first week free.' This is specific, low-friction, and creates a direct conversation." },
      { type: "h2", text: "The Hashtag Question" },
      { type: "p", text: "Hashtags matter less than they used to, but they still have value for local discovery. Use three to five highly specific hashtags — your city name, your gym type, and your target audience. Avoid generic hashtags like #fitness or #gym that have hundreds of millions of posts." },
      { type: "tip", icon: "✍️", text: "Write your caption before you film your Reel. Knowing exactly what you're going to say in the caption helps you film a Reel that supports it — rather than trying to write a caption that explains a Reel you've already filmed." },
      { type: "h2", text: "Caption Length: Short or Long?" },
      { type: "p", text: "Both work, but for different purposes. Short captions (one to three lines) work best for Reels where the video speaks for itself. Long captions (150+ words) work best for educational posts where you're sharing a detailed insight. The worst caption length is medium — long enough to require a 'more' tap but not long enough to deliver real value." },
      { type: "h2", text: "Five Caption Templates for Gym Owners" },
      { type: "ol", items: ["Hook: bold claim + 2 sentences of evidence + CTA to DM for free trial", "Hook: question + answer in 3 sentences + CTA to save this post", "Hook: 'If you're [specific person]...' + 2 sentences of empathy + CTA to DM for help", "Hook: myth + truth in 2 sentences + CTA to share with someone who needs this", "Hook: result + story of how in 3 sentences + CTA to DM for details"] },
      { type: "cta-course", course: "basic-filming", label: "Learn the full content system for gym owners" },
    ],
  },

  // ─── ARTICLE: Local SEO for Gyms ─────────────────────────────────────────
  {
    slug: "local-seo-for-gyms",
    title: "Local SEO for Gyms: How to Rank on Google Maps in Your City",
    description: "A step-by-step local SEO guide for gym owners — covering Google Business Profile optimisation, local keywords, reviews, and citations that get you found first.",
    category: "SEO",
    readTime: "6 min read",
    type: "article",
    seoTitle: "Local SEO for Gyms: How to Rank on Google Maps in Your City | Lift Media",
    seoDescription: "A step-by-step local SEO guide for gym owners — covering Google Business Profile optimisation, local keywords, reviews, and citations that get you found first.",
    related: ["rank-gym-on-google", "ai-tools-gym-marketing", "get-more-gym-members-instagram"],
    proLock: "seo-toolkit",
    content: [
      { type: "p", text: "When someone in your city searches 'gym near me' or 'CrossFit box [your city]', the gyms that appear in the top three results on Google Maps get the vast majority of clicks. Local SEO is the process of making sure your gym is one of those three. It's not complicated, it doesn't require a big budget, and most of your competitors haven't done it properly — which means the opportunity is significant." },
      { type: "h2", text: "Step 1: Claim and Optimise Your Google Business Profile" },
      { type: "p", text: "Your Google Business Profile (formerly Google My Business) is the single most important local SEO asset your gym has. If you haven't claimed it, do that first at business.google.com. Once claimed, fill in every single field: business name, address, phone number, website, hours, description, photos, and services." },
      { type: "ul", items: ["Business name: Use your exact legal business name — don't add keywords to it", "Description: Write 750 characters that include your city name, gym type, and key services", "Photos: Upload at least 10 photos — exterior, interior, equipment, classes, and team", "Services: List every service you offer (personal training, group classes, etc.)", "Hours: Keep these accurate and update them for holidays"] },
      { type: "h2", text: "Step 2: Get More Google Reviews (The Right Way)" },
      { type: "p", text: "Google reviews are the most powerful local ranking signal after your GBP completeness. The gyms that rank in the top three almost always have more reviews than their competitors — and more recent ones. The most effective way to get reviews is to ask directly, immediately after a positive interaction." },
      { type: "tip", icon: "⭐", text: "Create a short URL for your Google review page and text it to members after their first month. A simple message: 'Hey [name], so glad you're seeing results! If you have 60 seconds, a Google review would mean the world to us: [link]'" },
      { type: "h2", text: "Step 3: Optimise Your Website for Local Keywords" },
      { type: "p", text: "Your website needs to include your city name and gym type in the right places: the page title, the H1 heading, the first paragraph of text, and the URL if possible. 'Strength Training Gym in Manchester | Iron Forge Fitness' is a better page title than 'Iron Forge Fitness | Home'." },
      { type: "h2", text: "Step 4: Build Local Citations" },
      { type: "p", text: "A citation is any mention of your gym's name, address, and phone number (NAP) on another website. The more consistent citations you have, the more Google trusts that your business is legitimate and well-established. Start with the major directories: Yelp, Facebook, Bing Places, Apple Maps, and any local business directories in your city." },
      { type: "h2", text: "Step 5: Create Location-Specific Content" },
      { type: "p", text: "Google rewards websites that create genuinely useful content for local searchers. A blog post titled 'The Best Gyms in [Your City] (And What Makes Each One Different)' — where you honestly compare yourself to competitors — can rank for high-intent local searches and position you as the most transparent and trustworthy option." },
      { type: "h2", text: "How Long Does Local SEO Take?" },
      { type: "p", text: "Most gym owners see meaningful improvements in their Google Maps ranking within 60 to 90 days of implementing these steps. The GBP optimisation and review strategy tend to produce the fastest results. Website optimisation and citation building take longer but have a compounding effect over time." },
      { type: "h2", text: "The Local SEO Audit: Five Questions" },
      { type: "ol", items: ["Is your Google Business Profile 100% complete with photos, services, and a full description?", "Do you have more Google reviews than your top three local competitors?", "Does your website homepage title include your city name and gym type?", "Is your NAP (name, address, phone) consistent across all directories?", "Do you have at least one piece of content that targets a local search query?"] },
      { type: "cta-course", course: "ai-gym-marketing", label: "Learn how to use AI to accelerate your local SEO strategy" },
      { type: "callout", text: "The Local SEO Domination Toolkit (members only) includes a full citation audit template, a review request script, and a keyword map for your city. Unlock it with a Lift Media membership." },
    ],
  },


  // ─── TOOL: 50 Viral Hooks ───────────────────────────────────────────────
  {
    slug: "viral-hooks",
    title: "50 Viral Hooks For Gyms",
    description:
      "Stop the scroll instantly. 50 proven opening lines for gym reels that drive views and saves.",
    category: "Reels",
    readTime: "Interactive tool",
    type: "tool",
    toolRoute: "/resources/viral-hooks",
    related: ["7-second-hook-formula", "gym-reel-script-checklist", "reels-into-memberships"],
    proLock: "content-machine",
  },

  // ─── TOOL: 30-Day Content Calendar ─────────────────────────────────────
  {
    slug: "30-day-content-calendar",
    title: "30-Day Gym Content Calendar",
    description:
      "A complete month of content ideas, themes, and formats — ready to execute immediately.",
    category: "Planning",
    readTime: "Interactive tool",
    type: "tool",
    toolRoute: "/resources/content-calendar",
    related: ["educational-content-converts", "ai-30-days-content", "gym-reel-script-checklist"],
    proLock: "content-machine",
  },
  {
    slug: "how-to-get-gym-website-found-google",
    title: "How to Get Your Gym Website Found on Google: Sitemaps, AEO and robots.txt Explained",
    description: "A plain-English guide for gym owners on sitemaps, robots.txt, and Answer Engine Optimisation. What they are, why they matter, and exactly how to set them up without touching a single line of code.",
    category: "SEO",
    readTime: "7 min read",
    type: "article",
    seoTitle: "How to Get Your Gym Website Found on Google | Lift Media",
    seoDescription: "A plain-English guide for gym owners on sitemaps, robots.txt, and AEO. What they are, why they matter, and how to submit your site to Google without any technical knowledge.",
    related: ["rank-gym-on-google", "local-seo-for-gyms", "instagram-reels-for-gym-owners"],
    proLock: "local-seo-toolkit",
    content: [
      { type: "h2", text: "Why Most Gym Websites Are Invisible on Google" },
      { type: "p", text: "You built a website. You wrote some pages about your classes, your membership options, and your location. You hit publish. And then nothing. No visitors from Google. No enquiries from people searching gym near me. Just silence." },
      { type: "p", text: "This is one of the most common frustrations gym owners face, and it almost always comes down to the same root cause: Google does not know your website exists, or does not fully understand what is on it." },
      { type: "p", text: "The good news is that fixing this does not require a developer, a degree in computer science, or a large budget. It requires understanding three simple concepts: sitemaps, robots.txt, and something called AEO. Once you understand what these are and why they matter, the steps to set them up are straightforward." },
      { type: "h2", text: "What Is a Sitemap and Why Does Your Gym Need One?" },
      { type: "p", text: "Think of your website like a gym building. You know every room in it: the reception, the weights floor, the cardio area, the changing rooms. But if someone new walked in off the street with no map and no signage, they might only find the reception and the weights floor. The cardio area, the changing rooms, the studio — they might never find them at all." },
      { type: "p", text: "A sitemap is the map of your website. It is a simple file that lists every single page on your site and tells Google exactly where to find them all. Without a sitemap, Google crawlers have to wander through your website following links from page to page and hoping they find everything. Sometimes they do. Often they miss pages entirely, especially newer ones you have just published." },
      { type: "tip", icon: "📱", text: "The practical impact for gym owners: If you publish a new blog post or a new class page and Google does not know about it, that page will not appear in search results for weeks or months. A sitemap means new content gets found and indexed faster, sometimes within days." },
      { type: "h2", text: "How Sitemaps Work on Different Website Platforms" },
      { type: "h3", text: "Squarespace" },
      { type: "p", text: "If your gym website is on Squarespace, your sitemap is created and maintained automatically. Squarespace generates a sitemap at yourdomain.com/sitemap.xml and keeps it updated every time you add or change a page. You do not need to do anything to create it." },
      { type: "h3", text: "Wix" },
      { type: "p", text: "Wix also generates your sitemap automatically and keeps it updated. Your sitemap lives at yourdomain.com/sitemap.xml. Wix also has a built-in SEO setup checklist that walks you through submitting it to Google, which makes the process very straightforward even for non-technical users." },
      { type: "h3", text: "WordPress" },
      { type: "p", text: "WordPress does not create a sitemap by default, but the free Yoast SEO plugin generates one automatically the moment you install it. If you are on WordPress and do not have Yoast, installing it is a five-minute job and it handles everything from there." },
      { type: "h3", text: "Custom-built websites" },
      { type: "p", text: "If your website was built by a developer or uses a custom platform, ask your developer whether a sitemap exists. It should be at yourdomain.com/sitemap.xml. If nothing appears, ask your developer to create one. It is a quick task for any competent developer." },
      { type: "h2", text: "How to Submit Your Sitemap to Google" },
      { type: "p", text: "Having a sitemap is only half the job. The second step is telling Google it exists. This is done through a free tool called Google Search Console." },
      { type: "ol", items: [
        "Go to search.google.com/search-console and sign in with your Google account.",
        "Click Add property and enter your website address. Google will ask you to verify that you own the site. The easiest method is HTML tag — Google gives you a small piece of code to paste into your website header. On Squarespace and Wix there is a dedicated field for this in your site settings under SEO or Advanced.",
        "Once verified, click Sitemaps in the left-hand menu.",
        "Type sitemap.xml into the box and click Submit.",
      ]},
      { type: "callout", text: "How long does it take? Google typically begins crawling pages within a few days of sitemap submission. For a small gym website, most pages are usually indexed within one to two weeks. Newer websites with little existing traffic can sometimes take longer." },
      { type: "h2", text: "What Is robots.txt and Should You Worry About It?" },
      { type: "p", text: "If a sitemap is the map that tells Google what to read, robots.txt is the sign on the door that tells Google what it is and is not allowed to read. It is a tiny text file that lives at yourdomain.com/robots.txt. Most gym websites do not need to worry about this file at all — the default settings on Squarespace, Wix, and WordPress are sensible and will not accidentally block Google from reading your site." },
      { type: "p", text: "The one situation where robots.txt matters for gym owners is if your website has a members-only area or a booking system that you do not want appearing in Google search results. In that case, your developer can add a line to robots.txt telling Google to skip those pages." },
      { type: "tip", icon: "✅", text: "You can view your robots.txt by typing yourdomain.com/robots.txt into your browser. As long as it does not say Disallow: / which would block Google from reading your entire site, you are fine." },
      { type: "h2", text: "What Is AEO and Why Is It Becoming More Important Than Traditional SEO?" },
      { type: "p", text: "AEO stands for Answer Engine Optimisation. It is the practice of structuring your website content so that it gets chosen as the answer when someone asks a question — whether that question is typed into Google or spoken to an AI assistant like ChatGPT, Perplexity, or Google AI Overview." },
      { type: "p", text: "Traditional SEO is about ranking your website on page one of Google. AEO is about being the answer that appears before the website links even start — or being the source that an AI tool cites when someone asks it a question." },
      { type: "p", text: "For gym owners, this matters because the way people search for gyms is changing. Instead of typing gym near me and scrolling through results, more people are asking questions like what should I look for in a gym or what is the difference between a CrossFit gym and a regular gym. If your website has clear, well-written answers to these questions, it can appear as the direct answer — which means your gym gets seen even by people who never click through to your site." },
      { type: "h3", text: "How to optimise your gym website for AEO" },
      { type: "p", text: "Write content that directly answers the questions your ideal members are actually asking. Use clear headings that frame the question. Write the answer in the first one or two sentences below the heading — do not bury it. Keep your language plain and direct." },
      { type: "tip", icon: "💡", text: "The content you are reading right now is an example of AEO-friendly writing. The headings are questions. The answers come immediately. The language is clear. If someone asked an AI tool what is a sitemap and your gym website had a page that answered it this clearly, your site would be a strong candidate to be cited as the source." },
      { type: "h2", text: "The Three Things to Do This Week" },
      { type: "ol", items: [
        "Check whether your sitemap exists. Type yourdomain.com/sitemap.xml into your browser. If a page of text appears with a list of URLs, your sitemap exists. If you get a 404 error, you need to create one using the platform guide above.",
        "Submit your sitemap to Google Search Console. Follow the four steps above. It takes about ten minutes and the impact on your search visibility compounds over time.",
        "Review your most important pages for AEO. Look at your homepage, your about page, and your class pages. Does each one directly answer the questions a prospective member would ask? If not, rewrite the opening paragraph of each page to lead with the answer.",
      ]},
      { type: "p", text: "These three steps will not transform your search rankings overnight, but they will put your gym website in a significantly better position than the majority of gym websites that have never done any of this." },
      { type: "cta-course", course: "ai-gym-marketing", label: "Want to go deeper on gym marketing? Our free AI in Gym Marketing course covers how to use AI tools to create content that ranks and converts." },
    ],
  },
];

/** Quick lookup by slug */
export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

/** Get related resources for a given resource */
export function getRelatedResources(resource: Resource): Resource[] {
  return resource.related
    .map((slug) => getResourceBySlug(slug))
    .filter((r): r is Resource => r !== undefined);
}
