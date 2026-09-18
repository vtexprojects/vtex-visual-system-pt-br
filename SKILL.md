---
name: vtex-design
description: Use this skill to generate well-branded interfaces and assets for VTEX, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

## Deck rule — adapt, never copy
`templates/feature-slides/FeatureSlides.dc.html` is a **layout reference catalogue**, not a deck to reuse. When the user asks for a presentation (from a prompt, a PPTX, a PDF, or notes):
1. **Content first.** Read the user's material and build the narrative from it: their titles, their numbers, their sections, their image needs. Never carry over a single word, number, chart value, or image choice from the reference deck.
2. **Pick, then re-compose.** Choose layouts from the catalogue only where they fit the content (a stat → big-number layout; a comparison → columns; a process → timeline). Re-compose each one to the user's copy length and data — change grid counts, column widths, chart series, image slot, background scheme. Two decks made with this skill should never look like the same file with edited text.
3. **Structure from the source.** Section count, agenda items, and slide order come from the user's document, not from the reference's 5-theme narrative. If the source has 3 sections, build 3 section markers; if it has none, don't add them.
4. **Always honour the constants** — VTEX Trust, the color schemes, the typography scale, the entrance/count-up animation standard, the deck-stage shell, the language and image-library rules, the "no box behind artwork" and number-alignment rules. These are the identity; everything else is the user's content.
5. **Images** come from the user's file when it has them; from the library only when a slide topic matches a library slug (`assets/images/library.json` keywords). Never insert library screens as decoration.
Use the reference deck to learn *how* layouts are built (spacing, hierarchy, animation attributes), then write the user's deck from scratch with the same building blocks.

Key rule: VTEX has three distinct visual systems — brand/marketing (Rebel Pink #F71963 + Serious Black #142032, VTEX Trust type), product/Admin UI (Action Blue #134CD8, system fonts), and the architecture-diagram standard (four fixed box categories). Never mix them: no pink primary buttons in Admin mockups, no Action Blue in slides or diagrams.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.


## Deck rule
When building slide decks with this design system, always generate them on the deck-stage shell: a thumbnail rail of all pages on the left and the active 1280x720 slide scaled to fit on the right (like any presentation editor), with keyboard navigation, slide counter, present/fullscreen mode, and print-to-PDF - never a vertically scrolling column of slides. Replay each slide entrance animation (and count-up numbers) on its `slidechange` event. Follow the reference implementation in templates/feature-slides/ and the "Presentation mode standard (decks)" section of readme.md.


## Language rule (ask FIRST)
Before building any deck or artifact that may use library artwork, ask the user once which language the file is in: **EN**, **PT-BR**, or **ES-MX**. Default to **EN** if they don't answer. The choice drives three things at once:
1. **Image library** — every artwork reference resolves to that language's folder: `assets/images/<lang>/{screens,features}/<slug>.png` (static) or `assets/images/<lang>/svg/{screens,features}/<slug>.svg` (animated). Slugs are identical across languages — only the folder changes, so switching language is a path swap, never a re-pick. Index: `assets/images/library.json` (`langs` lists what exists per slug).
2. **Slide copy** — suggested titles, body text, captions, and chart labels are written in that language (VTEX tone rules still apply).
3. **Deck UI labels** — Agenda / Agenda / Agenda, "Session 0N" / "Sessão 0N" / "Sesión 0N", closing line, footer, date format (EN: September 15, 2026 · PT-BR: 15 de setembro de 2026 · ES-MX: 15 de septiembre de 2026).
Never mix languages inside one deck. If a slug is missing in the chosen language, fall back to EN for that image and tell the user.

## Image rule
After the language is set, ask once: static PNG or animated SVG? Default to animated SVG (inlined, see readme "SVG library"). Both formats exist for all three languages under the same slugs.

## Closing question — export to Google Slides?
After delivering any deck, ask the user once (ask_user, single question): **"Export this deck to Google Slides?"** with options *Yes — Google Slides*, *Yes — PowerPoint (.pptx)*, *No, keep it as HTML*. Only if they pick Google Slides run gen_pptx with `offer_google_slides: true`; for PowerPoint run it without. Apply the Inter export rule below in both cases. Never export unasked.

## Export rule (PPTX / Google Slides)
When the user asks to export or convert a deck to PowerPoint or Google Slides, swap **VTEX Trust → Inter** for the export only (the HTML deck keeps VTEX Trust). Keep every font-size and line-height as authored. Map weights with optical compensation (Inter renders heavier): Trust 250/Hairline-Thin → Inter 200 ExtraLight · 300 Light → 300 Light · 400 Regular → 400 Regular · 500 Medium → 400 Regular · 700 Bold → 600 SemiBold · 900 Black → 700 Bold. Implement with gen_pptx `fontSwaps: [{from:"VTEX Trust", to:"Inter"}]` + `googleFontImports: ["Inter"]`, and add a temporary @font-face override that remaps the weights above before capture. Use `offer_google_slides: true` only when Google Slides was requested.

## Section marker rule
Numbered theme/section dividers use the "XL numeral" marker (gradient background, giant numeral bottom-right, THEME 0N kicker + title bottom-left) — slides 05/11/15/18/21 of templates/feature-slides/ are the reference. Deck narrative: Cover → Agenda (≤5 themes) → XL marker + content per theme → Closing.
