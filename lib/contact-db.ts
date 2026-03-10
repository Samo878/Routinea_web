import { appendFileSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

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
  id: number;
  createdAt: string;
};

const databasePath =
  process.env.ROUTINEA_CONTACT_DB_PATH ??
  (process.env.VERCEL
    ? path.join("/tmp", "routinea_contacts.jsonl")
    : path.join(process.cwd(), "data", "routinea_contacts.jsonl"));

const fallbackPath = path.join("/tmp", "routinea_contacts.jsonl");

function ensureDbPath(filePath: string) {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function toSafeString(value: string) {
  return String(value ?? '');
}

export function saveContactSubmission(payload: ContactInsert) {
  const record: ContactRecord = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
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

  const serializedRecord = `${JSON.stringify(record)}\n`;

  const destinations = [databasePath];
  if (fallbackPath !== databasePath) {
    destinations.push(fallbackPath);
  }

  let saved = false;
  let lastError: unknown = null;
  
  for (const destination of destinations) {
    try {
      ensureDbPath(destination);
      appendFileSync(destination, serializedRecord, {
        encoding: "utf8",
        flag: "a",
      });
      saved = true;
      break;
    } catch (error) {
      lastError = error;
    }
  }

  if (!saved) {
    console.error("[routinea-contact] Failed to write local lead store", {
      error: lastError,
      primaryPath: databasePath,
      fallbackPath,
    });
    console.info("[routinea-contact] fallback payload", serializedRecord.trim());
  }

  return record.id;
}
