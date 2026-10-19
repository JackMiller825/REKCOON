/**
 * Editable token configuration.
 * Leave a field blank until the value is real. The site never invents a
 * contract, chart, or social link, and it never falls back to another project.
 */
export const site = {
  name: "Rekt Raccoon",
  ticker: "REKCOON",
  chain: "Ethereum",
  contractAddress: "",
  xUrl: "",
  telegramUrl: "",
  dexscreenerUrl: "",
  supply: "1,000,000,000",
  tax: "0%",
  liquidity: "Intended to be burned. Not verified.",
  ownership: "Intended to be renounced. Not verified.",
} as const;

/** Set at build time for GitHub Pages project sites. Empty for root hosting. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(name: string) {
  return `${basePath}/assets/${name}`;
}

export function isAddress(value: string) {
  return /^0x[a-fA-F0-9]{40}$/.test(value.trim());
}

export function isHttpUrl(value: string) {
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export function isDexscreenerPair(value: string) {
  if (!isHttpUrl(value)) return false;
  const url = new URL(value.trim());
  return url.hostname === "dexscreener.com" || url.hostname.endsWith(".dexscreener.com");
}

export function dexscreenerEmbed(value: string) {
  const url = new URL(value.trim());
  url.search = "";
  url.hash = "";
  const base = url.toString().replace(/\/$/, "");
  return `${base}?embed=1&loadChartSettings=0&trades=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark`;
}

/** Prefer the official X profile, then Telegram. Empty when neither is set. */
export function communityUrl() {
  if (isHttpUrl(site.xUrl)) return site.xUrl.trim();
  if (isHttpUrl(site.telegramUrl)) return site.telegramUrl.trim();
  return "";
}
