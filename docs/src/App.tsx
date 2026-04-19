import { motion, AnimatePresence } from 'framer-motion';
import MagneticCursor from './components/MagneticCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofStrip from './components/ProofStrip';
import Work from './components/Work';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  return (
    <div className="relative bg-black text-white selection:bg-white selection:text-black">
      <MagneticCursor />
      <SmoothScroll />

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Navbar />

          <main>
            <Hero />
            <ProofStrip />
            <Work />
            <Services />
            <Process />
            <About />

            {/* Contact CTA */}
            <section className="py-40 px-6 text-center relative overflow-hidden bg-black border-t border-white/5">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.025] rounded-full blur-[80px]" />
              </div>
              <div className="max-w-4xl mx-auto relative z-10">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-8"
                >
                  Let's build together
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-8xl font-light text-white mb-14 leading-[0.95] tracking-tight"
                >
                  Ready to build<br />
                  <span className="italic">something</span> great?
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                  <a
                    href="mailto:hello@keystonesoftware.dev"
                    className="px-10 py-5 bg-white text-black rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 hover:scale-105"
                  >
                    Start a Project
                  </a>
                  <a
                    href="https://github.com/Munim430-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 border border-white/10 rounded-full text-sm text-white/60 hover:border-white/30 hover:text-white transition-all duration-300"
                  >
                    View GitHub
                  </a>
                </motion.div>
              </div>
            </section>
          </main>

          <Footer />
        </motion.div>
      </AnimatePresence>

      {/* Grain texture overlay */}
      <div className="grain">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}
