import { tickerLine } from "@/lib/content";

export function MarqueeSection() {
  const line = tickerLine.repeat(2);
  return (
    <div className="ticker" aria-hidden="true">
      <div>
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}
