import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";
export default withAuth(
  async function middleware(req: NextRequest) {
    return withAuth(req);
  },
  {
    isReturnToCurrentPage: true,
  }
);
export const config = {
  matcher: [
    "/checkout",
    "/api/email",
    "/api/checkout",
    "/userDetails",
    "/orderStatus",
  ],
};
