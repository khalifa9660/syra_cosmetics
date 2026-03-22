"use client";

import { useState } from "react";

/**
 * Section Newsletter — formulaire d'inscription avec CTA doré.
 * Les classes reveal sont directement sur les éléments HTML.
 */
export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <section className="newsletter" id="contact">
      <div className="newsletter-inner">
        <p className="newsletter-overline reveal">L&apos;Invitation</p>
        <h2 className="newsletter-title reveal reveal-delay-1">
          Entrez dans le Cercle
        </h2>
        <p className="newsletter-subtitle reveal reveal-delay-2">
          Accès anticipé aux collections, rituels exclusifs et secrets de
          formulation.
        </p>
        <form
          className="newsletter-form reveal reveal-delay-3"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="newsletter-input"
            placeholder="Votre adresse email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            aria-label="Adresse email"
          />
          <button type="submit" className="newsletter-submit">
            S&apos;inscrire
          </button>
        </form>
      </div>
    </section>
  );
}
