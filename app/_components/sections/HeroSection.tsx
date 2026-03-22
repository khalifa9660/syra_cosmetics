"use client";

import { useEffect, useRef } from "react";
import { HeroParticles } from "../ui/HeroParticles";

/**
 * Section Hero — plein écran avec particules, titre animé et indicateur de défilement.
 * L'animation d'entrée séquentielle se déclenche après le preloader (2.8s).
 */
export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    /* Déclencher l'animation hero après le preloader */
    const timer = setTimeout(() => {
      heroRef.current?.classList.add("hero-animate");
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  /* Parallax sur les visuels produits au scroll */
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".float-up").forEach((element) => {
        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (center - window.innerHeight / 2) * 0.04;
        (element as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.querySelector("#collection");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-bg" />
      <HeroParticles />
      <div className="hero-content">
        <div className="hero-overline">
          Haute Cosmétique — Depuis 1987
        </div>
        <h1 className="hero-title">
          L&apos;Art de
          <br />
          <em>l&apos;Essentiel</em>
        </h1>
        <p className="hero-subtitle">
          Là où la science rencontre l&apos;élégance, chaque formule devient une
          œuvre. Des actifs rares, une exigence absolue.
        </p>
        <a
          href="#collection"
          className="hero-cta"
          onClick={handleCtaClick}
        >
          <span>Découvrir la collection</span>
          <span className="cta-line" />
        </a>
      </div>
      <div className="hero-scroll-indicator">
        <span>Défiler</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
