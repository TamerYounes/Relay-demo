import type { Product } from "../products";
import { formatCents } from "../checkout";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="price">{formatCents(product.priceCents)}</span>
    </article>
  );
}
