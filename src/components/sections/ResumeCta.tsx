import { DownloadSimple, FilePdf } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/lib/content";

export function ResumeCta() {
  return (
    <Section id="resume" className="!py-10 sm:!py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[16px] border border-line bg-surface">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(90% 130% at 88% 0%, rgba(62,207,142,0.13) 0%, transparent 58%)",
            }}
          />
          <div className="relative flex flex-col gap-7 p-8 sm:p-10 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="flex items-start gap-5">
              <span
                aria-hidden
                className="grid h-12 w-12 shrink-0 place-items-center rounded-[10px] border border-line bg-surface-2 text-accent"
              >
                <FilePdf size={22} weight="regular" />
              </span>
              <div>
                <h2 className="text-[1.5rem] font-semibold tracking-[-0.025em] text-ink sm:text-[1.75rem]">
                  The full resume
                </h2>
                <p className="mt-2 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted">
                  One page covering the Cisco role, the automation stack and every
                  certification, in PDF.
                </p>
              </div>
            </div>

            <a
              href={profile.resumePath}
              download
              className="group inline-flex shrink-0 items-center justify-center gap-2 self-start whitespace-nowrap rounded-[10px] bg-ink px-5 py-3 text-sm font-medium text-bg transition-transform duration-200 ease-[var(--ease-out-expo)] hover:-translate-y-px active:translate-y-0 active:scale-[0.985] md:self-auto"
            >
              Download Resume
              <DownloadSimple
                size={15}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
