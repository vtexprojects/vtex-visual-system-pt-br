> **Locale-scoped export** — this repo contains the Português Brasil (PT-BR) slice of the VTEX Visual System design system (shared tokens/components/guidelines + only the `assets/images/pt-br/` image library). Generated from `VTEX Visual System_Git.zip`.


# VTEX Visual System

Visual system for **VTEX**, the AI-Native Commerce Suite ("The Composable and Complete Commerce Platform"). Brand architecture spans three platforms: VTEX Commerce Platform, VTEX CX Platform, VTEX Ads Platform. VTEX sells composable commerce to enterprise merchants; the brand's core stance: **the customer is the protagonist, VTEX is the guide — never the hero.**

## Sources

- GitHub: https://github.com/dcionevtex/vtex-brand-skill (primary source — a Claude Code brand skill; explore it for the full reference docs)
- brand.vtex.com (marketing brand: colors, type, logo, voice)
- styleguide.vtex.com (product/Admin design system, via vtex-tachyons tokens)
- Official Figma assets: figma.com/design/VNkQ2Zmvn98cSyY9HZQNQZ/VTEX-Brand-Assets
- Font download (VTEX Trust): brand.vtex.com → Tipografia.zip (not bundled here — see Caveats)

## Three distinct systems — never mix

1. **Brand identity** (marketing, slides, proposals): Rebel Pink `#F71963` + Serious Black `#142032`, VTEX Trust type. Never both as co-primaries in one composition.
2. **Product UI / Admin** (`tokens/admin.css`): Action Blue `#134CD8` leads; pink appears only as `emphasis`. System fonts, not VTEX Trust.
3. **Architecture diagrams**: brand palette only, four fixed box categories (see Components → Diagram Kit). Bold/uppercase labels are sanctioned here only.

## CONTENT FUNDAMENTALS

- Philosophy: *"It is never about us."* Open with the audience's pain point, not VTEX capabilities. Customer achieves the outcome; VTEX made it possible.
- Personality: Bold (not immature) · Trustworthy (not pretentious) · Optimistic (not naive) — always in balance.
- Casing: mixed case everywhere. Never ALL CAPS, never bold titles. Sentence-style headlines.
- Person: second person for the audience ("your store", "your day"); "merchants, operators, teams" instead of "customers" in B2B.
- Headlines: declarative, max 8–10 words. Patterns: problem → solved ("Black Friday at scale. Zero downtime."), customer outcome ("From 3 platforms to 1. Revenue up 40%."), direct benefit ("Launch in weeks, not months.").
- Banned words: revolutionize, disrupt, game-changing, end-to-end solution, best-in-class, leverage (verb), seamless/empower without definition.
- No emoji in brand materials.
- Wrong: "VTEX enables enterprises to achieve faster time-to-market…" Right: "Uploading hundreds of thousands of SKUs used to take several hours of your day. Now it doesn't."

## VISUAL FOUNDATIONS

- **Color**: Rebel Pink `#F71963` is the identifier (CTAs, accents, divider slides); Serious Black `#142032` is authority (covers, headlines) — one leads, the other supports minimally. Pink tints (Soft `#FFF3F6`, Yogurt `#FFE0EF`, Bubble Gum `#FFC4DD`) for callouts/backgrounds. Balance: Plain White + Soft Blue `#F5F9FF`. Grays: Winter `#E7E9EE` (borders), Cool `#A1A8B7` (captions), Serious `#5B6E84` (body). Heavy Rebel Pink `#DD1659` = hover/pressed. WCAG AA always; white text only on pink.
- **Type**: VTEX Trust, single-weight philosophy, regular (400) titles — bold/italic only for body emphasis. 1.5-ratio scale ("the perfect fifty"). Leading: headings 100%, subheads 120%, body 150%. Left-aligned (center only for single-line display heads on covers/dividers); never right-aligned; never alter letter-spacing.
- **Layout**: even number of columns, symmetrical grid; margins ¼ column width, gutters ¼ margin. Anchor content bottom, then top, fill middle. Prioritize white space.
- **Backgrounds**: flat solid color fields — no gradients, textures, or patterns in the source. Slide schemes: cover/closing = Serious Black, divider = Rebel Pink, content = Soft Blue/White, quote = Soft Pink.
- **Accents**: short pink rules/bars (4–6px tall) as slide accents.
- **Corners/borders**: diagrams use 8–12px radii; Admin UI 4px; Winter Gray 1px borders on light cards. No shadow system defined in the source — keep flat.
- **Hover/press**: pink elements go Heavy Rebel Pink `#DD1659` on hover/press. No other animation/easing system is defined — keep motion minimal.
- **Imagery**: none bundled; the brand ships flat color + type. Don't invent illustration styles.
- **Logo**: always icon + wordmark (viewBox 0 0 80 29, \~2.76:1). Pink on light (default), white on dark/pink, black on light when pink clashes. Top-left or bottom-left; min 60px wide digital; clearspace = height of the "V"; never distorted, rotated, recolored, shadowed, or boxed. Never pink logo on pink background.

