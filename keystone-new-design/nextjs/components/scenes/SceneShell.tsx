import type { ReactNode } from "react";

type Props = {
  num: string;
  kicker: string;
  align?: "left" | "right";
  children: ReactNode;
  id: string;
};

export function SceneShell({ num, kicker, align = "left", children, id }: Props) {
  const justify = align === "right" ? "md:justify-end" : "md:justify-start";
  return (
    <section
      id={id}
      data-screen-label={`${num} ${kicker}`}
      className="scene min-h-screen flex items-center relative"
      style={{ padding: "120px clamp(20px,5vw,72px) 120px" }}
    >
      <div className={`w-full max-w-[1240px] mx-auto relative flex ${justify}`}>
        <div className={`max-w-[640px] reveal`}>
          <div className="flex items-center gap-2.5 mb-7 font-mono text-[11px] tracking-[0.22em] uppercase text-muted">
            <span className="text-accent">{num}</span>
            <span className="flex-none w-9 h-px bg-line" />
            <span>{kicker}</span>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

export function Sub({ children }: { children: ReactNode }) {
  return <p className="sub mt-5">{children}</p>;
}
