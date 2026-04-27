"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#moat", label: "Approach" },
  { href: "#contact", label: "Contact" }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  // Smooth-scroll for anchors
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const a = t.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!;
      if (id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        const target = document.querySelector(id) as HTMLElement;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <header
        className={`nav fixed top-0 left-0 right-0 z-[90] flex items-center justify-between transition-[padding,background] duration-[400ms] ease-cinematic ${
          scrolled ? "scrolled py-3.5" : "py-5"
        }`}
        style={{ paddingLeft: "clamp(20px,4vw,48px)", paddingRight: "clamp(20px,4vw,48px)" }}
      >
        <a href="#hero" className="flex items-center gap-3 font-semibold tracking-tight" aria-label="Keystone home">
          <span className="grid grid-cols-2 gap-[2px] w-[22px] h-[22px]" aria-hidden>
            <span className="bg-[#1a2540] border border-[rgba(148,163,184,0.25)] rounded-[1px]" />
            <span
              className="border rounded-[1px]"
              style={{ borderColor: "rgba(34,211,238,0.55)", boxShadow: "0 0 8px rgba(34,211,238,0.3)" }}
            />
            <span className="border rounded-[1px]" style={{ borderColor: "rgba(148,163,184,0.35)" }} />
            <span className="bg-[#1a2540] border border-[rgba(148,163,184,0.25)] rounded-[1px]" />
          </span>
          <span className="text-[14px]">
            <b className="font-semibold">Keystone</b>
            <i className="not-italic text-muted font-normal ml-1.5">Software Solutions</i>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-muted hover:text-ink transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-ink text-[12px] tracking-wide px-4 py-[9px] border border-line rounded-full hover:border-accent hover:shadow-[0_0_0_4px_var(--accent-soft)] transition"
          >
            View Pitch Deck
          </a>
        </nav>

        <button
          className="nav-toggle md:hidden flex flex-col items-center justify-center gap-[5px] w-[38px] h-[38px] border border-line rounded-full"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <i className="block w-3.5 h-px bg-ink transition-transform duration-300" />
          <i className="block w-3.5 h-px bg-ink transition-opacity duration-300" />
          <i className="block w-3.5 h-px bg-ink transition-transform duration-300" />
        </button>
      </header>

      <div
        className="mobile-menu fixed inset-0 z-[80] bg-bg flex-col justify-center px-8 invisible opacity-0 transition-[opacity,visibility] duration-300 flex"
        aria-hidden={!open}
      >
        {[...links, { href: "#contact", label: "View Pitch Deck →" }].map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="block text-[34px] font-medium tracking-tight py-3.5 border-b border-line text-ink"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
