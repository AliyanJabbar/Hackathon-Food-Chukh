import { Data } from "@/data/foods";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  address1: string;
}
const handleOrderPost = async (items: Data[], formValues: FormValues) => {
  try {
    const PostedOrder = await fetch("/api/confirmOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items, formValues }),
    });

    if (PostedOrder.ok) {
      const response = await PostedOrder.json();

      if (response?.orderId) {
        localStorage.setItem("orderId", response.orderId);
      } else {
        throw new Error("Order ID is missing in the API response.");
      }
    } else {
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}?message=Unable%20To%20Submit%20Order%20Details!`;
    }
  } catch (error) {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}?message=Order%20Failed.%20Please%20try%20again.`;
  }
};

export default handleOrderPost;
