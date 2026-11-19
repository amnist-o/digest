# Page script — Spectrum Harmonization

How to edit this file:

- Every piece of text on the page is a block that starts with `##` and a short name, such as `## cover.title`. **Don't change the names**, because the page uses them to find the text.
- Under each name, edit the lines after `EN:` and `TH:`. A block can run over several lines; the text continues until the next `EN:`, `TH:` or `##`.
- **Write each section from its main ideas, in short statements.** Write the Thai from the meaning, as one NBTC colleague would explain it to another; it does not have to mirror the English sentence by sentence.
- Lines starting with `>` are notes for you (where the text appears and how long it can be). They never appear on the page.
- Numbers are written as Arabic numerals in both languages, so they match when the reader switches language. Years of conferences stay as Western years (WRC-2000, 1987); only the publication date on the cover uses the Buddhist era in Thai.
- To keep a word or name from being split across two lines, put `~` between its parts, for example `ย่าน~ความถี่`.
- Facts come only from the GSMA Mobile Spectrum Report 2026. If you change a sentence, keep to what the report says. Where the report contradicts itself, the page uses the wording as printed (see the `notes.source` blocks). The only text that is ours, not the report's, is the glossary's plain explanations of terms.
- No headings phrased as questions. No 3GPP band codes (n71, b28 ...) except in the index table's 3GPP column. English spelling: harmonise.
- Two levels, two sets of verbs. ITU / WRC level: countries agree, harmonise, or identify a band for IMT (Thai: ระบุ, with who first: "ทั่วโลกระบุให้ย่าน 26 GHz ใช้งานสำหรับ IMT", "บางประเทศระบุให้ย่านนี้ใช้งานสำหรับ IMT"). National level (NBTC and other regulators): assign = จัดสรร, license = ออกใบอนุญาต. Never use จัดสรร or ออกใบอนุญาต for an ITU / WRC step.
- Thai term choices: spectrum = คลื่นความถี่; band = ย่านความถี่ (short: ย่าน); band plan = แผนคลื่น. Keep these in English inside the Thai: Harmonize, coverage, capacity, refarm, roadmap, Ecosystem, ITU Region, FDD, TDD, SDL, uplink, downlink, mmWave, IMT, WRC, GSM, and 5G, MHz, GHz, ITU, 3GPP. Do not use: ประสาน (for harmonise), ความจุ, ความครอบคลุม, ระบบนิเวศ, แผนย่านความถี่, แผนที่นำทาง, เชิงอรรถ, บทบัญญัติ.
- Glossary entries are written "term: meaning" in each language; keep the term part short.
- Placeholders in curly braces, such as `{n}`, are filled in by the page. Keep them.

---

# 0. Interface

## ui.toggle
> Language button. Shows the OTHER language. Max ~10 characters.
EN: ภาษาไทย
TH: English

## ui.next
> Button label and tooltip. Max ~20 characters.
EN: Next
TH: ถัดไป

## ui.prev
EN: Previous
TH: ก่อนหน้า

## ui.home
> Tooltip on the left end of the docked spectrum bar.
EN: Back to the cover
TH: กลับหน้าแรก

## ui.cue
> Small cue at the bottom of the cover. Max ~40 characters.
EN: Scroll or use the arrow keys
TH: เลื่อนหรือใช้ปุ่มลูกศร

## ui.step
> Step counter. {n} is the current view, {total} the number of views.
EN: {n} of {total}
TH: {n} จาก {total}

## ui.networks
> Label under the first big figure on a band card. Max ~24 characters.
EN: Live networks
TH: เครือข่ายที่ให้บริการ

## ui.devices
> Label under the second big figure. Max ~24 characters.
EN: Devices in the ecosystem
TH: อุปกรณ์ใน Ecosystem

## ui.deviceUnit
> New block: unit word shown after a device number. The page shows it in Thai only (ชิ้น); the EN value is a placeholder and is not displayed.
EN: devices
TH: ชิ้น

## ui.noNetworks
> Printed in place of a big "0". Max ~24 characters.
EN: No live networks
TH: ไม่มีเครือข่ายที่ให้บริการ

## ui.noFigure
> Printed when the report gives no number. Max ~30 characters.
EN: No figure in the report
TH: ไม่ระบุตัวเลขในรายงาน

## ui.wavelength
> Chip on a band card. Max ~16 characters.
EN: Wavelength
TH: ความยาวคลื่น

## ui.derived
> Small tag next to a calculated value. Max ~24 characters.
EN: our calculation
TH: คำนวณเอง

## ui.uplink
> Band-plan diagram legend. Max ~16 characters.
EN: Uplink
TH: Uplink

## ui.downlink
EN: Downlink
TH: Downlink

## ui.tdd
> TDD = one block shared by uplink and downlink, which take turns. Max ~24 characters.
EN: TDD (one shared block)
TH: TDD (ช่วงเดียว สลับรับส่ง)

## ui.sdl
> SDL = supplemental downlink, an extra block for downlink only.
EN: SDL (downlink only)
TH: SDL (downlink อย่างเดียว)

## ui.gapShort
> Label on a very wide empty gap that the band chart draws shortened (not to scale). If it does not fit, the chart shows only the mark ≈.
EN: Gap (not to scale)
TH: ช่องว่าง (ไม่ตามสัดส่วน)

## ui.gap
> Label on the empty space between uplink and downlink blocks.
EN: Gap between the blocks
TH: ช่องว่างระหว่าง 2 ช่วง

## ui.overview
> Small heading of the four text sections on a band page.
EN: Overview
TH: ภาพรวม

## ui.harmonisation
EN: Harmonisation
TH: การ Harmonize

## ui.ecosystem
EN: Networks and ecosystem
TH: เครือข่ายและ Ecosystem

## ui.future
EN: Future development
TH: แนวโน้มในอนาคต

## ui.where
> Heading above the list next to the map. Every band page now uses its own map.<page>.title, so this shows only if the map cannot be drawn, and in the screen-reader label.
EN: By area
TH: แยกตามพื้นที่

## ui.when
> Heading above the conference timeline.
EN: Timeline
TH: ไทม์ไลน์

## ui.legend.use
> Map legend: the three levels, from strongest to lightest. Keep each under ~28 characters.
> Solid colour: the report says live networks use the band here.
EN: Live networks use it here
TH: มีเครือข่ายให้บริการแล้ว

## ui.legend.plan
> Striped: the report says a national regulator has assigned, licensed or auctioned the band here, or that it is being developed or on a national roadmap, but not that networks use it yet.
EN: Licensed or on a roadmap
TH: ออกใบอนุญาตแล้ว หรืออยู่ใน roadmap

## ui.legend.identified
> Light tint: countries here have stated the band can be used for IMT, at a WRC (identified for IMT) or through a regional group. An agreement only: no spectrum is assigned or licensed by this step.
EN: Declared usable for IMT
TH: ระบุว่าใช้กับ IMT ได้

## ui.legend.note
> Small print under the list of places. Says which outlines are exact and which are approximate.
EN: ITU Region borders are exact (Thailand is in Region 3). Areas such as EMEA or APAC are approximate, as the report does not list their countries.
TH: เส้นแบ่ง ITU Region เป็นเส้นจริงตาม ITU (ไทยอยู่ใน Region 3) ส่วนพื้นที่อย่าง EMEA หรือ APAC วาดโดยประมาณ เพราะรายงานไม่ได้บอกว่ามีประเทศใดบ้าง

## ui.legend.global
> Caption on the map when the whole world is tinted (the band is identified or harmonised for IMT in all three ITU Regions). Max ~28 characters.
EN: Identified for IMT worldwide
TH: ทั่วโลกระบุให้ย่านนี้ใช้งาน IMT

## ui.legend.partial
> Map legend for a dashed outline: the report says only "parts of" or "some countries in" this region. Max ~36 characters.
EN: Only some countries here (not named)
TH: เฉพาะบางประเทศ (รายงานไม่ระบุชื่อ)

## ui.approx
> Short tag on map areas that the report does not define precisely.
EN: approximate area
TH: พื้นที่โดยประมาณ

## ui.loadError
> Shown if the data file cannot be loaded.
EN: The data could not be loaded. Please reload the page.
TH: ไม่สามารถโหลดข้อมูลได้ กรุณาโหลดหน้านี้ใหม่

---

# 1. Cover

## cover.kicker
> Small line above the title.
EN: Visual digest of the GSMA Mobile Spectrum Report 2026
TH: สื่อย่อความรายงาน GSMA Mobile Spectrum Report 2026

## cover.title
> The main title, very large. Short.
EN: Spectrum Harmonization
TH: Spectrum Harmonization

## cover.subtitle
> One line under the title.
EN: What aligning mobile bands across countries brings, and where each band stands today
TH: ความสำคัญของการ Harmonize คลื่นมือถือระหว่างประเทศ และสถานะของแต่ละย่านในปัจจุบัน

## cover.source
> Source line at the foot of the cover.
EN: Source: GSMA, Mobile Spectrum Report, 2026 Edition
TH: ที่มา: GSMA, Mobile Spectrum Report, 2026 Edition

## cover.date
EN: October 2026
TH: ตุลาคม 2569

---

# 2. The spectrum

## spectrum.gap
> Label on the marked break in the axis, between the mid and high rulers. Max ~40 characters.
EN: 7-8 GHz (and 4.5 GHz): next space for mobile
TH: 7-8 GHz (และ 4.5 GHz): พื้นที่ถัดไปของมือถือ

## spectrum.scaleNote
> Small caption under the axis. Max ~100 characters.
EN: Not to scale: three rulers (low, mid, high) joined end to end.
TH: ไม่ได้ตามสัดส่วนจริง: ไม้บรรทัด 3 ช่วง (ต่ำ กลาง สูง) ต่อกัน

## spectrum.wavelengthNote
> Caption under the wavelength ticks.
EN: Wavelength, calculated, not from the report
TH: ความยาวคลื่นจากการคำนวณ

---

# 3. Why harmonise

## why.title
> Headline of the view.
EN: What harmonisation brings
TH: ประโยชน์ของการ Harmonize คลื่นความถี่
 
## why.lede
> One or two lines under the headline: what harmonisation is.
EN: Harmonisation means countries using mobile bands in the same way, agreed regionally or by identifying bands for IMT in the ITU's Radio Regulations. It has been the launchpad for mobile technologies from GSM to the coming 6G.
TH: การ Harmonize คือการที่หลายประเทศใช้ย่านความถี่มือถือแบบเดียวกัน โดยตกลงกันในระดับภูมิภาค หรือระบุให้ย่านนั้นใช้งานสำหรับ IMT ในข้อบังคับวิทยุ (Radio Regulations) ของ ITU ที่ผ่านมาการ Harmonize เป็นจุดเริ่มต้นของเทคโนโลยีมือถือ ตั้งแต่ GSM จนถึง 6G ที่กำลังจะมาถึง

## why.p1.title
> Short heading. Max ~30 characters.
EN: Scale lowers cost
TH: ตลาดใหญ่ช่วยลดต้นทุน

## why.p1.body
> Max ~35 words.
EN: When markets use bands the same way, the market grows. Costs fall, more devices and networks become available, and mobile connectivity becomes more accessible.
TH: เมื่อหลายตลาดใช้ย่านความถี่แบบเดียวกัน ตลาดก็ใหญ่ขึ้น ต้นทุนลดลง มีอุปกรณ์และเครือข่ายมากขึ้น และการเชื่อมต่อมือถือเข้าถึงได้ง่ายขึ้น

## why.p2.title
EN: Confidence to invest
TH: ความมั่นใจในการลงทุน

## why.p2.body
EN: Technology developers and manufacturers invest and innovate when they are confident of reaching larger markets.
TH: ผู้พัฒนาเทคโนโลยีและผู้ผลิตอุปกรณ์กล้าลงทุนและสร้างนวัตกรรม เมื่อมั่นใจว่าจะเข้าถึงตลาดที่ใหญ่ขึ้นได้

## why.p3.title
EN: A shared framework
TH: กรอบร่วมกัน

## why.p3.body
EN: Harmonisation does not mean every country uses the same spectrum. It is a shared framework for global scale, and each country still assigns its own spectrum to meet local needs.
TH: การ Harmonize ไม่ได้หมายความว่าทุกประเทศต้องใช้คลื่นความถี่ชุดเดียวกัน แต่เป็นกรอบร่วมที่ช่วยให้ได้ประโยชน์จากขนาดตลาดโลก โดยแต่ละประเทศยังจัดสรรคลื่นความถี่เองตามความต้องการในประเทศ

## why.figure.caption
> Caption under the figure of waves sliding into line. Max ~90 characters.
EN: Many separate uses, brought into one shared pattern.
TH: การใช้งานที่แตกต่างกัน ปรับให้อยู่ในรูปแบบเดียวกัน

## why.stat1.label
> Label under the first headline number (4.7 billion). Max ~50 characters. The infographic's wording (p6); see notes.source13.
EN: unique mobile subscribers worldwide
TH: ผู้ใช้บริการมือถือทั่วโลก (นับคนไม่ซ้ำ)

