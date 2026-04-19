import { motion } from 'framer-motion';

const stats = [
  { value: '5+', label: 'Projects Shipped' },
  { value: '$0', label: 'External Funding' },
  { value: '100%', label: 'Bootstrap Built' },
  { value: '2×', label: 'Faster Than Agency' },
  { value: 'BD-first', label: 'Market Focus' },
];

export default function ProofStrip() {
  return (
    <section className="py-16 px-6 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-10 md:gap-0"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex-1 min-w-[140px] text-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              >
                <p className="text-3xl md:text-4xl font-light text-white tracking-tight mb-1">{s.value}</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">{s.label}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
