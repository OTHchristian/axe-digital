"use client";

import { useRef, useEffect } from "react";

interface ScrollInfiniProps {
  children: React.ReactNode;
  speed?: number; // vitesse du scroll automatique
}

export default function ScrollInfini({ children, speed = 0.5 }: ScrollInfiniProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Clone pour l’effet infini
    const clone = content.cloneNode(true);
    container.appendChild(clone);

    const step = () => {
      if (!container || !content) return;

      container.scrollLeft += speed;
      if (container.scrollLeft >= content.scrollWidth) {
        container.scrollLeft -= content.scrollWidth; // reset fluide
      }
      rafRef.current = requestAnimationFrame(step);
    };

    // Lancer l’animation
    rafRef.current = requestAnimationFrame(step);

    // Pause au hover
    const pause = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    const resume = () => {
      rafRef.current = requestAnimationFrame(step);
    };

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden whitespace-nowrap"
    >
      <div ref={contentRef} className="inline-flex gap-4">
        {children}
      </div>
    </div>
  );
}