## why.stat1.value
> The headline number itself, as printed above the label.
EN: 4.7 billion
TH: 4.7 พันล้าน

## why.stat2.label
> Under "$11.3 trillion".
EN: contribution of mobile to global GDP by 2030 (8.4%)
TH: ผลต่อ GDP โลกจากมือถือภายในปี 2030 (8.4%)

## why.stat2.value
> The headline number itself, as printed above the label.
EN: $11.3 trillion
TH: 11.3 ล้าน⁠ล้าน⁠ดอลลาร์สหรัฐ

## why.stat3.label
> Under "57%".
EN: of mobile connections forecast to be on 5G by 2030
TH: ของการเชื่อมต่อมือถือ คาดว่าจะเป็น 5G ภายในปี 2030

## why.stat3.value
> The headline number itself, as printed above the label.
EN: 57%
TH: 57%

## why.stat4.key
> Which figure from bands.json "stats" this slot shows. Not shown on the page. The 80% upper-6 GHz figure is no longer among the "why" figures; it appears in "What comes next" (next.f2) and on the 6 GHz page.
EN: popConnected
TH: popConnected

## why.stat4.label
> Under "59%". The report's infographic label (p6), "Global population: Connected".
EN: of the world's population is connected
TH: ของประชากรโลกเชื่อมต่อแล้ว

## why.stat4.value
> The headline number itself, as printed above the label.
EN: 59%
TH: 59%

## why.stat5.key
> New slot. Not shown on the page.
EN: popUsageGap
TH: popUsageGap

## why.stat5.label
> Under "38%". The report's label (p6) is "Part of usage gap"; the report does not explain the term, so neither does the page.
EN: of the world's population is in the usage gap
TH: ของประชากรโลกอยู่ใน usage gap

## why.stat5.value
EN: 38%
TH: 38%

## why.stat6.key
> New slot. Not shown on the page.
EN: popCoverageGap
TH: popCoverageGap

## why.stat6.label
> Under "3%". The report's label (p6) is "In coverage gap"; not explained in the report.
EN: of the world's population is in the coverage gap
TH: ของประชากรโลกอยู่ใน coverage gap

## why.stat6.value
EN: 3%
TH: 3%

---

# 4. Low, mid and high

## kinds.title
EN: Low, mid and high bands
TH: คลื่นความถี่ย่านต่ำ กลาง และสูง

## kinds.lede
EN: Where a band sits in frequency decides what it is good for.
TH: ตำแหน่งของย่านความถี่เป็นตัวกำหนดว่าเหมาะกับการใช้งานแบบใด

## kinds.low.name
> Panel name. Max ~20 characters.
EN: Low bands
TH: ย่านความถี่ต่ำ

## kinds.low.role
> One or two words, also under the cover spectrum.
EN: Coverage
TH: Coverage

## kinds.low.body
> Two lines.
EN: Below 1 GHz, signals travel far and get into buildings. Low bands give coverage in thinly populated areas and indoors in built-up areas.
TH: สัญญาณย่านต่ำกว่า 1 GHz เดินทางได้ไกลและเข้าอาคารได้ดี ย่านต่ำจึงให้ coverage ในพื้นที่ประชากรเบาบาง และภายในอาคารในเขตเมือง

## kinds.low.fact
> One figure from the report (p6). Max ~100 characters.
EN: An extra 50 MHz below 1 GHz is linked to +7 percentage points of 4G coverage and +11 of 5G.
TH: คลื่นต่ำกว่า 1 GHz เพิ่ม 50 MHz สัมพันธ์กับ coverage 4G เพิ่ม 7 จุดร้อยละ และ 5G เพิ่ม 11 จุดร้อยละ

## kinds.mid.name
EN: Mid-bands
TH: ย่านความถี่กลาง

## kinds.mid.role
EN: City-wide capacity
TH: Capacity ทั่วเมือง

## kinds.mid.body
EN: Mid-bands give city-wide capacity: fast, reliable connections in dense cities for consumers and businesses, from mobile broadband to IoT and smart cities.
TH: ย่านกลางให้ capacity ทั่วทั้งเมือง เชื่อมต่อได้เร็วและเสถียรในเมืองที่มีประชากรหนาแน่น ทั้งสำหรับผู้บริโภคและภาคธุรกิจ ตั้งแต่อินเทอร์เน็ตมือถือไปจนถึง IoT และเมืองอัจฉริยะ

## kinds.mid.fact
EN: If mid-band spectrum stays at today's levels, cities holding over 50% of the world's urban population will be short of capacity by 2030.
TH: หากคลื่นย่านกลางยังเท่าปัจจุบัน กลุ่มเมืองที่มีประชากรรวมกันเกิน 50% ของประชากรเขตเมืองทั่วโลกจะมี capacity ไม่พอภายในปี 2030

## kinds.high.name
EN: High bands
TH: ย่านความถี่สูง

## kinds.high.role
EN: Hotspots
TH: Capacity เฉพาะจุด

## kinds.high.body
EN: High bands, also called mmWave, give very high capacity in hotspots: stadiums, logistics hubs, busy city centres, and fixed wireless access in dense cities.
TH: ย่านสูงหรือ mmWave ให้ capacity สูงมากในจุดที่คนหนาแน่น เช่น สนามกีฬา ศูนย์โลจิสติกส์ ใจกลางเมือง และอินเทอร์เน็ตไร้สายแบบประจำที่ (FWA) ในเมืองหนาแน่น

## kinds.high.fact
EN: To date, operators have been cautious about mmWave but are starting to consider wider use.
TH: ที่ผ่านมาผู้ให้บริการยังระมัดระวังเรื่อง mmWave แต่เริ่มพิจารณาใช้งานในวงกว้างขึ้น

---

# 5. Band pages

> Each band page has six blocks: title, lede, overview, harmonisation, ecosystem, future. Each of the four text sections is limited to 45 English words so the page fits one screen. The two big figures (networks and devices) are shown by the page itself, so the ecosystem text adds what the report says around them.

## page.600-mhz.title
> The band name as the report prints it.
EN: 600 MHz
TH: 600 MHz

## page.600-mhz.lede
> One line, max 16 words: what the band is for.
EN: Wide-area coverage with fewer base stations, plus extra capacity on existing low bands.
TH: Coverage พื้นที่กว้างด้วยสถานีฐานที่น้อยลง และเพิ่ม capacity ให้ย่านความถี่ต่ำที่มีอยู่

## page.600-mhz.overview
EN: Used for 5G now, and to be developed for 6G. It covers wide areas with fewer base stations and adds 35-50% capacity on top of existing low bands. It also supports IoT.
TH: ย่าน 600 MHz ใช้กับ 5G และจะพัฒนาต่อไปสู่ 6G ครอบคลุมพื้นที่กว้างด้วยสถานีฐานที่น้อยลง และเพิ่ม capacity อีก 35-50% จากย่านความถี่ต่ำที่มีอยู่ นอกจากนี้ยังรองรับ IoT ด้วย

## page.600-mhz.harmonisation
EN: Harmonised region by region. At WRC-15, some countries in Regions 2 and 3 identified it for IMT, and more have joined since. At WRC-23, some countries in Region 1 followed. It may be discussed again at WRC-31.
TH: ย่านนี้ Harmonize ทีละภูมิภาค ใน WRC-15 บางประเทศใน Region 2 และ 3 ระบุให้ย่านนี้ใช้งานสำหรับ IMT และมีประเทศทยอยเข้าร่วมเพิ่ม ใน WRC-23 บางประเทศใน Region 1 ระบุตาม และอาจมีการหารือเพิ่มเติมใน WRC-31

## page.600-mhz.ecosystem
EN: Two band plans. The first is assigned and in use in regions including North America, the Caribbean and the Middle East; the device figure counts this plan only. A newer plan, adding 2 x 5 MHz, is being developed, particularly in Asia-Pacific.
TH: ย่านนี้มีแผนคลื่น 2 แบบ แบบแรกได้รับการจัดสรรและใช้งานแล้วในภูมิภาคต่าง ๆ รวมถึงอเมริกาเหนือ แคริบเบียน และตะวันออกกลาง ตัวเลขอุปกรณ์นับเฉพาะแผนคลื่นนี้ ส่วนแผนคลื่นใหม่ซึ่งเพิ่มคลื่นอีก 2 x 5 MHz กำลังพัฒนา โดยเฉพาะในเอเชียแปซิฟิก

## page.600-mhz.future
EN: Expected to spread worldwide as the next way to add capacity where networks rely on low bands. More countries can still identify it for IMT. The newer plan may be used in some of the world's most populous countries.
TH: คาดว่าจะขยายไปทั่วโลก เป็นทางเลือกถัดไปในการเพิ่ม capacity ในพื้นที่ที่พึ่งพาย่านความถี่ต่ำ ประเทศอื่น ๆ ยังสามารถระบุให้ย่านนี้ใช้งานสำหรับ IMT เพิ่มได้ และแผนคลื่นใหม่อาจถูกใช้ในบางประเทศที่มีประชากรมากที่สุดของโลก

## page.700-mhz.title
EN: 700 MHz
TH: 700 MHz

## page.700-mhz.lede
EN: Wide coverage for 4G and 5G, and extra capacity in rural areas.
TH: Coverage กว้างสำหรับ 4G และ 5G และเพิ่ม capacity ในเขตชนบท

## page.700-mhz.overview
EN: 700 MHz gives wide coverage. It carries both 4G and 5G. It is harmonised for IMT in all three ITU Regions. Today it is used worldwide to add capacity in rural areas.
TH: ย่าน 700 MHz เป็นย่านที่มี coverage สูง สามารถใช้งานได้ทั้ง 4G และ 5G ย่านนี้ Harmonize แล้วในทั้ง 3 ITU Region ในปัจจุบันย่าน 700 MHz ถูกใช้งานเพื่อเพิ่ม capacity ในเขตชนบททั่วโลก

## page.700-mhz.harmonisation
EN: Asia-Pacific and Latin America use the whole band: 2 x 45 MHz. Region 1 (EMEA) uses 60 MHz FDD and 20 MHz SDL (downlink only); part also serves some NB-IoT applications. The US and Canada divide 70 MHz into three parts, plus 10 MHz SDL. Harmonised region by region, completed at WRC-15.
TH: เอเชียแปซิฟิกและละตินอเมริกาใช้ทั้งย่าน คือ 2 x 45 MHz เพื่อทำ coverage ทั้ง 4G และ 5G ส่วน ITU Region 1 (EMEA) ใช้ 60 MHz แบบ FDD และอีก 20 MHz เป็น SDL ที่ใช้ downlink อย่างเดียว และยังใช้บางส่วนของย่านกับงาน NB-IoT บางประเภทด้วย สหรัฐฯ และแคนาดาแบ่ง 70 MHz ออกเป็น 3 ส่วน และอีก 10 MHz เป็น SDL ย่านนี้ Harmonize ทีละภูมิภาค และครบทุกภูมิภาคใน WRC-15

## page.700-mhz.ecosystem
EN: Most live networks run 4G (around 170); around 90 run 5G.
TH: เครือข่ายส่วนใหญ่ยังเป็น 4G (ราว 170 เครือข่าย) และเป็น 5G ราว 90 เครือข่าย

## page.700-mhz.future
EN: Expected to be refarmed for 6G (moved to the new technology). Countries that have not yet assigned the band to operators can put it on their spectrum roadmap.
TH: ในอนาคตคาดว่าจะ refarm ไปใช้กับ 6G คือนำคลื่นเดิมไปใช้กับเทคโนโลยีใหม่ ประเทศที่ยังไม่ได้จัดสรรย่านนี้ให้ผู้ให้บริการ สามารถใส่ไว้ใน roadmap คลื่นความถี่ของประเทศได้

## page.800-mhz.title
EN: 800 MHz
TH: 800 MHz

## page.800-mhz.lede
EN: The original digital dividend band in Region 1, widely assigned across EMEA.
TH: ย่านแรกของ Region 1 จากคลื่นความถี่เหลือใช้จากการเปลี่ยนผ่านสู่ทีวีระบบดิจิทัล จัดสรรอย่างแพร่หลายทั่ว EMEA

## page.800-mhz.overview
EN: The original "digital dividend" band in Region 1. It has carried technologies up to 5G. It is widely assigned across EMEA.
TH: ย่าน 800 MHz เป็นย่านแรกของ Region 1 ที่มาจากคลื่นความถี่เหลือใช้จากการเปลี่ยนผ่านสู่ทีวีระบบดิจิทัล (digital dividend) รองรับเทคโนโลยีหลายรุ่นจนถึง 5G และมีการจัดสรรอย่างแพร่หลายทั่ว EMEA

## page.800-mhz.harmonisation
EN: At WRC-07, Region 1 identified 790-862 MHz for IMT for the first time. Use then spread quickly across EMEA for 4G launches.
TH: ใน WRC-07 Region 1 ระบุให้ย่าน 790-862 MHz ใช้งานสำหรับ IMT เป็นครั้งแรก หลังจากนั้นการใช้งานขยายอย่างรวดเร็วทั่ว EMEA เพื่อเปิดให้บริการ 4G

