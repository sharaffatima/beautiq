# Beautiq Kosmetikstudio

## Stack

- React 19 + TypeScript, scaffolded with Vite
- `react-helmet-async` for SEO `<title>`/meta tags (see note below)
- `react-icons` (Fa6 set) for all icons — no emojis
- Plain CSS with custom properties (no CSS framework)

## Sections

1. Navbar — floating island, hides on scroll-down / reveals on scroll-up
2. Hero
3. About Us
4. Features
5. Our Location (embedded map + address/hours)
6. Contact Us — **no form**, three link-cards: WhatsApp, Instagram, Call
7. Closing welcoming section
8. Footer

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
