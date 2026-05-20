---
name: Late-Night Transmission
colors:
  canvas: oklch(0.15 0.02 220)
  canvas-deeper: oklch(0.12 0.02 220)
  canvas-step-1: oklch(0.21 0.03 220)
  canvas-step-2: oklch(0.28 0.03 215)
  canvas-step-3: oklch(0.36 0.03 215)
  ink: oklch(0.91 0.02 215)
  ink-soft: oklch(0.81 0.005 165)
  ink-faint: oklch(0.62 0.005 165)
  rule: oklch(0.34 0.005 165)
  accent: oklch(0.81 0.07 40)
  accent-deep: oklch(0.62 0.06 40)
  flavor-sage: oklch(0.80 0.06 155)
  flavor-sage-deep: oklch(0.61 0.05 155)
  flavor-sky: oklch(0.82 0.09 250)
  flavor-sky-deep: oklch(0.68 0.17 240)
  flavor-lavender: oklch(0.82 0.06 290)
  status-good: oklch(0.80 0.06 155)
  status-warn: oklch(0.81 0.07 40)
  status-bad: oklch(0.71 0.17 25)
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontWeight: '800'
    fontSize: clamp(56px, 9vw, 144px)
    lineHeight: '0.92'
    letterSpacing: -0.035em
  display-tight:
    fontFamily: Bricolage Grotesque
    fontWeight: '700'
    fontSize: clamp(40px, 6vw, 88px)
    lineHeight: '0.96'
    letterSpacing: -0.028em
  headline:
    fontFamily: Vollkorn
    fontWeight: '600'
    fontStyle: italic
    fontSize: clamp(28px, 3.4vw, 44px)
    lineHeight: '1.18'
    letterSpacing: -0.008em
  deck:
    fontFamily: Vollkorn
    fontWeight: '400'
    fontStyle: italic
    fontSize: clamp(20px, 2.2vw, 28px)
    lineHeight: '1.4'
  body:
    fontFamily: Vollkorn
    fontWeight: '400'
    fontSize: 19px
    lineHeight: '1.6'
    maxWidth: 68ch
  body-small:
    fontFamily: Vollkorn
    fontWeight: '400'
    fontSize: 16px
    lineHeight: '1.6'
  meta:
    fontFamily: Share Tech Mono
    fontWeight: '400'
    fontSize: 13px
    lineHeight: '1.3'
    letterSpacing: 0.06em
    textTransform: uppercase
  meta-large:
    fontFamily: Share Tech Mono
    fontWeight: '400'
    fontSize: 22px
    lineHeight: '1'
    letterSpacing: 0.02em
  episode-number:
    fontFamily: Share Tech Mono
    fontWeight: '400'
    fontSize: clamp(48px, 7vw, 96px)
    lineHeight: '0.9'
    letterSpacing: '-0.02em'
spacing:
  hair: 2px
  micro: 6px
  tight: 10px
  snug: 14px
  default: 22px
  loose: 36px
  spread: 58px
  chasm: 92px
  void: 148px
  margin-page: clamp(20px, 5vw, 80px)
  measure: 68ch
---

## Brand & Style

"Late-Night Transmission." Imagine a hand-printed zine taped to the wall of a college radio station at 2 a.m., backlit by a CRT showing a satellite weather loop. That is the mood. The site is run by people who like each other, who know their subject matter, and who refuse to dress like every other publication on the internet. It is warm before it is futuristic, hand-set before it is precise, and confident enough to leave things slightly crooked.

The aesthetic family is **expressive editorial collage**, not Brutalism, not Bauhaus, not the Geist-default sharp-modern monochrome lane. Type does heavy lifting. Layout breathes asymmetrically. The dark teal canvas reads as ink and night sky at once. The peach accent is the hosts' wave on the way in.

## Colors

The palette is preserved from the previous system but recommitted to a **Restrained** strategy:

- **Canvas** (deep teal, 70 to 85% of every surface). Body text sits directly on it. There are no boxes, no cards, no containers around content by default. The canvas is the page.
- **Ink** (warm pale cyan). The default reading color. Tinted toward the canvas hue so it never feels stark.
- **Accent** (peach, no more than 10% of any surface). Carries the show's voice. Used for: the wordmark, the active episode marker, link underlines on hover, the dropcap of a featured essay, the play-state indicator, the "new" tag. When in doubt, use less peach, not more.
- **Flavor colors** (sage, sky, lavender). Reserved for moments, not systems. Pull quotes might rotate flavor color per essay. Episode tag colors might draw from this small pool. Never used together in the same frame.
- **Rule** and **Ink-faint** for hairlines, divider marks, and timestamps. Dialed low enough to feel like newsprint indentation.

No gradients. No translucent panels. No `#000` or `#fff` anywhere. Contrast holds at WCAG AA against the canvas for every text role.

## Typography

Three faces, each with a clear job:

- **Bricolage Grotesque** (display, 700 to 800). The loud voice. Used for show name, page-defining headlines, section openers. Set at extreme sizes (88 to 144px on desktop) with tight tracking. The face has just enough wonk in its forms to feel made, not generated. Headlines may break across multiple lines with intentional rag; do not auto-balance.
- **Vollkorn** (body 400; headlines and pull quotes 600 italic). Editorial workhorse with character, with optical sizing across the family. Body sits at 19px, measure capped at 68ch, line-height 1.55. Headlines and pull quotes lean on its italic, which has presence. Dropcaps may use Vollkorn at roughly 5x cap-height in the accent color.
- **Share Tech Mono** (metadata, 400). The transmission feel. Episode numbers, timestamps, run times, "TRANSMITTING NOW" labels, footnotes, file metadata. Always uppercase for metadata, sentence case for inline code. Wide tracking (0.06em) for caps.

