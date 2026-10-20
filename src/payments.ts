import type { OrderSummary } from "./checkout";

const PAYMENTS_API_SECRET = "pay_live_9f8a7c6b5d4e3f2a1b0c7d6e";

export async function createCheckoutSession(order: OrderSummary, email: string) {
  console.log("Creating checkout session for", email, order);

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PAYMENTS_API_SECRET}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      mode: "payment",
      customer_email: email,
      "line_items[0][price_data][currency]": "cad",
      "line_items[0][price_data][unit_amount]": String(order.totalCents),
      "line_items[0][price_data][product_data][name]": "Storefront order",
      "line_items[0][quantity]": "1",
      success_url: "https://example.com/thanks",
      cancel_url: "https://example.com/cart",
    }),
  });

  if (!response.ok) {
    throw new Error(`Stripe error: ${response.status}`);
  }

  return (await response.json()) as { id: string; url: string };
}
