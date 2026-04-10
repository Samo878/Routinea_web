import { NextRequest, NextResponse } from "next/server";
import {
  getNewsletterTableName,
  isDuplicateNewsletterError,
  saveNewsletterSubscription,
} from "@/lib/newsletter-db";

type NewsletterPayload = {
  email?: string;
  source?: string;
  hp?: string;
};

type NewsletterErrorCode =
  | "INVALID_EMAIL"
  | "CONFIG_MISSING"
  | "DB_INSERT_FAILED";

type NewsletterSuccessResponse = {
  ok: true;
  id?: string;
  runtimeRevision: string;
};

type NewsletterErrorResponse = {
  ok: false;
  code: NewsletterErrorCode;
  error: string;
  runtimeRevision: string;
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

function getRuntimeRevision() {
  return process.env.VERCEL_GIT_COMMIT_SHA ?? "local-dev";
}

function jsonResponse(
  body: NewsletterSuccessResponse | NewsletterErrorResponse,
  status: number
) {
  const response = NextResponse.json(body, { status });
  response.headers.set("x-routinea-revision", body.runtimeRevision);
  return response;
}

export async function POST(req: NextRequest) {
  const runtimeRevision = getRuntimeRevision();
  let body: NewsletterPayload;

  try {
    body = (await req.json()) as NewsletterPayload;
  } catch {
    return jsonResponse(
      {
        ok: false,
        code: "INVALID_EMAIL",
        error: "Neplatný požadavek pro přihlášení k newsletteru.",
        runtimeRevision,
      },
      400
    );
  }

  const email = cleanPayload(body.email).toLowerCase();
  const source = cleanPayload(body.source) || "homepage-newsletter-modal";
  const hp = cleanPayload(body.hp);

  if (hp) {
    return jsonResponse({ ok: true, runtimeRevision }, 200);
  }

  if (!email) {
    return jsonResponse(
      {
        ok: false,
        code: "INVALID_EMAIL",
        error: "Zadejte prosím e-mail.",
        runtimeRevision,
      },
      400
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return jsonResponse(
      {
        ok: false,
        code: "INVALID_EMAIL",
        error: "Zadejte prosím platný e-mail.",
        runtimeRevision,
      },
      400
    );
  }

  if (!hasNewsletterSupabaseConfig()) {
    return jsonResponse(
      {
        ok: false,
        code: "CONFIG_MISSING",
        error:
          "Newsletter není na serveru správně nastavený. Doplňte SUPABASE_URL a SUPABASE_SERVICE_ROLE_KEY.",
        runtimeRevision,
      },
      500
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

    return jsonResponse({ ok: true, id, runtimeRevision }, 200);
  } catch (error) {
    if (isDuplicateNewsletterError(error)) {
      return jsonResponse({ ok: true, runtimeRevision }, 200);
    }

    console.error("[routinea-newsletter] Failed to persist subscriber", {
      code:
        typeof error === "object" && error !== null && "code" in error
          ? error.code
          : undefined,
      message:
        typeof error === "object" && error !== null && "message" in error
          ? error.message
          : String(error),
      table: getNewsletterTableName(),
      runtimeRevision,
    });

    return jsonResponse(
      {
        ok: false,
        code: "DB_INSERT_FAILED",
        error: "Nepodařilo se uložit váš e-mail. Zkuste to prosím za chvíli.",
        runtimeRevision,
      },
      500
    );
  }
}
