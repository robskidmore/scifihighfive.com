import { NewsletterPitch } from "./newsletter-pitch";

const platforms = [
  { name: "SPOTIFY", href: "#" },
  { name: "APPLE", href: "#" },
  { name: "OVERCAST", href: "#" },
  { name: "POCKETCASTS", href: "#" },
  { name: "RSS", href: "#" },
];

const navLinkClass =
  "font-body font-medium text-[17px] text-ink no-underline relative inline-block px-1.5 py-3 -mx-1.5 -my-3 after:content-[''] after:absolute after:left-1.5 after:right-1.5 after:bottom-2.5 after:h-px after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-200 after:ease-[var(--ease-out-quart)] hover:after:scale-x-100 focus-visible:after:scale-x-100";

const monoLinkLargeClass =
  "font-mono uppercase text-[clamp(18px,1.8vw,24px)] tracking-[0.04em] leading-none text-ink no-underline relative inline-block pt-3 pb-3.5 px-1.5 -mt-3 -mb-3.5 -mx-1.5 after:content-[''] after:absolute after:left-1.5 after:right-1.5 after:bottom-2.5 after:h-px after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-200 after:ease-[var(--ease-out-quart)] hover:after:scale-x-100 focus-visible:after:scale-x-100";

export function SiteFooter() {
  return (
    <footer className="pt-[clamp(48px,7vw,96px)] pb-[clamp(36px,5vw,72px)] border-t border-rule">
      <NewsletterPitch />

      <section
        aria-labelledby="footer-listen-heading"
        className="mt-[clamp(64px,9vw,132px)] pt-[clamp(36px,5vw,72px)] border-t border-rule"
      >
        <h2
          id="footer-listen-heading"
          className="font-display font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.022em] text-balance text-ink mb-[clamp(20px,3vw,36px)]"
        >
          Also transmitting on<span className="text-accent">.</span>
        </h2>
        <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-3 list-none m-0 p-0">
          {platforms.map((p, i, arr) => (
            <li key={p.name} className="flex items-baseline gap-3">
              <a href={p.href} className={monoLinkLargeClass}>
                {p.name}
              </a>
              {i < arr.length - 1 && (
                <span
                  className="font-mono uppercase text-[clamp(18px,1.8vw,24px)] tracking-[0.04em] leading-none text-rule"
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap items-baseline justify-between gap-6 mt-[clamp(48px,7vw,96px)] pt-[clamp(24px,3vw,36px)] border-t border-rule">
        <p className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink-faint">
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
          <a href="/about" className={navLinkClass}>
            About
          </a>
          <a href="#" className={navLinkClass}>
            RSS
          </a>
          <a href="mailto:hi@scifihighfive.com" className={navLinkClass}>
            Contact
          </a>
          <a href="#" className={navLinkClass}>
            Instagram
          </a>
          <a href="#" className={navLinkClass}>
            YouTube
          </a>
        </nav>
      </div>
    </footer>
  );
}
