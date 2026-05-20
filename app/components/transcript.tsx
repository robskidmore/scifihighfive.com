"use client";

import { useState } from "react";
import type { TranscriptLine } from "../episodes";

type Props = {
  excerpt: TranscriptLine[];
  rest?: TranscriptLine[];
};

export function Transcript({ excerpt, rest }: Props) {
  const [expanded, setExpanded] = useState(false);
  const hasRest = rest && rest.length > 0;
  const lines = expanded && hasRest ? [...excerpt, ...rest] : excerpt;

  return (
    <div className="relative">
      <ol className="list-none m-0 p-0 flex flex-col gap-[clamp(20px,2.4vw,28px)]">
        {lines.map((line, i) => (
          <li
            key={i}
            className="grid grid-cols-[minmax(72px,110px)_minmax(0,1fr)] gap-x-[clamp(16px,2.4vw,28px)] items-baseline max-[640px]:grid-cols-1 max-[640px]:gap-y-1"
          >
            <span className="font-body italic font-semibold text-[17px] leading-[1.5] text-accent">
              {line.speaker}
            </span>
            <p className="font-body text-[18px] leading-[1.55] text-ink-soft m-0 max-w-[64ch]">
              {line.text}
            </p>
          </li>
        ))}
      </ol>

      {hasRest && !expanded && (
        <div
          className="relative h-20 -mt-20 [background:linear-gradient(to_bottom,transparent,var(--canvas)_80%)] pointer-events-none"
          aria-hidden="true"
        />
      )}

      {hasRest && (
        <button
          type="button"
          className="mt-[clamp(22px,3vw,32px)] inline-block bg-transparent border-0 text-accent font-mono text-sm tracking-[0.16em] uppercase pt-3 pb-3 pl-0 pr-3.5 -ml-0.5 cursor-pointer relative after:content-[''] after:absolute after:left-0 after:right-3.5 after:bottom-2 after:h-px after:bg-accent after:scale-x-[0.4] after:origin-left after:transition-transform after:duration-200 after:ease-[var(--ease-out-quart)] hover:after:scale-x-100 focus-visible:after:scale-x-100"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "Collapse transcript ↑" : "Expand full transcript →"}
        </button>
      )}
    </div>
  );
}
