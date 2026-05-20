import { NewsletterPitch } from "./newsletter-pitch";

const platforms = [
  { name: "SPOTIFY", href: "#" },
  { name: "APPLE", href: "#" },
  { name: "OVERCAST", href: "#" },
  { name: "POCKETCASTS", href: "#" },
  { name: "RSS", href: "#" },
];

export function SiteFooter() {
  return (
    <footer
      style={{
        paddingTop: "clamp(48px, 7vw, 96px)",
        paddingBottom: "clamp(36px, 5vw, 72px)",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <NewsletterPitch />

      <section
        aria-labelledby="footer-listen-heading"
        style={{
          marginTop: "clamp(64px, 9vw, 132px)",
          paddingTop: "clamp(36px, 5vw, 72px)",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <h2
          id="footer-listen-heading"
          className="t-section text-ink"
          style={{ marginBottom: "clamp(20px, 3vw, 36px)" }}
        >
          Also transmitting on<span className="t-section-period">.</span>
        </h2>
        <ul
          className="flex flex-wrap items-baseline gap-x-3 gap-y-3"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          {platforms.map((p, i, arr) => (
            <li key={p.name} className="flex items-baseline gap-3">
              <a href={p.href} className="t-meta-large mono-link">
                {p.name}
              </a>
              {i < arr.length - 1 && (
                <span
                  className="t-meta-large text-rule"
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <div
        className="flex flex-wrap items-baseline justify-between gap-6"
        style={{
          marginTop: "clamp(48px, 7vw, 96px)",
          paddingTop: "clamp(24px, 3vw, 36px)",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <p className="t-meta text-ink-faint">
          SCIFIHIGHFIVE.COM{" "}
          <span className="text-rule mx-2" aria-hidden="true">
            ·
          </span>{" "}
          2026{" "}
          <span className="text-rule mx-2" aria-hidden="true">
            ·
          </span>{" "}
          ALL TRANSMISSIONS WELCOME
        </p>
        <nav
          aria-label="Site"
          className="flex flex-wrap items-baseline gap-x-7 gap-y-3"
        >
          <a href="/about" className="t-nav-link">
            About the show
          </a>
          <a href="#" className="t-nav-link">
            RSS
          </a>
          <a href="mailto:hello@scifihighfive.com" className="t-nav-link">
            Email us
          </a>
          <a href="#" className="t-nav-link">
            Instagram
          </a>
          <a href="#" className="t-nav-link">
            YouTube
          </a>
        </nav>
      </div>
    </footer>
  );
}
