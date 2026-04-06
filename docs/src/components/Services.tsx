import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Layers } from 'lucide-react';

const services = [
  {
    title: "Custom Software",
    description: "Tailored solutions designed to solve complex business challenges with precision and scale.",
    icon: Code2,
  },
  {
    title: "SaaS Platforms",
    description: "Cloud-native architectures that grow with your user base, ensuring high availability and performance.",
    icon: Layers,
  },
  {
    title: "AI Automation",
    description: "Integrating intelligent agents and machine learning to streamline workflows and reduce overhead.",
    icon: Cpu,
  },
  {
    title: "Digital Strategy",
    description: "Comprehensive roadmaps for digital transformation and long-term technological sustainability.",
    icon: Globe,
  }
];

export default function Services() {
  return (
    <section className="py-32 px-6 bg-surface relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-white/40 block mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-light text-white"
          >
            Engineered for <span className="italic">Excellence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6, 
                ease: [0.23, 1, 0.32, 1] 
              }}
              className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-500 cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-4 tracking-tight">{service.title}</h3>
              <p className="text-white/50 leading-relaxed font-light text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
