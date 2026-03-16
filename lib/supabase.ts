import "server-only";
import { createClient } from "@supabase/supabase-js";

let supabaseClient: ReturnType<typeof createClient> | null = null;

function getEnvValue(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`[supabase] Missing required environment variable: ${name}`);
  }
  return value;
}

export function getSupabaseServerClient() {
  if (supabaseClient) return supabaseClient;

  const url = getEnvValue("SUPABASE_URL");
  const serviceRoleKey = getEnvValue("SUPABASE_SERVICE_ROLE_KEY");

  supabaseClient = createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return supabaseClient;
}
