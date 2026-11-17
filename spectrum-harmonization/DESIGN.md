# Design notes: Spectrum Harmonization

Source of every fact: GSMA, *Mobile Spectrum Report, 2026 Edition* (October 2026). Written 15 November 2026.

## What the report gave us to work with

- 20 bands in three groups (5 low, 10 mid, 5 high), each with four text sections, a band-plan diagram with exact frequency edges, and usually a count of live networks and of devices.
- No maps and no country lists. Geography exists only in sentences ("ITU Region 1", "EMEA", "the Americas", eight named countries).
- A rich history: every band names the conference that harmonised it, from 1987 to WRC-23, with WRC-27 and WRC-31 ahead.
- Very uneven depth: 3.5 GHz has about 300 words, 50 GHz about 45.

## Three directions considered

1. **The Tuner.** A short introduction, then a band explorer with the spectrum docked on top as the navigator.
2. **The Descent.** One long scroll-driven film with 20 stations, closest to the original brief.
3. **The Atlas.** A dense, mostly static wall chart with a sortable table of bands.

A skeptical review tested each against the thinnest band (50 GHz) and the densest (3.5 GHz), in Thai, on a phone, with keyboard only. The Descent failed: 20 stations leave near-empty screens for thin bands and need a second page as fallback. The Atlas survived everything but is not memorable. We chose the Tuner's structure with the Atlas's table as index and fallback.

## Decisions, and where they depart from the first idea

| Decision | Why |
|---|---|
| **One step per scroll gesture, same as the arrow keys** (A.'s request). The whole desktop page is a deck of full-screen views. | One way to move, no confusion. It works because every view fits one screen, so the wheel has no second job. A trackpad flick is limited to one step. |
| **15 band pages, not 20.** 1800 MHz + 2.1 GHz, PCS + AWS, 26 + 28 GHz, and 40 + 50 + 66 GHz share pages. | The report itself treats the first two pairs as families, and the high bands have two sentences each. Each band keeps its own numbers. |
| **Map plus conference timeline.** The map shows where; the timeline shows when and how widely. | The report describes harmonisation as agreements over time, not only as places. |
| **The map shows one thing: how far along the band is in each place** (A.'s request, 16 Nov). Solid = in use, striped = assigned or planned, light tint = identified or harmonised. A dashed outline means only some unnamed countries in that region. The legend is the same on every page, and the map keeps one size and place. | The first version drew ITU Regions, loose areas and countries differently, so each page seemed to say something different. One meaning per colour strength is quicker to read. Regions are still approximate (the report never lists members); a line under the list says so. |
| **The spectrum is three joined rulers with a marked break**, not one continuous scale. | It mirrors the report's own three rulers, keeps crowded low bands readable, and the break between 7 and 24 GHz is where the report says mobile goes next. |
| **Gradient amber → coral → rose, not a rainbow.** | It follows the report's own colour coding of low, mid and high. A rainbow would suggest visible light. |
| **The wave shortens from left to right; true wavelengths are printed and labelled "calculated".** | The motion carries the physics. The numbers are arithmetic (speed of light ÷ frequency), not from the report. |
| **Generated still images, no generated video.** One consistent look: dark landscapes lit by a coral glow, wide and soft for low bands, tight and intense for high bands. No faces, text or close-up equipment. | The picture shows coverage versus capacity without claiming data. Stills weigh little; the wave in code scrubs perfectly. |
| **Four sections per band** (Overview, Harmonisation, Networks and ecosystem, Future), not three. | That is the report's structure. |
| **No chart of networks against devices.** | It would imply that harmonisation causes ecosystem size, which the report does not say. |
| **Phones get a plain scrolling version.** | The page is designed for a laptop. The plain version is also the fallback if any effect fails, and what prints. |
| **A folder, not one file.** | The wording lives in `script.md` so it can be proofread, as in episode 1. That file is read when the page opens, so the page needs to be served (local preview or GitHub Pages). |

## Look and motion

- Palette from the two reference clips: ink navy-black ground (`#070b10`), warm white text, coral as the one light source (`#ff6b57`), amber (`#f2a65a`) and rose (`#ff5d8f`) at the ends of the spectrum.
- From the clips we took the slow ease-out, text that blurs as it leaves, lines that arrive one after another, and big soft glows. We did not take their upward movement: here bands slide sideways, in the direction of frequency.
- English titles in a serif, Thai in IBM Plex Sans Thai, numbers in a monospaced face.
- Reduced-motion setting: the wave is still, views change with a short fade.

## Files

- `index.html`, `css/style.css`, `js/app.js`, `js/spectrum.js`, `js/map.js`: the page.
- `script.md`: all wording, Thai and English.
- `bands.json`: numbers, band edges, conferences and places, each traceable to a report page.
- `lib/`: fonts, the map drawing library, world outlines (Natural Earth), place definitions.
- `images/`: generated illustrations; `images/PROMPTS.md` records prompts, settings and seeds.
