# REKCOON

Single-page cinematic site for **Rekt Raccoon ($REKCOON)** on Ethereum. The layout follows the section order, type scale, and nighttime editorial system of [texcat.fun](https://texcat.fun/), with original raccoon artwork, copy, and token settings.

This is not a pixel-perfect copy of that site's source. Spacing and type were calibrated against the live reference stylesheet and screenshots. Remaining differences are listed in `HELP.md`.

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

If the repository name changes, update `NEXT_PUBLIC_BASE_PATH` in the workflow to `/{repository-name}`. A user site (`username.github.io`) or a custom domain should use an empty base path instead.

## Project configuration

Editable token values live only in `lib/site.ts`:

| Field | Empty behavior |
|---|---|
| `contractAddress` | Shows `Coming Soon..`. Copy control stays hidden until the value is a `0x` + 40 hex address. |
| `xUrl` | Header shows `𝕏 SOON`. Closing button stays disabled. |
| `telegramUrl` | Used for the closing button only when X is empty and this is an `http(s)` URL. |
| `dexscreenerUrl` | Placeholder art. An iframe is used only for a real `dexscreener.com` pair URL. |
| `supply`, `tax` | Stored for reference. Not rendered, so the page never implies a live tokenomics claim. |
| `liquidity`, `ownership` | Pending-verification notes. Not rendered as completed facts. |

Story copy, gallery captions, and the daily check-in lines live in `lib/content.ts`.

## What the page does

- Header anchors: Chart, The Lore, Coping Material, and X when a real URL exists.
- Mobile menu below 900px, including Escape to close.
- Hero, contract row, and orange marquee.
- Honest chart panel. No fake prices.
- Five lore chapters in the reference's editorial columns.
- Two silent MP4 loops, muted, looping, and paused off-screen. Reduced motion skips autoplay.
- Fourteen-image gallery. Lightbox supports previous, next, arrow keys, Escape, outside click, download of the real file, and focus return.
- Daily check-in cycles five replies.
- Closing community link, or a disabled coming-soon state.
- No soundtrack control. The repository has no licensed music. See Help.

## Assets

Scene files stay on the original filenames in `public/assets/`. Branding files use the `REKCOON-*` names. See `ASSET-MAP.md`.
