import { NextResponse } from "next/server";
import chefs, { ChefData } from "../../../data/chefs";
const chefsData: ChefData[] = chefs;

export function GET() {
  return NextResponse.json(chefsData);
}
