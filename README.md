# relux_franchise_landing_page

Relux Electric franchise landing page, built with Next.js 15 (App Router) and Tailwind CSS v4.

**Version:** 1.1.0

Live: https://reluxfranchiselandingpage.vercel.app/

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Structure

- `app/` — layout, global styles, page
- `components/` — Hero, PowerUp (intro + franchise steps), Products, WhyRelux (investing + site feasibility), CtaFooter, EnquiryModal, Logo
- `lib/locations.ts` — state/city lists for the enquiry form
- `public/images/` — logo, hero, product and section images

## Franchise enquiry form

The "Enquire Now" buttons open a form that posts to `https://core.reluxelectric.com/api/franchise/`
(the same endpoint as reluxelectric.com/business/franchise). Override the base URL with the
`NEXT_PUBLIC_RELUX_API_BASE` environment variable.

## Deploying on Vercel

`vercel.json` pins the framework to Next.js, so the project builds correctly even if the
Vercel project's Framework Preset was set to "Other".
