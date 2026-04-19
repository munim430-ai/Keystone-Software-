import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Folio',
    category: 'Document Automation',
    description: 'Offline university application form generator. Excel data → filled DOCX with photos. Zero internet required.',
    tech: ['Python', 'Excel', 'DOCX'],
    href: 'https://github.com/Munim430-ai/Folio',
    gradient: 'from-white/[0.06] to-white/[0.02]',
  },
  {
    title: 'Keystone Website',
    category: 'Agency Website',
    description: 'Premium TypeScript agency site with motion-forward design, smooth scroll, and glassmorphism UI.',
    tech: ['TypeScript', 'React', 'Tailwind'],
    href: 'https://github.com/Munim430-ai/keystone-website',
    gradient: 'from-white/[0.08] to-white/[0.02]',
  },
  {
    title: 'Creative Global',
    category: 'Creative Platform',
    description: 'HTML-based creative platform built for global reach with a clean, minimal design system.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/Munim430-ai/Creative-Global-',
    gradient: 'from-white/[0.06] to-white/[0.02]',
  },
  {
    title: 'FCP',
    category: 'Web Project',
    description: 'Fast, focused HTML project demonstrating clean structure and rapid deployment methodology.',
    tech: ['HTML', 'CSS'],
    href: 'https://github.com/Munim430-ai/Fcp',
    gradient: 'from-white/[0.05] to-white/[0.01]',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/30 block mb-4"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-light text-white tracking-tight"
            >
              Built to <span className="italic">last.</span>
            </motion.h2>
          </div>
          <motion.a
            href="https://github.com/Munim430-ai"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/30 hover:text-white transition-colors group"
          >
            View GitHub <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="group block"
            >
              <div className={`glass-card rounded-2xl p-8 md:p-10 transition-all duration-500 bg-gradient-to-br ${project.gradient}`}>
                {/* Top row */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">{project.category}</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                    <ArrowUpRight size={14} className="text-white/50 group-hover:text-black transition-colors" />
                  </div>
                </div>

                {/* Project name */}
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-white/35 leading-relaxed mb-8 font-light">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 border border-white/8 rounded-full text-[10px] uppercase tracking-widest text-white/25">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
