import type { Product } from "../products";
import { formatCents } from "../checkout";

// Descriptions come from the admin editor and can include bold text and links.
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
      <span className="price">{formatCents(product.priceCents)}</span>
    </article>
  );
}
