import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const INTERACTIVE = 'a, button, [data-cursor]'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      gsap.to(dot,  { x: e.clientX, y: e.clientY, duration: 0,    ease: 'none' })
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.45, ease: 'power3.out' })
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) {
        gsap.to(ring, { scale: 1.8, opacity: 0.4, duration: 0.2 })
        gsap.to(dot,  { scale: 0,               duration: 0.2 })
      }
    }

    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) {
        const related = e.relatedTarget as Element | null
        if (!related?.closest?.(INTERACTIVE)) {
          gsap.to(ring, { scale: 1, opacity: 1, duration: 0.2 })
          gsap.to(dot,  { scale: 1,             duration: 0.2 })
        }
      }
    }

    const onLeaveWindow = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 })
    }
    const onEnterWindow = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 })
    }

    window.addEventListener('mousemove',  onMove)
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseout',   onOut)
    document.addEventListener('mouseleave', onLeaveWindow)
    document.addEventListener('mouseenter', onEnterWindow)

    return () => {
      window.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
      document.removeEventListener('mouseleave', onLeaveWindow)
      document.removeEventListener('mouseenter', onEnterWindow)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 5, height: 5,
          borderRadius: '50%',
          background: '#fff',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 36, height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.45)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
    </>
  )
}
