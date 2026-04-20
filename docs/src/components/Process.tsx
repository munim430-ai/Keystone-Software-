import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Deep-dive into your goals, constraints, and users. We define the problem before touching code.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=65&auto=format&fit=crop',
    alt: 'Discovery meeting',
  },
  {
    number: '02',
    title: 'Design System',
    description: 'Architecture decisions, component library, and technical blueprint — built to last.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=65&auto=format&fit=crop',
    alt: 'Design wireframes',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Iterative sprints with real deliverables each week. You see progress, not promises.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=65&auto=format&fit=crop',
    alt: 'Coding and building',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Ship fast, monitor hard. Post-launch support and iteration included.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=65&auto=format&fit=crop',
    alt: 'Launch and deploy',
  },
];

export default function Process() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/30 block mb-4"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-white tracking-tight"
          >
            A process built for <span className="italic">speed.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-white/5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="px-0 md:px-8 py-0 first:pl-0 last:pr-0 group"
            >
              {/* Step image */}
              <div className="relative rounded-xl overflow-hidden mb-6 h-36">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                <p className="absolute bottom-3 left-4 text-5xl font-light text-white/10 leading-none select-none">
                  {step.number}
                </p>
              </div>

              <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{step.title}</h3>
              <p className="text-sm text-white/35 leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
