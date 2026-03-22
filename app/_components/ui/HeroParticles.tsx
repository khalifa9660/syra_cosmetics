"use client";

import { useEffect, useRef } from "react";

/**
 * 25 particules dorées flottantes dans le hero.
 * Chaque particule a une position, un délai et une taille aléatoires.
 */
export function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 25; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.animationDuration = `${6 + Math.random() * 6}s`;
      const size = `${1 + Math.random() * 2}px`;
      particle.style.width = size;
      particle.style.height = size;
      container.appendChild(particle);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-particles" aria-hidden="true" />
  );
}
