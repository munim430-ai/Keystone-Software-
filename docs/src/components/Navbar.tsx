import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeystoneLogo from '../assets/KeystoneLogo';

const links = ['Services', 'Work', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center">
          <KeystoneLogo className="h-7 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.22em] text-white/45 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 border border-white/10 rounded-full text-[11px] uppercase tracking-widest text-white/70 hover:bg-white hover:text-black transition-all duration-300"
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {links.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-light text-white/80 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-8 py-3 bg-white text-black rounded-full text-sm font-medium"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
