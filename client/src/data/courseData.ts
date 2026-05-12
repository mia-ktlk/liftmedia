// Basic Filming For Social Media — Course Data
// Design: Dark premium theme, electric blue accents, Plus Jakarta Sans

export type LessonItem =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "tip"; icon: string; text: string }
  | { type: "warning"; text: string }
  | { type: "list"; items: string[] }
  | { type: "visual"; label: string; description: string; icon: string }
  | { type: "stat"; value: string; label: string; color: string };

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CourseItem {
  id: string;
  type: "lesson" | "quiz";
  title: string;
  subtitle?: string;
  emoji: string;
  // lesson fields
  videoUrl?: string; // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
  duration?: string;
  content?: LessonItem[];
  // quiz fields
  questions?: QuizQuestion[];
}

export const courseItems: CourseItem[] = [
  // ─── LESSON 1 ───────────────────────────────────────────────
  {
    id: "lesson-1",
    type: "lesson",
    title: "Your Phone Is Enough",
    subtitle: "Stop waiting for better gear. You already have everything you need.",
    emoji: "📱",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "4 min",
    content: [
      {
        type: "stat",
        value: "4K",
        label: "Video quality your phone already shoots",
        color: "#3B82F6",
      },
      {
        type: "paragraph",
        text: "The camera in your pocket is genuinely better than professional cameras from ten years ago. Modern smartphones shoot 4K video with optical image stabilisation, built-in HDR, and low-light processing that would have cost tens of thousands of dollars a decade ago. The gear is not your bottleneck.",
      },
      {
        type: "paragraph",
        text: "What actually determines whether your video looks good is lighting, framing, and audio — not the camera. A perfectly lit, well-framed phone video will outperform a poorly lit DSLR shot every single time.",
      },
      {
        type: "heading",
        text: "Recommended Gear (Not Required)",
      },
      {
        type: "list",
        items: [
          "📱 Your smartphone — you already have this",
          "🔩 A tripod ($20–$40) — keeps your shot steady and frees your hands",
          "🎙️ A clip-on lavalier mic ($15–$30) — the single best upgrade for audio",
        ],
      },
      {
        type: "warning",
        text: "Avoid the \"I'll start when I have better gear\" trap. Your first 50 videos are practice. The best time to start is now.",
      },
      {
        type: "visual",
        label: "Gear Comparison",
        description: "Phone vs DSLR output side-by-side — same lighting, same framing. Spot the difference.",
        icon: "📊",
      },
      {
        type: "heading",
        text: "Step 1: Set Your iPhone to 4K",
      },
      {
        type: "paragraph",
        text: "By default, iPhones often ship with camera settings that are NOT at 4K. You need to change this manually — it takes 30 seconds and you only have to do it once.",
      },
      {
        type: "list",
        items: [
          "1️⃣  Open the Settings app on your iPhone",
          "2️⃣  Scroll down and tap Camera",
          "3️⃣  Tap Record Video",
          "4️⃣  Select 4K at 30 fps (or 4K at 60 fps for smoother motion — see FPS guide below)",
          "5️⃣  While you are here, also tap Record Slo-mo and set it to 1080p at 240 fps for slow-motion clips",
          "✅  Done — your iPhone will now shoot 4K every time you open the camera",
        ],
      },
      {
        type: "tip",
        icon: "💡",
        text: "On newer iPhones (15 Pro and later) you can also enable Apple ProRes or Action Mode. For social media, standard 4K 30fps is more than enough — ProRes creates massive file sizes that are harder to edit and upload.",
      },
      {
        type: "heading",
        text: "Step 1: Set Your Android to 4K",
      },
      {
        type: "paragraph",
        text: "Android steps vary slightly by manufacturer (Samsung, Google Pixel, OnePlus, etc.) but the process is the same on all of them.",
      },
      {
        type: "list",
        items: [
          "1️⃣  Open the Camera app",
          "2️⃣  Look for a resolution or quality icon — usually in the top corner of the viewfinder (looks like a ratio like 16:9 or a number like HD/FHD/4K)",
          "3️⃣  Tap it and select 4K UHD (or UHD 3840x2160)",
          "4️⃣  Samsung users: tap the gear/settings icon inside the Camera app → Video size → select 4K",
          "5️⃣  Google Pixel users: tap the settings gear inside Camera → Video quality → 4K",
          "✅  Some budget Android phones max out at 1080p — that is still perfectly fine for social media",
        ],
      },
      {
        type: "warning",
        text: "4K video files are large. Make sure you have enough storage before a long filming session, or transfer files to your computer regularly. A 10-minute 4K video can be 3-6 GB depending on your phone.",
      },
      {
        type: "heading",
        text: "Understanding FPS (Frames Per Second)",
      },
      {
        type: "paragraph",
        text: "FPS controls how smooth your video looks and whether it has that cinematic feel or a hyper-real look. Choosing the right FPS for the type of content you are making makes a noticeable difference.",
      },
      {
        type: "stat",
        value: "30fps",
        label: "The standard for most social media content — natural, clean, and widely supported",
        color: "#3B82F6",
      },
      {
        type: "list",
        items: [
          "🎙️ Talking-head / educational content → 30fps — looks natural and is the platform standard",
          "🏋️ Exercise demos and workout clips → 30fps or 60fps — 60fps makes fast movement look smoother",
          "⚡ High-energy montages and action shots → 60fps — reduces motion blur on fast movement",
          "🎬 Cinematic / lifestyle content → 24fps — gives a film-like quality, slightly more dramatic feel",
          "🐢 Slow-motion highlights → film at 120fps or 240fps, then slow it down in editing to 30fps",
        ],
      },
      {
        type: "tip",
        icon: "📐",
        text: "When in doubt, shoot everything at 4K 30fps. It covers 95% of social media use cases, edits cleanly, and uploads without issues on Instagram, TikTok, and YouTube Shorts. You can always slow down 30fps footage slightly in editing if needed.",
      },
      {
        type: "visual",
        label: "FPS Cheat Sheet",
        description: "24fps = cinematic/film look | 30fps = natural/standard (best for most content) | 60fps = smooth motion (great for workouts) | 120-240fps = slow-motion source footage",
        icon: "🎞️",
      },
    ],
  },

  // ─── LESSON 2 ───────────────────────────────────────────────
  {
    id: "lesson-2",
    type: "lesson",
    title: "Setting Up Your Shot",
    subtitle: "Framing makes or breaks a video before you say a word.",
    emoji: "🎬",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "5 min",
    content: [
      {
        type: "paragraph",
        text: "A well-framed shot signals professionalism instantly. You don't need a film degree — just a few simple rules applied consistently.",
      },
      {
        type: "heading",
        text: "The Essential Rules",
      },
      {
        type: "list",
        items: [
          "📐 Always shoot vertical (9:16) — this is the native format for Reels and TikTok",
          "👁️ Rule of thirds: position your eyes on the upper third of the frame",
          "📏 Distance: arm's length for talking-head; wider for exercise demos",
          "🪟 Lighting: face a window or ring light — never shoot with bright light behind you",
          "📷 Eye level: camera at eye level or slightly above — never below",
          "🧹 Background: clean, uncluttered, or intentionally gym-branded",
        ],
      },
      {
        type: "tip",
        icon: "💡",
        text: "Tape a small piece of paper to your wall at eye level as a camera height guide. Consistency across videos builds a recognisable visual brand.",
      },
      {
        type: "visual",
        label: "Shot Framing Diagram",
        description: "Rule of thirds grid overlay on a 9:16 frame. Good vs bad eye-line examples.",
        icon: "🖼️",
      },
      {
        type: "visual",
        label: "Lighting Setup Diagram",
        description: "Window light vs ring light placement. The 'never do this' backlit example.",
        icon: "💡",
      },
      {
        type: "heading",
        text: "Lighting on a Budget — Especially in a Gym",
      },
      {
        type: "paragraph",
        text: "Gyms are notoriously hard to light well. Most commercial gyms use overhead fluorescent or LED strip lighting that creates harsh shadows, unflattering skin tones, and a flat, institutional look. Garage gyms and CrossFit-style boxes are often even darker — high ceilings, limited windows, and exposed industrial lighting that looks great for training but terrible on camera.",
      },
      {
        type: "list",
        items: [
          "☀️  Natural light is always your best option — position yourself facing a window or open garage door",
          "💡  A single LED panel light ($30–$80) pointed at your face from a 45-degree angle transforms any dark gym",
          "🔆  Ring lights work but create an obvious circular reflection in eyes — a softbox or panel looks more natural",
          "🏋️  For exercise demos, use two lights: one on each side at 45 degrees to eliminate harsh shadows on moving bodies",
          "🚫  Never shoot with overhead gym lighting as your only source — it creates raccoon-eye shadows and looks unflattering",
          "📱  Use your phone's exposure lock: tap and hold on your face in the camera app to lock focus and exposure before recording",
        ],
      },
      {
        type: "tip",
        icon: "🏗️",
        text: "CrossFit box / garage gym tip: Open the garage door and face outward — the diffused outdoor light floods in and acts as a giant natural softbox. This is completely free and often looks better than any artificial lighting setup.",
      },
      {
        type: "tip",
        icon: "🌙",
        text: "Filming at night or in a windowless space? A $40 bi-colour LED panel (adjustable from warm to cool white) is the single best investment for gym content creators. Set it to 5500K (daylight) for a clean, natural look. Mount it on a light stand at eye level, slightly to one side.",
      },
      {
        type: "warning",
        text: "Mixed lighting is the enemy — if you have a warm overhead light AND a cool window light in the same shot, your footage will have an uneven colour cast that is very hard to fix in editing. Turn off overhead lights and use one consistent source.",
      },
      {
        type: "visual",
        label: "Gym Lighting Setup Diagram",
        description: "Three setups: (1) Facing garage door — free, best option. (2) LED panel at 45 degrees — indoor solution. (3) What NOT to do — overhead only, harsh shadows.",
        icon: "🏗️",
      },
    ],
  },

  // ─── LESSON 3 ───────────────────────────────────────────────
  {
    id: "lesson-3",
    type: "lesson",
    title: "The Danger Zone",
    subtitle: "The edges of your screen are covered by platform UI. Keep critical content clear.",
    emoji: "⚠️",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "3 min",
    content: [
      {
        type: "paragraph",
        text: "On Instagram Reels and TikTok, the outer edges of your video are overlaid with platform controls — like buttons, share icons, your profile handle, and caption text. Anything you put in those zones will be hidden or partially obscured when viewers watch your content.",
      },
      {
        type: "stat",
        value: "~20%",
        label: "Of screen edges covered by platform UI on Reels & TikTok",
        color: "#EF4444",
      },
      {
        type: "heading",
        text: "Use the Edits App",
      },
      {
        type: "paragraph",
        text: "The Edits app by Meta (free on iOS and Android) shows you the exact safe zone overlay before you post. You can see precisely where the danger zones are and adjust your framing accordingly. This is the easiest way to make sure your face, on-screen text, and key visuals are always visible.",
      },
      {
        type: "tip",
        icon: "✅",
        text: "Rule of thumb: keep all faces, text, and key visuals within the centre 80% of the frame. When in doubt, zoom out slightly.",
      },
      {
        type: "warning",
        text: "This applies to any text you add in editing too — captions, callouts, and graphics all need to stay inside the safe zone.",
      },
      {
        type: "visual",
        label: "Safe Zone Overlay Diagram",
        description: "9:16 frame with danger zones highlighted in red. Safe zone shown in green.",
        icon: "📐",
      },
    ],
  },

  // ─── QUIZ 1 ───────────────────────────────────────────────
  {
    id: "quiz-1",
    type: "quiz",
    title: "Quiz: Gear, Framing & Safe Zones",
    emoji: "🧠",
    questions: [
      {
        question: "What is the correct aspect ratio for Instagram Reels and TikTok?",
        options: ["16:9 (landscape)", "9:16 (portrait)", "1:1 (square)", "4:3"],
        correctIndex: 1,
        explanation: "Reels and TikTok are designed for vertical viewing. Always shoot in 9:16 (portrait) orientation — it fills the full screen on mobile.",
      },
      {
        question: "Which free Meta app shows you the safe zone overlay for Reels?",
        options: ["Instagram", "Facebook", "Edits", "Threads"],
        correctIndex: 2,
        explanation: "The Edits app by Meta is a free video editing tool that shows you exactly where the danger zones are on your Reel so you can keep critical content visible.",
      },
      {
        question: "What is the single most important factor for good-looking video — more than camera quality?",
        options: ["Editing software", "Lighting", "Camera resolution", "Background music"],
        correctIndex: 1,
        explanation: "Lighting is everything. A well-lit phone video will always look better than a poorly lit DSLR shot. Good lighting is free — just face a window.",
      },
    ],
  },

  // ─── LESSON 4 ───────────────────────────────────────────────
  {
    id: "lesson-4",
    type: "lesson",
    title: "The First 3 Seconds & The Millennial Pause",
    subtitle: "You have 3 seconds to earn the next 30. Don't waste them.",
    emoji: "⏱️",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "5 min",
    content: [
      {
        type: "stat",
        value: "3 sec",
        label: "The window to hook your viewer before they scroll",
        color: "#F59E0B",
      },
      {
        type: "paragraph",
        text: "The algorithm judges your video by how many people watch past the 3-second mark. If viewers scroll away immediately, the platform stops distributing your content. Your hook must be both visual and verbal — show something interesting AND say something compelling from the very first frame.",
      },
      {
        type: "heading",
        text: "Hook Formulas That Work",
      },
      {
        type: "list",
        items: [
          '"Stop doing [X] at the gym"',
          '"Here\'s why your [result] isn\'t working"',
          '"Watch this before your next workout"',
          '"The mistake 90% of gym-goers make"',
          '"I wish someone told me this when I started"',
        ],
      },
      {
        type: "heading",
        text: "The Millennial Pause",
      },
      {
        type: "paragraph",
        text: "The Millennial Pause is the awkward 1–2 second silence at the start of a video before you begin speaking — the moment where you hit record, look at the camera, and then start talking. It kills your hook before it even begins.",
      },
      {
        type: "list",
        items: [
          "Fix 1: Start talking BEFORE you hit record, then trim the beginning in editing",
          "Fix 2: Use a countdown cue (3-2-1) and start mid-sentence on 'action'",
          "Fix 3: Start with a physical action (writing on a whiteboard, demonstrating a move) so there's visual momentum from frame one",
        ],
      },
      {
        type: "tip",
        icon: "✂️",
        text: "Edit out all dead air at the start and end of every clip. Every second of silence is a second someone might scroll away.",
      },
      {
        type: "visual",
        label: "Hook Timeline Diagram",
        description: "Video timeline showing 'dead zone' (first 0–2s with no hook) vs a strong open that starts mid-action.",
        icon: "📊",
      },
      {
        type: "heading",
        text: "Recommended Editing Apps",
      },
      {
        type: "paragraph",
        text: "You do not need desktop software to edit great social media content. These three free apps cover everything you need — trimming, captions, effects, and posting — entirely from your phone.",
      },
      {
        type: "list",
        items: [
          "CapCut (free, iOS & Android) — the most powerful free mobile editor. Trimming, transitions, text, auto-captions, noise reduction, speed ramping, and AI tools. Used by most professional short-form creators.",
          "Edits by Meta (free, iOS & Android) — built specifically for Instagram Reels. Shows the safe zone overlay, has a built-in teleprompter, and lets you post directly to Instagram. Best for beginners.",
          "Captions App (free tier, iOS & Android) — AI-powered auto-captions with animated styles. If you want captions that look polished and on-brand, this is the fastest way to get there.",
        ],
      },
      {
        type: "tip",
        icon: "🏆",
        text: "Start with CapCut. It has the best balance of power and ease of use, and its auto-caption feature is fast and accurate. Once you are comfortable, add the Captions App for more stylised subtitle options.",
      },
      {
        type: "visual",
        label: "App Comparison",
        description: "CapCut: best overall power. Edits by Meta: best for Instagram workflow + safe zone preview. Captions App: best for styled auto-captions.",
        icon: "📲",
      },
    ],
  },

  // ─── LESSON 5 ───────────────────────────────────────────────
  {
    id: "lesson-5",
    type: "lesson",
    title: "Getting Good Audio",
    subtitle: "People will forgive grainy footage. They won't forgive bad sound.",
    emoji: "🎙️",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "4 min",
    content: [
      {
        type: "paragraph",
        text: "Audio is the most underrated element of video content. Viewers will watch a slightly blurry video if the audio is clear and engaging — but they will immediately scroll away from a video with echo, wind noise, or muffled sound, no matter how good the visuals are.",
      },
      {
        type: "heading",
        text: "Quick Wins for Better Audio",
      },
      {
        type: "list",
        items: [
          "🎙️ Use a clip-on lavalier mic ($15–$30) — the single best upgrade you can make",
          "🚪 Record in a small, soft room — clothes in a wardrobe absorb echo brilliantly",
          "🌬️ Avoid filming near HVAC vents, fans, or open windows with traffic",
          "📊 Check audio levels before recording — speak at normal volume and watch the meter",
          "🔇 Use noise reduction in editing — CapCut and Edits both have this built in for free",
        ],
      },
      {
        type: "tip",
        icon: "👕",
        text: "Can't find a quiet room? Stand inside a wardrobe surrounded by hanging clothes. It sounds ridiculous but it works — the fabric absorbs echo and background noise almost completely.",
      },
      {
        type: "warning",
        text: "Always do a 10-second audio test before filming a full video. Play it back with headphones to catch issues before you've recorded 20 minutes of unusable footage.",
      },
      {
        type: "visual",
        label: "Mic Placement Diagram",
        description: "Clip-on mic placement on shirt collar. Distance from mouth vs audio quality chart.",
        icon: "🎙️",
      },
      {
        type: "heading",
        text: "Reducing Echo in a Gym Setting",
      },
      {
        type: "paragraph",
        text: "Garage gyms and CrossFit-style boxes are acoustic nightmares. High ceilings, concrete floors, rubber mats, metal equipment, and bare walls create a reverb chamber that makes even a good microphone sound like you are recording in a cave. Here is how to fight it.",
      },
      {
        type: "list",
        items: [
          "A clip-on lavalier mic is your most powerful weapon — it captures your voice before the room echo reaches it",
          "Position yourself in a corner — two walls behind you break up the echo pattern significantly",
          "Hang gym towels, yoga mats, or foam padding on the wall behind you — soft surfaces absorb sound",
          "Film in a smaller side room, office, or storage area rather than the main gym floor when possible",
          "Close the garage door if you have one — open doors let in traffic noise and increase the acoustic space",
          "Use noise reduction in CapCut or Edits after recording — it removes a surprising amount of background reverb",
          "Get as close to your mic as possible — the closer the source, the lower the room-to-voice ratio",
        ],
      },
      {
        type: "tip",
        icon: "🏗️",
        text: "The single biggest echo fix for a large gym: drape a horse stall mat or thick rubber mat vertically on the wall directly behind you. It looks intentional as a background prop AND kills the echo. Bonus — it is already in most gyms.",
      },
      {
        type: "tip",
        icon: "🎙️",
        text: "If you are filming exercise demos where you cannot wear a clip-on mic, use a directional (shotgun) microphone mounted on a small tripod pointed at you from just off-camera. A basic shotgun mic ($40–$60) rejects side and rear noise, which is exactly what you need in a reverberant gym.",
      },
      {
        type: "warning",
        text: "The phone built-in microphone is omnidirectional — it picks up everything equally in all directions. In a large gym this means equal parts your voice AND the room echo. This is the main reason a $20 clip-on mic makes such a dramatic difference in gym environments.",
      },
      {
        type: "visual",
        label: "Gym Echo Reduction Setup",
        description: "Top-down diagram: corner positioning, soft surface placement behind speaker, mic close to mouth. Shows how sound reflections are broken up.",
        icon: "🔊",
      },
    ],
  },

  // ─── LESSON 6 ───────────────────────────────────────────────
  {
    id: "lesson-6",
    type: "lesson",
    title: "How Long Should Your Videos Be?",
    subtitle: "Long enough to deliver value. Short enough to hold attention.",
    emoji: "⏰",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "4 min",
    content: [
      {
        type: "paragraph",
        text: "Video length is one of the most common questions gym owners ask — and the answer is: it depends on what you're saying. The goal is never to hit a specific length. The goal is to deliver your message in the shortest time possible without cutting anything important.",
      },
      {
        type: "heading",
        text: "Length Guidelines by Content Type",
      },
      {
        type: "list",
        items: [
          "⚡ Pure hook / entertainment content: 15–30 seconds",
          "📚 Educational / how-to content: 45–90 seconds",
          "🎙️ Story or behind-the-scenes: 60–120 seconds",
          "❌ Avoid: padding to hit a longer length — every dead second loses viewers",
        ],
      },
      {
        type: "stat",
        value: "Watch %",
        label: "Completion rate matters more than total watch time",
        color: "#10B981",
      },
      {
        type: "paragraph",
        text: "A 20-second video watched all the way through signals to the algorithm that your content is engaging. A 2-minute video watched halfway through sends a weaker signal. Shorter, tighter videos with high completion rates will always outperform longer, padded ones.",
      },
      {
        type: "heading",
        text: "Trial Reels on Instagram",
      },
      {
        type: "paragraph",
        text: "Instagram's Trial Reels feature lets you post a Reel that is shown to non-followers first — before your existing audience sees it. If it performs well with new viewers, Instagram then promotes it to your followers too. If it doesn't perform, it won't negatively affect your existing engagement. Use Trial Reels for experimental content you're not confident about — it's a risk-free way to test new formats.",
      },
      {
        type: "tip",
        icon: "🧪",
        text: "Use Trial Reels whenever you're trying a new format, topic, or hook style. Let the algorithm test it on cold audiences before committing it to your main feed.",
      },
      {
        type: "visual",
        label: "Retention Curve Graphic",
        description: "Viewer drop-off curve showing the critical points at 3s, 15s, and 30s.",
        icon: "📉",
      },
      {
        type: "heading",
        text: "Check Your Metrics After Every Post",
      },
      {
        type: "paragraph",
        text: "Every Reel you post is an experiment. The only way to know if it worked is to check your Instagram Insights. Look at your Reel 24–48 hours after posting and ask: did it reach new accounts? What was the average watch time? Did people save or share it? These numbers tell you what to repeat and what to change.",
      },
      {
        type: "list",
        items: [
          "Average watch time — the most important metric for Reels (confirmed by Adam Mosseri, Head of Instagram)",
          "Accounts reached — how many unique people saw it, especially non-followers",
          "Saves — the strongest signal that content was genuinely useful",
          "Shares — the strongest signal for reach growth",
          "Profile visits — did the Reel make people curious enough to check you out?",
        ],
      },
      {
        type: "tip",
        icon: "📊",
        text: "To see Reel insights: open the Reel on your profile → tap the three-dot menu or swipe up → tap View Insights. You can view data for any post within the past 90 days.",
      },
    ],
  },

  // ─── QUIZ 2 ───────────────────────────────────────────────
  {
    id: "quiz-2",
    type: "quiz",
    title: "Quiz: Hooks, Audio & Length",
    emoji: "🧠",
    questions: [
      {
        question: "What is the 'Millennial Pause'?",
        options: [
          "A trending audio clip",
          "The awkward silence at the start of a video before speaking",
          "A type of video transition",
          "A pause mid-sentence for dramatic effect",
        ],
        correctIndex: 1,
        explanation: "The Millennial Pause is the 1–2 second gap at the start of a video where the creator looks at the camera before speaking. It kills your hook — fix it by starting mid-sentence or trimming the beginning in editing.",
      },
      {
        question: "What is the recommended video length for educational gym content on Reels?",
        options: ["5–10 seconds", "2–3 minutes", "45–90 seconds", "Over 3 minutes"],
        correctIndex: 2,
        explanation: "Educational content performs best at 45–90 seconds on Reels. This is long enough to deliver real value but short enough to maintain viewer attention and completion rates.",
      },
      {
        question: "What does Instagram's 'Trial Reels' feature do?",
        options: [
          "Lets you schedule posts in advance",
          "Shows your Reel to non-followers first to test performance",
          "Adds automatic captions to your video",
          "Boosts posts with paid reach",
        ],
        correctIndex: 1,
        explanation: "Trial Reels shows your content to non-followers first. If it performs well, Instagram promotes it to your existing audience. If it flops, your current followers never see it — zero risk to your existing engagement.",
      },
    ],
  },

  // ─── LESSON 7 ───────────────────────────────────────────────
  {
    id: "lesson-7",
    type: "lesson",
    title: "The Goal of Reels & Why Education Wins",
    subtitle: "Reels bring in new eyes. Education builds trust. Trust sells memberships.",
    emoji: "🎯",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "5 min",
    content: [
      {
        type: "paragraph",
        text: "Reels are a discovery tool — they are shown to people who don't follow you yet. Unlike Stories (for existing followers) or feed posts (for engagement), Reels are specifically designed by the platform to reach new audiences. Every Reel you post is a chance to introduce yourself to someone who has never heard of your gym.",
      },
      {
        type: "visual",
        label: "Discovery Funnel",
        description: "Reel → Profile Visit → Follow → DM → Paid Member. The path from stranger to member.",
        icon: "🔄",
      },
      {
        type: "heading",
        text: "Why Educational Content Outperforms Everything Else",
      },
      {
        type: "list",
        items: [
          "🏆 Positions you as the expert — not just someone who works out",
          "🎁 Provides value before asking for anything in return",
          "📤 Highly shareable — people send 'how to' content to friends",
          "🎯 Attracts pre-qualified leads who are already interested in fitness",
          "🔁 Evergreen — a good form tip video works for years, not days",
        ],
      },
      {
        type: "paragraph",
        text: "The goal is not to go viral. The goal is to reach the right 500 people in your city. A video that gets 2,000 views from local fitness enthusiasts is worth infinitely more than a video that gets 200,000 views from people who will never visit your gym.",
      },
      {
        type: "tip",
        icon: "💡",
        text: "Content ideas that work for gym owners: form tips, nutrition myths busted, 'why you're not seeing results', workout modifications, gym etiquette, member transformation stories (with permission), day-in-the-life of a coach.",
      },
      {
        type: "stat",
        value: "Local",
        label: "500 local views beats 50,000 global views for a gym owner",
        color: "#3B82F6",
      },
    ],
  },

  // ─── LESSON 7c — AUTHENTICITY ───────────────────────────────────────────────
  {
    id: "lesson-authenticity",
    type: "lesson",
    title: "Authenticity: Your Biggest Competitive Advantage",
    subtitle: "The internet is drowning in AI and bots. A real human face is rarer than ever.",
    emoji: "🙋",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "5 min",
    content: [
      {
        type: "paragraph",
        text: "We are in a moment where the internet is being flooded with AI-generated content, bot accounts, and faceless brands. Audiences are exhausted by it — and they are getting very good at detecting it. In this environment, showing up as a real, consistent, genuine human being is not just a nice-to-have. It is one of the most powerful things a small business owner can do.",
      },
      {
        type: "stat",
        value: "Real > Perfect",
        label: "Authentic, imperfect content from a real person outperforms polished AI content right now",
        color: "#F59E0B",
      },
      {
        type: "heading",
        text: "Why You Need a Face on Camera",
      },
      {
        type: "paragraph",
        text: "It is very hard to grow a brand without a consistent human face. People follow people — not logos. When someone sees the same coach or gym owner on camera week after week, they start to feel like they know that person. That familiarity is what drives DMs, profile visits, and eventually memberships. A faceless gym account posting workout clips will always struggle to build the same connection.",
      },
      {
        type: "list",
        items: [
          "People buy from people they trust — and trust is built through repeated, consistent face-to-camera presence",
          "A recognisable face makes your content instantly identifiable in a crowded feed",
          "Viewers who feel like they know you are far more likely to comment, DM, and show up to your gym",
          "Algorithms on both Instagram and TikTok currently favour content that feels personal and human over polished brand content",
          "You do not need to be charismatic or naturally confident on camera — you just need to be consistent and genuine",
        ],
      },
      {
        type: "tip",
        icon: "🎯",
        text: "If you are camera-shy: start with voiceover videos where you are not on screen. Then progress to showing your hands, then your face briefly, then full face-to-camera. Most people who are uncomfortable on camera get comfortable after 20–30 videos. The discomfort is temporary. The audience you build is permanent.",
      },
      {
        type: "heading",
        text: "The Algorithm Rewards Authenticity — But It Is Not Easy",
      },
      {
        type: "paragraph",
        text: "Here is the good news: the current algorithm preference for low-production, real, authentic content is a genuine advantage for small business owners. You do not need a $5,000 camera, a professional lighting rig, or a video production team. In fact, content that looks too polished can actually perform worse because it feels like an ad.",
      },
      {
        type: "paragraph",
        text: "Here is the honest truth: this does not mean it is easy. Authentic content is deceptively hard to create well. Being natural and genuine on camera while also being engaging, clear, and on-message takes real practice. Most people's first 20 videos are awkward. That is completely normal and completely necessary.",
      },
      {
        type: "warning",
        text: "Do not confuse 'low production' with 'low effort'. The best authentic content looks effortless because the creator has put in the work to get comfortable on camera, plan what they want to say, and understand their audience. Low production value + low effort = content that gets ignored.",
      },
      {
        type: "heading",
        text: "Tips for Getting Good Authentic Content",
      },
      {
        type: "list",
        items: [
          "Talk to one person, not a crowd — imagine you are talking to one specific person (a potential member) and speak directly to them. This immediately makes your delivery feel more personal.",
          "Use your real voice and personality — do not try to sound like a 'content creator'. The gym owners who grow fastest are the ones who sound exactly like themselves.",
          "Share real moments — a bad training day, a member breakthrough, a behind-the-scenes look at how the gym runs. Real moments build real connection.",
          "Do not over-script — bullet points are fine, but reading from a script makes you sound robotic. Know your 3 key points and talk through them naturally.",
          "Embrace imperfection — a stumble, a laugh, a moment of genuine uncertainty is more relatable than a flawless delivery. Viewers connect with humans, not robots.",
          "Film in your actual gym environment — the background matters. Your gym floor, your equipment, your members in the background all signal authenticity and build familiarity.",
          "Respond to comments in video — use the 'Reply to comment with video' feature on Instagram and TikTok. It shows real people that a real person is listening.",
          "Show your face consistently — even if the video is about a workout or a tip, starting and ending with your face builds the personal connection that drives follows.",
        ],
      },
      {
        type: "tip",
        icon: "🔁",
        text: "The 'one-take rule': try filming your first take and posting it, even if it is not perfect. Audiences respond to the energy of a first take — it has a spontaneity and presence that tenth takes often lose. You can always trim the start and end in editing.",
      },
      {
        type: "tip",
        icon: "🤝",
        text: "Consistency of person matters as much as consistency of posting. If multiple people post from the same account, introduce them properly and let each one build their own relationship with the audience. Switching faces without context is confusing and breaks the trust loop.",
      },
      {
        type: "visual",
        label: "Authenticity Spectrum",
        description: "Left: Polished AI/brand content — low trust, high production. Right: Real face-to-camera, gym environment, genuine personality — high trust, low production. The sweet spot is: real person + real environment + clear message.",
        icon: "🎭",
      },
      {
        type: "heading",
        text: "Hack: Use ChatGPT Voice Mode as Your Interviewer",
      },
      {
        type: "paragraph",
        text: "One of the best-kept secrets for filming authentic, natural-looking content is to use ChatGPT's voice mode as a live interviewer while you film. Instead of staring straight into the camera and reciting a script, you place your phone slightly off to the side, look toward it (not directly into the lens), and have a real conversation with the AI. The result looks and feels like an interview — relaxed, natural, and completely authentic.",
      },
      {
        type: "tip",
        icon: "💡",
        text: "Why This Works: Looking slightly off-camera is a well-known filmmaking technique that signals 'interview' to viewers. It removes the pressure of staring down a lens and lets your natural personality come through. The AI asks you questions — you just answer honestly.",
      },
      {
        type: "heading",
        text: "How to Set It Up",
      },
      {
        type: "paragraph",
        text: "1. Open ChatGPT on your phone and start a voice mode conversation. 2. Set up your filming device (second phone, camera, or tablet) slightly to the side — not directly in front of you. 3. Look toward the ChatGPT phone as you talk, not at the camera. 4. Give ChatGPT a prompt to get it started. 5. Hit record on your filming device and let the conversation flow.",
      },
      {
        type: "heading",
        text: "Prompt Ideas to Get Started",
      },
      {
        type: "paragraph",
        text: "Give ChatGPT one of these prompts before you start filming:",
      },
      {
        type: "tip",
        icon: "💡",
        text: "Prompt: Education Content: Ask me questions about common mistakes gym beginners make. Keep your questions short and conversational. One question at a time. Wait for my full answer before asking the next one.",
      },
      {
        type: "tip",
        icon: "💡",
        text: "Prompt: Story Content: Interview me about why I started my gym. Ask me about the challenges I faced, what motivates me, and what I want my members to feel when they walk through the door. Keep it conversational.",
      },
      {
        type: "tip",
        icon: "💡",
        text: "Prompt: FAQ Content: Ask me the most common questions people have before joining a gym for the first time. One question at a time. Keep your questions short.",
      },
      {
        type: "heading",
        text: "Filming Tips for the Interview Look",
      },
      {
        type: "paragraph",
        text: "Give yourself speaking room — frame the shot so there is slightly more space in front of your face than behind it. This is called 'looking room' and it makes the composition feel intentional and professional. Your eyes should be roughly in the upper third of the frame.",
      },
      {
        type: "tip",
        icon: "💡",
        text: "The Off-Camera Eye Line: Position the ChatGPT phone about 30-45 degrees to the side of your filming camera. The further off-axis, the more it looks like a traditional interview. Even a slight offset (15-20 degrees) makes a noticeable difference compared to staring straight down the lens.",
      },
      {
        type: "visual",
        label: "Watch the Hack in Action",
        description: "See exactly how this technique works in a real filming setup. Watch the reel: instagram.com/reel/DYMyTvjR_oo",
        icon: "▶️",
      },
    ],
  },
  // ─── LESSON 7b — INSTAGRAM INSIGHTS ───────────────────────────────────────────────
  {
    id: "lesson-insights",
    type: "lesson",
    title: "Reading Your Instagram Insights",
    subtitle: "Metrics separate a strategy from a guess. This is how you stop wasting time.",
    emoji: "📊",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "6 min",
    content: [
      {
        type: "paragraph",
        text: "Posting without checking your metrics is like running a business without looking at your sales numbers. You might be working hard — but you have no idea what's actually working. Instagram Insights gives you the feedback loop that turns random posting into a real content strategy.",
      },
      {
        type: "stat",
        value: "3 months",
        label: "The minimum time to understand what content sticks on a new account — stick with it",
        color: "#3B82F6",
      },
      {
        type: "paragraph",
        text: "This is trial and error. On a brand new account, it can take 3 months or more before you start to see clear patterns in what resonates with your audience. That is completely normal. The gym owners who win at social media are not the ones who got lucky on their first video — they are the ones who kept posting, kept checking their numbers, and kept adjusting. The metrics are your compass.",
      },
      {
        type: "heading",
        text: "Step 1: Switch to a Professional Account",
      },
      {
        type: "paragraph",
        text: "Instagram offers three account types, and the one you choose determines what data you can see.",
      },
      {
        type: "list",
        items: [
          "Personal Account — basic insights only (views, interactions, new followers). Available to all public accounts. Good for getting started but limited.",
          "Creator Account — full Insights dashboard including follower growth trends, audience demographics (age, gender, location), best posting times, and per-Reel metrics. Designed for content creators. FREE.",
          "Business Account — same full Insights as Creator, plus access to Instagram ads, contact buttons (call, email, directions), and third-party scheduling tools. FREE. Best choice for gym owners.",
        ],
      },
      {
        type: "tip",
        icon: "🏋️",
        text: "For gym owners: switch to a Business account. You get all the same Insights as a Creator account PLUS the ability to add your address, phone number, and a booking link directly on your profile. It takes 2 minutes and costs nothing.",
      },
      {
        type: "warning",
        text: "Your account must be PUBLIC to access Insights. If your account is private, you will not see any metrics data. Switch to public in Settings → Account Privacy.",
      },
      {
        type: "heading",
        text: "How to Switch to a Business or Creator Account",
      },
      {
        type: "list",
        items: [
          "1️⃣  Open Instagram → tap your profile icon (bottom right)",
          "2️⃣  Tap the three lines (hamburger menu) in the top right → Settings and privacy",
          "3️⃣  Tap Account type and tools → Switch to professional account",
          "4️⃣  Choose Creator or Business → follow the setup steps",
          "5️⃣  Done — Insights will now be available from your profile dashboard",
        ],
      },
      {
        type: "heading",
        text: "How to View Your Instagram Insights",
      },
      {
        type: "list",
        items: [
          "Account-level Insights: Go to your profile → tap the Insights button (or tap the three lines → Insights). See overall reach, follower growth, and content performance over the last 7, 14, 30, or 90 days.",
          "Individual Reel Insights: Open any Reel on your profile → tap the three-dot menu → View Insights. Or swipe up on the Reel.",
          "Individual Post Insights: Tap any post → tap View Insights below the image.",
          "Audience Demographics: Available when you have 100+ followers and have reached 100+ accounts in your selected timeframe.",
        ],
      },
      {
        type: "tip",
        icon: "📱",
        text: "Official resource: Instagram's full Insights guide is available at help.instagram.com — search 'About Instagram Insights' for the official metric definitions. The direct link is: help.instagram.com/788388387972460",
      },
      {
        type: "heading",
        text: "The Metrics That Actually Matter for Gym Owners",
      },
      {
        type: "paragraph",
        text: "Instagram shows you a lot of numbers. Most of them are noise. Here are the ones that actually tell you whether your content strategy is working.",
      },
      {
        type: "list",
        items: [
          "Average Watch Time (Reels) — THE most important metric. Confirmed by Adam Mosseri, Head of Instagram. If people watch your Reel all the way through, the algorithm distributes it to more people. Aim for 50%+ completion rate.",
          "Accounts Reached (non-followers) — tells you how many new people your content is reaching. This is your growth engine. If this number is low, your hooks need work.",
          "Saves — the strongest signal that your content was genuinely useful. People save content they want to come back to. High saves = educational, valuable content.",
          "Shares — the strongest signal for organic reach growth. If people are sharing your content, the algorithm amplifies it significantly.",
          "Profile Visits — did your Reel make people curious enough to check out your gym? This is the bridge between content and conversion.",
          "Follower Growth — are you converting viewers into followers? Track this weekly, not daily.",
          "Best Time to Post — under Audience in Insights, you can see when your followers are most active. Post 30–60 minutes before peak times.",
        ],
      },
      {
        type: "stat",
        value: "Watch %",
        label: "Completion rate is the single metric most correlated with algorithmic reach on Reels",
        color: "#10B981",
      },
      {
        type: "heading",
        text: "The 90-Day Feedback Loop",
      },
      {
        type: "paragraph",
        text: "Here is the honest truth: if you are starting a new Instagram account for your gym, you should expect the first 3 months to be a learning period. You will post things that get 50 views. You will post things that get 5,000 views. The difference between those two posts is the data you need. Without checking your metrics, you will never know what made the difference — and you will keep making the same mistakes.",
      },
      {
        type: "list",
        items: [
          "Week 1–4: Post consistently, don't obsess over numbers. Build the habit.",
          "Week 4–8: Start comparing your top 3 and bottom 3 performing posts. What's different?",
          "Week 8–12: Double down on what's working. Kill what isn't. Adjust your hooks, topics, or format.",
          "Month 3+: You now have enough data to see real patterns. This is when growth starts to compound.",
        ],
      },
      {
        type: "warning",
        text: "The biggest mistake gym owners make: posting for 6 weeks, seeing slow growth, and quitting. Social media is a long game. The accounts that win are the ones that stayed consistent long enough to learn what works for their specific audience.",
      },
      {
        type: "tip",
        icon: "🗓️",
        text: "Set a weekly 15-minute 'metrics review' in your calendar. Every Monday, open Instagram Insights and look at last week's top performer. Ask: what made this work? Then plan at least one post this week that repeats that formula.",
      },
      {
        type: "visual",
        label: "The Feedback Loop",
        description: "Post → Check Insights (24-48hrs) → Identify what worked → Repeat and iterate → Growth compounds over 90 days.",
        icon: "🔄",
      },
    ],
  },
  // ─── LESSON 8 ───────────────────────────────────────────────
  {
    id: "lesson-8",
    type: "lesson",
    title: "Captions, Translation & Getting Found",
    subtitle: "Captions are not optional. But translation needs a strategy.",
    emoji: "💬",
    videoUrl: "", // TODO: paste your YouTube/Vimeo embed URL here when ready (e.g. "https://www.youtube.com/embed/VIDEOID")
    duration: "4 min",
    content: [
      {
        type: "stat",
        value: "85%",
        label: "Of social media videos are watched without sound",
        color: "#8B5CF6",
      },
      {
        type: "paragraph",
        text: "Captions are not a nice-to-have — they are essential. The majority of social media videos are watched in silence, in public, or with the phone on mute. If your content only works with sound, you're losing most of your potential audience before they even hear you.",
      },
      {
        type: "list",
        items: [
          "✅ Both Instagram and TikTok offer auto-captions — turn them on",
          "✏️ Always review auto-captions for errors before posting",
          "♿ Captions improve accessibility and keep viewers engaged longer",
          "📈 Videos with captions consistently outperform those without",
        ],
      },
      {
        type: "heading",
        text: "Auto-Translation: Turn It Off",
      },
      {
        type: "paragraph",
        text: "Instagram and TikTok can auto-translate your captions into other languages to reach a global audience. For most gym owners, this should be turned OFF. More views from people who will never visit your gym doesn't help your business — it's vanity metrics. You want local views from people who could actually become members.",
      },
      {
        type: "warning",
        text: "Exception: if you sell online coaching, digital programs, or ship products globally, auto-translation can genuinely help. But if your revenue comes from in-person memberships, keep it off.",
      },
      {
        type: "heading",
        text: "Hashtags Are Dead. (Yes, Really.)",
      },
      {
        type: "paragraph",
        text: "That sounds dramatic — but it's true. Social media platforms have fundamentally shifted from hashtag-based discovery to keyword-based discovery. Instagram, TikTok, and YouTube now work more like search engines than tag directories.",
      },
      {
        type: "stat",
        value: "2024",
        label: "Instagram removed the ability to follow hashtags entirely — December 13, 2024",
        color: "#EF4444",
      },
      {
        type: "paragraph",
        text: "Instagram's own head, Adam Mosseri, confirmed it publicly: \"Hashtags are not a way to get more reach.\" In 2021, Instagram started recommending just 3–5 hashtags. By 2024, they removed hashtag following completely. The writing has been on the wall for years.",
      },
      {
        type: "tip",
        icon: "🔍",
        text: "Keywords now live in your captions, your on-screen text, your bio, and your spoken words (which platforms transcribe). Write captions the way a potential member would search — \"CrossFit gym in Austin\" or \"how to get started with weightlifting\" — not \"#fitness #gym #gains\".",
      },
      {
        type: "warning",
        text: "A bad video with great hashtags is still a bad video. Hashtags were never a shortcut for quality content — and they definitely aren't now. Focus on making content people actually want to watch.",
      },
      {
        type: "list",
        items: [
          "✅ Use 3–5 relevant hashtags max — they still help the algorithm categorise your content",
          "🚫 Avoid mega-tags like #fitness (500M+ posts — you will never be found)",
          "📍 Local hashtags still have some value: #[yourcity]gym, #[yourcity]crossfit",
          "💬 Your caption is now your SEO — write naturally, use real words your audience searches",
          "🎙️ Speak keywords out loud in your video — platforms transcribe your audio",
          "📝 On-screen text counts too — the algorithm reads your subtitles",
        ],
      },
      {
        type: "visual",
        label: "Old Way vs. New Way",
        description: "Old: 30 hashtags crammed into caption. New: Natural keyword-rich caption + 3-5 relevant tags. The algorithm reads meaning, not labels.",
        icon: "🔄",
      },
      {
        type: "heading",
        text: "Posting Frequency: Quality Wins Every Time",
      },
      {
        type: "paragraph",
        text: "Consistency matters — but not in the way most gym owners think. The platforms reward accounts that post regularly, but they reward good content even more. Posting every day with mediocre content will actually hurt your account over time as your engagement rate drops.",
      },
      {
        type: "stat",
        value: "3 > 7",
        label: "3 high-quality posts per week beats 7 low-quality posts every time",
        color: "#22C55E",
      },
      {
        type: "list",
        items: [
          "🎯 3–5 feed posts per week is the sweet spot for most gym owners",
          "🚫 Do not post to your feed more than once per day — it splits your own reach",
          "📱 Stories are different — you can post to Stories daily without hurting feed performance",
          "📅 Consistency over time matters more than posting volume in any single week",
          "🗓️ Batch film once a week so you always have content ready — no scrambling",
        ],
      },
      {
        type: "tip",
        icon: "📊",
        text: "83% of marketers say it's better to focus on content quality rather than quantity, even if it means posting less often. Your audience would rather wait two days for something great than see something forgettable every day.",
      },
      {
        type: "visual",
        label: "Feed vs. Stories Frequency",
        description: "Feed: 3–5x per week max, never more than 1x per day. Stories: daily is fine and encouraged — they disappear after 24 hours and don't affect feed algorithm.",
        icon: "📅",
      },
    ],
  },

  // ─── QUIZ 3 ───────────────────────────────────────────────
  {
    id: "quiz-3",
    type: "quiz",
    title: "Quiz: Content Strategy, Captions & Keywords",
    emoji: "🧠",
    questions: [
      {
        question: "What percentage of social media videos are watched without sound?",
        options: ["30%", "55%", "85%", "100%"],
        correctIndex: 2,
        explanation: "85% of social media videos are watched on mute — in public, at work, or with notifications off. Captions ensure your message lands regardless of whether the sound is on.",
      },
      {
        question: "What did Instagram's head Adam Mosseri say about hashtags?",
        options: [
          "Use 30 hashtags for maximum reach",
          "Hashtags are the best way to grow your account",
          "Hashtags are not a way to get more reach",
          "Hashtags are only useful for Stories",
        ],
        correctIndex: 2,
        explanation: "Adam Mosseri confirmed publicly that hashtags don't meaningfully increase reach. Instagram removed hashtag following entirely in December 2024. Keywords in your captions, bio, and on-screen text are now the primary discovery mechanism.",
      },
      {
        question: "Which posting approach will perform better over time?",
        options: [
          "7 posts per week, any quality",
          "1 post per month, perfectly polished",
          "3–5 high-quality posts per week",
          "Post as many times per day as possible",
        ],
        correctIndex: 2,
        explanation: "3–5 quality posts per week is the sweet spot. Never post to your feed more than once per day — it splits your own reach. Stories are different and can be posted daily without affecting feed performance.",
      },
      {
        question: "Why should most gym owners turn OFF auto-translation on their Reels?",
        options: [
          "It makes videos load more slowly",
          "It costs money to enable",
          "Views from non-local audiences don't convert to gym members",
          "It reduces video quality",
        ],
        correctIndex: 2,
        explanation: "If your gym is location-based, views from people in other countries or languages don't translate to memberships. Focus on local reach — quality of audience matters far more than quantity of views.",
      },
    ],
  },
];

export const courseTitle = "Basic Filming For Social Media";
export const courseSubtitle = "You don't need a $5,000 camera. You need a plan.";
export const courseTotalLessons = courseItems.filter((i) => i.type === "lesson").length;
export const courseTotalQuizzes = courseItems.filter((i) => i.type === "quiz").length;
