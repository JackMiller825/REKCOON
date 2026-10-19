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
          02 / COPING MATERIAL
        </p>
        <span>EMOTIONAL DAMAGE. EXCELLENT HAT.</span>
      </div>
      <div className="intro-heading">
        <h2>
          JIMOTHY&apos;S
          <br />
          <em>COPING MATERIAL</em>
        </h2>
        <p>Different day. Same bad trade.</p>
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
                alt={`${meme.caption} Jimothy is fine.`}
                width={meme.width}
                height={meme.height}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="meme-overlay">
              {meme.caption}
              <strong>Jimothy is fine.</strong>
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
