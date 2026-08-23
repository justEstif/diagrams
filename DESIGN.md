# Diagram Design System — pi.dev skin

Shared theme for every diagram in this repo. Keep new diagrams consistent by following these tokens.

## Source of truth

- Skin extracted from **pi.dev** (`/style.css` `:root` custom properties) — warm-white paper, evening-blue ink, terracotta accent.
- Full skill reference: `~/.agents/skills/diagram-design/` (SKILL.md + `references/style-guide.md` — already onboarded to this skin).
- When a diagram is generated there, copy the HTML here verbatim; the tokens match.

## Color tokens

| Role | Hex | Use |
|---|---|---|
| `paper` | `#f3f2f0` | Page background (warm-white) |
| `paper-2` | `#ebe7e4` | Container bg (moonstone) |
| `ink` | `#252f3d` | Primary text / strokes (evening-blue) |
| `muted` | `#5c5752` | Secondary text, default arrows (driftwood) |
| `soft` | `#7d7a76` | Sublabels, boundary labels |
| `rule` | `rgba(37,47,61,0.12)` | Hairline borders |
| `accent` | `#b86b52` | Focal element only — max 2 per diagram (terracotta) |
| `accent-tint` | `rgba(184,107,82,0.08)` | Focal node fill |
| `link` | `#4b607c` | HTTP/API-call arrows (tidal-blue) |

Dark variant: invert paper/ink (`#252f3d` / `#f3f2f0`), brighten accent to `#cf8266`.

## Typography

| Role | Family | Notes |
|---|---|---|
| Page title | Instrument Serif, 400, 1.75rem | H1 only |
| Node names | Geist (sans), 12px, 600 | Human-readable labels |
| Sublabels / tags / arrow labels | Geist Mono, 7–9px | Technical content only |
| Aside callouts | Instrument Serif *italic*, 14px | Rarely |

Google Fonts link (same in every file):

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

pi.dev's own fonts (Plantin MT Pro / Commit Mono) are custom-hosted and not redistributable here — the above are the agreed stand-ins.

## Node treatments

| Type | Fill | Stroke |
|---|---|---|
| Focal (≤2) | `accent-tint` | `accent` |
| Backend / package | `#ffffff` | `ink` |
| External / cloud | `ink @ 0.03` | `ink @ 0.30` |
| Unreleased / experimental | `ink @ 0.02` | `ink @ 0.20`, dashed `4,3` |
| Security / boundary | `accent @ 0.05` | `accent @ 0.50`, dashed `4,4` |

## Rules that keep it looking right

- **4px grid** — every coordinate, size, font size, gap divisible by 4.
- **One accent** — terracotta on 1–2 focal elements max; everything else ink/muted.
- **Orthogonal connectors** — rounded right-angle elbows (r=8), never diagonal lines.
- **Arrow labels** — opaque paper mask rect with a 6–10px gap above the stroke.
- **Legend** — horizontal strip below the diagram, never floating inside it.
- **No shadows, no rounded-2xl** — max radius 6–8px, borders instead of shadows.
- **Accessible SVG** — `role="img"`, prefixed `<title>`/`<desc>` IDs per diagram.

## Checklist per new diagram

1. Copy `pi-architecture.html` (or generate via the diagram-design skill) and swap content.
2. Verify tokens against the table above — no ad-hoc colors.
3. Drop the HTML file in the repo root, or in a subfolder for related diagrams (subfolders appear as grouped sections; a subfolder `index.html` makes the group heading a link).
4. Commit & push — **`index.html` regenerates automatically** via the `update-index` GitHub Action (title from `<h1>`, meta from the eyebrow `<p>`, plus the file date).
