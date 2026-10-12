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