## page.800-mhz.ecosystem
EN: Use is saturated in the EMEA markets that can use the band, and today it is almost entirely 4G.
TH: การใช้งานในตลาด EMEA ที่ใช้ย่านนี้ได้อิ่มตัวแล้ว และปัจจุบันเกือบทั้งหมดเป็น 4G

## page.800-mhz.future
EN: Some 5G networks already exist, and the band will be refarmed for new technologies.
TH: มีเครือข่าย 5G อยู่บ้างแล้ว และในอนาคตย่านนี้จะถูก refarm ไปใช้กับเทคโนโลยีใหม่

## page.850-mhz.title
EN: 850 MHz
TH: 850 MHz

## page.850-mhz.lede
EN: The first cellular band across the Americas and parts of Asia-Pacific.
TH: ย่านเซลลูลาร์แรกของทวีปอเมริกาและบางส่วนของเอเชียแปซิฟิก

## page.850-mhz.overview
EN: The first cellular band throughout the Americas and in parts of Asia-Pacific. It has carried technologies up to 5G.
TH: ย่าน 850 MHz เป็นย่านเซลลูลาร์แรกที่ใช้ทั่วทวีปอเมริกาและบางส่วนของเอเชียแปซิฟิก รองรับเทคโนโลยีหลายรุ่นจนถึง 5G

## page.850-mhz.harmonisation
EN: At WRC-2000, the 806-960 MHz range, which includes 850 MHz, was identified for IMT worldwide. That laid the basis for harmonising the band internationally for 3G.
TH: ใน WRC-2000 ทั่วโลกระบุให้ช่วง 806-960 MHz ซึ่งรวมย่าน 850 MHz ใช้งานสำหรับ IMT จึงเป็นรากฐานของการ Harmonize ย่านนี้ระหว่างประเทศสำหรับ 3G

## page.850-mhz.ecosystem
EN: About 157 live networks, using technologies from 2G to 5G.
TH: มีเครือข่ายให้บริการราว 157 เครือข่าย ใช้เทคโนโลยีตั้งแต่ 2G ถึง 5G

## page.850-mhz.future
EN: Not yet widely used for 5G, although some 5G networks exist.
TH: ยังไม่ได้ใช้กับ 5G อย่างแพร่หลาย แม้จะมีเครือข่าย 5G อยู่บ้างแล้ว

## page.900-mhz.title
EN: 900 MHz
TH: 900 MHz

## page.900-mhz.lede
EN: The original GSM band, and still the most widely used mobile band today.
TH: ย่านดั้งเดิมของ GSM และยังเป็นย่านมือถือที่ใช้งานแพร่หลายที่สุดในปัจจุบัน

## page.900-mhz.overview
EN: The original GSM band. It is used in ITU Regions 1 and 3 and in Latin America. It has carried every technology up to 5G. In Regions 2 and 3, some countries mix 900 MHz and 850 MHz assignments.
TH: ย่าน 900 MHz เป็นย่านดั้งเดิมของ GSM มีการใช้งานใน ITU Region 1 และ 3 และในละตินอเมริกา รองรับเทคโนโลยีมาแล้วทุกรุ่นจนถึง 5G ใน Region 2 และ 3 บางประเทศจัดสรรย่าน 900 MHz และ 850 MHz ปนกัน

## page.900-mhz.harmonisation
EN: Some European countries harmonised it for GSM in 1987, making it the first mobile band harmonised between countries. At WRC-2000 it was harmonised for IMT (3G and beyond).
TH: ปี 1987 บางประเทศในยุโรป Harmonize ย่านนี้สำหรับ GSM ทำให้เป็นย่านมือถือแรกที่ Harmonize ระหว่างประเทศ ต่อมาใน WRC-2000 ย่านนี้ได้รับการ Harmonize สำหรับ IMT (3G ขึ้นไป)

## page.900-mhz.ecosystem
EN: Still the most widely used mobile band, with about 647 live networks, carrying all technologies. Many operators also use it for 4G.
TH: ยังเป็นย่านมือถือที่ใช้งานแพร่หลายที่สุด มีเครือข่ายให้บริการราว 647 เครือข่าย รองรับทุกเทคโนโลยี และผู้ให้บริการจำนวนมากใช้กับ 4G ด้วย

## page.900-mhz.future
EN: Often still tied to older generations, mostly giving coverage for 2G and 3G. Used for 5G in some cases.
TH: มักยังผูกอยู่กับเทคโนโลยีรุ่นเก่า โดยใช้ทำ coverage ให้ 2G และ 3G และมีใช้กับ 5G ในบางกรณี

## page.1500-mhz.title
EN: 1500 MHz
TH: 1500 MHz

## page.1500-mhz.lede
EN: A mid-band with wide-area coverage, used three ways: FDD, SDL and TDD.
TH: ย่านกลางที่ให้ coverage พื้นที่กว้าง ใช้ได้ 3 แบบ คือ FDD, SDL และ TDD

## page.1500-mhz.overview
EN: 1500 MHz has three band plans: FDD, SDL and TDD. It gives wide-area coverage. Although above 1 GHz, its signals travel better than those of any other mid-band identified for mobile.
TH: ย่าน 1500 MHz มีแผนคลื่น 3 แบบ คือ FDD, SDL และ TDD ให้ coverage พื้นที่กว้าง แม้จะอยู่สูงกว่า 1 GHz แต่สัญญาณเดินทางได้ดีที่สุดในบรรดาย่านกลางที่ระบุสำหรับมือถือ

## page.1500-mhz.harmonisation
EN: Harmonised at WRC-15; Japan was already using it with FDD. It is harmonised in Regions 2 and 3, but only in parts in Region 1. Beyond the WRC, the Arab Spectrum Management Group harmonised it for TDD, and Europe for SDL.
TH: ย่านนี้ Harmonize ใน WRC-15 ขณะที่ญี่ปุ่นใช้งานแบบ FDD อยู่ก่อนแล้ว ใน Region 2 และ 3 มีการ Harmonize ส่วน Region 1 Harmonize เพียงบางส่วน นอกจาก WRC แล้ว กลุ่ม Arab Spectrum Management Group ยัง Harmonize ย่านนี้สำหรับ TDD และยุโรป Harmonize สำหรับ SDL

## page.1500-mhz.ecosystem
EN: About 11 live networks. Japan uses it for 4G with FDD, Europe for 4G with SDL. SDL networks are starting to use 5G products.
TH: มีเครือข่ายให้บริการราว 11 เครือข่าย ญี่ปุ่นใช้กับ 4G แบบ FDD ยุโรปใช้กับ 4G แบบ SDL และเครือข่าย SDL เริ่มใช้อุปกรณ์ 5G แล้ว

## page.1500-mhz.future
EN: Its future is 5G. TDD development is expected in the next year in the Arab world and other countries; Indonesia has auctioned the band for TDD. India and Brazil have it on their roadmap.
TH: อนาคตของย่านนี้คือ 5G คาดว่าจะมีการพัฒนาแบบ TDD ภายในปีหน้า ทั้งในโลกอาหรับและประเทศอื่น โดยอินโดนีเซียประมูลย่านนี้สำหรับ TDD แล้ว ส่วนอินเดียและบราซิลมีย่านนี้อยู่ใน roadmap

## page.1800-mhz.title
EN: 1800 MHz
TH: 1800 MHz

## page.1800-mhz.lede
EN: A mid-band used throughout the world, moving from GSM to 4G and 5G.
TH: ย่านกลางที่ใช้งานทั่วโลก และกำลังเปลี่ยนจาก GSM ไปใช้กับ 4G และ 5G

## page.1800-mhz.overview
EN: 1800 MHz is used throughout the world. Today it carries 5G as well as earlier technologies such as 4G. Its large block of spectrum added capacity compared with the original 900 MHz GSM band.
TH: ย่าน 1800 MHz ใช้งานทั่วโลก ปัจจุบันใช้ทั้งกับ 5G และเทคโนโลยีรุ่นก่อน เช่น 4G และเป็นคลื่นช่วงใหญ่ต่อเนื่อง จึงเพิ่ม capacity ได้มากกว่าย่าน 900 MHz ของ GSM เดิม

## page.1800-mhz.harmonisation
EN: 1800 MHz was identified for IMT at WRC-2000. It lies in a range identified worldwide, together with 2.1 GHz. Band plans there form two groups, 1800 MHz / 2.1 GHz and AWS / PCS, each harmonised regionally, which cut costs and sped up rollout.
TH: ใน WRC-2000 มีการระบุให้ย่าน 1800 MHz ใช้งานสำหรับ IMT ย่านนี้อยู่ในช่วงความถี่ที่ทั่วโลกระบุไว้ ร่วมกับ 2.1 GHz แผนคลื่นในช่วงนี้แบ่งเป็น 2 กลุ่ม คือ 1800 MHz / 2.1 GHz และ AWS / PCS แต่ละกลุ่ม Harmonize ในระดับภูมิภาค ช่วยลดต้นทุนและเร่งการติดตั้งเครือข่าย

## page.1800-mhz.ecosystem
EN: About 773 live networks. Wide use and harmonisation give the band a large ecosystem of compatible devices, across generations.
TH: มีเครือข่ายให้บริการราว 773 เครือข่าย การใช้งานที่แพร่หลายและการ Harmonize ทำให้ย่านนี้มี Ecosystem อุปกรณ์ขนาดใหญ่ที่ครอบคลุมหลายยุค

## page.1800-mhz.future
EN: Stays important as operators refarm it from GSM to 4G and 5G. Its worldwide availability brings economies of scale, and its signals suit both coverage and capacity.
TH: ยังเป็นย่านสำคัญ เมื่อผู้ให้บริการ refarm จาก GSM ไปใช้กับ 4G และ 5G การที่ใช้งานได้ทั่วโลกช่วยให้ประหยัดจากขนาด และคุณสมบัติของสัญญาณเหมาะทั้งกับ coverage และ capacity

## page.2-1-ghz.title
EN: 2.1 GHz
TH: 2.1 GHz

## page.2-1-ghz.lede
EN: A worldwide mid-band, once the main 3G band, now being refarmed for 5G.
TH: ย่านกลางที่ใช้งานทั่วโลก เคยเป็นย่านหลักของ 3G และกำลังถูก refarm ไปใช้กับ 5G

## page.2-1-ghz.overview
EN: 2.1 GHz is widely used around the world. In the early 2000s it became the main 3G band in Europe, Asia and other regions. It balances wide-area coverage with reasonable capacity, which suits urban and suburban areas.
TH: ย่าน 2.1 GHz ใช้งานแพร่หลายทั่วโลก ช่วงต้นทศวรรษ 2000 เป็นย่านหลักของ 3G ในยุโรป เอเชีย และภูมิภาคอื่น ย่านนี้ให้ทั้ง coverage พื้นที่กว้างและ capacity ที่พอเหมาะ จึงเหมาะกับเขตเมืองและชานเมือง

## page.2-1-ghz.harmonisation
> The report says only "identified globally at WARC-92", not "for IMT".
EN: 2.1 GHz was identified worldwide at WARC-92. It sits in the same worldwide-identified range as 1800 MHz, and its band plan belongs to the 1800 MHz / 2.1 GHz group, harmonised regionally.
TH: ใน WARC-92 ทั่วโลกระบุย่าน 2.1 GHz ไว้แล้ว ย่านนี้อยู่ในช่วงความถี่เดียวกับ 1800 MHz ที่ทั่วโลกระบุไว้ และแผนคลื่นอยู่ในกลุ่ม 1800 MHz / 2.1 GHz ที่ Harmonize ในระดับภูมิภาค

## page.2-1-ghz.ecosystem
EN: About 545 live networks. Wide harmonisation has given it a large device ecosystem across generations and a smooth path from 3G to 4G and now 5G.
TH: มีเครือข่ายให้บริการราว 545 เครือข่าย การ Harmonize อย่างกว้างขวางทำให้มี Ecosystem อุปกรณ์ขนาดใหญ่ที่ครอบคลุมหลายยุค และพัฒนาจาก 3G สู่ 4G และ 5G ได้อย่างราบรื่น

## page.2-1-ghz.future
EN: Many countries with technology-neutral policies refarmed it for 4G, and it is now being refarmed for 5G in many markets. Protecting it from harmful interference, including from any new mobile satellite spectrum agreed at WRC-27, is a priority.
TH: หลายประเทศที่มีนโยบายเป็นกลางทางเทคโนโลยีได้ refarm ย่านนี้ไปใช้กับ 4G และปัจจุบันกำลัง refarm ไปใช้กับ 5G ในหลายตลาด สิ่งที่ต้องให้ความสำคัญคือการป้องกันการรบกวนจากกิจการอื่น รวมถึงกิจการดาวเทียมเคลื่อนที่ หาก WRC-27 ตกลงให้ใช้คลื่นเพิ่ม

## page.pcs.title
> The band name as the report prints it (p18).
EN: PCS (1900 MHz)
TH: PCS (1900 MHz)

