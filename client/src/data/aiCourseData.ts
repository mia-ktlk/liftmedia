// AI Course Data — "The AI Problem & Opportunity for Gym Owners"

export const aiCourseTitle = "AI in Gym Marketing: Benefits, Drawbacks & What to Watch Out For";
export const aiCourseSubtitle = "A balanced, no-hype guide to using AI intentionally — without losing the soul of your brand.";
export const aiCourseTotalLessons = 6;
export const aiCourseTotalQuizzes = 2;

export type AiLessonItem =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "tip"; icon: string; text: string }
  | { type: "warning"; text: string }
  | { type: "stat"; value: string; label: string; color: string }
  | { type: "list"; items: string[] }
  | { type: "link"; label: string; url: string; description: string }
  | { type: "visual"; label: string; description: string; icon: string };

export type AiCourseItem = {
  id: string;
  type: "lesson" | "quiz";
  title: string;
  subtitle?: string;
  emoji: string;
  videoUrl?: string; // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
  duration?: string;
  content?: AiLessonItem[];
  questions?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
};

export const aiCourseItems: AiCourseItem[] = [

  // ─── LESSON 1 ─────────────────────────────────────────────────
  {
    id: "ai-lesson-1",
    type: "lesson",
    title: "The AI Slop Problem Is Real",
    subtitle: "The internet is drowning in AI-generated content — and your audience can tell.",
    emoji: "🌊",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "5 min",
    content: [
      {
        type: "paragraph",
        text: "In 2024 and 2025, AI tools became cheap and easy enough that almost anyone could generate images, videos, and written content at scale. The result? A flood of hollow, interchangeable content that users have started calling 'AI slop' — content that looks polished on the surface but feels empty underneath.",
      },
      {
        type: "stat",
        value: "82.1%",
        label: "of Americans say they can spot AI-generated content at least some of the time (Column Five Media, 2025)",
        color: "#F59E0B",
      },
      {
        type: "stat",
        value: "94%",
        label: "of social media users say they see AI-generated content while scrolling (CNET, 2025)",
        color: "#EF4444",
      },
      {
        type: "paragraph",
        text: "For a small gym whose entire value proposition is community, real people, and authentic transformation — AI slop is the opposite of your brand. The good news: the fact that authentic content is getting rarer makes it more valuable. Your real gym, real members, and real coaches are a competitive advantage right now.",
      },
      {
        type: "tip",
        icon: "📉",
        text: "A 2026 study found Instagram and TikTok engagement fell 24% year-over-year as synthetic content now accounts for 71% of all image posts across platforms. Authentic content stands out more than ever.",
      },
      {
        type: "heading",
        text: "The Coca-Cola Cautionary Tale",
      },
      {
        type: "paragraph",
        text: "In November 2024, Coca-Cola released an AI-generated remake of their beloved 'Holidays Are Coming' Christmas ad — one of the most iconic ads in history. The backlash was immediate and widespread. Critics called it 'soulless,' 'devoid of warmth,' and 'an insult to the original.' NBC News, CNN, and major outlets covered the story. Rather than learning from it, Coca-Cola doubled down with another AI Christmas campaign in 2025 — and faced the same backlash all over again.",
      },
      {
        type: "warning",
        text: "Coca-Cola's AI Christmas ad (2024 & 2025) is now a widely cited cautionary tale in marketing. If a company with unlimited budget and the world's most recognizable brand couldn't make AI content feel warm and human, a gym owner using a free AI image generator is not going to do better.",
      },
      {
        type: "link",
        label: "NBC News: Coca-Cola AI Ad Backlash",
        url: "https://www.nbcnews.com/tech/innovation/coca-cola-causes-controversy-ai-made-ad-rcna180665",
        description: "Read the original NBC News coverage of the 2024 Coca-Cola AI ad controversy.",
      },
      {
        type: "paragraph",
        text: "The lesson is not that AI is bad. The lesson is that audiences have a finely tuned detector for content that lacks a human soul — and they react negatively when they sense it. For a gym, where trust and community are everything, that reaction can cost you members.",
      },
    ],
  },

  // ─── LESSON 2 ─────────────────────────────────────────────────
  {
    id: "ai-lesson-2",
    type: "lesson",
    title: "The Uncanny Valley & AI Faces",
    subtitle: "Why AI-generated human faces destroy trust — and what to do instead.",
    emoji: "😶",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "4 min",
    content: [
      {
        type: "paragraph",
        text: "The 'uncanny valley' is a psychological phenomenon first described by robotics professor Masahiro Mori in 1970. It describes the discomfort humans feel when something looks almost human — but not quite. AI-generated faces are the modern uncanny valley: they look real enough to register as a person, but something is slightly wrong. The eyes don't quite match. The teeth are too perfect. The lighting on the skin doesn't make physical sense.",
      },
      {
        type: "stat",
        value: "39%",
        label: "drop in brand trust reported when consumers discover an ad used AI-generated human faces without disclosure (NIM Marketing Intelligence, 2024)",
        color: "#EF4444",
      },
      {
        type: "tip",
        icon: "🧠",
        text: "Humans evolved over millions of years to read faces with extreme precision. We detect micro-expressions, asymmetries, and lighting inconsistencies in milliseconds — below conscious awareness. AI faces trigger this detector and create a vague sense of unease that users often can't name but definitely feel.",
      },
      {
        type: "heading",
        text: "The Rule: Never Use AI-Generated Faces in Gym Marketing",
      },
      {
        type: "paragraph",
        text: "For gym marketing specifically, this rule is non-negotiable. Your members are real people. Your coaches are real people. Your community is built on real human connection. Using AI-generated faces — even in backgrounds, stock-style images, or social posts — undermines that message at a subconscious level.",
      },
      {
        type: "list",
        items: [
          "❌ AI-generated 'stock photo' style people in your gym — use real photos of your actual members (with permission)",
          "❌ AI faces in testimonial-style graphics — if it looks like a testimonial, it must be a real person",
          "❌ AI-generated group fitness scenes — these are immediately recognisable as fake to anyone who has been in a real gym",
          "✅ AI to edit real photos — remove backgrounds, adjust lighting, enhance colours, clean up a messy background",
          "✅ ChatGPT image editing (GPT-4o) — give it a real photo as a starting point and it can create impressive edits that don't trigger the uncanny valley",
          "✅ AI-generated abstract graphics, icons, patterns, and backgrounds — these don't involve faces and carry no trust risk",
        ],
      },
      {
        type: "paragraph",
        text: "ChatGPT's latest image editing capability (GPT-4o) is genuinely impressive when you give it a real photo to start with. It can relight a photo, change backgrounds, add graphic elements, or create stylised versions of real images — without the uncanny valley problem, because the human element came from a real photograph.",
      },
      {
        type: "visual",
        label: "Safe vs. Unsafe AI Image Uses",
        description: "Diagram showing: Real photo + AI edit = safe. AI-generated face = unsafe. Abstract AI graphic = safe.",
        icon: "🖼️",
      },
    ],
  },

  // ─── LESSON 3 ─────────────────────────────────────────────────
  {
    id: "ai-lesson-3",
    type: "lesson",
    title: "Where AI Actually Saves You Time",
    subtitle: "The smart, intentional ways to use AI without losing your brand's soul.",
    emoji: "⚡",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "5 min",
    content: [
      {
        type: "paragraph",
        text: "Being cautious about AI does not mean avoiding it entirely. Used intentionally, AI can save a gym owner hours every week — on tasks where the output is never seen directly by your audience, or where AI is assisting rather than replacing your voice.",
      },
      {
        type: "heading",
        text: "High-Value, Low-Risk AI Uses for Gyms",
      },
      {
        type: "list",
        items: [
          "📝 First drafts of captions — use AI to generate 5 options, then rewrite in your voice. Never post AI copy verbatim.",
          "🗓️ Content calendar planning — ask AI to suggest content themes for the next 30 days based on your gym's schedule",
          "📧 Email newsletter outlines — AI is great at structuring ideas; you add the personality and real stories",
          "🔍 Keyword and hashtag research — AI tools can surface relevant search terms faster than manual research",
          "📊 Analysing your own content performance — paste your metrics into ChatGPT and ask it to identify patterns",
          "🖼️ Editing real photos — background removal, colour correction, adding text overlays to real images",
          "📞 Drafting FAQ responses and DM templates — saves time on repetitive messages while you personalise the send",
          "🎙️ Transcribing and repurposing content — transcribe a coaching session and ask AI to turn it into a blog post or caption series",
        ],
      },
      {
        type: "tip",
        icon: "🎯",
        text: "The golden rule: AI should amplify your voice, not replace it. If someone who knows your gym read the output and couldn't tell it came from you, it needs more of you in it.",
      },
      {
        type: "heading",
        text: "The 'AI Assist, Human Finish' Framework",
      },
      {
        type: "paragraph",
        text: "Think of AI as an intern who is very fast but has never been to your gym, never met your members, and doesn't know your story. They can draft, research, and organise — but you have to review, personalise, and approve everything before it goes out. This mindset keeps you efficient without letting AI hollow out your brand.",
      },
      {
        type: "stat",
        value: "3–5 hrs",
        label: "average time saved per week by gym owners using AI for content drafting and scheduling — when used with human review",
        color: "#10B981",
      },
      {
        type: "warning",
        text: "Only 21% of consumers trust ads they know were created entirely by AI (Smartly.io, 2025). Transparency matters — if you use AI-generated copy, make it sound human before publishing.",
      },
      {
        type: "link",
        label: "Smartly.io: AI and Advertising — What Consumers Expect in 2025",
        url: "https://www.smartly.io/resources/ai-and-advertising-today-what-consumers-expect",
        description: "Full consumer survey on AI in advertising, including trust data.",
      },
    ],
  },

  // ─── QUIZ 1 ─────────────────────────────────────────────────
  {
    id: "ai-quiz-1",
    type: "quiz",
    title: "Quiz: AI Slop, Faces & Smart Use",
    emoji: "🧠",
    questions: [
      {
        question: "What happened when Coca-Cola used AI to recreate their iconic 'Holidays Are Coming' Christmas ad?",
        options: [
          "It went viral and increased sales by 30%",
          "It was praised for innovation and won advertising awards",
          "It faced widespread backlash, with critics calling it 'soulless' — and Coca-Cola repeated the mistake in 2025",
          "Consumers didn't notice it was AI-generated",
        ],
        correctIndex: 2,
        explanation: "Coca-Cola's 2024 AI Christmas ad was called 'soulless' and 'devoid of warmth' by critics and consumers. Despite the backlash, they released another AI Christmas campaign in 2025 and faced the same reaction. It is now a widely cited cautionary tale in marketing.",
      },
      {
        question: "What percentage of Americans say they can spot AI-generated content at least some of the time?",
        options: ["32%", "55%", "82.1%", "91%"],
        correctIndex: 2,
        explanation: "According to a 2025 Column Five Media study, 82.1% of Americans say they can spot AI-generated content at least some of the time. That number rises to 88.4% for younger audiences.",
      },
      {
        question: "Which of the following is the SAFEST way to use AI for gym visual content?",
        options: [
          "Generate AI images of people working out to use as social posts",
          "Use AI to edit real photos of your actual members — background removal, lighting, colour correction",
          "Create AI-generated testimonial graphics with fictional member faces",
          "Use AI stock photo tools to fill your feed when you don't have real content",
        ],
        correctIndex: 1,
        explanation: "Using AI to edit real photos of your actual members is safe and effective. The human element comes from a real photograph, which avoids the uncanny valley problem entirely. AI-generated faces, especially in a gym/community context, erode trust.",
      },
    ],
  },

  // ─── LESSON 4 ─────────────────────────────────────────────────
  {
    id: "ai-lesson-4",
    type: "lesson",
    title: "People Are Getting Better at Spotting It",
    subtitle: "The 'AI look' is becoming a red flag — here is what gives it away.",
    emoji: "🔍",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "4 min",
    content: [
      {
        type: "paragraph",
        text: "In 2022, most people couldn't reliably identify AI-generated content. By 2025, 82% could. This detection ability is improving faster than AI generation quality is improving. The gap between 'AI that fools people' and 'AI that people immediately clock' is closing — in the wrong direction for brands relying on AI content.",
      },
      {
        type: "heading",
        text: "The Tells People Have Learned to Spot",
      },
      {
        type: "list",
        items: [
          "🖐️ Hands with too many or too few fingers — still a common AI failure that immediately signals 'AI-generated'",
          "✨ Overly perfect skin and teeth — real people have pores, asymmetry, and imperfection; AI faces look like they were designed",
          "📝 Generic captions with no specific details — 'Crush your goals this Monday! 💪🔥' with no gym name, no real story, no personality",
          "🌟 Glowing, dramatic lighting on everything — AI tends to over-dramatise lighting in ways that look cinematic but feel fake",
          "🔤 Suspiciously perfect grammar and sentence structure — human writing has rhythm, personality, and occasional imperfection",
          "📸 Stock-photo-style gym scenes — no real equipment, no real people, no real mess — gyms are not that clean or that empty",
          "🎨 Consistent visual 'sameness' — when every post looks like it came from the same template, people notice",
        ],
      },
      {
        type: "tip",
        icon: "👀",
        text: "The 'AI look' in written content is just as recognisable as in images. Phrases like 'In today's fast-paced world,' 'It's important to note that,' and 'As we navigate these challenges' are now widely associated with AI-generated text. Avoid them.",
      },
      {
        type: "heading",
        text: "Why This Matters More for Gyms Than Other Businesses",
      },
      {
        type: "paragraph",
        text: "A gym membership is a deeply personal purchase. People are choosing to trust you with their health, their time, and their body image. That trust is built on authenticity — real coaches, real results, real community. When your social media looks AI-generated, you are sending a signal that your gym is a brand, not a community. That is the opposite of what sells memberships.",
      },
      {
        type: "stat",
        value: "35%",
        label: "of social media users say their trust in social media dropped in the past 12 months, largely due to AI-generated content (O'Dwyer PR, 2026)",
        color: "#EF4444",
      },
      {
        type: "link",
        label: "O'Dwyer PR: Lack of Trust and AI Slop Could Slow Social Media Growth",
        url: "https://www.odwyerpr.com/story/public/24534/2026-03-27/lack-trust-ai-slop-could-slow-social-media-growth.html",
        description: "2026 report on how AI slop is eroding social media trust across platforms.",
      },
    ],
  },


  // ─── LESSON 4b — CHATGPT INTERVIEWER HACK ─────────────────────────────────────────
  {
    id: "ai-lesson-4b",
    type: "lesson",
    title: "The ChatGPT Interviewer Hack",
    subtitle: "Use AI as a tool to create more authentic content — not less.",
    emoji: "🎙️",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "4 min",
    content: [
      {
        type: "paragraph",
        text: "The best use of AI in your content strategy is not to replace your voice — it is to help you find it. One of the most powerful examples of this is using ChatGPT's voice mode as a live interviewer while you film.",
      },
      {
        type: "heading",
        text: "Hack: ChatGPT Voice Mode as Your Content Interviewer",
      },
      {
        type: "paragraph",
        text: "Here is a perfect example of using AI as a tool without losing your personal touch: use ChatGPT's voice mode as a live interviewer while you film. You set up your filming device slightly off to the side, look toward the ChatGPT phone as it asks you questions, and answer naturally. The result is authentic, interview-style content — filmed by you, in your gym, in your voice — with AI simply acting as the prompt engine.",
      },
      {
        type: "tip",
        icon: "💡",
        text: "Why This Is the Right Way to Use AI: The AI never appears in the video. Your face, your voice, your personality, and your gym are front and centre. The AI just removes the awkwardness of talking to a camera alone. This is AI as a tool, not AI as a replacement for you.",
      },
      {
        type: "heading",
        text: "Sample Prompts to Give ChatGPT",
      },
      {
        type: "tip",
        icon: "💡",
        text: "Prompt: Education Content: Ask me questions about common mistakes gym beginners make. Keep your questions short and conversational. One question at a time. Wait for my full answer before asking the next one.",
      },
      {
        type: "tip",
        icon: "💡",
        text: "Prompt: Story / Brand Content: Interview me about why I started my gym and what makes it different. Ask about challenges, motivations, and what I want members to feel. Keep it conversational.",
      },
      {
        type: "tip",
        icon: "💡",
        text: "Prompt: FAQ Content: Ask me the most common questions people have before joining a gym for the first time. One question at a time. Short questions only.",
      },
      {
        type: "paragraph",
        text: "The content you get from this session is 100% yours — your words, your energy, your story. AI just made it easier to get it out of you.",
      },
      {
        type: "link",
        label: "Watch: ChatGPT Interviewer Hack in Action",
        url: "https://www.instagram.com/reel/DYMyTvjR_oo",
        description: "See exactly how this technique works in a real filming setup.",
      },
    ],
  },
  // ─── LESSON 5 ─────────────────────────────────────────────────
  {
    id: "ai-lesson-5",
    type: "lesson",
    title: "AI & Security: What Gym Owners Need to Know",
    subtitle: "Using AI tools carelessly can expose your business, your members, and your data.",
    emoji: "🔒",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "5 min",
    content: [
      {
        type: "paragraph",
        text: "This lesson is not about scaring you away from AI tools. It is about making sure you use them with your eyes open. There are real, documented security risks associated with AI tools — especially for small business owners who may not have an IT team reviewing what gets shared.",
      },
      {
        type: "heading",
        text: "The Risk of AI-Generated Code",
      },
      {
        type: "paragraph",
        text: "Many gym owners are now using AI-assisted builders such as Curie & Co to build websites, booking systems, or member portals — often without any coding background. This is called 'vibe coding' and it can be genuinely useful. But the security risks are significant and widely documented.",
      },
      {
        type: "stat",
        value: "45%",
        label: "of AI-generated code contains OWASP Top 10 security vulnerabilities — the most critical web security risks (Veracode, 2025)",
        color: "#EF4444",
      },
      {
        type: "stat",
        value: "2.74×",
        label: "more security vulnerabilities in AI-generated code compared to human-written code (Veracode GenAI Code Security Report, 2025)",
        color: "#F59E0B",
      },
      {
        type: "warning",
        text: "If you are using AI to build anything that handles member data, payment information, or login credentials — please have a qualified developer review the code before it goes live. The consequences of a data breach for a small gym (member trust, legal liability, GDPR/CCPA fines) are severe.",
      },
      {
        type: "link",
        label: "Veracode: AI-Generated Code Security Risks",
        url: "https://www.veracode.com/blog/ai-generated-code-security-risks/",
        description: "Veracode's 2025 report on security vulnerabilities in AI-generated code across 100+ LLMs.",
      },
      {
        type: "heading",
        text: "The Risk of Sharing Member Data with AI Tools",
      },
      {
        type: "list",
        items: [
          "⚠️ Do not paste member names, emails, or health information into ChatGPT or other AI tools — this data may be used for training",
          "⚠️ Do not share your gym's financial data, contracts, or pricing strategy in AI prompts — treat AI like a public forum",
          "⚠️ Check the privacy settings of any AI tool before using it for business — many default to using your inputs for model training",
          "✅ Use AI for general tasks (caption writing, content ideas, email templates) where no sensitive data is involved",
          "✅ If you use AI for member communications, review every output before sending — AI can hallucinate facts, prices, or policies",
          "✅ Use enterprise-tier AI tools (ChatGPT Team, Claude for Business) if you need to work with business data — these have stronger data privacy protections",
        ],
      },
      {
        type: "tip",
        icon: "🛡️",
        text: "The simplest rule: if you wouldn't post it publicly on your gym's Facebook page, don't put it in an AI prompt. Treat every AI input as potentially public.",
      },
      {
        type: "heading",
        text: "AI Phishing & Scams Targeting Small Businesses",
      },
      {
        type: "paragraph",
        text: "AI has dramatically lowered the cost and quality of phishing attacks. Scam emails that used to be obvious (bad grammar, generic greetings) now look professional and personalised. Gym owners are being targeted with fake invoices, fake Google My Business alerts, and fake 'your account has been compromised' messages — all written by AI. Train yourself and your staff to verify any unexpected financial request by phone before acting.",
      },
    ],
  },

  // ─── LESSON 6 ─────────────────────────────────────────────────
  {
    id: "ai-lesson-6",
    type: "lesson",
    title: "The Bottom Line: Intentional AI",
    subtitle: "A practical framework for using AI without losing the soul of your gym brand.",
    emoji: "🎯",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "3 min",
    content: [
      {
        type: "paragraph",
        text: "AI is not going away. The gyms that thrive in the next five years will not be the ones that refuse to use AI, nor the ones that let AI replace their voice entirely. They will be the ones that use AI intentionally — to save time on the invisible work, while investing that saved time into more authentic human content.",
      },
      {
        type: "heading",
        text: "The Intentional AI Framework for Gyms",
      },
      {
        type: "visual",
        label: "Intentional AI Decision Tree",
        description: "Does this task involve a human face or personal voice? → Yes: Do it yourself or use AI to assist. No: AI can do the heavy lifting.",
        icon: "🌳",
      },
      {
        type: "list",
        items: [
          "✅ USE AI FOR: Research, drafting, scheduling, editing real photos, transcription, data analysis, email templates",
          "✅ USE AI FOR: Generating ideas, suggesting content themes, repurposing long content into short clips",
          "✅ USE AI FOR: Editing and improving your own writing — not replacing it",
          "❌ AVOID AI FOR: Anything involving human faces in your marketing",
          "❌ AVOID AI FOR: Posting AI-generated copy verbatim without adding your voice",
          "❌ AVOID AI FOR: Building member-facing tech without security review",
          "❌ AVOID AI FOR: Replacing the authentic, real, human content that is your actual competitive advantage",
        ],
      },
      {
        type: "tip",
        icon: "💡",
        text: "The best gym social media in 2025 and beyond will look like it was made by a real person who knows their members by name — because it was. AI can help you get there faster. It cannot get you there alone.",
      },
      {
        type: "paragraph",
        text: "Your gym's community, your coaches' personalities, your members' real transformations — these are things AI cannot generate. They are your moat. Protect them by keeping your content authentic, and use AI only where it makes you more efficient without making you less human.",
      },
      {
        type: "stat",
        value: "76%",
        label: "of consumers say they would switch brands for one that is more transparent about how it uses AI (Relyance AI Consumer Trust Survey, 2025)",
        color: "#3B82F6",
      },
      {
        type: "link",
        label: "Relyance AI: Consumer AI Trust Survey 2025",
        url: "https://www.relyance.ai/consumer-ai-trust-survey-2025",
        description: "Full consumer trust survey including data on AI transparency and brand switching.",
      },
    ],
  },

  // ─── QUIZ 2 ─────────────────────────────────────────────────
  {
    id: "ai-quiz-2",
    type: "quiz",
    title: "Quiz: Security, Detection & the Framework",
    emoji: "🔐",
    questions: [
      {
        question: "According to Veracode's 2025 report, what percentage of AI-generated code contains critical security vulnerabilities?",
        options: ["12%", "28%", "45%", "67%"],
        correctIndex: 2,
        explanation: "Veracode's 2025 GenAI Code Security Report found that 45% of AI-generated code contains OWASP Top 10 vulnerabilities — the most critical web security risks. AI-generated code also contains 2.74x more vulnerabilities than human-written code.",
      },
      {
        question: "Which of the following is the BEST use of AI for a gym owner's marketing?",
        options: [
          "Generating AI images of people working out to fill your Instagram feed",
          "Using AI to write and post captions without reviewing them",
          "Using AI to draft caption options, then rewriting them in your own voice before posting",
          "Building a member portal with AI-generated code and launching it immediately",
        ],
        correctIndex: 2,
        explanation: "The 'AI Assist, Human Finish' framework means using AI for first drafts and ideas, then adding your own voice and reviewing before publishing. This saves time without losing authenticity or creating security risks.",
      },
      {
        question: "What is the safest rule for sharing information with AI tools like ChatGPT?",
        options: [
          "Share everything — AI tools are completely private and secure",
          "Only share information you would be comfortable posting publicly",
          "Member health data is fine to share as long as you delete the chat afterwards",
          "AI tools are covered by HIPAA so member data is always protected",
        ],
        correctIndex: 1,
        explanation: "Treat every AI input as potentially public. Do not share member names, health data, financial information, or sensitive business data with AI tools unless you are using an enterprise-tier plan with explicit data privacy protections.",
      },
    ],
  },
];
