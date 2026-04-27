import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section
      className="section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background radial gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label" style={{ marginBottom: '2rem' }}>Start Today</p>

          <h2
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: '#fff',
              marginBottom: '1.5rem',
            }}
          >
            Ready to build<br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.3)',
              }}
            >
              something real?
            </span>
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: '#555',
              maxWidth: 420,
              margin: '2rem auto',
              lineHeight: 1.7,
            }}
          >
            Free first call. No commitment. We'll scope your project,
            propose a stack, and send you a fixed-price quote within 48 hours.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '2.5rem',
            }}
          >
            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.9rem 2rem' }}>
              Book a Free Call →
            </Link>
            <a
              href="https://wa.me/8801941646278"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontSize: '0.9rem', padding: '0.9rem 2rem' }}
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
