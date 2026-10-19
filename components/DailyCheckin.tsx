"use client";

import { useState } from "react";
import { checkInReplies } from "@/lib/content";
import { asset } from "@/lib/site";

export function DailyCheckin() {
  const [step, setStep] = useState(-1);
  const note = step < 0 ? "Go on. Say it again." : checkInReplies[step % checkInReplies.length];

  return (
    <section className="fine-machine section reveal" aria-labelledby="checkin-label">
      <div>
        <p className="eyebrow">THE DAILY CHECK-IN</p>
        <h2 id="checkin-label">YOU GOOD?</h2>
        <p id="situation">Your portfolio is down 80%.</p>
        <button
          className="button orange"
          id="fine-button"
          type="button"
          onClick={() => setStep((value) => value + 1)}
        >
          I’M FINE.
        </button>
        <span key={step} className={step < 0 ? "machine-note" : "machine-note said"} id="fine-note" aria-live="polite">
          {note}
        </span>
      </div>
      <img
        src={asset("office-fine.jpg")}
        width={1000}
        height={1000}
        loading="lazy"
        decoding="async"
        alt="Rekt Raccoon holding coffee, looking calm while the office behind him burns"
      />
    </section>
  );
}
