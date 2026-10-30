# STATUS — NBTC digest web page

## 30 October 2026, later (smoother map moves between sections)

- A. found the map move after section 2 felt like a snap. **Cause:** the map slid its view box straight from Bangkok/EEC (zoomed in) to the southern landings (~6° south) in 0.9 s, so it raced across more than a screen while still zoomed in.
- **Change (`ep01-data-centers/index.html`, new `flight()` function):** every section change is now a timed "flight": zoom out, pan, zoom back in, using d3's built-in smooth-zoom path. Longer trips take longer (0.8–2.2 s; section 2→3 is about 1.5 s). The opening-screen move is still tied to scrolling, unchanged.
- **Why timed, not tied to scrolling:** A. chose it; it fixes the snap with a small change, and fast scrollers would still see jumps with the scroll-tied version.
- Checked locally: the 2→3 path zooms out to ~10° wide mid-way, then settles exactly on section 3; no errors. Not yet committed or put live.
- **Found why A. saw no movement at all in Brave:** Windows "Animation effects" is off on this laptop (Settings → Accessibility → Visual effects). Browsers pass that on as "reader wants less motion", and the page skipped every map move for such readers. This also explains the original "snappy" report.
- **Decision (A.):** readers with less motion get a **short fade** instead of a jump: the map fades out (~0.2 s), switches view while hidden, fades back in (~0.4 s). Everyone else gets the flight. **Why:** respects readers who turn motion off on purpose (it can make people feel unwell), without the hard snap. New `fadeTo()` / `mapFade()` in `index.html`.

- A. checked it in Brave and approved. Committed (`d23700e`) and pushed. **Proof it's live:** GitHub Pages reports build of `d23700e` done; the live page contains the new `flight()` and `fadeTo()`, computes the 1.5 s section 2→3 flight, and shows no errors.

**State now:** smooth flights + reduced-motion fade live on github.io.
**Next action:** share the link / QR code.
**Waiting on / open questions:** whether the speed feels right on other devices (easy to tune: the 0.8–2.2 s flight limits, the 0.2/0.4 s fade); printable PDF; section 7; episode 2 topic.

## 30 October 2026 (cable labels reworded, author byline added)

- A. reworded the two labels on the cable drawing to make the legal line clearer: foreign ownership is allowed **outside Thai waters**, but the part **inside Thailand** must be run by a majority-Thai licensee (previously just "sea" vs "land").
- **English labels shortened** to about 35 characters ("Beyond Thai waters: foreign-owned OK" / "In Thailand: majority-Thai licensee"). **Why:** A.'s first versions were 40–50 characters; the note asks for ~25, and A. decided 35 is fine.
- **Added an author byline** on the cover, under the date: new block `cover.author` in `script.md`, plus one line in `index.html` so the page shows it. Name: อำนิษฐ์ โอภาพันธ์ - สำนักวิเคราะห์นโยบายเชิงปริมาณ / Amnist Opapun - Policy Assessment Bureau.
- **Proof it's live:** checked on github.io; the cover shows the Thai byline and the live `script.md` has both languages.
- Talked through how to describe the work to others: a bilingual "scrolling story" web page (เว็บเพจเล่าเรื่องแบบเลื่อนอ่าน), not editable by readers, and not suited to printing because the maps change as you scroll. A print/PDF version could be made later if needed.

**State now:** episode 1 live with new labels and byline; section 7 still hidden; QR code still local only.
**Next action:** share the link / QR code.
**Waiting on / open questions:** whether a printable PDF version is needed; whether section 7 comes back; episode 2 topic.

## 28 October 2026 (section 7 hidden, QR code made)

