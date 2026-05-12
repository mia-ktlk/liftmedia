/**
 * ResourcesHub — /resources
 * ─────────────────────────────────────────────────────────────────────────────
 * Landing page for all Lift Media resources.
 * Features: search bar, category filter pills, resource cards grid.
 * Design: dark, matching the rest of the site.
 */

import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Search, ArrowRight, BookOpen, Wrench, ChevronRight } from "lucide-react";
import { resources, CATEGORIES, Resource } from "@/data/resourcesData";
import Navbar from "@/components/Navbar";
import ElectricHeading from "@/components/ElectricHeading";
import Footer from "@/components/Footer";
import EarlyAccessModal from "@/components/EarlyAccessModal";

// ─── Resource Card ────────────────────────────────────────────────────────────
function ResourceCard({ resource }: { resource: Resource }) {
  const href =
    resource.type === "tool" && resource.toolRoute
      ? resource.toolRoute
      : `/resources/${resource.slug}`;

  const isInteractive = resource.type === "tool";

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        className="lift-card resource-card"
        style={{
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        }}
      >
        {/* Top row: icon + badges */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
          <div style={{
            width: 40, height: 40, borderRadius: "0.625rem",
            background: isInteractive ? "rgba(99,102,241,0.15)" : "rgba(59,130,246,0.15)",
            border: `1px solid ${isInteractive ? "rgba(99,102,241,0.25)" : "rgba(59,130,246,0.25)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            {isInteractive
              ? <Wrench size={18} color="#818cf8" />
              : <BookOpen size={18} color="#3b82f6" />
            }
          </div>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <span style={{
              background: isInteractive ? "rgba(99,102,241,0.12)" : "rgba(59,130,246,0.12)",
              border: `1px solid ${isInteractive ? "rgba(99,102,241,0.25)" : "rgba(59,130,246,0.25)"}`,
              borderRadius: "999px",
              padding: "0.2rem 0.625rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: isInteractive ? "#818cf8" : "#60a5fa",
              textTransform: "uppercase" as const,
              letterSpacing: "0.06em",
            }}>
              {resource.category}
            </span>
            {isInteractive && (
              <span style={{
                background: "rgba(34,197,94,0.12)",
                border: "1px solid rgba(34,197,94,0.25)",
                borderRadius: "999px",
                padding: "0.2rem 0.625rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#4ade80",
                textTransform: "uppercase" as const,
                letterSpacing: "0.06em",
              }}>
                Tool
              </span>
            )}
          </div>
        </div>

        {/* Title + description */}
        <h3 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: "1.0625rem",
          color: "#F0F0F5",
          lineHeight: 1.35,
          marginBottom: "0.625rem",
          flex: 1,
        }}>
          {resource.title}
        </h3>
        <p style={{
          fontSize: "0.875rem",
          color: "#7070A0",
          lineHeight: 1.65,
          marginBottom: "1.25rem",
        }}>
          {resource.description}
        </p>

        {/* Footer row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
          <span style={{ fontSize: "0.8125rem", color: "#5050A0" }}>{resource.readTime}</span>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.375rem",
            fontSize: "0.8125rem", fontWeight: 600,
            color: isInteractive ? "#818cf8" : "#3b82f6",
          }}>
            {isInteractive ? "Open tool" : "Read article"} <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ResourcesHub() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal, .stagger").forEach((e) => e.classList.add("visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory = activeCategory === "All" || r.category === activeCategory;
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const articleCount = filtered.filter((r) => r.type === "article").length;
  const toolCount = filtered.filter((r) => r.type === "tool").length;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState<string | undefined>(undefined);
  const openModal = (source?: string) => { setModalSource(source); setModalOpen(true); };

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F" }}>
      {/* ── Real site Navbar ──────────────────────────────────────────────── */}
      <Navbar onOpenModal={() => openModal()} />
      {/* Spacer for fixed navbar */}
      <div style={{ height: 68 }} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div style={{
        background: "linear-gradient(180deg, #111118 0%, #0A0A0F 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "4rem 1.5rem 3rem",
        textAlign: "center",
      }}>
        <span className="section-label" style={{ marginBottom: "1rem", display: "inline-block" }}>
          Free Resources
        </span>
        <ElectricHeading
          as="h1"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.625rem, 5vw, 3.25rem)",
            color: "#F0F0F5",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            maxWidth: "700px",
            margin: "0 auto 1rem",
            textAlign: "center",
          }}
        >
          Everything You Need to Grow Your Gym on Social
        </ElectricHeading>
        <p style={{
          fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
          color: "#7070A0",
          maxWidth: "560px",
          margin: "0 auto 2.5rem",
          lineHeight: 1.7,
        }}>
          Articles, checklists, tools, and frameworks — all built specifically for gym owners. Free, forever.
        </p>

        {/* Search bar */}
        <div style={{
          maxWidth: "520px",
          margin: "0 auto",
          position: "relative",
        }}>
          <Search
            size={18}
            color="#5050A0"
            style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, tools, checklists..."
            style={{
              width: "100%",
              background: "#1A1A25",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "0.75rem",
              padding: "0.875rem 1rem 0.875rem 2.75rem",
              color: "#F0F0F5",
              fontSize: "1rem",
              outline: "none",
              fontFamily: "inherit",
              boxSizing: "border-box",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
          />
        </div>
      </div>

      {/* ── Category filters + grid ───────────────────────────────────────── */}
      <div ref={sectionRef} style={{ maxWidth: "1280px", margin: "0 auto", padding: "2.5rem 1.5rem 5rem" }}>
        {/* Filter pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? "#3b82f6" : "rgba(255,255,255,0.05)",
                border: `1px solid ${activeCategory === cat ? "#3b82f6" : "rgba(255,255,255,0.1)"}`,
                borderRadius: "999px",
                padding: "0.4rem 1rem",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: activeCategory === cat ? "#fff" : "#9090B0",
                cursor: "pointer",
                transition: "all 0.15s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#C0C0D0";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#9090B0";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Result count */}
        <div style={{ marginBottom: "1.5rem", fontSize: "0.875rem", color: "#5050A0" }}>
          {filtered.length === 0
            ? "No resources found — try a different search or category."
            : `${articleCount > 0 ? `${articleCount} article${articleCount > 1 ? "s" : ""}` : ""}${articleCount > 0 && toolCount > 0 ? " · " : ""}${toolCount > 0 ? `${toolCount} interactive tool${toolCount > 1 ? "s" : ""}` : ""}`
          }
        </div>

        {/* Resource grid */}
        {filtered.length > 0 ? (
          <div className="stagger" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "1.25rem",
          }}>
            {filtered.map((r) => (
              <ResourceCard key={r.slug} resource={r} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔍</div>
            <h3 style={{ color: "#F0F0F5", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, marginBottom: "0.5rem" }}>
              No results found
            </h3>
            <p style={{ color: "#7070A0", marginBottom: "1.5rem" }}>
              Try searching for something else or clear your filters.
            </p>
            <button
              onClick={() => { setQuery(""); setActiveCategory("All"); }}
              className="btn-primary"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{
          marginTop: "4rem",
          background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
          borderRadius: "1rem",
          padding: "2.5rem",
          textAlign: "center",
        }}>
          <h3 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            color: "#fff",
            marginBottom: "0.75rem",
            letterSpacing: "-0.02em",
          }}>
            Want personalised guidance for your gym?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", marginBottom: "1.5rem", maxWidth: "480px", margin: "0 auto 1.5rem" }}>
            Our free courses go deeper than any article. Start with Basic Filming or AI in Gym Marketing — both completely free.
          </p>
          <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/course/basic-filming" style={{ textDecoration: "none" }}>
              <button style={{
                background: "#fff",
                color: "#1e3a8a",
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.625rem",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "inherit",
              }}>
                📱 Basic Filming Course <ArrowRight size={14} />
              </button>
            </Link>
            <Link href="/course/ai-gym-marketing" style={{ textDecoration: "none" }}>
              <button style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.625rem",
                border: "1px solid rgba(255,255,255,0.25)",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "inherit",
              }}>
                🤖 AI Marketing Course <ArrowRight size={14} />
              </button>
            </Link>
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
    </div>
  );
}
