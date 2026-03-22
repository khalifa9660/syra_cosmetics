"use client";

import { useEffect, useState } from "react";

/**
 * Preloader dramatique — affiche "SYRA" avec une ligne dorée animée.
 * Disparaît après 2.8s avec une transition opacity/visibility.
 */
export function Preloader() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`preloader ${isHidden ? "hidden" : ""}`}
      id="preloader"
      aria-hidden="true"
    >
      <div className="preloader-logo">SYRA</div>
      <div className="preloader-line" />
    </div>
  );
}
