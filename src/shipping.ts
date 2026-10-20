export type Region = "AB" | "BC" | "ON" | "QC" | "OTHER";

const baseRateCents: Record<Region, number> = {
  AB: 900,
  BC: 1200,
  ON: 1400,
  QC: 1400,
  OTHER: 1800,
};

const freeShippingThresholdCents: Record<Region, number> = {
  AB: 7500,
  BC: 7500,
  ON: 10000,
  QC: 10000,
  OTHER: 15000,
};

export function shippingCents(
  region: Region,
  subtotalCents: number,
  weightGrams: number,
) {
  if (subtotalCents >= freeShippingThresholdCents[region]) {
    return 0;
  }

  const extraKilograms = Math.max(0, Math.ceil(weightGrams / 1000) - 1);
  return baseRateCents[region] + extraKilograms * 300;
}
