# REKCOON Help

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000. The dev server uses root paths, so images resolve at `/assets/...`.

## Production build

```bash
npm run typecheck
npm run lint
npm run build
```

Static files are written to `out/`. Open `out/index.html` only through a static server. Opening the file directly can break root-absolute asset paths.

There is no server runtime. Chart embeds, video files, and image downloads are all static.

## Deployment

**Root domain or user GitHub Pages site:** build with `NEXT_PUBLIC_BASE_PATH` unset and publish `out/`.

**This project repository on GitHub Pages:** push to `main`. `.github/workflows/pages.yml` installs, builds with `NEXT_PUBLIC_BASE_PATH=/REKCOON`, and deploys the `out/` folder. Pages source must be **GitHub Actions**.

Expected URL: `https://jackmiller825.github.io/REKCOON/`.

If assets 404 after a rename, the base path no longer matches the repository name. Change `NEXT_PUBLIC_BASE_PATH` in the workflow and set `NEXT_PUBLIC_SITE_URL` to the origin only (`https://username.github.io`), not the project path. The Open Graph image is built from both values so the banner URL includes the project path.

Do not invent a production domain in metadata. `metadataBase` uses `NEXT_PUBLIC_SITE_URL`, or `http://localhost:3000` when that variable is absent.

## Project configuration

All public token fields are in `lib/site.ts`.

- Name: Rekt Raccoon
- Ticker: REKCOON
- Chain: Ethereum
- Supply and tax are stored and intentionally not printed on the page
- Liquidity and ownership stay worded as intentions. Do not rewrite them as completed until verified, and do not add a widget that claims they are completed

`lib/content.ts` holds lore, marquee text, gallery entries, and check-in replies.

## Token updates

Set `contractAddress` to the verified `0x` address (40 hex characters). COPY CA is always shown, in the same outlined orange treatment as the reference. It copies the text currently on screen: the real address when one is set, or `Coming Soon..` until then. The status line says “Contract copied.” for a real address and “Copied.” for the placeholder. If the clipboard is blocked, the text is selected so it can be copied manually.

The site will not substitute another token’s address.

## Social link configuration

Set `xUrl` and `telegramUrl` to full `http` or `https` URLs.

- Header X link appears only for `xUrl`
- Footer shows X and Telegram only when each URL is valid
- The closing button opens X when set, otherwise Telegram
- With neither URL, the closing button stays disabled. It does not add a coming-soon caption.

## Chart configuration

`dexscreenerUrl` remains in `lib/site.ts` for a future chart. The live-chart section is not rendered.

## Branding asset replacement

Keep these filenames in `public/assets/`:

- `REKCOON-logo-transparent.png` — header mark. Regenerate `app/icon.png` (192) and `app/apple-icon.png` (180) after replacing it
- `REKCOON-banner-1500x500.png` — Open Graph and Twitter image
- `REKCOON-brand-poster-square.png` — faint wash behind the closing statement
- `REKCOON-telegram-banner-1100x520.png` — not placed on the page. Use it for Telegram, not as another homepage banner

Interface type is Barlow Condensed and DM Sans. It is meant to sit beside the gold outlaw lettering in the artwork, not to redraw that lettering.

## Video files

`one-more-night.mp4` and `still-fine.mp4` stay in `public/assets/`. The “One more night” section is not on the page, so those files are not played.

## Sound system

There is no sound control.

The reference site plays a music file. This repository does not include a licensed track, and the reference file was not copied. A button that only toggles a label would claim sound that never plays, so the control is omitted. Add a track you have rights to, then a new `SoundController` can call `HTMLAudioElement` after a click, with a volume slider, no autoplay, and pause while a video is playing.

## Gallery controls

Click a card to open the dialog.

- Previous and Next buttons
- Left and Right arrow keys
- Escape, the ✕ button, or a click on the backdrop closes it
- Download Art saves the selected file (`download` attribute, same-origin asset)
- Focus returns to the card that opened the dialog
- The dialog traps focus while open and the page behind it does not scroll

Captions and filenames are the `memes` array in `lib/content.ts`. Thumbnails keep each file’s real aspect ratio.

## Daily check-in behavior

The button label stays `I’M FINE.` The portfolio line stays `Your portfolio is down 80%.`

Each click replaces “Go on. Say it again.” with the next line:

1. YOU SAID THAT YESTERDAY.
2. THE WALLET DISAGREES.
3. DENIAL LEVEL: PROFESSIONAL.
4. ANOTHER DAY. ANOTHER COPING SESSION.
5. THE HAT IS STILL BULLISH.

Then it repeats. The new line is an `aria-live` message and fades in unless reduced motion is on. Nothing counts users or invents market activity.

## Troubleshooting

- **Images 404 on GitHub Pages:** the base path was not applied. Rebuild with `NEXT_PUBLIC_BASE_PATH=/REKCOON`.
- **Images 404 locally:** do not set that variable for `npm run dev`.
- **COPY CA copies “Coming Soon..”:** that is expected until `contractAddress` is a verified `0x` address.
- **Horizontal scroll:** check a new wide asset. Hero and ticker are clipped by their own containers.
- **Build font warning:** Barlow Condensed and DM Sans load from Google Fonts in the browser. The build does not download them.

## Accessibility

- One `h1`. Section titles are `h2`. Lore cards and the dialog use `h3`.
- Skip link, visible focus rings, 44px targets on menu, copy, dialog, and mobile text links.
- Decorative logo is empty alt because the word REKCOON is in the same link. Scene images have descriptions.
- Dialog is a native `dialog` with `showModal` (focus trap, Escape, background scroll lock).
- Copy and check-in status use `role="status"` or `aria-live="polite"`.
- `prefers-reduced-motion` stops the marquee, scroll smoothing, reveals, and the check-in fade.

## Known limitations

- Lore on the reference is five columns of type with no pictures. This site matches that. Chapter artworks are used in the gallery and the check-in, not as a second image stack inside the lore.
- The live chart and “One more night” video section are omitted.
- The reference soundtrack and its player are absent on purpose.
- X, Telegram, contract, and Dexscreener stay in a coming-soon state until `lib/site.ts` is filled in.
- Liquidity burn and ownership renounce are not shown as done.
- The shipped MP4s are still-image loops and are not shown on the page.
- Fidelity was checked against the live reference CSS and browser screenshots. It is not a claim that every pixel matches at every width.
- The closing section carries a faint brand-poster wash. The reference ending is flat color only.
- Mobile navigation is an explicit menu. The reference instead hides some links as the window narrows.
