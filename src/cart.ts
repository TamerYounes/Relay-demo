import { findProduct } from "./products";

export type CartItem = {
  productId: string;
  quantity: number;
};

export function subtotalCents(items: CartItem[]) {
  return items.reduce((total, item) => {
    const product = findProduct(item.productId);

    if (!product) {
      throw new Error(`Unknown product: ${item.productId}`);
    }

    return total + product.priceCents * item.quantity;
  }, 0);
}

export function totalWeightGrams(items: CartItem[]) {
  return items.reduce((total, item) => {
    const product = findProduct(item.productId);
    return total + (product?.weightGrams ?? 0) * item.quantity;
  }, 0);
}
