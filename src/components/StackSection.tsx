import { motion } from 'framer-motion'

const STACK = [
  { name: 'React 19',      cat: 'Frontend'    },
  { name: 'TypeScript',    cat: 'Language'    },
  { name: 'Node.js',       cat: 'Backend'     },
  { name: 'Python',        cat: 'AI / ML'     },
  { name: 'Electron',      cat: 'Desktop'     },
  { name: 'Tauri',         cat: 'Desktop'     },
  { name: 'GSAP',          cat: 'Animation'   },
  { name: 'Framer Motion', cat: 'Animation'   },
  { name: 'Three.js',      cat: '3D'          },
  { name: 'Vercel',        cat: 'Deploy'      },
  { name: 'Oracle Cloud',  cat: 'Infra'       },
  { name: 'Groq API',      cat: 'LLM'        },
  { name: 'Claude API',    cat: 'LLM'        },
  { name: 'PostgreSQL',    cat: 'Database'    },
  { name: 'Supabase',      cat: 'BaaS'        },
  { name: 'Tailwind CSS',  cat: 'Styling'     },
  { name: 'Vite',          cat: 'Tooling'     },
  { name: 'docxtemplater', cat: 'Documents'   },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.05 } },
}
const chip = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function StackSection() {
  return (
    <section
      className="section"
      style={{
        background: 'rgba(255,255,255,0.012)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p className="label" style={{ marginBottom: '1rem' }}>Capabilities</p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              color: '#fff',
              lineHeight: 1.05,
            }}
          >
            Built with the right tools
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          {STACK.map(({ name, cat }) => (
            <motion.div
              key={name}
              variants={chip}
              data-cursor
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.5rem 1rem',
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.02)',
                transition: 'border-color 0.25s, background 0.25s',
                cursor: 'none',
              }}
              whileHover={{ borderColor: 'rgba(255,255,255,0.18)', backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              <span style={{ fontSize: '0.82rem', color: '#bbb' }}>{name}</span>
              <span
                style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#333',
                  borderLeft: '1px solid rgba(255,255,255,0.08)',
                  paddingLeft: '0.6rem',
                }}
              >
                {cat}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
