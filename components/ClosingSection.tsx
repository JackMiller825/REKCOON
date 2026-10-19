import { asset, communityUrl, isHttpUrl, site } from "@/lib/site";

export function ClosingSection() {
  const href = communityUrl();
  const label = isHttpUrl(site.xUrl) ? "Opens the official X profile" : "Opens the official Telegram";

  return (
    <section className="ending section reveal" aria-labelledby="ending-label">
      <img
        className="ending-wash"
        src={asset("REKCOON-brand-poster-square.png")}
        alt=""
        width={1254}
        height={1254}
        loading="lazy"
        decoding="async"
      />
      <p className="eyebrow">NOBODY ASKED IF REKCOON WAS FINE.</p>
      <h2 id="ending-label">
        HE JUST SAID IT
        <br />
        <em>ANYWAY.</em>
      </h2>
      <p>Somewhere in the city, another trader is saying it too.</p>
      {href ? (
        <a className="button orange" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          X · WE’RE REKT TOGETHER
        </a>
      ) : (
        <>
          <button className="button orange" type="button" disabled>
            WE’RE REKT TOGETHER
          </button>
          <span className="ending-small">OFFICIAL LINK COMING SOON</span>
        </>
      )}
      <span className="ending-small">REKT RACCOON / ON ETHEREUM</span>
    </section>
  );
}
