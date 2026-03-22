"use client";

import { navLinks } from "@/lib/data";

/**
 * Navigation fixe flottante avec mix-blend-mode: difference.
 * Logo SYRA + liens de navigation.
 * Smooth scroll vers les ancres.
 */
export function Navigation() {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="nav">
      <a
        href="#"
        className="nav-logo"
        onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        SYRA
      </a>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(event) => handleClick(event, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
