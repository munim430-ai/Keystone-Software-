"use client";
import { useState } from "react";

const PRODUCTS = [
  { tag: "01 · Land Intelligence", title: "BhumiSheba AI",
    desc: "AI-powered land intelligence platform — records, valuation, and disputes resolved with verifiable data." },
  { tag: "02 · Mobility", title: "Deshantari",
    desc: "Digital infrastructure for migrant workers — onboarding, payments, and protection in one place." },
  { tag: "03 · Education", title: "EduAI",
    desc: "AI-driven education and visa systems — from learning paths to admissions, automated end-to-end." },
  { tag: "04 · Custom", title: "Keystone Systems",
    desc: "Custom AI and software for businesses — built around the real shape of your operation." }
];

export default function ProductsScene() {
  const [open, setOpen] = useState<number | null>(null);
  const isTouch = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  return (
    <section
      id="products"
      data-screen-label="04 Products"
      className="scene min-h-screen flex items-center relative"
      style={{ padding: "120px clamp(20px,5vw,72px) 120px" }}
    >
      <div className="w-full max-w-[1240px] mx-auto relative">
        <div className="reveal max-w-[640px]">
          <div className="flex items-center gap-2.5 mb-7 font-mono text-[11px] tracking-[0.22em] uppercase text-muted">
            <span className="text-accent">04</span>
            <span className="flex-none w-9 h-px bg-line" />
            <span>Products</span>
          </div>
          <h2 className="display-2" style={{ maxWidth: "16ch" }}>
            A portfolio built <br />for real-world use.
          </h2>
          <p className="sub mt-5">
            Four products, one architecture. Each one solves a distinct problem in the markets we know best.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-12 max-w-[760px]">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.title}
              data-product
              onClick={() => isTouch && setOpen(open === i ? null : i)}
              className={`product text-left relative px-5 pt-5 pb-6 border border-line rounded-[14px] bg-[rgba(248,250,252,0.015)] ${
                open === i ? "open" : ""
              }`}
            >
              <span className="arrow-tl absolute right-[18px] top-[18px] text-muted" aria-hidden>↗</span>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted">{p.tag}</span>
              <h3 className="text-[22px] font-semibold tracking-tight mt-2.5">{p.title}</h3>
              <p className="desc text-muted text-[14px] leading-[1.55]">{p.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