## ICONOGRAPHY

The source defines **no icon system** — no icon font, no SVG icon set, no emoji, no unicode-as-icon usage. Diagrams and slides communicate with color-coded boxes, text, and thin rules instead of icons. If a consuming design truly needs icons, use a neutral thin-stroke set (e.g. Lucide via CDN) sparingly and flag it as an unsanctioned addition — nothing in the brand sources sanctions any specific set. Assets bundled: the three logo SVGs only (`assets/`).

## Tokens

- `styles.css` → imports `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/admin.css`.
- Brand: `--vtex-*` raw + semantic aliases (`--accent`, `--surface-page`, `--text-heading`, `--text-body`, `--border`, …) + `--diagram-*`.
- Admin: `--admin-*` (action, state solid/faded pairs, muted grays, radius).
- Type: `--font-brand`, `--font-admin`, `--text-display…--text-caption`, leading and weight tokens.

## Components

Diagram Kit (`components/diagrams/`) — the architecture-diagram standard, defined verbatim by the source:

- **DiagramTitle** — required top-left "VTEX + solution name" lockup
- **DiagramNode** — box in one of four categories: native / custom / external / middleware
- **DiagramGroup** — fieldset-style grouping container (pink = VTEX side, black = external)
- **DiagramLegend** — required bottom-left legend
- **NoteBox** — optional pink-bordered constraint callout

Admin UI (`components/admin/`) — primitives grounded in styleguide.vtex.com tokens:

- **AdminButton** (primary/secondary/tertiary/danger, sizes, disabled)
- **AdminInput** (label, helper, error)
- **AdminAlert** (success/danger/warning)
- **AdminBadge** (status pills)

### Intentional additions

The source repo ships guidelines + tokens, not React components. All components above are direct codifications of its documented specs (diagram CSS template; Admin token quick-pattern) — no invented families. The Admin set is deliberately small: only what the token doc itself specifies (buttons, inputs, states).

## Index

