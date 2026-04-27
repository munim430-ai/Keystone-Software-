import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PLANS = [
  {
    name: 'Starter',
    price: '$500',
    range: '– $1,500',
    desc: 'Landing pages, simple automations, and MVP prototypes.',
    features: [
      'Single-page or 3-page website',
      'One AI automation workflow',
      'Deployed & fully documented',
      '2 rounds of revisions',
      '30-day email support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$1,500',
    range: '– $5,000',
    desc: 'Full-stack builds, desktop apps, and integrated AI pipelines.',
    features: [
      'Multi-page web app or desktop app',
      'Full AI pipeline (chat, OCR, automation)',
      'Backend + database included',
      'Unlimited revisions during build',
      '90-day support retainer',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    range: '',
    desc: 'Long-term partnerships, large systems, and agency-scale builds.',
    features: [
      'Dedicated team allocation',
      'Monthly retainer billing',
      'Priority response (< 4 h)',
      'Full IP transfer',
      'On-site training sessions',
    ],
    cta: "Let's Talk",
    highlight: false,
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const card = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function PricingSection() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem' }}
        >
          <p className="label" style={{ marginBottom: '1rem' }}>Transparent Pricing</p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              color: '#fff',
              lineHeight: 1.05,
            }}
          >
            Fixed-price quotes.{' '}
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>No surprises.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
          }}
        >
          {PLANS.map(plan => (
            <motion.div
              key={plan.name}
              variants={card}
              style={{
                background: plan.highlight ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.7)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {plan.highlight && (
                <span
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    fontSize: '0.6rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '0.2rem 0.6rem',
                  }}
                >
                  Popular
                </span>
              )}

              <p className="label" style={{ fontSize: '0.66rem', marginBottom: '1rem' }}>
                {plan.name}
              </p>

              <div style={{ marginBottom: '0.5rem' }}>
                <span
                  style={{
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                    fontWeight: 300,
                    letterSpacing: '-0.04em',
                    color: '#fff',
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </span>
                {plan.range && (
                  <span style={{ fontSize: '0.88rem', color: '#444', marginLeft: '0.3rem' }}>
                    {plan.range}
                  </span>
                )}
              </div>

              <p style={{ fontSize: '0.83rem', color: '#4a4a4a', lineHeight: 1.6, marginBottom: '2rem' }}>
                {plan.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', flex: 1, marginBottom: '2.5rem' }}>
                {plan.features.map(f => (
                  <div
                    key={f}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.82rem', color: '#555' }}
                  >
                    <span style={{ color: 'rgba(255,255,255,0.18)', flexShrink: 0, marginTop: '0.05rem' }}>—</span>
                    {f}
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className={plan.highlight ? 'btn-primary' : 'btn-ghost'}
                style={{ justifyContent: 'center', fontSize: '0.83rem' }}
              >
                {plan.cta} →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.78rem', color: '#333' }}
        >
          All prices in USD · BDT pricing available · Free scoping call included with every project
        </motion.p>
      </div>
    </section>
  )
}
