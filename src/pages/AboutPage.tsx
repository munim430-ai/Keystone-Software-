import { motion } from 'framer-motion'
import StackSection from '../components/StackSection'

const line = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 64 }}>
      <section className="section">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={line} className="label" style={{ marginBottom: '1rem' }}>
              About
            </motion.p>
            <motion.h1
              variants={line}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                color: '#fff',
                lineHeight: 0.95,
                marginBottom: '4rem',
              }}
            >
              We build software<br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.25)' }}>
                that actually ships.
              </span>
            </motion.h1>

            <motion.div
              variants={container}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '4rem',
              }}
            >
              <motion.div variants={line}>
                <p className="label" style={{ marginBottom: '1.5rem', fontSize: '0.66rem' }}>The Company</p>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.8 }}>
                  Keystone Software Solutions is a product and services studio based in Dhaka, Bangladesh.
                  We're an AI-first, bootstrap-funded operation building precision tools for businesses
                  that want to automate, scale, and compete.
                </p>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.8, marginTop: '1rem' }}>
                  Started in 2024, we've shipped desktop applications, AI bots, web platforms, and
                  document automation systems — all while keeping costs near zero.
                </p>
              </motion.div>

              <motion.div variants={line}>
                <p className="label" style={{ marginBottom: '1.5rem', fontSize: '0.66rem' }}>The Founders</p>
                <div style={{ marginBottom: '2rem' }}>
                  <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '0.3rem' }}>
                    Munim — Founder & CEO
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#444', lineHeight: 1.7 }}>
                    9 years in South Korea. Runs Keystone Education Consultancy and Keystone Software
                    Solutions simultaneously. Primarily focused on automation and full-stack development.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '0.3rem' }}>
                    Nafis Fahim — Co-founder
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#444', lineHeight: 1.7 }}>
                    2 years in file processing and operations. Manages internal systems and client
                    relationships at the Gazipur branch.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={line}
              style={{
                marginTop: '4rem',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <p className="label" style={{ marginBottom: '1rem', fontSize: '0.66rem' }}>Principles</p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {[
                  'Speed-to-market over perfection',
                  'Free-tier tools where possible',
                  'AI-first execution',
                  'Ship first, polish later',
                  'Bangla-first for mass market',
                  'No external funding dependency',
                ].map(p => (
                  <p key={p} style={{ fontSize: '0.83rem', color: '#444' }}>
                    <span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '0.5rem' }}>—</span>
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StackSection />
    </div>
  )
}
