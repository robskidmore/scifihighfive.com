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
      <div className="mx-auto flex flex-col max-w-[1440px] min-h-screen px-[clamp(20px,5vw,80px)] py-[clamp(28px,4vw,52px)]">
        <SiteHeader />

        <section
          aria-labelledby="lost-headline"
          className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-[clamp(48px,7vw,112px)] items-center py-[clamp(40px,7vw,96px)] flex-1 max-[880px]:grid-cols-1 max-[880px]:gap-[clamp(40px,8vw,64px)]"
        >
          <div>
            <h1
              id="lost-headline"
              className="font-display font-extrabold text-[clamp(64px,11vw,168px)] leading-[0.9] tracking-[-0.04em] text-ink m-0 text-balance"
            >
              We lost
              <br />
              <span className="font-body font-medium italic tracking-[-0.018em] text-ink-soft">
                this one
              </span>
              <span className="text-accent">.</span>
            </h1>
            <p className="font-body font-normal italic text-[clamp(18px,1.8vw,22px)] leading-[1.5] text-ink-soft mt-[clamp(20px,2.6vw,32px)] max-w-[38ch]">
              404. The page you were after drifted out of orbit somewhere
              between the satellite uplink and our last good edit.
            </p>
          </div>

          <aside
            className="relative w-full max-w-[460px] mx-auto rotate-[1.4deg] motion-reduce:rotate-0"
            aria-label="A field note from the hosts"
          >
            <div
              className="absolute inset-0 bg-flavor-sage translate-x-[14px] translate-y-[18px] -rotate-[2.6deg] motion-reduce:translate-x-[10px] motion-reduce:translate-y-[10px] motion-reduce:rotate-0 z-0"
              aria-hidden="true"
            />
            <article className="paper-border relative z-[1] bg-canvas-step-1 px-[clamp(22px,2.8vw,34px)] py-[clamp(24px,3vw,36px)] flex flex-col gap-[clamp(14px,1.6vw,20px)] text-ink [--paper-gap:18px]">
              <header className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-ink-soft">
                <span className="w-[9px] h-[9px] bg-accent shrink-0" aria-hidden="true" />
                <span>Field note</span>
                <span className="flex-1 h-px bg-rule" aria-hidden="true" />
                <span className="text-ink-faint whitespace-nowrap">Filed 02:14</span>
              </header>

              <h2 className="font-display font-bold text-[clamp(28px,3.4vw,38px)] leading-[1.02] tracking-[-0.025em] text-ink mt-[clamp(2px,0.5vw,6px)] mb-0 text-balance">
                We checked behind every page.
              </h2>

              <p className="font-body font-normal text-[17px] leading-[1.55] text-ink-soft m-0 max-w-[36ch] [&_em]:text-accent [&_em]:italic [&_em]:font-medium">
                Not there. Could be a typo, could be a dead link in a
                newsletter we sent two months ago, could be one of us
                mis-filed it at 2&nbsp;a.m. <em>Happens to the best of us.</em>
              </p>

              <p className="font-body font-normal text-[17px] leading-[1.55] text-ink-soft m-0 max-w-[36ch]">
                Best move: head back to the homepage. Second-best: the latest
                episode is probably what you were looking for anyway.
              </p>

              <footer className="flex items-center gap-3 mt-[clamp(2px,0.6vw,8px)]">
                <span className="flex-1 h-px bg-rule" aria-hidden="true" />
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-soft whitespace-nowrap">
                  / Wren / Tomás
                </span>
              </footer>
            </article>
          </aside>
        </section>

        <div
          className="mt-[clamp(24px,4vw,48px)] font-mono text-[clamp(13px,1.3vw,16px)] tracking-[0.06em] text-ink-faint flex flex-nowrap items-baseline gap-4 overflow-hidden pb-[clamp(32px,4vw,56px)] border-b border-rule"
          aria-hidden="true"
        >
          <span className="text-ink-soft tracking-normal shrink-0">
            ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅▆▇█▇▆▅▄▃▂▁
          </span>
          <span className="text-ink-faint tracking-[0.4em] flex-1 min-w-0 overflow-hidden whitespace-nowrap">
            · · · · ·  ·   ·    ·      ·         ·              ·
          </span>
          <span className="text-accent text-[11px] tracking-[0.22em] shrink-0">
            ↯ END&nbsp;OF&nbsp;TAPE
          </span>
        </div>

        <nav
          aria-label="Recover signal"
          className="flex flex-wrap items-baseline gap-[clamp(18px,3vw,36px)] py-[clamp(28px,3.5vw,44px)]"
        >
          <Link
            href="/"
            className="group font-mono text-[clamp(17px,1.7vw,20px)] tracking-[0.16em] uppercase text-accent underline decoration-accent decoration-1 underline-offset-[6px] [text-decoration-skip-ink:none] px-1.5 py-3 -mx-1.5 -my-3 inline-flex items-baseline gap-[0.6ch] transition-[text-decoration-thickness] duration-200 ease-[var(--ease-out-quart)] hover:decoration-[3px] focus-visible:decoration-[3px]"
          >
            <span
              className="inline-block transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover:-translate-x-[3px] group-focus-visible:-translate-x-[3px]"
              aria-hidden="true"
            >
              ↩
            </span>
            Return to homepage
          </Link>
          <span aria-hidden="true" className="text-rule">
            ·
          </span>
          <Link
            href="/"
            className="font-body italic text-[17px] text-ink-soft underline decoration-rule decoration-1 underline-offset-[5px] px-1 py-2.5 -mx-1 -my-2.5 transition-[color,text-decoration-color] duration-200 ease-[var(--ease-out-quart)] hover:text-ink hover:decoration-accent focus-visible:text-ink focus-visible:decoration-accent"
          >
            or jump to the latest episode
          </Link>
        </nav>
      </div>
    </main>
  );
}
