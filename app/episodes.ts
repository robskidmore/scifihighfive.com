import type { ThumbnailFlavor } from "./components/episode-thumbnail";

export type Chapter = {
  start: string;
  title: string;
  note?: string;
};

export type Reference = {
  kind: "book" | "film" | "essay" | "game" | "article" | "thing";
  title: string;
  by?: string;
  year?: string;
  href?: string;
};

export type TranscriptLine = {
  speaker: string;
  text: string;
};

export type PullQuote = {
  text: string;
  by: string;
  flavor: ThumbnailFlavor;
};

export type Episode = {
  number: string;
  slug: string;
  title: string;
  hosts: string;
  runtime: string;
  date: string;
  blurb: string;
  youtubeId: string;
  thumbnail: {
    flavor: ThumbnailFlavor;
    rotation: number;
  };
  setup?: string[];
  chapters?: Chapter[];
  references?: Reference[];
  pullQuote?: PullQuote;
  transcriptExcerpt?: TranscriptLine[];
  transcriptRest?: TranscriptLine[];
};

// Placeholder until real video IDs are filled in.
// Big Buck Bunny (Blender Foundation) — public domain, has maxres poster.
const PLACEHOLDER_VIDEO = "aqz-KE-bpKQ";

export const episodes: Episode[] = [
  {
    number: "047",
    slug: "what-the-stars-owe-us",
    title: "What the Stars Owe Us",
    hosts: "Mira & Júlia",
    runtime: "50 MIN",
    date: "APR 14 2026",
    blurb:
      "Stanisław Lem's Solaris turns 65. We argue about what counts as alien when the alien is also embarrassingly literary, and what a planet that thinks back actually wants from us.",
    youtubeId: PLACEHOLDER_VIDEO,
    thumbnail: {
      flavor: "sky",
      rotation: -0.3,
    },
    setup: [
      "Solaris turned sixty-five this spring, which means it is older than the personal computer and the same age as the first soft contact lens. We picked it back up expecting a museum visit and found instead the book we keep accidentally writing about every time the show drifts toward what we actually believe about contact, attention, and the small humiliation of being studied by something that doesn't want anything from you in particular.",
      "Mira had read it three times before this and never finished it. Júlia had read it once, in Polish, in a course where the instructor refused to teach it as science fiction. We compared notes, found we'd been reading two different books, and spent the back half of the recording arguing whether the planet's gestures count as language or weather.",
      "There is a moment, roughly two-thirds in, where Kelvin describes the ocean making a perfect copy of a baby. We agreed this is the scariest sentence in the book. We disagreed about why.",
    ],
    chapters: [
      { start: "00:00", title: "Cold open: the planet is the protagonist", note: "and what that does to every other character" },
      { start: "03:42", title: "The book Júlia thought she was reading" },
      { start: "11:08", title: "Lem on Lem on Tarkovsky", note: "the famous feud, briefly, and what it gets right" },
      { start: "19:55", title: "Counting the alien", note: "the ocean has no eyes and we keep giving it some" },
      { start: "28:30", title: "The baby paragraph" },
      { start: "36:12", title: "What a planet that thinks back actually wants" },
      { start: "44:48", title: "Recommendations and goodbyes" },
    ],
    references: [
      { kind: "book", title: "Solaris", by: "Stanisław Lem", year: "1961" },
      { kind: "film", title: "Solaris", by: "Andrei Tarkovsky", year: "1972" },
      { kind: "film", title: "Solaris", by: "Steven Soderbergh", year: "2002" },
      { kind: "essay", title: "The Cyberiad and other afterlives", by: "Júlia Reis (forthcoming)" },
      { kind: "book", title: "The Star Diaries", by: "Stanisław Lem", year: "1957" },
      { kind: "thing", title: "the Kelvin–Snaut argument about mimoids", by: "chapter 11, if you have the Kilmartin translation" },
    ],
    pullQuote: {
      text: "The ocean is not trying. It is not even refusing to try. We keep needing it to be one or the other, and the book keeps quietly declining.",
      by: "Mira, at 31:04",
      flavor: "sky",
    },
    transcriptExcerpt: [
      {
        speaker: "Mira",
        text: "Okay so here's the thing about Solaris. Every time I come back to it I'm convinced the book is shorter than I remember, and it never is. It's exactly the same length. I'm just always surprised by how much patience it has.",
      },
      {
        speaker: "Júlia",
        text: "Patience is the right word. There's a thing Lem does in the early chapters where he just describes the planet. For pages. And the first time you read it you think he's stalling. And the second time you read it you realize that is the book.",
      },
      {
        speaker: "Mira",
        text: "It is the book. Yeah. The descriptions of the formations, the mimoids, the symmetriads, those aren't atmosphere. He's making you sit with something that doesn't care whether you finish sitting with it.",
      },
      {
        speaker: "Júlia",
        text: "Which is, I want to say, a sci-fi move that almost nobody does anymore. We've moved into a mode where the alien has to be a character. Even when it's a city or a fog or a, you know, a robot bear. It has to have a personality. Solaris just refuses.",
      },
    ],
    transcriptRest: [
      {
        speaker: "Mira",
        text: "And the way Lem refuses is so specific. He doesn't make it a void. He doesn't make it indifferent in the cold-Nietzschean way. The planet is full of behavior. It just isn't behavior addressed to anyone.",
      },
      {
        speaker: "Júlia",
        text: "Right. Right. The behavior is exhaustive. There's a whole library of researchers writing about each kind of formation. There's a discipline. There's a budget. And none of it gets through.",
      },
      {
        speaker: "Mira",
        text: "The Solaristics chapters are some of my favorite writing in any book, actually. Lem is funny in them. He's making fun of academia. He's making fun of himself. He's making fun of the impulse to keep writing the next monograph when the monographs are obviously not the point.",
      },
      {
        speaker: "Júlia",
        text: "And then Kelvin shows up and the entire discipline becomes irrelevant in like, six pages, because the planet decides to do the one thing Solaristics never predicted, which is make a copy of his dead wife. And the rest of the book is, do we now have to apologize to the planet, or does the planet have to apologize to us, or is apologizing not a category that applies.",
      },
      {
        speaker: "Mira",
        text: "Which brings us to the baby paragraph. Do you want to do this or do I.",
      },
      {
        speaker: "Júlia",
        text: "You go.",
      },
      {
        speaker: "Mira",
        text: "Okay. So. There is a scene where Kelvin is reading older Solaristics reports, and one of them mentions that the ocean once produced a perfectly formed infant. Just, made one. Out of plasma. Sitting on the surface. With the proportions slightly wrong. Doing what infants do.",
      },
    ],
  },
  {
    number: "046",
    slug: "goodbye-to-all-that-latency",
    title: "Goodbye to All That Latency",
    hosts: "Mira, Daniel & Júlia",
    runtime: "1H 02M",
    date: "APR 7 2026",
    blurb:
      "The new Apple AR field notes against a stack of Bruce Sterling essays from 1998. Three takes on whether 'ambient computing' is finally here, or finally over.",
    youtubeId: PLACEHOLDER_VIDEO,
    thumbnail: {
      flavor: "peach",
      rotation: -0.6,
    },
    setup: [
      "Daniel spent a week with the new Apple AR rig in his apartment and came out the other side with field notes and a mild headache. Júlia brought a stack of Bruce Sterling essays from the late nineties to the recording. Mira mostly asked what the headset was doing while it was off.",
      "Three of us, three takes on whether the ambient-computing dream of 1998 has finally arrived, finally died, or is doing the third thing where it has neither arrived nor died and we just live in the long middle of it forever.",
    ],
    chapters: [
      { start: "00:00", title: "Daniel takes the rig off" },
      { start: "06:20", title: "Bruce Sterling, 1998", note: "the essay everyone misremembers" },
      { start: "15:44", title: "Latency as the whole product" },
      { start: "27:10", title: "What 'ambient' has come to mean" },
      { start: "41:02", title: "Three predictions, none confident" },
      { start: "55:30", title: "Reading list" },
    ],
    references: [
      { kind: "essay", title: "Maneki Neko", by: "Bruce Sterling", year: "1998" },
      { kind: "thing", title: "The Apple AR field notes Daniel kept", by: "available in this week's newsletter" },
      { kind: "book", title: "The Hacker Crackdown", by: "Bruce Sterling", year: "1992" },
    ],
    pullQuote: {
      text: "The dream wasn't ambient computing. The dream was ambient consequence. We got the first thing and forgot we asked for the second.",
      by: "Daniel, at 33:18",
      flavor: "sage",
    },
    transcriptExcerpt: [
      {
        speaker: "Daniel",
        text: "I want to start by saying I took the headset off six minutes before we started recording and the apartment still looks slightly wrong to me. That's a real feeling I'm having right now.",
      },
      {
        speaker: "Júlia",
        text: "We're going to need you to describe what 'slightly wrong' means.",
      },
      {
        speaker: "Daniel",
        text: "It looks like the walls are missing a UI layer. Like my eyes are searching for affordances that aren't there. Which is, you know, that's the part of the demo Apple doesn't show you.",
      },
    ],
  },
  {
    number: "045",
    slug: "bug-report-from-the-edge-of-the-map",
    title: "Bug Report from the Edge of the Map",
    hosts: "Daniel & Júlia",
    runtime: "44 MIN",
    date: "MAR 31 2026",
    blurb:
      "The Outer Wilds DLC and what video games understand about archaeology that novels don't. Plus, a tangent about why we love a competent stranger in fiction.",
    youtubeId: PLACEHOLDER_VIDEO,
    thumbnail: {
      flavor: "sage",
      rotation: 0.5,
    },
    setup: [
      "Outer Wilds released a DLC last month and we both played it and both cried at slightly different points. We talk about what games get to do with archaeology that novels keep trying to do and not quite managing.",
    ],
    chapters: [
      { start: "00:00", title: "We both cried" },
      { start: "08:12", title: "The thing about translating in-world" },
      { start: "19:30", title: "Competent strangers" },
      { start: "34:00", title: "Recommendations" },
    ],
    references: [
      { kind: "game", title: "Outer Wilds: Echoes of the Eye", by: "Mobius Digital", year: "2021" },
      { kind: "book", title: "The Mountain in the Sea", by: "Ray Nayler", year: "2022" },
    ],
    pullQuote: {
      text: "Games let you find a dead civilization by tripping over it. Novels keep handing you the dig site already labeled.",
      by: "Júlia, at 22:47",
      flavor: "lavender",
    },
    transcriptExcerpt: [
      {
        speaker: "Júlia",
        text: "The thing I keep coming back to is that the game lets you find a dead civilization by tripping over it. Like you're just walking around and you fall through a floor and now you're learning their alphabet.",
      },
      {
        speaker: "Daniel",
        text: "And the novel can do that, in theory, but the novel always has a narrator who knows what you found. The narrator can't pretend not to know.",
      },
    ],
  },
  {
    number: "044",
    slug: "letters-to-the-engineers-who-believed-us",
    title: "Letters to the Engineers Who Believed Us",
    hosts: "Mira & Daniel",
    runtime: "55 MIN",
    date: "MAR 24 2026",
    blurb:
      "Returning to Iain M. Banks's Excession with twelve more years of dread between us and the book. A love letter to the Culture's habit of being kind, sort of, on purpose.",
    youtubeId: PLACEHOLDER_VIDEO,
    thumbnail: {
      flavor: "lavender",
      rotation: -0.4,
    },
  },
  {
    number: "043",
    slug: "the-cassette-was-the-point",
    title: "The Cassette Was the Point",
    hosts: "All three",
    runtime: "38 MIN",
    date: "MAR 17 2026",
    blurb:
      "Why analog returns in genre fiction every decade. The Mountain in the Sea, Annihilation, and the romance of objects you can put back in their box.",
    youtubeId: PLACEHOLDER_VIDEO,
    thumbnail: {
      flavor: "sky",
      rotation: 0.6,
    },
  },
];

export function getEpisode(number: string): Episode | undefined {
  return episodes.find((e) => e.number === number);
}

export function getAdjacentEpisodes(number: string) {
  const i = episodes.findIndex((e) => e.number === number);
  if (i === -1) return { previous: undefined, next: undefined };
  // episodes[] is newest-first. "Next transmission" = newer = lower index.
  // "Previous transmission" = older = higher index.
  return {
    next: i > 0 ? episodes[i - 1] : undefined,
    previous: i < episodes.length - 1 ? episodes[i + 1] : undefined,
  };
}
