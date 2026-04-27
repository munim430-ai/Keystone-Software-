"use client";
import { useEffect, useState } from "react";

const ITEMS = [
  { id: "hero",      label: "Intro" },
  { id: "problem",   label: "Problem" },
  { id: "transform", label: "Structure" },
  { id: "products",  label: "Products" },
  { id: "services",  label: "Services" },
  { id: "market",    label: "Market" },
  { id: "moat",      label: "Moat" },
  { id: "origin",    label: "Origin" },
  { id: "contact",   label: "Contact" }
];

export default function SectionRail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = ITEMS.map((it) => document.getElementById(it.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const idx = sections.indexOf(en.target as HTMLElement);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.45 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      className="rail hidden md:flex fixed right-[18px] top-1/2 -translate-y-1/2 z-[60] flex-col gap-3.5"
      aria-label="Section progress"
    >
      {ITEMS.map((it, i) => (
        <a
          key={it.id}
          href={`#${it.id}`}
          className={`relative w-2 h-2 rounded-full bg-[rgba(148,163,184,0.25)] transition ${active === i ? "active" : ""}`}
        >
          <span className="absolute right-[18px] top-1/2 -translate-y-1/2 text-muted font-mono text-[10px] tracking-[0.2em] uppercase whitespace-nowrap pointer-events-none">
            {it.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
