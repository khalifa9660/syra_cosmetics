/**
 * Types de données pour Syra Cosmetics
 * Interfaces définissant la structure du contenu statique du site
 */

/** Détail d'un produit (volume, actifs, concentration) */
export interface ProductDetail {
  label: string;
  value: string;
}

/** Produit de la collection Syra */
export interface Product {
  id: string;
  number: string;
  tag: string;
  name: string;
  description: string;
  details: ProductDetail[];
  price: string;
  bottleVariant: 1 | 2 | 3;
}

/** Événement de la timeline Héritage */
export interface TimelineEvent {
  year: string;
  description: string;
}

/** Étape du rituel beauté */
export interface RitualStep {
  numeral: string;
  name: string;
  description: string;
  iconType: "purify" | "infuse" | "seal";
}

/** Témoignage client */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
