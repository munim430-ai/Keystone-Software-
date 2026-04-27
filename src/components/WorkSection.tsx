import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    id: 'folio',
    name: 'Folio',
    type: 'Desktop Application',
    year: '2025–26',
    desc: 'Offline university application form generator. Excel student data → auto-filled DOCX with photos. Built for education agencies across Bangladesh.',
    tags: ['Electron', 'Node.js', 'docxtemplater'],
    url: 'https://github.com/Munim430-ai/Folio',
    accent: '#2a2a2a',
  },
  {
    id: 'keystone-wa',
    name: 'WhatsApp AI Bot',
    type: 'AI Automation',
    year: '2025',
    desc: '24/7 AI-powered WhatsApp bot for Keystone Education Consultancy. Handles lead qualification, multilingual replies, follow-ups, and daily summaries.',
    tags: ['Node.js', 'Groq API', 'Oracle Cloud'],
    url: null,
    accent: '#1a1a1a',
  },
  {
    id: 'keystone-site',
    name: 'Keystone Website',
    type: 'Web Development',
    year: '2025',
    desc: 'Full-stack React website for Keystone Education Consultancy. Features animated 3D globe with Dhaka flight paths and multi-country service showcase.',
    tags: ['React', 'TypeScript', 'Three.js', 'Vercel'],
    url: 'https://github.com/Munim430-ai/keystone-website',
    accent: '#1d1d1d',
  },
  {
    id: 'documetrix',
    name: 'DocuMetrix',
    type: 'Desktop Application',
    year: '2025',
    desc: 'Student document validation system with OCR, passport scanning, and auto-form-filling. Built with Tauri + React + Python.',
    tags: ['Tauri', 'Python', 'Tesseract OCR'],
    url: null,
    accent: '#222',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const card = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function ProjectCard({ project }: { project: typeof PROJECTS[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      variants={card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass"
      style={{
        borderRadius: '2px',
        overflow: 'hidden',
        transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Color block top */}
      <div
        style={{
          height: 180,
          background: `linear-gradient(135deg, ${project.accent}, #0a0a0a)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span
          style={{
            fontSize: '2.5rem',
            fontWeight: 200,
            letterSpacing: '-0.04em',
            color: 'rgba(255,255,255,0.08)',
            userSelect: 'none',
          }}
        >
          {project.name}
        </span>
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <span className="label" style={{ fontSize: '0.66rem' }}>{project.type}</span>
          <span className="label" style={{ fontSize: '0.66rem' }}>{project.year}</span>
        </div>

        <h3
          style={{
            fontSize: '1.15rem',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            marginBottom: '0.7rem',
            color: '#fff',
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            fontSize: '0.83rem',
            color: '#555',
            lineHeight: 1.65,
            marginBottom: '1.2rem',
          }}
        >
          {project.desc}
        </p>

        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: '0.68rem',
                padding: '0.2rem 0.6rem',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#555',
                letterSpacing: '0.04em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.06em',
              color: hovered ? '#fff' : '#444',
              transition: 'color 0.25s',
            }}
          >
            View on GitHub →
          </a>
        ) : (
          <span style={{ fontSize: '0.78rem', color: '#333', letterSpacing: '0.06em' }}>
            Private / Internal
          </span>
        )}
      </div>
    </motion.article>
  )
}

export default function WorkSection() {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem' }}
        >
          <p className="label" style={{ marginBottom: '1rem' }}>Selected Work</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#fff',
                lineHeight: 1.05,
              }}
            >
              Things we've built
            </h2>
            <Link
              to="/work"
              style={{
                fontSize: '0.82rem',
                color: '#555',
                letterSpacing: '0.06em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555')}
            >
              View all work →
            </Link>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {PROJECTS.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
