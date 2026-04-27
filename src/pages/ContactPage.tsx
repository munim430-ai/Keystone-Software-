import { useState } from 'react'
import { motion } from 'framer-motion'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.025)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: '#fff',
  padding: '0.9rem 1rem',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: '"Geist Variable", sans-serif',
  transition: 'border-color 0.2s',
  cursor: 'none',
}

const SERVICES = [
  'AI Automation',
  'Desktop Application',
  'Web Development',
  'Mobile App',
  'Document Automation',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    // In production, wire to your preferred form backend (Formspree, Supabase, etc.)
    const subject = `Project Inquiry — ${form.service || 'General'}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    window.open(`mailto:hello@keystonesoftware.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
    setSent(true)
  }

  const line = {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }

  return (
    <div style={{ paddingTop: 64 }}>
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '6rem',
              alignItems: 'start',
            }}
          >
            {/* Left — Info */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={line} className="label" style={{ marginBottom: '1rem' }}>
                Get in Touch
              </motion.p>
              <motion.h1
                variants={line}
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.04em',
                  color: '#fff',
                  lineHeight: 0.95,
                  marginBottom: '2rem',
                }}
              >
                Let's build<br />
                <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.25)' }}>
                  something.
                </span>
              </motion.h1>

              <motion.p variants={line} style={{ fontSize: '0.9rem', color: '#4a4a4a', lineHeight: 1.8, marginBottom: '3rem' }}>
                Fill the form or reach us directly. We respond to all enquiries
                within 24 hours and quote within 48 hours.
              </motion.p>

              <motion.div variants={container} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'WhatsApp', value: '+880 1941 646 278', href: 'https://wa.me/8801941646278' },
                  { label: 'Email',    value: 'hello@keystonesoftware.com', href: 'mailto:hello@keystonesoftware.com' },
                  { label: 'Location', value: 'Dhaka, Bangladesh', href: null },
                ].map(({ label, value, href }) => (
                  <motion.div key={label} variants={line}>
                    <p className="label" style={{ fontSize: '0.64rem', marginBottom: '0.3rem' }}>{label}</p>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontSize: '0.9rem',
                          color: '#666',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#666')}
                      >
                        {value}
                      </a>
                    ) : (
                      <p style={{ fontSize: '0.9rem', color: '#666' }}>{value}</p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass"
              style={{ padding: '2.5rem' }}
            >
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</p>
                  <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>Message sent</h3>
                  <p style={{ fontSize: '0.85rem', color: '#555' }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 style={{ fontSize: '1rem', color: '#888', marginBottom: '0.5rem' }}>Project Brief</h3>

                  <input
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e  => (e.target.style.borderColor = 'rgba(255,255,255,0.22)')}
                    onBlur={e   => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />

                  <input
                    placeholder="Email address"
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={inputStyle}
                    onFocus={e  => (e.target.style.borderColor = 'rgba(255,255,255,0.22)')}
                    onBlur={e   => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />

                  <select
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    style={{ ...inputStyle, appearance: 'none' }}
                    onFocus={e  => (e.target.style.borderColor = 'rgba(255,255,255,0.22)')}
                    onBlur={e   => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  >
                    <option value="" disabled>Service needed</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>

                  <textarea
                    placeholder="Describe your project..."
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e  => (e.target.style.borderColor = 'rgba(255,255,255,0.22)')}
                    onBlur={e   => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />

                  <button
                    onClick={handleSubmit}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem', padding: '0.85rem' }}
                  >
                    Send Message →
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
