import { NextResponse } from "next/server";
import food from "../../../data/foods";

export function GET() {
  return NextResponse.json(food);
}
