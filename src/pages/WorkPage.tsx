import { motion } from 'framer-motion'
import WorkSection from '../components/WorkSection'

export default function WorkPage() {
  return (
    <div style={{ paddingTop: 64 }}>
      <div className="container section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '5rem' }}
        >
          <p className="label" style={{ marginBottom: '1rem' }}>Portfolio</p>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              color: '#fff',
              lineHeight: 0.95,
            }}
          >
            All Work
          </h1>
        </motion.div>
      </div>
      <WorkSection />
    </div>
  )
}
