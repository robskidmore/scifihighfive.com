import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroPlay } from "../../components/play-button";
import {
  EpisodeThumbnail,
  type ThumbnailFlavor,
} from "../../components/episode-thumbnail";
import { Youtube } from "../../components/youtube";
import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { Transcript } from "../../components/transcript";
import {
  episodes,
  getEpisode,
  getAdjacentEpisodes,
  type Reference,
} from "../../episodes";

export async function generateStaticParams() {
  return episodes.map((e) => ({ number: e.number }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ number: string }>;
}): Promise<Metadata> {
  const { number } = await params;
  const ep = getEpisode(number);
  if (!ep) return { title: "Transmission lost — SCIFIHIGHFIVE" };
  return {
    title: `№${ep.number} ${ep.title} — SCIFIHIGHFIVE`,
    description: ep.blurb,
  };
}

const kindLabel: Record<Reference["kind"], string> = {
  book: "BOOK",
  film: "FILM",
  essay: "ESSAY",
  game: "GAME",
  article: "ARTICLE",
  thing: "ALSO",
};

const pullQuoteBg: Record<ThumbnailFlavor, string> = {
  peach: "bg-accent",
  sage: "bg-flavor-sage",
  sky: "bg-flavor-sky",
  lavender: "bg-flavor-lavender",
};

const flavorVar: Record<ThumbnailFlavor, string> = {
  peach: "var(--accent)",
  sage: "var(--flavor-sage)",
  sky: "var(--flavor-sky)",
  lavender: "var(--flavor-lavender)",
};

