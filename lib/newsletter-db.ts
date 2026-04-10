import {
  DEFAULT_SUPABASE_NEWSLETTER_TABLE,
  getSupabaseServerClient,
} from "./supabase";

type NewsletterInsert = {
  email: string;
  source: string;
  ip: string;
  userAgent: string;
  honeypot: boolean;
};

type NewsletterRecord = NewsletterInsert & {
  id: string;
  created_at: string;
};

function toSafeString(value: string) {
  return String(value ?? "");
}

function getNewsletterTableName() {
  const configuredTable = process.env.SUPABASE_NEWSLETTER_TABLE;

  return configuredTable === DEFAULT_SUPABASE_NEWSLETTER_TABLE
    ? configuredTable
    : DEFAULT_SUPABASE_NEWSLETTER_TABLE;
}

export function isDuplicateNewsletterError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "23505"
  );
}

export async function saveNewsletterSubscription(payload: NewsletterInsert) {
  const supabase = getSupabaseServerClient();
  const tableName = getNewsletterTableName();

  const record: NewsletterRecord = {
    id: "",
    created_at: new Date().toISOString(),
    email: toSafeString(payload.email),
    source: toSafeString(payload.source),
    ip: toSafeString(payload.ip),
    userAgent: toSafeString(payload.userAgent),
    honeypot: !!payload.honeypot,
  };

  const dbPayload = {
    email: record.email,
    source: record.source,
    ip: record.ip,
    user_agent: record.userAgent,
    honeypot: record.honeypot,
    created_at: record.created_at,
  };

  const { data, error } = await supabase
    .from(tableName)
    .insert(dbPayload)
    .select("id")
    .single();

  if (error) {
    if (!isDuplicateNewsletterError(error)) {
      console.error("[routinea-newsletter] Failed to persist subscriber in Supabase", {
        error,
        table: tableName,
      });
    }

    throw error;
  }

  return data?.id ?? "";
}
