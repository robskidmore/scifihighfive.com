import { NewsletterForm } from "./newsletter-form";

export function NewsletterPitch() {
  return (
    <section
      aria-labelledby="footer-signup-heading"
      className="newsletter-pitch"
    >
      <div className="newsletter-pitch__copy">
        <p className="t-meta text-accent newsletter-pitch__tag">
          <span aria-hidden="true">■</span> FREE WITH SIGNUP
          <span className="text-rule mx-2" aria-hidden="true">·</span>
          TRANSMISSION ZERO
        </p>

        <h2
          id="footer-signup-heading"
          className="t-display-tight text-ink newsletter-pitch__headline"
        >
          Take the field guide<span className="text-accent">.</span>
        </h2>

        <p className="t-deck text-ink-soft newsletter-pitch__deck">
          A 24-page printable zine. Twelve dispatches we couldn&apos;t fit in
          the show, an annotated reading shelf, and a glossary of the in-jokes.
          Free to your inbox the moment you sign up, then a short letter the
          Sunday after each episode.
        </p>

        <div className="newsletter-pitch__form">
          <NewsletterForm
            inputId="footer-email"
            submitLabel="SEND THE ZINE →"
            confirmLabel="THE FIELD GUIDE IS ON ITS WAY. CHECK YOUR INBOX."
            confirmAnnouncement="The field guide is on its way. Check your inbox."
          />
        </div>

        <p className="t-meta text-ink-faint newsletter-pitch__proof">
          <span className="text-accent" aria-hidden="true">●</span> 1,847
          receivers already tuned in
          <span className="text-rule mx-2" aria-hidden="true">·</span>
          unsubscribe in one click, no hard feelings
        </p>
      </div>

      <aside
        className="newsletter-pitch__cover"
        aria-label="A preview of Transmission Zero, the subscriber field guide"
      >
        <div className="zine" aria-hidden="true">
          <div className="zine__panel" />
          <div className="zine__page">
            <div className="zine__head">
              <span className="zine__bullet" />
              <span className="zine__issue">ISSUE №00</span>
              <span className="zine__rule" />
              <span className="zine__year">MMXXVI</span>
            </div>

            <p className="zine__overline">A SCIFIHIGHFIVE TRANSMISSION</p>

            <h3 className="zine__title">
              Field
              <br />
              Guide
              <br />
              <span className="zine__amp">to&nbsp;the</span>
              <br />
              Near
              <br />
              Future<span className="text-accent">.</span>
            </h3>

            <p className="zine__divider">* &nbsp; * &nbsp; *</p>

            <p className="zine__deck">
              Twelve dispatches from the
              <br />
              cutting-room floor.
            </p>

            <div className="zine__foot">
              <span className="zine__stamp">24 PP / PDF</span>
              <span className="zine__rule" />
              <span className="zine__stamp">PRINTABLE</span>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
