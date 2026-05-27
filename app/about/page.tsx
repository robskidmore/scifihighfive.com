import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "About the show · SCIFIHIGHFIVE",
  description:
    "Two hosts, every other Monday. A podcast about science fiction without solemnity. Meet Caitlin Jacobs and Rob Skidmore.",
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
  // CSS object-position for the portrait. Accepts any valid value:
  // keywords ("top", "center", "bottom left") or percentages ("center 20%").
  // Defaults to "center" when omitted.
  imagePosition?: string;
};

const flavorBg: Record<Host["flavor"], string> = {
  peach: "bg-accent",
  sage: "bg-flavor-sage",
  sky: "bg-flavor-sky",
  lavender: "bg-flavor-lavender",
};

const flavorTag: Record<Host["flavor"], string> = {
  peach: "bg-flavor-sky",
  sage: "bg-accent",
  sky: "bg-accent",
  lavender: "bg-accent",
};

// TODO: replace placeholder bios + social URLs with real host content.
const hosts: Host[] = [
  {
    name: "Caitlin Jacobs",
    role: "Co-host · Resident over-explainer",
    flavor: "sky",
    rotation: -1.2,
    image: "/caitlin-jacobs.jpg",
    alt: "Wren Halloway, laughing, in a grey beanie and denim jacket against a teal wall.",
    tag: "Reads everything",
    bio: [
      "Caitlin Jacobs writes science fiction and fantasy. Her stories have been enjoyed by thousands of children from her time as the lead writer for a program that teaches kids to read, and she was the 2019 scholarship recipient for the Writing Excuses retreat. She lives in Texas with her husband and three young boys, and will do basically anything for a bowl of ice cream.",
    ],
    socials: [
      {
        label: "INSTAGRAM",
        href: "https://www.instagram.com/iamcaitlinjacobs/",
      },
      { label: "WEBSITE", href: "https://authorcaitlinjacobs.com/" },
      // { label: "ARE.NA", href: "#" },
      // { label: "GOODREADS", href: "#" },
      // { label: "EMAIL", href: "mailto:wren@scifihighfive.com" },
    ],
  },
  {
    name: "Rob Skidmore",
    role: "Co-host · First-cut editor",
    flavor: "peach",
    rotation: 1.0,
    image: "/rob-skidmore.jpg",
    alt: "Tomás Bui in an orange beanie and black turtleneck, arms crossed, looking off-camera on an overcast rooftop.",
    tag: "Watches everything",
    imagePosition: "center top",
    bio: [
      "Rob Skidmore writes science fiction stories about being human. Raised in rural Western New York, he now lives with his beautiful wife in Utah. They have four kids whose initials spell HOME. By day he's a software engineer. By night he's exhausted. Every door in their basement is painted with a Disney-themed mural. His claim to fame is that he was an All-American and the 2004 New York state champion in the 400m hurdles in high school.",
    ],
    socials: [
      {
        label: "INSTAGRAM",
        href: "https://www.instagram.com/robertaskidmore/",
      },
      { label: "WEBSITE", href: "https://robertaskidmore.com/" },
      // { label: "MASTODON", href: "#" },
      // { label: "EMAIL", href: "mailto:tomas@scifihighfive.com" },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="bg-canvas text-ink min-h-screen overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,80px)] py-[clamp(28px,4vw,52px)]">
        <SiteHeader />

        {/* Hero */}
        <header className="mb-[clamp(72px,11vw,132px)]">
          <h1 className="font-display font-extrabold text-[clamp(56px,10vw,144px)] leading-[0.88] tracking-[-0.045em] text-ink m-0 break-words">
            <span className="block">Two hosts,</span>
            <span className="block">
              one{" "}
              <span className="font-body font-medium italic tracking-[-0.022em] text-ink-soft">
                transmission
              </span>
              <span className="text-accent">.</span>
            </span>
          </h1>
          <p className="font-body font-normal italic text-[clamp(20px,2vw,28px)] leading-[1.45] text-ink-soft m-0 mt-[clamp(28px,4vw,52px)] mx-auto max-w-[44ch] text-center">
            Science fiction without solemnity. The small parts of the future
            that make us laugh, argue, or text each other at 1 a.m.
          </p>
        </header>

        {/* The show */}
        <section
          aria-labelledby="about-show-heading"
          className="mb-[clamp(92px,13vw,168px)]"
        >
          <div className="mx-auto flex flex-col gap-[clamp(20px,2.4vw,28px)] min-w-0 max-w-[64ch] font-body text-[20px] leading-[1.6] text-ink-soft [&_p]:m-0">
            <h2 id="about-show-heading" className="sr-only">
              The show
            </h2>

            <p>
              scifihighfive started in a kitchen in 2024 because the two of us
              kept texting each other about the same essays, the same paperback
              finds, and the same questions a robot vacuum could not answer. We
              decided we should probably just record it.
            </p>

            <p>
              Every other Monday we pick something. A book, a film, a piece of
              weird research, a rumor we cannot let go of. Then we try to figure
              out what it’s actually doing. Some episodes we agree by the end.
              More often we don’t. The disagreement is the show.
            </p>

            <aside
              className="relative max-w-[48ch] px-[clamp(24px,3.5vw,40px)] py-[clamp(28px,4vw,44px)] text-canvas -rotate-[0.9deg] motion-reduce:rotate-0 bg-flavor-sage self-start mr-auto ml-[clamp(0px,2vw,32px)] mt-[clamp(14px,2vw,22px)] mb-[clamp(8px,1.4vw,16px)]"
              aria-label="A note about the show"
            >
              <p className="font-body italic font-medium text-[clamp(22px,2.5vw,30px)] leading-[1.32] tracking-[-0.005em] m-0 text-canvas text-balance">
                We aren’t critics. We’re closer to two friends in a used
                bookshop talking too loudly.
              </p>
              <p className="font-mono text-[13px] tracking-[0.14em] uppercase mt-[clamp(14px,2vw,20px)] text-canvas-step-1">
                → THE SHOW, MORE OR LESS
              </p>
            </aside>

            <p>
              The hour has notes, transcripts, occasional pull quotes when we
              accidentally say something smart, and a newsletter for the threads
              that didn’t fit the recording. No solemnity, no host voice school,
              no thirty-second sponsor read about a mattress. Just two people
              who like each other arguing about Le Guin.
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
          className="mb-[clamp(72px,11vw,148px)]"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 mb-[clamp(36px,5vw,72px)]">
            <h2
              id="hosts-heading"
              className="font-display font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.022em] text-balance text-ink"
            >
              The hosts<span className="text-accent">.</span>
            </h2>
          </div>

          <ol className="grid grid-cols-2 gap-x-[clamp(36px,6vw,96px)] gap-y-[clamp(72px,10vw,120px)] items-start list-none m-0 p-0 max-[880px]:grid-cols-1 max-[880px]:gap-y-[clamp(56px,10vw,88px)]">
            {hosts.map((host) => (
              <li
                key={host.name}
                className="grid grid-cols-1 gap-[clamp(20px,2.6vw,32px)] min-w-0"
              >
                <figure
                  className={`host-portrait w-full aspect-[4/5] ${
                    flavorBg[host.flavor]
                  } max-[880px]:max-w-[480px] m-0`}
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
                    className="object-cover"
                    style={{ objectPosition: host.imagePosition ?? "center" }}
                  />
                  <figcaption
                    className={`absolute z-[2] bottom-[clamp(12px,1.6vw,18px)] left-[clamp(12px,1.6vw,18px)] font-mono text-[11px] tracking-[0.22em] uppercase text-canvas ${
                      flavorTag[host.flavor]
                    } px-2.5 pt-1.5 pb-[7px]`}
                    aria-hidden="true"
                  >
                    {host.tag}
                  </figcaption>
                </figure>

                <div className="flex flex-col gap-[clamp(10px,1.4vw,16px)] min-w-0">
                  <p className="font-mono text-[13px] tracking-[0.22em] uppercase text-ink-soft m-0">
                    {host.role}
                  </p>
                  <h3 className="font-display font-bold text-[clamp(36px,5vw,68px)] leading-[0.94] tracking-[-0.028em] text-ink m-0 text-balance">
                    {host.name}
                    <span className="text-accent">.</span>
                  </h3>

                  <div className="flex flex-col gap-[clamp(12px,1.6vw,18px)] mt-[clamp(6px,1vw,12px)] [&_p]:font-body [&_p]:text-[18px] [&_p]:leading-[1.58] [&_p]:text-ink-soft [&_p]:m-0 [&_p]:max-w-[44ch]">
                    {host.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <ul
                    className="list-none mt-[clamp(8px,1.4vw,16px)] mb-0 mx-0 p-0 flex flex-wrap items-baseline gap-y-1.5 gap-x-1"
                    aria-label={`${host.name} elsewhere`}
                  >
                    {host.socials.map((social, i) => (
                      <li key={social.label} className="flex items-baseline">
                        <a
                          href={social.href}
                          className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-ink no-underline relative inline-block pt-3 pb-3.5 px-1.5 -mt-3 -mb-3.5 -mx-1.5 after:content-[''] after:absolute after:left-1.5 after:right-1.5 after:bottom-2.5 after:h-px after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-200 after:ease-[var(--ease-out-quart)] hover:after:scale-x-100"
                        >
                          {social.label}
                        </a>
                        {i < host.socials.length - 1 && (
                          <span
                            className="font-mono text-base uppercase tracking-[0.06em] leading-[1.4] text-rule mx-2 select-none"
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
          className="grid grid-cols-1 gap-[clamp(20px,3vw,32px)] pt-[clamp(40px,6vw,72px)] pb-[clamp(48px,7vw,88px)] border-t border-rule"
        >
          <h2 id="about-closer-heading" className="sr-only">
            Stay in touch
          </h2>
          <p className="font-body italic font-medium text-[clamp(28px,3.6vw,48px)] leading-[1.18] tracking-[-0.012em] text-ink m-0 max-w-[28ch] text-balance">
            Listen wherever podcasts find you.{" "}
            <span className="text-ink-soft">
              Write us. Don’t be a stranger.
            </span>
          </p>

          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-[14px] mt-[clamp(10px,1.4vw,18px)]">
            <a
              href="mailto:hi@scifihighfive.com"
              className="font-body font-medium italic text-[clamp(19px,1.7vw,22px)] text-ink underline decoration-accent decoration-1 underline-offset-[5px] [text-decoration-skip-ink:none] inline-block px-1 py-2 -mx-1 -my-2 transition-[text-decoration-thickness] duration-200 ease-[var(--ease-out-quart)] hover:decoration-[3px]"
            >
              hi@scifihighfive.com
            </a>
            <span className="text-rule" aria-hidden="true">
              ·
            </span>
            <Link
              href="/"
              className="font-body font-medium italic text-[clamp(19px,1.7vw,22px)] text-ink underline decoration-accent decoration-1 underline-offset-[5px] [text-decoration-skip-ink:none] inline-block px-1 py-2 -mx-1 -my-2 transition-[text-decoration-thickness] duration-200 ease-[var(--ease-out-quart)] hover:decoration-[3px]"
            >
              the latest episode →
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
