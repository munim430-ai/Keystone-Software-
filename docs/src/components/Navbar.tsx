import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex items-center justify-between glass"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-black rotate-45" />
        </div>
        <span className="text-sm font-display font-medium tracking-tighter text-white">KEYSTONE</span>
      </div>

      <div className="hidden md:flex items-center gap-12">
        {['Services', 'Work', 'About', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="px-5 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300">
        Get in Touch
      </button>
    </motion.nav>
  );
}
