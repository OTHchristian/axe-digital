"use client";

import { useRef, useEffect } from "react";

interface ScrollInfiniProps {
  children: React.ReactNode;
  speed?: number; // vitesse du scroll automatique
}

export default function ScrollInfini({ children, speed = 0.5 }: ScrollInfiniProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  let raf: number;

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // Clone pour l’effet infini
    const clone = content.cloneNode(true);
    container.appendChild(clone);

    const step = () => {
      container.scrollLeft += speed;
      if (container.scrollLeft >= content.scrollWidth) {
        container.scrollLeft -= content.scrollWidth; // reset fluide
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    // Pause au hover
    container.addEventListener("mouseenter", () => cancelAnimationFrame(raf));
    container.addEventListener("mouseleave", () => (raf = requestAnimationFrame(step)));

    return () => cancelAnimationFrame(raf);
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
