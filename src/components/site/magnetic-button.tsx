"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  strength?: number;
}

/**
 * A button/link that subtly follows the cursor when hovered.
 * Disabled on touch devices (falls back to a normal button).
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * strength, y: y * strength });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
    variant === "primary" &&
      "bg-gradient-brand text-brand-foreground shadow-glow-brand hover:opacity-90",
    variant === "outline" &&
      "border border-border bg-background/60 text-foreground hover:border-brand/50 hover:text-brand",
    variant === "ghost" && "text-foreground hover:bg-accent",
    className
  );

  const content = (
    <motion.span
      ref={ref as never}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.3 }}
      className={baseClasses}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
}
