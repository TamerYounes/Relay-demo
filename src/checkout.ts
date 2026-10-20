import { subtotalCents, totalWeightGrams, type CartItem } from "./cart";
import { shippingCents, type Region } from "./shipping";

export type OrderSummary = {
  subtotalCents: number;
  shippingCents: number;
  totalCents: number;
};

export function summarizeOrder(items: CartItem[], region: Region): OrderSummary {
  const subtotal = subtotalCents(items);
  const shipping = shippingCents(region, subtotal, totalWeightGrams(items));

  return {
    subtotalCents: subtotal,
    shippingCents: shipping,
    totalCents: subtotal + shipping,
  };
}

export function formatCents(cents: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(cents / 100);
}
