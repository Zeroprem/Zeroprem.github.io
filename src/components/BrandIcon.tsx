/**
 * Official brand marks from the `simple-icons` package. Server-rendered, so the
 * path data never reaches the client bundle. No hand-drawn SVG paths.
 */
import {
  siAnsible,
  siApachemaven,
  siCisco,
  siDocker,
  siGit,
  siGithub,
  siJenkins,
  siKubernetes,
  siLinux,
  siOpenjdk,
  siPostman,
  siPython,
  siPytest,
  siSelenium,
  siVmware,
} from "simple-icons";

const registry = {
  ansible: siAnsible,
  apachemaven: siApachemaven,
  cisco: siCisco,
  docker: siDocker,
  git: siGit,
  github: siGithub,
  jenkins: siJenkins,
  kubernetes: siKubernetes,
  linux: siLinux,
  openjdk: siOpenjdk,
  postman: siPostman,
  python: siPython,
  pytest: siPytest,
  selenium: siSelenium,
  vmware: siVmware,
} as const;

export type BrandSlug = keyof typeof registry;

export function brandTitle(slug: BrandSlug) {
  return registry[slug].title;
}

export function brandHex(slug: BrandSlug) {
  return `#${registry[slug].hex}`;
}

export function BrandIcon({
  slug,
  className,
  tinted = false,
  title,
}: {
  slug: BrandSlug;
  className?: string;
  /** Paint the mark in the brand's own colour instead of inheriting text colour. */
  tinted?: boolean;
  /** Pass a title to expose the mark to assistive tech; omit for decoration. */
  title?: string;
}) {
  const icon = registry[slug];
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={tinted ? `#${icon.hex}` : "currentColor"}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d={icon.path} />
    </svg>
  );
}
