import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, ease: 'power3.out' });
      gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.45, ease: 'power3.out' });
    };

    const onEnter = () => {
      gsap.to(ring, { scale: 2.2, opacity: 0.6, duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 0.4, duration: 0.3, ease: 'power2.out' });
    };

    const onLeave = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 1, duration: 0.3, ease: 'power2.out' });
    };

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove);
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          border: '1px solid rgba(255,255,255,0.5)',
          borderRadius: '50%',
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          width: 5,
          height: 5,
          marginLeft: -2.5,
          marginTop: -2.5,
          background: 'white',
          borderRadius: '50%',
          willChange: 'transform',
        }}
      />
    </>
  );
}
