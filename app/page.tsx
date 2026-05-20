import Link from "next/link";
import { HeroPlay, PlayButton } from "./components/play-button";
import { EpisodeThumbnail } from "./components/episode-thumbnail";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { episodes } from "./episodes";

export default function Home() {
  const [latest, ...recent] = episodes;

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
              SHOW NO. {latest.number}
              <span className="text-rule mx-3" aria-hidden="true">
                /
              </span>
              TRANSMITTING SINCE 2024
              <span className="text-rule mx-3" aria-hidden="true">
                /
              </span>
              EVERY OTHER MONDAY
              <span className="text-rule mx-3" aria-hidden="true">
                ·
              </span>
              <span className="text-accent">●</span> NEW EPISODE LIVE
            </>
          }
        />

        {/* Wordmark + tagline */}
        <header style={{ marginBottom: "clamp(72px, 10vw, 148px)" }}>
          <h1 className="t-wordmark">
            <span style={{ display: "block" }}>SCIFI</span>
            <span style={{ display: "block" }}>
              HIG<span style={{ color: "var(--accent)" }}>H</span>FIVE
            </span>
          </h1>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
              gap: "clamp(20px, 3vw, 48px)",
              marginTop: "clamp(28px, 4vw, 52px)",
            }}
          >
            <div aria-hidden="true" />
            <div>
              <p className="t-deck text-ink">
                A podcast about science fiction, weird tech, and the small parts
                of the future that make us laugh.
              </p>
              <p
                className="t-byline text-ink-soft"
                style={{ marginTop: "20px" }}
              >
                With Wren Halloway and Tomás Bui.
              </p>
            </div>
          </div>
        </header>

        {/* Now playing ornament */}
        <div
          className="ornament"
          style={{ marginBottom: "clamp(28px, 4vw, 52px)" }}
        >
          NOW PLAYING
        </div>

        {/* Hero episode */}
        <article
          aria-labelledby="latest-title"
          className="hero-grid"
          style={{ marginBottom: "clamp(92px, 12vw, 148px)" }}
        >
          <EpisodeThumbnail
            videoId={latest.youtubeId}
            alt=""
            flavor={latest.thumbnail.flavor}
            rotation={latest.thumbnail.rotation}
            size="hero"
            priority
          />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "22px" }}
          >
            <span
              className="t-episode-number text-ink-soft"
              aria-hidden="true"
              style={{ alignSelf: "start" }}
            >
              №<span className="text-accent">{latest.number}</span>
            </span>

            <p className="t-meta text-ink-faint">
              {latest.runtime} <span className="text-rule mx-2" aria-hidden="true">·</span>{" "}
              {latest.date}
            </p>

            <h2 id="latest-title" className="t-display-tight text-ink">
              <Link
                href={`/episodes/${latest.number}`}
                className="title-link"
              >
                {latest.title}
              </Link>
            </h2>

            <p className="t-headline text-ink-soft">{latest.hosts}</p>

            <p
              className="t-body text-ink-soft"
              style={{ maxWidth: "62ch" }}
            >
              {latest.blurb}
            </p>

            <HeroPlay
              episodeNumber={latest.number}
              title={latest.title}
              showNotesHref={`/episodes/${latest.number}`}
            />
          </div>
        </article>

        {/* Prior transmissions */}
        <section
          aria-labelledby="prior-heading"
          style={{ marginBottom: "clamp(72px, 10vw, 148px)" }}
        >
          <div
            className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3"
            style={{ marginBottom: "clamp(28px, 4vw, 52px)" }}
          >
            <h3 id="prior-heading" className="t-section text-ink">
              Prior transmissions<span className="t-section-period">.</span>
            </h3>
            <a
              href="#"
              className="t-link-italic"
              aria-label="Browse all 47 episodes in the archive"
            >
              all 47 episodes →
            </a>
          </div>

          <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {recent.map((ep) => {
              return (
                <li key={ep.number} className="recent-episode recent-episode--with-thumb">
                  <EpisodeThumbnail
                    videoId={ep.youtubeId}
                    alt=""
                    flavor={ep.thumbnail.flavor}
                    rotation={ep.thumbnail.rotation}
                    size="small"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      minWidth: 0,
                    }}
                  >
                    <h4
                      className="t-headline text-ink"
                      style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}
                    >
                      <span
                        className="t-episode-number-inline text-ink-faint"
                        aria-hidden="true"
                      >
                        №{ep.number}
                      </span>
                      <Link
                        href={`/episodes/${ep.number}`}
                        className="title-link"
                      >
                        {ep.title}
                      </Link>
                    </h4>
                    <p
                      className="t-body-small text-ink-soft"
                      style={{ maxWidth: "58ch" }}
                    >
                      {ep.blurb}
                    </p>
                    <p className="t-byline text-ink-soft">
                      {ep.hosts}.
                    </p>
                    <p
                      className="t-meta text-ink-faint"
                      style={{ marginTop: "2px" }}
                    >
                      {ep.runtime}{" "}
                      <span className="text-rule mx-2" aria-hidden="true">
                        ·
                      </span>{" "}
                      {ep.date}
                    </p>
                  </div>

                  <PlayButton
                    episodeNumber={ep.number}
                    title={ep.title}
                    size="small"
                    flavor={ep.thumbnail.flavor}
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
