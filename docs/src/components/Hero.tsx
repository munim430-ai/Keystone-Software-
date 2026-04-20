import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';
import KeystoneLogo from '../assets/KeystoneLogo';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    gsap.set(headline, { visibility: 'hidden' });
    const split = new SplitType(headline, { types: 'chars,words' });
    gsap.set(headline, { visibility: 'visible' });
    gsap.set(split.chars, { y: '110%', opacity: 0 });

    const tl = gsap.timeline({ delay: 0.2 });

    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .to(split.chars, {
        y: '0%',
        opacity: 1,
        duration: 0.9,
        stagger: 0.022,
        ease: 'power4.out',
      }, '-=0.4')
      .to([subRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      }, '-=0.4');

    return () => {
      split.revert();
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-black">
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full">
        <div ref={logoRef} className="mb-10 md:mb-16" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <KeystoneLogo className="w-48 md:w-72 h-auto" />
        </div>

        <div className="overflow-hidden mb-6 md:mb-8">
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tight text-white leading-[1]"
          >
            Efficiency, Engineered.
          </h1>
        </div>

        <p
          ref={subRef}
          className="text-sm md:text-xl text-white/40 max-w-xl mb-10 md:mb-12 font-light leading-relaxed"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          Custom software, AI automation, and scalable SaaS — built for businesses that move fast.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <a
            href="mailto:hello@keystonesoftware.dev"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300 hover:scale-105 text-center"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="text-xs uppercase tracking-[0.25em] text-white/40 hover:text-white transition-colors border-b border-white/15 pb-0.5"
          >
            View Work
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/20">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