- A. edited `script.md` and asked to hide section 7 (takeaway, "what to watch", next-episode line).
- **How:** added the word `hidden` to that section in `ep01-data-centers/index.html`. **Why this way:** the text stays in `script.md`, so bringing it back means deleting one word (a note in the page file says where).
- Made a QR code for the live episode link (installed the small Python tool `segno` with A.'s okay). Saved in `qr/` as PNG and SVG. **Kept off GitHub** on purpose: it doesn't need to be online. The code points to the web address, so it never needs remaking.
- The QR code couldn't be test-scanned on the laptop; A. to check with a phone.

**State now:** section 7 hidden on the live site; QR code ready locally.
**Next action:** share the QR code / link.
**Waiting on / open questions:** whether section 7 comes back later; episode 2 topic.

## 16 October 2026 (STATUS.md now in the repository)

- A. wants to read the progress log from other computers, so STATUS.md is now committed to the public `amnist-o/digest` repository.
- **Decision and why:** A. accepted that the log is public, both on GitHub and as a web address on the site. The alternative, a separate private notes repository, was offered and declined to keep things simple. Checked beforehand: the log holds no passwords, keys or email addresses.
- `source/` and `.claude/` are still kept off GitHub.
- **On another computer:** run `git clone https://github.com/amnist-o/digest.git`, then read STATUS.md. After working, commit and push so the log stays in sync.

**State now:** episode 1 is published, and the log is in the repository.
**Next action:** share the link; plan episode 2.

## 16 October 2026 (PUBLISHED)

**Live:** https://amnist-o.github.io/digest/ep01-data-centers/ (English straight away: add `?lang=en`). Home page: https://amnist-o.github.io/digest/
**Repository:** https://github.com/amnist-o/digest (public), branch `main`, first commit `4785f9c`.

**What we did**
- Removed all 17 "> TH: Claude's draft" notes from `script.md` (A. had checked the Thai).
- Started the git history, committed exactly the page files (the `source/`, `.claude/` and `STATUS.md` are excluded by `.gitignore`), created the public repository and uploaded it, and switched on GitHub Pages (branch `main`, root). The build took about a minute.

**Proof it's live (checked on the real site, not just the tool's word)**
- All key files answer from github.io: the page, `script.md`, the night map and photos, the drawing tool, the outlines and the fonts.
- `STATUS.md` and `source/` return "not found", so the private notes are not online. The live `script.md` contains no draft notes.
- Opened the live page in a browser: Thai title shown, no empty text blocks, night map present, 22 map labels, 35 sources. Switching to English works. Zero requests to outside sites and no errors. A screenshot shows the title over northern Thailand at night.

**How to update later:** edit `ep01-data-centers/script.md` (wording) or ask Claude for design changes, then commit and push; GitHub Pages rebuilds in about a minute.

**State now:** episode 1 is published and verified.
**Next action:** share the link with NBTC executives; gather feedback.
**Waiting on / open questions:** episode 2 topic (saved candidates: resilience of Satun/Songkhla landings; geopolitics of land routes; US vs China-led cables; access for smaller data center tenants).

## 16 October 2026 (takeaway picture, third try: settled)

- A. clarified with a screenshot: they wanted the earlier version (night lights as the box background), with the route lines removed and the lights moved right of the text.
- Done:
  - The background is the NASA night image again (no outline, labels or lines), enlarged so Bangkok's lights sit about 80% across, to the right of the text.
  - A dark fade on the left keeps the text readable.
  - On phones the image sits faintly behind the text.
- The drawn small-map version was removed completely, along with its code and styles.
- Checked: laptop and phone, no console errors, no sideways scrolling.
- **Lesson:** when A. says "the previous version", confirm which version (a screenshot helps) before rebuilding.

**State now:** ready to publish when A. agrees. Still open: the 11 unchecked Thai drafts, and removing the draft notes from script.md before publishing.

## 16 October 2026 (takeaway picture, second try)

- A. asked for the takeaway picture at the earlier size (behind the whole box), focused on Thailand, with no cable lines.
- Done: the night map now fills the whole takeaway box, drawn from the same data as the main map, so it's accurate.
  - Laptop: all of Thailand fills the box's height, its centre about three quarters across, with a glowing border; neighbours are dimmed. A dark fade on the left keeps the text readable. Place names for Bangkok, Chonburi, Rayong, Hat Yai, Songkhla and Satun; no route or cable lines.
  - Phone: the map sits faintly behind the text; place names are hidden there because they collided with the text.
