import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { HeroIntro } from "@/components/motion/HeroIntro";
import { profile } from "@/lib/content";

const socials = [
  { label: "GitHub profile", href: profile.github, Icon: GithubLogo },
  { label: "LinkedIn profile", href: profile.linkedin, Icon: LinkedinLogo },
  { label: "Email Premchand", href: `mailto:${profile.email}`, Icon: EnvelopeSimple },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-16 sm:pb-20"
    >
      <div aria-hidden className="grid-veil absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.13] blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #3ecf8e 0%, rgba(62,207,142,0.18) 40%, transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <HeroIntro className="lg:col-span-7">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent sm:text-[11px] sm:tracking-[0.2em]">
              Software Engineer · CI/CD &amp; Automation
            </p>

            <h1 className="mt-5 text-[2.375rem] font-semibold leading-[1.02] tracking-[-0.035em] text-ink min-[400px]:text-[2.75rem] sm:text-6xl lg:text-[4.5rem]">
              <span className="block">{profile.firstName}</span>
              <span className="block">{profile.lastName}</span>
            </h1>

            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted sm:text-lg">
              {profile.positioning}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 whitespace-nowrap rounded-[10px] bg-ink px-5 py-3 text-sm font-medium text-bg transition-transform duration-200 ease-[var(--ease-out-expo)] hover:-translate-y-px active:translate-y-0 active:scale-[0.985]"
              >
                View My Work
                <ArrowDown
                  size={15}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href={profile.resumePath}
                download
                className="group inline-flex items-center gap-2 whitespace-nowrap rounded-[10px] border border-line-strong bg-surface/60 px-5 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/45 hover:bg-surface active:scale-[0.985]"
              >
                Download Resume
                <ArrowUpRight
                  size={15}
                  weight="bold"
                  className="text-faint transition-colors duration-200 group-hover:text-accent"
                />
              </a>
            </div>
          </HeroIntro>

          <HeroIntro delay={0.12} className="lg:col-span-5">
            <div className="card mx-auto max-w-[300px] p-2.5 sm:max-w-[380px] lg:ml-auto lg:mr-0">
              <div className="relative overflow-hidden rounded-[10px]">
                <Image
                  src={profile.photo}
                  alt={`${profile.name}, ${profile.role}`}
                  width={1000}
                  height={1000}
                  priority
                  sizes="(min-width: 1024px) 360px, (min-width: 480px) 380px, 86vw"
                  className="aspect-[4/5] w-full object-cover object-[50%_16%] [filter:saturate(0.9)_contrast(1.04)_brightness(0.96)]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-[10px] ring-1 ring-inset ring-white/[0.08]"
                />
              </div>

              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3">
                <span className="font-mono text-[11px] text-faint">
                  {profile.location}
                </span>
                <ul className="flex items-center gap-1">
                  {socials.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {})}
                        className="grid h-8 w-8 place-items-center rounded-[10px] border border-transparent text-faint transition-colors duration-200 hover:border-line-strong hover:text-ink"
                      >
                        <Icon size={16} weight="regular" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </HeroIntro>
        </div>
      </div>
    </section>
  );
}
