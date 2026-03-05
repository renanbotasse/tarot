# 🔮 Rasputin's Eye

> An online Tarot experience inspired by Zoltar fortune-telling machines and American carnival aesthetics from the 1920s–1940s, built on the original 1911 Rider-Waite deck.

---

## What Is This?

**Rasputin's Eye** is a fully client-side Tarot reading web application. The user chooses a spread type, interactively shuffles the deck, selects their cards, and reveals each one with a 3D flip animation — seeing the meaning of each card registered in a persistent side panel as the reading unfolds.

The session survives navigation between pages and only resets when the browser is refreshed or the user starts a new spread.

---

## Features

- 🃏 **4 spread types** — Daily Card, Three Cards (Past/Present/Future), Pentagram (5 elements), and Celtic Cross (10 cards following Waite's original 1911 positions)
- 🎴 **Full 78-card Rider-Waite deck** — all Major and Minor Arcana with upright meanings
- ✨ **Interactive shuffle & reveal** — cards fan out, user picks them manually, each flips with a 3D animation on reveal
- 📖 **Persistent interpretation panel** — card meanings accumulate on the side as the reading progresses, with position tags and Waite's original descriptions
- 🌍 **Bilingual** — English and Portuguese (PT-BR) via i18next
- 📱 **Fully responsive** — mobile-optimized with bottom sheet panels and thumb-friendly interactions
- 🎪 **Carnival aesthetic** — vintage Zoltar / 1920s American circus visual design

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (3D flip, shuffle, transitions) |
| State | Zustand |
| i18n | i18next + react-i18next |
| Testing | Jest + Testing Library + Playwright |
| Hosting | Vercel |

---

## Architecture

The project follows **Clean Architecture** with strict layer separation:

```
Presentation   →  app/, components/       React components, pages
Application    →  store/, hooks/          Zustand stores, React hooks
Domain         →  domain/                 Pure business logic, entities, interfaces
Infrastructure →  data/, lib/             Static card data, i18n, theme config
```

The dependency rule is enforced throughout: outer layers depend on inner layers, never the reverse. Components never import data directly — they always go through hooks and stores.

Key principles applied:
- **SOLID** — single responsibility per file, open/closed spread config, dependency inversion via repository interfaces
- **ACID** in Zustand mutations — atomic state updates with consistency guards, no partial session mutations
- **Pure domain functions** — `shuffleDeck` and `dealCards` are side-effect free and fully unit tested

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — arcade cabinet with Rasputin background and spread selector |
| `/reading` | Active reading — card grid + interpretation panel |
| `/library` | Browse all 78 cards with search and filter by arcana/suit |
| `/premium` | Premium personalized audio readings |

---

## Project Structure

```
src/
  domain/          → entities, interfaces, pure use-case functions
  data/            → static card data, spread configs, translations
  store/           → Zustand stores (session, deck)
  hooks/           → React hooks exposing store slices
  components/      → UI components (reading, library, layout)
  app/             → Next.js routes and pages
  lib/             → i18n config, theme tokens
  __tests__/       → unit, component, integration, and E2E tests
public/
  cards/           → all 78 Rider-Waite card images (public domain)
  images/          → site assets
```

---

## Testing

```bash
npm run test            # Jest — unit, component, integration tests
npm run test:watch      # Jest in watch mode
npm run test:e2e        # Playwright E2E tests
npm run test:coverage   # Coverage report
```

Tests cover:
- **Unit** — pure domain functions (`shuffleDeck`, `dealCards`, `validateSession`)
- **Unit** — Zustand store actions and state transitions
- **Component** — card flip behavior, interpretation panel rendering
- **Integration** — full reading flows (select spread → shuffle → pick cards → reveal all)
- **E2E** — Celtic Cross, Three-Card, and Daily Card complete flows via Playwright

---

## Roadmap

### V2 — User Accounts
- [ ] Google OAuth login
- [ ] Save reading history per user
- [ ] User dashboard with past readings
- [ ] Reversed cards (structure already prepared in the data model)
- [ ] Supabase (PostgreSQL + Auth)

### V3 — AI Readings
- [ ] Claude API integration for full spread interpretation
- [ ] Personalized audio narration (TTS)
- [ ] Stripe subscription for premium access

---

## Card Images

All card illustrations are from the **Rider-Waite Tarot (1909)**, illustrated by Pamela Colman Smith under the direction of Arthur Edward Waite. This deck is in the public domain.

---

## License

MIT