- Checked: laptop and phone, no console errors, no sideways scrolling. The picture is left out when printing.

**State now:** ready to publish when A. agrees. Still open: the 11 unchecked Thai drafts, and removing the draft notes from script.md before publishing.

## 16 October 2026 (A.'s review fixes)

- **Neighbours' lights:** the darkening outside Thailand went from 55% to 80%, so Thailand's lights lead.
- **Data center icon:** now a dark square with a light outline and two "server" lines, with a soft shadow, so it stands out against Bangkok's and Chonburi's lights. Same icon in the legend and on the takeaway map.
- **Progress:** the square dots on the right are gone. Now there's a slim lavender line along the top of the screen that fills as the reader moves through the map story, and fades out after it. The map uses the freed space on the right.
- **Takeaway picture:** the old background and hand-drawn route were wrong (badly positioned, and the route ran over Cambodia). Replaced with a small, accurate map drawn from the same data as the main map. It shows the domestic leg Satun → Hat Yai → Songkhla → (Gulf, planned) → Rayong → Chonburi → Bangkok, with province names, landing points and data center icons. It sits beside the text on laptops and below it on phones.
- **script.md:** added the place names Chonburi / ชลบุรี and Hat Yai / หาดใหญ่.
- Checked: laptop and phone, both languages, no console errors, no sideways scrolling.

**State now:** ready to publish once A. is happy. Still open: the 11 unchecked Thai drafts, and whether to remove the draft notes from script.md before publishing.

## 16 October 2026 (piece 5: final check before publishing)

**Checked (both languages)**
- Every text block on the page is filled. No script notes, raw links or `~` marks leak onto the page. All 22 map labels are filled; all photos have descriptions; all progress dots have names; all 35 sources are listed.
- No requests to outside websites, and no errors in the browser console. Every local file answers.
- Laptop (1440×900): no sideways scrolling, and no text box sticks out of the screen.
- Phone (375×812): no sideways scrolling; boxes use 28–47% of the screen; the cards stack in one column; the More/Less buttons work.
- Print: Edge printed the page to PDF in the background (8 pages each in Thai and English, with the photos and map included). They're sent to A. to look at, because this laptop has no tool to turn PDF pages into pictures.
- Not verifiable here: the map switching sections while scrolling. The preview pane stopped drawing (the app window was minimized), which pauses the browser's scroll tracking. It worked in earlier checks while the pane was drawing.

**Fixes made during the check**
- The home page (`index.html`, the episode list) was still loading Google Fonts. It now uses the local fonts and the dark look.
- Added `lib/licenses/`: the font licence texts (Open Font License), D3's ISC licence, and a README listing every outside source and its licence.
- Added `.gitignore`, so `source/`, `.claude/` and `STATUS.md` never get uploaded.

**Ready to publish:** 22 files plus licences, about 3 MB.

**Open before publishing**
- 11 Thai drafts are not yet marked as checked: the Marseille body, the map credit, 3 photo credits, 3 captions, the border note, More, Less.
- `script.md` is publicly readable at its address, including the "> TH: Claude's draft" notes. Remove the notes before publishing?
- A.'s own scroll-through and a look at the print PDFs.

## 16 October 2026 (piece 4: photo cards and takeaway highlight)

- **Section 6 cards:**
  - Each card has its photo on top, darkened with a faint lavender tone so the three look like a set, then the caption and the credit line (photographer, Wikimedia Commons and licence, as links, plus "Darkened and tinted").
  - Below the photo: place, big glowing number, text.
  - On a laptop, hovering lifts a card and lights its border.
  - Photo file, caption and credit all come from `script.md`. If a file name is left empty, the card simply shows no photo.
  - Checked: all three photos load at a 16:10 shape (340×212 px on a laptop); the cards stack cleanly on a phone.
