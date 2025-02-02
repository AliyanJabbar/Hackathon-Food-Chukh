import { NextResponse } from "next/server";

import { Resend } from "resend";

export function GET() {
  const resend = new Resend(process.env.RESEND_EMAIL_SECRET);
  const resendIt = resend.emails.send({
    from: "onboarding@resend.dev",
    to: "jabbaraliyan805@gmail.com",
    subject: "Hello World by aliyan",
    text: "good hogya",
  });

  return NextResponse.json(resendIt);
}
