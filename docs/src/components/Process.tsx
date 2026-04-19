import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Deep-dive into your goals, constraints, and users. We define the problem before touching code.',
  },
  {
    number: '02',
    title: 'Design System',
    description: 'Architecture decisions, component library, and technical blueprint — built to last.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Iterative sprints with real deliverables each week. You see progress, not promises.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Ship fast, monitor hard. Post-launch support and iteration included.',
  },
];

export default function Process() {
  return (
    <section id="about" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:divide-x divide-white/5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0 border-b md:border-b-0 border-white/5 last:border-0"
            >
              <p className="text-6xl font-light text-white/8 mb-8 leading-none">{step.number}</p>
              <h3 className="text-xl font-medium text-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-sm text-white/35 leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
