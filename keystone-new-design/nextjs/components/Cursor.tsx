"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches || window.innerWidth < 901;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    const ring = ringRef.current!;
    const dot = dotRef.current!;
    let tx = 0, ty = 0, cx = 0, cy = 0, dx = 0, dy = 0;

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; dx = e.clientX; dy = e.clientY; };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      ring.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onEnter = () => ring.classList.add("hover");
    const onLeave = () => ring.classList.remove("hover");
    const targets = document.querySelectorAll("a, button, [data-product], .btn");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
