export type YouTubePosterResolution =
  | "default"
  | "mqdefault"
  | "hqdefault"
  | "sddefault"
  | "maxresdefault";

export function youtubeThumbnailUrl(
  videoId: string,
  resolution: YouTubePosterResolution = "maxresdefault",
): string {
  return `https://i.ytimg.com/vi/${videoId}/${resolution}.jpg`;
}

export function extractYouTubeId(url: string): string | null {
  const pattern = /(?:v=|\/embed\/|\/shorts\/|youtu\.be\/)([A-Za-z0-9_-]{11})/;
  const match = url.match(pattern);
  return match?.[1] ?? null;
}
