import { asset, dexscreenerEmbed, isDexscreenerPair, isHttpUrl, site } from "@/lib/site";

export function ChartSection() {
  const raw = site.dexscreenerUrl.trim();
  const pair = isDexscreenerPair(raw) ? raw : "";
  const external = isHttpUrl(raw) ? raw : "";

  return (
    <section className="section chart-section reveal" id="chart" aria-labelledby="chart-label">
      <div className="section-top">
        <p className="eyebrow" id="chart-label">
          REKCOON / LIVE CHART
        </p>
        {external ? (
          <a className="text-link" href={external} target="_blank" rel="noopener noreferrer">
            OPEN ON DEXSCREENER
          </a>
        ) : (
          <span className="section-aside">PAIR COMING SOON</span>
        )}
      </div>
      {pair ? (
        <iframe
          title="REKCOON live chart on Dexscreener"
          src={dexscreenerEmbed(pair)}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className="chart-placeholder">
          <img
            src={asset("portfolio-v2.jpg")}
            alt="Rekt Raccoon watching a red chart on a laptop in a dark room"
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
          />
          <div className="chart-pending">
            <span className="pill">NO LIVE PAIR</span>
            <h2>NO CHART YET.</h2>
            <p>The Dexscreener pair has not been added. Nothing here is simulated price data.</p>
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
          "A real chart embed appears here after a verified Dexscreener pair URL is set in lib/site.ts."
        )}
      </p>
    </section>
  );
}
