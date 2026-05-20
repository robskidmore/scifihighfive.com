import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "About the show · SCIFIHIGHFIVE",
  description:
    "Two hosts, every other Monday. A podcast about science fiction without solemnity. Meet Wren Halloway and Tomás Bui.",
};

type Social = { label: string; href: string };

type Host = {
  name: string;
  role: string;
  flavor: "peach" | "sage" | "sky" | "lavender";
  rotation: number;
  image: string;
  alt: string;
  tag: string;
  bio: string[];
  socials: Social[];
};

// TODO: replace placeholder bios + social URLs with real host content.
const hosts: Host[] = [
  {
    name: "Wren Halloway",
    role: "Co-host · Resident over-explainer",
    flavor: "sky",
    rotation: -1.2,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&q=80&auto=format&fit=crop",
    alt: "Wren Halloway, laughing, in a grey beanie and denim jacket against a teal wall.",
    tag: "Reads everything",
    bio: [
      "Wren writes the newsletter, takes the notes nobody asks for, and re-reads The Dispossessed every January like it’s a chore she enjoys.",
      "Came to the show by way of a college radio station and a brief, glorious stint shelving books at a science library nobody visited. The tangents are mostly her fault.",
    ],
    socials: [
      { label: "BLUESKY", href: "#" },
      { label: "ARE.NA", href: "#" },
      { label: "GOODREADS", href: "#" },
      { label: "EMAIL", href: "mailto:wren@scifihighfive.com" },
    ],
  },
  {
    name: "Tomás Bui",
    role: "Co-host · First-cut editor",
    flavor: "peach",
    rotation: 1.0,
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=900&q=80&auto=format&fit=crop",
    alt: "Tomás Bui in an orange beanie and black turtleneck, arms crossed, looking off-camera on an overcast rooftop.",
    tag: "Watches everything",
    bio: [
      "Tomás handles the cuts, the chapter marks, and most of the on-air pitches you can summarize in thirty seconds.",
      "Grew up on rented VHS sci-fi and a brother’s secondhand copy of Snow Crash. Treats every episode like he’s about to film a small documentary, then pretends he didn’t.",
    ],
    socials: [
      { label: "INSTAGRAM", href: "#" },
      { label: "LETTERBOXD", href: "#" },
      { label: "MASTODON", href: "#" },
      { label: "EMAIL", href: "mailto:tomas@scifihighfive.com" },
    ],
  },
];

export default function AboutPage() {
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
              ABOUT THE TRANSMISSION
              <span className="text-rule mx-3" aria-hidden="true">
                /
              </span>
              TWO HOSTS
              <span className="text-rule mx-3" aria-hidden="true">
                /
              </span>
              EVERY OTHER MONDAY
              <span className="text-rule mx-3" aria-hidden="true">
                ·
              </span>
              <span className="text-accent">●</span> ALL TRANSMISSIONS WELCOME
            </>
          }
        />

        {/* Hero */}
        <header className="about-hero">
          <h1 className="about-hero__title">
            <span className="about-hero__title-line">Two hosts,</span>
            <span className="about-hero__title-line">
              one{" "}
              <span className="about-hero__title-italic">transmission</span>
              <span className="text-accent">.</span>
            </span>
          </h1>
          <div className="about-hero__deck-row">
            <p className="about-hero__deck">
              Science fiction without solemnity. The small parts of the future
              that make us laugh, argue, or text each other at 1 a.m.
            </p>
          </div>
        </header>

        {/* The show */}
        <section
          aria-labelledby="about-show-heading"
          className="about-show"
        >
          <div className="about-show__body">
            <h2 id="about-show-heading" className="sr-only">
              The show
            </h2>

            <p className="has-dropcap">
              scifihighfive started in a kitchen in 2024 because the two of us
              kept texting each other about the same essays, the same
              paperback finds, and the same questions a robot vacuum could not
              answer. We decided we should probably just record it.
            </p>

            <p>
              Every other Monday we pick something. A book, a film, a piece
              of weird research, a rumor we cannot let go of. Then we try to
              figure out what it’s actually doing. Some episodes we agree by
              the end. More often we don’t. The disagreement is the show.
            </p>

            <aside
              className="pull-quote pull-quote--sage about-show__quote"
              aria-label="A note about the show"
            >
              <p className="pull-quote-text">
                We aren’t critics. We’re closer to two friends in a used
                bookshop talking too loudly.
              </p>
              <p className="pull-quote-attr">
                → THE SHOW, MORE OR LESS
              </p>
            </aside>

            <p>
              The hour has notes, transcripts, occasional pull quotes when we
              accidentally say something smart, and a newsletter for the
              threads that didn’t fit the recording. No solemnity, no host
              voice school, no thirty-second sponsor read about a mattress.
              Just two people who like each other arguing about Le Guin.
            </p>

            <p>
              If that sounds like your kind of evening, you’re in the right
              place. The latest transmission is one tap away.
            </p>
          </div>
        </section>

        {/* Hosts */}
        <section
          aria-labelledby="hosts-heading"
          className="hosts-section"
        >
          <div className="hosts-section__header">
            <h2 id="hosts-heading" className="t-section text-ink">
              The hosts<span className="t-section-period">.</span>
            </h2>
          </div>

          <ol className="hosts-grid" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {hosts.map((host) => (
              <li key={host.name} className="host-block">
                <figure
                  className={`host-portrait host-portrait--${host.flavor}`}
                  style={
                    {
                      ["--host-rotate" as string]: `${host.rotation}deg`,
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src={host.image}
                    alt={host.alt}
                    fill
                    sizes="(max-width: 880px) 100vw, (max-width: 1200px) 50vw, 560px"
                    className="host-portrait__image"
                  />
                  <figcaption className="host-portrait__tag" aria-hidden="true">
                    {host.tag}
                  </figcaption>
                </figure>

                <div className="host-text">
                  <p className="host-role">{host.role}</p>
                  <h3 className="host-name">
                    {host.name}
                    <span className="host-name__period">.</span>
                  </h3>

                  <div className="host-bios">
                    {host.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <ul
                    className="host-socials"
                    aria-label={`${host.name} elsewhere`}
                  >
                    {host.socials.map((social, i) => (
                      <li key={social.label} className="flex items-baseline">
                        <a href={social.href} className="t-meta mono-link">
                          {social.label}
                        </a>
                        {i < host.socials.length - 1 && (
                          <span
                            className="t-meta host-socials__sep"
                            aria-hidden="true"
                          >
                            ·
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Closer */}
        <section
          aria-labelledby="about-closer-heading"
          className="about-closer"
        >
          <h2 id="about-closer-heading" className="sr-only">
            Stay in touch
          </h2>
          <p className="about-closer__line">
            Listen wherever podcasts find you.{" "}
            <span className="about-closer__line-soft">
              Write us. Don’t be a stranger.
            </span>
          </p>

          <div className="about-closer__actions">
            <a
              href="mailto:hi@scifihighfive.com"
              className="t-link-italic-large"
            >
              hi@scifihighfive.com
            </a>
            <span className="text-rule" aria-hidden="true">·</span>
            <Link href="/" className="t-link-italic-large">
              the latest episode →
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
