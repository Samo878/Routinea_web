import { NextRequest, NextResponse } from "next/server";

type RateState = { count: number; expiresAt: number };
type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  school?: string;
  role?: string;
  message?: string;
  source?: string;
  hp?: string;
};

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 4;
const rateBuckets = new Map<string, RateState>();

function getIpAddress(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const current = rateBuckets.get(ip);
  if (!current || current.expiresAt <= now) {
    rateBuckets.set(ip, { count: 1, expiresAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > MAX_REQUESTS;
}

function cleanPayload(value: string | undefined) {
  return String(value ?? "").trim().slice(0, 5000);
}

export async function POST(req: NextRequest) {
  const ip = getIpAddress(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Příliš mnoho požadavků. Zkuste to za chvíli." },
      { status: 429 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Neplatný payload." }, { status: 400 });
  }

  const payload = {
    name: cleanPayload(body.name),
    email: cleanPayload(body.email),
    phone: cleanPayload(body.phone),
    school: cleanPayload(body.school),
    role: cleanPayload(body.role),
    message: cleanPayload(body.message),
    source: cleanPayload(body.source),
    hp: cleanPayload(body.hp),
  };

  if (payload.hp) {
    return NextResponse.json({ ok: true });
  }

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json(
      { error: "Vyplňte prosím povinné pole." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(payload.email)) {
    return NextResponse.json(
      { error: "Zadejte validní e-mail." },
      { status: 400 }
    );
  }

  const submission = {
    source: payload.source || "unknown",
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    school: payload.school,
    role: payload.role,
    message: payload.message,
    ip,
    timestamp: new Date().toISOString(),
  };

  console.log("[routinea-contact] ", JSON.stringify(submission));

  return NextResponse.json({ ok: true }, { status: 200 });
}
