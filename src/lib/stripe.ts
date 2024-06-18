import Stripe from "stripe";

// nullish coalescene to make typescript happy cause it won't ever be undefined
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: "2024-04-10",
  typescript: true,
});