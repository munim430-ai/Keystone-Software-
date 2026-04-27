const SERVICES = [
  { num: "S/01", title: "AI Applications",
    desc: "Production-grade models, RAG pipelines, and agents wired into the workflows that pay for them." },
  { num: "S/02", title: "Web & Mobile Platforms",
    desc: "End-to-end products built on a modern stack — fast on low-end devices, ready for scale." },
  { num: "S/03", title: "Automation Systems",
    desc: "Replace manual ops with reliable systems. Fewer errors, faster cycles, audit-ready by default." },
  { num: "S/04", title: "Custom Business Software",
    desc: "Internal tools, dashboards, and back-office systems shaped to how your team actually works." }
];

export default function ServicesScene() {
  return (
    <section
      id="services"
      data-screen-label="05 Services"
      className="scene min-h-screen flex items-center relative"
      style={{ padding: "120px clamp(20px,5vw,72px) 120px" }}
    >
      <div className="w-full max-w-[1240px] mx-auto relative">
        <div className="reveal max-w-[640px]">
          <div className="flex items-center gap-2.5 mb-7 font-mono text-[11px] tracking-[0.22em] uppercase text-muted">
            <span className="text-accent">05</span>
            <span className="flex-none w-9 h-px bg-line" />
            <span>Services</span>
          </div>
          <h2 className="display-2" style={{ maxWidth: "16ch" }}>
            We build beyond <br />our own products.
          </h2>
          <p className="sub mt-5">
            From AI platforms to custom systems, we design and deliver what businesses actually need.
          </p>
        </div>

        <div
          className="reveal grid grid-cols-1 sm:grid-cols-2 mt-12 max-w-[780px] rounded-[14px] overflow-hidden border border-line"
          style={{ background: "var(--line)", gap: "1px" }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="p-7 bg-[rgba(5,11,30,0.85)] hover:bg-[rgba(34,211,238,0.04)] transition flex flex-col gap-2.5"
            >
              <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{s.num}</span>
              <h4 className="text-[18px] font-medium tracking-tight">{s.title}</h4>
              <p className="text-muted text-[13px] leading-[1.55]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
