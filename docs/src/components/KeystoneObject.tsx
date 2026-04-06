import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function KeystoneObject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Scroll interactions for depth illusion
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.8, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  
  // Individual layer transforms for parallax effect
  const layer1Rotate = useTransform(scrollYProgress, [0, 1], [-15, -45]);
  const layer2Rotate = useTransform(scrollYProgress, [0, 1], [10, 40]);
  const layer3Z = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div ref={containerRef} className="relative w-72 h-72 md:w-[500px] md:h-[500px] flex items-center justify-center perspective-2000">
      <motion.div
        style={{ scale, y, opacity, rotateX, rotateY }}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Complex Layered Geometric Cluster */}
        <motion.div 
          animate={{ 
            y: [0, -12, 0],
            rotateY: [-5, 5, -5],
            rotateX: [2, -2, 2]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Background Layer - Large Blurred Shape */}
          <div className="absolute w-[80%] h-[80%] bg-white/5 rounded-full blur-3xl" />

          {/* Layer 1 - Deepest Card */}
          <motion.div 
            style={{ translateZ: -100, rotate: layer1Rotate }}
            className="absolute w-48 h-64 md:w-64 md:h-80 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl -translate-x-12"
          />

          {/* Layer 2 - Middle Card */}
          <motion.div 
            style={{ translateZ: -50, rotate: layer2Rotate }}
            className="absolute w-48 h-64 md:w-64 md:h-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl translate-x-8 translate-y-4"
          />

          {/* Layer 3 - Main Central Keystone */}
          <motion.div 
            style={{ translateZ: layer3Z }}
            className="relative z-10 w-56 h-72 md:w-72 md:h-96 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.1)] overflow-hidden flex items-center justify-center"
          >
            {/* Inner Details */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]" />
            <div className="w-[80%] h-[80%] border border-white/10 rounded-xl grid grid-cols-3 grid-rows-4 opacity-20">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-[0.5px] border-white/20" />
              ))}
            </div>
            
            {/* Central Core Glow */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-24 h-24 bg-white/20 rounded-full blur-2xl"
            />
          </motion.div>

          {/* Layer 4 - Front Floating Elements */}
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              x: [0, -10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 md:top-20 md:left-20 w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-lg border border-white/40 rounded-lg rotate-[-20deg] z-20"
          />
          
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              x: [0, 15, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-20 h-20 md:w-32 md:h-32 bg-white/5 backdrop-blur-md border border-white/20 rounded-full z-20"
          />

          {/* Orbiting Rings */}
          <div className="absolute w-[140%] h-[140%] border border-white/5 rounded-full rotateX-70 pointer-events-none" />
          <motion.div 
            style={{ rotate: orbitRotate }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[120%] h-[120%] border-t border-white/10 rounded-full pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
