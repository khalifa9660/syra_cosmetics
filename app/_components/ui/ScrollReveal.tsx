"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  slow?: boolean;
  /** Classe CSS supplémentaire appliquée sur l'élément wrapper */
  as?: keyof HTMLElementTagNameMap;
}

/**
 * Wrapper client qui observe l'entrée de l'élément dans le viewport
 * et ajoute la classe `visible` pour déclencher les animations CSS.
 */
export function ScrollReveal({
  children,
  className = "",
  delay,
  slow = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";
  const slowClass = slow ? "reveal-slow" : "";

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${slowClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
