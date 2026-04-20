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
  const logoCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    gsap.set(headline, { visibility: 'hidden' });
    const split = new SplitType(headline, { types: 'chars,words' });
    gsap.set(headline, { visibility: 'visible' });
    gsap.set(split.chars, { y: '110%', opacity: 0 });

    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .to(split.chars, { y: '0%', opacity: 1, duration: 0.9, stagger: 0.022, ease: 'power4.out' }, '-=0.4')
      .to([subRef.current, ctaRef.current], { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }, '-=0.4');

    // Gentle float animation on logo
    gsap.to(logoCardRef.current, {
      y: -10,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    return () => { split.revert(); tl.kill(); };
  }, []);

  // 3D tilt on mouse move over logo
  const handleLogoMouseMove = (e: React.MouseEvent) => {
    const rect = logoCardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    gsap.to(logoCardRef.current, {
      rotateX: -y * 18,
      rotateY: x * 18,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 800,
    });
  };

  const handleLogoMouseLeave = () => {
    gsap.to(logoCardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-black overflow-hidden">

      {/* Liquid glass blob background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="liq-blob liq-1" />
        <div className="liq-blob liq-2" />
        <div className="liq-blob liq-3" />
        <div className="liq-blob liq-4" />
        <div className="liq-blob liq-5" />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 25%, #000 100%)', zIndex: 1 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full">

        {/* Logo with 3D tilt + glow */}
        <div
          ref={logoRef}
          className="mb-10 md:mb-16"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <div
            ref={logoCardRef}
            className="logo-3d-card inline-block cursor-pointer"
            onMouseMove={handleLogoMouseMove}
            onMouseLeave={handleLogoMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <KeystoneLogo className="w-48 md:w-72 h-auto logo-glow" />
          </div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/20">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
