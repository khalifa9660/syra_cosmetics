"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

/**
 * Lecture du thème depuis localStorage via useSyncExternalStore.
 * Le mode clair est le DÉFAUT (pas de data-theme).
 * Le mode sombre est activé via data-theme="dark".
 */
function getThemeSnapshot(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return (localStorage.getItem("syra-theme") as "light" | "dark") ?? "light";
}

function getServerSnapshot(): "light" | "dark" {
  return "light";
}

function subscribeToTheme(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

/**
 * Bouton de bascule thème clair/sombre — fixé en bas à droite.
 * Mode clair = défaut (pas d'attribut data-theme).
 * Mode sombre = data-theme="dark".
 */
export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerSnapshot
  );
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    }
  });

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    if (nextTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    localStorage.setItem("syra-theme", nextTheme);
    window.dispatchEvent(new StorageEvent("storage"));
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      data-tooltip={theme === "light" ? "Mode sombre" : "Mode clair"}
      aria-label="Changer de thème"
    >
      <div className="theme-toggle-inner">
        <div className="toggle-icon-dark">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </div>
        <div className="toggle-icon-light">
          <svg viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
