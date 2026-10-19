"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/site";

const clips = [
  {
    src: "one-more-night.mp4",
    poster: "diner.jpg",
    left: "01 — TONIGHT WE WATCH.",
    right: "THEN TOMORROW.",
  },
  {
    src: "still-fine.mp4",
    poster: "office-fine.jpg",
    left: "02 — STILL JIMOTHY.",
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
        video.removeAttribute("autoplay");
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
        <span>SILENT LOOPS. NO AUDIO.</span>
      </div>
      <div className="intro-heading">
        <h2>
          ONE MORE
          <br />
          <em>NIGHT.</em>
        </h2>
        <p>Tomorrow he&apos;ll quit checking the chart. Probably.</p>
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
              aria-label={`${clip.left} ${clip.right} Silent artwork loop. No audio.`}
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
      <p className="video-note">Silent loops made from still artwork. They do not contain a soundtrack.</p>
    </section>
  );
}