## page.pcs.lede
EN: A core mobile band of the Americas, reused from 2G to 5G.
TH: ย่านหลักของบริการมือถือในทวีปอเมริกา ใช้มาตั้งแต่ 2G ถึง 5G

## page.pcs.overview
EN: PCS (Personal Communications Service) sits within 1900 MHz. It remains a core mobile band, mostly in the Americas and the Caribbean, reused for generations from 2G to 5G.
TH: PCS (Personal Communications Service) อยู่ในย่าน 1900 MHz และยังเป็นย่านหลักของบริการมือถือ ส่วนใหญ่ในทวีปอเมริกาและแคริบเบียน ใช้กับเทคโนโลยีหลายรุ่นตั้งแต่ 2G ถึง 5G

## page.pcs.harmonisation
EN: PCS was identified for IMT at WARC-1992 and WRC-2000, inside a range identified worldwide. Its band plan belongs to the AWS / PCS group, harmonised regionally. Technology-neutral policies let it move from 2G to 4G and now 5G.
TH: ใน WARC-1992 และ WRC-2000 มีการระบุให้ย่าน PCS ใช้งานสำหรับ IMT โดยอยู่ในช่วงความถี่ที่ทั่วโลกระบุไว้ แผนคลื่นของ PCS อยู่ในกลุ่ม AWS / PCS ที่ Harmonize ในระดับภูมิภาค นโยบายที่เป็นกลางทางเทคโนโลยีทำให้ย่านนี้พัฒนาจาก 2G สู่ 4G และ 5G ได้

## page.pcs.ecosystem
EN: About 167 live networks, mostly in the Americas and the Caribbean. It has strong device support.
TH: มีเครือข่ายให้บริการราว 167 เครือข่าย ส่วนใหญ่ในทวีปอเมริกาและแคริบเบียน และมีอุปกรณ์รองรับมาก

## page.pcs.future
EN: Its broad coverage and strong device support make it a cost-effective base for 5G and future technologies, giving both coverage and capacity in the mid-bands.
TH: ด้วย coverage ที่กว้างและอุปกรณ์รองรับจำนวนมาก PCS จึงเป็นฐานที่คุ้มค่าสำหรับ 5G และเทคโนโลยีในอนาคต โดยให้ทั้ง coverage และ capacity ในย่านกลาง

## page.aws.title
> The band name as the report prints it on its own page (p19); see notes.source14.
EN: AWS (1700/2100 MHz)
TH: AWS (1700/2100 MHz)

## page.aws.lede
EN: Extra capacity for the Americas, now being refarmed for 5G.
TH: ย่านที่เพิ่ม capacity ให้ทวีปอเมริกา และกำลังถูก refarm ไปใช้กับ 5G

## page.aws.overview
EN: AWS (Advanced Wireless Services) uses spectrum mainly at 1.7 and 2.1 GHz. It was introduced in the US and parts of the Americas to add capacity beyond the PCS and cellular bands. The most common setup pairs 1710-1755 MHz with 2110-2155 MHz.
TH: AWS (Advanced Wireless Services) ใช้คลื่นในช่วง 1.7 และ 2.1 GHz เป็นหลัก เริ่มใช้ในสหรัฐฯ และบางส่วนของทวีปอเมริกา เพื่อเพิ่ม capacity นอกเหนือจาก PCS และย่านเซลลูลาร์ แผนคลื่นที่ใช้กันมากที่สุดจับคู่ 1710-1755 MHz กับ 2110-2155 MHz

## page.aws.harmonisation
EN: AWS was identified for IMT at WARC-1992 and WRC-2000. It is harmonised mainly across the Americas, through CITEL, rather than worldwide. Introduced in the early 2000s, it was later extended with adjacent blocks to add bandwidth.
TH: ใน WARC-1992 และ WRC-2000 มีการระบุให้ย่าน AWS ใช้งานสำหรับ IMT ย่านนี้ Harmonize เป็นหลักในทวีปอเมริกาผ่าน CITEL ไม่ใช่ทั่วโลก เริ่มใช้ในช่วงต้นทศวรรษ 2000 และต่อมามีการเพิ่มช่วงคลื่นที่อยู่ติดกันเพื่อขยายแบนด์วิดท์

## page.aws.ecosystem
> The report's network sentence says "in the PCS band" (notes.source2); the figure is AWS's.
EN: About 69 live networks. Harmonising it across the Americas and aligning it with 3GPP standards built a strong ecosystem of devices and infrastructure.
TH: มีเครือข่ายให้บริการราว 69 เครือข่าย การ Harmonize ทั่วทวีปอเมริกาและการใช้มาตรฐานของ 3GPP ทำให้เกิด Ecosystem อุปกรณ์และโครงข่ายที่แข็งแรง

## page.aws.future
EN: Operators are refarming AWS from 4G to 5G, often using it with 2.5 and 3.5 GHz; technology-neutral licences and many AWS devices make this cost-effective. It will serve 5G into the 2030s, while very high capacity will come from upper mid-bands and mmWave.
TH: ผู้ให้บริการกำลัง refarm ย่าน AWS จาก 4G ไปใช้กับ 5G มักใช้ร่วมกับ 2.5 GHz และ 3.5 GHz ใบอนุญาตที่เป็นกลางทางเทคโนโลยีและอุปกรณ์ที่รองรับ AWS จำนวนมากทำให้คุ้มค่า ย่านนี้จะยังรองรับ 5G ไปจนถึงทศวรรษ 2030 ส่วน capacity สูงมากจะมาจากย่านกลางช่วงบนและ mmWave

## page.2-3-ghz.title
EN: 2.3 GHz
TH: 2.3 GHz

## page.2-3-ghz.lede
EN: A lower-frequency TDD band that balances capacity and reach.
TH: ย่าน TDD ความถี่ค่อนข้างต่ำ ที่ให้ทั้ง capacity และสัญญาณไปได้ดี

## page.2-3-ghz.overview
EN: One of the lowest-frequency TDD bands, where uplink and downlink take turns on one block. It balances capacity with signals that travel well. It is widely used for 4G and 5G.
TH: เป็นหนึ่งในย่าน TDD (uplink และ downlink สลับกันใช้คลื่นช่วงเดียว) ที่ความถี่ต่ำที่สุด ให้ทั้ง capacity และสัญญาณที่เดินทางได้ดี ใช้งานแพร่หลายทั้ง 4G และ 5G

## page.2-3-ghz.harmonisation
EN: First identified for IMT at WRC-07. Because it is harmonised worldwide, operators in many countries use the same band plan for 4G and 5G, which brings economies of scale and easier roaming.
TH: ใน WRC-07 มีการระบุให้ย่านนี้ใช้งานสำหรับ IMT เป็นครั้งแรก และย่านนี้ Harmonize ทั่วโลก ผู้ให้บริการในหลายประเทศจึงใช้แผนคลื่นเดียวกันสำหรับ 4G และ 5G ช่วยให้ประหยัดจากขนาดและโรมมิ่งได้ง่ายขึ้น

## page.2-3-ghz.ecosystem
EN: About 67 live networks. It is increasingly used together with other bands.
TH: มีเครือข่ายให้บริการราว 67 เครือข่าย และใช้ร่วมกับย่านอื่นได้มากขึ้น

## page.2-3-ghz.future
EN: Stays important for TDD 4G and 5G. It adds a 100 MHz channel at a lower frequency than many TDD mid-bands, and can support 5G's evolution alongside other bands.
TH: ยังสำคัญต่อ 4G และ 5G แบบ TDD ให้ช่องสัญญาณเพิ่ม 100 MHz ที่ความถี่ต่ำกว่าย่าน TDD กลางหลายย่าน และใช้ร่วมกับย่านอื่นในการพัฒนา 5G ต่อไปได้

## page.2-6-ghz.title
EN: 2.6 GHz
TH: 2.6 GHz

## page.2-6-ghz.lede
EN: Wide bandwidth for 5G in dense cities.
TH: แบนด์วิดท์กว้าง รองรับ 5G ในเมืองหนาแน่น

## page.2-6-ghz.overview
EN: 2.6 GHz comes in two band plans: an earlier one that splits the band into an FDD pair with a TDD block between, and a later one that uses the whole band as TDD. The band has been widely used for 4G and 5G.
TH: ย่าน 2.6 GHz มีแผนคลื่น 2 แบบ แบบแรกแบ่งเป็นคู่ FDD โดยมีช่วง TDD อยู่ตรงกลาง แบบหลังใช้ทั้งย่านเป็น TDD ย่านนี้ใช้กันแพร่หลายทั้งในการขยาย 4G และ 5G

## page.2-6-ghz.harmonisation
EN: Harmonised worldwide for IMT at WRC-2000. Regional decisions on whether to use FDD or TDD will help roaming and coordination across borders.
TH: ใน WRC-2000 ย่านนี้ได้รับการ Harmonize ทั่วโลกสำหรับ IMT การตัดสินใจในระดับภูมิภาคว่าจะใช้แบบ FDD หรือ TDD จะช่วยเรื่องโรมมิ่งและการประสานงานข้ามพรมแดน

## page.2-6-ghz.ecosystem
EN: About 330 live networks. Widely deployed for 4G and 5G in many markets, with device support worldwide.
TH: มีเครือข่ายให้บริการราว 330 เครือข่าย ใช้งานแพร่หลายทั้ง 4G และ 5G ในหลายตลาด และมีอุปกรณ์รองรับทั่วโลก

## page.2-6-ghz.future
EN: Will stay important for 5G in dense cities, and act as a bridge from today's 4G to future 6G, thanks to its wide bandwidth and worldwide device support.
TH: จะยังสำคัญต่อ 5G ในเมืองหนาแน่น และเป็นสะพานเชื่อมจาก 4G ไปสู่ 6G ในอนาคต เพราะมีแบนด์วิดท์กว้างและมีอุปกรณ์รองรับทั่วโลก

## page.3-5-ghz.title
EN: 3.5 GHz
TH: 3.5 GHz

## page.3-5-ghz.lede
EN: The main band for launching 5G, giving city-wide capacity.
TH: ย่านหลักในการเปิดตัว 5G ให้ capacity ครอบคลุมทั้งเมือง

## page.3-5-ghz.overview
EN: The 3.3-4.2 GHz range is the main launch band for 5G, giving city-wide capacity. It serves mobile broadband, fixed wireless access and industry. Most networks use 3.3-3.8 GHz; leading markets are developing 3.8-4.2 GHz.
TH: ช่วง 3.3-4.2 GHz เป็นย่านหลักในการเปิดตัว 5G ให้ capacity ทั่วทั้งเมือง ใช้ทั้งอินเทอร์เน็ตมือถือ อินเทอร์เน็ตไร้สายแบบประจำที่ (FWA) และงานอุตสาหกรรม เครือข่ายส่วนใหญ่ใช้ช่วง 3.3-3.8 GHz ส่วนตลาดชั้นนำกำลังพัฒนาช่วง 3.8-4.2 GHz

## page.3-5-ghz.harmonisation
EN: Worked out over several WRCs between 2007 and 2023. Each ITU Region agreed a slightly different range for mobile services (see the map). A Region-level agreement does not mean every country has made the band available: each country decides for itself.
TH: มีการวางแผนย่านนี้ใน WRC หลายครั้งระหว่างปี 2007 ถึง 2023 แต่ละ ITU Region ระบุให้ช่วงความถี่ที่ต่างกันเล็กน้อยใช้งานสำหรับ IMT (ดูแผนที่) การระบุในระดับ Region ไม่ได้หมายความว่าทุกประเทศใน Region ได้จัดสรรย่านนี้แล้ว การจัดสรรเป็นการตัดสินใจของแต่ละประเทศ

## page.3-5-ghz.ecosystem
EN: Over 90 countries have live 5G in this band, and more than 60% of the world's 5G launches rely on it. Its device ecosystem grew from just over 1300 in 2022 to over 3500 in 2026.
TH: มากกว่า 90 ประเทศมี 5G ให้บริการในย่านนี้ และการเปิดตัว 5G ทั่วโลกกว่า 60% ใช้ย่านนี้ Ecosystem มีอุปกรณ์กว่า 3,500 ชิ้น จากราว 1,300 ชิ้นในปี 2022

## page.3-5-ghz.future
EN: Still being rolled out as the main 5G band. Extending into 3.8-4.2 GHz would give the 200-400 MHz channels 6G needs, but existing and neighbouring users must first be cleared or coordinated.
TH: ยังอยู่ระหว่างติดตั้งและเป็นย่านหลักของ 5G หากขยายไปถึงช่วง 3.8-4.2 GHz ได้ จะได้ช่องสัญญาณกว้าง 200-400 MHz ที่ 6G ต้องการ แต่ต้องเคลียร์คลื่นและประสานกับผู้ใช้คลื่นเดิมและผู้ใช้คลื่นข้างเคียงก่อน

## page.4-5-ghz.title
EN: 4.5 GHz
TH: 4.5 GHz

## page.4-5-ghz.lede
EN: A higher-capacity mid-band for advanced 5G and early 6G.
TH: ย่านกลางที่ให้ capacity สูงขึ้น สำหรับ 5G ขั้นสูงและ 6G ระยะแรก

