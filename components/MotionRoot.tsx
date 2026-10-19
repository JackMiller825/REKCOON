"use client";

import { useEffect } from "react";

export function MotionRoot({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    root.classList.add("js");
    const photo = document.querySelector<HTMLElement>(".hero-photo");
    const onScroll = () => {
      if (!photo || window.innerWidth < 900) {
        if (photo) photo.style.transform = "";
        return;
      }
      const shift = Math.min(window.scrollY, 480) * 0.06;
      photo.style.transform = `translate3d(0, ${shift}px, 0)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (photo) photo.style.transform = "";
      root.classList.remove("js");
    };
  }, []);

  return children;
}
