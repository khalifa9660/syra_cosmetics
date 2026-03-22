import { footerLinks } from "@/lib/data";

/**
 * Footer éditorial minimal — 3 colonnes : marque, liens, mentions légales.
 */
export function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-brand">SYRA</div>
        <div className="footer-tagline">Cosmétiques de Haute Facture</div>
      </div>
      <div className="footer-links">
        {footerLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="footer-legal">
        © 2026 Maison Syra
        <br />
        Tous droits réservés
      </div>
    </footer>
  );
}
