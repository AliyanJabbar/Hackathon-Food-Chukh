import { Data } from "@/data/foods";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const handlePayment = async (items: Data[]) => {
  try {
    // secondly handling payment
    // If email sent successfully, proceed with Stripe checkout
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });

    const { sessionId } = await response.json();
    await stripe?.redirectToCheckout({ sessionId });
  } catch (error) {
    // Redirect with error message if something fails
    window.location.href = `/?message=Order%20Failed.%20Please%20try%20again.`;
  }
};

export default handlePayment;
