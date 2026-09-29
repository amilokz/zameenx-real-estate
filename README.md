# ZameenX — Premium Real Estate Demo Website

A polished demo website for **ZameenX**, a fictional premium real estate agency serving
Lahore, Islamabad, Karachi and Rawalpindi, Pakistan.

Built with **Next.js 14+ (App Router)** + **Tailwind CSS v4** + **lucide-react**.

## Features

- **Sticky navbar** — Home, Listings, Services, About, Contact (+ mobile hamburger menu)
- **Hero** — "Find Your Dream Home in Pakistan" headline with a **working search/filter bar**:
  filter listings by **city**, **property type** and **max price** (client-side, instant)
- **Featured listings** — 9 property cards (House / Flat / Plot / Commercial) with PKR
  pricing ("PKR 2.5 Crore"), beds/baths/area specs and CSS-gradient art (no external images)
- **Detail modal** — "View Details" opens a modal with description, key features and an
  **"Enquire on WhatsApp"** button (deep link with pre-filled message)
- **Services** — Buy, Sell, Rent, Investment Advisory
- **About + animated stats** — properties sold, happy clients, cities (count-up on scroll)
- **Testimonials** — 3 fictional client stories
- **Contact** — info cards + callback form (client-side success state, no backend)
- **Footer** — links, top searches, social icons

## Design

Clean, premium, trustworthy: white + deep emerald (`emerald-950/900`) with gold accents,
Playfair Display serif headings (via `next/font`), generous whitespace, refined cards.
Fully responsive (mobile → desktop).

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy

Push to GitHub and import into Vercel — zero config required (no env vars, no backend).

## Demo data

All listings live in `data/listings.ts`. WhatsApp number used in enquire links:
`923001234567` (placeholder — replace with the real agency number).

---

*Demo crafted by [AKCLNT](https://akclnt.com) — we build websites like this for real businesses.*
