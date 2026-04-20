import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import LaptopModel from './three/LaptopModel';
import PhoneModel from './three/PhoneModel';
import ParticleField from './three/ParticleField';

function Scene({ mousePos }: { mousePos: { x: number; y: number } }) {
  return (
    <>
      <ambientLight intensity={0.25} />
      <spotLight position={[5, 6, 5]} intensity={1.8} angle={0.4} penumbra={0.6} castShadow />
      <pointLight position={[-4, 2, 3]} color="#ffffff" intensity={0.6} />
      <pointLight position={[0, -3, 2]} color="#4080ff" intensity={0.3} />
      <Environment preset="city" />
      <ParticleField count={600} mousePos={mousePos} />
      <LaptopModel mousePos={mousePos} />
      <PhoneModel mousePos={mousePos} position={[2.4, 0.3, 0]} scale={1} />
    </>
  );
}

function MobileShowcase() {
  return (
    <section className="relative py-24 px-6 text-center bg-black border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/[0.04] rounded-full blur-[80px]" />
      </div>
      <div className="relative z-10 max-w-md mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-[10px] uppercase tracking-[0.3em] text-white/25 mb-4"
        >
          Built With Precision
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-light text-white tracking-tight"
        >
          Built for the <span className="italic">digital age.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm text-white/35 leading-relaxed"
        >
          From web to mobile — we engineer experiences that perform on every device.
        </motion.p>
      </div>
    </section>
  );
}

export default function DeviceShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  if (isMobile) return <MobileShowcase />;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className="relative overflow-hidden"
      style={{
        height: '100vh',
        background: 'radial-gradient(ellipse at 50% 40%, #0d0d12 0%, #000 70%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.8) 100%)',
          zIndex: 2,
        }}
      />

      <div className="absolute top-0 left-0 right-0 z-10 px-6 md:px-10 pt-16 md:pt-20 text-center pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-[10px] uppercase tracking-[0.3em] text-white/25 mb-4"
        >
          Built With Precision
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-light text-white tracking-tight"
        >
          Built for the <span className="italic">digital age.</span>
        </motion.h2>
      </div>

      <Canvas
        camera={{ position: [0, 0.2, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene mousePos={mousePos} />
        </Suspense>
      </Canvas>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000)', zIndex: 3 }}
      />
    </section>
  );
}
