import { NewsletterForm } from "./newsletter-form";

export function NewsletterPitch() {
  return (
    <section
      aria-labelledby="footer-signup-heading"
      className="grid grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-[clamp(40px,6vw,96px)] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[clamp(36px,7vw,56px)]"
    >
      <div className="flex flex-col gap-[clamp(18px,2.2vw,28px)] min-w-0">
        <p className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-accent inline-flex items-center gap-[0.4ch] m-0">
          <span aria-hidden="true">■</span> FREE WITH SIGNUP
          <span className="text-rule mx-2" aria-hidden="true">·</span>
          TRANSMISSION ZERO
        </p>

        <h2
          id="footer-signup-heading"
          className="font-display font-bold leading-[0.96] tracking-[-0.03em] text-balance text-ink m-0 text-[clamp(44px,7vw,96px)]"
        >
          Take the field guide<span className="text-accent">.</span>
        </h2>

        <p className="font-body italic font-normal text-[clamp(20px,2.2vw,28px)] leading-[1.4] text-ink-soft max-w-[44ch] m-0">
          A 24-page printable zine. Twelve dispatches we couldn&apos;t fit in
          the show, an annotated reading shelf, and a glossary of the in-jokes.
          Free to your inbox the moment you sign up, then a short letter the
          Sunday after each episode.
        </p>

        <div className="mt-[clamp(10px,1.4vw,18px)] max-w-[480px]">
          <NewsletterForm
            inputId="footer-email"
            submitLabel="SEND THE ZINE →"
            confirmLabel="THE FIELD GUIDE IS ON ITS WAY. CHECK YOUR INBOX."
            confirmAnnouncement="The field guide is on its way. Check your inbox."
          />
        </div>

        <p className="font-mono uppercase tracking-[0.08em] leading-[1.4] text-ink-faint text-[13px] m-0">
          <span className="text-accent" aria-hidden="true">●</span> 1,847
          receivers already tuned in
          <span className="text-rule mx-2" aria-hidden="true">·</span>
          unsubscribe in one click, no hard feelings
        </p>
      </div>

      <aside
        className="flex justify-center items-center min-w-0 max-[880px]:order-first max-[880px]:justify-start"
        aria-label="A preview of Transmission Zero, the subscriber field guide"
      >
        <div
          className="relative w-full max-w-[320px] aspect-[3/4] rotate-[1.4deg] motion-reduce:rotate-0 max-[880px]:max-w-[260px]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-flavor-sage translate-x-[10px] translate-y-[12px] -rotate-[2.2deg] motion-reduce:translate-x-2 motion-reduce:translate-y-2 motion-reduce:rotate-0 z-0" />
          <div className="paper-border relative z-[1] w-full h-full bg-canvas-step-1 px-[clamp(16px,2.4vw,26px)] py-[clamp(18px,2.6vw,28px)] flex flex-col gap-[clamp(8px,1vw,14px)] text-ink [--paper-gap:14px]">
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-soft">
              <span className="w-2 h-2 bg-accent shrink-0" />
              <span className="text-ink">ISSUE №00</span>
              <span className="flex-1 h-px bg-rule" />
              <span className="text-ink-faint">MMXXVI</span>
            </div>

            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent mt-1 mx-0 mb-0">
              A SCIFIHIGHFIVE TRANSMISSION
            </p>

            <h3 className="font-display font-extrabold text-[clamp(34px,5.4vw,52px)] leading-[0.88] tracking-[-0.035em] text-ink mt-[clamp(4px,1vw,8px)] mx-0 mb-0">
              Field
              <br />
              Guide
              <br />
              <span className="text-accent italic font-semibold text-[0.62em] tracking-[-0.012em] inline-block -translate-y-[0.08em]">
                to&nbsp;the
              </span>
              <br />
              Near
              <br />
              Future<span className="text-accent">.</span>
            </h3>

            <p className="font-mono text-[12px] tracking-[0.4em] text-ink-faint mt-[clamp(8px,1.4vw,14px)] mx-0 mb-0">
              * &nbsp; * &nbsp; *
            </p>

            <p className="font-body font-normal italic text-[clamp(13px,1.4vw,16px)] leading-[1.32] text-ink-soft m-0 text-balance">
              Twelve dispatches from the
              <br />
              cutting-room floor.
            </p>

            <div className="mt-auto flex items-center gap-2.5 pt-3">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-soft whitespace-nowrap">
                24 PP / PDF
              </span>
              <span className="flex-1 h-px bg-ink-faint/50" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-soft whitespace-nowrap">
                PRINTABLE
              </span>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
