import { NextRequest, NextResponse } from "next/server";
import {
  isDuplicateNewsletterError,
  saveNewsletterSubscription,
} from "@/lib/newsletter-db";

type NewsletterPayload = {
  email?: string;
  source?: string;
  hp?: string;
};

function getIpAddress(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    return xff.split(",")[0]!.trim();
  }

  return req.headers.get("x-real-ip") ?? "unknown";
}

function cleanPayload(value: string | undefined) {
  return String(value ?? "").trim().slice(0, 5000);
}

function hasNewsletterSupabaseConfig() {
  return Boolean(
    process.env.SUPABASE_URL?.trim() &&
      process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
  );
}

export async function POST(req: NextRequest) {
  let body: NewsletterPayload;

  try {
    body = (await req.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json({ error: "Neplatný payload." }, { status: 400 });
  }

  const email = cleanPayload(body.email).toLowerCase();
  const source = cleanPayload(body.source) || "homepage-newsletter-modal";
  const hp = cleanPayload(body.hp);

  if (hp) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!email) {
    return NextResponse.json({ error: "Zadejte prosím e-mail." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Zadejte prosím platný e-mail." },
      { status: 400 }
    );
  }

  if (!hasNewsletterSupabaseConfig()) {
    return NextResponse.json(
      {
        error:
          "Newsletter není na serveru správně nastavený. Doplňte SUPABASE_URL a SUPABASE_SERVICE_ROLE_KEY.",
      },
      { status: 500 }
    );
  }

  try {
    const id = await saveNewsletterSubscription({
      email,
      source,
      ip: getIpAddress(req),
      userAgent: req.headers.get("user-agent") ?? "unknown",
      honeypot: false,
    });

    return NextResponse.json({ ok: true, id }, { status: 200 });
  } catch (error) {
    if (isDuplicateNewsletterError(error)) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    console.error("[routinea-newsletter] Failed to persist subscriber", error);
    return NextResponse.json(
      { error: "Nepodařilo se uložit váš e-mail. Zkuste to prosím za chvíli." },
      { status: 500 }
    );
  }
}
