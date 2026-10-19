"use client";

import { useCallback, useState } from "react";
import { memes } from "@/lib/content";
import { asset } from "@/lib/site";
import { MemeLightbox } from "./MemeLightbox";

export function MemeGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const onIndex = useCallback((next: number) => setIndex(next), []);
  const onClose = useCallback(() => setIndex(null), []);

  return (
    <>
      <section className="memes section reveal" id="memes" aria-labelledby="memes-label">
      <div className="section-top">
        <p className="eyebrow" id="memes-label">
          03 / COPING MATERIAL
        </p>
        <span>EMOTIONAL DAMAGE. EXCELLENT HAT.</span>
      </div>
      <div className="intro-heading">
        <h2>
          DIFFERENT DAY.
          <br />
          <em>SAME BAD TRADE.</em>
        </h2>
        <p>
          A little too relatable?
          <br />
          Welcome to the trash club.
        </p>
      </div>
      <div className="meme-grid">
        {memes.map((meme, memeIndex) => (
          <button
            key={meme.file}
            className="meme-card"
            type="button"
            aria-label={`Open meme: ${meme.caption}`}
            onClick={() => setIndex(memeIndex)}
          >
            <div className="meme-image">
              <img
                src={asset(meme.file)}
                alt={`${meme.caption} Rekt Raccoon.`}
                width={meme.width}
                height={meme.height}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="meme-overlay">
              {meme.caption}
              <strong>Rekcoon is fine.</strong>
            </div>
            <div className="meme-meta">
              <span>{meme.label}</span>
              <span>OPEN +</span>
            </div>
          </button>
        ))}
      </div>
      </section>
      <MemeLightbox memes={memes} index={index} onDismiss={onClose} onIndex={onIndex} />
    </>
  );
}
