import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We dig into your operations, pain points, and goals. Rapid discovery call → written brief → mutual agreement before any code.',
  },
  {
    num: '02',
    title: 'Design System',
    desc: 'Architecture, stack selection, and UI wireframes. We ship a working prototype before full engagement.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'AI-assisted, test-driven development. Weekly check-ins, a live staging URL throughout, and no surprise scope creep.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Deploy, hand over source code and docs, and train your team. Optional retainer for ongoing iteration.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '5rem' }}
        >
          <p className="label" style={{ marginBottom: '1rem' }}>The Playbook</p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              color: '#fff',
              lineHeight: 1.05,
            }}
          >
            How we work
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0',
          }}
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              variants={item}
              style={{
                padding: '2rem',
                borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                position: 'relative',
              }}
            >
              {/* Connecting line on desktop */}
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '2.75rem',
                    right: '-1px',
                    width: 1,
                    height: 24,
                    background: 'rgba(255,255,255,0.15)',
                  }}
                />
              )}

              <span
                style={{
                  display: 'block',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.15)',
                  marginBottom: '2rem',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {step.num}
              </span>

              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#e8e8e8',
                  marginBottom: '0.9rem',
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontSize: '0.82rem',
                  color: '#4a4a4a',
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
