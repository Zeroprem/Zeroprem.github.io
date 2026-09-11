import { BrandIcon, type BrandSlug } from "@/components/BrandIcon";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { work } from "@/lib/content";

const [featured, ...supporting] = work;

export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        title="Featured work"
        lead="Three systems aimed at the same problem: making a release prove itself before anyone has to read a log file."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-12">
        {/* Lead case study: wider, with the visual panel alongside the detail. */}
        <Reveal className="lg:col-span-12 h-full">
          <SpotlightCard className="h-full">
            <div className="grid gap-0 lg:grid-cols-12">
              <div className="order-2 p-7 sm:p-9 lg:order-1 lg:col-span-7">
                <p className="font-mono text-[12px] text-faint">
                  {featured.context}
                </p>
                <h3 className="mt-4 text-[1.625rem] font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-[1.875rem]">
                  {featured.name}
                </h3>

                <dl className="mt-7 flex flex-col gap-5">
                  <Detail term="Problem" detail={featured.problem} />
                  <Detail term="What I built" detail={featured.contribution} />
                  <Detail term="Outcome" detail={featured.outcome} />
                </dl>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {featured.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-1 lg:order-2 lg:col-span-5">
                <ProjectVisual icons={featured.icons} tall />
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        {supporting.map((project, index) => (
          <Reveal key={project.id} delay={0.06 + index * 0.07} className="lg:col-span-6 h-full">
            <SpotlightCard className="h-full">
              <ProjectVisual icons={project.icons} />
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <p className="font-mono text-[12px] text-faint">
                  {project.context}
                </p>
                <h3 className="mt-3.5 text-xl font-semibold leading-snug tracking-[-0.02em] text-ink">
                  {project.name}
                </h3>

                <dl className="mt-6 flex flex-1 flex-col gap-5">
                  <Detail term="Problem" detail={project.problem} />
                  <Detail term="What I built" detail={project.contribution} />
                  <Detail term="Outcome" detail={project.outcome} />
                </dl>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Detail({ term, detail }: { term: string; detail: string }) {
  return (
    <div>
      <dt className="text-[12px] font-medium text-accent/85">
        {term}
      </dt>
      <dd className="mt-2 max-w-[62ch] text-[0.9375rem] leading-[1.7] text-muted">
        {detail}
      </dd>
    </div>
  );
}

/** Brand marks over a tinted field. Not a simulated screenshot. */
function ProjectVisual({
  icons,
  tall = false,
}: {
  icons: readonly string[];
  tall?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border-line bg-surface-2/60 ${
        tall
          ? "min-h-[220px] border-b lg:h-full lg:border-b-0 lg:border-l"
          : "min-h-[150px] border-b"
      }`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.55]"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 120%, rgba(62,207,142,0.16) 0%, transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.035) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <ul className={`relative flex items-center ${tall ? "gap-6" : "gap-5"}`}>
        {icons.map((slug) => (
          <li
            key={slug}
            className={`grid place-items-center rounded-[10px] border border-line bg-bg/70 backdrop-blur-sm ${
              tall ? "h-[72px] w-[72px]" : "h-14 w-14"
            }`}
          >
            <BrandIcon
              slug={slug as BrandSlug}
              className={tall ? "h-8 w-8" : "h-6 w-6"}
              tinted
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
