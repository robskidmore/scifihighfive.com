import Image from "next/image";
import { youtubeThumbnailUrl } from "./youtube-utils";

export type ThumbnailFlavor = "peach" | "sage" | "sky" | "lavender";

type Props = {
  videoId: string;
  alt: string;
  flavor: ThumbnailFlavor;
  rotation: number;
  size: "hero" | "small";
  priority?: boolean;
  className?: string;
};

const flavorToken: Record<ThumbnailFlavor, string> = {
  peach: "var(--accent)",
  sage: "var(--flavor-sage)",
  sky: "var(--flavor-sky)",
  lavender: "var(--flavor-lavender)",
};

export function EpisodeThumbnail({
  videoId,
  alt,
  flavor,
  rotation,
  size,
  priority = false,
  className = "",
}: Props) {
  const dimensions =
    size === "hero"
      ? { width: 1280, height: 720 }
      : { width: 480, height: 270 };

  const src =
    size === "hero"
      ? youtubeThumbnailUrl(videoId, "maxresdefault")
      : youtubeThumbnailUrl(videoId, "mqdefault");

  const wrapperStyle: React.CSSProperties = {
    ["--thumb-rotate" as string]: `${rotation}deg`,
    ["--duotone-color" as string]: flavorToken[flavor],
  };

  const sizeClass =
    size === "hero"
      ? "max-w-[680px] rounded-[14px]"
      : "max-w-[320px] rounded-lg";

  return (
    <figure
      className={`thumb-duotone w-full aspect-video m-0 ${sizeClass} ${className}`}
      style={wrapperStyle}
    >
      <Image
        src={src}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        sizes={
          size === "hero"
            ? "(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 560px"
            : "(max-width: 768px) 100vw, 200px"
        }
        priority={priority}
        className="block w-full h-full object-cover"
      />
    </figure>
  );
}
