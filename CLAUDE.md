# ImportEspanaWeb — Website

## Stack
- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 with PostCSS
- **Icons:** lucide-react
- **Blog:** gray-matter + remark (markdown-based)
- **Analytics:** Google Analytics (event: calculate_tax)
- **Ads:** Google AdSense (multiple placements)
- **React Compiler:** enabled (babel-plugin-react-compiler)

## Build & Run
```bash
npm run dev       # local dev
npm run build     # production build
npm run start     # production server
npm run lint      # ESLint
```

## Route Structure (src/app/)
| Route | Purpose |
|-------|---------|
| `/` | Main calculator (EU/NonEU, same logic as mobile) |
| `/result` | Calculation breakdown |
| `/about` | About page |
| `/blog` | Blog listing (markdown) |
| `/blog/[slug]` | Blog post |
| `/coche/[slug]` | Car model detail pages |
| `/how-it-works` | How it works |
| `/itp` | ITP tax info page |
| `/importar-desde/[country]` | Country-specific import guides |
| `/importar-coche/[region]` | Region-specific import guides |
| `/valoracion-boe` | BOE valuation tool |
| `/privacy` & `/terms` | Legal pages |
| `/resources` | Resources page |
| `/api/live-stats` | Server route: exchange rates + fuel prices (6h cache) |

## Key Files
- `src/utils/taxCalculator.ts` — same calculator as mobile (duplicated, keep in sync)
- `src/types/index.ts` — same types as mobile (keep in sync)
- `src/constants/translations.ts` — 5-language strings (713 lines — largest file)
- `src/constants/Countries.ts` — countries list with slugs/flags (522 lines)
- `src/constants/Regions.ts` — Spanish regions with ITP rates (488 lines)
- `src/context/LanguageContext.tsx` — language management (localStorage, SSR-safe)
- `src/actions/vehicleSearch.ts` — server action for vehicle data lookup

## External APIs (server-side, cached)
| API | Purpose | Cache |
|-----|---------|-------|
| open.er-api.com | EUR→GBP/PLN exchange rates | 6h |
| sedeapl.mincotur.gob.es | Spanish diesel fuel price | 24h |

## SEO Features
- Next.js Metadata API, Open Graph, canonical URLs
- JSON-LD structured data (`JsonLd.tsx`)
- Dynamic sitemap (`sitemap.ts`)
- robots.ts
- Internal linking: regions + countries
- www → importespana.com redirect (301, in next.config.ts)

## Styling Notes
- Tailwind CSS v4 (PostCSS plugin, not v3 config)
- CSS variables for theme
- Print-specific styles (PrintLayout.tsx)
- Mobile-first, md: breakpoints for desktop layout

## ⚠️ Live Site Rules
- Live at importespana.com — test `npm run build` before deploying
- Both SSR and client components — use "use client" only when needed
- Dynamic imports used for interactive components (SSR: false where needed)

## Future: Supabase
When added: replace localStorage-based language/history, add user auth, possibly server-side calculation history. API routes already exist — Supabase client can be added to `/src/lib/`.
