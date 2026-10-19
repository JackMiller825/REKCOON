import type { LoreChapter } from "@/lib/content";

function Paragraph({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <p>
      {lines.map((line, index) => (
        <span key={`${index}-${line}`}>
          {index > 0 && <br />}
          {line}
        </span>
      ))}
    </p>
  );
}

export function StoryChapter({ chapter, last = false }: { chapter: LoreChapter; last?: boolean }) {
  return (
    <article className={last ? "last-chapter" : undefined}>
      <span className="chapter">{chapter.index}</span>
      <h3>{chapter.title}</h3>
      {chapter.paragraphs.map((paragraph) => (
        <Paragraph key={paragraph} text={paragraph} />
      ))}
    </article>
  );
}
