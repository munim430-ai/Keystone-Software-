import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '/work',     label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 500,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
          background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.06)' : 'transparent'}`,
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#fff',
          }}
        >
          Keystone
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: 'flex',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="hidden-mobile"
        >
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              to={href}
              style={{
                fontSize: '0.83rem',
                letterSpacing: '0.04em',
                color: location.pathname === href ? '#fff' : '#5a5a5a',
                transition: 'color 0.25s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => {
                if (location.pathname !== href) e.currentTarget.style.color = '#5a5a5a'
              }}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="btn-primary"
            style={{ fontSize: '0.78rem', padding: '0.5rem 1.2rem' }}
          >
            Start a Project →
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '1.4rem',
            lineHeight: 1,
            display: 'none',
          }}
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 64, left: 0, right: 0,
              background: 'rgba(0,0,0,0.96)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              zIndex: 490,
              padding: '1.5rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                style={{
                  fontSize: '1.1rem',
                  color: location.pathname === href ? '#fff' : '#666',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary"
              style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
            >
              Start a Project →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
      `}</style>
    </>
  )
}
