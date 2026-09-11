"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

/**
 * Vertical timeline rail that draws itself as the section scrolls through.
 * Storytelling: the line tracks how far into the role the reader has got.
 * Under reduced motion the rail is simply drawn in full.
 */
export function TimelineRail({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 62%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      <span
        aria-hidden
        className="absolute left-0 top-2 bottom-2 w-px bg-line"
      />
      <motion.span
        aria-hidden
        className="absolute left-0 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent/70 to-accent/10"
        style={reduce ? { scaleY: 1 } : { scaleY }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
