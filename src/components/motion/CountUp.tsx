"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Counts a metric up when it scrolls into view. Motivated: the number is the
 * point of the tile, so the count draws the eye to it once, on arrival.
 * Prefixes and suffixes survive intact ("25+", "~15%", "1 yr"), the server
 * always renders the real figure, and screen readers always read the real
 * figure regardless of animation state.
 */
export function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const target = match ? Number(match[2]) : 0;
  const decimals = match?.[2].includes(".") ? 1 : 0;
  const count = useMotionValue(0);
  const text = useTransform(count, (latest) => latest.toFixed(decimals));

  useEffect(() => {
    if (!match || reduce || !inView) return;
    const controls = animate(count, target, {
      duration: 1.1,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [count, delay, inView, match, reduce, target]);

  if (!match) return <span>{value}</span>;

  const [, prefix, raw, suffix] = match;
  // Server and first client render both show the real figure, so there is no
  // hydration mismatch and no-JS readers still get the number.
  const animating = inView && !reduce;

  return (
    <span ref={ref} className="tabular-nums">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {prefix}
        {animating ? <motion.span>{text}</motion.span> : raw}
        {suffix}
      </span>
    </span>
  );
}
