import { motion } from 'framer-motion';

const pillars = [
  { title: 'Speed', description: 'We ship in weeks. Urgency is baked into every decision.' },
  { title: 'Clarity', description: 'No jargon, no fluff. Clean code, clear communication, honest timelines.' },
  { title: 'Performance', description: 'Sub-second load times and mobile-first by default — not as an afterthought.' },
];

const tools = ['React', 'TypeScript', 'Tailwind', 'GSAP', 'Lenis', 'Python', 'Node.js', 'Vite', 'Framer Motion'];

export default function About() {
  return (
    <section className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-start">
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-white tracking-tight mb-10 leading-[1.1]"
            >
              Efficiency,<br /><span className="italic">Engineered.</span>
            </motion.h2>
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

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-wrap gap-2"
            >
              {tools.map(t => (
                <span
                  key={t}
                  className="px-3 py-1.5 border border-white/8 rounded-full text-[10px] uppercase tracking-widest text-white/30"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — pillars */}
          <div className="flex flex-col gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card rounded-2xl p-8"
              >
                <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{p.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed font-light">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
