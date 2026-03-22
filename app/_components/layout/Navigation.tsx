"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";

/**
 * Navigation fixe flottante avec mix-blend-mode: difference.
 * Desktop : Logo SYRA + liens horizontaux.
 * Mobile (≤ 768px) : Logo SYRA + hamburger → fullscreen overlay menu.
 */
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Empêcher le scroll du body quand le menu est ouvert */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* Fermer le menu si on redimensionne au-dessus de 768px */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setIsMenuOpen(false);

    /* Petit délai pour laisser l'animation de fermeture se jouer */
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 400);
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ═══ Barre de navigation fixe ═══ */}
      <nav className={`nav ${isMenuOpen ? "nav--menu-open" : ""}`}>
        <a href="#" className="nav-logo" onClick={handleLogoClick}>
          SYRA
        </a>

        {/* Liens desktop */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleLinkClick(event, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton hamburger mobile */}
        <button
          className={`nav-hamburger ${isMenuOpen ? "nav-hamburger--open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="nav-hamburger-line" />
          <span className="nav-hamburger-line" />
          <span className="nav-hamburger-line" />
        </button>
      </nav>

      {/* ═══ Menu mobile fullscreen ═══ */}
      <div
        className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        {/* Fond avec grain subtil */}
        <div className="mobile-menu-bg" />

        {/* Ornement décoratif vertical */}
        <div className="mobile-menu-ornament" />

        {/* Liens de navigation */}
        <nav className="mobile-menu-nav">
          {navLinks.map((link, index) => (
            <div key={link.href} className="mobile-menu-item">
              {index > 0 && <div className="mobile-menu-separator" />}
              <a
                href={link.href}
                className="mobile-menu-link"
                style={{ transitionDelay: `${0.15 + index * 0.08}s` }}
                onClick={(event) => handleLinkClick(event, link.href)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span className="mobile-menu-link-number">
                  0{index + 1}
                </span>
                <span className="mobile-menu-link-text">{link.label}</span>
              </a>
            </div>
          ))}
        </nav>

        {/* Tagline en bas */}
        <div className="mobile-menu-footer">
          <p className="mobile-menu-tagline">Cosmétiques de Haute Facture</p>
          <div className="mobile-menu-footer-line" />
        </div>
      </div>
    </>
  );
}
