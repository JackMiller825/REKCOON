/**
 * Editable token configuration.
 * Leave a URL or address blank until it is real. The site never invents a
 * contract, chart, price, or social link, and it never falls back to another project.
 */
export const token = {
  name: "Jimothy the Rekt Raccoon",
  ticker: "REKCOON",
  symbol: "$REKCOON",
  chain: "Ethereum",
  contractAddress: "",
  contractDisplay: "Coming Soon..",
  totalSupply: 1_000_000_000,
  taxPercent: 0,
  liquidityStatus: "pending",
  ownershipStatus: "pending",
} as const;

export const site = {
  name: token.name,
  shortName: "Jimothy",
  ticker: token.ticker,
  symbol: token.symbol,
  chain: token.chain,
  contractAddress: token.contractAddress,
  contractDisplay: token.contractDisplay,
  xUrl: "",
  telegramUrl: "",
  dexscreenerUrl: "",
  supply: token.totalSupply.toLocaleString("en-US"),
  tax: `${token.taxPercent}%`,
  liquidity: token.liquidityStatus === "pending" ? "Pending. Not burned." : "Burned.",
  ownership: token.ownershipStatus === "pending" ? "Pending. Not renounced." : "Renounced.",
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
