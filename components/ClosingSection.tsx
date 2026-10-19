import { asset, isHttpUrl, site } from "@/lib/site";

export function ClosingSection() {
  const href = isHttpUrl(site.telegramUrl) ? site.telegramUrl.trim() : "";

  return (
    <section className="ending section reveal" aria-labelledby="ending-label">
      <img
        className="ending-wash"
        src={asset("REKCOON-brand-poster-square.png")}
        alt=""
        width={1024}
        height={1024}
        loading="lazy"
        decoding="async"
      />
      <p className="eyebrow">STILL HERE. STILL JIMOTHY.</p>
      <h2 id="ending-label">
        THE MARKET CALLED HIM <em>REKT.</em>
        <br />
        HIS FRIENDS STILL CALL HIM <em>JIMOTHY.</em>
      </h2>
      <p>Still here. Still Jimothy. Still REKCOON.</p>
      {href ? (
        <a className="button orange" href={href} target="_blank" rel="noopener noreferrer" aria-label="Opens the official Telegram">
          JOIN THE TRASH CLUB
        </a>
      ) : (
        <>
          <button className="button orange" type="button" disabled>
            JOIN THE TRASH CLUB
          </button>
          <span className="ending-status">Telegram link not published yet.</span>
        </>
      )}
    </section>
  );
}
