import { NextResponse } from "next/server";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const lookingFor = String(body.lookingFor ?? "").trim();
    const company = String(body.company ?? "").trim();

    if (!name || !isEmail(email) || !message || !lookingFor) {
      return NextResponse.json({ ok: false, error: "Invalid fields" }, { status: 400 });
    }

    console.info("[contact]", { name, email, company, lookingFor, message });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
