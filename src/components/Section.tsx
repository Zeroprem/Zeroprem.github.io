import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

export function Section({
  id,
  children,
  className = "",
  tone = "base",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "base" | "raised";
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 sm:py-24 lg:py-28 ${
        tone === "raised" ? "bg-surface/25" : ""
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">{children}</div>
    </section>
  );
}

/**
 * Section heading. Headline and lead stack vertically, never a headline on the
 * left with a small explainer floating on the right.
 */
export function SectionHeading({
  title,
  lead,
  className = "",
}: {
  title: ReactNode;
  lead?: string;
  className?: string;
}) {
  return (
    <Reveal className={`max-w-[46rem] ${className}`}>
      <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.5rem]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 max-w-[62ch] text-[1.0625rem] leading-relaxed text-muted">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
