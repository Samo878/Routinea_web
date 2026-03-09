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

## Notes

- Contact forms are wired to a local API route and do not use external CRM or marketing services.
- Social preview image is located at `public/og-routinea.svg`.
- The site uses Czech copy by default.
