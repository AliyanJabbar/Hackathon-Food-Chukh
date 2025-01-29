import { Data } from "@/data/foods";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const handleCheckout = async (items: Data[]) => {
  const stripe = await stripePromise;

  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ items }),
  });

  const { sessionId } = await response.json();

  await stripe?.redirectToCheckout({
    sessionId,
  });
};

export default handleCheckout