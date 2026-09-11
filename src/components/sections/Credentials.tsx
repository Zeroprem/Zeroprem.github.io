import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { credentials } from "@/lib/content";

/** Record list with a left rail for the kind and period. No card boxes here. */
export function Credentials() {
  return (
    <Section id="education">
      <SectionHeading title="Certifications and education" />

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {credentials.map((item, index) => (
          <Reveal as="li" key={item.title} delay={index * 0.05}>
            <div className="group grid gap-3 py-7 transition-colors duration-300 sm:grid-cols-12 sm:gap-8">
              <div className="sm:col-span-3">
                <span className="text-[13px] font-medium text-accent/85">
                  {item.kind}
                </span>
                {item.period ? (
                  <span className="mt-1 block font-mono text-[12px] text-faint">
                    {item.period}
                  </span>
                ) : null}
              </div>
              <div className="sm:col-span-9">
                <h3 className="text-[1.0625rem] font-medium leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[0.9375rem] text-muted">{item.issuer}</p>
                {item.detail ? (
                  <p className="mt-2 text-sm text-faint">{item.detail}</p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
