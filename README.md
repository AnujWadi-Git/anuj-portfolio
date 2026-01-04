# Anuj Wadi — Portfolio (Cloudflare-ready Next.js)

## Quick start (local)
1. `npm install`
2. `npm run dev` → open http://localhost:3000

## Build for Cloudflare Pages (static export)
1. `npm run build`  # produces `out/`
2. Deploy `out/` on Cloudflare Pages (set build command `npm run build`, output directory `out`).

## Placeholders to replace (before or after deploy)
- `public/resume.pdf` — put your resume here (I already saw an uploaded resume; move/rename to this path)
- `public/images/projects/*` — project screenshots (optional now)
- Social/email are prefilled but check `src/config/site.ts`

## Contact form
- Uses Formspree placeholder. Replace action URL in `src/components/ContactForm.tsx` if using another service.

## Notes
- This project is configured for static export (`next export`). No server APIs are required.
