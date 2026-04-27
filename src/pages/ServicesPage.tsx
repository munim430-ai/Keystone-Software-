import { motion } from 'framer-motion'
import ServicesSection from '../components/ServicesSection'
import ProcessSection from '../components/ProcessSection'

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 64 }}>
      <div className="container section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '2rem' }}
        >
          <p className="label" style={{ marginBottom: '1rem' }}>What We Offer</p>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              color: '#fff',
              lineHeight: 0.95,
            }}
          >
            Services
          </h1>
        </motion.div>
      </div>
      <ServicesSection />
      <ProcessSection />
    </div>
  )
}
