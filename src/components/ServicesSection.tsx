import { motion } from 'framer-motion'

const SERVICES = [
  {
    icon: '⬡',
    title: 'AI Automation',
    desc: 'Custom bots, pipelines, and agentic workflows powered by Groq, Claude, and open-source LLMs. We automate repetitive operations so your team focuses on what matters.',
    span: 'wide',
  },
  {
    icon: '◻',
    title: 'Desktop Applications',
    desc: 'Cross-platform desktop apps using Electron or Tauri. Offline-capable, hardware-locked, and built for distribution at scale.',
    span: 'normal',
  },
  {
    icon: '◈',
    title: 'Web Development',
    desc: 'High-performance React + TypeScript web apps deployed on Vercel. From landing pages to full-stack SaaS.',
    span: 'normal',
  },
  {
    icon: '◯',
    title: 'Mobile Apps',
    desc: 'Bangla-first Android apps targeting mass market. Offline/low-data modes, fast onboarding, phone-based login.',
    span: 'normal',
  },
  {
    icon: '▦',
    title: 'Document Automation',
    desc: 'Auto-generate DOCX, PDF, and Excel outputs from structured data. Used in education, legal, and HR workflows.',
    span: 'normal',
  },
  {
    icon: '◭',
    title: 'Consulting & Strategy',
    desc: 'Technical strategy, stack selection, and hands-on implementation for early-stage companies and agencies.',
    span: 'wide',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}
const card = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function ServicesSection() {
  return (
    <section
      className="section"
      style={{
        background: 'rgba(255,255,255,0.012)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem' }}
        >
          <p className="label" style={{ marginBottom: '1rem' }}>What We Build</p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              color: '#fff',
              lineHeight: 1.05,
              maxWidth: 600,
            }}
          >
            Software for every layer of your business
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
          }}
        >
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={card}
              className="glass"
              data-cursor
              style={{
                gridColumn: svc.span === 'wide' ? 'span 2' : 'span 1',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                minHeight: 200,
                background: i % 3 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.6)',
                transition: 'background 0.3s',
              }}
            >
              <span
                style={{
                  fontSize: '1.5rem',
                  color: 'rgba(255,255,255,0.25)',
                  lineHeight: 1,
                  fontWeight: 300,
                }}
              >
                {svc.icon}
              </span>

              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  color: '#e0e0e0',
                }}
              >
                {svc.title}
              </h3>

              <p
                style={{
                  fontSize: '0.83rem',
                  color: '#4a4a4a',
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <style>{`
          @media (max-width: 768px) {
            .bento-grid > div {
              grid-column: span 1 !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