function ReferenceItem({ item }: { item: Reference }) {
  const kindClass =
    "font-mono text-[13px] tracking-[0.18em] uppercase text-ink-faint";
  const titleClass =
    "font-body font-semibold italic text-[clamp(19px,1.8vw,22px)] text-ink";
  const byClass =
    "font-body text-[clamp(17px,1.6vw,20px)] text-ink-soft";
  const yearClass =
    "font-mono text-[14px] tracking-[0.04em] text-ink-faint";

  const body = (
    <>
      <span className={`${kindClass} shrink-0 w-[clamp(60px,8vw,84px)]`}>
        {kindLabel[item.kind]}
      </span>
      <span
        className={`${titleClass} truncate min-w-0 ${item.href ? "group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-4 group-focus-visible:underline group-focus-visible:decoration-accent group-focus-visible:decoration-2 group-focus-visible:underline-offset-4" : ""}`}
      >
        {item.title}
      </span>
      {item.by && (
        <span className={`${byClass} truncate min-w-0`}> {item.by}</span>
      )}
      {item.year && (
        <span className={`${yearClass} shrink-0`}> · {item.year}</span>
      )}
    </>
  );
  return (
    <li className="py-[clamp(12px,1.6vw,16px)] border-t border-dashed border-rule flex items-baseline gap-x-[clamp(14px,2vw,24px)] last:border-b whitespace-nowrap">
      {item.href ? (
        <a
          href={item.href}
          className="text-inherit no-underline contents group"
        >
          {body}
        </a>
      ) : (
        body
      )}
    </li>
  );
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  const { number } = await params;
  const ep = getEpisode(number);
  if (!ep) notFound();

  const { previous, next } = getAdjacentEpisodes(ep.number);

  const setup = ep.setup ?? [ep.blurb];
  const hasChapters = ep.chapters && ep.chapters.length > 0;
  const hasReferences = ep.references && ep.references.length > 0;
  const hasTranscript =
    ep.transcriptExcerpt && ep.transcriptExcerpt.length > 0;

  const railClass =
    "pt-2.5 sticky top-6 self-start max-[720px]:static max-[720px]:pt-0";
  const sectionClass =
    "grid grid-cols-[minmax(120px,180px)_minmax(0,1fr)] gap-x-[clamp(24px,4vw,72px)] gap-y-2 items-start max-[720px]:grid-cols-1 max-[720px]:gap-y-[14px] mb-[clamp(72px,10vw,132px)]";
  const sectionBodyClass = "min-w-0 max-w-[72ch]";
  const railLabelClass =
    "font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink-faint";
  const sectionHeadingClass =
    "font-display font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.022em] text-balance text-ink";

  return (
    <main className="bg-canvas text-ink min-h-screen overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,80px)] py-[clamp(28px,4vw,52px)]">
        <SiteHeader />

        {/* Hero block */}
        <header
          className="grid grid-cols-[minmax(0,1fr)_minmax(180px,320px)] gap-x-[clamp(28px,4.5vw,64px)] gap-y-[clamp(18px,2.4vw,32px)] items-start mb-[clamp(72px,10vw,132px)] max-[880px]:grid-cols-1 max-[880px]:gap-y-[clamp(20px,3vw,32px)]"
          aria-labelledby="ep-title"
        >
          <div className="col-start-1 row-start-1 self-start flex flex-col gap-[clamp(10px,1.2vw,16px)] mt-1">
            <span
              className="font-mono font-normal text-[clamp(40px,5.2vw,68px)] leading-none tracking-[-0.02em] text-ink-soft"
              aria-hidden="true"
            >
              №
              <span style={{ color: flavorVar[ep.thumbnail.flavor] }}>
                {ep.number}
              </span>
            </span>
            <p className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink-faint">
              TRANSMITTING
              <span className="text-rule mx-3" aria-hidden="true">
                /
              </span>
              {ep.runtime}
              <span className="text-rule mx-3" aria-hidden="true">
                /
              </span>
              {ep.date}
            </p>
          </div>

          <div className="col-start-2 [grid-row:1/span_3] self-start max-[880px]:col-start-1 max-[880px]:row-start-2 max-[880px]:max-w-[360px]">
            <EpisodeThumbnail
              videoId={ep.youtubeId}
              alt=""
              flavor={ep.thumbnail.flavor}
              rotation={ep.thumbnail.rotation}
              size="hero"
              priority
              className="max-w-full"
            />
          </div>

          <h1
            id="ep-title"
            className="font-display font-bold leading-[0.94] tracking-[-0.032em] text-balance text-ink col-start-1 row-start-2 text-[clamp(44px,7.6vw,112px)] m-0 max-[880px]:row-start-3"
          >
            {ep.title}
          </h1>

          <p className="font-body italic font-semibold text-[clamp(28px,3.4vw,44px)] leading-[1.18] tracking-[-0.008em] text-ink-soft col-start-1 row-start-3 m-0 max-[880px]:row-start-4">
            {ep.hosts}
          </p>

          <div className="[grid-column:1/-1] row-start-4 max-[880px]:[grid-column:1] max-[880px]:row-start-5">
            <HeroPlay
              episodeNumber={ep.number}
              title={ep.title}
              variant="detail"
            />
          </div>
        </header>

        {/* The setup */}
        <section aria-labelledby="setup-heading" className={sectionClass}>
          <div className={railClass}>
            <span className={railLabelClass}>THE SETUP</span>
          </div>
          <div className={`${sectionBodyClass} [&_p+p]:mt-[18px]`}>
            <h2 id="setup-heading" className="sr-only">
              The setup
            </h2>
            {setup.map((para, i) => (
              <p
                key={i}
                className="font-body font-normal text-[19px] leading-[1.6] max-w-[68ch] text-ink"
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        <section aria-labelledby="video-heading" className={sectionClass}>
          <div className={railClass}>
            <span className={railLabelClass}>VIDEO TRANSMISSION</span>
          </div>
          <div className="min-w-0 flex flex-col">
            <h2 id="video-heading" className="sr-only">
              Video transmission
            </h2>
            <div
              className="ep-video-frame w-full max-w-[960px] relative isolate border border-rule overflow-hidden focus-within:border-accent"
              style={
                {
                  background: flavorVar[ep.thumbnail.flavor],
                } as React.CSSProperties
              }
            >
              <Youtube
                videoId={ep.youtubeId}
                title={`Video version: ${ep.title}`}
              />
            </div>
            <p className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink-faint self-start mt-[clamp(12px,1.4vw,18px)]">
              <span aria-hidden="true">▶ </span>
              THE SAME EPISODE, WITH FACES.
              <span className="text-rule mx-2" aria-hidden="true">
                /
              </span>
              AUDIO ABOVE.
            </p>
          </div>
        </section>

        {hasChapters && (
          <section aria-labelledby="chapters-heading" className={sectionClass}>
            <div className={railClass}>
              <span className={railLabelClass}>CHAPTERS</span>
            </div>
            <div className={sectionBodyClass}>
              <h2
                id="chapters-heading"
                className={`${sectionHeadingClass} mb-[clamp(20px,3vw,36px)]`}
              >
                Where it goes<span className="text-accent">.</span>
              </h2>
              <ol className="list-none m-0 p-0">
                {ep.chapters!.map((ch, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[minmax(70px,96px)_minmax(0,1fr)] gap-x-[clamp(16px,2.4vw,28px)] py-[clamp(14px,1.8vw,18px)] border-t border-rule items-baseline last:border-b"
                  >
                    <span className="font-mono text-base tracking-[0.04em] text-accent whitespace-nowrap">
                      {ch.start}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-body text-[clamp(19px,1.9vw,22px)] leading-[1.4] text-ink">
                        {ch.title}
                      </span>
                      {ch.note && (
                        <span className="font-body italic text-[17px] leading-[1.45] text-ink-soft">
                          {ch.note}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {ep.pullQuote && (
          <div
            className={`relative max-w-[48ch] mr-auto ml-[clamp(0px,4vw,64px)] px-[clamp(24px,3.5vw,40px)] py-[clamp(28px,4vw,44px)] text-canvas -rotate-[0.9deg] motion-reduce:rotate-0 mb-[clamp(72px,10vw,132px)] ${pullQuoteBg[ep.pullQuote.flavor]}`}
            role="figure"
          >
            <blockquote className="font-body italic font-medium text-[clamp(22px,2.5vw,30px)] leading-[1.32] tracking-[-0.005em] m-0 text-canvas text-balance">
              &ldquo;{ep.pullQuote.text}&rdquo;
            </blockquote>
            <p className="font-mono text-[13px] tracking-[0.14em] uppercase mt-[clamp(14px,2vw,20px)] text-canvas-step-1">
              <span aria-hidden="true">→ </span>
              {ep.pullQuote.by}
            </p>
          </div>
        )}

        {hasReferences && (
          <section aria-labelledby="references-heading" className={sectionClass}>
            <div className={railClass}>
              <span className={railLabelClass}>REFERENCES</span>
            </div>
            <div className={sectionBodyClass}>
              <h2
                id="references-heading"
                className={`${sectionHeadingClass} mb-[clamp(20px,3vw,36px)]`}
              >
                What we leaned on<span className="text-accent">.</span>
              </h2>
              <ul className="list-none m-0 p-0 flex flex-col">
                {ep.references!.map((item, i) => (
                  <ReferenceItem key={i} item={item} />
                ))}
              </ul>
            </div>
          </section>
        )}

        {hasTranscript && (
          <section aria-labelledby="transcript-heading" className={sectionClass}>
            <div className={railClass}>
              <span className={railLabelClass}>TRANSCRIPT</span>
            </div>
            <div className={sectionBodyClass}>
              <h2
                id="transcript-heading"
                className={`${sectionHeadingClass} mb-[clamp(12px,2vw,20px)]`}
              >
                As spoken<span className="text-accent">.</span>
              </h2>
              <p className="font-body font-normal text-base leading-[1.6] text-ink-faint mb-[clamp(24px,4vw,40px)]">
                Lightly cleaned. Cross-talk preserved where it mattered.
              </p>
              <Transcript
                excerpt={ep.transcriptExcerpt!}
                rest={ep.transcriptRest}
              />
            </div>
          </section>
        )}

        {/* Prev / Next */}
        {(previous || next) && (
          <nav
            aria-label="More transmissions"
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[clamp(24px,4vw,64px)] pt-[clamp(28px,4vw,44px)] border-t border-rule mb-[clamp(56px,8vw,96px)] max-[720px]:grid-cols-1 max-[720px]:gap-y-[clamp(24px,4vw,36px)]"
          >
            {previous ? (
              <Link
                href={`/episodes/${previous.number}`}
                className="group flex flex-col gap-2.5 text-ink no-underline p-2.5 -m-2.5 transition-transform duration-200 ease-[var(--ease-out-quart)] hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-none text-left"
              >
                <span className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink-faint transition-colors duration-200 ease-[var(--ease-out-quart)] group-hover:text-accent group-focus-visible:text-accent">
                  ← PREVIOUS TRANSMISSION
                </span>
                <span
                  className="font-mono text-[clamp(28px,3.4vw,40px)] leading-[0.95] tracking-[-0.01em] text-ink-soft"
                  aria-hidden="true"
                >
                  №{previous.number}
                </span>
                <span className="font-display font-bold text-[clamp(24px,2.8vw,34px)] leading-[1.04] tracking-[-0.018em] text-ink text-balance">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/episodes/${next.number}`}
                className="group flex flex-col gap-2.5 text-ink no-underline p-2.5 -m-2.5 transition-transform duration-200 ease-[var(--ease-out-quart)] hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-none text-right items-end max-[720px]:text-left max-[720px]:items-start"
              >
                <span className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink-faint transition-colors duration-200 ease-[var(--ease-out-quart)] group-hover:text-accent group-focus-visible:text-accent">
                  NEXT TRANSMISSION →
                </span>
                <span
                  className="font-mono text-[clamp(28px,3.4vw,40px)] leading-[0.95] tracking-[-0.01em] text-ink-soft"
                  aria-hidden="true"
                >
                  №{next.number}
                </span>
                <span className="font-display font-bold text-[clamp(24px,2.8vw,34px)] leading-[1.04] tracking-[-0.018em] text-ink text-balance">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        )}

        <SiteFooter />
      </div>
    </main>
  );
}
