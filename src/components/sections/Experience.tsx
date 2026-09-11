import { BrandIcon } from "@/components/BrandIcon";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { TimelineRail } from "@/components/motion/TimelineRail";
import { experience } from "@/lib/content";

/** Splits a bullet so resume figures can carry the accent without re-typing copy. */
function renderPoint(text: string, highlights: readonly string[] = []) {
  if (highlights.length === 0) return text;
  const pattern = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );
  return text.split(pattern).map((part, index) =>
    highlights.includes(part) ? (
      <strong key={`${part}-${index}`} className="font-mono font-medium text-accent">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export function Experience() {
  return (
    <Section id="experience" tone="raised">
      <SectionHeading
        title="Where I have worked"
        lead={experience.summary}
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Role identity rail. Sticks while the detail scrolls past it. */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span
                aria-hidden
                className="grid h-12 w-12 place-items-center rounded-[10px] border border-line bg-surface-2"
              >
                <BrandIcon slug="cisco" className="h-6 w-6" tinted />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-ink">
                {experience.company}
              </h3>
              <p className="mt-1.5 text-[0.9375rem] text-muted">{experience.role}</p>
              <p className="mt-4 font-mono text-[12px] text-faint">
                {experience.start} to {experience.end}
              </p>
              <p className="mt-1 font-mono text-[12px] text-faint">
                {experience.location}
              </p>
              <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-faint">
                {experience.team}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Responsibilities, grouped into themes rather than one long bullet list. */}
        <div className="lg:col-span-8">
          <TimelineRail>
            {experience.groups.map((group, groupIndex) => (
              <Reveal key={group.title} delay={groupIndex * 0.06}>
                <div className="relative pl-8 pb-11 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute left-0 top-[7px] h-[9px] w-[9px] -translate-x-[4px] rounded-full border border-accent/60 bg-bg"
                  />
                  <h4 className="text-[0.9375rem] font-medium text-ink">
                    {group.title}
                  </h4>
                  <ul className="mt-4 flex flex-col gap-3.5">
                    {group.points.map((point) => (
                      <li
                        key={point.text.slice(0, 30)}
                        className="max-w-[68ch] text-[0.9375rem] leading-[1.7] text-muted"
                      >
                        {renderPoint(point.text, "highlights" in point ? point.highlights : [])}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </TimelineRail>

          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-wrap gap-2 border-t border-line pt-8">
              {experience.stack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
