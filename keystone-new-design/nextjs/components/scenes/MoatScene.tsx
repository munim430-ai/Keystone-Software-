const STACK = [
  { ix: "L4", title: "Distribution",            sub: "Local-first, ground-truth deployed" },
  { ix: "L3", title: "Product Surface",         sub: "Web · Mobile · Internal tools" },
  { ix: "L2", title: "AI Layer",                sub: "Models · RAG · Agents" },
  { ix: "L1", title: "Data & Infrastructure",   sub: "Clean pipelines, observable systems" },
  { ix: "L0", title: "Foundation",              sub: "Engineering discipline · speed" }
];

export default function MoatScene() {
  return (
    <section
      id="moat"
      data-screen-label="07 Moat"
      className="scene min-h-screen flex items-center relative"
      style={{ padding: "120px clamp(20px,5vw,72px) 120px" }}
    >
      <div className="w-full max-w-[1240px] mx-auto relative">
        <div className="reveal max-w-[640px]">
          <div className="flex items-center gap-2.5 mb-7 font-mono text-[11px] tracking-[0.22em] uppercase text-muted">
            <span className="text-accent">07</span>
            <span className="flex-none w-9 h-px bg-line" />
            <span>Approach</span>
          </div>
          <h2 className="display-2" style={{ maxWidth: "16ch" }}>
            Execution is <br />the advantage.
          </h2>
          <p className="sub mt-5">Local insight, AI-first systems, and the speed to build what others can&apos;t.</p>
        </div>

        <div className="reveal mt-12 flex flex-col gap-2.5 max-w-[560px]">
          {STACK.map((row) => (
            <div
              key={row.ix}
              className="flex items-center gap-3.5 px-[18px] py-4 border border-line rounded-[10px] hover:border-[rgba(34,211,238,0.4)] hover:bg-[rgba(34,211,238,0.03)] transition"
              style={{ background: "linear-gradient(180deg, rgba(248,250,252,.02), rgba(248,250,252,0))" }}
            >
              <span className="font-mono text-[11px] tracking-[0.18em] text-accent w-7">{row.ix}</span>
              <b className="font-medium text-[15px]">{row.title}</b>
              <span className="text-muted text-[13px] ml-auto">{row.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
