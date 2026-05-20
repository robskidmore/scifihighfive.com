import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "./components/site-header";

export const metadata: Metadata = {
  title: "Signal lost · SCIFIHIGHFIVE",
  description:
    "The page you were after drifted out of orbit. Head back to the homepage or jump to the latest episode.",
};

export default function NotFound() {
  return (
    <main className="bg-canvas text-ink min-h-screen overflow-x-hidden">
      <div
        className="mx-auto flex flex-col"
        style={{
          maxWidth: "1440px",
          paddingInline: "clamp(20px, 5vw, 80px)",
          paddingBlock: "clamp(28px, 4vw, 52px)",
          minHeight: "100vh",
        }}
      >
        <SiteHeader
          meta={
            <>
              <span className="text-accent">●</span> TRANSMISSION 404
              <span className="text-rule mx-3" aria-hidden="true">
                /
              </span>
              SIGNAL LOST
              <span className="text-rule mx-3" aria-hidden="true">
                /
              </span>
              UPLINK GLITCHING
            </>
          }
        />

        <section aria-labelledby="lost-headline" className="lost-stage">
          <div>
            <h1 id="lost-headline" className="lost-headline">
              We lost
              <br />
              <span className="lost-headline__italic">this one</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="lost-deck">
              404. The page you were after drifted out of orbit somewhere
              between the satellite uplink and our last good edit.
            </p>
          </div>

          <aside
            className="dispatch"
            aria-label="A field note from the hosts"
          >
            <div className="dispatch__shadow" aria-hidden="true" />
            <article className="dispatch__page">
              <header className="dispatch__head">
                <span className="dispatch__bullet" aria-hidden="true" />
                <span>Field note</span>
                <span className="dispatch__rule" aria-hidden="true" />
                <span className="dispatch__filed">Filed 02:14</span>
              </header>

              <h2 className="dispatch__title">
                We checked behind every page.
              </h2>

              <p className="dispatch__body">
                Not there. Could be a typo, could be a dead link in a
                newsletter we sent two months ago, could be one of us
                mis-filed it at 2&nbsp;a.m. <em>Happens to the best of us.</em>
              </p>

              <p className="dispatch__body">
                Best move: head back to the homepage. Second-best: the latest
                episode is probably what you were looking for anyway.
              </p>

              <footer className="dispatch__foot">
                <span className="dispatch__rule" aria-hidden="true" />
                <span className="dispatch__sign">
                  / Wren / Tomás
                </span>
              </footer>
            </article>
          </aside>
        </section>

        <div className="signal-trail" aria-hidden="true">
          <span className="signal-trail__wave">
            ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅▆▇█▇▆▅▄▃▂▁
          </span>
          <span className="signal-trail__decay">
            · · · · ·  ·   ·    ·      ·         ·              ·
          </span>
          <span className="signal-trail__status">↯ END&nbsp;OF&nbsp;TAPE</span>
        </div>

        <nav aria-label="Recover signal" className="lost-nav">
          <Link href="/" className="lost-return">
            <span className="lost-return__arrow" aria-hidden="true">
              ↩
            </span>
            Return to homepage
          </Link>
          <span aria-hidden="true" style={{ color: "var(--rule)" }}>
            ·
          </span>
          <Link href="/" className="lost-secondary">
            or jump to the latest episode
          </Link>
        </nav>
      </div>
    </main>
  );
}
