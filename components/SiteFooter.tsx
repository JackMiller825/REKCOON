import { isHttpUrl, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a className="brand" href="#home">
        REKCOON
      </a>
      <p>A MEME. A MOOD. A VERY BAD TRADE.</p>
      <p>REKT RACCOON / ON ETHEREUM</p>
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
        © {year} REKT RACCOON. STILL HERE.
      </small>
    </footer>
  );
}
