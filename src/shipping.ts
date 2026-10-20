export type Region = "AB" | "BC" | "ON" | "QC" | "OTHER";

const baseRateCents: Record<Region, number> = {
  AB: 900,
  BC: 1200,
  ON: 1400,
  QC: 1400,
  OTHER: 1800,
};

const freeShippingThresholdCents = 7500;

export function shippingCents(
  region: Region,
  subtotalCents: number,
  weightGrams: number,
) {
  if (subtotalCents >= freeShippingThresholdCents) {
    return 0;
  }

  const extraKilograms = Math.max(0, Math.ceil(weightGrams / 1000) - 1);
  return baseRateCents[region] + extraKilograms * 300;
}
