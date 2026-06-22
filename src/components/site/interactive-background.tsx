"use client";

import * as React from "react";

/**
 * Premium interactive background:
 *  - Animated aurora gradient mesh (3 blurred blobs)
 *  - Fading grid pattern
 *  - Subtle noise overlay
 *  - Pointer-reactive glow
 * Performance: transforms only, GPU-accelerated, paused on reduced-motion.
 */
export function InteractiveBackground() {
  const glowRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden noise-overlay"
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />

      {/* Aurora blobs */}
      <div
        className="aurora-blob animate-aurora-1"
        style={{
          top: "-12%",
          left: "-8%",
          width: "48vw",
          height: "48vw",
          background:
            "radial-gradient(circle at 30% 30%, var(--brand), transparent 60%)",
        }}
      />
      <div
        className="aurora-blob animate-aurora-2"
        style={{
          top: "30%",
          right: "-12%",
          width: "44vw",
          height: "44vw",
          background:
            "radial-gradient(circle at 60% 40%, var(--brand-2), transparent 60%)",
        }}
      />
      <div
        className="aurora-blob animate-aurora-3"
        style={{
          bottom: "-18%",
          left: "25%",
          width: "50vw",
          height: "50vw",
          background:
            "radial-gradient(circle at 50% 50%, var(--brand-3), transparent 62%)",
        }}
      />

      {/* Pointer-reactive glow (fine pointer only) */}
      <div
        ref={glowRef}
        className="absolute hidden h-[600px] w-[600px] rounded-full opacity-[0.12] blur-[90px] md:block"
        style={{
          background:
            "radial-gradient(circle, var(--brand) 0%, transparent 70%)",
        }}
      />

      {/* Vignette to deepen edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 0%, transparent 40%, color-mix(in oklch, var(--background) 80%, transparent) 100%)",
        }}
      />
    </div>
  );
}
