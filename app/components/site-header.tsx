import Link from "next/link";

type Props = {
  meta?: React.ReactNode;
};

export function SiteHeader({ meta }: Props) {
  return (
    <div
      className="flex flex-wrap items-center justify-between gap-4 text-ink-faint"
      style={{ marginBottom: "clamp(72px, 12vw, 148px)" }}
    >
      <Link href="/" className="t-meta crumb-link">
        SCIFIHIGHFIVE
      </Link>
      {meta && <p className="t-meta">{meta}</p>}
    </div>
  );
}
