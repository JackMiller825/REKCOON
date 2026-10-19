import { asset, dexscreenerEmbed, isDexscreenerPair, isHttpUrl, site } from "@/lib/site";

export function ChartSection() {
  const raw = site.dexscreenerUrl.trim();
  const pair = isDexscreenerPair(raw) ? raw : "";
  const external = isHttpUrl(raw) ? raw : "";

  return (
    <section className="section chart-section reveal" id="chart" aria-labelledby="chart-label">
      <div className="section-top">
        <p className="eyebrow" id="chart-label">
          THE CHART
        </p>
        {external ? (
          <a className="text-link" href={external} target="_blank" rel="noopener noreferrer">
            OPEN ON DEXSCREENER
          </a>
        ) : (
          <button className="text-link" type="button" disabled>
            OPEN ON DEXSCREENER
          </button>
        )}
      </div>
      <div className="intro-heading">
        <h2>
          JIMOTHY&apos;S
          <br />
          <em>FINANCIAL DECISIONS</em>
        </h2>
        <p>The chart tells one story. Jimothy tells another.</p>
      </div>
      {pair ? (
        <iframe
          title="Jimothy the Rekt Raccoon live chart on Dexscreener"
          src={dexscreenerEmbed(pair)}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className="chart-placeholder">
          <img
            src={asset("portfolio-v2.jpg")}
            alt="Jimothy watching a red chart on a laptop in a dark room"
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
          />
          <div className="chart-pending">
            <span className="pill">NO LIVE PAIR</span>
            <p>No contract is published, so this panel does not invent a price. A verified Dexscreener pair replaces this still.</p>
          </div>
        </div>
      )}
      <p className="chart-note">
        {external ? (
          <>
            Chart not loading?{" "}
            <a href={external} target="_blank" rel="noopener noreferrer">
              View on Dexscreener.
            </a>
          </>
        ) : (
          "Dexscreener is unavailable until a verified pair URL is set in lib/site.ts."
        )}
      </p>
    </section>
  );
}
