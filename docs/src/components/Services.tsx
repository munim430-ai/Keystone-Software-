import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Layers, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    title: 'Custom Software',
    description: 'Tailored solutions engineered to solve complex business challenges with precision, scale, and zero bloat.',
    icon: Code2,
    size: 'large',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=60&auto=format&fit=crop',
  },
  {
    title: 'AI Automation',
    description: 'Intelligent agents and ML pipelines that eliminate manual overhead and compound over time.',
    icon: Cpu,
    size: 'large',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=60&auto=format&fit=crop',
  },
  {
    title: 'SaaS Platforms',
    description: 'Cloud-native, multi-tenant architectures that grow with your user base.',
    icon: Layers,
    size: 'small',
    image: null,
  },
  {
    title: 'Mobile Apps',
    description: 'Bangla-first Android apps engineered for low-end devices and high-volume distribution.',
    icon: Smartphone,
    size: 'small',
    image: null,
  },
  {
    title: 'Web Consulting',
    description: 'Strategic roadmaps for digital transformation and long-term technical sustainability.',
    icon: Globe,
    size: 'small',
    image: null,
  },
  {
    title: 'Rapid Delivery',
    description: 'From idea to shipped product in weeks, not months. Speed is a feature.',
    icon: Zap,
    size: 'wide',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=60&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/30 block mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-white tracking-tight"
          >
            Engineered for <span className="italic">excellence.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {services.map((service, i) => {
            const Icon = service.icon;
            const colSpan =
              service.size === 'large' ? 'md:col-span-1 md:row-span-2' :
              service.size === 'wide'  ? 'md:col-span-2' : '';

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={`glass-card rounded-2xl flex flex-col justify-between group transition-all duration-500 relative overflow-hidden ${colSpan}`}
              >
                {/* Background image for large/wide cards */}
                {service.image && (
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt=""
                      className="w-full h-full object-cover opacity-[0.12] group-hover:opacity-[0.2] transition-opacity duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  </div>
                )}

                <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                  <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-400">
                    <Icon size={18} className="text-white/60 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2 tracking-tight">{service.title}</h3>
                    <p className="text-sm text-white/35 leading-relaxed font-light">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
