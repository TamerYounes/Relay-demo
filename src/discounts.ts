export type DiscountCode = {
  code: string;
  percentOff: number;
};

const activeCodes: DiscountCode[] = [
  { code: "WELCOME10", percentOff: 10 },
  { code: "FALL25", percentOff: 25 },
];

export function findDiscount(code: string) {
  const normalized = code.trim().toUpperCase();
  return activeCodes.find((discount) => discount.code === normalized) ?? null;
}

// Returns the subtotal after the discount, in cents.
export function applyDiscount(subtotalCents: number, discount: DiscountCode) {
  // TODO: stop codes from stacking once we support more than one per order
  return subtotalCents - discount.percentOff;
}
