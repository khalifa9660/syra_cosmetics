/**
 * Illustration CSS pure d'une bouteille de cosmétique.
 * 3 variantes de couleurs selon le produit.
 */
interface BottleIllustrationProps {
  productName: string;
}

export function BottleIllustration({ productName }: BottleIllustrationProps) {
  return (
    <div className="product-bottle">
      <div className="bottle-cap" />
      <div className="bottle-neck" />
      <div className="bottle-body">
        <div className="bottle-label">
          <div className="bottle-label-brand">SYRA</div>
          <div className="bottle-label-name">{productName}</div>
        </div>
      </div>
    </div>
  );
}