## page.4-5-ghz.overview
EN: Typically 4.4-4.99 GHz, just above 3.5 GHz, with larger blocks for advanced 5G and future 6G. It offers higher capacity while signals still travel reasonably well, which suits dense cities.
TH: โดยทั่วไปคือช่วง 4.4-4.99 GHz อยู่เหนือย่าน 3.5 GHz มีคลื่นช่วงต่อเนื่องที่ใหญ่กว่า สำหรับ 5G ขั้นสูงและ 6G ในอนาคต ให้ capacity สูงขึ้นโดยสัญญาณยังเดินทางได้พอสมควร จึงเหมาะกับเมืองหนาแน่น

## page.4-5-ghz.harmonisation
EN: 4.8-4.99 GHz was first identified for IMT at WRC-15, and many more countries identified it at WRC-19. 4.4-4.8 GHz is due for discussion at WRC-27.
TH: ใน WRC-15 มีการระบุให้ย่าน 4.8-4.99 GHz ใช้งานสำหรับ IMT เป็นครั้งแรก และใน WRC-19 มีอีกหลายประเทศระบุเพิ่ม ส่วนช่วง 4.4-4.8 GHz จะมีการหารือใน WRC-27

## page.4-5-ghz.ecosystem
EN: Four live networks. The device ecosystem grew from about 700 in 2022 to over 1500 in 2026. Several countries have licensed parts of the band for 5G, and more are expected to follow.
TH: มีเครือข่ายให้บริการ 4 เครือข่าย Ecosystem อุปกรณ์ขยายจากราว 700 ชิ้นในปี 2022 เป็นกว่า 1500 ชิ้นในปี 2026 หลายประเทศออกใบอนุญาตบางส่วนของย่านนี้สำหรับ 5G แล้ว และคาดว่าจะมีประเทศอื่นตามมา

## page.4-5-ghz.future
EN: Central to 5G-Advanced and early 6G. Use is greatest in Asia-Pacific, and interest is growing in the US and parts of RCC. WRC-27 will discuss more mid-band capacity, including 4.5 GHz.
TH: เป็นหัวใจของ 5G-Advanced และ 6G ระยะแรก ปัจจุบันใช้งานมากที่สุดในเอเชียแปซิฟิก ส่วนสหรัฐฯ และบางส่วนของ RCC ให้ความสนใจมากขึ้น WRC-27 จะหารือการเพิ่ม capacity ของย่านกลาง รวมถึง 4.5 GHz

## page.6-ghz.title
> The report's band is the upper part of 6 GHz.
EN: 6 GHz
TH: 6 GHz

## page.6-ghz.lede
EN: The next mid-band to open up, able to carry the wide channels 6G needs.
TH: ย่านกลางถัดไปที่จะเปิดใช้ รองรับช่องสัญญาณกว้างที่ 6G ต้องการ

## page.6-ghz.overview
EN: Upper 6 GHz (6.425-7.125 GHz) is the industry's next expansion band, to be developed from the late 2020s or the 2030s, depending on the market. In many markets it can carry 6G's 200-400 MHz channels and reuse the 3.5 GHz network layout.
TH: 6 GHz ช่วงบน (6.425-7.125 GHz) เป็นย่านที่อุตสาหกรรมมองว่าจะขยายเป็นลำดับถัดไป เริ่มพัฒนาช่วงปลายทศวรรษ 2020 หรือทศวรรษ 2030 แล้วแต่ตลาด ในหลายตลาด ย่านนี้ให้ช่องสัญญาณ 200-400 MHz ที่ 6G ต้องการได้ และใช้โครงข่ายเดิมของ 3.5 GHz ซ้ำได้

## page.6-ghz.harmonisation
EN: WRC-23 identified it for IMT throughout EMEA and in some countries in APAC and the Americas, with technical conditions agreed for all regions. Countries with over 80% of the world's population now support it for licensed mobile.
TH: ใน WRC-23 ประเทศทั่ว EMEA และบางประเทศในเอเชียแปซิฟิกและทวีปอเมริกา ระบุให้ย่านนี้ใช้งานสำหรับ IMT พร้อมตกลงเงื่อนไขทางเทคนิคสำหรับทุกภูมิภาค ปัจจุบันประเทศที่มีประชากรรวมกว่า 80% ของโลกสนับสนุนให้ใช้ย่านนี้กับมือถือแบบมีใบอนุญาต

## page.6-ghz.ecosystem
EN: Two networks so far. First commercial connections, through home or office receivers, are expected in 2026, with wider rollout the year after. Some countries, including in the GCC and APAC, have licensed the band; many others have it on their roadmap.
TH: ปัจจุบันมี 2 เครือข่าย การเชื่อมต่อเชิงพาณิชย์ครั้งแรกผ่านอุปกรณ์รับสัญญาณที่บ้านหรือสำนักงาน คาดว่าจะเกิดในปี 2026 และขยายวงกว้างในปีถัดไป บางประเทศ เช่นในกลุ่ม GCC และเอเชียแปซิฟิก ออกใบอนุญาตแล้ว และอีกหลายประเทศบรรจุย่านนี้ไว้ใน roadmap

## page.6-ghz.future
EN: Governments should consult industry on clear roadmaps for when the band comes into use. Some markets will need it later in the 2020s for 5G-Advanced; others will launch 6G on it.
TH: รัฐควรหารือกับอุตสาหกรรมเพื่อทำ roadmap ที่ชัดเจนว่าจะเริ่มใช้ย่านนี้เมื่อใด บางตลาดต้องใช้ในช่วงปลายทศวรรษ 2020 สำหรับ 5G-Advanced ขณะที่บางตลาดจะใช้เป็นย่านเปิดตัว 6G

## page.26-28-ghz.title
EN: 26 GHz · 28 GHz
TH: 26 GHz · 28 GHz

## page.26-28-ghz.lede
EN: mmWave bands for very high-capacity hotspots.
TH: ย่าน mmWave สำหรับจุดที่ต้องการ capacity สูงมาก

## page.26-28-ghz.overview
EN: 26 GHz offers large blocks for high capacity in crowded areas; assignments are starting for hotspots such as stadiums and transport hubs. 28 GHz, the original mmWave band, is used in North America and South Korea. Its signals do not travel far, so it is not used for wide-area coverage.
TH: 26 GHz มีคลื่นช่วงกว้างต่อเนื่อง ให้ capacity สูงในพื้นที่หนาแน่น และเริ่มจัดสรรให้ใช้ในจุดอย่างสนามกีฬาและศูนย์คมนาคม ส่วน 28 GHz เป็นย่าน mmWave ดั้งเดิม ใช้ในอเมริกาเหนือและเกาหลีใต้ สัญญาณไปได้ไม่ไกล จึงไม่ใช้ทำ coverage พื้นที่กว้าง

## page.26-28-ghz.harmonisation
EN: WRC-19 identified 26 GHz for IMT worldwide. The lower part of 28 GHz overlaps that range. The upper part of 28 GHz carried the first US mmWave launches and is a 3GPP standard.
TH: ใน WRC-19 ทั่วโลกระบุให้ย่าน 26 GHz ใช้งานสำหรับ IMT ส่วนล่างของ 28 GHz ซ้อนอยู่ในช่วงนี้ ส่วนบนของ 28 GHz ใช้เปิดตัว mmWave ครั้งแรกในสหรัฐฯ และเป็นมาตรฐานของ 3GPP

## page.26-28-ghz.ecosystem
EN: 26 GHz has about 27 live networks and nearly 100 devices. 28 GHz has over 100 devices for the whole range, and over 170 for the part used in the US.
TH: 26 GHz มีเครือข่ายให้บริการราว 27 เครือข่าย และอุปกรณ์เกือบ 100 ชิ้น สำหรับ 28 GHz มีอุปกรณ์กว่า 100 ชิ้นสำหรับทั้งช่วง และกว่า 170 ชิ้นสำหรับส่วนที่ใช้ในสหรัฐฯ

## page.26-28-ghz.future
EN: Operators have been cautious about mmWave but are starting to consider wider use where capacity demand is very high. In the US, 28 GHz is widely deployed as extra capacity in areas of very high demand.
TH: ที่ผ่านมาผู้ให้บริการยังระมัดระวังเรื่อง mmWave แต่เริ่มพิจารณาใช้กว้างขึ้นในพื้นที่ที่ต้องการ capacity สูงมาก ในสหรัฐฯ ใช้ 28 GHz อย่างแพร่หลายเพื่อเสริม capacity ในจุดที่ความต้องการสูงมาก

## page.40-66-ghz.title
EN: 40 · 50 · 66 GHz
TH: 40 · 50 · 66 GHz

## page.40-66-ghz.lede
EN: Higher mmWave bands, little used so far.
TH: ย่าน mmWave ที่สูงขึ้น ซึ่งยังมีการใช้งานน้อย

## page.40-66-ghz.overview
EN: 40 GHz is not widely used yet; 50 GHz and 66 GHz are not currently used. All three may have future uses in crowded hotspots.
TH: 40 GHz ยังใช้งานไม่แพร่หลาย ส่วน 50 GHz และ 66 GHz ยังไม่มีการใช้งานในปัจจุบัน ทั้งสามย่านอาจนำไปใช้ในจุดที่คนหนาแน่นได้ในอนาคต

## page.40-66-ghz.harmonisation
EN: All three were decided at WRC-19: 40 GHz was harmonised worldwide, 66 GHz was identified for IMT worldwide, and 50 GHz was harmonised in some countries only.
TH: ใน WRC-19 ทั่วโลก Harmonize ย่าน 40 GHz และทั่วโลกระบุให้ย่าน 66 GHz ใช้งานสำหรับ IMT ส่วน 50 GHz มีการ Harmonize เฉพาะบางประเทศ

## page.40-66-ghz.ecosystem
EN: Only 40 GHz has live networks (about 3). 50 GHz and 66 GHz have none, and the report gives no device figure for them.
TH: มีเพียง 40 GHz ที่มีเครือข่ายให้บริการ (ราว 3 เครือข่าย) ส่วน 50 GHz และ 66 GHz ยังไม่มีเครือข่าย และรายงานไม่ได้ระบุจำนวนอุปกรณ์

## page.40-66-ghz.future
EN: Operators have been cautious about mmWave such as 40 GHz, but are starting to consider wider use. The future of 50 GHz is uncertain, pending other mmWave bands. 66 GHz will likely come only after 26/28 GHz develop further.
TH: ผู้ให้บริการยังระมัดระวังเรื่อง mmWave อย่าง 40 GHz แต่เริ่มพิจารณาใช้กว้างขึ้น อนาคตของ 50 GHz ยังไม่แน่นอน ขึ้นกับการพัฒนาย่าน mmWave อื่น ส่วน 66 GHz น่าจะใช้หลังจาก 26/28 GHz พัฒนาไปมากกว่านี้

---

# 6. Where each band is harmonised

> One short line next to a colour swatch on the map. Max 14 words. Each page lists its entries in order w1, w2, ...

## map.600-mhz.title
> One short line above the list beside the 600 MHz map: what this map shows. Max ~40 characters.
EN: Use in each area
TH: การใช้งานในแต่ละพื้นที่

## where.600-mhz.w1
> North America, Caribbean, Middle East. The report says "regions including" these, so the list is not complete. The coloured list line is also the legend: start with the category.
EN: In use: regions including North America, Caribbean, Middle East
TH: ใช้งานแล้ว: ภูมิภาคต่าง ๆ รวมถึงอเมริกาเหนือ แคริบเบียน ตะวันออกกลาง

## where.600-mhz.w2
> Asia-Pacific. Thai wording is A.'s.
EN: Newer band plan in development: Asia-Pacific
TH: กำลังพัฒนาแผนคลื่นใหม่: เอเชียแปซิฟิก

## where.600-mhz.w3
> ITU Regions 1, 2 and 3, dashed (only some countries, not named).
EN: Some countries identified it for IMT: Regions 1, 2 and 3
TH: บางประเทศระบุให้ย่านนี้ใช้งานสำหรับ IMT: Region 1, 2 และ 3

## map.700-mhz.title
> One short line above the 700 MHz map: what this map shows. Max ~40 characters.
EN: Use in each region
TH: การใช้งานในแต่ละภูมิภาค

## map.700-mhz.world
> New block: caption on the 700 MHz map (all land tinted). Report p11: harmonised in all three ITU Regions.
EN: Harmonised in all three ITU Regions
TH: Harmonize แล้วในทั้ง 3 ITU Region

## where.700-mhz.w1
> Asia-Pacific and Latin America (group g1). The coloured list line is also the legend: name the area first.
EN: Asia-Pacific and Latin America: whole band, 2 x 45 MHz, for 4G and 5G coverage
TH: เอเชียแปซิฟิกและละตินอเมริกา: ใช้ทั้งย่าน 2 x 45 MHz ทำ coverage ทั้ง 4G และ 5G

## where.700-mhz.w2
> ITU Region 1 / EMEA (group g2).
EN: Region 1 (EMEA): 60 MHz FDD plus 20 MHz SDL; some NB-IoT
TH: Region 1 (EMEA): ใช้ 60 MHz แบบ FDD และ SDL อีก 20 MHz รวมถึงงาน NB-IoT บางส่วน

