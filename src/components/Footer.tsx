import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const LINKS = [
  { href: '/work',     label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

const SOCIALS = [
  { href: 'https://github.com/munim430-ai', label: 'GitHub' },
  { href: 'https://wa.me/8801941646278',    label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '4rem 0 3rem',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '2rem',
              marginBottom: '3rem',
            }}
          >
            {/* Brand */}
            <div>
              <p
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: '0.5rem',
                }}
              >
                Keystone
              </p>
              <p className="label" style={{ fontSize: '0.68rem' }}>Software Solutions</p>
              <p style={{ fontSize: '0.8rem', color: '#333', marginTop: '1rem' }}>
                Efficiency, Engineered.
              </p>
            </div>

            {/* Nav links */}
            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
              <div>
                <p className="label" style={{ marginBottom: '1rem', fontSize: '0.64rem' }}>Pages</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {LINKS.map(({ href, label }) => (
                    <Link
                      key={href}
                      to={href}
                      style={{
                        fontSize: '0.82rem',
                        color: '#444',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#444')}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="label" style={{ marginBottom: '1rem', fontSize: '0.64rem' }}>Connect</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {SOCIALS.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.82rem',
                        color: '#444',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#444')}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href="mailto:hello@keystonesoftware.com"
                    style={{
                      fontSize: '0.82rem',
                      color: '#444',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#444')}
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider" style={{ marginBottom: '2rem' }} />

          {/* Bottom row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <p className="label" style={{ fontSize: '0.66rem' }}>
              © {new Date().getFullYear()} Keystone Software Solutions. Dhaka, Bangladesh.
            </p>
            <p className="label" style={{ fontSize: '0.66rem' }}>
              Built with React · Deployed on Vercel
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
