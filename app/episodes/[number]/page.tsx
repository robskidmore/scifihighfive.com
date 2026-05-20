import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroPlay } from "../../components/play-button";
import { EpisodeThumbnail } from "../../components/episode-thumbnail";
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

function ReferenceItem({ item }: { item: Reference }) {
  const body = (
    <>
      <span className="ref-kind">{kindLabel[item.kind]}</span>
      <span className="ref-title">{item.title}</span>
      {item.by && (
        <>
          <span className="ref-by"> {item.by}</span>
        </>
      )}
      {item.year && <span className="ref-year"> · {item.year}</span>}
    </>
  );
  return (
    <li className="ref-item">
      {item.href ? (
        <a href={item.href} className="ref-link">
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

  return (
    <main className="bg-canvas text-ink min-h-screen overflow-x-hidden">
      <div
        className="mx-auto"
        style={{
          maxWidth: "1440px",
          paddingInline: "clamp(20px, 5vw, 80px)",
          paddingBlock: "clamp(28px, 4vw, 52px)",
        }}
      >
        <SiteHeader
          meta={
            <>
              TRANSMITTING
              <span className="text-rule mx-3" aria-hidden="true">
                /
              </span>
              {ep.runtime}
              <span className="text-rule mx-3" aria-hidden="true">
                /
              </span>
              {ep.date}
            </>
          }
        />

        {/* Hero block */}
        <header
          className="episode-hero"
          aria-labelledby="ep-title"
          style={{ marginBottom: "clamp(72px, 10vw, 132px)" }}
        >
          <span
            className="t-episode-number text-ink-soft ep-hero-number"
            aria-hidden="true"
          >
            №<span className="text-accent">{ep.number}</span>
          </span>

          <div className="ep-hero-thumb">
            <EpisodeThumbnail
              videoId={ep.youtubeId}
              alt=""
              flavor={ep.thumbnail.flavor}
              rotation={ep.thumbnail.rotation}
              size="hero"
              priority
            />
          </div>

          <h1 id="ep-title" className="t-display-tight text-ink ep-title">
            {ep.title}
          </h1>

          <p className="t-headline text-ink-soft ep-hero-hosts">{ep.hosts}</p>

          <div className="ep-hero-play">
            <HeroPlay
              episodeNumber={ep.number}
              title={ep.title}
              variant="detail"
            />
          </div>
        </header>

        {/* The setup */}
        <section
          aria-labelledby="setup-heading"
          className="ep-section ep-setup"
          style={{ marginBottom: "clamp(72px, 10vw, 132px)" }}
        >
          <div className="ep-section-rail">
            <span className="t-meta text-ink-faint">THE SETUP</span>
          </div>
          <div className="ep-section-body">
            <h2 id="setup-heading" className="sr-only">
              The setup
            </h2>
            {setup.map((para, i) => (
              <p
                key={i}
                className={`t-body text-ink${i === 0 ? " has-dropcap" : ""}`}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="video-heading"
          className="ep-section ep-video"
          style={{ marginBottom: "clamp(72px, 10vw, 132px)" }}
        >
          <div className="ep-section-rail">
            <span className="t-meta text-ink-faint">VIDEO TRANSMISSION</span>
          </div>
          <div
            className="ep-section-body ep-video-body"
            data-flavor={ep.thumbnail.flavor}
          >
            <h2 id="video-heading" className="sr-only">
              Video transmission
            </h2>
            <div className="ep-video-frame">
              <Youtube
                videoId={ep.youtubeId}
                title={`Video version: ${ep.title}`}
              />
            </div>
            <p
              className="t-meta text-ink-faint ep-video-caption"
              style={{ marginTop: "clamp(12px, 1.4vw, 18px)" }}
            >
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
          <section
            aria-labelledby="chapters-heading"
            className="ep-section ep-chapters"
            style={{ marginBottom: "clamp(72px, 10vw, 132px)" }}
          >
            <div className="ep-section-rail">
              <span className="t-meta text-ink-faint">CHAPTERS</span>
            </div>
            <div className="ep-section-body">
              <h2
                id="chapters-heading"
                className="t-section text-ink"
                style={{ marginBottom: "clamp(20px, 3vw, 36px)" }}
              >
                Where it goes<span className="t-section-period">.</span>
              </h2>
              <ol className="chapter-list">
                {ep.chapters!.map((ch, i) => (
                  <li key={i} className="chapter-row">
                    <span className="chapter-time">{ch.start}</span>
                    <div className="chapter-text">
                      <span className="chapter-title">{ch.title}</span>
                      {ch.note && (
                        <span className="chapter-note">{ch.note}</span>
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
            className={`pull-quote pull-quote--${ep.pullQuote.flavor}`}
            role="figure"
            style={{
              marginBottom: "clamp(72px, 10vw, 132px)",
            }}
          >
            <blockquote className="pull-quote-text">
              &ldquo;{ep.pullQuote.text}&rdquo;
            </blockquote>
            <p className="pull-quote-attr">
              <span aria-hidden="true">→ </span>
              {ep.pullQuote.by}
            </p>
          </div>
        )}

        {hasReferences && (
          <section
            aria-labelledby="references-heading"
            className="ep-section ep-references"
            style={{ marginBottom: "clamp(72px, 10vw, 132px)" }}
          >
            <div className="ep-section-rail">
              <span className="t-meta text-ink-faint">REFERENCES</span>
            </div>
            <div className="ep-section-body">
              <h2
                id="references-heading"
                className="t-section text-ink"
                style={{ marginBottom: "clamp(20px, 3vw, 36px)" }}
              >
                What we leaned on<span className="t-section-period">.</span>
              </h2>
              <ul className="ref-list">
                {ep.references!.map((item, i) => (
                  <ReferenceItem key={i} item={item} />
                ))}
              </ul>
            </div>
          </section>
        )}

        {hasTranscript && (
          <section
            aria-labelledby="transcript-heading"
            className="ep-section ep-transcript"
            style={{ marginBottom: "clamp(72px, 10vw, 132px)" }}
          >
            <div className="ep-section-rail">
              <span className="t-meta text-ink-faint">TRANSCRIPT</span>
            </div>
            <div className="ep-section-body">
              <h2
                id="transcript-heading"
                className="t-section text-ink"
                style={{ marginBottom: "clamp(12px, 2vw, 20px)" }}
              >
                As spoken<span className="t-section-period">.</span>
              </h2>
              <p
                className="t-body-small text-ink-faint"
                style={{ marginBottom: "clamp(24px, 4vw, 40px)" }}
              >
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
            className="adjacent"
            style={{ marginBottom: "clamp(56px, 8vw, 96px)" }}
          >
            {previous ? (
              <Link
                href={`/episodes/${previous.number}`}
                className="adjacent-link adjacent-prev"
              >
                <span className="t-meta text-ink-faint adjacent-label">
                  ← PREVIOUS TRANSMISSION
                </span>
                <span className="adjacent-number" aria-hidden="true">
                  №{previous.number}
                </span>
                <span className="adjacent-title">{previous.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/episodes/${next.number}`}
                className="adjacent-link adjacent-next"
              >
                <span className="t-meta text-ink-faint adjacent-label">
                  NEXT TRANSMISSION →
                </span>
                <span className="adjacent-number" aria-hidden="true">
                  №{next.number}
                </span>
                <span className="adjacent-title">{next.title}</span>
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
