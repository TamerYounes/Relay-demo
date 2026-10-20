# relay-demo

A small storefront: products, a cart, shipping and checkout. It exists so the [Relay](https://github.com/TamerYounes/Relay) demo has a real repository with real pull requests to review.

The open pull requests are intentional. Some contain problems on purpose (a leaked key, a pricing bug, unsafe HTML) so you can see what Relay flags, and one is clean.

## Layout

- `src/products.ts`: product catalog
- `src/cart.ts`: cart totals in cents
- `src/shipping.ts`: shipping rates by region
- `src/checkout.ts`: builds the order summary
- `src/components/ProductCard.tsx`: product tile for the shop page
