import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const user = await getUser();
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    return new NextResponse("User is not authenticated!");
  }

  console.log("userDetails", user);
  console.log("Is Authenticated:", authenticated);

  const resend = new Resend(process.env.RESEND_EMAIL_SECRET);
  const resendIt = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: user.email!,
    subject: "Order Confirmation Email",
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h1 style="color: #333;">Your order has been confirmed!</h1>
      <p>Thank you for shopping with Food Chukh.</p>
      <a href=${process.env.NEXT_PUBLIC_API_URL}?message=Order%20Completed%20Successfully!
         style="display: inline-block; 
                background-color: #008000; 
                color: white; 
                padding: 12px 24px; 
                text-decoration: none; 
                border-radius: 4px; 
                margin-top: 20px;">
        Return to Food Chukh
      </a>
    </div>
  `,
  });

  return NextResponse.json({ resendIt });
}
