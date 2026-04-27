import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function Hero() {
  const wrapRef = useRef<HTMLElement>(null)

  // Subtle particle background
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = canvas.width  = window.innerWidth
    let H = canvas.height = window.innerHeight
    let animId: number

    const onResize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    // Sparse floating dots
    type Particle = { x: number; y: number; vy: number; size: number; opacity: number }
    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x:       Math.random() * W,
      y:       Math.random() * H,
      vy:      -0.15 - Math.random() * 0.25,
      size:    Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.25 + 0.05,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        ctx.fill()
        p.y += p.vy
        if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W }
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // GSAP parallax on hero text
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    // Subtle text parallax on scroll
    gsap.to(wrap, {
      y: 80,
      opacity: 0.2,
      scrollTrigger: {
        trigger: wrap,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  const sentence = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }
  const line = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      ref={wrapRef}
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />

      {/* Grid overlay */}
      <div
        className="grid-bg"
        style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }}
      />

      {/* Radial glow top */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow label */}
          <motion.p variants={line} className="label" style={{ marginBottom: '2.5rem' }}>
            Keystone Software Solutions — Dhaka, Bangladesh
          </motion.p>

          {/* Main headline */}
          <motion.h1
            variants={sentence}
            style={{
              fontSize: 'clamp(3.2rem, 8vw, 7.5rem)',
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              color: '#fff',
              maxWidth: '900px',
            }}
          >
            <motion.span variants={line} style={{ display: 'block' }}>Efficiency,</motion.span>
            <motion.span
              variants={line}
              style={{
                display: 'block',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.35)',
              }}
            >
              Engineered.
            </motion.span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={line}
            style={{
              marginTop: '2.5rem',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: '#555',
              maxWidth: '460px',
              lineHeight: 1.7,
            }}
          >
            Precision software and AI-powered automation
            for ambitious businesses in Bangladesh and beyond.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={line}
            style={{
              marginTop: '3rem',
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Link to="/work" className="btn-primary">
              View Work →
            </Link>
            <Link to="/contact" className="btn-ghost">
              Start a Project
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span className="label" style={{ fontSize: '0.65rem' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.15)' }}
        />
      </motion.div>
    </section>
  )
}
