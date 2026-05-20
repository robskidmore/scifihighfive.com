import Link from "next/link";

const navLinkClass =
  "font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink-faint no-underline px-1.5 py-2 -mx-1.5 -my-2 inline-block transition-colors duration-200 ease-[var(--ease-out-quart)] hover:text-accent focus-visible:text-accent";

export function SiteHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 text-ink-faint mb-[clamp(72px,12vw,148px)]">
      <Link
        href="/"
        className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink-soft no-underline px-1.5 py-2 -mx-1.5 -my-2 inline-block transition-colors duration-200 ease-[var(--ease-out-quart)] hover:text-accent focus-visible:text-accent"
      >
        SCIFIHIGHFIVE
      </Link>
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center gap-x-7 gap-y-2"
      >
        <Link href="/episodes" className={navLinkClass}>
          Episodes
        </Link>
        <Link href="/about" className={navLinkClass}>
          About
        </Link>
      </nav>
    </div>
  );
}
