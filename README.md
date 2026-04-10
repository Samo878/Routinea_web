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
- `/api/contact` – local lead endpoint with in-memory rate limiting, honeypot logging and Supabase persistence (`contact_submissions`)
- `/api/newsletter` – newsletter subscribe endpoint for the homepage modal

## Notes

- Contact forms are wired to a local API route and do not use external CRM or marketing services.
- The homepage shows the newsletter modal only once per browser using `localStorage`.
- Social preview image is located at `public/og-routinea.svg`.
- The site uses Czech copy by default.

## Google Analytics

Google Analytics is included in the app layout through `components/analytics-config.tsx`.

- The tracking ID is read from environment variable: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Current local fallback ID is `G-YKQFZENCEK` if the env var is not set.

Local setup:

```bash
echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YKQFZENCEK" > .env.local
```

Vercel production setup:

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` with value `G-YKQFZENCEK`
3. Redeploy the project

You only need this once if you keep the same GA property across environments.

## Microsoft Clarity

Clarity is initialized via `components/clarity-config.tsx` using the npm package import:

```ts
import Clarity from "@microsoft/clarity";
```

Add your project ID to the environment:

```bash
NEXT_PUBLIC_CLARITY_PROJECT_ID=your_project_id
# or NEXT_PUBLIC_CLARITY_ID
```

If no ID is set, Clarity will stay disabled automatically.

## Contact data storage

Form submissions are stored in Supabase in the `contact_submissions` table.

Set these environment variables before deployment:

```bash
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_CONTACT_TABLE=contact_submissions
```

The stored payload includes:

- `id`
- `created_at`
- `source`
- `name`
- `email`
- `phone_number`
- `school`
- `role`
- `message`
- `ip`
- `user_agent`
- `honeypot`

For production, keep this endpoint server-side only (do not expose `SUPABASE_SERVICE_ROLE_KEY` to the browser).

## Newsletter data storage

Newsletter subscriptions are stored in Supabase in the `newsletter_subscribers` table and are sent from the homepage modal through `/api/newsletter`.

Set this environment variable if you want to override the default table name:

```bash
SUPABASE_NEWSLETTER_TABLE=newsletter_subscribers
```

Recommended table setup:

```sql
create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null,
  ip text not null,
  user_agent text not null,
  honeypot boolean not null default false,
  created_at timestamptz not null default now()
);

create unique index if not exists newsletter_subscribers_email_key
  on public.newsletter_subscribers (email);
```

The endpoint normalizes e-mail addresses to lowercase before insert and treats duplicate e-mails as a successful subscription so the modal can stay user-friendly.
