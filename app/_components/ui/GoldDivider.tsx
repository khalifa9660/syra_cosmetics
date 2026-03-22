/**
 * Séparateur doré horizontal avec animation au scroll.
 * La ligne s'étend de scaleX(0) à scaleX(1) quand visible.
 * L'observation est gérée par le ScrollObserver global.
 */
export function GoldDivider() {
  return (
    <div className="divider">
      <div className="divider-line" />
    </div>
  );
}
