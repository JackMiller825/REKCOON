"use client";

import { useEffect, useState } from "react";
import { asset, isHttpUrl, site } from "@/lib/site";
import { XIcon } from "./SocialIcons";

const links = [
  { href: "#lore", label: "THE LORE" },
  { href: "#memes", label: "COPING MATERIAL" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const xReady = isHttpUrl(site.xUrl);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header>
      <a className="brand" href="#home" onClick={close}>
        <img src={asset("REKCOON-logo-transparent.png")} alt="" width={43} height={43} />
        <span className="brand-name">
          JIMOTHY
          <small>{site.symbol}</small>
        </span>
      </a>
      <div className="header-end">
        <nav id="site-nav" className={open ? "open" : undefined} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
        {xReady ? (
          <a className="xlink" href={site.xUrl} target="_blank" rel="noopener noreferrer" aria-label="X">
            <XIcon />
          </a>
        ) : (
          <span className="xlink" aria-label="X">
            <XIcon />
          </span>
        )}
        <button
          className="menu-btn"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>
    </header>
  );
}
