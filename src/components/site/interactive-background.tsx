"use client";

import * as React from "react";

/**
 * Premium interactive background:
 *  - Animated aurora gradient mesh (3 soft blobs, low opacity)
 *  - Faint grid pattern with radial fade
 *  - Subtle noise overlay
 *  - Pointer-reactive glow (fine pointer only)
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
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${cx - 280}px, ${cy - 280}px, 0)`;
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

      {/* Faint grid */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-70" />

      {/* Aurora blobs — blue / purple / cyan, very soft */}
      <div
        className="aurora-blob animate-aurora-1"
        style={{
          top: "-14%",
          left: "-6%",
          width: "46vw",
          height: "46vw",
          background:
            "radial-gradient(circle at 35% 35%, var(--brand), transparent 62%)",
        }}
      />
      <div
        className="aurora-blob animate-aurora-2"
        style={{
          top: "26%",
          right: "-12%",
          width: "42vw",
          height: "42vw",
          background:
            "radial-gradient(circle at 60% 40%, var(--brand-2), transparent 62%)",
        }}
      />
      <div
        className="aurora-blob animate-aurora-3"
        style={{
          bottom: "-20%",
          left: "28%",
          width: "48vw",
          height: "48vw",
          opacity: 0.2,
          background:
            "radial-gradient(circle at 50% 50%, var(--brand-3), transparent 64%)",
        }}
      />

      {/* Pointer-reactive glow (desktop only) */}
      <div
        ref={glowRef}
        className="absolute hidden h-[560px] w-[560px] rounded-full opacity-[0.10] blur-[100px] md:block"
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
            "radial-gradient(ellipse 100% 80% at 50% 0%, transparent 42%, color-mix(in oklch, var(--background) 85%, transparent) 100%)",
        }}
      />
    </div>
  );
}
