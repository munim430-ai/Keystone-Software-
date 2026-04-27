import { motion } from 'framer-motion'

const STATS = [
  { value: '10+',       label: 'Projects Shipped' },
  { value: 'AI-First',  label: 'Methodology' },
  { value: '$0',        label: 'External Funding' },
  { value: '3×',        label: 'Faster Delivery' },
  { value: 'BD + KR',   label: 'Primary Markets' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Proof() {
  return (
    <section
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '4rem 0',
        overflow: 'hidden',
      }}
    >
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '2rem',
        }}
      >
        {STATS.map(({ value, label }) => (
          <motion.div
            key={label}
            variants={item}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              padding: '0 1rem',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#fff',
                lineHeight: 1,
              }}
            >
              {value}
            </span>
            <span className="label" style={{ fontSize: '0.68rem' }}>{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
