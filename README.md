# DreamVoyagers — prototype website (PoC demo)

Arrival & settlement platform for newcomers to Auckland. Static prototype built for the client demo:
no build step, no server — **open `index.html` in any browser** (double-click) and everything works.

## What's in the demo

| Area | Pages | Notes |
|---|---|---|
| Public site | `index.html`, `how-it-works.html`, `packages.html`, `welcome-box.html`, `about.html`, `faq.html`, `contact.html` | Origin selector personalises copy; FAQ, packages and add-ons are driven from `assets/js/data.js` |
| Booking journey | `book.html` → `checkout.html` → `booking-confirmed.html` / `payment-cancelled.html` | 4-step form (package → booker/traveller → arrival → review). Checkout **simulates Stripe hosted Checkout**: card `4242 4242 4242 4242` succeeds, `4000 0000 0000 0002` is declined. Bookings are saved in the browser (localStorage) with a reference like `DV-2026-00116` |
| Operations dashboard | `admin/login.html` → `admin/index.html` → `admin/booking.html?ref=…` | Any email/password signs in (prototype). Seeded bookings, KPIs, search/filters, status lifecycle with "email customer" toggle, internal notes, service milestones, payment panel, email log. "Reset demo data" restores the seed |
| Customer accounts (prototype) | `account.html` → `journey.html` | Sign in / create account (localStorage, any password accepted). "My journey" shows the user's bookings — matched by the email on the booking or added by reference — with a status stepper, the six service milestones, arrival details, host card, a personal pre-departure checklist and a flight-update action. Demo: sign in as `rajesh.sharma@example.com`. Production: real auth (magic link / OTP), bookings read from the database by customer id |
| Legal | `terms.html`, `privacy.html`, `refunds.html` | Placeholders — to be drafted by the client's NZ legal adviser |

## Demo script (10 minutes)
1. Home → pick an origin chip (copy personalises) → scroll the arrival-plan card, packages, honesty section.
2. Packages → "Book 7-Day Starter" → add the Welcome Box → fill booker as a parent, untick "I am the person travelling".
3. Review → Pay → try the declined card first, then `4242…` → confirmation page with reference and WhatsApp link.
4. "Open this booking in the operations dashboard" → change status to *In progress* with email toggle → add a note → tick milestones.
5. Dashboard → Upcoming arrivals view; Packages view; Enquiries view.

## v2 redesign (Oct 2026) — India launch
- All seven public pages redesigned: compact layout, quieter type scale, photography instead of illustrations. Shared overrides in `assets/css/theme-v2.css` (loaded on every page after `styles.css`), home-only styles in `assets/css/home.css`. Previous versions kept in `_previous/`.
- **Launch market is India only.** `DV.origins` in `data.js` now lists Indian cities (with per-city notes in `DV.originNotes`); the booking form offers India / "Other (bookings open later)"; copy, food packs and the Welcome Box are written for arrivals from India. To open another country later: add it to `DV.origins`/`DV.originNotes`, the booking selects and the topbar line.
- **Photos** are free Unsplash images, hot-linked from `images.unsplash.com` (Unsplash licence: free for commercial use, no attribution required; a credit link is in the footer). They need an internet connection to display. Before launch, download and self-host them under `assets/img/photos/`, or replace with your own photography — the slots are the `<img>` tags on each page.

## Brand
- Palette anchored to ANZ Pharma: teal `#0AA493`, blue `#3D60AC`, plus coral `#E8613F` (primary action only), fern `#80A33D` (confirmed/included), sun `#F4B942`.
- Type: **Bricolage Grotesque** (headings) + **Rubik** (body, as on anzpharma.co.nz), loaded from Google Fonts with system fallbacks.
- Logo: the supplied artwork from `../Logos/` — `assets/img/logo.png` (full wordmark, headers), `logo-mark.png` (globe only, used with text in the dark footer/admin), `favicon.png` and `apple-touch-icon.png`. Skyline and illustrations are SVG in `assets/img/` (illustrations are placeholders — swap for photography; each slot is labelled on the page).

## Placeholders to replace before launch
WhatsApp number, phone, emails and hours (`assets/js/data.js` → `DV.config`), package prices/inclusions (`DV.packages`), partner names (About), testimonials (Home), legal pages, photography.

## Moving to production
The structure maps 1:1 onto the proposed Next.js build: pages → routes, `data.js` → database tables (packages, bookings, payments, notes, status history), `checkout.html` → Stripe Checkout + verified webhook, admin → authenticated routes. Nothing here should be deployed as-is: there is no server, no real payment, and admin "login" is cosmetic.
