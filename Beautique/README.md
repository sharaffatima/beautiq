# Beautiq Kosmetikstudio — React rebuild

React + TypeScript rebuild of the Beautiq landing page (v1 was plain
HTML/CSS/JS — see the project's earlier `CLAUDE.md` for that version).

## Stack
- React 19 + TypeScript, scaffolded with Vite
- `react-helmet-async` for SEO `<title>`/meta tags (see note below)
- `react-icons` (Fa6 set) for all icons — no emojis
- Plain CSS with custom properties (no CSS framework) — same design tokens
  as the v1 build for brand consistency

## About the "React Helmet" choice
You asked for React Helmet by name. The original `react-helmet` package is
unmaintained and has known issues under React 18/19 with `<StrictMode>` and
concurrent rendering. I used **react-helmet-async** instead — it's the
actively maintained fork with the same API (`<Helmet>` component), just
safer for a current React version. Swapping back to classic `react-helmet`
is a one-line change in `src/main.tsx` and `src/components/Seo.tsx` if you
specifically need the original package.

## Sections (in the order you specified)
1. Navbar — floating island, hides on scroll-down / reveals on scroll-up
2. Hero
3. About Us
4. Features
5. Our Location (embedded map + address/hours)
6. Contact Us — **no form**, three link-cards: WhatsApp, Instagram, Call
7. Closing welcoming section
8. Footer

No backend, no database, no API routes — pure client-side landing page,
same as before.

## Run it
```bash
npm install
npm run dev       # local dev server
npm run build     # type-checks + production build into dist/
npm run preview   # serve the production build locally
```

## Structure
```
src/
├── components/     # one .tsx + .css per section, plus Seo.tsx, Divider.tsx
├── data/content.ts  # typed copy/data (nav links, features, contact cards)
├── hooks/useScrollDirection.ts
├── styles/          # tokens.css (design system) + global.css (reset/base)
├── App.tsx
└── main.tsx
```
