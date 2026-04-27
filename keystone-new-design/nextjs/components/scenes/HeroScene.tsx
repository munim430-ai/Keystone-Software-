export default function HeroScene() {
  return (
    <section
      id="hero"
      data-screen-label="01 Hero"
      className="scene min-h-screen flex items-center relative"
      style={{ padding: "120px clamp(20px,5vw,72px) 120px" }}
    >
      <div className="w-full max-w-[1240px] mx-auto relative">
        <div className="max-w-[720px] reveal">
          <div className="flex items-center gap-2.5 mb-7 font-mono text-[11px] tracking-[0.22em] uppercase text-muted">
            <span className="text-accent">01</span>
            <span className="flex-none w-9 h-px bg-line" />
            <span>Keystone — Software Solutions</span>
          </div>
          <h1 className="display-1" style={{ maxWidth: "14ch" }}>
            Ideas are easy. <br />
            We build the <span className="accent-word">hard part</span>.
          </h1>
          <p className="sub mt-5">
            Keystone builds AI products and software systems for emerging markets — fast, scalable, and real.
          </p>
          <div className="mt-11 flex flex-wrap gap-3.5">
            <a href="#products" className="btn btn-primary">
              View Our Work <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              View Pitch Deck <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-9 flex justify-between items-end gap-4 text-muted font-mono text-[11px] tracking-[0.18em] uppercase">
          <div className="flex items-center gap-2.5">
            <span className="scroll-bar" />
            <span>Scroll</span>
          </div>
          <div>Dhaka · Singapore · Remote</div>
        </div>
      </div>
    </section>
  );
}
