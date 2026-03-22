"use client";

import { useEffect, useRef } from "react";

/**
 * Curseur personnalisé luxe : point doré (6px) + anneau (40px) avec inertie.
 * L'anneau s'agrandit au survol des éléments interactifs.
 * Masqué sur les appareils tactiles.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animationFrameId = requestAnimationFrame(animateRing);
    };

    const handleMouseEnter = () => ring.classList.add("hovering");
    const handleMouseLeave = () => ring.classList.remove("hovering");

    const addHoverListeners = () => {
      document
        .querySelectorAll("a, button, .product-btn, .theme-toggle")
        .forEach((element) => {
          element.addEventListener("mouseenter", handleMouseEnter);
          element.addEventListener("mouseleave", handleMouseLeave);
        });
    };

    document.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animateRing);
    addHoverListeners();

    /* Ré-attacher les listeners quand le DOM change (navigation SPA) */
    const mutationObserver = new MutationObserver(() => {
      addHoverListeners();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
