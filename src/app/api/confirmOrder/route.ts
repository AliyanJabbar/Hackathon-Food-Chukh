import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const { items, formValues } = await req.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Items array cannot be empty" },
        { status: 400 }
      );
    }

    if (
      !formValues.firstName ||
      !formValues.lastName ||
      !formValues.email ||
      !formValues.phone ||
      !formValues.address1 ||
      !formValues.zipCode
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required form values" },
        { status: 400 }
      );
    }

    // Generate unique order ID
    const orderId = uuidv4();

    // Create order document in Sanity
    await client.create({
      _type: "order",
      orderId: orderId,
      customerDetails: {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        phone: formValues.phone,
        address: formValues.address1,
        zipCode: formValues.zipCode,
      },
      items: items.map((item) => ({
        _key: uuidv4(),
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.quantity),
        image: item.image,
      })),
      totalAmount: items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      orderDate: new Date().toISOString(),
      status: "pending",
    });
    return NextResponse.json({ success: true, orderId }, { status: 200 });
  } catch (error) {
    console.error("❌ Error creating order in Sanity:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create order" },
      { status: 500 }
    );
  }
}
