import KeystoneLogo from '../assets/KeystoneLogo';

const nav = ['Services', 'Work', 'About', 'Contact'];
const social = [
  { label: 'GitHub', href: 'https://github.com/Munim430-ai' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter / X', href: '#' },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-2">
            <KeystoneLogo className="h-8 w-auto mb-8" />
            <p className="text-white/30 max-w-xs font-light leading-relaxed text-sm">
              Efficiency, Engineered. Building software products for Bangladesh and premium automation tools for the world.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {nav.map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-white/35 hover:text-white transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@keystonesoftware.dev" className="text-sm text-white/35 hover:text-white transition-colors font-light">
                  hello@keystonesoftware.dev
                </a>
              </li>
              {social.map(s => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/35 hover:text-white transition-colors font-light">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6">
          <p className="text-[10px] text-white/15 uppercase tracking-widest">
            © 2026 Keystone Software Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] text-white/15 uppercase tracking-widest hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="text-[10px] text-white/15 uppercase tracking-widest hover:text-white/40 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
