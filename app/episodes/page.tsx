import type { Metadata } from "next";
import Link from "next/link";
import { PlayButton } from "../components/play-button";
import { EpisodeThumbnail } from "../components/episode-thumbnail";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { episodes } from "../episodes";

export const metadata: Metadata = {
  title: "The Transmission Log — every episode · SCIFIHIGHFIVE",
  description:
    "Every episode of SCIFIHIGHFIVE. Science fiction, weird tech, and the small parts of the future that make us laugh.",
};

export default function EpisodesPage() {
  const count = episodes.length;
  const sinceYear = episodes[episodes.length - 1].date.slice(-4);

  return (
    <main className="bg-canvas text-ink min-h-screen overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,80px)] py-[clamp(28px,4vw,52px)]">
        <SiteHeader />

        {/* Hero */}
        <header className="mb-[clamp(72px,11vw,148px)]">
          <h1 className="font-display font-extrabold text-[clamp(56px,11vw,168px)] leading-[0.88] tracking-[-0.04em] text-ink m-0 break-words">
            <span className="block">The transmission</span>
            <span className="block">
              log<span className="text-accent">.</span>
            </span>
          </h1>
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-[clamp(20px,3vw,48px)] mt-[clamp(36px,5vw,72px)] max-[720px]:grid-cols-1 max-[720px]:gap-[clamp(16px,3vw,28px)]">
            <p className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink-faint m-0">
              {count} TRANSMISSIONS
              <span className="text-rule mx-2" aria-hidden="true">·</span>
              SINCE {sinceYear}
            </p>
            <p className="font-body italic font-normal text-[clamp(20px,2.2vw,28px)] leading-[1.4] text-ink-soft m-0 max-w-[44ch]">
              Every dispatch the show has put on tape. Books, films, weird
              research, threads we couldn&apos;t drop. Newest first; the back
              catalog is where the show actually lives.
            </p>
          </div>
        </header>

        {/* Ornament divider */}
        <div className="flex items-center gap-[0.9ch] text-ink-faint font-mono text-[13px] tracking-[0.3em] select-none mb-[clamp(28px,4vw,52px)] before:content-[''] before:flex-1 before:h-px before:bg-rule after:content-[''] after:flex-1 after:h-px after:bg-rule">
          ↓ NEWEST FIRST
        </div>

        {/* All episodes */}
        <section
          aria-labelledby="archive-heading"
          className="mb-[clamp(72px,10vw,148px)]"
        >
          <h2 id="archive-heading" className="sr-only">
            All episodes
          </h2>

          <ol className="list-none m-0 p-0">
            {episodes.map((ep) => (
              <li
                key={ep.number}
                className="grid grid-cols-[minmax(240px,320px)_1fr_auto] gap-x-[clamp(20px,3vw,48px)] items-start py-[clamp(28px,4vw,52px)] border-t border-rule first:border-t-0 max-[720px]:grid-cols-[1fr_auto] max-[720px]:[grid-template-areas:'thumb_thumb'_'content_play'] max-[720px]:gap-y-[clamp(18px,3vw,28px)]"
              >
                <EpisodeThumbnail
                  videoId={ep.youtubeId}
                  alt=""
                  flavor={ep.thumbnail.flavor}
                  rotation={ep.thumbnail.rotation}
                  size="small"
                  className="max-[720px]:[grid-area:thumb] max-[720px]:max-w-full"
                />

                <div className="flex flex-col gap-2.5 min-w-0 max-[720px]:[grid-area:content]">
                  <h3 className="font-body italic font-semibold text-[clamp(22px,2.6vw,32px)] leading-[1.18] tracking-[-0.008em] text-ink">
                    <span
                      className="font-mono font-normal not-italic tracking-[-0.01em] mr-[0.5ch] text-ink-faint"
                      aria-hidden="true"
                    >
                      №{ep.number}
                    </span>
                    <Link
                      href={`/episodes/${ep.number}`}
                      className="text-inherit no-underline bg-no-repeat bg-left-bottom bg-[length:0%_1px] [background-image:linear-gradient(var(--accent),var(--accent))] transition-[background-size] duration-300 ease-[var(--ease-out-quart)] hover:bg-[length:100%_1px] focus-visible:bg-[length:100%_2px] focus-visible:outline-none"
                    >
                      {ep.title}
                    </Link>
                  </h3>
                  <p className="font-body font-normal text-base leading-[1.6] text-ink-soft max-w-[58ch]">
                    {ep.blurb}
                  </p>
                  <p className="font-body italic font-normal text-[clamp(18px,1.7vw,22px)] leading-[1.45] text-ink-soft">
                    {ep.hosts}.
                  </p>
                  <p className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink-faint mt-0.5">
                    {ep.runtime}
                    <span className="text-rule mx-2" aria-hidden="true">·</span>
                    {ep.date}
                  </p>
                </div>

                <PlayButton
                  episodeNumber={ep.number}
                  title={ep.title}
                  size="small"
                  flavor={ep.thumbnail.flavor}
                  className="max-[720px]:[grid-area:play]"
                />
              </li>
            ))}
          </ol>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
