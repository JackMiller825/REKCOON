"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/site";

const clips = [
  {
    src: "one-more-night.mp4",
    poster: "closeup.jpg",
    posterAlt: "Close portrait of Rekt Raccoon under warm light",
    left: "01 — TONIGHT WE WATCH.",
    right: "THEN TOMORROW.",
  },
  {
    src: "still-fine.mp4",
    poster: "office-fine.jpg",
    posterAlt: "Rekt Raccoon with coffee while the room behind him burns",
    left: "02 — NOTHING TO SAY.",
    right: "STILL REKT.",
  },
];

export function CinematicVideoSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const videos = Array.from(root.querySelectorAll("video"));
    if (reduce) {
      videos.forEach((video) => {
        video.autoplay = false;
        video.pause();
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              /* Autoplay can still be blocked. Controls remain available. */
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.45 },
    );
    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="night section reveal" id="night" ref={ref} aria-labelledby="night-label">
      <div className="section-top">
        <p className="eyebrow" id="night-label">
          02 / ONE MORE NIGHT
        </p>
        <span>THE SAME TRADE. ON LOOP.</span>
      </div>
      <div className="video-grid">
        {clips.map((clip) => (
          <figure key={clip.src}>
            <video
              controls
              playsInline
              loop
              muted
              preload="none"
              poster={asset(clip.poster)}
              aria-label={`${clip.left} ${clip.right} Silent eight-second artwork loop.`}
            >
              <source src={asset(clip.src)} type="video/mp4" />
            </video>
            <figcaption>
              <span>{clip.left}</span>
              <span>{clip.right}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="video-note">Silent eight-second loops made from still artwork. They are not fully animated scenes.</p>
    </section>
  );
}
