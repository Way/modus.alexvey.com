# DESIGN.md

Direction for modus.alexvey.com. Direction A "Werkbank", chosen on the Harmony card for the repositioning. The earlier "Editorial-Technische Kartografie" system is removed. Only the logo and mark stay. `brand/og.html` is the source of `brand/og.png`.
The reasons below are drafts. The owner confirms or changes them.

Reading this as: B2B consulting site for German Mittelstand owners and managers, calm craft tone, dial ENERGY 1 / RHYTHM 2 / MOTION 1.

Dial: ENERGY 1 / RHYTHM 2 / MOTION 1

## Decisions and reasons

- Source of truth: `werkbank/werkbank.css`. All pages load it. Tokens sit on `:root`.
- Palette: warm paper, deep ink, one clay accent. The accent marks links on hover, margin-note titles, list dashes and tags. Reason: one accent keeps the page calm.
- Dark theme follows the system setting and uses charcoal, not black. No toggle yet. Reason: the audience reads in daylight and at night, so both themes must work.
- Typefaces: Newsreader for headlines and body (a text serif reads like a good letter and matches the honest-advisor tone), Geist only for small labels, nav and tables. Reason for Geist: neutral and readable at small sizes.
- Layout: one reading column of about 66 characters, wide margins, ruled lines instead of cards. Reason: the content is prose and short lists, so a column serves it.
- Margin notes: short side notes carry the honest "no" and the risk statements. They move under the text on narrow screens.
- Offer rows: the three modules are plain rows with duration, not priced cards. Reason: there are no prices on the site, so nothing needs a card.
- Proof: no references exist yet. A dashed "Pilotkunden gesucht" box holds the place. Examples are tagged "Beispiel". Reason: fake proof breaks the honesty claim.
- Photos: five AI-generated still lifes of workshop details (bench, notebook, compass, pegs, tools) in `img/`, no people, no brands, labelled "KI-generiertes Bild". Reason: they carry the craft tone, and the label keeps the honesty claim intact. Real photos replace them when they exist.
- Background: flat color, no grid or texture. Reason: the map identity is gone, so the grid would have no purpose.
- Motion: one short rise on the hero text. It stops under `prefers-reduced-motion`.
- Mobile: header wraps, tables scroll inside their own wrapper, no horizontal page scroll.

## Manifest page `/entwirren/`

Card 10. A single-statement landing page, "Ich entwirre. Danach gehört es Ihnen." It sits beside the home page and is `noindex` until the owner decides whether it replaces it. Styles: `werkbank/entwirren.css`, loaded after `werkbank.css`.

Dial for this page: ENERGY 2 / RHYTHM 3 / MOTION 1. Reason: one statement carries the page, so the type is larger and the sections change shape (open text, staggered sentences, ruled rows, one inverted band).

- Identity motif: one thread, tangled on the left and straight on the right, drawn as two SVG masks (`img/faden-knoten.svg`, `img/faden-gerade.svg`). The straight end carries the clay accent. Reason: it shows "untangle, then hand over" without a word. Labelled "Illustration".
- Inverted band: the handover section only. Reason: "Danach brauchen Sie mich nicht mehr" is the claim the page ends on, so it gets the one hard contrast. Band tokens: `--band-bg`, `--band-fg`, `--band-soft`, `--band-accent`. Contrast checked in both themes.
- Knot list: four example sentences of different length and indent, tagged "Beispiele, keine Kundenfälle". Reason: the length difference shows a tangle, and the tag keeps the honesty claim.
- Copy: draft in the Sie form to match the home page. Facts come from the home page only. The owner confirms or changes the wording.
