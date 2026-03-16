import { getSupabaseServerClient } from "./supabase";

type ContactInsert = {
  source: string;
  name: string;
  email: string;
  phone: string;
  school: string;
  role: string;
  message: string;
  ip: string;
  userAgent: string;
  honeypot: boolean;
};

type ContactRecord = ContactInsert & {
  id: string;
  created_at: string;
};

function toSafeString(value: string) {
  return String(value ?? '');
}

export async function saveContactSubmission(payload: ContactInsert) {
  const tableName = process.env.SUPABASE_CONTACT_TABLE ?? "contact_submissions";
  const supabase = getSupabaseServerClient();

  const record: ContactRecord = {
    id: "",
    created_at: new Date().toISOString(),
    source: toSafeString(payload.source),
    name: toSafeString(payload.name),
    email: toSafeString(payload.email),
    phone: toSafeString(payload.phone),
    school: toSafeString(payload.school),
    role: toSafeString(payload.role),
    message: toSafeString(payload.message),
    ip: toSafeString(payload.ip),
    userAgent: toSafeString(payload.userAgent),
    honeypot: !!payload.honeypot,
  };

  const dbPayload = {
    source: record.source,
    name: record.name,
    email: record.email,
    phone: record.phone,
    school: record.school,
    role: record.role,
    message: record.message,
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
    console.error("[routinea-contact] Failed to persist lead in Supabase", {
      error,
      table: tableName,
    });
    throw error;
  }

  return data?.id ?? "";
}
