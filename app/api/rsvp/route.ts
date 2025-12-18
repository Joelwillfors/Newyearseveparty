import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("WEBHOOK:", process.env.GOOGLE_SHEETS_WEBHOOK);

  const body = await req.json();

  const res = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  console.log("GOOGLE STATUS:", res.status);

  return NextResponse.json({ success: true });
}
