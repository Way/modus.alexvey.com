# Editorial Kartografie

Modus Vey Brand-System. Source-of-Truth für Farben, Typografie und wiederverwendbare Komponenten. Stand `2026-05` · v5.

Diese Files sind die kanonische Referenz. `index.html` der Site ist aktuell inline-styled, die Werte sind aber 1:1 identisch — bei Drift gewinnt `tokens.css`.

---

## Palette

| Token | Hex | Intent |
|---|---|---|
| `--bone` | `#f4efe5` | Page Background, warmes Parchment |
| `--bone-soft` | `#ece5d6` | Karte / Surface |
| `--ink` | `#15161a` | Body Text, Linien |
| `--ink-soft` | `#2d2e33` | Sekundär-Text |
| `--ink-mute` | `#6e6b63` | Dimmed Body |
| `--ink-faint` | `#a39e92` | Hint / Disabled |
| `--night` | `#0e1014` | Dark Sections, Night-Mode BG |
| `--teal` | `#1e4f4a` | Hauptakzent · Modus Vey Petrol |
| `--teal-bright` | `#2a7a6f` | Hover / Aktiv |
| `--teal-soft` | `#d4ddd9` | Hintergrund-Tönung |
| `--amber` | `#b8632b` | Warmer Highlight (sparsam) |
| `--amber-soft` | `#e8d5bb` | Markierung Background |
| `--sage` | `#7c8b7e` | Eyebrow / Caption / Coord-Labels |

**Regel:** Teal trägt die Marke. Amber nur für Markierung und Verdict-Hervorhebung. Sage ausschließlich für Mono-Labels.

---

## Typografie

Drei Schriften. Jede hat eine eindeutige Rolle.

| Variable | Font | Rolle |
|---|---|---|
| `--display` | Geist 400–600 | Headlines, Display-Type |
| `--body` | Geist 400 | Fließtext (gleicher Stack wie Display) |
| `--serif` | Instrument Serif italic | Emphasis · Roman-Numeral-Dividers · Akzent-Wörter |
| `--mono` | JetBrains Mono 500 | Eyebrows · Coord-Labels · Tabellen-Zahlen |

**Google Fonts URL** (identisch zu `index.html` und Pricing-Deck):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## Konsum

In jedem neuen HTML-Artefakt:

```html
<link rel="stylesheet" href="/brand/tokens.css">
<link rel="stylesheet" href="/brand/kartografie.css">
```

Tokens reichen für reines Theming. `kartografie.css` bringt zusätzlich Komponenten-Klassen (siehe unten).

### Light/Night-Mode

Default ist Bone-Light. Night-Mode greift automatisch via `prefers-color-scheme: dark` oder explizit per `<html data-theme="night">`.

---

## Komponenten (`kartografie.css`)

12 wiederverwendbare Klassen, alle aus der Site und dem Pricing-Deck extrahiert:

| Klasse | Zweck |
|---|---|
| `.corner-mark` | L-förmige Eckenmarken (4 Pos-Varianten `--tl`, `--tr`, `--bl`, `--br`) |
| `.frame` mit `<span class="frame-dots">` | Quadratischer Rahmen mit 4 Dot-Corners (1× Teal aktiv) |
| `.grid-bg` | Dashed Background, radial maskiert |
| `.coord` / `.coord--corner` | Mono-Sage-Labels für Koordinaten · Plate-Revisions |
| `.display-xxl` / `.display-xl` / `.display-lg` / `.heading` | Typo-Skala |
| `.eyebrow` | Mono-Sage-Eyebrow mit kurzem Strich davor |
| `em.serif` | Instrument-Serif-italic Emphasis (Teal) |
| `.bullets` | Liste mit Label + Strong + Price-Layout |
| `.kpi` + `.kpi-val` + `.kpi-label` + `.kpi-trend` | Daten-Karte mit Top-Accent-Rail |
| `.data-table` + `.verdict-pill` + `.num` + `.pillar` | Tabelle mit Mono-Header und Hover |
| `.mermaid-wrap` | Hooks für Mermaid-Theme im Bone-Look |
| `.panel-num` | Oversize Serif-italic Nummer als Karten-Hintergrund |
| `.verdict-bar` | Teal-on-Bone Strip mit Mono-Caps + Display-Sentence |
| `.price-bar` | Range-Visualisierung mit Marker |
| `.status-caption` | Sage-Mono-Status (Alternative zur Pill) |

### Mermaid-Theme

Wenn Mermaid eingebunden wird, dieses `themeVariables`-Set verwenden:

```js
mermaid.initialize({
  theme: 'base',
  themeVariables: {
    primaryColor:        '#fbf8f0',   /* --bone-soft */
    primaryBorderColor:  '#1e4f4a',   /* --teal */
    primaryTextColor:    '#15161a',   /* --ink */
    secondaryColor:      '#ece6d8',   /* --surface2 */
    secondaryBorderColor:'#6a6a6f',
    tertiaryColor:       '#fbf8f0',
    tertiaryBorderColor: '#b8632b',   /* --amber */
    lineColor:           '#6a6a6f',
    fontSize:            '17px',
    fontFamily:          'Geist, system-ui, sans-serif',
  }
});
```

---

## Visual-Explainer Preset

`preset-visual-explainer.css` ist die kompakte Preset-Variante für die Visual-Explainer-Skill-Reference. Sie ist als **Source-of-Truth-Mirror** für den Marketplace-Cache eingerichtet:

- Eingebettet in: `~/.claude/plugins/marketplaces/visual-explainer-marketplace/plugins/visual-explainer/references/slide-patterns.md` (Sektion `### Editorial Kartografie`)
- **Sync-Risk:** Plugin-Updates können den Cache überschreiben. Bei Drift Inhalt aus `preset-visual-explainer.css` in die Skill-Reference neu einfügen.

---

## Versions

| Version | Stand | Source-Site-Commit |
|---|---|---|
| v5 | 2026-05-18 | extrahiert aus `index.html` zum Zeitpunkt des Brand-System-Anlegens |
| v4 | bestehend | inline in `index.html:101` (siehe Comment-Banner) |

Bei Site-Refresh: Site-Tokens prüfen, falls Drift → `tokens.css` ist die Wahrheit; Site nachziehen.

---

## Cartography-Signaturen

Sechs visuelle Marker, die das System trägt:

1. **Corner-L-Marks** in den Section-Ecken (`stroke-width: 1`, opacity ~0.45)
2. **Dot-Corner-Frames** um Hero-Elemente (3× ink + 1× teal "active")
3. **Roman-Numeral-Dividers** in Instrument-Serif-italic als Section-Background (opacity 0.06–0.08)
4. **Coord-Labels** (`M-2026.05`, `REV. V`, `N 51°18'52"`) — Mono-Sage in Layout-Ecken
5. **Verdict-Bars** in Teal — als CTA-Strip oder Conclusion-Markierung
6. **Dashed Grid-Backgrounds** — subtle, radial-masked, hinter ausgewählten Sections
