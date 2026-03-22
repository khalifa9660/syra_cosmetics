import type { Product, TimelineEvent, RitualStep, Testimonial } from "./types";

/** Les 3 produits de la collection Syra */
export const products: Product[] = [
  {
    id: "nuit-dor",
    number: "01",
    tag: "Sérum Intensif",
    name: "Nuit d'Or",
    description:
      "Un concentré nocturne d'une puissance rare. L'or colloïdal fusionne avec l'acide hyaluronique fragmenté pour restaurer l'éclat pendant le sommeil.",
    details: [
      { label: "Volume", value: "30ml" },
      { label: "Actifs", value: "12" },
      { label: "Concentration", value: "98.7%" },
    ],
    price: "€ 185",
    bottleVariant: 1,
  },
  {
    id: "rose-absolue",
    number: "02",
    tag: "Élixir de Jour",
    name: "Rose Absolue",
    description:
      "L'extrait de rose de Damas capturé à l'aube. Un voile protecteur qui enveloppe la peau d'un éclat naturel, entre lumière et velours.",
    details: [
      { label: "Volume", value: "50ml" },
      { label: "Actifs", value: "9" },
      { label: "Concentration", value: "96.2%" },
    ],
    price: "€ 145",
    bottleVariant: 2,
  },
  {
    id: "jade-sacre",
    number: "03",
    tag: "Masque Régénérant",
    name: "Jade Sacré",
    description:
      "Inspiré des rituels impériaux chinois. La poudre de jade et le thé matcha de cérémonie purifient en profondeur tout en préservant l'équilibre naturel.",
    details: [
      { label: "Volume", value: "75ml" },
      { label: "Actifs", value: "15" },
      { label: "Concentration", value: "99.1%" },
    ],
    price: "€ 165",
    bottleVariant: 3,
  },
];

/** Les 5 événements de la timeline Héritage */
export const timelineEvents: TimelineEvent[] = [
  {
    year: "1987",
    description:
      "Fondation de la Maison Syra à Grasse. Un laboratoire, une vision : fusionner la parfumerie de tradition et la science dermatologique.",
  },
  {
    year: "1994",
    description:
      "Premier brevet sur l'encapsulation moléculaire d'actifs botaniques. La presse parle d'une « révolution silencieuse ».",
  },
  {
    year: "2003",
    description:
      "Ouverture de l'Atelier Syra à Paris. Chaque formule y est composée à la main, en séries limitées de 500 unités.",
  },
  {
    year: "2019",
    description:
      "Collaboration avec le MIT sur la bio-fermentation de peptides rares. Naissance de la Ligne Absolue.",
  },
  {
    year: "2026",
    description:
      "Lancement de la troisième génération. Intelligence moléculaire, formulation adaptative, luxe écoresponsable.",
  },
];

/** Les 3 étapes du rituel */
export const ritualSteps: RitualStep[] = [
  {
    numeral: "I",
    name: "Purifier",
    description:
      "Le Jade Sacré libère la peau de tout ce qui l'alourdit. Un geste de détachement, presque méditatif.",
    iconType: "purify",
  },
  {
    numeral: "II",
    name: "Infuser",
    description:
      "Le sérum Nuit d'Or pénètre en profondeur. L'or colloïdal active la régénération cellulaire nocturne.",
    iconType: "infuse",
  },
  {
    numeral: "III",
    name: "Sceller",
    description:
      "La Rose Absolue enveloppe et protège. Un voile invisible qui préserve les actifs jusqu'à l'aube.",
    iconType: "seal",
  },
];

/** Le témoignage */
export const testimonial: Testimonial = {
  quote:
    "Je ne cherche plus à paraître. Depuis Syra, ma peau raconte sa propre histoire — et c'est la plus belle que j'aie jamais portée.",
  author: "Isabelle Marchand",
  role: "Directrice Artistique, Maison Lemaître",
};

/** Liens du footer */
export const footerLinks = [
  { label: "Mentions légales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "Livraison & Retours", href: "#" },
  { label: "Carrières", href: "#" },
  { label: "Presse", href: "#" },
];

/** Liens de navigation */
export const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Héritage", href: "#heritage" },
  { label: "Rituel", href: "#ritual" },
  { label: "Contact", href: "#contact" },
];
