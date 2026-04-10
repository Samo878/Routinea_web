import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabaseClient: SupabaseClient<Database> | null = null;

export type Database = {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string;
          source: string;
          name: string;
          email: string;
          phone: string;
          school: string;
          role: string;
          message: string;
          ip: string;
          user_agent: string;
          honeypot: boolean;
          created_at: string;
        };
        Insert: {
          source: string;
          name: string;
          email: string;
          phone_number?: string;
          school?: string;
          role?: string;
          message: string;
          ip: string;
          user_agent: string;
          honeypot?: boolean;
          created_at?: string;
        };
        Update: {
          source?: string;
          name?: string;
          email?: string;
          phone_number?: string;
          school?: string;
          role?: string;
          message?: string;
          ip?: string;
          user_agent?: string;
          honeypot?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          source: string;
          ip: string;
          user_agent: string;
          honeypot: boolean;
          created_at: string;
        };
        Insert: {
          email: string;
          source: string;
          ip: string;
          user_agent: string;
          honeypot?: boolean;
          created_at?: string;
        };
        Update: {
          email?: string;
          source?: string;
          ip?: string;
          user_agent?: string;
          honeypot?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {};
    Functions: {};
  };
};

export const DEFAULT_SUPABASE_CONTACT_TABLE = "contact_submissions" as const;
export const DEFAULT_SUPABASE_NEWSLETTER_TABLE = "newsletter_subscribers" as const;

function getEnvValue(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`[supabase] Missing required environment variable: ${name}`);
  }
  return value;
}

export function getSupabaseServerClient(): SupabaseClient<Database> {
  if (supabaseClient) return supabaseClient;

  const url = getEnvValue("SUPABASE_URL");
  const serviceRoleKey = getEnvValue("SUPABASE_SERVICE_ROLE_KEY");

  supabaseClient = createClient<Database>(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return supabaseClient!;
}
