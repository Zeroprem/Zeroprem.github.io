"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import type { PointerEvent, ReactNode } from "react";

/**
 * Bento card with a cursor-tracked highlight and hover elevation.
 * Pointer position lives in motion values, never React state, so tracking the
 * cursor never re-renders the tree. Touch pointers are ignored.
 */
export function SpotlightCard({
  children,
  className = "",
  lift = true,
}: {
  children: ReactNode;
  className?: string;
  lift?: boolean;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const glow = useSpring(0, { stiffness: 200, damping: 32 });

  const background = useMotionTemplate`radial-gradient(340px circle at ${x}px ${y}px, rgb(62 207 142 / 0.10), transparent 68%)`;

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <motion.div
      className={`card group ${className}`}
      onPointerMove={handlePointerMove}
      onPointerEnter={(event) => {
        if (reduce || event.pointerType !== "mouse") return;
        glow.set(1);
      }}
      onPointerLeave={() => glow.set(0)}
      whileHover={reduce || !lift ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px z-0"
        style={{ opacity: glow, background }}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  );
}
