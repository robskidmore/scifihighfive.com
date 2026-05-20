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
    <div className="transcript">
      <ol className="transcript-lines">
        {lines.map((line, i) => (
          <li key={i} className="transcript-line">
            <span className="transcript-speaker">{line.speaker}</span>
            <p className="transcript-text">{line.text}</p>
          </li>
        ))}
      </ol>

      {hasRest && !expanded && (
        <div className="transcript-fade" aria-hidden="true" />
      )}

      {hasRest && (
        <button
          type="button"
          className="transcript-toggle"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "Collapse transcript ↑" : "Expand full transcript →"}
        </button>
      )}
    </div>
  );
}
