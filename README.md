# SNOWSY

> Build faster. Scale smarter.

Enterprise software and digital platforms, engineered with precision. From concept to deployment, we build systems that last.

**Website:** [snowsy.dev](https://snowsy.dev)

## Tech Stack

- **Framework:** TanStack Start (Vite 7 + Nitro)
- **Runtime:** Bun
- **UI:** React 19 + Tailwind CSS 4
- **Language:** TypeScript 5.9

## Development

```bash
bun i            # Install dependencies
bun dev          # Start development server
bun run build    # Production build
bun run lint     # Lint code
```

## Structure

```
├── public/
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Logo.tsx
│   │   └── index.ts
│   ├── routes/
│   │   ├── api/
│   │   │   └── sitemap.ts
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── features.tsx
│   │   └── pricing.tsx
│   ├── globals.css
│   ├── router.tsx
│   └── routeTree.gen.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
```
