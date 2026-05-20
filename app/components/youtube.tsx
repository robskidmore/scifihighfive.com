"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import type { YouTubePosterResolution } from "./youtube-utils";

type Props = {
  videoId: string;
  title: string;
  poster?: YouTubePosterResolution;
};

export function Youtube({ videoId, title, poster = "maxresdefault" }: Props) {
  return (
    <LiteYouTubeEmbed
      id={videoId}
      title={title}
      poster={poster}
      wrapperClass="yt-lite"
      webp
    />
  );
}
