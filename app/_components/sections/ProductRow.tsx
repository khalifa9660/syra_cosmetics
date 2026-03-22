import type { Product } from "@/lib/types";
import { BottleIllustration } from "./BottleIllustration";

interface ProductRowProps {
  product: Product;
}

/**
 * Ligne produit en layout zigzag éditorial.
 * Zone visuelle (bouteille CSS + numéro) | Zone info (détails, prix, CTA).
 * L'alternance pair/impair est gérée par CSS via :nth-child(even).
 */
export function ProductRow({ product }: ProductRowProps) {
  return (
    <div className="product-row">
      <div className="product-visual">
        <div className="product-visual-inner float-up">
          <div className="product-img-placeholder">
            <BottleIllustration productName={product.name} />
          </div>
        </div>
        <div className="product-visual-number">{product.number}</div>
      </div>
      <div className="product-info">
        <span className="product-tag reveal">{product.tag}</span>
        <h3 className="product-name reveal reveal-delay-1">{product.name}</h3>
        <p className="product-desc reveal reveal-delay-2">{product.description}</p>
        <div className="product-details reveal reveal-delay-2">
          {product.details.map((detail) => (
            <div key={detail.label} className="product-detail">
              <span className="product-detail-label">{detail.label}</span>
              <span className="product-detail-value">{detail.value}</span>
            </div>
          ))}
        </div>
        <div className="product-price reveal reveal-delay-3">{product.price}</div>
        <button className="product-btn reveal reveal-delay-3">
          <span>Ajouter au rituel</span>
          <span className="btn-arrow" />
        </button>
      </div>
    </div>
  );
}
