import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const ogImage = new URL(`${basePath}/assets/REKCOON-banner-1500x500.png`, siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rekt Raccoon ($REKCOON) | Still Here. Still Rekt.",
  description:
    "Meet Rekt Raccoon. Bad trades, empty wallet, existential dread, and one very good cowboy hat. A cinematic Ethereum meme token.",
  applicationName: "Rekt Raccoon",
  openGraph: {
    type: "website",
    siteName: "Rekt Raccoon",
    title: "Rekt Raccoon ($REKCOON) | Still Here. Still Rekt.",
    description:
      "Meet Rekt Raccoon. Bad trades, empty wallet, existential dread, and one very good cowboy hat. A cinematic Ethereum meme token.",
    images: [
      {
        url: ogImage,
        width: 1500,
        height: 500,
        alt: "Rekt Raccoon banner. Still here. Still rekt.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rekt Raccoon ($REKCOON) | Still Here. Still Rekt.",
    description:
      "Meet Rekt Raccoon. Bad trades, empty wallet, existential dread, and one very good cowboy hat. A cinematic Ethereum meme token.",
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#11100e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