- **Section 7:**
  - The takeaway box sits over a close-up of our own NASA night map (Bangkok's lights). It has a lime border and glow, and a stylised drawing on the right of the route from the southern landings to Bangkok (hidden on phones).
  - The four "what to watch" boxes each have a glowing line drawing: a document with a check stamp (approvals), two linked dots (the Satun–Rayong link), a balance scale (the licence debate), and an arrow crossing a dashed border (neighbouring gateways).
- **Print:** the takeaway prints without its background picture, and cards don't split across pages.
- **Minor, not fixed:** on phones, the language button (bottom right) sits over the bottom corner of whatever text is behind it.

**State now:** pieces 1–4 done, not published.
**Next action:** piece 5: a final check on laptop, phone and print in both languages, then publish (needs A.'s go-ahead).

## 16 October 2026 (piece 3: text boxes, progress dots, legend)

- **Phones:** each text box shows only its key part, and a "More / Less" button (อ่านต่อ / ย่อ) opens the rest. Smaller type and tighter spacing; the bar chart is shrunk to sit side by side.
  - Measured box height as a share of the screen (Thai / English): section 1: 28% / 29%; section 2: 35% / 31%; section 3: 35% / 31%; section 4: 42% / 33%; operator roles: 47% / 43%; section 5: 38% / 33%. Before: 42–64% in Thai.
  - The map's focus now sits between the legend (top) and the text box (bottom).
- **On every screen size, what moved into "more":** section 1's paragraph and caveat; section 2's second paragraph; section 3's cable list; section 4's licence paragraph (the "link between them is the opportunity" line now comes before it); the Rayong-link status; the Open DC note. On laptops everything is shown, as before.
- **Progress dots:** 7 square dots on the right edge, one per story section. The current one glows lime, a click scrolls to that section, and screen readers hear each section's headline. They're hidden on phones (too small to tap) and fade out after the map part ends.
- **Legend:** moved to the bottom right, above the credits. Checked that it no longer overlaps any text box on a laptop. Map labels also stay clear of the dots and the text box (checked: none in the way).
- **script.md:** added `ui.more` / `ui.less` (the Thai is Claude's draft).

**State now:** pieces 1–3 done, not published.
**Next action:** piece 4: section 6 photo cards, section 7 line drawings, and the takeaway highlight.

## 16 October 2026 (piece 2: tilt and camera per section)

- **Tilt:** the map layer leans back in 3D (24°), so the north recedes. Labels and markers sit on a separate flat layer, placed by the same perspective calculation, so they stay upright and readable.
- **Camera views per section:**
  - title screen: northern Thailand;
  - section 1: all of Thailand (the scroll pan now ends here);
  - section 2: a close-up of Bangkok and the EEC;
  - section 3: the southern landings, with cables coming in from both seas;
  - sections 4 and the operator roles: Satun to Bangkok (the domestic leg);
  - section 5: the Thai–Malaysian border.
- **Checked:**
  - At laptop (1425×900) and phone (375×812) sizes, every key place in each section falls inside the visible part of the map, clear of the text box.
  - The tilted layer covers the whole screen on phone, laptop and wide screens (no edges showing).
  - Screenshots of all of Thailand and of the Bangkok close-up looked right. Later screenshots failed because the app window was minimized, so the other views were checked by numbers only.
- One bug was caught and fixed on the way: a text replacement had tilted the whole map box instead of just the map layer.

**State now:** pieces 1 and 2 done, not published.
**Next action:** A. scrolls through to judge the feel (tilt angle, speed, framing). Then piece 3: text boxes (shorter on phones), the progress dots, and the legend overlap.

## 16 October 2026 (opening screen over the night map)

- A. asked for the title screen to show northern Thailand's night lights, with no cables, and for scrolling to pan south until all of Thailand is in view at section 1.
- Done:
  - The title now sits over the night map (the decorative arc is gone).
  - Scrolling through the opening screen moves the camera smoothly from northern Thailand (97.4–104.6°E, 16.4–20.6°N) to the whole country. The movement follows the scroll position, so it goes back up when you scroll back up.
  - Cables, landings and the legend stay hidden until section 2.
- Behind the scenes: the map is now drawn once and the "camera" only shifts and scales it. One camera move costs about 0.2 ms, against about 30 ms for a full redraw, so it stays smooth on phones. Glows are now made with wide faint lines instead of blur effects (cheaper, and they stay the same width at any zoom).
- Softened the hard top and bottom edges of the NASA image. The legend box is hidden while it would be empty.
- Checked in the preview: the title screen, the middle of the pan, and the full-Thailand view at section 1.

**State now:** piece 1 plus the opening screen are done, not published. Phone text boxes are still too tall (piece 3).
**Next action:** piece 2: tilt, and camera moves to each section's region.

## 16 October 2026 (piece 1: full-screen night map with Thailand border)

**Done**
- The page no longer needs any outside service. Checked in the browser: zero requests to other websites.
  - Fonts: local copies of Funnel Display, IBM Plex Sans, IBM Plex Sans Thai and JetBrains Mono, Latin and Thai letters only. They're in `lib/fonts/` with `lib/fonts.css`, under the free Open Font License.
  - Drawing tool: a local copy of D3 7.9.0 (`lib/d3.min.js`).
  - Country outlines: Natural Earth 1:10m (detailed), cut to the region (`lib/region.geojson`, 650 KB).
- The map is now full screen, built from the NASA night image (`images/night-map.jpg`), with the cables drawn on top. The projection was changed so they line up exactly with the image; checked that the coastline outline follows the coastal lights, even in the border close-up.
- Thailand: a glowing light outline. Everything outside Thailand is darkened slightly; neighbours get faint outlines and name labels (Myanmar, Laos, Cambodia, Vietnam, Malaysia, Indonesia).
- The NASA credit (with a link) and the note "Borders are approximate and for illustration only (Natural Earth)" sit in the map's corner.
- Each section's text now floats in a dark see-through box over the map. The map keeps its focus to the right of the box on wide screens.
- `script.md`: added the country names and the border note (the Thai note is Claude's draft).

**Known issues, for the next pieces**
- On phones, the text boxes are too tall and cover most of the map (piece 3).
- The legend overlaps the bottom of a text box on laptops (piece 3).
- No tilt or per-section camera moves yet (piece 2).

**State now:** piece 1 of 5 done, not published.
**Next action:** piece 2: tilt and a camera move per section.

## 16 October 2026 (images downloaded; next: full-screen night map)

**Decisions (A.)**
- Redesign sections 1–5 as a full-screen tilted map that flies to each region as the reader scrolls. Each section's text sits beside the focal point; on phones it goes in a panel along the bottom.
- The map uses NASA's Earth at Night (Black Marble 2016), stored in our own folder, so no outside map service is involved. NASA is credited, with the map's year.
- Section 6 cards use real photos on the theme "where the cable meets the data center". Section 7 uses line drawings, not photos.

**Done**
- Downloaded NASA's Black Marble 2016 tile D1 (39 MB) and cut out 92–108°E, 1–22°N at full detail (3840×5040 px). Saved as `ep01-data-centers/images/night-map.jpg` (950 KB). The big download was deleted. Checked: Bangkok is bright and the sea is dark at the expected spots.
- Three photos from Wikimedia Commons, shrunk to under 500 KB:
  - `marseille.jpg`: Digital Realty data centers, Marseille port, 2024. LaMèreVeille, CC BY-SA 4.0.
  - `sines.jpg`: port of Sines, 2021. Diego Delso, CC BY-SA 4.0.
  - `johor.jpg`: Johor Bahru at night, 2020. Lionel Lim, CC BY 2.0.
- Added an "Images and credits" section to `script.md`: the map credit, plus a file name, credit line and caption for each photo, in both languages (the Thai is Claude's draft).
- No free photo exists of the EllaLink landing at Sines or of a Johor data center campus. A. could ask the companies' press offices for permission.

**State now:** images and credits are ready. The page itself hasn't changed yet.
**Next action:** agree the build plan for the full-screen map (Phase 3), then build piece by piece.
**Waiting on / open questions:** A.'s check of the new Thai credit and caption drafts.

## 16 October 2026 (proofreading fixes applied)

- Applied all 8 proofreading fixes in English and Thai, as A. asked:
  - under 50% (not "not more than 50%");
  - the network inside Thailand, not the landing, needs a majority-Thai licensee;
  - Gulf in VTS, with AIS supporting sales;
  - Marseille "taken over in 2014" and "by 2020, 14 landings";
  - Sines "planned, up to 495 MW", and the government "is working to" streamline approvals;
  - Johor's 25 + 7 count is all of Peninsular Malaysia;
  - Open DC: the LinkedIn-only "gateway" claim was dropped, and Campana is named in the Satun plan.
- Knock-on change: the Open DC note now says "a single project" (it was "one company's plans").
- Each changed Thai line has a note above it: "TH: Claude's draft (proofreading fix), please check". Notes never appear on the page.
- Replaced the dead Silicon Canals link with Baxtel's 2022 report on the 495 MW project. Newer reports mention a grid connection of up to 1.2 GW; the page keeps the 495 MW plan.
- Backup of the script before these fixes: in the session scratchpad (`script.before-fixes.md`).

**State now:** content fixes done, dark design done, not published.
**Next action:** A. checks the 7 Thai drafts (search script.md for "Claude's draft") and opens the flagged links (Capacity, Business Today x2, Khaosod) in a normal browser. Then publish.
**Waiting on / open questions:** A.'s Thai check and the link check.

## 16 October 2026 (skill installed)

- Installed ui-ux-pro-max (version 2.15.0) into this project at A.'s request. It added 7 skill folders (about 4.5 MB) under `.claude/skills/`. They won't be uploaded to GitHub, because `.claude/` will be excluded.
- Tested it with one design lookup ("government policy briefing"). It works, but its general advice for government sites is a plain, light, high-contrast look in navy and blue, which is close to the version A. found too plain. Its readability rules (contrast, focus outline, reduced motion, 44 px buttons) are already in the dark design.
- The skill becomes available as a named tool after a restart of Claude Code.

**State now:** dark redesign done, not published. The 8 proofreading fixes are still not applied.
**Next action:** apply the proofreading fixes, then publish.
**Waiting on / open questions:** how to apply the 8 fixes (all with Thai drafts, or English only).

## 15 October 2026 (dark redesign)

**What we did**
- A. found the light design too plain and asked for a look inspired by turionspace.com: near-black background, glowing line drawings, small typewriter-style labels, big headlines.
- Fixed the TalayLink route: it now goes around the northern tip of Sumatra instead of across it (the map was widened to the west).
- **Design skill:** A. approved installing ui-ux-pro-max, but this session's safety check blocked the download and install. Instead, its guidance and data files were read straight from GitHub (nothing installed). Used from it:
  - the "Dark Mode" and "Space Tech" colour guidance;
  - the mono + IBM Plex font pairing;
  - its rules on contrast, visible keyboard focus and reduced motion;
  - its warning that dark designs suit screens, not print.
- Redesign applied:
  - Dark background. Lavender, glowing lines for cables; lime only for the domestic leg and the takeaway.
  - Fonts: Funnel Display headlines (English), IBM Plex Sans Thai (Thai), JetBrains Mono labels.
  - A full-screen opening with a glowing cable arc. Sections are numbered "■ 01 … ■ 07".
  - The case-study cards and "what to watch" list are now in grids.
  - The language button moves to the bottom on phones. Map labels stay inside the map on narrow screens.
  - Readers whose devices ask for less motion get no animation. Printing switches to a light version automatically.
- Backup of the light version: in the session scratchpad (`index.before-dark.html`).

**Checked:** laptop and phone width, Thai and English, in the preview. The animations themselves can't be watched in the hidden preview, but their end states look right.

**State now:** redesign done on the laptop, not published. The 8 proofreading fixes are still not applied.
**Next action:** A. reviews the new look. Then apply the proofreading fixes, then publish.
**Waiting on / open questions:**
- How to apply the 8 proofreading fixes (all, with Thai drafts? or English only?).
- Whether A. wants to install the skill themselves (`npx ui-ux-pro-max-cli init --ai claude`).

## 15 October 2026 (step 4: charts, drawing, phone check)

**What we did**
- Opening section: a two-bar chart (350 MW running vs 2,066 MW approved). The bars grow when the reader reaches the section. Bar heights follow the numbers in `script.md`, so editing the numbers updates the chart.
- "The route inside Thailand" section: a small drawing of one cable, with a grey sea part ("foreign ownership allowed"), a landing circle, and a blue land part ("majority-Thai licensee"), using the `domestic.split.*` wording.
- Map: moved the MCT label so it no longer sits on "Gulf of Thailand".
- Checked at laptop size and at phone size (375 px wide). On the phone, the map sits at the top, the text scrolls below it, the page doesn't scroll sideways, and the map follows the text sections.

**Skipped on purpose:** numbers counting up, and fade-ins for each section. The bars growing and the map changing already give enough movement for a sober page.

**State now:** step 4 of 5 is done. The page is complete on the laptop and not yet public.
**Next action:** step 5: publish to GitHub (needs A.'s go-ahead), then open the live link to prove it works.
**Waiting on / open questions:** A.'s go-ahead to publish.

## 15 October 2026 (fact-check fixes)

**What we did**
- The fact-check session checked every cable claim against TeleGeography's submarine cable map and NT's station list. Its notes are in the shared notes folder as `cable-landing-factcheck.md`.
- Applied its fixes, as A. approved:
  - The MCT line now reads "lands at Rayong; one of three cables reaching the EEC (with AAG and ADC at Sriracha)".
  - `cables.body` now says "9 of Thailand's 12 international cables land at Satun or Songkhla".
  - The map now shows AAG and ADC landing at Sriracha.
  - Added the TeleGeography landing pages and NT's station list to the sources.
- Facts kept for later:
  - Two older domestic sea cables (CSN, TDSCN) already link Songkhla and Sriracha, so the planned south-to-EEC route should be described as a new, high-capacity link, not the first link.
  - TeleGeography estimates TalayLink around 2027, which isn't an official date.

**State now:** step 3 of 5 done, with the fact-check fixes applied.
**Next action:** step 4: the hook bar chart, tidying the map labels (AAG and SJC2 labels sit close together), and checking at phone width.
**Waiting on / open questions:** none.

## 15 October 2026 (step 3: map changes with scrolling)

**What we did**
- Fixed the MCT line in both languages, as A. approved: "the only international cable landing in Rayong" (NT's ADC also lands at Sriracha, in the EEC).
- The map now builds up as the reader scrolls: opening section = empty map → data center clusters → landings and cables → the domestic leg highlighted (other cables fade back) → the map glides in to the Thai–Malaysian border to show Open DC. Legend lines appear along with their map layers.
- On phones the map now sits at the top of the screen, with the text scrolling below it (to be checked in step 4).
- A separate session ([verify-cable-landing-fac]) was started to fact-check which cables land where.

**Checked:** in the preview, each text section switched the map to the right step. The zoomed border view draws correctly. The glide animation itself couldn't be watched, because the hidden preview pane pauses animations, so A. should scroll through it once.

**State now:** step 3 of 5 is done.
**Next action:** step 4: the hook bar chart, tidying the map labels, and checking at phone width.
**Waiting on / open questions:** the fact-check session's findings. At close zoom the coastline is a bit coarse (the map data is a medium-detail world map).

## 15 October 2026 (step 2: map)

**What we did**
- Built the map: a real outline of Thailand and its neighbours (public map data, drawn with the D3 tool). It shows data center clusters (Bangkok, EEC), cable landings (Satun, Songkhla, Rayong, Sriracha), the international cables (solid = live, dashed = planned or approved), and the domestic leg in blue, the only highlight colour. Open DC is shown in grey just over the Malaysian border. Labels switch language with the page.
- Added six map labels to `script.md` (Sriracha, Andaman Sea, Gulf of Thailand, Malaysia, and two legend lines).
- Cable paths at sea are a sketch: where they land is accurate, but their route out to sea is not.

**Found a factual problem:** `cables.list.mct` says MCT is "the only international cable landing in the EEC (Rayong)". The working draft shows NT's ADC cable lands at Sriracha (Chonburi), which is also in the EEC. Suggested fix: "the only international cable landing in Rayong". Waiting on A.

**State now:** step 2 of 5 is done. The map shows everything at once; it doesn't change with scrolling yet.
**Next action:** step 3, the map changing step by step as the reader scrolls.
**Waiting on / open questions:** A.'s decision on the MCT wording. Small label overlap near "Gulf of Thailand" / "MCT" to tidy up in step 4.

## 15 October 2026 (later)

**What we did**
- A. edited `script.md` and fixed the three flagged spots. Chose the sober style and IBM Plex Sans / IBM Plex Sans Thai fonts.
- Agreed folder layout: `ep01-data-centers/` (page + script), `index.html` (episode list), `source/` (working notes, kept off GitHub).
- Build step 1 done: the page reads all its wording from `script.md` when it opens. It opens in Thai, has a switch to English, and `?lang=en` opens it straight in English. Checked in the preview browser: every text block filled, switch works, 30 sources listed as links.
- Added a sources list block to the end of `script.md`, editable like the rest.
- Added `.nojekyll` (tells GitHub to serve script.md as a plain file) and `.claude/launch.json` (local preview: `python -m http.server`).

**State now:** step 1 of 5 is done. The map area is a placeholder.
**Next action:** step 2, the map of Thailand with landings and data center clusters.
**Waiting on / open questions:** nothing. Before publishing (step 5), add `source/` and `.claude/` to the files GitHub ignores.

## 15 October 2026

**What we did**
- Read the source material (`conversation-export.md`, `working-draft.md`).
- Agreed on direction: a public web page hosted on GitHub Pages, for NBTC executives and other interested readers. Each episode can have its own design (no fixed template).
- Visual approach: a single map of Thailand that changes as the reader scrolls (data center clusters → cables landing in the south → the highlighted south-to-EEC route → the Thai–Malaysian border), plus a bar chart for the hook, three case-study cards and a plain takeaway box.
- Showed a sober vs flashy style preview so A. can choose the look.
- Checked the unconfirmed claims. Rule from A.: give the latest update found, and drop any claim that has no evidence.
  - TalayLink: NBTC approved the landing in April 2026; no service date published. The "online in 2026" claim was dropped.
  - Satun–Hatyai–Songkhla–Rayong link: latest is the September 2024 MoU; no public progress since.
  - Which licence type covers landing stations: no evidence found, so the claim was dropped. The page relies only on the sourced rule that own-network licensees need under 50% foreign shareholding.
  - Distance from south to EEC: no source, so it was removed.
- Wrote `script.md`: all page wording in English and Thai, for A. to edit. The Thai is a rough draft.

**Decisions and why**
- The page is bilingual with a language switch rather than both languages side by side, so each layout only has to fit one language.
- A. writes the final Thai, and the page uses A.'s edited text as is.

**State now:** the wording file is drafted and waiting for A.'s edits. No page has been built yet.
**Next action:** A. edits `script.md` and picks the style (sober or flashy) and the fonts. Then we agree on the folder layout (Phase 3) before building.
**Waiting on / open questions:** the style choice; the font choice (IBM Plex or Sarabun); which language the page opens in by default.
