"use client";

import { useEffect, useRef } from "react";
import type { Meme } from "@/lib/content";
import { asset } from "@/lib/site";

type Props = {
  memes: Meme[];
  index: number | null;
  onDismiss: () => void;
  onIndex: (index: number) => void;
};

export function MemeLightbox({ memes, index, onDismiss, onIndex }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const meme = index !== null ? memes[index] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || index === null || dialog.open) return;
    returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialog.showModal();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dialogRef.current?.close();
      }
      if (index === null) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onIndex((index + 1) % memes.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onIndex((index + memes.length - 1) % memes.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, memes.length, onIndex]);

  const close = () => dialogRef.current?.close();

  const step = (direction: number) => {
    if (index === null) return;
    onIndex((index + direction + memes.length) % memes.length);
  };

  return (
    <dialog
      ref={dialogRef}
      className="meme-dialog"
      aria-labelledby="dialog-caption"
      onClose={() => {
        onDismiss();
        returnFocus.current?.focus();
      }}
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const inside =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;
        if (!inside) close();
      }}
    >
      <button id="close-dialog" type="button" onClick={close} aria-label="Close meme">
        ✕
      </button>
      {meme && index !== null && (
        <>
          <img id="dialog-image" src={asset(meme.file)} alt={meme.caption} width={meme.width} height={meme.height} />
          <h3 id="dialog-caption">{meme.caption}</h3>
          <p>Jimothy is fine.</p>
          <p className="dialog-count">
            {String(index + 1).padStart(2, "0")} / {String(memes.length).padStart(2, "0")}
            <span className="sr-only"> Left and right arrow keys change the image. Escape closes this dialog.</span>
          </p>
          <div className="dialog-actions">
            <button type="button" onClick={() => step(-1)} aria-label="Previous image">
              PREV
            </button>
            <a className="button orange" href={asset(meme.file)} download={meme.file}>
              DOWNLOAD ART
            </a>
            <button type="button" onClick={() => step(1)} aria-label="Next image">
              NEXT
            </button>
          </div>
        </>
      )}
    </dialog>
  );
}
