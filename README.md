# Forest Hills Golf Club — Concept Demo

Phase 0 preview site. One polished homepage, HU + EN, mock inquiry widget.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — redirects to /hu by default.

Switch language: http://localhost:3000/en

## Build + deploy

```bash
npm run build
```

Deploy to Vercel: import this repo at vercel.com/new, framework = Next.js, no env vars needed.

## Notes

- Inquiry form is a UI mock — data is NOT saved anywhere.
- All images are sample stock photos (Unsplash, free-to-use). Not Forest Hills own photography.
- Phone/email in lib/site-config.ts — replace with confirmed info before client handoff.
- Hotel Szarvaskut link in lib/site-config.ts — confirm URL with Siggi.
