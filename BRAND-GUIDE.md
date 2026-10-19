# Brand guide

## Identity

| | |
|---|---|
| Official name | Jimothy the Rekt Raccoon |
| Short name | Jimothy |
| Ticker | $REKCOON |
| Chain | Ethereum mainnet |
| Primary slogan | Born Jimothy. Rekt by choice. |
| Secondary slogan | He lost his portfolio. Not his personality. |
| Contract display | Coming Soon.. until `token.contractAddress` is a verified `0x` address |

His friends call him Jimothy. The market calls him REKT. He says he’s fine.

Do not use “Rekt Raccoon” by itself as the complete project name. The ticker `$REKCOON` stays.

## Character

Jimothy is a tired raccoon in a weathered cowboy hat, red-and-black plaid shirt, gold chain, and Ethereum pendant. The world around him is a rainy neon city: empty bars, lonely diners, and bad trades. The joke is that his personality never matches the size of the loss.

Copy can be funny and melancholy. It must not promise returns, a burn, or a renounced owner until those facts are verified in `lib/site.ts`.

## Four branding files

Use the supplied artwork. Do not rebuild the gold Western lettering with CSS text.

| File | Production size | Token text |
|---|---|---|
| `public/assets/REKCOON-brand-poster-square.png` | 1024 × 1024, opaque | `$REKCOON` only |
| `public/assets/REKCOON-logo-transparent.png` | 1024 × 1024, transparent outside the circle | `$REKCOON` only |
| `public/assets/REKCOON-telegram-banner-1100x520.png` | 1100 × 520, opaque | `JIMOTHY THE REKT RACCOON` and `$REKCOON` |
| `public/assets/REKCOON-banner-1500x500.png` | 1500 × 500, opaque | `JIMOTHY THE REKT RACCOON` and `$REKCOON` |

The logo’s corner pixels are fully transparent (alpha 0). The circle itself is opaque. Favicons are cropped from that file: `app/icon.png` at 192 and `app/apple-icon.png` at 180. Regenerate both after any logo replacement.

The poster and both banners were opaque in the source. Resizing kept that. They are not described as transparent.

Source frames were larger than the production sizes and already matched the target aspect ratios, so they were scaled evenly. They were not stretched.

Scene photographs and the two silent MP4s are not brand replacements. Leave their filenames alone.

## Where each file goes

- Logo: header avatar.
- Square poster: faint wash behind the closing statement, not the hero background. Its baked-in `$REKCOON` sign would fight the hero headline.
- 1500 × 500 banner: Open Graph and Twitter image only.
- 1100 × 520 banner: Telegram artwork. It is not a second homepage banner.

## Interface type

Barlow Condensed for display. DM Sans for body. Orange `#f66b2c` on `#11100e`, paper `#ece9df`. This type sits beside the artwork. It does not imitate the embossed gold sign lettering.

## Voice

Short, deadpan, specific. Jimothy is named in the story, the check-in, the gallery refrain (“Jimothy is fine.”), and the close. The market nickname REKT is something that happened to him, not a second brand name.
