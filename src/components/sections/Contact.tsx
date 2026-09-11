import {
  ArrowUpRight,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/lib/content";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: EnvelopeSimple,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    Icon: LinkedinLogo,
    external: true,
  },
  {
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
    Icon: GithubLogo,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" className="pb-0 sm:pb-0 lg:pb-0">
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[820px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.1] blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, #3ecf8e 0%, rgba(62,207,142,0.2) 42%, transparent 72%)",
          }}
        />

        <Reveal>
          <h2 className="max-w-[18ch] text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-ink sm:text-6xl">
            Interested in working together?
          </h2>
          <p className="mt-6 max-w-[54ch] text-[1.0625rem] leading-relaxed text-muted">
            I am open to software engineering roles in automation, backend and
            CI/CD. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-[16px] border border-line bg-line sm:grid-cols-3">
            {channels.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="group flex h-full items-start justify-between gap-4 bg-surface p-6 transition-colors duration-300 hover:bg-surface-2 sm:p-7"
                >
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 text-[13px] text-faint">
                      <Icon size={15} weight="regular" aria-hidden />
                      {label}
                    </span>
                    <span className="mt-2.5 block truncate text-[0.9375rem] font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    aria-hidden
                    className="mt-0.5 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <footer className="mt-20 flex flex-col gap-3 border-t border-line py-8 text-[13px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            {profile.name}, {profile.location}
          </p>
          <p>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="transition-colors hover:text-ink"
            >
              {profile.phone}
            </a>
          </p>
        </footer>
      </div>
    </Section>
  );
}
