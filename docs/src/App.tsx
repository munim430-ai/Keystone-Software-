/**
 * Keystone Software Solutions - Premium Landing Page
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Folio from './components/Folio';
import Work from './components/Work';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  return (
    <div className="relative bg-background text-foreground selection:bg-white selection:text-black">
      <SmoothScroll />
      
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Navbar />
          
          <main>
            <Hero />
            <Services />
            <Folio />
            <Work />
            
            {/* Contact CTA Section */}
            <section className="py-40 px-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
              <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-8xl font-display font-light text-white mb-12 leading-tight"
                >
                  Ready to build <br />
                  <span className="italic">something</span> great?
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <button className="group relative px-12 py-6 bg-white text-black rounded-full font-medium overflow-hidden transition-all duration-500 hover:pr-16">
                    <span className="relative z-10">Get in Touch</span>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      →
                    </div>
                  </button>
                </motion.div>
              </div>
            </section>
          </main>

          <Footer />
        </motion.div>
      </AnimatePresence>

      {/* Global Grain Overlay for Premium Texture */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}
