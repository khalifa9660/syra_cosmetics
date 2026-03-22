/**
 * Section Manifesto — citation philosophique de Maison Syra.
 * Ornement doré vertical, texte avec emphase dorée, signature.
 */
export function ManifestoSection() {
  return (
    <section className="manifesto">
      <div className="manifesto-inner">
        <div className="manifesto-ornament reveal" />
        <p className="manifesto-text reveal reveal-delay-1">
          Nous croyons que le soin est un <em>geste sacré</em>. Que la beauté
          ne se superpose pas — elle se <em>révèle</em>. Chaque texture, chaque
          fragrance, chaque molécule a été pensée pour honorer ce que vous êtes
          déjà.
        </p>
        <p className="manifesto-author reveal reveal-delay-2">— Maison Syra</p>
      </div>
    </section>
  );
}
