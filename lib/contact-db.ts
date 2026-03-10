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
  path.join(process.cwd(), 'data', 'routinea_contacts.jsonl');

const databaseDir = path.dirname(databasePath);

if (!existsSync(databaseDir)) {
  mkdirSync(databaseDir, { recursive: true });
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

  appendFileSync(databasePath, `${JSON.stringify(record)}\n`, {
    encoding: 'utf8',
    flag: 'a',
  });

  return record.id;
}
