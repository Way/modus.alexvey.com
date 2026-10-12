# DESIGN.md

Direction for modus.alexvey.com. Source of truth for tokens and components: `brand/README.md`, `brand/tokens.css`.
The reasons below are drafts read from the brand files. The owner confirms or changes them.

Reading this as: B2B consulting site for German Mittelstand decision makers, in an editorial cartography style (bone paper, ink, teal), dial ENERGY 2 / RHYTHM 2 / MOTION 2.

Dial: ENERGY 2 / RHYTHM 2 / MOTION 2

## Decisions and reasons

- Palette: bone, ink, teal, plus amber and sage. Teal carries the brand. Amber marks a verdict, sage labels. One accent at a time.
- Text colors meet WCAG AA in both themes (computed with `antislop-human/contrast-check.py`).
- Typefaces: Geist for text (neutral, readable at small sizes), Instrument Serif italic for single emphasis words, JetBrains Mono for labels and numbers. Reason for Geist and JetBrains Mono: owner to confirm.
- Background texture: faint graph paper. It supports the map and plate identity (coordinates, scale bars, plate revisions). It stays under 40% opacity.
- Labels: short mono eyebrows above section headings give each section a name. No numerals, 0.1em tracking.
- Cards: the three live modules are cards because they are priced products that link to a page. Modules not yet built are a plain list, not cards.
- Motion: one hero drawing that cycles through the four method steps, a stopwatch hand and a compass needle on the module cards. All stop under `prefers-reduced-motion`.
- Section rhythm: split header (Module, Methode), stacked header (Haltung), header aligned to the content grid (Über), dark full-bleed (Methode, Kontakt).
- Theme: light by default, dark by system setting or toggle. Both themes are built and checked.
