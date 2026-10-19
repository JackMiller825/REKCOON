import { asset } from "@/lib/site";
import { ContractPanel } from "./ContractPanel";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">JIMOTHY THE REKT RACCOON · $REKCOON · ON ETHEREUM</p>
        <h1>
          BORN JIMOTHY.
          <br />
          <em>REKT BY CHOICE.</em>
        </h1>
        <p className="hero-description">
          Jimothy was just an ordinary raccoon with extraordinary confidence and absolutely no understanding of risk management.
        </p>
        <p className="hero-secondary">He lost his portfolio. Not his personality.</p>
        <div className="hero-actions">
          <a className="button orange" href="#lore">
            MEET JIMOTHY
          </a>
        </div>
        <ContractPanel />
      </div>
      <div className="hero-photo">
        <img
          src={asset("texcat.jpg")}
          alt="Jimothy in a cowboy hat, smoking on a balcony above the city at night"
          width={1000}
          height={1000}
          fetchPriority="high"
          decoding="async"
        />
        <div className="photo-note">
          “yeah, i’m good.”
          <small>— a completely unreliable trader</small>
        </div>
        <span className="photo-label">03:00 AM / SOMEWHERE ABOVE THE CITY</span>
      </div>
      <a href="#lore" className="scroll-note">
        SCROLL. HE’S NOT GOING ANYWHERE.
      </a>
    </section>
  );
}
