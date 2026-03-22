"use client";

import { useEffect } from "react";

/**
 * Composant global qui observe tous les éléments avec les classes
 * `.reveal`, `.divider-line`, et `.timeline-item` et leur ajoute
 * la classe `visible` quand ils entrent dans le viewport.
 *
 * Reproduit fidèlement le comportement du JS original.
 * Utilise un MutationObserver pour détecter les nouveaux éléments ajoutés au DOM.
 */
export function ScrollObserver() {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        ".reveal:not(.visible), .divider-line:not(.visible), .timeline-item:not(.visible)"
      );
      elements.forEach((element) => intersectionObserver.observe(element));
    };

    /* Observer les éléments déjà présents dans le DOM */
    observeElements();

    /* Re-observer quand le DOM change (hydratation, navigation SPA) */
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
