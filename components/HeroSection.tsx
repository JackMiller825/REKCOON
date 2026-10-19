import { asset } from "@/lib/site";
import { ContractPanel } from "./ContractPanel";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">A RACCOON. A CITY. A VERY BAD TRADE.</p>
        <h1>
          WE’RE
          <br />
          <em>REKT.</em>
        </h1>
        <p className="hero-description">
          Bad trades. Empty wallet. Existential dread.
          <br />
          Same hat. Same answer.
        </p>
        <div className="hero-actions">
          <a className="button orange" href="#memes">
            FIND YOUR COPING MECHANISM
          </a>
          <a className="text-link" href="#lore">
            Meet Rekcoon
          </a>
        </div>
        <ContractPanel />
      </div>
      <div className="hero-photo">
        <img
          src={asset("texcat.jpg")}
          alt="Rekt Raccoon in a cowboy hat, smoking on a balcony above the city at night"
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
