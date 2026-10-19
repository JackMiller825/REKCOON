import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const ogImage = new URL(`${basePath}/assets/REKCOON-banner-1500x500.png`, siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jimothy the Rekt Raccoon ($REKCOON) | Born Jimothy. Rekt by Choice.",
  description:
    "Meet Jimothy the Rekt Raccoon. A cowboy hat, terrible trades, and an impressive ability to pretend everything is fine. $REKCOON on Ethereum.",
  applicationName: "Jimothy the Rekt Raccoon",
  openGraph: {
    type: "website",
    siteName: "Jimothy the Rekt Raccoon",
    title: "Jimothy the Rekt Raccoon ($REKCOON) | Born Jimothy. Rekt by Choice.",
    description:
      "Meet Jimothy the Rekt Raccoon. A cowboy hat, terrible trades, and an impressive ability to pretend everything is fine. $REKCOON on Ethereum.",
    images: [
      {
        url: ogImage,
        width: 1500,
        height: 500,
        alt: "Jimothy the Rekt Raccoon. $REKCOON on Ethereum.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jimothy the Rekt Raccoon ($REKCOON) | Born Jimothy. Rekt by Choice.",
    description:
      "Meet Jimothy the Rekt Raccoon. A cowboy hat, terrible trades, and an impressive ability to pretend everything is fine. $REKCOON on Ethereum.",
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
