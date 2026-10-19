import { ChartSection } from "./ChartSection";
import { CinematicVideoSection } from "./CinematicVideoSection";
import { ClosingSection } from "./ClosingSection";
import { DailyCheckin } from "./DailyCheckin";
import { HeroSection } from "./HeroSection";
import { LoreSection } from "./LoreSection";
import { MarqueeSection } from "./MarqueeSection";
import { MemeGallery } from "./MemeGallery";
import { MotionRoot } from "./MotionRoot";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function Landing() {
  return (
    <MotionRoot>
      <a className="skip" href="#home">
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ChartSection />
        <LoreSection />
        <CinematicVideoSection />
        <MemeGallery />
        <DailyCheckin />
        <ClosingSection />
      </main>
      <SiteFooter />
    </MotionRoot>
  );
}
