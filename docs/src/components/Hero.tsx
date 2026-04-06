import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import KeystoneObject from './KeystoneObject';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] 
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 2, 
        ease: "easeOut" 
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden perspective-1000"
    >
      {/* Background Ambient Light */}
      <motion.div 
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" 
      />
      
      <motion.div 
        style={{ opacity, scale, y }}
        className="z-10 flex flex-col items-center text-center max-w-5xl"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span 
            variants={itemVariants}
            className="text-xs md:text-sm font-medium tracking-[0.4em] uppercase text-white/40 mb-8"
          >
            Keystone Software Solutions
          </motion.span>
          
          <motion.h1 
            variants={titleVariants}
            className="text-6xl md:text-9xl font-display font-light tracking-tight text-white mb-10 leading-[0.85] relative"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
                  "0 0 4px #fff, 0 0 7px #fff, 0 0 13px #fff, 0 0 25px #0fa, 0 0 50px #0fa, 0 0 60px #0fa, 0 0 70px #0fa, 0 0 100px #0fa",
                  "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
                ],
                x: [0, -2, 2, -1, 0],
                y: [0, 1, -1, 0.5, 0],
                skewX: [0, -1, 1, -0.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block"
            >
              Architecting
            </motion.span>
            <br />
            <motion.span 
              animate={{
                textShadow: [
                  "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #f0a, 0 0 82px #f0a, 0 0 92px #f0a, 0 0 102px #f0a, 0 0 151px #f0a",
                  "0 0 4px #fff, 0 0 7px #fff, 0 0 13px #fff, 0 0 25px #f0a, 0 0 50px #f0a, 0 0 60px #f0a, 0 0 70px #f0a, 0 0 100px #f0a",
                  "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #f0a, 0 0 82px #f0a, 0 0 92px #f0a, 0 0 102px #f0a, 0 0 151px #f0a",
                ],
                x: [0, 2, -2, 1, 0],
                y: [0, -1, 1, -0.5, 0],
                skewX: [0, 1, -1, 0.5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5
              }}
              className="italic font-normal inline-block"
            >
              Intelligent
            </motion.span>{" "}
            <motion.span
              animate={{
                textShadow: [
                  "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0af, 0 0 82px #0af, 0 0 92px #0af, 0 0 102px #0af, 0 0 151px #0af",
                  "0 0 4px #fff, 0 0 7px #fff, 0 0 13px #fff, 0 0 25px #0af, 0 0 50px #0af, 0 0 60px #0af, 0 0 70px #0af, 0 0 100px #0af",
                  "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0af, 0 0 82px #0af, 0 0 92px #0af, 0 0 102px #0af, 0 0 151px #0af",
                ],
                x: [0, -1, 1, -0.5, 0],
                y: [0, 0.5, -0.5, 0.2, 0],
                skewX: [0, -0.5, 0.5, -0.2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
              className="inline-block"
            >
              Systems
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl text-white/50 max-w-2xl mb-16 font-light leading-relaxed"
          >
            Custom software, scalable SaaS platforms, and AI-driven automation built for the next generation of digital infrastructure.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex items-center gap-8">
            <button className="px-10 py-5 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105">
              Start a Project
            </button>
            <a href="#work" className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors border-b border-white/20 pb-1">
              View Folio
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="relative mt-20 md:mt-12"
      >
        <KeystoneObject />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
