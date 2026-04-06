import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Folio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transformation Moment: Hero object fades out, document shape fades in
  const morphProgress = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const rectOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const rectScale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);

  return (
    <section ref={sectionRef} className="py-40 px-6 relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto text-center z-10 mb-24">
        <motion.span 
          style={{ opacity: morphProgress }}
          className="text-xs font-medium tracking-[0.4em] uppercase text-white/40 block mb-6"
        >
          Featured System
        </motion.span>
        <motion.h2 
          style={{ opacity: morphProgress }}
          className="text-5xl md:text-8xl font-display font-light text-white mb-10 leading-tight"
        >
          Folio — File <br />
          <span className="italic">Generation</span> Engine
        </motion.h2>
        <motion.p 
          style={{ opacity: morphProgress }}
          className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed mb-12"
        >
          A browser-based system for structured document generation and automated output workflows. Built for high-performance data transformation.
        </motion.p>
        <motion.div style={{ opacity: morphProgress }}>
          <a 
            href="https://Munim430-ai.github.io/Folio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors group"
          >
            <span className="text-sm uppercase tracking-widest border-b border-white/20 pb-1">Live System</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>

      {/* Transformation Visual (Morph Illusion) */}
      <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
        {/* The "Document" Shape that morphs in as the Hero asset fades */}
        <motion.div
          style={{ 
            opacity: rectOpacity,
            scale: rectScale,
          }}
          className="w-72 h-96 md:w-[400px] md:h-[500px] bg-white/5 border border-white/20 rounded-xl shadow-2xl relative overflow-hidden backdrop-blur-xl"
        >
          {/* Simulated Document Content - More Detailed */}
          <div className="p-10 space-y-8">
            <div className="flex justify-between items-center">
              <div className="h-4 w-32 bg-white/20 rounded" />
              <div className="h-4 w-4 bg-white/20 rounded-full" />
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-white/10 rounded" />
              <div className="h-2 w-full bg-white/10 rounded" />
              <div className="h-2 w-full bg-white/10 rounded" />
              <div className="h-2 w-3/4 bg-white/10 rounded" />
            </div>
            <div className="pt-12 grid grid-cols-3 gap-6">
              <div className="h-32 bg-white/5 rounded-lg border border-white/10" />
              <div className="h-32 bg-white/5 rounded-lg border border-white/10" />
              <div className="h-32 bg-white/5 rounded-lg border border-white/10" />
            </div>
            <div className="pt-6 flex gap-4">
              <div className="h-10 w-24 bg-white/10 rounded-full" />
              <div className="h-10 w-24 bg-white/5 rounded-full" />
            </div>
          </div>
          
          {/* Scanning Effect - More Cinematic */}
          <motion.div 
            animate={{ top: ['-10%', '110%', '-10%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 w-full h-[100px] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none"
          />
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 w-full h-[1px] bg-white/40 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 3 + i, 
              repeat: Infinity, 
              delay: i * 0.5 
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
