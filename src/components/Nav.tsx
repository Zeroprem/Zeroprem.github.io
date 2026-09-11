"use client";

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/content";

const sectionIds = navItems.map((item) => item.href.slice(1));

export function Nav() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setCondensed(value > 12);
  });

  // Active-link tracking via IntersectionObserver, never a scroll listener.
  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] transition-colors duration-300 ${
        condensed || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5 rounded-[10px] text-sm font-medium tracking-tight"
        >
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-[10px] border border-line-strong bg-surface-2 font-mono text-[11px] text-accent"
          >
            PT
          </span>
          <span className="hidden text-ink sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block rounded-[10px] px-3 py-2 text-[13px] transition-colors duration-200 ${
                    isActive ? "text-ink" : "text-faint hover:text-ink"
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      aria-hidden
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 34 }
                      }
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="grid h-9 w-9 place-items-center rounded-[10px] border border-line text-ink transition-colors hover:border-line-strong md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={17} weight="bold" /> : <List size={17} weight="bold" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-line bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto flex max-w-[1240px] flex-col px-5 py-3 sm:px-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-[10px] px-2 py-3 text-[15px] text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
