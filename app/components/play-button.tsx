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

const playButtonBase =
  "inline-flex items-center justify-center rounded-full bg-accent text-canvas shrink-0 border-0 cursor-pointer transition-[transform,background-color] duration-200 ease-[var(--ease-out-quart)] hover:scale-[1.04] hover:brightness-[1.08] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100 focus-visible:outline-ink focus-visible:outline-offset-4";

type Props = {
  episodeNumber: string;
  title: string;
  size?: "hero" | "small";
  flavor?: ThumbnailFlavor;
  className?: string;
};

export function PlayButton({
  episodeNumber,
  title,
  size = "hero",
  flavor,
  className = "",
}: Props) {
  const [acknowledged, setAcknowledged] = useState(false);

  const label = acknowledged
    ? `Playback for episode ${episodeNumber} arrives next week`
    : `Listen to episode ${episodeNumber}, ${title}`;

  const style: React.CSSProperties = {
    ...(size === "small" ? { alignSelf: "center" } : {}),
    ...(flavor ? { background: flavorColor[flavor] } : {}),
  };

  const sizeClass = size === "small" ? "w-[52px] h-[52px]" : "w-[92px] h-[92px]";

  return (
    <button
      type="button"
      className={`${playButtonBase} ${sizeClass} ${className}`}
      aria-label={label}
      aria-pressed={acknowledged}
      onClick={() => setAcknowledged(true)}
      style={style}
    >
      <span
        className={
          size === "small"
            ? "w-0 h-0 border-y-[8px] border-l-[13px] border-r-0 border-solid border-y-transparent border-l-canvas ml-[3px]"
            : "w-0 h-0 border-y-[14px] border-l-[22px] border-r-0 border-solid border-y-transparent border-l-canvas ml-1.5"
        }
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
  flavor?: ThumbnailFlavor;
};

export function HeroPlay({
  episodeNumber,
  title,
  showNotesHref,
  variant = "home",
  flavor,
}: HeroPlayProps) {
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-6 mt-4">
      <button
        type="button"
        className={`${playButtonBase} w-[92px] h-[92px] ${acknowledged ? "" : "signal-pulse"}`}
        aria-label={
          acknowledged
            ? `Playback for episode ${episodeNumber} arrives next week`
            : `Listen now: episode ${episodeNumber}, ${title}`
        }
        aria-pressed={acknowledged}
        onClick={() => setAcknowledged(true)}
        style={flavor ? { background: flavorColor[flavor] } : undefined}
      >
        <span
          className="w-0 h-0 border-y-[14px] border-l-[22px] border-r-0 border-solid border-y-transparent border-l-canvas ml-1.5"
          aria-hidden="true"
        />
      </button>
      <div>
        <p
          className="font-body italic font-normal text-[19px] leading-[1.4] text-ink min-h-[1.4em]"
          aria-live="polite"
        >
          {acknowledged ? "Playback arrives next week." : "Listen now."}
        </p>
        {variant === "home" ? (
          <p className="font-body italic font-normal text-[17px] leading-[1.4] text-ink-soft mt-1">
            or{" "}
            {showNotesHref ? (
              <Link
                href={showNotesHref}
                className="font-body italic font-medium text-[17px] text-ink underline decoration-accent decoration-1 underline-offset-4 [text-decoration-skip-ink:none] inline-block px-1 py-2 -mx-1 -my-2 transition-[text-decoration-thickness] duration-200 ease-[var(--ease-out-quart)] hover:decoration-[3px]"
              >
                read the show notes →
              </Link>
            ) : (
              <a
                href="#"
                className="font-body italic font-medium text-[17px] text-ink underline decoration-accent decoration-1 underline-offset-4 [text-decoration-skip-ink:none] inline-block px-1 py-2 -mx-1 -my-2 transition-[text-decoration-thickness] duration-200 ease-[var(--ease-out-quart)] hover:decoration-[3px]"
              >
                read the show notes →
              </a>
            )}
          </p>
        ) : (
          <p className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink-faint mt-2">
            {acknowledged ? "STAND BY · NEXT TRANSMISSION" : "TAP TO BEGIN"}
          </p>
        )}
      </div>
    </div>
  );
}
