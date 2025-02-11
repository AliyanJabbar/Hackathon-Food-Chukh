import { Data } from "@/data/foods";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { urlFor } from "@/sanity/lib/image";

export async function POST(req: NextRequest) {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.email) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }
    const { items, orderId } = await req.json();
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Order Confirmation Email",
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1 style="color: #333;">Please confirm your order</h1>
        <p>Review your order details below:</p>
        ${items
          .map(
            (item: Data) => `
          <div style="display: flex; align-items: center; margin: 10px 0; padding: 10px; border: 1px solid #eee; border-radius: 4px;">
            <img src="${urlFor(item.image).url()}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; margin-right: 15px;"/>
            <div>
              <h3 style="margin: 0; color: #333;">${item.name}</h3>
              <p style="margin: 5px 0; color: #666;">Price: ${item.price}</p>
              <p style="margin: 5px 0; color: #666;">Quantity: ${item.quantity}</p>
            </div>
          </div>
        `
          )
          .join("")}
        <div style="margin-top: 30px; text-align: center;">
          <a href="${baseUrl}/?message=Order%20Confirmed!&orderId=${orderId}"
             style="display: inline-block; background-color: #008000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-right: 30px;">
            Confirm Order
          </a>
          <a href="${baseUrl}/?message=Order%20Declined!&orderId=${orderId}"
             style="display: inline-block; background-color: #FF0000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px;">
            Decline Order
          </a>
        </div>
      </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, data: info });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
