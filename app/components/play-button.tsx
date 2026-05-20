"use client";

import Link from "next/link";
import { useState } from "react";
import type { ThumbnailFlavor } from "./episode-thumbnail";

const flavorColor: Record<ThumbnailFlavor, string> = {
  peach: "var(--accent)",
  sage: "var(--flavor-sage)",
  sky: "var(--flavor-sky)",
  lavender: "var(--flavor-lavender)",
};

type Props = {
  episodeNumber: string;
  title: string;
  size?: "hero" | "small";
  flavor?: ThumbnailFlavor;
};

export function PlayButton({
  episodeNumber,
  title,
  size = "hero",
  flavor,
}: Props) {
  const [acknowledged, setAcknowledged] = useState(false);

  const label = acknowledged
    ? `Playback for episode ${episodeNumber} arrives next week`
    : `Listen to episode ${episodeNumber}, ${title}`;

  const style: React.CSSProperties = {
    ...(size === "small" ? { alignSelf: "center" } : {}),
    ...(flavor ? { background: flavorColor[flavor] } : {}),
  };

  return (
    <button
      type="button"
      className={`play-button${size === "small" ? " play-button-small" : ""}`}
      aria-label={label}
      aria-pressed={acknowledged}
      onClick={() => setAcknowledged(true)}
      style={style}
    >
      <span
        className={`play-icon${size === "small" ? " play-icon-small" : ""}`}
        aria-hidden="true"
      />
    </button>
  );
}

type HeroPlayProps = {
  episodeNumber: string;
  title: string;
  showNotesHref?: string;
  variant?: "home" | "detail";
};

export function HeroPlay({
  episodeNumber,
  title,
  showNotesHref,
  variant = "home",
}: HeroPlayProps) {
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <div
      className="flex flex-wrap items-center gap-6"
      style={{ marginTop: "16px" }}
    >
      <button
        type="button"
        className="play-button"
        aria-label={
          acknowledged
            ? `Playback for episode ${episodeNumber} arrives next week`
            : `Listen now: episode ${episodeNumber}, ${title}`
        }
        aria-pressed={acknowledged}
        onClick={() => setAcknowledged(true)}
      >
        <span className="play-icon" aria-hidden="true" />
      </button>
      <div>
        <p
          className="t-label-italic text-ink"
          aria-live="polite"
          style={{ minHeight: "1.4em", fontSize: "19px" }}
        >
          {acknowledged ? "Playback arrives next week." : "Listen now."}
        </p>
        {variant === "home" ? (
          <p
            className="t-label-italic text-ink-soft"
            style={{ marginTop: "4px" }}
          >
            or{" "}
            {showNotesHref ? (
              <Link href={showNotesHref} className="t-link-italic">
                read the show notes →
              </Link>
            ) : (
              <a href="#" className="t-link-italic">
                read the show notes →
              </a>
            )}
          </p>
        ) : (
          <p
            className="t-meta text-ink-faint"
            style={{ marginTop: "8px" }}
          >
            {acknowledged ? "STAND BY · NEXT TRANSMISSION" : "TAP TO BEGIN"}
          </p>
        )}
      </div>
    </div>
  );
}
