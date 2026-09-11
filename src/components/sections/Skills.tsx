import { BrandIcon, brandTitle, type BrandSlug } from "@/components/BrandIcon";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { coreStack, skillGroups } from "@/lib/content";

/**
 * Asymmetric bento: one logo wall plus six grouped categories.
 * Cell widths are matched to how much each category actually contains.
 */
const spans = [
  "lg:col-span-8", // Test automation
  "lg:col-span-4", // Programming
  "lg:col-span-4", // APIs and services
  "lg:col-span-5", // CI/CD and source control
  "lg:col-span-7", // Systems and infrastructure
  "lg:col-span-12", // AI and diagnostics
];

const order = [1, 0, 2, 3, 4, 5];

export function Skills() {
  return (
    <Section id="skills" tone="raised">
      <SectionHeading
        title="Technical skills"
        lead="The stack I reach for day to day, grouped by the job it does rather than listed as keywords."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-4 lg:row-span-2 h-full">
          <SpotlightCard className="h-full" lift={false}>
            <div className="flex h-full flex-col p-7 sm:p-8">
              <h3 className="text-[0.9375rem] font-medium text-ink">Core stack</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-faint">
                Tools I use on most working days.
              </p>
              <ul className="mt-7 grid flex-1 grid-cols-4 content-start gap-2.5 sm:grid-cols-6 lg:grid-cols-4">
                {coreStack.map((slug) => (
                  <li
                    key={slug}
                    title={brandTitle(slug as BrandSlug)}
                    className="group/tile grid aspect-square place-items-center rounded-[10px] border border-line bg-surface-2/70 transition-colors duration-300 hover:border-line-strong hover:bg-surface-2"
                  >
                    <BrandIcon
                      slug={slug as BrandSlug}
                      title={brandTitle(slug as BrandSlug)}
                      className="h-[22px] w-[22px] text-muted opacity-65 transition duration-300 group-hover/tile:text-ink group-hover/tile:opacity-100"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        </Reveal>

        {order.map((groupIndex, position) => {
          const group = skillGroups[groupIndex];
          return (
            <Reveal
              key={group.title}
              delay={0.04 + position * 0.05}
              className={`${spans[position]} h-full`}
            >
              <SpotlightCard className="h-full" lift={false}>
                <div className="flex h-full flex-col p-7 sm:p-8">
                  <h3 className="text-[0.9375rem] font-medium text-ink">
                    {group.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
