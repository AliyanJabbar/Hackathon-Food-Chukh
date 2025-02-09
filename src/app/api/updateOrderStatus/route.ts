import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const { orderId, status } = await req.json();

  if (!orderId) {
    return NextResponse.json({ success: false, error: "OrderId is required" });
  }

  try {
    const result = await client.fetch(
      `*[_type == "order" && orderId == $orderId][0]`,
      { orderId }
    );

    if (!result) {
      return NextResponse.json({ success: false, error: "Order not found" });
    }

    await client.patch(result._id).set({ status }).commit();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
