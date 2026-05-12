import { useEffect } from "react";

/**
 * Attaches a global IntersectionObserver that adds "visible" to
 * any element with class "reveal", "reveal-left", "reveal-right", or "stagger"
 * when it enters the viewport.
 */
export function useGlobalScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const observe = () => {
      document
        .querySelectorAll(".reveal, .reveal-left, .reveal-right, .stagger")
        .forEach((el) => observer.observe(el));
    };

    // Initial pass
    observe();

    // Re-observe after short delay to catch dynamically rendered elements
    const timer = setTimeout(observe, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
}
