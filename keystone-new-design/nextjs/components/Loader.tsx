"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + (Math.random() * 18 + 6));
      setPct(p);
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => setDone(true), 220);
      }
    }, 110);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      id="loader"
      className={`fixed inset-0 z-[200] bg-bg flex items-center justify-center ${done ? "done" : ""}`}
    >
      <div className="flex items-center gap-3.5 text-muted font-mono text-[11px] tracking-[0.22em] uppercase">
        <span
          className="loader-dot block w-1.5 h-1.5 rounded-[1px] bg-accent"
          style={{ boxShadow: "0 0 12px var(--accent-glow)" }}
        />
        Keystone — initializing systems
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[14%] w-[min(220px,40vw)] h-px bg-[rgba(148,163,184,0.15)] overflow-hidden">
        <i
          className="block h-full bg-accent transition-[width] duration-[250ms] ease-linear"
          style={{ width: `${pct}%`, boxShadow: "0 0 10px var(--accent-glow)" }}
        />
      </div>
    </div>
  );
}
