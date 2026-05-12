/**
 * ResourceArticlePage
 * ─────────────────────────────────────────────────────────────────────────────
 * Design: Real site Navbar + Footer (dark, matching homepage).
 *         Light-mode article body for readability.
 *         Right sidebar: "You May Also Like" links + free course CTA.
 *         After article: LockedProBlock (members-only content).
 *         Bottom: Feedback section (star rating + comment).
 *         Footer CTAs: Newsletter subscribe + Work With Us inquiry.
 */

import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen, Star, Send, ChevronRight } from "lucide-react";
import { getResourceBySlug, getRelatedResources, Resource, ResourceBlock } from "@/data/resourcesData";
import { getProOffering } from "@/data/proOfferings";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import LockedProBlock from "@/components/LockedProBlock";

// ─── Block Renderer ──────────────────────────────────────────────────────────
function RenderBlock({ block }: { block: ResourceBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.25rem, 3vw, 1.625rem)",
          color: "#0f172a",
          marginTop: "2.5rem",
          marginBottom: "0.875rem",
          letterSpacing: "-0.02em",
          lineHeight: 1.25,
        }}>
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: "1.125rem",
          color: "#1e293b",
          marginTop: "2rem",
          marginBottom: "0.625rem",
          letterSpacing: "-0.01em",
        }}>
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p style={{
          fontSize: "1.0625rem",
          color: "#334155",
          lineHeight: 1.8,
          marginBottom: "1.25rem",
        }}>
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul style={{ marginBottom: "1.25rem", paddingLeft: "1.25rem" }}>
          {block.items.map((item, i) => (
            <li key={i} style={{
              fontSize: "1.0625rem",
              color: "#334155",
              lineHeight: 1.75,
              marginBottom: "0.5rem",
              listStyleType: "disc",
            }}>
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol style={{ marginBottom: "1.25rem", paddingLeft: "1.5rem" }}>
          {block.items.map((item, i) => (
            <li key={i} style={{
              fontSize: "1.0625rem",
              color: "#334155",
              lineHeight: 1.75,
              marginBottom: "0.5rem",
              listStyleType: "decimal",
            }}>
              {item}
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <div style={{
          background: "#eff6ff",
          borderLeft: "4px solid #3b82f6",
          borderRadius: "0 0.5rem 0.5rem 0",
          padding: "1rem 1.25rem",
          marginBottom: "1.5rem",
          display: "flex",
          gap: "0.75rem",
          alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "1.25rem", flexShrink: 0, marginTop: "0.1rem" }}>{block.icon}</span>
          <p style={{ fontSize: "0.9375rem", color: "#1e40af", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
            {block.text}
          </p>
        </div>
      );
    case "callout":
      return (
        <blockquote style={{
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderLeft: "4px solid #0f172a",
          borderRadius: "0 0.5rem 0.5rem 0",
          padding: "1.25rem 1.5rem",
          marginBottom: "1.5rem",
          marginLeft: 0,
          marginRight: 0,
        }}>
          <p style={{
            fontSize: "1.0625rem",
            color: "#0f172a",
            lineHeight: 1.75,
            fontStyle: "italic",
            fontWeight: 600,
            margin: 0,
          }}>
            {block.text}
          </p>
        </blockquote>
      );
    case "cta-course":
      return (
        <div style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          marginBottom: "1.5rem",
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <BookOpen size={18} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>
                Free Course
              </div>
              <div style={{ fontSize: "0.9375rem", color: "#fff", fontWeight: 700 }}>
                {block.label}
              </div>
            </div>
          </div>
          <Link
            href={`/course/${block.course}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#fff",
              color: "#1e3a8a",
              fontWeight: 700,
              fontSize: "0.875rem",
              padding: "0.625rem 1.25rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Start Free <ArrowRight size={14} />
          </Link>
        </div>
      );
    default:
      return null;
  }
}

// ─── Related Resource Card ───────────────────────────────────────────────────
function RelatedCard({ resource }: { resource: Resource }) {
  const href = resource.type === "tool" && resource.toolRoute
    ? resource.toolRoute
    : `/resources/${resource.slug}`;
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div style={{
        padding: "1rem",
        borderRadius: "0.625rem",
        border: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(255,255,255,0.03)",
        cursor: "pointer",
        transition: "background 0.2s",
        marginBottom: "0.75rem",
      }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
          <div>
            <span style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#3b82f6",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              display: "block",
              marginBottom: "0.375rem",
            }}>
              {resource.category}
            </span>
            <p style={{
              fontSize: "0.875rem",
              color: "#C0C0D0",
              fontWeight: 600,
              lineHeight: 1.4,
              margin: 0,
            }}>
              {resource.title}
            </p>
          </div>
          <ChevronRight size={14} color="#7070A0" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
        </div>
        <div style={{ fontSize: "0.75rem", color: "#7070A0", marginTop: "0.5rem" }}>
          {resource.readTime}
        </div>
      </div>
    </Link>
  );
}

// ─── Star Rating ─────────────────────────────────────────────────────────────
function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div style={{ display: "flex", gap: "0.375rem" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.125rem",
            color: star <= (hovered || value) ? "#f59e0b" : "#cbd5e1",
            transition: "color 0.15s",
          }}
          aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
        >
          <Star size={24} fill={star <= (hovered || value) ? "#f59e0b" : "none"} />
        </button>
      ))}
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
interface ResourceArticlePageProps {
  slug: string;
  onOpenModal?: (source?: string) => void;
}

export default function ResourceArticlePage({ slug }: ResourceArticlePageProps) {
  const resource = getResourceBySlug(slug);
  const related = resource ? getRelatedResources(resource) : [];
  const proOffering = resource?.proLock ? getProOffering(resource.proLock) : undefined;

  // ── SEO: update <title> and <meta description> on mount ──────────────────
  useEffect(() => {
    if (!resource) return;
    const seoTitle = resource.seoTitle || `${resource.title} | Lift Media`;
    const seoDesc = resource.seoDescription || resource.description;
    document.title = seoTitle;
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta") as HTMLMetaElement;
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = seoDesc;
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!ogTitle) {
      ogTitle = document.createElement("meta") as HTMLMetaElement;
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = seoTitle;
    let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (!ogDesc) {
      ogDesc = document.createElement("meta") as HTMLMetaElement;
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = seoDesc;
    return () => {
      document.title = "Lift Media | Gym Marketing That Gets Members";
    };
  }, [resource]);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState<string | undefined>(undefined);

  const openModal = (source?: string) => {
    setModalSource(source);
    setModalOpen(true);
  };

  // Feedback form — Formspree
  const [feedbackState, submitFeedback] = useForm("mykookbl");
  const [rating, setRating] = useState(0);
  const [ratingError, setRatingError] = useState(false);
  // Newsletter form — Formspree
  const [newsletterState, submitNewsletter] = useForm("mykookbl");
  // Inquiry form — Formspree
  const [inquiryState, submitInquiry] = useForm("mykookbl");

  // LEGACY PLACEHOLDER — replaced by Formspree above
  const [_email, setEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Inquiry state
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  if (!resource) {
    return (
      <div style={{ minHeight: "100vh", background: "#0A0A0F", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#F0F0F5", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2rem", marginBottom: "1rem" }}>
            Resource not found
          </h1>
          <Link href="/resources" style={{ color: "#3b82f6", textDecoration: "none" }}>
            ← Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  const handleFeedbackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (rating === 0) {
      e.preventDefault();
      setRatingError(true);
      toast.error("Please select a rating before submitting.");
      return;
    }
    setRatingError(false);
    submitFeedback(e);
  };

  // Newsletter handled directly by Formspree useForm

  // Inquiry handled directly by Formspree useForm

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F" }}>
      {/* ── Real site Navbar ─────────────────────────────────────────────── */}
      <Navbar onOpenModal={() => openModal()} />

      {/* Spacer for fixed navbar */}
      <div style={{ height: 68 }} />

      {/* ── Back link ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1.5rem 1.5rem 0" }}>
        <Link
          href="/resources"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.375rem",
            color: "#7070A0", textDecoration: "none", fontSize: "0.875rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C0C0D0")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#7070A0")}
        >
          <ArrowLeft size={14} /> Back to Resources
        </Link>
      </div>

      {/* ── Main layout: article + sidebar ───────────────────────────────── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "2rem 1.5rem 4rem",
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: "2.5rem",
          alignItems: "start",
        }}
        className="resource-layout"
      >
        {/* ── Light-mode article body ─────────────────────────────────── */}
        <article>
          {/* Article header */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{
                background: "rgba(59,130,246,0.15)",
                border: "1px solid rgba(59,130,246,0.3)",
                borderRadius: "999px",
                padding: "0.25rem 0.75rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#60a5fa",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}>
                {resource.category}
              </span>
              <span style={{ fontSize: "0.8125rem", color: "#7070A0" }}>{resource.readTime}</span>
            </div>
            <h1 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.375rem, 4vw, 2.5rem)",
              color: "#F0F0F5",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              {resource.title}
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#9090B0", lineHeight: 1.65 }}>
              {resource.description}
            </p>
          </div>

          {/* Light-mode article content */}
          <div style={{
            background: "#ffffff",
            borderRadius: "1rem",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
          }}>
            {resource.content?.map((block, i) => (
              <RenderBlock key={i} block={block} />
            ))}
          </div>

          {/* ── Locked Pro Block ──────────────────────────────────────── */}
          {proOffering && (
            <LockedProBlock
              offering={proOffering}
              onUnlock={() => openModal("pro-resource")}
            />
          )}

        </article>

        {/* ── Dark Sidebar ────────────────────────────────────────────── */}
        <aside style={{ position: "sticky", top: "88px" }}>
          {/* You May Also Like */}
          <div style={{
            background: "#111118",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "0.875rem",
            padding: "1.5rem",
            marginBottom: "1.25rem",
          }}>
            <h4 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              color: "#F0F0F5",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}>
              You May Also Like
            </h4>
            {related.length > 0 ? (
              related.map((r) => <RelatedCard key={r.slug} resource={r} />)
            ) : (
              <p style={{ fontSize: "0.875rem", color: "#7070A0" }}>No related resources yet.</p>
            )}
            <Link
              href="/resources"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.8125rem",
                color: "#3b82f6",
                textDecoration: "none",
                marginTop: "0.5rem",
                fontWeight: 600,
              }}
            >
              Browse all resources <ArrowRight size={12} />
            </Link>
          </div>

          {/* Feedback Section — sidebar */}
          <div style={{
            background: "#111118",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "0.875rem",
            padding: "1.25rem",
            marginBottom: "1.25rem",
          }}>
            <h4 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              color: "#F0F0F5",
              marginBottom: "0.25rem",
            }}>
              Did you find this helpful?
            </h4>
            <p style={{ fontSize: "0.8125rem", color: "#7070A0", marginBottom: "1rem", lineHeight: 1.5 }}>
              We’d love your feedback.
            </p>
            {feedbackState.succeeded ? (
              <div style={{
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: "0.5rem",
                padding: "0.875rem",
                textAlign: "center",
              }}>
                <p style={{ color: "#22c55e", fontWeight: 600, margin: 0, fontSize: "0.875rem" }}>🙌 Thank you!</p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit}>
                <input type="hidden" name="form_type" value="Resource Feedback" />
                <input type="hidden" name="resource_name" value={resource.title} />
                <input type="hidden" name="rating" value={`${rating} out of 5 stars`} />
                <div style={{ marginBottom: "0.875rem" }}>
                  <label style={{ display: "block", fontSize: "0.8125rem", color: "#9090B0", marginBottom: "0.5rem", fontWeight: 500 }}>
                    Rate this resource
                  </label>
                  <StarRating value={rating} onChange={setRating} />
                </div>
                <div style={{ marginBottom: "0.875rem" }}>
                  <textarea
                    name="comment"
                    placeholder="What was most useful? What could be improved?"
                    rows={2}
                    style={{
                      width: "100%",
                      background: "#1E1E2A",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "0.5rem",
                      padding: "0.625rem 0.75rem",
                      color: "#F0F0F5",
                      fontSize: "0.8125rem",
                      resize: "vertical",
                      outline: "none",
                      fontFamily: "inherit",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                {ratingError && <p style={{ color: "#EF4444", fontSize: "0.75rem", marginBottom: "0.5rem" }}>Please select a rating.</p>}
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={feedbackState.submitting}
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", padding: "0.5rem 1rem" }}
                >
                  <Send size={12} /> {feedbackState.submitting ? "Sending..." : "Submit Feedback"}
                </button>
              </form>
            )}
          </div>
          {/* Free Courses CTA */}
          <div style={{
            background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
            borderRadius: "0.875rem",
            padding: "1.5rem",
          }}>
            <h4 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.9375rem",
              color: "#fff",
              marginBottom: "0.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <span>🎓</span> Free Courses for Gym Owners
            </h4>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "1rem" }}>
              Go deeper with our free video courses on filming and AI marketing.
            </p>
            <Link
              href="/course/basic-filming"
              style={{
                display: "block",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "0.5rem",
                padding: "0.625rem 0.875rem",
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.8125rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
            >
              📱 Basic Filming for Social Media →
            </Link>
            <Link
              href="/course/ai-gym-marketing"
              style={{
                display: "block",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "0.5rem",
                padding: "0.625rem 0.875rem",
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.8125rem",
                fontWeight: 600,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
            >
              🤖 AI in Gym Marketing →
            </Link>
          </div>
        </aside>
      </div>

      {/* ── Dark Footer CTAs ──────────────────────────────────────────────── */}
      <div style={{ background: "#111118", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "4rem 1.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem",
          }}
          className="footer-cta-grid"
        >
          {/* Newsletter */}
          <div style={{
            background: "#1A1A25",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "1rem",
            padding: "2rem",
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: "0.625rem",
              background: "rgba(59,130,246,0.15)",
              border: "1px solid rgba(59,130,246,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "1rem",
            }}>
              <span style={{ fontSize: "1.25rem" }}>📧</span>
            </div>
            <h3 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "#F0F0F5",
              marginBottom: "0.5rem",
            }}>
              Get weekly gym marketing tips
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "#7070A0", lineHeight: 1.65, marginBottom: "1.5rem" }}>
              Join 2,000+ gym owners getting actionable content strategy every Tuesday. No fluff — just what's working right now.
            </p>
            {newsletterState.succeeded ? (
              <div style={{
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: "0.625rem",
                padding: "1rem",
                textAlign: "center",
              }}>
                <p style={{ color: "#22c55e", fontWeight: 600, margin: 0 }}>
                  🎉 You're in! Check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={submitNewsletter} style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                <input type="hidden" name="form_type" value="Newsletter Signup" />
                <input type="hidden" name="resource_name" value={resource.title} />
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  style={{
                    flex: 1,
                    minWidth: "180px",
                    background: "#0A0A0F",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "0.5rem",
                    padding: "0.75rem 1rem",
                    color: "#F0F0F5",
                    fontSize: "0.9375rem",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
                <button type="submit" className="btn-primary" disabled={newsletterState.submitting} style={{ whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  {newsletterState.submitting ? "Sending..." : "Subscribe"} <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Work With Us */}
          <div style={{
            background: "#1A1A25",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "1rem",
            padding: "2rem",
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: "0.625rem",
              background: "rgba(99,102,241,0.15)",
              border: "1px solid rgba(99,102,241,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "1rem",
            }}>
              <span style={{ fontSize: "1.25rem" }}>💬</span>
            </div>
            <h3 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "#F0F0F5",
              marginBottom: "0.5rem",
            }}>
              Work with us
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "#7070A0", lineHeight: 1.65, marginBottom: "1.5rem" }}>
              Ready to turn your gym's content into a membership machine? Tell us about your gym and we'll reach out within 24 hours.
            </p>
            {inquiryState.succeeded ? (
              <div style={{
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: "0.625rem",
                padding: "1rem",
                textAlign: "center",
              }}>
                <p style={{ color: "#818cf8", fontWeight: 600, margin: 0 }}>
                  🚀 Message sent! We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={submitInquiry}>
                <input type="hidden" name="form_type" value="Work With Us Inquiry" />
                <input type="hidden" name="resource_name" value={resource.title} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem", marginBottom: "0.625rem" }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    style={{
                      background: "#0A0A0F",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "0.5rem",
                      padding: "0.75rem 1rem",
                      color: "#F0F0F5",
                      fontSize: "0.875rem",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    style={{
                      background: "#0A0A0F",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "0.5rem",
                      padding: "0.75rem 1rem",
                      color: "#F0F0F5",
                      fontSize: "0.875rem",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your gym and what you're looking to achieve..."
                  rows={3}
                  style={{
                    width: "100%",
                    background: "#0A0A0F",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "0.5rem",
                    padding: "0.75rem 1rem",
                    color: "#F0F0F5",
                    fontSize: "0.875rem",
                    resize: "vertical",
                    outline: "none",
                    fontFamily: "inherit",
                    marginBottom: "0.75rem",
                    boxSizing: "border-box",
                  }}
                />
                <button type="submit" className="btn-primary" disabled={inquiryState.submitting} style={{ width: "100%", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {inquiryState.submitting ? "Sending..." : "Send Inquiry"} <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Real site Footer ──────────────────────────────────────────────── */}
      <Footer onOpenModal={() => openModal()} />

      {/* ── Early Access Modal ────────────────────────────────────────────── */}
      <EarlyAccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source={modalSource}
      />

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .resource-layout {
            grid-template-columns: 1fr !important;
            padding: 1.5rem 1rem 3rem !important;
          }
          .resource-layout aside {
            position: static !important;
          }
        }
        @media (max-width: 640px) {
          .footer-cta-grid {
            grid-template-columns: 1fr !important;
          }
          .resource-layout {
            padding: 1rem 0.875rem 3rem !important;
          }
          .resource-article-content {
            padding: 1.25rem !important;
          }
          .resource-locked-items {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
