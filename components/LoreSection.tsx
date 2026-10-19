import { lore } from "@/lib/content";
import { StoryChapter } from "./StoryChapter";

export function LoreSection() {
  return (
    <section className="intro section reveal" id="lore" aria-labelledby="lore-label">
      <div className="section-top">
        <p className="eyebrow" id="lore-label">
          01 / THE LORE
        </p>
        <span>FIVE CHAPTERS. ZERO RISK MANAGEMENT.</span>
      </div>
      <div className="intro-heading">
        <h2>
          YOU KNOW
          <br />
          <em>JIMOTHY.</em>
        </h2>
        <p>
          He lost his portfolio.
          <br />
          Not his personality.
        </p>
      </div>
      <div className="lore-grid">
        {lore.map((chapter, index) => (
          <StoryChapter key={chapter.index} chapter={chapter} last={index === lore.length - 1} />
        ))}
      </div>
    </section>
  );
}
