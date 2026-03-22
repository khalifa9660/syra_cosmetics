import { products } from "@/lib/data";
import { ProductRow } from "./ProductRow";

/**
 * Section Collection — header + 3 produits en zigzag éditorial.
 */
export function CollectionSection() {
  return (
    <section className="collection" id="collection">
      <div className="collection-header">
        <p className="collection-overline reveal">La Collection</p>
        <h2 className="collection-title reveal reveal-delay-1">
          Trois Essences,
          <br />
          Un Rituel
        </h2>
      </div>
      {products.map((product) => (
        <ProductRow key={product.id} product={product} />
      ))}
    </section>
  );
}
