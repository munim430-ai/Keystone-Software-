import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Korea Visa Form',
    category: 'Document Automation',
    description: 'Windows desktop app that automates Korean D-4 student visa applications. Processes Excel data, embeds photos, and generates completed forms and parental consent certificates in bulk.',
    tech: ['Python', 'Excel', 'DOCX', 'Windows'],
    href: 'https://munim430-ai.github.io/visa_form/',
    live: true,
    image: `${import.meta.env.BASE_URL}screenshots/visa-form.png`,
    gradient: 'from-white/[0.07] to-white/[0.02]',
  },
  {
    title: 'Keystone Education',
    category: 'Agency Website',
    description: 'Premium study-abroad consultancy website with motion-forward design, smooth scroll, and a clean glassmorphism UI — built to convert international students.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    href: 'https://keystone-website-main.vercel.app/',
    live: true,
    image: `${import.meta.env.BASE_URL}screenshots/keystone-edu.png`,
    gradient: 'from-white/[0.08] to-white/[0.02]',
  },
  {
    title: 'Folio',
    category: 'Document Automation',
    description: 'Offline university application form generator. Imports student data from Excel, embeds photos, and exports filled DOCX files in bulk — zero internet required.',
    tech: ['Python', 'Excel', 'DOCX', 'Offline'],
    href: 'https://munim430-ai.github.io/Folio/',
    live: true,
    image: `${import.meta.env.BASE_URL}screenshots/folio.png`,
    gradient: 'from-white/[0.06] to-white/[0.02]',
  },
  {
    title: 'Creative Global',
    category: 'Creative Platform',
    description: 'HTML-based creative platform built for global reach with a clean, minimal design system and fast page performance.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/Munim430-ai/Creative-Global-',
    live: false,
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=700&q=70&auto=format&fit=crop',
    gradient: 'from-white/[0.05] to-white/[0.01]',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
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
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/30 hover:text-white transition-colors group self-start md:self-auto"
          >
            View GitHub <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="group block"
            >
              <div className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 bg-gradient-to-br ${project.gradient}`}>
                {/* Project image preview */}
                <div className="relative h-44 md:h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
                  {project.live && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] uppercase tracking-widest text-emerald-400/80">Live</span>
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-7 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">{project.category}</span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300 shrink-0">
                      <ArrowUpRight size={14} className="text-white/50 group-hover:text-black transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 border border-white/8 rounded-full text-[10px] uppercase tracking-widest text-white/25">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
