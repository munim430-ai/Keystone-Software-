import { motion } from 'framer-motion';

const pillars = [
  { title: 'Speed', description: 'We ship in weeks. Urgency is baked into every decision.' },
  { title: 'Clarity', description: 'No jargon, no fluff. Clean code, clear communication, honest timelines.' },
  { title: 'Performance', description: 'Sub-second load times and mobile-first by default — not as an afterthought.' },
];

const tools = ['React', 'TypeScript', 'Tailwind', 'GSAP', 'Lenis', 'Python', 'Node.js', 'Vite', 'Framer Motion'];

export default function About() {
  return (
    <section className="py-24 md:py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Workspace image banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-20 h-56 md:h-80"
        >
          <img
            src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=1400&q=75&auto=format&fit=crop"
            alt="Dark developer workspace"
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">About us</p>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight max-w-lg">
              A studio that ships,<br />
              <span className="italic">not promises.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/30 block mb-8"
            >
              Philosophy
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light text-white tracking-tight mb-8 leading-[1.1]"
            >
              Efficiency,<br /><span className="italic">Engineered.</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/40 font-light leading-relaxed text-base mb-6"
            >
              Keystone Software Solutions builds digital products for the Bangladeshi market and premium automation tools for global clients — all bootstrapped, all shipped fast.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-white/25 font-light leading-relaxed text-sm"
            >
              We operate with zero external funding and a bias toward execution. Speed to market is not a compromise — it's the strategy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-wrap gap-2"
            >
              {tools.map(t => (
                <span key={t} className="px-3 py-1.5 border border-white/8 rounded-full text-[10px] uppercase tracking-widest text-white/30">
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — pillars */}
          <div className="flex flex-col gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card rounded-2xl p-7 flex gap-6 items-start group hover:border-white/15 transition-colors"
              >
                <span className="text-3xl font-light text-white/8 leading-none select-none mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2 tracking-tight">{p.title}</h3>
                  <p className="text-sm text-white/35 leading-relaxed font-light">{p.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Bangladesh market image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden h-40"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=70&auto=format&fit=crop"
                alt="Data and analytics dashboard"
                className="w-full h-full object-cover opacity-40"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center px-7">
                <p className="text-sm text-white/60 font-light max-w-[200px] leading-relaxed">
                  Built for the<br /><span className="text-white font-medium">Bangladeshi market</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
