export default function ContactScene() {
  return (
    <section
      id="contact"
      data-screen-label="09 Contact"
      className="scene min-h-screen flex items-center relative"
      style={{ padding: "120px clamp(20px,5vw,72px) 120px" }}
    >
      <div className="w-full max-w-[1240px] mx-auto relative">
        <div className="reveal max-w-[640px]">
          <div className="flex items-center gap-2.5 mb-7 font-mono text-[11px] tracking-[0.22em] uppercase text-muted">
            <span className="text-accent">09</span>
            <span className="flex-none w-9 h-px bg-line" />
            <span>Let&apos;s Talk</span>
          </div>
          <h2 className="display-2" style={{ maxWidth: "16ch" }}>
            Let&apos;s build <br />what <span className="accent-word">matters</span>.
          </h2>
          <p className="sub mt-5">For investors, partners, and businesses ready to move forward.</p>
          <div className="mt-11 flex flex-wrap gap-3.5">
            <a href="#" className="btn btn-primary">View Pitch Deck <span className="arrow">↗</span></a>
            <a href="mailto:hello@keystone.systems" className="btn btn-ghost">
              Start a Project <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
