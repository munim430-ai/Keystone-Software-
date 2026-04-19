import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import KeystoneLogo from '../assets/KeystoneLogo';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const logo = logoRef.current;
    const headline = headlineRef.current;
    if (!section || !logo || !headline) return;

    // Hide headline before split to prevent layout flash
    gsap.set(headline, { visibility: 'hidden' });
    const split = new SplitType(headline, { types: 'chars,words' });
    gsap.set(headline, { visibility: 'visible' });
    gsap.set(split.chars, { y: '110%', opacity: 0 });
    gsap.to(split.chars, {
      y: '0%',
      opacity: 1,
      duration: 0.9,
      stagger: 0.025,
      ease: 'power4.out',
      delay: 0.4,
    });

    gsap.fromTo(
      [subRef.current, ctaRef.current],
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 1.1 }
    );

    // Logo morph: pin section, shrink logo toward nav position on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=600',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(logo, {
      scale: 0.22,
      x: () => -window.innerWidth / 2 + 120,
      y: () => -(section.offsetHeight / 2) + 32,
      ease: 'none',
    });

    tl.to(
      [headline, subRef.current, ctaRef.current],
      { opacity: 0, y: -40, ease: 'none' },
      0
    );

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full">
        <div ref={logoRef} className="mb-16 origin-center">
          <KeystoneLogo className="w-64 md:w-80 h-auto" />
        </div>

        <div className="overflow-hidden mb-8">
          <h1
            ref={headlineRef}
            className="text-5xl md:text-8xl font-light tracking-tight text-white leading-[1]"
          >
            Efficiency, Engineered.
          </h1>
        </div>

        <p
          ref={subRef}
          className="text-base md:text-xl text-white/40 max-w-xl mb-12 font-light leading-relaxed"
        >
          Custom software, AI automation, and scalable SaaS — built for businesses that move fast.
        </p>

        <div ref={ctaRef} className="flex items-center gap-8">
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-black rounded-full text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300 hover:scale-105"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/20">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