## where.700-mhz.w3
> US and Canada (group g3).
EN: US and Canada: 70 MHz in three parts, plus 10 MHz SDL
TH: สหรัฐฯ และแคนาดา: แบ่ง 70 MHz เป็น 3 ส่วน และ SDL อีก 10 MHz

## map.800-mhz.title
> One short line above the list beside the 800 MHz map: what this map shows. Max ~40 characters.
EN: Where the band is in use
TH: พื้นที่ที่มีการใช้งาน

## where.800-mhz.w1
> EMEA. The coloured list line is also the legend: start with the category.
EN: In use, mostly 4G: EMEA
TH: ใช้งานแล้ว ส่วนใหญ่เป็น 4G: EMEA

## map.850-mhz.title
> One short line above the list beside the 850 MHz map: what this map shows. Max ~40 characters.
EN: Where the band is in use
TH: พื้นที่ที่มีการใช้งาน

## where.850-mhz.w1
> The Americas, and Asia-Pacific dashed (only "parts of"). The world caption (ui.legend.global) also shows on this page.
EN: In use: the Americas and parts of Asia-Pacific
TH: ใช้งานแล้ว: ทวีปอเมริกาและบางส่วนของเอเชียแปซิฟิก

## map.900-mhz.title
> One short line above the list beside the 900 MHz map: what this map shows. Max ~40 characters.
EN: Where the band is in use
TH: พื้นที่ที่มีการใช้งาน

## where.900-mhz.w1
> ITU Region 1, Latin America and ITU Region 3. The coloured list line is also the legend.
EN: In use for GSM and IMT
TH: มีการใช้งานสำหรับ GSM และ IMT

## map.1500-mhz.title
> One short line above the list beside the 1500 MHz map: what this map shows. Max ~40 characters.
EN: Band plan used in each area
TH: แผนคลื่นที่ใช้ในแต่ละพื้นที่

## where.1500-mhz.w1
> Japan. The coloured list line is also the legend: start with the category.
EN: FDD: in use in Japan
TH: FDD: ใช้งานในญี่ปุ่น

## where.1500-mhz.w2
> Europe.
EN: SDL: harmonised in Europe, used for 4G
TH: SDL: ยุโรป Harmonize และใช้กับ 4G

## where.1500-mhz.w3
> Arab world and Indonesia.
EN: TDD: harmonised in the Arab world; auctioned in Indonesia
TH: TDD: กลุ่มประเทศอาหรับ Harmonize และอินโดนีเซียประมูลแล้ว

## where.1500-mhz.w4
> India and Brazil.
EN: On the roadmap: India and Brazil
TH: อยู่ใน roadmap: อินเดียและบราซิล

## map.pcs.title
> One short line above the list beside the PCS map: what this map shows. Max ~40 characters.
EN: Where the band is in use
TH: พื้นที่ที่มีการใช้งาน

## where.pcs.w1
> The Americas and the Caribbean (report p18). The coloured list line is also the legend: start with the category.
EN: In use: mainly the Americas and Caribbean
TH: ใช้งานแล้ว: ส่วนใหญ่ในทวีปอเมริกาและแคริบเบียน

## map.aws.title
> One short line above the list beside the AWS map: what this map shows. Max ~40 characters.
EN: Where the band is in use
TH: พื้นที่ที่มีการใช้งาน

## where.aws.w1
> The US and parts of the Americas (report p19). The coloured list line is also the legend: start with the category.
EN: In use: the US and parts of the Americas
TH: ใช้งานแล้ว: สหรัฐฯ และบางส่วนของทวีปอเมริกา

## map.2-1-ghz.world
> New block: caption on the 2.1 GHz map. The report says only "identified globally at WARC-92" (p20), without "for IMT".
EN: Identified worldwide
TH: ทั่วโลกระบุย่านนี้ไว้

## map.3-5-ghz.title
> One short line above the list beside the 3.5 GHz map: what this map shows. Max ~40 characters.
EN: Range agreed in each ITU Region
TH: ย่านที่แต่ละ ITU Region ระบุให้ใช้งานสำหรับ IMT

## where.3-5-ghz.w1
> ITU Region 1. The coloured list line is also the legend: start with the category. Report p23: 3.4-3.5 + 3.5-3.8 GHz.
EN: Region 1: 3.4-3.8 GHz agreed for mobile
TH: Region 1: ระบุให้ย่าน 3.4-3.8 GHz ใช้งานสำหรับ IMT

## where.3-5-ghz.w2
> ITU Region 2. Report p23: 3.4-3.5 + 3.5-3.8 + 3.8-4.2 GHz.
EN: Region 2: 3.4-4.2 GHz agreed for mobile
TH: Region 2: ระบุให้ย่าน 3.4-4.2 GHz ใช้งานสำหรับ IMT

## where.3-5-ghz.w3
> ITU Region 3. Report p23: 3.5-3.8 + 3.8-4.2 GHz; 3.4-3.5 GHz only in "a part of" Region 3.
EN: Region 3: 3.5-4.2 GHz agreed (3.4-3.5 GHz in part)
TH: Region 3: ระบุให้ย่าน 3.5-4.2 GHz ใช้งานสำหรับ IMT (3.4-3.5 GHz ในบางส่วนของ Region)

## map.4-5-ghz.title
> One short line above the list beside the 4.5 GHz map: what this map shows. Max ~40 characters.
EN: Use and interest by area
TH: การใช้งานและความสนใจในแต่ละพื้นที่

## where.4-5-ghz.w1
> Asia-Pacific. The coloured list line is also the legend: start with the category.
EN: Most use today: Asia-Pacific
TH: ใช้งานมากที่สุดในปัจจุบัน: เอเชียแปซิฟิก

## where.4-5-ghz.w2
> China, Japan, Korea. Report p24: device support, not networks.
EN: Strong device support: China, Japan, Korea
TH: มีอุปกรณ์รองรับมาก: จีน ญี่ปุ่น เกาหลี

## where.4-5-ghz.w3
> US, and parts of RCC dashed. Report p24: interest only. Thai wording is A.'s.
EN: Showing interest: US and parts of RCC
TH: ให้ความสนใจ: สหรัฐฯ และบางส่วนของ RCC

## map.6-ghz.title
> One short line above the list beside the 6 GHz map: what this map shows. Max ~40 characters.
EN: Status in each area
TH: สถานะในแต่ละพื้นที่

## where.6-ghz.w1
> EMEA. The coloured list line is also the legend: start with the category.
EN: Identified for IMT at WRC-23: EMEA
TH: EMEA: ระบุให้ย่านนี้ใช้งานสำหรับ IMT ใน WRC-23

## where.6-ghz.w2
> APAC and the Americas (only some countries, not named).
EN: Identified in some countries: APAC and the Americas
TH: เอเชียแปซิฟิกและทวีปอเมริกา: บางประเทศระบุให้ย่านนี้ใช้งานสำหรับ IMT

## where.6-ghz.w3
> GCC (and some APAC countries, as the report says; none named).
EN: Already licensed: some GCC and APAC countries
TH: ออกใบอนุญาตแล้ว: บางประเทศใน GCC และเอเชียแปซิฟิก

## map.26-28-ghz.title
> One short line above the list beside the 26/28 GHz map: what this map shows. Max ~40 characters.
EN: Identified worldwide and in use
TH: การระบุทั่วโลกและพื้นที่ใช้งาน

## map.26-28-ghz.world
> Caption on the map, which is tinted worldwide for 26 GHz. Max ~32 characters.
EN: 26 GHz identified for IMT globally
TH: ทั่วโลกระบุให้ย่าน 26 GHz ใช้งาน IMT

## where.26-28-ghz.w1
> North America and South Korea. The coloured list line is also the legend: start with the category.
EN: 28 GHz in use: North America and South Korea
TH: 28 GHz ใช้งานแล้ว: อเมริกาเหนือและเกาหลีใต้

## map.40-66-ghz.title
> One short line above the list beside the 40/50/66 GHz map: what this list shows. Max ~40 characters. No areas are coloured on this page.
EN: Status of each band
TH: สถานะของแต่ละย่าน

## where.40-66-ghz.w1
> 40 GHz. Report p29 says "harmonised globally" without "for IMT"; keep that.
EN: 40 GHz: harmonised worldwide at WRC-19; about 3 networks
TH: 40 GHz: ทั่วโลก Harmonize ใน WRC-19 มีเครือข่ายราว 3 เครือข่าย

## where.40-66-ghz.w2
> 66 GHz. Report p31.
EN: 66 GHz: identified for IMT worldwide at WRC-19; no networks yet
TH: 66 GHz: ทั่วโลกระบุให้ย่านนี้ใช้งานสำหรับ IMT ใน WRC-19 ยังไม่มีเครือข่าย

## where.40-66-ghz.w3
> 50 GHz. Report p30.
EN: 50 GHz: harmonised in some countries (none named); no networks yet
TH: 50 GHz: Harmonize เฉพาะบางประเทศ (รายงานไม่ระบุชื่อ) ยังไม่มีเครือข่าย

---

# 7. Scope, events, places

> Scope words appear on the timeline next to a lit conference. Max ~28 characters.

> The page adds the ITU Regions concerned after a scope word, for example "· R2·R3".

## scope.global
EN: identified for IMT worldwide
TH: ทั่วโลกระบุให้ย่านนี้ใช้งาน IMT

## scope.regions
EN: harmonised region by region
TH: Harmonize ทีละภูมิภาค

