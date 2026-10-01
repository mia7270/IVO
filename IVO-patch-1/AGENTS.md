# AGENTS.md

Project overview for AI agents and developers working on this codebase.

## What this is

A marketing website and visual prototype for **IVO One**, a virtual wallet product in development. There is no backend product logic here — no wallet, payments, or accounts are actually functional. Every screen showing wallet UI is a static, illustrative mockup.

## Tech stack

TanStack Start (React 19 + TanStack Router, file-based routing), Tailwind CSS 4, lucide-react icons, Netlify Forms for the one real form (Contact). No database, no auth, no server functions beyond what TanStack Start needs for SSR/routing.

## Directory structure

```
public/
  brand/ivo-logo.jpg     # Official IVO logo asset — do not redraw or regenerate
  __forms.html            # Static skeleton so Netlify detects the "contact" form at build time
src/
  components/
    layout/                # SiteHeader, SiteFooter, PreviewBanner
    ui/                     # Container, Section, Button, Badge, PlaceholderNote — shared primitives
    wallet/                 # PhoneFrame (device chrome), WalletUI (small building blocks), Mockups (composed screens)
    FAQAccordion.tsx
    JourneySteps.tsx
    PageHero.tsx            # Dark hero band used on every inner page
  data/
    siteConfig.ts           # Site name, tagline, placeholder contact emails
    nav.ts                  # Header + footer navigation
    faq.ts                  # FAQ content, grouped by category, with a `draft` flag per entry
  routes/                  # One file per page — file-based routing via TanStack Router
  styles.css                # Tailwind import + the @theme brand color/font tokens
```

## Brand system

All brand colors are CSS custom properties defined once in `src/styles.css` under `@theme`, which Tailwind v4 turns into utilities automatically (`bg-wine`, `bg-burgundy`, `bg-accent`, `text-charcoal`, `bg-ivory`, `bg-cream`, and their `/opacity` variants). Never hardcode a hex color in a component — add or change a token in `styles.css` instead.

Two font families: `font-display` (Space Grotesk, for headings) and the default sans (Inter, for body text), loaded via Google Fonts in `src/routes/__root.tsx`.

## Conventions

- Every page marks unconfirmed content with `PlaceholderNote` (a callout) or the `Badge` component (`tone="proposed"` / `"draft"` / `"confirmed"`). When adding new product content, keep using these rather than stating something as settled fact.
- Wallet screens never show real-looking numeric balances — amounts are masked (`••••`) to avoid implying real figures. Keep this pattern for any new mockup.
- The root route (`src/routes/__root.tsx`) renders `PreviewBanner` + `SiteHeader` + `<Outlet />` + `SiteFooter` around every page via its `component`, while `shellComponent` provides the actual `<html>/<head>/<body>` document shell — both are required together in this TanStack Start version.
- `noindex, nofollow` is set in root route meta intentionally; remove only once the site is approved for public launch.

## Content rules to preserve

Do not add: specific fees, exchange rates, supported countries/tokens, transaction speed claims, licensing/regulatory statements, insurance/custody claims, partner endorsements, launch dates, or Apple Pay/Google Pay/Visa availability claims. Do not add App Store/Google Play badges without real approved links. Any new unconfirmed detail should read as a placeholder (see `PlaceholderNote` usage across `src/routes/`).

## Where to go next

This is a complete, single-purpose marketing site — there is no phased backend roadmap here (no `PLAN.md`). Future work is content refinement (replacing placeholders with confirmed copy/emails/legal text) and swapping in real assets, not new application features.
