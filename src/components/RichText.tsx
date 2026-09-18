import Link from "next/link";
import { type ReactNode } from "react";

export type RichBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "warn"; text: string }
  | { type: "link"; text: string; href: string; external?: boolean }
  | {
      type: "cta";
      title: string;
      text: string;
      href: string;
      label: string;
      external?: boolean;
    };

function LinkLine({ block }: { block: Extract<RichBlock, { type: "link" }> }) {
  if (block.external) {
    return (
      <p>
        <a href={block.href} target="_blank" rel="noopener noreferrer">
          {block.text}
        </a>
      </p>
    );
  }
  return (
    <p>
      <Link href={block.href}>{block.text}</Link>
    </p>
  );
}

function CtaBox({ block }: { block: Extract<RichBlock, { type: "cta" }> }) {
  const inner = (
    <>
      <span className="block text-sm font-semibold text-white">
        {block.title}
      </span>
      <span className="mt-1 block text-sm text-text-muted leading-relaxed">
        {block.text}
      </span>
      <span className="mt-3 inline-block rounded-full bg-neon px-4 py-1.5 text-xs font-semibold text-bg-dark">
        {block.label}
      </span>
    </>
  );

  return (
    <div className="my-8 rounded-xl border border-neon/20 bg-neon/5 p-5">
      {block.external ? (
        <a
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {inner}
        </a>
      ) : (
        <Link href={block.href} className="block">
          {inner}
        </Link>
      )}
    </div>
  );
}

export default function RichText({
  blocks,
}: {
  blocks: RichBlock[];
}): ReactNode {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return <h2 key={i}>{block.text}</h2>;
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "p":
            return <p key={i}>{block.text}</p>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            );
          case "tip":
            return (
              <div
                key={i}
                className="my-5 flex items-start gap-3 rounded-lg border border-neon/20 bg-neon/5 p-4"
              >
                <svg
                  className="mt-0.5 shrink-0"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#2AD18B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="text-sm text-neon/90 leading-relaxed">
                  {block.text}
                </span>
              </div>
            );
          case "warn":
            return (
              <div
                key={i}
                className="my-5 flex items-start gap-3 rounded-lg border border-yellow-400/20 bg-yellow-400/5 p-4"
              >
                <svg
                  className="mt-0.5 shrink-0"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#FACC15"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span className="text-sm text-yellow-100/90 leading-relaxed">
                  {block.text}
                </span>
              </div>
            );
          case "link":
            return <LinkLine key={i} block={block} />;
          case "cta":
            return <CtaBox key={i} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
