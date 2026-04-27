export default function Footer() {
  return (
    <footer
      className="relative z-[5] border-t border-line py-12 flex justify-between items-center flex-wrap gap-6 text-muted font-mono text-[11px] tracking-[0.18em] uppercase"
      style={{ paddingLeft: "clamp(20px,5vw,72px)", paddingRight: "clamp(20px,5vw,72px)" }}
    >
      <div>© 2026 Keystone Software Solutions</div>
      <div className="flex gap-6">
        <a href="mailto:hello@keystone.systems" className="hover:text-ink transition">hello@keystone.systems</a>
        <a href="#" className="hover:text-ink transition">LinkedIn</a>
        <a href="#" className="hover:text-ink transition">GitHub</a>
      </div>
    </footer>
  );
}
