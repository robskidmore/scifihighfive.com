import Link from "next/link";
import { HeroPlay, PlayButton } from "./components/play-button";
import {
  EpisodeThumbnail,
  type ThumbnailFlavor,
} from "./components/episode-thumbnail";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { episodes } from "./episodes";

const flavorVar: Record<ThumbnailFlavor, string> = {
  peach: "var(--accent)",
  sage: "var(--flavor-sage)",
  sky: "var(--flavor-sky)",
  lavender: "var(--flavor-lavender)",
};

export default function Home() {
  const [latest, ...recent] = episodes;

  return (
    <main className="bg-canvas text-ink min-h-screen overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,80px)] py-[clamp(28px,4vw,52px)]">
        <SiteHeader />

        {/* Wordmark + tagline */}
        <header className="mb-[clamp(72px,10vw,148px)]">
          <h1 className="font-display font-extrabold text-[clamp(64px,14vw,192px)] leading-[0.86] tracking-[-0.045em] break-words">
            <span className="block">SCIFI</span>
            <span className="block">
              HIG<span className="text-accent">H</span>FIVE
            </span>
          </h1>
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-[clamp(20px,3vw,48px)] mt-[clamp(28px,4vw,52px)]">
            <div aria-hidden="true" />
            <div>
              <p className="font-body italic font-normal text-[clamp(20px,2.2vw,28px)] leading-[1.4] text-ink">
                A podcast about science fiction, weird tech, and the small parts
                of the future that make us laugh.
              </p>
              <p className="font-body italic font-normal text-[clamp(18px,1.7vw,22px)] leading-[1.45] text-ink-soft mt-5">
                With Caitlin Jacobs & Rob Skidmore.
              </p>
            </div>
          </div>
        </header>

        {/* Now playing ornament */}
        <div className="flex items-center gap-[0.9ch] text-ink-faint font-mono text-[13px] tracking-[0.3em] select-none mb-[clamp(28px,4vw,52px)] before:content-[''] before:flex-1 before:h-px before:bg-rule after:content-[''] after:flex-1 after:h-px after:bg-rule">
          <span className="inline-flex items-baseline">
            NOW PLAYING
            <span aria-hidden="true" className="signal-cursor" />
          </span>
        </div>

        {/* Hero episode */}
        <article
          aria-labelledby="latest-title"
          className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[clamp(32px,5vw,80px)] items-start mb-[clamp(92px,12vw,148px)] max-[880px]:grid-cols-1 max-[880px]:gap-[clamp(28px,4vw,40px)]"
        >
          <EpisodeThumbnail
            videoId={latest.youtubeId}
            alt=""
            flavor={latest.thumbnail.flavor}
            rotation={latest.thumbnail.rotation}
            size="hero"
            priority
            className="max-[880px]:max-w-full"
          />

          <div className="flex flex-col gap-[22px]">
            <span
              className="font-mono font-normal text-[clamp(56px,9vw,112px)] leading-[0.9] tracking-[-0.02em] text-ink-soft self-start"
              aria-hidden="true"
            >
              №
              <span style={{ color: flavorVar[latest.thumbnail.flavor] }}>
                {latest.number}
              </span>
            </span>

            <p className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink-faint">
              {latest.runtime}
              <span className="text-rule mx-2" aria-hidden="true">·</span>
              {latest.date}
            </p>

            <h2
              id="latest-title"
              className="font-display font-bold text-[clamp(40px,6vw,88px)] leading-[0.96] tracking-[-0.028em] text-balance text-ink"
            >
              <Link
                href={`/episodes/${latest.number}`}
                className="text-inherit no-underline bg-no-repeat bg-left-bottom bg-[length:0%_1px] [background-image:linear-gradient(var(--accent),var(--accent))] transition-[background-size] duration-300 ease-[var(--ease-out-quart)] hover:bg-[length:100%_1px] focus-visible:bg-[length:100%_2px] focus-visible:outline-none"
              >
                {latest.title}
              </Link>
            </h2>

            <p className="font-body italic font-semibold text-[clamp(28px,3.4vw,44px)] leading-[1.18] tracking-[-0.008em] text-ink-soft">
              {latest.hosts}
            </p>

            <p className="font-body font-normal text-[19px] leading-[1.6] text-ink-soft max-w-[62ch]">
              {latest.blurb}
            </p>

            <HeroPlay
              episodeNumber={latest.number}
              title={latest.title}
              showNotesHref={`/episodes/${latest.number}`}
              flavor={latest.thumbnail.flavor}
            />
          </div>
        </article>

        {/* Prior transmissions */}
        <section
          aria-labelledby="prior-heading"
          className="mb-[clamp(72px,10vw,148px)]"
        >
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 mb-[clamp(28px,4vw,52px)]">
            <h3
              id="prior-heading"
              className="font-display font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.022em] text-balance text-ink"
            >
              Prior transmissions<span className="text-accent">.</span>
            </h3>
            <a
              href="#"
              className="font-body italic font-medium text-[17px] leading-[1.4] text-ink underline decoration-accent decoration-1 underline-offset-4 [text-decoration-skip-ink:none] inline-block px-1 py-2 -mx-1 -my-2 transition-[text-decoration-thickness] duration-200 ease-[var(--ease-out-quart)] hover:decoration-[3px]"
              aria-label="Browse all 47 episodes in the archive"
            >
              all 47 episodes →
            </a>
          </div>

          <ol className="list-none m-0 p-0">
            {recent.map((ep) => {
              return (
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
                    <h4 className="font-body italic font-semibold text-[clamp(22px,2.6vw,32px)] leading-[1.18] tracking-[-0.008em] text-ink">
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
                    </h4>
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
              );
            })}
          </ol>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
