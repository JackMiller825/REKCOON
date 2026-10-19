import { isHttpUrl, site } from "@/lib/site";
import { TelegramIcon, XIcon } from "./SocialIcons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const xReady = isHttpUrl(site.xUrl);
  const telegramReady = isHttpUrl(site.telegramUrl);

  return (
    <footer>
      <a className="brand" href="#home">
        JIMOTHY
      </a>
      <p>BORN JIMOTHY. REKT BY CHOICE.</p>
      <div className="footer-links">
        {xReady ? (
          <a className="social-icon" href={site.xUrl} target="_blank" rel="noopener noreferrer" aria-label="X">
            <XIcon />
          </a>
        ) : (
          <span className="social-icon" aria-label="X">
            <XIcon />
          </span>
        )}
        {telegramReady ? (
          <a className="social-icon" href={site.telegramUrl} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <TelegramIcon />
          </a>
        ) : (
          <span className="social-icon" aria-label="Telegram">
            <TelegramIcon />
          </span>
        )}
      </div>
      <small>© {year} JIMOTHY THE REKT RACCOON. STILL HERE.</small>
    </footer>
  );
}
