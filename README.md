# Routinea Marketing Website

Production-oriented Next.js marketing site for Routinea.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality commands

```bash
npm run lint
npm run build
npm run start
```

## Routes

- `/` – homepage
- `/for-schools` – school-focused landing + request form
- `/workshops` – workshop catalog with filters
- `/about` – brand story
- `/contact` – contact page + form
- `/api/contact` – local lead endpoint with in-memory rate limiting + honeypot logging
- `/api/contact` – persists lead submissions to a local file database (`data/routinea_contacts.jsonl`)

## Notes

- Contact forms are wired to a local API route and do not use external CRM or marketing services.
- Social preview image is located at `public/og-routinea.svg`.
- The site uses Czech copy by default.

## Contact data storage

Form submissions are saved in a local file-backed database (JSONL) at:

`data/routinea_contacts.jsonl`

You can change the file path with:

```bash
ROUTINEA_CONTACT_DB_PATH=/your/path/contact-data.db
```

Each submission is stored as one JSON line with fields:

- `id`
- `createdAt`
- `source`
- `name`
- `email`
- `phone`
- `school`
- `role`
- `message`
- `ip`
- `userAgent`
- `honeypot`

For production deployment, replace this local file storage with a managed database (PostgreSQL/Supabase/etc.) before enabling auto-scaling.