**Gradients**: `tokens/gradients.css` defines the semantic gradients from the brand gradient spec — `--gradient-strawberry-pink` ("Strawberry Pink": Rebel Pink #F71963 → Strawberry Pink #FF6F9F), `--gradient-sirius-black` (Sirius Black #060F23 → Secondary Dark #2C4872), `--gradient-neutral` (Neutral Default #C4CCD9 → Neutral Light #F6F7F9), vertical 180deg, each with `-stop-1/-stop-2` raw values. Specimen cards: guidelines/colors-gradients.html, guidelines/colors-gradients-in-use.html.

**Covers**: `assets/covers/` holds the official deck cover backgrounds — use the PNGs (`pink-cover.png`, `sirius-black-cover.png`, `gray-cover.png`, exported from Figma, pixel-faithful blurs) as full-bleed slide/deck cover backgrounds; the matching `.svg` files are kept as editable source but their blur/diamond-gradient effects render only approximately in browsers (specimen: guidelines/brand-covers.html).

- `readme.md` — this file
- `styles.css`, `tokens/` — global CSS entry + token files
- `assets/` — official logo SVGs (pink / black / white)
- `guidelines/` — 15 specimen cards (Colors, Type, Brand, Admin UI groups)
- `components/diagrams/`, `components/admin/` — components + cards
- `slides/` — 6 sample slides, one per sanctioned slide type (cover, divider, content, data, quote, closing)
- `SKILL.md` — Claude Code agent-skill entry point
- `github.md` — source repo sync record

## Caveats

- \~\~VTEX Trust font binaries\~\~ **Resolved**: full VTEX Trust family (Hairline 100 → Black 900, with italics) is in `fonts/`, wired via `@font-face` in `tokens/fonts.css`. `font-synthesis:none` prevents faux weights.
- No logo PNGs copied (SVG covers HTML use; regenerate PNGs from the repo's `generate-pngs.py` for pptx work).
- No UI-kit screen recreations: the source contains no product screens or UI code to recreate, and inventing Admin screens would violate the "replicate, don't invent" rule.

## Templates

- `templates/feature-slides/` — VTEX Feature Slides: layouts de feature/plataforma que consomem a biblioteca de imagens (spotlight, fullscreen, duo, dark, grid), com entrada sequencial animada quando o slide fica visível/em tela cheia (tweaks: animação on/off e velocidade).

**Gradient usage rule:** semantic gradients are for backgrounds only, never as text fills (`background-clip:text` is prohibited). Text over gradients uses solid colors: white on dark/pink gradients, Sirius Black `#142032` on light ones.

## People photos

`assets/people/<first-last>.png` — square 800px crops of leadership headshots (geraldo-thomaz, mariano-gomide, andre-spolidoro, santiago-naranjo, ricardo-sodre). Render as circles (`border-radius:50%;object-fit:cover`), never inside a bordered box.

## Watermark rule (text-only slides)

Slides whose right half is empty — statement, one-topic, quote — carry the VTEX watermark as a **static PNG**: `<img data-anim src="assets/brand/vtex-watermark.png" style="position:absolute;right:-50px;bottom:-40px;height:420px;opacity:.65;pointer-events:none">` (the PNG is the original gradient line art with its directional blur, rasterized at 2×). Text columns on these slides end at `right:≥400px`. `data-anim` gives it the standard entrance with the slide's cascade. **Do not use the SVG or any stroke animation for the watermark** — animated SVG breaks on export and re-render.

## Artwork & number alignment rules

- **Never place a box behind library artwork** (PNG or SVG): no background, no border, no outline-only frame, no shadow, no border-radius wrapper. Images sit directly on the slide background.
- **Big number + caption**: lay out with `display:flex;align-items:center` (never `baseline`) so the caption is vertically centered against the numeral. Chart titles are centered above their chart (same left/width as the chart).

## Slide typography standard

All slides share one hierarchy (VTEX Trust, weight 400 for display, 500 for emphasis — never 600+):

- Kicker/category: 16px, weight 500, #A1A8B7 (with 22px favicon mark)
- Headline: 44px, weight 400, line-height 1.05 — #142032 on light, #FFFFFF on dark (never Rebel Pink for whole headlines)
- Cover headline: 64px · Big stat: 96px, Rebel Pink
- Body: 18px, line-height 1.5 — #5B6E84 on light, #A1A8B7 on dark
- List items: 17px #142032 · Captions: 16px #5B6E84 (centered under images)
- Accent line: 2px × 40px Rebel Pink (white on pink/dark covers)

## Language standard (EN / PT-BR / ES-MX)

Every deck or artifact is built in ONE language, asked up front (default EN). The language selects the image folder (`assets/images/<lang>/`), the slide copy language, and the deck UI labels (Agenda, "Session 0N"/"Sessão 0N"/"Sesión 0N", closing, dates). Slugs are shared across languages so a deck can be re-localized by swapping the folder segment only. See SKILL.md "Language rule".

## Export typography standard (PPTX / Google Slides)

Exports swap VTEX Trust → **Inter** (the HTML stays VTEX Trust). Sizes and line-heights unchanged. Optical weight map: 250→200, 300→300, 400→400, 500→400, 700→600, 900→700. Applied via gen_pptx fontSwaps + a pre-capture @font-face weight remap.

## Image format rule (ask, default = animated SVG)

When a deck or design uses library artwork, ASK the user once whether they want the images as **static PNG** (assets/images/{screens,features}/) or **animated SVG** (assets/images/svg/{screens,features}/, layer cascade + chart motion). If they don't answer or say "decide for me", ALWAYS default to the animated SVGs, inlined per the SVG library rule above (templates/feature-slides/ is the reference implementation). Same file names in both libraries, so switching is a path swap (`assets/images/svg/screens/x.svg` ↔ `assets/images/screens/x.png`).

## Section marker standard

The default page/section marker (numbered theme divider) is the "Section marker — XL numeral" layout: section-divider gradient background (`--gradient-section-divider`), white favicon top-left, a giant right-aligned numeral (380px, weight 250, rgba(255,255,255,.9), bottom-right), an uppercase "THEME 0N" kicker (18px, weight 500, letter-spacing .08em, 70% white) and the theme title (60px, weight 400, white) bottom-left. Reference: the "Section number XL" slides of templates/feature-slides/ (one per theme). Deck narrative standard: Cover → Agenda (≤5 themes) → \[XL marker + content slides\] × 5 → Closing. The other marker styles (solid pink, cover images, StrawRebel) are alternates, not the default.

## Presentation mode standard (decks)

Decks built with this design system ALWAYS render on the deck-stage shell - a thumbnail rail of all pages on the LEFT and the active slide scaled to fit on the RIGHT (like any presentation editor), with keyboard navigation, a slide counter, present/fullscreen mode, and print-to-PDF - NEVER as a vertically scrolling page of stacked slides. In a DC template, mount it as <x-import component-from-global-scope="deck-stage" from="./deck-stage.js" width="1280" height="720" hint-size="100%,100%"> with one inline-styled <section> per slide inside. deck-stage dispatches a bubbling `slidechange` CustomEvent (e.detail.slide) - listen on document and replay that slide entrance animations + count-up numbers each time it becomes current. Reference implementation: templates/feature-slides/ (deck-stage.js lives alongside the template).

## Entrance motion standard (slides)

When creating slides, apply sequential entrance to elements: accent line → title → body text → image. Keyframes `featLine`/`featUp` (translateY 26px + fade) / `featIn` (scale .965 + fade) / `featBar` (bars: scaleY growth from the baseline, origin bottom) / `featBarW` (progress bars: scaleX growth, origin left) / `featPie` (pie/donut: fan-open — rotate -90° → 0 + scale .9 → 1, center label fades in after), easing `cubic-bezier(.16,.84,.44,1)`, 0.5–0.8s, \~0.15–0.2s stagger per element. Trigger: slide ≥50% vertically visible (IntersectionObserver), replaying on every showing. Number animations are ALWAYS count-up: mark the stat element with `data-countup` and the engine counts from 0 to the final value (ease-out cubic, \~1.1s, honoring the stagger delay, preserving prefix/suffix like +, %, x, B). Reference implementation: `templates/feature-slides/`; specimen: `guidelines/slides-motion.html`.

## Image library (assets/images/<lang>/)

Three parallel libraries — `en/`, `pt-br/`, `es-mx/` — each with `screens/`, `features/` (PNG, trimmed, ≤2200px) and `svg/{screens,features}/` (animated SVG: content-cropped viewBox, layers wrapped in `<g class="vl" style="animation-delay:…">` and staggered top-to-bottom; the host page supplies the `vl` keyframes — see guidelines/images-svg-library.html. Cascade spec: ≤14 layers per image (tiny layers merged into neighbours), all fade+rise with the `vl` keyframe (.75s, cubic-bezier(.16,.84,.44,1)), delays eased from 0.05s to \~1.1s (quick start, gentle tail) so essential items appear one after another, top to bottom. Final frame is pixel-identical to the Figma export. Figma exports drop-shadows as `<g filter>` — never split those groups per child, or the shadow multiplies. Figma SVG exports do NOT embed photos (`<image>` without href) and the host blocks image loading inside inline SVG — so photos are shipped as PNG crops in `assets/images/en/photos/` (shared by all languages) indexed by `assets/images/photos.json` (slug → viewBox + photo boxes in viewBox coords). Any page that inlines an animated SVG MUST overlay these as HTML `<img>` positioned by viewBox fraction — see `placePhotos` in the library card and in templates/feature-slides/. Overlay rules: (a) an overlay inherits the animation-delay of the SMALLEST `.vl` layer whose bbox contains it (its own card), (b) it is clipped to that layer bbox and to the complement of any LATER layer that overlaps it (popups draw on top in the original), (c) entries flagged `emoji:true` replace tofu squares that Figma bakes into outlined text — they are never clipped and use object-fit:fill). 52 slugs, identical across languages (exception: `pick-and-pack-multi-language-support` has no EN SVG — use its PNG). `library.json` entries carry `slug`, `title`, `title_pt`, `title_es`, `category`, `keywords`, `langs`, `svg`, `png`, and `path`/`svgPath` templates with a `<lang>` placeholder.

### Previous (single-language) notes

52 official product/feature images from the VTEX Vision 26/27 deck, exported from Figma in EN, PT-BR and ES-MX (PNG @2x trimmed to content, plus SVG). `assets/images/library.json` is the machine-readable index: file, title, category, type (`screen` = real product UI, `feature` = conceptual illustration), keywords.

**SVG library (animated):** every image also exists as a vector in `assets/images/svg/{screens,features}/<same-name>.svg` (viewBox trimmed to the content bounding box + 12px margin - same trim as the PNGs - so object-fit:contain fills its slot; transparent background). Each SVG is pre-structured for a layer entrance: its composition is flattened (largest groups split first, so cards/rows/labels become individual steps) into 14–25 layer steps bottom→top, each wrapped in `<g class="vl" style="animation-delay:…">` with delays spread over \~1.25s - the "cascade inside the interface" effect. The SVG files carry NO CSS of their own (the platform strips `<style>`/`<animate>` from saved SVGs), so the animation is defined by the HOST page and the artwork must be INLINED, not loaded via `<img>`: fetch the file, importNode its `<svg>` into the DOM, and declare `@keyframes vl{from{opacity:0;transform:translateY(28px) scale(.985)}to{opacity:1;transform:none}} .vl{transform-box:fill-box;transform-origin:50% 100%;animation:vl .75s cubic-bezier(.16,.84,.44,1) both}` in the page CSS. Chart-aware variants (used in waf-metrics; add via `_animate.js` `charts:true`): `.vl-x` horizontal bars grow from the left (scaleX, origin 0 50%), `.vl-wipe` line series reveal left→right (clip-path inset wipe), `.vl-rot` pie/donut rings rotate in (rotate -150° + scale .7 → none, origin ring center). Host CSS must declare all four classes (see images-svg-library.html). When the host keeps layers static until a replay trigger, declare the animation with LONGHANDS (`animation-name:none; animation-fill-mode:both; …`) — in the shorthand `animation:none .75s ease both`, `none` is parsed as the fill-mode and `both` becomes the animation NAME, which silently breaks the cascade. Regeneration tooling: `assets/images/svg/_animate.js` (`steps` = cascade depth, 24 default, 44 for dense dashboards). Replay = set `animationName` to none, force reflow, clear it (longhand only - the shorthand would wipe each layer inline `animation-delay`) (see templates/feature-slides/ `inlineSvgs()` + `playSlide()`, and guidelines/images-svg-library.html). Prefer the SVG in decks; use the PNG for email, PPTX export or when file size matters (SVGs range 12KB–1.1MB).

**Rendering rule:** the images are 4000×4000 PNGs with a TRANSPARENT background and their own baked-in shadow — render them with no box, border, shadow, or border-radius, using `object-fit:contain`, always complete (never cropped) and prominent (taking up as much of the slide as possible — on split layouts the image side should span the full 720px slide height).

**Usage rule for slide/deck generation:** when a slide's topic matches an image title or keywords (e.g. "Delivery Promise", "Catalog Agent", "Apple Pay", "Pick and Pack"), suggest and insert that image rather than drawing a mock. Filenames are the mapping key — kebab-case of the feature name. Categories: AI & Agents, Search & Ads, Payments & Checkout, Logistics & Fulfillment, Storefront/CMS & WebOps, Platform & Data. Specimen cards: Design System tab → "Image Library" group.

## Board-deck slide system (from R&D Q2 QBR deck)

Analyzed from the board deck PDF. Title & background behavior:

- **Content slides**: kicker top-left (small pink VTEX mark + breadcrumb in #A1A8B7, 14px, e.g. "R&D Q2 QBR / Q2 at a glance"), then title in **Rebel Pink #F71963, weight 600, \~42px**, left-aligned. Optional dark subtitle below.
- **Content background**: white fading to blush pink at the bottom — token `--gradient-slide-blush`.
- **Section dividers**: Sirius Black → pink diagonal gradient (`--gradient-section-divider`), giant translucent white number (weight \~250, \~380px) bleeding off bottom-right, white section title bottom-left.
- **Agenda**: dark navy #0B1526 with pink radial glow bottom-left; numbered rows (pink number, white item, gray timing).
- **Boxes**: 1px pink outline at 40% alpha, radius 10-12px, translucent white fill; box titles pink 600.
- **Capsule labels**: pill outline, uppercase, letter-spaced, 11px (pink = current/highlight, navy outline = neutral).
- **Stat callouts**: hairline pink numbers (weight 200, \~118px) inside outlined cards, bold dark caption.
- **Numbered steps**: light gray numbers (300), 1px pink rule, pink step titles.
- Rule reaffirmed: the pink accent stroke always keeps a fixed margin from the title (32px in the classic slides; 1px-rule variants use 14-26px) — never overlapping.

## Icon set (brand iconset)

72 official stroke icons (50×50 viewBox, \~4.1px stroke, rounded caps) supplied by brand — social marks + commerce/product glyphs. Three color variants, same filenames:

- `assets/icons/rebel-pink/<name>.svg` — default on white/blush
- `assets/icons/sirius-black/<name>.svg` — neutral on light surfaces
- `assets/icons/white/<name>.svg` — on Sirius Black, navy or pink gradients

Names are semantic (e.g. `shopping-cart`, `whatsapp`, `ab-test`, `piggy-bank`) — match slide topics to icon names when suggesting. Full visual index: Design System tab → Icons group.

Utility extension: 223 Tabler icons (outline, stroke 2 on 24px — visually consistent with the brand set) in `assets/icons/tabler/<variant>/<name>.svg`, same three color variants. Substitution flag: Tabler is a CDN icon set, not official VTEX iconography — use the brand set first.

Iconstack match: `assets/icons/iconstack-match.json` maps each of the 72 brand icons to its closest Tabler outline name (the set Iconstack serves) — 71/72 matched; `kwai` has no open-source equivalent. All 71 equivalents are included in `assets/icons/tabler/<variant>/` in the three colors. Use it when a brand icon must be swapped for a Tabler/Iconstack one, or to find the brand icon for a Tabler name. The 152 Tabler utility icons already match Iconstack 1:1 by filename.

Brand favicon mark: `assets/vtex-favicon-{rebel-pink,sirius-black,white}.svg` — used as the kicker mark on board-deck slides.

`assets/backgrounds/` holds 4 SVG slide backgrounds (light-pink-bg.svg, strawrebel-bg.svg, pink-serious-bg.png, pink-serious-bg-2.png — the two Pink Serious use Figma angular gradients that browsers cannot render as SVG, so they ship as rasterized 1920×1080 PNGs) — see Brand → Background Options card.