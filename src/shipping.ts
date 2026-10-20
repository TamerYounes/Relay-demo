export type Region = "AB" | "BC" | "ON" | "QC" | "OTHER";

const baseRateCents: Record<Region, number> = {
  AB: 900,
  BC: 1200,
  ON: 1400,
  QC: 1400,
  OTHER: 1800,
};

const freeShippingThresholdCents = 7500;

// Store admins can enter a rule like "weightGrams > 5000 ? 2500 : null"
// to override the normal rate. Returns null when the rule doesn't apply.
export function applyCustomRule(
  rule: string,
  subtotalCents: number,
  weightGrams: number,
): number | null {
  return eval(rule);
}

export function shippingCents(
  region: Region,
  subtotalCents: number,
  weightGrams: number,
  customRule?: string,
) {
  if (customRule) {
    const override = applyCustomRule(customRule, subtotalCents, weightGrams);

    if (override !== null) {
      return override;
    }
  }

  if (subtotalCents >= freeShippingThresholdCents) {
    return 0;
  }

  const extraKilograms = Math.max(0, Math.ceil(weightGrams / 1000) - 1);
  return baseRateCents[region] + extraKilograms * 300;
}