## scope.some
> Countries gradually declaring the band for IMT (the report's "footnotes"), or "harmonised in some countries".
EN: identified by some countries
TH: บางประเทศระบุให้ย่านนี้ใช้งาน IMT

## scope.more
> New block: more countries identifying a band that was already identified (4.5 GHz at WRC-19, report p24).
EN: identified by more countries
TH: หลายประเทศระบุให้ย่านนี้ใช้งาน IMT เพิ่ม

## scope.europe-some
> 1987, 900 MHz: harmonised for GSM in some European countries (before IMT existed).
EN: GSM, some European countries
TH: GSM ในบางประเทศของยุโรป

## scope.future
EN: to be discussed
TH: จะมีการหารือ

## scope.global-plain
> 2.1 GHz at WARC-92: the report says only "identified globally", without "for IMT". Also used as the map caption on the 2.1 GHz page.
EN: identified worldwide
TH: ทั่วโลกระบุย่านนี้ไว้

## scope.mss
> 2.1 GHz at WRC-27: the report (p20) says WRC-27 may consider new mobile-satellite allocations, from which 2.1 GHz needs protection; 2.1 GHz itself is not on the agenda.
EN: satellite use may be discussed
TH: อาจมีการหารือการใช้งานดาวเทียม

## scope.harmonised-global
> 40 GHz at WRC-19: the report says "harmonised globally", not identified for IMT.
EN: harmonised worldwide
TH: ทั่วโลก Harmonize ย่านนี้

## scope.harmonised-some
> 50 GHz at WRC-19: "harmonised in some countries".
EN: harmonised in some countries
TH: บางประเทศ Harmonize ย่านนี้

## scope.identified
> For conferences where the report names the decision but not how widely it applies.
EN: identified for IMT
TH: ระบุให้ย่านนี้ใช้งาน IMT

> Conference labels on the timeline. Max ~10 characters.

## event.1987
EN: 1987
TH: 1987

## event.warc-92
EN: WARC-92
TH: WARC-92

## event.wrc-2000
EN: WRC-2000
TH: WRC-2000

## event.wrc-07
EN: WRC-07
TH: WRC-07

## event.wrc-12
EN: WRC-12
TH: WRC-12

## event.wrc-15
EN: WRC-15
TH: WRC-15

## event.wrc-19
EN: WRC-19
TH: WRC-19

## event.wrc-23
EN: WRC-23
TH: WRC-23

## event.wrc-27
EN: WRC-27
TH: WRC-27

## event.wrc-31
EN: WRC-31
TH: WRC-31

> Place names on the map and in lists. Max ~24 characters.

## place.itu1
EN: ITU Region 1
TH: ITU Region 1

## place.itu2
EN: ITU Region 2
TH: ITU Region 2

## place.itu3
EN: ITU Region 3
TH: ITU Region 3

## place.emea
EN: EMEA
TH: EMEA

## place.apac
EN: Asia-Pacific
TH: เอเชียแปซิฟิก

## place.americas
EN: The Americas
TH: ทวีปอเมริกา

## place.latin-america
EN: Latin America
TH: ละตินอเมริกา

## place.caribbean
EN: Caribbean
TH: แคริบเบียน

## place.north-america
EN: North America
TH: อเมริกาเหนือ

## place.europe
EN: Europe
TH: ยุโรป

## place.middle-east
EN: Middle East
TH: ตะวันออกกลาง

## place.arab-world
EN: Arab world
TH: โลกอาหรับ

## place.gcc
EN: GCC
TH: GCC

## place.rcc
EN: RCC
TH: RCC

## place.usa
EN: United States
TH: สหรัฐอเมริกา

## place.can
EN: Canada
TH: แคนาดา

## place.jpn
EN: Japan
TH: ญี่ปุ่น

## place.kor
EN: South Korea
TH: เกาหลีใต้

## place.chn
EN: China
TH: จีน

## place.idn
EN: Indonesia
TH: อินโดนีเซีย

## place.ind
EN: India
TH: อินเดีย

## place.bra
EN: Brazil
TH: บราซิล

---

# 8. What comes next

## next.title
EN: What comes next
TH: ก้าวต่อไป

## next.lede
EN: Decisions at the next WRC can harmonise more spectrum for mobile.
TH: การตัดสินใจในการประชุม WRC ครั้งหน้าสามารถ Harmonize คลื่นความถี่เพิ่มเติมสำหรับมือถือได้

## next.f1.title
> Short heading. Max ~30 characters.
EN: WRC-27
TH: WRC-27

## next.f1.body
> Max ~35 words.
EN: The next WRC, in 2027, can harmonise more spectrum for mobile, including low and mid-bands that can help countries meet future demand.
TH: WRC ครั้งหน้าในปี 2027 สามารถ Harmonize คลื่นความถี่เพิ่มเติมสำหรับมือถือ รวมถึงย่านต่ำและย่านกลาง ซึ่งช่วยให้แต่ละประเทศรองรับความต้องการในอนาคตได้

## next.f2.title
EN: Upper 6 GHz support
TH: การสนับสนุน 6 GHz ช่วงบน

## next.f2.body
> The 80% figure is not among the "why" figures; it appears here and on the 6 GHz page.
EN: Countries representing more than 80% of the world's population now support the upper 6 GHz band for mobile.
TH: ประเทศที่มีประชากรรวมกว่า 80% ของโลกสนับสนุนให้ใช้ย่าน 6 GHz ช่วงบนกับมือถือแล้ว

## next.f3.title
EN: The next space for mobile
TH: พื้นที่ถัดไปของมือถือ

## next.f3.body
> The 2-2.5 GHz figure is quoted as the infographic prints it (p6): "Globally: 2-2.5 GHz mid-band spectrum will be required in 2035-2040 to meet demand". The report does not say whether this is a world total or per country.
EN: The report calls 4.5 GHz and 7-8 GHz the next space for mobile to grow in mid-bands. It states: "Globally: 2-2.5 GHz mid-band spectrum will be required in 2035-2040 to meet demand."
TH: รายงานเรียกย่าน 4.5 GHz และ 7-8 GHz ว่าเป็นพื้นที่ถัดไปที่มือถือจะขยายในย่านกลาง และกล่าวว่า ในระดับโลก (Globally) จะต้องใช้คลื่นย่านกลางรวม 2-2.5 GHz ในช่วงปี 2035-2040 เพื่อรองรับความต้องการ

## next.f4.title
EN: 6G by 2040
TH: 6G ภายในปี 2040

## next.f4.body
EN: 6G is expected to reach 5 billion connections by 2040, or 54% market penetration.
TH: คาดว่า 6G จะมี 5 พันล้านการเชื่อมต่อภายในปี 2040 หรือคิดเป็นอัตราการเข้าถึงตลาด 54%

## principle.title
> Heading of the row of principles (report p8).
EN: Principles for licensing spectrum
TH: หลักการออกใบอนุญาตคลื่นความถี่

## principle.lede
> New block: one line under the heading (p8).
EN: A regulator's core role is to make spectrum available to those best placed to create the most social and economic value from it.
TH: บทบาทหลักของหน่วยงานกำกับดูแล คือทำให้คลื่นความถี่ไปอยู่กับผู้ที่สร้างคุณค่าทางสังคมและเศรษฐกิจได้มากที่สุด

## principle.1
> Each principle: a short name, then one plain statement. Max ~30 words.
EN: Long, predictable licences: long terms, and renewal expected where spectrum is used efficiently, so operators can invest for the long term.
TH: ใบอนุญาตอายุยาวและคาดการณ์ได้: อายุใบอนุญาตยาว และคาดหมายได้ว่าจะต่ออายุหากใช้คลื่นอย่างมีประสิทธิภาพ ผู้ให้บริการจึงลงทุนระยะยาวได้

## principle.2
EN: Prices that support investment: cautious reserve prices and renewal fees, so money is not diverted from networks. Coverage and quality commitments are increasingly used instead of upfront cash.
TH: ราคาคลื่นที่เอื้อต่อการลงทุน: ราคาตั้งต้นและค่าต่ออายุไม่สูงเกินไป เพื่อไม่ให้ดึงเงินออกจากการลงทุนโครงข่าย และมีการใช้เงื่อนไขด้าน coverage และคุณภาพแทนการจ่ายเงินก้อนล่วงหน้ามากขึ้น

## principle.3
EN: Licence obligations only where needed: to manage interference and meet clear public policy goals, with their cost counted in the spectrum price.
TH: เงื่อนไขใบอนุญาตเท่าที่จำเป็น: เพื่อจัดการการรบกวนและบรรลุเป้าหมายนโยบายที่ชัดเจน โดยนับต้นทุนของเงื่อนไขรวมไว้ในราคาคลื่น

## principle.4
> The report names technology neutrality as the principle to combine with the three pillars.
EN: Technology and service neutrality: operators can bring new technologies and services into existing bands as demand changes. It should be combined with the other three pillars.
TH: ความเป็นกลางทางเทคโนโลยีและบริการ: ผู้ให้บริการนำเทคโนโลยีและบริการใหม่มาใช้ในย่านเดิมได้ตามความต้องการที่เปลี่ยนไป ควบคู่กับอีก 3 หลัก

## principle.note
> New block: small line under the principles (p8).
EN: The band uses shown on this page are operators' choices, not imposed by regulators.
TH: การใช้งานของแต่ละย่านที่แสดงในหน้านี้เป็นทางเลือกของผู้ให้บริการ ไม่ใช่สิ่งที่หน่วยงานกำกับดูแลบังคับ

---

# 9. Index, glossary, notes, credits

## index.title
EN: All 20 bands
TH: ทั้ง 20 ย่านความถี่

## index.col.band
EN: Band
TH: ย่านความถี่

## index.col.range
EN: Range
TH: ช่วงความถี่

## index.col.group
EN: Group
TH: กลุ่ม

## index.col.gpp
EN: 3GPP bands
TH: ย่าน 3GPP

## index.col.networks
EN: Live networks
TH: เครือข่ายที่ให้บริการ

## index.col.devices
EN: Devices in the ecosystem
TH: อุปกรณ์ใน Ecosystem

## index.col.harmonised
> The column lists past decisions (including 1987) and future WRCs.
EN: Key conferences
TH: การประชุมที่เกี่ยวข้อง

## gloss.title
> Concepts first, explained in our own words (not from the report), then acronyms. Concept entries are written "term: meaning"; acronym entries give the expansion, and the page takes the acronym from the block name.
EN: Glossary
TH: อภิธานศัพท์

## gloss.identified-for-IMT
EN: Identified for IMT: at a WRC, countries state that a band can be used for IMT (3G to 6G). It is an agreement only; each country still decides whether to assign the band.
TH: ระบุให้ใช้งานสำหรับ IMT: ประเทศต่าง ๆ ในที่ประชุม WRC ระบุว่าย่านนี้ใช้งานสำหรับ IMT ได้ เป็นข้อตกลงเท่านั้น แต่ละประเทศยังตัดสินใจเองว่าจะจัดสรรหรือไม่

## gloss.harmonise
EN: Harmonise: countries agree to use a band in the same way, at a WRC or in a regional group. This brings scale, lower costs and easier roaming.
TH: Harmonize: การที่หลายประเทศตกลงใช้ย่านความถี่แบบเดียวกัน ผ่าน WRC หรือกลุ่มประเทศในภูมิภาค ช่วยให้ตลาดใหญ่ขึ้น ต้นทุนลดลง และโรมมิ่งง่ายขึ้น

## gloss.band-plan
EN: Band plan: how a band is split into blocks, and which block carries which direction. "2 x 45 MHz" means two blocks of 45 MHz, one for uplink and one for downlink.
TH: แผนคลื่น: วิธีแบ่งย่านความถี่เป็นช่วง ๆ และกำหนดว่าช่วงใดใช้ส่งทางใด "2 x 45 MHz" คือคลื่น 2 ช่วง ช่วงละ 45 MHz สำหรับ uplink 1 ช่วง และ downlink 1 ช่วง

## gloss.uplink-downlink
EN: Uplink / downlink: uplink carries data from the phone to the network; downlink carries it from the network to the phone.
TH: Uplink / downlink: uplink คือการส่งข้อมูลจากโทรศัพท์ไปยังเครือข่าย ส่วน downlink คือจากเครือข่ายมายังโทรศัพท์

## gloss.FDD
EN: FDD: Frequency Division Duplexing. Two paired blocks, one for uplink and one for downlink.
TH: FDD: Frequency Division Duplexing ใช้คลื่น 2 ช่วงคู่กัน ช่วงหนึ่งสำหรับ uplink อีกช่วงสำหรับ downlink

## gloss.TDD
EN: TDD: Time Division Duplexing. One block; uplink and downlink take turns.
TH: TDD: Time Division Duplexing ใช้คลื่นช่วงเดียว โดยสลับเวลากันระหว่าง uplink และ downlink

## gloss.SDL
EN: SDL: Supplemental Down Link. An extra block used for downlink only.
TH: SDL: Supplemental Down Link คลื่นช่วงเสริมที่ใช้สำหรับ downlink อย่างเดียว

## gloss.refarm
EN: Refarm: moving a band already in use to a newer technology, for example from 2G to 4G.
TH: Refarm: การนำคลื่นที่ใช้อยู่ไปใช้กับเทคโนโลยีรุ่นใหม่ เช่น จาก 2G เป็น 4G

## gloss.coverage
EN: Coverage: how far the signal reaches, including inside buildings. Low bands do this best.
TH: Coverage: สัญญาณไปได้ไกลและเข้าอาคารได้แค่ไหน ย่านต่ำทำได้ดีที่สุด

## gloss.capacity
EN: Capacity: how much traffic a network can carry at once in one area. Mid and high bands add the most.
TH: Capacity: ปริมาณการใช้งานที่เครือข่ายรองรับได้พร้อมกันในพื้นที่หนึ่ง ย่านกลางและย่านสูงเพิ่มได้มากที่สุด

## gloss.ITU-Region
EN: ITU Region: the ITU divides the world into three Regions, and a WRC can decide differently for each. Thailand is in Region 3.
TH: ITU Region: ITU แบ่งโลกเป็น 3 Region และการตัดสินใจใน WRC อาจต่างกันในแต่ละ Region ประเทศไทยอยู่ใน Region 3

## gloss.mmWave
EN: mmWave: Millimetre Wave. The very high bands, from about 24 GHz: short reach, very high capacity.
TH: mmWave: Millimetre Wave ย่านความถี่สูงมาก ตั้งแต่ราว 24 GHz สัญญาณไปได้ไม่ไกลแต่ให้ capacity สูงมาก

## gloss.Ecosystem
EN: Ecosystem: the devices that work on a band. Device figures come from GSA's GAMBoD database.
TH: Ecosystem: อุปกรณ์ที่ใช้งานกับย่านนั้นได้ ตัวเลขอุปกรณ์มาจากฐานข้อมูล GAMBoD ของ GSA

## gloss.roadmap
EN: Roadmap: a country's plan for when it will release bands to operators.
TH: Roadmap: แผนของประเทศว่าจะจัดสรรย่านความถี่ใดให้ผู้ให้บริการเมื่อใด

## gloss.digital-dividend
EN: Digital dividend: spectrum freed up when TV switched from analogue to digital, reused for mobile.
TH: Digital dividend: คลื่นความถี่เหลือใช้จากการเปลี่ยนผ่านสู่ทีวีระบบดิจิทัล ซึ่งนำมาใช้กับบริการมือถือ

## gloss.3GPP
EN: 3rd Generation Partnership Project
TH: 3rd Generation Partnership Project

## gloss.APAC
EN: Asia-Pacific. The report does not list its countries.
TH: เอเชียแปซิฟิก รายงานไม่ได้ระบุว่ามีประเทศใดบ้าง

## gloss.AWS
EN: Advanced Wireless Services
TH: Advanced Wireless Services

## gloss.CITEL
> Printed in the report with a garbled accent; spelled here as in Spanish.
EN: Comisión Interamericana de Telecomunicaciones
TH: Comisión Interamericana de Telecomunicaciones

## gloss.EMEA
EN: Europe, the Middle East and Africa. The report does not list its countries.
TH: ยุโรป ตะวันออกกลาง และแอฟริกา รายงานไม่ได้ระบุว่ามีประเทศใดบ้าง

## gloss.FWA
EN: Fixed Wireless Access
TH: Fixed Wireless Access (อินเทอร์เน็ตไร้สายแบบประจำที่)

## gloss.GCC
EN: Gulf Cooperation Council. The report does not list its countries.
TH: Gulf Cooperation Council รายงานไม่ได้ระบุว่ามีประเทศใดบ้าง

## gloss.GSM
EN: Global System for Mobile Communications
TH: Global System for Mobile Communications

## gloss.IMT
EN: International Mobile Telecommunications
TH: International Mobile Telecommunications

## gloss.IoT
EN: Internet of Things
TH: Internet of Things

## gloss.ITU
> The report prints "Telecommunications"; the organisation's official name is "Telecommunication". Kept as printed.
EN: International Telecommunications Union
TH: International Telecommunications Union

## gloss.MHz
> Merged entry for MHz and GHz (gloss.GHz removed).
EN: MHz / GHz: megahertz and gigahertz, units of frequency. 1 GHz = 1,000 MHz.
TH: MHz / GHz: เมกะเฮิรตซ์และกิกะเฮิรตซ์ หน่วยของความถี่ 1 GHz = 1,000 MHz

## gloss.NB-IoT
EN: NB-IoT: Narrowband IoT, a low-power way to connect simple devices such as sensors.
TH: NB-IoT: Narrowband IoT การเชื่อมต่อแบบใช้พลังงานต่ำสำหรับอุปกรณ์ง่าย ๆ เช่น เซนเซอร์

## gloss.PCS
EN: Personal Communications Service
TH: Personal Communications Service

## gloss.RCC
EN: Regional Commonwealth in the Field of Communications
TH: Regional Commonwealth in the Field of Communications

## gloss.WARC
EN: World Administrative Radio Conference
TH: World Administrative Radio Conference

## gloss.WRC
EN: World Radiocommunication Conference
TH: World Radiocommunication Conference

## notes.title
EN: Notes
TH: หมายเหตุ

## notes.derived
EN: Wavelengths are calculated as the speed of light divided by frequency. They are not from the report.
TH: ความยาวคลื่นคำนวณจากความเร็วแสงหารด้วยความถี่ ไม่ได้มาจากรายงาน

## notes.map
EN: ITU Region borders come from the ITU; Thailand is in ITU Region 3. Looser areas such as EMEA are approximate because the report does not define them. Only countries the report names are marked individually. Each band's map colours only the areas the report names for that band: an uncoloured area does not mean the band is unused there.
TH: เส้นแบ่ง ITU Region มาจาก ITU และประเทศไทยอยู่ใน ITU Region 3 ส่วนพื้นที่กว้างอย่าง EMEA วาดโดยประมาณ เพราะรายงานไม่ได้นิยามไว้ และระบุเป็นรายประเทศเฉพาะประเทศที่รายงานเอ่ยชื่อเท่านั้น แผนที่ของแต่ละย่านลงสีเฉพาะพื้นที่ที่รายงานกล่าวถึงสำหรับย่านนั้น พื้นที่ที่ไม่มีสีจึงไม่ได้แปลว่าไม่มีการใช้ย่านนั้น

## notes.worked
> New block: figures on the band pages that are worked out rather than printed.
EN: Some sizes on the band pages are worked out from the report's own figures rather than printed in it. At 700 MHz, the 10 MHz gap between the two blocks comes from the diagram's edges (748 and 758 MHz), and the 70 MHz for the US and Canada is the report's 80 MHz minus its 10 MHz of SDL.
TH: ขนาดคลื่นบางค่าในหน้าของแต่ละย่านคำนวณจากตัวเลขในรายงาน ไม่ได้พิมพ์ไว้โดยตรง ที่ 700 MHz ช่องว่าง 10 MHz ระหว่าง 2 ช่วงคำนวณจากขอบของแผนภาพ (748 และ 758 MHz) และ 70 MHz ของสหรัฐฯ และแคนาดา คือ 80 MHz ตามรายงาน หักด้วย SDL 10 MHz

> The next blocks list places where the report's own figures or wording differ. The page uses the report's wording as printed.

## notes.source1
EN: 700 MHz: the report's heading repeats 703-733 / 758-788 MHz (once marked EMEA). The band card here also shows the wider 703-748 / 758-803 MHz plan, taken from the report's diagram.
TH: 700 MHz: หัวข้อในรายงานให้ช่วง 703-733 / 758-788 MHz ซ้ำ 2 ครั้ง (ครั้งหนึ่งระบุว่า EMEA) การ์ดของย่านในหน้านี้จึงแสดงแผนคลื่นที่กว้างกว่า คือ 703-748 / 758-803 MHz ด้วย ซึ่งนำมาจากแผนภาพในรายงาน

## notes.source2
EN: The AWS network sentence says "in the PCS band", although the page is about the AWS band.
TH: ประโยคเรื่องเครือข่าย AWS ระบุว่า "ในย่าน PCS" แม้ว่าหน้านั้นจะว่าด้วยย่าน AWS

## notes.source3
EN: PCS ("around 11000") and AWS ("over 11,000") have near-identical device figures with different qualifiers.
TH: PCS ("around 11000") และ AWS ("over 11,000") มีตัวเลขอุปกรณ์เกือบเท่ากันแต่ใช้คำกำกับต่างกัน

## notes.source4
EN: 4.5 GHz is headed 4.4-5 GHz, while the overview and diagram say 4.4-4.99 GHz.
TH: 4.5 GHz ระบุช่วง 4.4-5 GHz ในหัวข้อ แต่ภาพรวมและแผนภาพระบุ 4.4-4.99 GHz

## notes.source5
EN: 1500 MHz is headed 1427-1518 MHz, while the SDL and TDD blocks end at 1517 MHz.
TH: 1500 MHz ระบุช่วง 1427-1518 MHz ในหัวข้อ แต่บล็อก SDL และ TDD สิ้นสุดที่ 1517 MHz

## notes.source6
EN: 28 GHz: the report gives device figures for the whole range (over 100) and for the part used in the US (over 170), so the smaller part has more devices; it gives no network count.
TH: 28 GHz: รายงานให้ตัวเลขอุปกรณ์ของทั้งช่วง (กว่า 100 ชิ้น) และของส่วนที่ใช้ในสหรัฐฯ (กว่า 170 ชิ้น) ส่วนที่เล็กกว่าจึงมีอุปกรณ์มากกว่า และรายงานไม่ให้จำนวนเครือข่าย

## notes.source7
EN: 6 GHz gives a network count (two) but no device count.
TH: 6 GHz ระบุจำนวนเครือข่าย (2 เครือข่าย) แต่ไม่ระบุจำนวนอุปกรณ์

## notes.source8
EN: 3.5 and 4.5 GHz give ecosystem figures for 2022 and 2026 without naming a unit; this page reads them as devices. 3.5 GHz also says around 260 networks by early 2025 and approximately 302 in 2026.
TH: 3.5 และ 4.5 GHz ให้ตัวเลข Ecosystem ปี 2022 และ 2026 โดยไม่บอกหน่วย หน้านี้อ่านตัวเลขเหล่านี้เป็นจำนวนอุปกรณ์ และ 3.5 GHz ให้ตัวเลขราว 260 เครือข่ายเมื่อต้นปี 2025 และประมาณ 302 ในปี 2026

## notes.source9
EN: 2.6 GHz: the first diagram row is labelled "FDD / TDD" while its outer blocks carry uplink and downlink arrows and the middle block is TDD.
TH: 2.6 GHz: แถวแรกของแผนภาพระบุ "FDD / TDD" ขณะที่บล็อกด้านนอกมีลูกศรขาขึ้นและขาลง และบล็อกตรงกลางเป็น TDD

## notes.source10
EN: The mid-band ruler on the overview page differs from the band pages in places, for example 1.4-1.5 GHz against 1427-1518 MHz, and 6.425-7.1 against 6.425-7.125 GHz. It also shows a 4.8 GHz band and a lower 6 GHz band that have no band page.
TH: ไม้บรรทัดย่านกลางในหน้าภาพรวมต่างจากหน้าของแต่ละย่านในบางจุด เช่น 1.4-1.5 GHz เทียบกับ 1427-1518 MHz และ 6.425-7.1 เทียบกับ 6.425-7.125 GHz และยังแสดงย่าน 4.8 GHz และ 6 GHz ช่วงล่างที่ไม่มีหน้าของตนเอง

## notes.source11
EN: 800 MHz: the text gives 790-862 MHz for WRC-07; the band's range and ruler start at 791 MHz.
TH: 800 MHz: ข้อความในรายงานให้ช่วง 790-862 MHz สำหรับ WRC-07 แต่ช่วงความถี่ของย่านและไม้บรรทัดเริ่มที่ 791 MHz

## notes.source12
EN: 700 MHz: about 170 4G plus about 90 5G networks make 260, against 261 in total (rounded figures).
TH: 700 MHz: เครือข่าย 4G ราว 170 และ 5G ราว 90 รวมเป็น 260 เทียบกับยอดรวม 261 (ตัวเลขปัดเศษ)

## notes.source13
EN: The introduction speaks of 4.7 billion mobile broadband subscribers; the infographic says 4.7 billion unique mobile subscribers.
TH: บทนำระบุผู้ใช้บรอดแบนด์มือถือ 4.7 พันล้านราย ส่วนอินโฟกราฟิกระบุผู้ใช้มือถือที่ไม่ซ้ำกัน (unique) 4.7 พันล้านราย

## notes.source14
EN: AWS is titled "1700-2100 MHz" in the index and "1700/2100 MHz" on its own page.
TH: AWS ใช้ชื่อ "1700-2100 MHz" ในสารบัญ และ "1700/2100 MHz" ในหน้าของตนเอง

## notes.source15
EN: 26 GHz (24.25-27.5) and 28 GHz (26.5-29.5) overlap between 26.5 and 27.5 GHz; the report says the lower part of 28 GHz falls under the 26 GHz range.
TH: 26 GHz (24.25-27.5) และ 28 GHz (26.5-29.5) ซ้อนกันระหว่าง 26.5 ถึง 27.5 GHz โดยรายงานระบุว่าส่วนล่างของ 28 GHz อยู่ภายใต้ช่วง 26 GHz

## notes.source17
EN: Conference names are written in different styles in the report (WRC-07, WRC07, WARC-92, WARC-1992, WRC-2000).
TH: รายงานเขียนชื่อการประชุมหลายรูปแบบ (WRC-07, WRC07, WARC-92, WARC-1992, WRC-2000)

## credits.title
EN: Credits
TH: เครดิต

## credits.digest
> New block, first in the credits list.
EN: This digest was prepared at NBTC. It is not a GSMA publication.
TH: สื่อย่อความนี้จัดทำขึ้นที่ กสทช. ไม่ใช่สิ่งพิมพ์ของ GSMA

## credits.report
EN: GSMA, Mobile Spectrum Report, 2026 Edition, October 2026. The bands, ranges, figures and statements on this page come from this report. Wavelengths and a few sizes are calculated (see notes), the glossary explanations are ours, and map region outlines come from ITU and Natural Earth.
TH: GSMA, Mobile Spectrum Report, 2026 Edition, ตุลาคม 2026 ย่านความถี่ ช่วงความถี่ ตัวเลข และข้อความในหน้านี้มาจากรายงานฉบับนี้ ส่วนความยาวคลื่นและขนาดคลื่นบางค่าเป็นค่าที่คำนวณเอง (ดูหมายเหตุ) คำอธิบายในอภิธานศัพท์เขียนขึ้นเอง และเส้นขอบภูมิภาคบนแผนที่มาจาก ITU และ Natural Earth

## credits.data
EN: Network data: GSMA Spectrum Navigator, provided by GSMA Intelligence. Device data: GAMBoD database, provided by GSA.
TH: ข้อมูลเครือข่าย: GSMA Spectrum Navigator โดย GSMA Intelligence ข้อมูลอุปกรณ์: ฐานข้อมูล GAMBoD โดย GSA

## credits.map
EN: Map outlines: Natural Earth. ITU Radio Regulations regions: ITU.
TH: เส้นขอบแผนที่: Natural Earth ภูมิภาคตามข้อบังคับวิทยุ: ITU

## credits.images
EN: Illustrations were generated with an AI image model. They are not photographs and not from the report.
TH: ภาพประกอบสร้างด้วยโมเดลสร้างภาพ AI ไม่ใช่ภาพถ่ายและไม่ได้มาจากรายงาน

## credits.fonts
EN: Fonts: Instrument Serif, IBM Plex Sans, IBM Plex Sans Thai, JetBrains Mono, under the SIL Open Font License.
TH: ฟอนต์: Instrument Serif, IBM Plex Sans, IBM Plex Sans Thai, JetBrains Mono ภายใต้ SIL Open Font License

---

# Added by the page builder: words the page needs that were missing above

## ui.bandNav
> Name of the spectrum bar for screen readers (not shown).
EN: Bands on the spectrum
TH: ย่านความถี่บนสเปกตรัม

## ui.q.approximately
> Small word printed before a figure, e.g. "approximately 261 live networks". Keep it short.
EN: approximately
TH: ประมาณ

## ui.q.over
EN: over
TH: มากกว่า

## ui.q.around
EN: around
TH: ราว

## ui.q.about
EN: about
TH: ราว

## ui.q.nearly
EN: nearly
TH: เกือบ

## ui.q.just-over
EN: just over
TH: ราว
