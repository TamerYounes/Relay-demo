export type Product = {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  weightGrams: number;
};

export const products: Product[] = [
  {
    id: "mug-01",
    name: "Stoneware mug",
    description: "Hand-glazed, 350 ml.",
    priceCents: 2400,
    weightGrams: 420,
  },
  {
    id: "tote-01",
    name: "Canvas tote",
    description: "Heavy cotton with an inside pocket.",
    priceCents: 1800,
    weightGrams: 260,
  },
  {
    id: "print-01",
    name: "Mountain print",
    description: "A3 giclée print on matte paper.",
    priceCents: 3500,
    weightGrams: 180,
  },
];

export function findProduct(id: string) {
  return products.find((product) => product.id === id) ?? null;
}
