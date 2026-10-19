# Jimothy the Rekt Raccoon

Single-page cinematic site for **Jimothy the Rekt Raccoon ($REKCOON)** on Ethereum. The layout follows the section order, type scale, and nighttime editorial system of [texcat.fun](https://texcat.fun/), with Jimothy’s artwork, story, and token settings.

This is not a pixel-perfect copy of that site’s source. Spacing and type were calibrated against the live reference. Remaining differences are listed in `HELP.md`.

## Requirements

Node.js 20 or newer. npm.

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run typecheck
npm run lint
```

`npm run build` writes a static export to `out/`. The site does not need a Next.js server at runtime.

## Deployment

### Root host

Upload the contents of `out/` to the web root. Leave `NEXT_PUBLIC_BASE_PATH` unset so asset paths stay `/assets/...`.

### GitHub Pages

The repository workflow `.github/workflows/pages.yml` builds on every push to `main` and deploys with:

- `NEXT_PUBLIC_BASE_PATH=/REKCOON`
- `NEXT_PUBLIC_SITE_URL=https://jackmiller825.github.io`

The live project URL is `https://jackmiller825.github.io/REKCOON/`.

In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

If the repository name changes, update `NEXT_PUBLIC_BASE_PATH` in the workflow to `/{repository-name}`. A user site (`username.github.io`) or a custom domain should use an empty base path instead. Do not invent a production domain in metadata.

## Project configuration

Editable token values live in `lib/site.ts`. `token` is the source of identity. `site` is what the page reads, and it stays in agreement with `token`.

| Field | Empty or pending behavior |
|---|---|
| `token.name` | Jimothy the Rekt Raccoon |
| `token.ticker` / `token.symbol` | REKCOON / $REKCOON |
| `contractAddress` | Shows `Coming Soon..` until the value is a `0x` + 40 hex address. COPY CA stays visible and copies the text on screen. |
| `xUrl` | Header shows `X SOON` until this is an `http(s)` URL. |
| `telegramUrl` | Closing button **Join the Trash Club** opens this URL. Until then the button is disabled and says the Telegram link is not published. |
| `dexscreenerUrl` | Chart embed and **Open on Dexscreener** activate only for a real `dexscreener.com` pair URL. Otherwise the panel is a still, with no fake price. |
| `totalSupply`, `taxPercent` | Stored. Not rendered as a live tokenomics claim. |
| `liquidityStatus`, `ownershipStatus` | `pending` until verified. The page does not say liquidity is burned or ownership is renounced. |

Story copy, gallery captions, marquee text, and check-in lines live in `lib/content.ts`.

## What the page does

- Header: circular logo, **JIMOTHY**, and a smaller **$REKCOON**. Anchors: Chart, The Lore, Coping Material, and X when a real URL exists.
- Mobile menu below 900px, including Escape to close.
- Hero headline “Born Jimothy. Rekt by choice.”, contract row, and orange marquee.
- Chart placeholder until a Dexscreener pair exists.
- Five Jimothy lore chapters.
- Two silent video loops under “One more night.”
- Fourteen-image gallery. Lightbox supports previous, next, arrow keys, Escape, outside click, download of the real file, and focus return.
- Daily check-in cycles six Jimothy replies.
- Closing line and Telegram call to action, or a disabled unavailable state.
- No soundtrack control. The repository has no licensed music.

## Assets

Scene files stay on the original filenames in `public/assets/`. The four branding files were replaced and resized. See `ASSET-MAP.md` and `BRAND-GUIDE.md`.
