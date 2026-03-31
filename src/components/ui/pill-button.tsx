"use client";

import { motion, useReducedMotion } from "framer-motion";

type PillButtonProps = {
  children: React.ReactNode;
  subtle?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaControls?: string;
  ariaExpanded?: boolean;
};

export function PillButton({
  children,
  subtle = false,
  href,
  onClick,
  type = "button",
  ariaControls,
  ariaExpanded,
}: PillButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const className = `inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-[0.02em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
    subtle
      ? "border border-[rgba(36,29,26,0.16)] bg-[rgba(255,255,255,0.35)] text-[var(--color-charcoal)] hover:bg-[rgba(255,255,255,0.58)] focus-visible:ring-[rgba(36,29,26,0.24)] focus-visible:ring-offset-[var(--color-cream)]"
      : "border border-[rgba(255,255,255,0.12)] bg-[rgba(23,18,15,0.94)] text-white shadow-[0_14px_30px_rgba(20,14,10,0.22)] [text-shadow:0_1px_0_rgba(0,0,0,0.18)] hover:bg-[rgba(23,18,15,0.98)] hover:text-white active:bg-[rgba(23,18,15,1)] focus-visible:ring-white/85 focus-visible:ring-offset-[rgba(23,18,15,0.18)]"
  }`;

  if (href) {
    return (
      <motion.a
        whileHover={prefersReducedMotion ? undefined : { y: -2 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        href={href}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      type={type}
      onClick={onClick}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      className={className}
    >
      {children}
    </motion.button>
  );
}
