import { isHttpUrl, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a className="brand" href="#home">
        JIMOTHY
      </a>
      <p>BORN JIMOTHY. REKT BY CHOICE.</p>
      {(isHttpUrl(site.xUrl) || isHttpUrl(site.telegramUrl)) && (
        <div className="footer-links">
          {isHttpUrl(site.xUrl) && (
            <a href={site.xUrl} target="_blank" rel="noopener noreferrer">
              X
            </a>
          )}
          {isHttpUrl(site.telegramUrl) && (
            <a href={site.telegramUrl} target="_blank" rel="noopener noreferrer">
              TELEGRAM
            </a>
          )}
        </div>
      )}
      <small>
        © {year} JIMOTHY THE REKT RACCOON. STILL HERE.
      </small>
    </footer>
  );
}