The scale jumps deliberately: 13px meta, 19px body, 28px deck, 44px headline, 88px display, 144px hero. No flat middle steps. Hierarchy is loud.

Loading: all three via `next/font/google` with `display: swap`. Subset to latin and latin-ext.

## Layout & Spacing

Layout is **collage, not grid**. No global 12-column structure. Pages compose from typographic blocks that align where they want.

- Page margins flex from 20px on phones to about 80px on desktop, but content does not stretch edge-to-edge on wide screens. Measure rules.
- Vertical rhythm is **uneven on purpose**. A `chasm` (92px) might sit beside a `tight` (10px). Constant `default` (22px) padding is the look of a CMS.
- Multi-column content (e.g., episode index, archive) uses CSS grid with **deliberately mismatched cell sizes** instead of identical card rows. A four-item row might read 2fr / 1fr / 3fr / 1.5fr.
- Most content is **not in a container**. Headlines, body, metadata sit directly on canvas. Containers appear only when content genuinely needs grouping (a player module; a host bio block).
- Asymmetric alignment is a tool. Section headlines may sit hard-left while their decks indent two columns in. Pull quotes break out into the margin.
- A persistent top nav is not required and should not be the default. Prefer a footer-anchored or contextual nav.

## Shape Language

**Mixed and deliberately uneven.** No global radius. Each surface chooses on purpose.

- Episode play buttons: full circle, 64px, peach fill, sharp text inside.
- Tag chips: pill (28px height, 14px radius), flavor color background, mono caps inside.
- Inline buttons: sharp (0 radius), peach text on canvas with a 1px accent underline; underline thickens to 3px on hover.
- Dividers between sections: not `<hr>`. Use a row of mono characters (`* * *` or `→ → →` or hand-typed Share Tech Mono ornaments) in `ink-faint`.
- Decorative marks: small filled squares, asterisks, and arrow glyphs from Share Tech Mono as section bullets, dropcap companions, and pull-quote attribution markers.
- Allowed irregularities: borders that intentionally do not meet at corners (4 to 8px gap); section blocks rotated by ±0.5° to ±1.5°; underlines drawn with `text-decoration-skip-ink: none` so they cut through descenders.

Never: drop shadows, glass blurs, glow effects, gradient fills.

## Motion

Motion is a luxury, not a default. `prefers-reduced-motion: reduce` disables all of it.

- Hover: link underline thickens from 1px to 3px over 180ms ease-out-quart. Color does not change.
- Page transitions: none. Hard cuts. Pages feel printed.
- Audio player: the play indicator pulses one beat at the show's tempo when paused (very subtle, accent color, opacity 0.6 to 1.0 to 0.6 over 1.4s). Stops the moment audio plays.
- Scrolling effects: none by default. No parallax, no fade-ins, no scroll-triggered counters. The page lays itself out and stays still.
- Allowed: the loading state for episode metadata may flash a Share Tech Mono "TRANSMITTING…" line with a blinking cursor (text-only, no layout movement).

## Components

Components are concrete typographic objects, not generic surfaces.

- **Wordmark / show name.** Bricolage Grotesque 800 in ink, with the peach accent on a single character (typically the "H"). Not a logo file; live text whenever possible.
- **Episode block.** A typographic record, not a card. Layout: huge episode number in Share Tech Mono on the left; title in Bricolage 700 mid-page; host names in Vollkorn italic underneath; run time and date in Share Tech Mono meta below the title. A peach play button anchors the row at the far right. No surrounding border.
- **Player.** A horizontal strip pinned to the bottom of the viewport when an episode is active. Canvas-step-1 background, sharp corners, a peach progress bar, mono timestamps on either side. No skeuomorphism, no rounded controls.
- **Long-form post / essay.** Single column at 68ch, body 19px Vollkorn, headline 44px Vollkorn italic. Pull quotes break left or right into a 24ch column with a flavor color background panel; the panel is rotated -0.8° for the hand-set effect. Dropcap (Vollkorn 5× cap height, peach) on the first paragraph of featured posts only.
- **Host bio.** A two-column block: portrait left (full bleed within its column, no border, no rounding), name in Bricolage 700, role in Share Tech Mono meta caps, bio in Vollkorn. Hosts list horizontally with intentional unequal column widths.
- **Pull quote.** Vollkorn 28px italic, flavor color background panel (sage, sky, or lavender), rotated -0.5° to -1.5°, attribution in Share Tech Mono meta below the quote with a leading arrow glyph.
- **Tag.** Share Tech Mono caps, pill shape, flavor color fill, canvas-color text. Wraps as a flowing line, not a fixed grid.
- **Nav.** Footer-anchored on most pages. Share Tech Mono caps, ink color, peach hover underline. The home page may omit the nav entirely and rely on inline links inside content.
- **Newsletter signup.** Inline, not modal. A single line: prompt in Vollkorn, email field with a 1px accent underline (no box), submit in peach Share Tech Mono caps. After submit, replace inline with a short Share Tech Mono confirmation line.
- **Empty / 404 / error states.** Treated as design opportunities, not afterthoughts. Mono "TRANSMISSION LOST" headline, a wandering ASCII signal pattern, a single peach link back to the home page.

## Component Philosophy

A component is justified when reuse demands it. Until then, prefer one-off typographic compositions per page. The home page, the latest episode page, and the archive can all look related but distinct. The visual system is the palette, the three faces, and the rhythm, not a card library.
