import { NextRequest, NextResponse } from "next/server";
import {Blogs} from "./data"

export function GET(req: NextRequest) {
  return NextResponse.json({ Blogs });
}
