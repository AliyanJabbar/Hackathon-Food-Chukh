import { Data } from "@/data/foods";
const handleEmialSent = async (items: Data[]) => {
  try {
    // sending confirmation email
    const emailResponse = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });
    if (emailResponse.ok) {
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/?message=Check%20Your%20Email%20To%20Confirm%20Order!`;
    } else if (!emailResponse.ok) {
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}?message=Failed%20to%20send%20confirmation%20email`;
    }
  } catch (error) {
    // Redirect with error message if something fails
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}?message=Order%20Failed.%20Please%20try%20again.`;
  }
};

export default handleEmialSent;
