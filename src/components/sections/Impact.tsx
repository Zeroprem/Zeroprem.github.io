import { Section } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { metrics } from "@/lib/content";

/**
 * Measurable outcomes as one dashboard strip divided by hairlines rather than
 * as separate cards. Every number here appears in the resume.
 */
export function Impact() {
  return (
    <Section id="impact" className="!pt-4 !pb-4 sm:!pt-6 sm:!pb-6">
      <Reveal>
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="bg-surface p-6 transition-colors duration-300 hover:bg-surface-2 sm:p-7"
            >
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <span className="block font-mono text-[2.25rem] font-medium leading-none tracking-[-0.03em] text-accent sm:text-[2.375rem]">
                  <CountUp value={metric.value} delay={index * 0.08} />
                </span>
                <span className="mt-3.5 block text-[0.9375rem] font-medium text-ink">
                  {metric.label}
                </span>
                <span className="mt-1.5 block text-[13px] leading-relaxed text-faint">
                  {metric.detail}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
