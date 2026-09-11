import {
  ArrowsClockwise,
  Cube,
  MagnifyingGlass,
  PlugsConnected,
} from "@phosphor-icons/react/dist/ssr";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { about } from "@/lib/content";

const focusIcons = [Cube, PlugsConnected, ArrowsClockwise, MagnifyingGlass];

export function About() {
  return (
    <Section id="about">
      <SectionHeading title={about.heading} />

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
              <p className="max-w-[65ch] text-[1.0625rem] leading-[1.75] text-muted [&:not(:first-child)]:mt-6">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="lg:col-span-5">
          <ul className="flex flex-col gap-7">
            {about.focus.map((item, index) => {
              const Icon = focusIcons[index];
              return (
                <Reveal as="li" key={item.title} delay={0.05 + index * 0.07}>
                  <div className="flex gap-4">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[10px] border border-line bg-surface-2 text-accent"
                    >
                      <Icon size={17} weight="regular" />
                    </span>
                    <div>
                      <h3 className="text-[0.9375rem] font-medium text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-faint">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
