import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { absoluteAppUrl } from "@/lib/publicPath";
import { useForm, ValidationError } from "@formspree/react";
import {
  aiCourseItems,
  aiCourseTitle,
  aiCourseSubtitle,
  aiCourseTotalLessons,
  aiCourseTotalQuizzes,
  AiLessonItem,
} from "@/data/aiCourseData";

// ─── Cookie helpers ───────────────────────────────────────────
const COOKIE_KEY = "lm_course_email";
// ─── Video Player ─────────────────────────────────────────────
// When videoUrl is empty the player is hidden completely.
// To add a video: open client/src/data/aiCourseData.ts, find the lesson by id,
// and paste your YouTube embed URL into the videoUrl field, e.g.:
//   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
// YouTube embed URLs look like: https://www.youtube.com/embed/VIDEO_ID
// Vimeo embed URLs look like:   https://player.vimeo.com/video/VIDEO_ID
function VideoPlayer({ videoUrl }: { videoUrl?: string }) {
  if (!videoUrl) return null; // hidden until URL is provided
  return (
    <div style={{
      position: "relative",
      width: "100%",
      aspectRatio: "16/9",
      borderRadius: "1rem",
      overflow: "hidden",
      margin: "0 0 2.5rem",
      background: "#0D1117",
    }}>
      <iframe
        src={videoUrl}
        title="Lesson video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}

function getCourseEmail(): string | null {
  const match = document.cookie.match(new RegExp("(?:^|; )" + COOKIE_KEY + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}
function setCourseEmail(email: string) {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `${COOKIE_KEY}=${encodeURIComponent(email)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

// ─── Email Gate ───────────────────────────────────────────────
function EmailGate({ onUnlock }: { onUnlock: (email: string) => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [, navigate] = useLocation();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setCourseEmail(trimmed);
    onUnlock(trimmed);
  };
  return (
    <div style={{ minHeight: "100vh", background: "#0A0E1A", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ maxWidth: "480px", width: "100%", background: "#111827", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "1.5rem", padding: "2.5rem", textAlign: "center", position: "relative" }}>
        {/* Close / back button */}
        <button
          onClick={() => navigate("/")}
          aria-label="Close"
          style={{
            position: "absolute", top: "1rem", right: "1rem",
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%", width: "32px", height: "32px",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#9090B0", fontSize: "1rem", lineHeight: 1,
          }}
        >
          ✕
        </button>
        <div style={{ width: "72px", height: "72px", borderRadius: "1.25rem", background: "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(239,68,68,0.1))", border: "1px solid rgba(245,158,11,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 1.5rem" }}>🤖</div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: "100px", padding: "0.25rem 0.875rem", marginBottom: "1.25rem" }}>
          <span style={{ fontSize: "0.75rem", color: "#10B981", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>FREE COURSE</span>
        </div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.375rem, 5vw, 1.75rem)", color: "#F0F0F5", lineHeight: 1.2, marginBottom: "0.75rem" }}>{aiCourseTitle}</h1>
        <p style={{ color: "#8080A0", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>{aiCourseSubtitle}</p>
        <p style={{ color: "#6060A0", fontSize: "0.875rem", marginBottom: "2rem" }}>{aiCourseTotalLessons} lessons · {aiCourseTotalQuizzes} quizzes · 100% free</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email" value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            placeholder="your@email.com"
            style={{ width: "100%", padding: "0.875rem 1rem", background: "#0A0E1A", border: `1px solid ${error ? "#EF4444" : "rgba(255,255,255,0.1)"}`, borderRadius: "0.75rem", color: "#F0F0F5", fontSize: "1rem", outline: "none", marginBottom: "0.5rem", boxSizing: "border-box", fontFamily: "Outfit, sans-serif" }}
          />
          {error && <p style={{ color: "#EF4444", fontSize: "0.8125rem", marginBottom: "0.75rem", textAlign: "left" }}>{error}</p>}
          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "0.875rem" }}>
            Get Free Access →
          </button>
        </form>
        <p style={{ color: "#4040A0", fontSize: "0.8125rem", marginTop: "1.25rem", lineHeight: 1.6 }}>No spam. No credit card. Just the course — and an occasional tip from the Lift Media team.</p>
      </div>
    </div>
  );
}

// ─── Visual Placeholder ───────────────────────────────────────
function VisualPlaceholder({ label, description, icon }: { label: string; description: string; icon: string }) {
  return (
    <div style={{ background: "#111827", border: "1.5px dashed rgba(245,158,11,0.3)", borderRadius: "1rem", padding: "2rem", textAlign: "center", margin: "1.75rem 0" }}>
      <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{icon}</div>
      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#FCD34D", fontSize: "0.9375rem", marginBottom: "0.375rem" }}>{label}</p>
      <p style={{ color: "#7070A0", fontSize: "0.875rem", lineHeight: 1.6 }}>{description}</p>
    </div>
  );
}

// ─── Lesson Content Renderer ──────────────────────────────────
function LessonContentBlock({ item }: { item: AiLessonItem }) {
  switch (item.type) {
    case "heading":
      return <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1875rem", color: "#0F172A", margin: "2.25rem 0 0.75rem", letterSpacing: "-0.01em" }}>{item.text}</h3>;
    case "paragraph":
      return <p style={{ color: "#374151", fontSize: "0.9375rem", lineHeight: 1.85, marginBottom: "1.1rem" }}>{item.text}</p>;
    case "tip":
      return (
        <div style={{ background: "#111827", borderTop: "1px solid rgba(245,158,11,0.25)", borderRight: "1px solid rgba(245,158,11,0.25)", borderBottom: "1px solid rgba(245,158,11,0.25)", borderLeft: "4px solid #F59E0B", borderRadius: "0 0.75rem 0.75rem 0", padding: "1rem 1.25rem", display: "flex", gap: "0.75rem", margin: "1.5rem 0" }}>
          <span style={{ fontSize: "1.125rem", flexShrink: 0 }}>{item.icon}</span>
          <p style={{ color: "#FCD34D", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>{item.text}</p>
        </div>
      );
    case "warning":
      return (
        <div style={{ background: "#1a0f0f", borderTop: "1px solid rgba(239,68,68,0.25)", borderRight: "1px solid rgba(239,68,68,0.25)", borderBottom: "1px solid rgba(239,68,68,0.25)", borderLeft: "4px solid #EF4444", borderRadius: "0 0.75rem 0.75rem 0", padding: "1rem 1.25rem", display: "flex", gap: "0.75rem", margin: "1.5rem 0" }}>
          <span style={{ fontSize: "1.125rem", flexShrink: 0 }}>⚠️</span>
          <p style={{ color: "#FCA5A5", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>{item.text}</p>
        </div>
      );
    case "list":
      return (
        <ul style={{ listStyle: "none", padding: 0, margin: "0.75rem 0 1.5rem" }}>
          {item.items.map((li, i) => (
            <li key={i} style={{ color: "#374151", fontSize: "0.9375rem", lineHeight: 1.75, padding: "0.5rem 0", borderBottom: "1px solid #F1F5F9", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>{li}</li>
          ))}
        </ul>
      );
    case "stat":
      return (
        <div style={{ background: "#111827", border: `1px solid ${item.color}40`, borderRadius: "1rem", padding: "1.75rem", textAlign: "center", margin: "1.75rem 0", boxShadow: `0 0 24px ${item.color}10` }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "2.75rem", color: item.color, lineHeight: 1, marginBottom: "0.625rem" }}>{item.value}</div>
          <p style={{ color: "#8080A0", fontSize: "0.875rem", margin: 0 }}>{item.label}</p>
        </div>
      );
    case "link":
      return (
        <div style={{ background: "#0D1B3E", border: "1px solid rgba(99,130,246,0.3)", borderRadius: "0.75rem", padding: "1rem 1.25rem", margin: "1.25rem 0", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.125rem", flexShrink: 0 }}>🔗</span>
          <div>
            <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: "#93C5FD", fontWeight: 600, fontSize: "0.9rem", textDecoration: "underline" }}>{item.label}</a>
            <p style={{ color: "#64748B", fontSize: "0.8125rem", margin: "0.25rem 0 0" }}>{item.description}</p>
          </div>
        </div>
      );
    case "visual":
      return <VisualPlaceholder label={item.label} description={item.description} icon={item.icon} />;
    default:
      return null;
  }
}

// ─── Quiz Component ───────────────────────────────────────────
function QuizBlock({ questions, onComplete }: { questions: NonNullable<(typeof aiCourseItems)[0]["questions"]>; onComplete: () => void }) {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const score = submitted ? answers.filter((a, i) => a === questions[i].correctIndex).length : 0;
  const handleSubmit = () => { if (answers.some((a) => a === null)) return; setSubmitted(true); };
  return (
    <div>
      {questions.map((q, qi) => (
        <div key={qi} style={{ marginBottom: "2.25rem" }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0F172A", marginBottom: "1rem" }}>{qi + 1}. {q.question}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {q.options.map((opt, oi) => {
              const isSelected = answers[qi] === oi;
              const isCorrect = oi === q.correctIndex;
              let bg = "#111827"; let border = "rgba(255,255,255,0.08)"; let textColor = "#94A3B8";
              if (submitted) {
                if (isCorrect) { bg = "rgba(16,185,129,0.12)"; border = "rgba(16,185,129,0.4)"; textColor = "#6EE7B7"; }
                else if (isSelected && !isCorrect) { bg = "rgba(239,68,68,0.1)"; border = "rgba(239,68,68,0.35)"; textColor = "#FCA5A5"; }
              } else if (isSelected) { bg = "rgba(59,130,246,0.12)"; border = "rgba(59,130,246,0.4)"; textColor = "#93C5FD"; }
              return (
                <button key={oi} disabled={submitted} onClick={() => { const a = [...answers]; a[qi] = oi; setAnswers(a); }}
                  style={{ background: bg, border: `1px solid ${border}`, borderRadius: "0.625rem", padding: "0.875rem 1.125rem", textAlign: "left", cursor: submitted ? "default" : "pointer", color: textColor, fontSize: "0.9rem", lineHeight: 1.5, transition: "all 0.15s" }}>
                  {opt}
                </button>
              );
            })}
          </div>
          {submitted && (
            <div style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "0.625rem", padding: "0.875rem 1rem", marginTop: "0.75rem" }}>
              <p style={{ color: "#6EE7B7", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>💡 {q.explanation}</p>
            </div>
          )}
        </div>
      ))}
      {!submitted ? (
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}>
          <button className="btn-primary" onClick={handleSubmit} disabled={answers.some((a) => a === null)} style={{ opacity: answers.some((a) => a === null) ? 0.5 : 1 }}>Submit Answers</button>
          <button onClick={onComplete} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "0.625rem", padding: "0.75rem 1.25rem", color: "#6B7280", fontSize: "0.875rem", cursor: "pointer" }}>Skip Quiz →</button>
        </div>
      ) : (
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ background: "#111827", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "0.875rem", padding: "1.25rem 1.5rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontSize: "2rem" }}>{score === questions.length ? "🏆" : score >= Math.ceil(questions.length / 2) ? "✅" : "📚"}</span>
            <div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#F1F5F9", fontSize: "1rem", margin: "0 0 0.25rem" }}>{score}/{questions.length} correct</p>
              <p style={{ color: "#6B7280", fontSize: "0.875rem", margin: 0 }}>{score === questions.length ? "Perfect score!" : "Review the explanations above, then continue."}</p>
            </div>
          </div>
          <button className="btn-primary" onClick={onComplete}>Continue →</button>
        </div>
      )}
    </div>
  );
}

// ─── Feedback Form ────────────────────────────────────────────
function CourseFeedbackForm() {
  const [formState, handleSubmit] = useForm("mykookbl");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [ratingError, setRatingError] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === 0) { setRatingError(true); return; }
    setRatingError(false);
    handleSubmit(e);
  };
  if (formState.succeeded) {
    return (
      <div style={{ background: "#0D2818", border: "1px solid rgba(16,185,129,0.35)", borderRadius: "1.25rem", padding: "2.5rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🙏</div>
        <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#6EE7B7", marginBottom: "0.75rem" }}>Thank you — we really mean it.</h3>
        <p style={{ color: "#A7F3D0", fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>One of us will read your feedback personally. It genuinely helps us make this course better for every gym owner who takes it.</p>
      </div>
    );
  }
  const inputStyle: React.CSSProperties = { width: "100%", padding: "0.75rem 1rem", background: "#0A0E1A", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.625rem", color: "#F1F5F9", fontSize: "0.9375rem", outline: "none", boxSizing: "border-box", fontFamily: "Outfit, sans-serif" };
  return (
    <div style={{ background: "#111827", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "1.25rem", padding: "2rem", textAlign: "left" }}>
      <p style={{ fontSize: "0.8125rem", color: "#93C5FD", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "0.5rem" }}>We love sharing free resources</p>
      <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#F1F5F9", marginBottom: "0.75rem" }}>How did we do? 💬</h3>
      <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>We are always working to make our content better. We would genuinely love to hear what you loved and what you want us to add.</p>
      <div style={{ background: "rgba(245,158,11,0.08)", borderTop: "1px solid rgba(245,158,11,0.25)", borderRight: "1px solid rgba(245,158,11,0.25)", borderBottom: "1px solid rgba(245,158,11,0.25)", borderLeft: "4px solid #F59E0B", borderRadius: "0 0.625rem 0.625rem 0", padding: "0.75rem 1rem", display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
        <span style={{ fontSize: "1rem", flexShrink: 0 }}>👋</span>
        <p style={{ color: "#FCD34D", fontSize: "0.8125rem", lineHeight: 1.65, margin: 0 }}><strong>Real people read these — not bots.</strong> We take your feedback seriously and read every single submission. Please be kind and constructive.</p>
      </div>
      <form onSubmit={onSubmit}>
        <input type="hidden" name="form_type" value="Course Feedback" />
        <input type="hidden" name="course_name" value="AI in Gym Marketing" />
        <input type="hidden" name="rating" value={`${rating} out of 5 stars`} />
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", fontSize: "0.875rem", color: "#94A3B8", fontWeight: 600, marginBottom: "0.625rem" }}>Overall rating <span style={{ color: "#EF4444" }}>*</span></label>
          <div style={{ display: "flex", gap: "0.25rem" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} type="button" onMouseEnter={() => setHovered(star)} onMouseLeave={() => setHovered(0)} onClick={() => { setRating(star); setRatingError(false); }}
                style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: "2rem", padding: "0.125rem", transition: "transform 0.1s", transform: (hovered || rating) >= star ? "scale(1.2)" : "scale(1)", filter: (hovered || rating) >= star ? "none" : "grayscale(1) opacity(0.3)" }}
                aria-label={`${star} star${star > 1 ? "s" : ""}`}>⭐</button>
            ))}
          </div>
          {ratingError && <p style={{ color: "#EF4444", fontSize: "0.8125rem", marginTop: "0.375rem" }}>Please select a star rating before submitting.</p>}
        </div>
        <div style={{ marginBottom: "1.25rem" }}>
          <label style={{ display: "block", fontSize: "0.875rem", color: "#94A3B8", fontWeight: 600, marginBottom: "0.5rem" }}>Your name <span style={{ color: "#EF4444" }}>*</span></label>
          <input type="text" name="name" required placeholder="e.g. Alex Johnson" style={inputStyle} />
          <ValidationError field="name" prefix="Name" errors={formState.errors} />
        </div>
        <div style={{ marginBottom: "1.25rem" }}>
          <label style={{ display: "block", fontSize: "0.875rem", color: "#94A3B8", fontWeight: 600, marginBottom: "0.5rem" }}>Gym name <span style={{ color: "#6B7280", fontWeight: 400, fontSize: "0.8125rem" }}>(optional)</span></label>
          <input type="text" name="gym_name" placeholder="e.g. CrossFit Eastside" style={inputStyle} />
        </div>
        <div style={{ marginBottom: "1.75rem" }}>
          <label style={{ display: "block", fontSize: "0.875rem", color: "#94A3B8", fontWeight: 600, marginBottom: "0.5rem" }}>Your feedback <span style={{ color: "#EF4444" }}>*</span></label>
          <textarea name="message" required rows={5} placeholder="What did you love? What would you add? What was confusing?" style={{ ...inputStyle, resize: "vertical", lineHeight: "1.65" }} />
          <ValidationError field="message" prefix="Message" errors={formState.errors} />
        </div>
        <button type="submit" disabled={formState.submitting} className="btn-primary" style={{ fontSize: "0.9375rem", opacity: formState.submitting ? 0.6 : 1 }}>
          {formState.submitting ? "Sending..." : "Send Feedback ✉️"}
        </button>
      </form>
    </div>
  );
}

// ─── Course Complete ──────────────────────────────────────────
function CourseComplete({ onOpenModal }: { onOpenModal: () => void }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = absoluteAppUrl("/course/ai-gym-marketing");
  const handleCopy = () => { navigator.clipboard.writeText(shareUrl).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500); }); };
  return (
    <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center", padding: "3rem 1rem" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>🎓</div>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.375rem, 4vw, 2.5rem)", color: "#0F172A", lineHeight: 1.15, marginBottom: "1rem" }}>You now have an edge most gym owners don't.</h2>
      <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>You understand the AI landscape, the risks, and how to use it intentionally. That puts you ahead of gyms that are either ignoring AI entirely or letting it hollow out their brand.</p>
      <div style={{ background: "#111827", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "1.25rem", padding: "2rem", marginBottom: "2rem", textAlign: "left" }}>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#F0F0F5", fontSize: "1.0625rem", marginBottom: "0.5rem" }}>Share with your gym staff 🏋️</p>
        <p style={{ color: "#7070A0", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>Every person on your team who creates content should understand these principles. Share this free course so your whole team is on the same page.</p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <input readOnly value={shareUrl} style={{ flex: 1, minWidth: "200px", padding: "0.75rem 1rem", background: "#0A0E1A", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.625rem", color: "#7070A0", fontSize: "0.875rem", fontFamily: "monospace", outline: "none" }} />
          <button className="btn-primary" onClick={handleCopy} style={{ padding: "0.75rem 1.25rem", fontSize: "0.875rem", flexShrink: 0 }}>{copied ? "Copied! ✓" : "Copy Link"}</button>
        </div>
      </div>
      <div style={{ marginBottom: "2rem", textAlign: "left" }}><CourseFeedbackForm /></div>
      <div style={{ background: "#0D1B3E", border: "1px solid rgba(99,130,246,0.45)", borderRadius: "1.25rem", padding: "2rem", textAlign: "left" }}>
        <p style={{ fontSize: "0.8125rem", color: "#93C5FD", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "0.5rem" }}>Ready for the full system?</p>
        <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#F1F5F9", marginBottom: "0.75rem" }}>Put the strategy into practice.</h3>
        <p style={{ color: "#CBD5E1", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>Lift Media's full content system handles the filming, editing, and posting — so you get authentic, high-performing content without spending hours every week creating it.</p>
        <button className="btn-primary" onClick={onOpenModal} style={{ fontSize: "0.9375rem" }}>Get Early Access ⚡</button>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────
interface AICoursePageProps { onOpenModal: () => void; }

export default function AICourse({ onOpenModal }: AICoursePageProps) {
  const [email, setEmail] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => { const saved = getCourseEmail(); if (saved) setEmail(saved); }, []);
  const handleUnlock = useCallback((e: string) => { setEmail(e); }, []);
  const markComplete = useCallback((id: string) => { setCompletedIds((prev) => new Set(Array.from(prev).concat(id))); }, []);
  const goToNext = useCallback((currentId: string) => { markComplete(currentId); setCurrentIndex((i) => Math.min(i + 1, aiCourseItems.length)); }, [markComplete]);

  const isComplete = currentIndex >= aiCourseItems.length;
  const current = aiCourseItems[currentIndex];

  if (!email) return <EmailGate onUnlock={handleUnlock} />;

  const lessons = aiCourseItems.filter((i) => i.type === "lesson");
  const completedLessons = lessons.filter((l) => completedIds.has(l.id)).length;
  const progressPct = isComplete ? 100 : Math.round((currentIndex / aiCourseItems.length) * 100);

  return (
    <div style={{ minHeight: "100vh", background: "#0A0E1A" }}>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="course-sidebar-backdrop"
          style={{ position: "fixed", inset: 0, zIndex: 105, background: "rgba(0,0,0,0.65)" }}
        />
      )}

      {/* Top nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(10,14,26,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          className="container course-nav-inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "60px",
            height: "60px",
            gap: "0.75rem",
            minWidth: 0,
            boxSizing: "border-box",
          }}
        >
          <Link href="/" className="course-nav-brand" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", flexShrink: 0, minWidth: 0 }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: "linear-gradient(135deg, #3B82F6, #1D4ED8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.875rem", flexShrink: 0 }}>⚡</div>
            <span className="course-nav-logo-text" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(0.875rem, 3.5vw, 1rem)", color: "#F0F0F5", whiteSpace: "nowrap" }}><span style={{ color: "#3B82F6" }}>Lift</span>Media</span>
          </Link>

          <div className="course-nav-progress" style={{ flex: 1, minWidth: 0, maxWidth: "320px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", gap: "0.5rem", minWidth: 0 }}>
              <span className="course-nav-lesson-label" style={{ fontSize: "0.75rem", color: "#6060A0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{isComplete ? "Course complete!" : `${Math.min(currentIndex + 1, aiCourseItems.length)} of ${aiCourseItems.length}`}</span>
              <span style={{ fontSize: "0.75rem", color: "#F59E0B", fontWeight: 600, flexShrink: 0 }}>{progressPct}%</span>
            </div>
            <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${progressPct}%`, background: "linear-gradient(90deg, #F59E0B, #EF4444)", borderRadius: "2px", transition: "width 0.4s ease" }} />
            </div>
          </div>

          <div className="course-nav-actions" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
            <span style={{ fontSize: "0.8125rem", color: "#4040A0", flexShrink: 0 }} className="course-nav-count">{completedLessons}/{aiCourseTotalLessons} lessons done</span>
            <button type="button" className="course-hamburger" onClick={() => setSidebarOpen(true)} style={{ display: "none", background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: "0.5rem", color: "#FCD34D", fontSize: "1.125rem", padding: "0.375rem 0.625rem", cursor: "pointer", flexShrink: 0, alignItems: "center", justifyContent: "center" }} aria-label="Open lesson list">☰</button>
          </div>
        </div>
      </nav>

      <div className="container" style={{ display: "flex", gap: "0", padding: "0", alignItems: "flex-start" }}>
        {/* Sidebar */}
        <aside style={{ width: "260px", flexShrink: 0, position: "sticky", top: "60px", height: "calc(100vh - 60px)", overflowY: "auto", background: "#0D1117", borderRight: "1px solid rgba(255,255,255,0.06)", padding: "1.5rem 1rem", display: "flex", flexDirection: "column", gap: "0.25rem" }} className={`course-sidebar${sidebarOpen ? " sidebar-open" : ""}` as string}>
          <button className="sidebar-close-btn" onClick={() => setSidebarOpen(false)} style={{ display: "none", alignSelf: "flex-end", background: "transparent", border: "none", color: "#6060A0", fontSize: "1.5rem", cursor: "pointer", padding: "0.25rem 0.5rem", marginBottom: "0.5rem" }}>✕</button>
          <p style={{ fontSize: "0.6875rem", color: "#3040A0", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: "0.75rem", paddingLeft: "0.5rem" }}>Course Contents</p>
          {aiCourseItems.map((item, idx) => {
            const isDone = completedIds.has(item.id);
            const isCurrent = idx === currentIndex && !isComplete;
            const isLocked = idx > currentIndex;
            return (
              <button key={item.id} disabled={isLocked} onClick={() => { if (!isLocked) { setCurrentIndex(idx); setSidebarOpen(false); } }}
                style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "0.5rem", background: isCurrent ? "rgba(245,158,11,0.14)" : "transparent", border: isCurrent ? "1px solid rgba(245,158,11,0.28)" : "1px solid transparent", cursor: isLocked ? "default" : "pointer", opacity: isLocked ? 0.3 : 1, textAlign: "left", width: "100%", transition: "all 0.15s" }}>
                <span style={{ fontSize: "0.9375rem", flexShrink: 0 }}>{isDone ? "✅" : isCurrent ? item.emoji : isLocked ? "🔒" : item.emoji}</span>
                <span className="course-sidebar-title" style={{ fontSize: "0.8rem", color: isCurrent ? "#FCD34D" : isDone ? "#6EE7B7" : "#505080", fontWeight: isCurrent ? 600 : 400, lineHeight: 1.35, minWidth: 0, overflowWrap: "anywhere", textAlign: "left" }}>{item.type === "quiz" ? "📝 " : ""}{item.title}</span>
              </button>
            );
          })}
          {isComplete && (
            <button onClick={() => { setCurrentIndex(aiCourseItems.length); setSidebarOpen(false); }} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "0.5rem", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", cursor: "pointer", textAlign: "left", width: "100%" }}>
              <span style={{ fontSize: "0.9375rem" }}>🎓</span>
              <span style={{ fontSize: "0.8rem", color: "#6EE7B7", fontWeight: 600 }}>Course Complete</span>
            </button>
          )}
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, minWidth: 0, background: "#FFFFFF", minHeight: "calc(100vh - 60px)", padding: "2.5rem 3rem" }} className="course-main">
          {isComplete ? (
            <CourseComplete onOpenModal={onOpenModal} />
          ) : current.type === "lesson" ? (
            <div style={{ maxWidth: "720px" }}>
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
                  <span style={{ fontSize: "2rem" }}>{current.emoji}</span>
                  <p style={{ fontSize: "0.8125rem", color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, margin: 0 }}>
                    Lesson {currentIndex + 1} of {aiCourseItems.length} · {current.duration}
                  </p>
                </div>
                <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.25rem, 3vw, 2.125rem)", color: "#0F172A", lineHeight: 1.2, marginBottom: "0.625rem", letterSpacing: "-0.02em" }}>{current.title}</h1>
                <p style={{ color: "#64748B", fontSize: "1.0625rem", lineHeight: 1.6, borderBottom: "1px solid #E2E8F0", paddingBottom: "1.5rem" }}>{current.subtitle}</p>
              </div>
              {/* Video — hidden until videoUrl is set in aiCourseData.ts */}
              <VideoPlayer videoUrl={current.videoUrl} />
              <div>{current.content?.map((item, i) => <LessonContentBlock key={i} item={item} />)}</div>
              <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #E2E8F0" }}>
                <button className="btn-primary ai-next-btn" onClick={() => goToNext(current.id)} style={{ fontSize: "1rem", background: "linear-gradient(135deg, #F59E0B, #EF4444)" }}>
                  {currentIndex < aiCourseItems.length - 1 ? "Next →" : "Finish Course →"}
                </button>
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: "720px" }}>
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
                  <span style={{ fontSize: "2rem" }}>{current.emoji}</span>
                  <p style={{ fontSize: "0.8125rem", color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, margin: 0 }}>Knowledge Check</p>
                </div>
                <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.25rem, 3vw, 2.125rem)", color: "#0F172A", lineHeight: 1.2, marginBottom: "0.625rem", letterSpacing: "-0.02em" }}>{current.title}</h1>
                <p style={{ color: "#64748B", fontSize: "0.9375rem", borderBottom: "1px solid #E2E8F0", paddingBottom: "1.5rem" }}>Answer all questions to continue — or skip if you prefer.</p>
              </div>
              <QuizBlock questions={current.questions!} onComplete={() => goToNext(current.id)} />
            </div>
          )}
        </main>
      </div>

      <style>{`
        .course-nav-inner { min-width: 0; }
        @media (max-width: 768px) {
          .course-nav-inner {
            flex-wrap: wrap !important;
            height: auto !important;
            min-height: 52px !important;
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
            row-gap: 0.5rem !important;
            column-gap: 0.5rem !important;
            align-items: center !important;
          }
          .course-nav-brand { order: 1 !important; max-width: calc(100% - 3.5rem) !important; }
          .course-nav-actions { order: 2 !important; margin-left: auto !important; }
          .course-nav-progress {
            order: 3 !important;
            flex: 1 1 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
          }
          .course-nav-count { display: none !important; }
          .course-hamburger { display: inline-flex !important; }
          .ai-next-btn { width: 100% !important; justify-content: center !important; }
          .course-sidebar {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            height: 100dvh !important;
            max-height: 100dvh !important;
            z-index: 110 !important;
            transform: translateX(-100%);
            transition: transform 0.25s ease;
            width: min(100vw - 1rem, 300px) !important;
            max-width: 100% !important;
            padding: max(0.75rem, env(safe-area-inset-top)) 0.875rem 1rem !important;
            padding-bottom: max(1rem, env(safe-area-inset-bottom)) !important;
            box-sizing: border-box !important;
          }
          .course-sidebar.sidebar-open { transform: translateX(0) !important; }
          .sidebar-close-btn { display: block !important; }
          .course-main { padding: 1.25rem 1rem !important; }
          .course-sidebar button { align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .course-main { padding: 1rem 0.875rem !important; }
          .course-nav-lesson-label { font-size: 0.6875rem !important; }
        }
        .course-sidebar::-webkit-scrollbar { width: 4px; }
        .course-sidebar::-webkit-scrollbar-track { background: transparent; }
        .course-sidebar::-webkit-scrollbar-thumb { background: rgba(245,158,11,0.25); border-radius: 2px; }
      `}</style>
    </div>
  );
}
