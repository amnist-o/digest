# Page script — Spectrum Harmonization

How to edit this file:

- Every piece of text on the page is a block that starts with `##` and a short name, such as `## cover.title`. **Don't change the names**, because the page uses them to find the text.
- Under each name, edit the lines after `EN:` and `TH:`. A block can run over several lines; the text continues until the next `EN:`, `TH:` or `##`.
- **The Thai is only a rough draft. Please rewrite it freely.**
- Lines starting with `>` are notes for you (where the text appears and how long it can be). They never appear on the page.
- Numbers are written as Arabic numerals in both languages, so they match when the reader switches language. Years of conferences stay as Western years (WRC-2000, 1987); only the publication date on the cover uses the Buddhist era in Thai.
- To keep a word or name from being split across two lines, put `~` between its parts, for example `ย่าน~ความถี่`.
- Facts come only from the GSMA Mobile Spectrum Report 2026. If you change a sentence, keep to what the report says. Where the report contradicts itself, the page uses the wording as printed (see the `notes.source` blocks).
- Thai term choices (change them everywhere if you prefer another): harmonisation = **การประสานคลื่นความถี่ให้สอดคล้องกัน** (short form in headings: **การประสานคลื่นความถี่**); spectrum = คลื่นความถี่; band = ย่านความถี่; refarming = การปรับเปลี่ยนการใช้งาน (refarming); roadmap = แผนที่นำทาง (roadmap); footnote (in the Radio Regulations) = เชิงอรรถ; ecosystem (of devices) = ระบบนิเวศอุปกรณ์. Established English terms stay in Latin script: 5G, MHz, GHz, TDD, FDD, SDL, WRC-23, IMT, ITU, 3GPP, mmWave.
- The key `gloss.5G-NR` stands for the acronym "5G NR" (a key cannot contain a space).
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
EN: Ecosystem devices
TH: อุปกรณ์ใน Ecosystem

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
EN: calculated, not from the report
TH: จากการคำนวณ

## ui.uplink
> Band-plan diagram legend. Max ~16 characters.
EN: Uplink
TH: Uplink

## ui.downlink
EN: Downlink
TH: Downlink

## ui.tdd
> TDD = one channel shared between uplink and downlink. Max ~24 characters.
EN: TDD (shared channel)
TH: TDD (ช่องสัญญาณร่วม)

## ui.sdl
> SDL = supplemental downlink, extra download-only capacity.
EN: SDL (download only)
TH: SDL (เฉพาะ download)

## ui.gap
> Label on the empty space between uplink and downlink blocks.
EN: Duplex gap
TH: ช่องว่างระหว่าง uplink และ downlink

## ui.overview
> Small heading of the four text sections on a band page.
EN: Overview
TH: ภาพรวม

## ui.harmonisation
EN: Harmonisation
TH: Harmonisation

## ui.ecosystem
EN: Networks and ecosystem
TH: เครือข่ายและ ecosystem

## ui.future
EN: Future development
TH: แนวโน้มในอนาคต

## ui.where
> Heading above the list next to the map.
EN: Where
TH: สถานที่

## ui.when
> Heading above the conference timeline.
EN: When
TH: กรอบเวลา

## ui.legend.use
> Map legend: the three levels, from strongest to lightest. Keep each under ~28 characters.
> Solid colour: the report says networks use the band here.
EN: In use
TH: ใช้งานแล้ว

## ui.legend.plan
> Striped: the report says the band is assigned, licensed, being developed or on a roadmap here, but not that it is in use.
EN: Assigned or planned
TH: จัดสรรแล้วหรืออยู่ในแผน

## ui.legend.identified
> Light tint: identified or harmonised for mobile here (at a WRC or by a regional agreement).
EN: Identified or harmonised
TH: ระบุหรือประสานแล้ว

## ui.legend.note
> Small print under the list of places.
EN: Regions are drawn approximately: the report names them but does not list their countries.
TH: ขอบเขตภูมิภาคเป็นการประมาณ รายงานระบุชื่อภูมิภาคแต่ไม่ได้ระบุรายชื่อประเทศ

## ui.legend.global
EN: Identified globally
TH: เหมาะสำหรับการใช้งาน IMT ทั่วโลก

## ui.legend.partial
> Map legend for a dashed outline: the report says only "parts of" or "some countries in" this region. Max ~36 characters.
EN: Only some countries here (not named)
TH: บางส่วนของภูมิภาคนี้ (ไม่ระบุ)

## ui.approx
> Short tag on map areas that the report does not define precisely.
EN: approximate
TH: โดยประมาณ

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
EN: Why aligning mobile bands across countries matters, and where each band stands today
TH: เหตุที่การจัดคลื่นความถี่มือถือให้สอดคล้องกันระหว่างประเทศสำคัญ และสถานะของคลื่นความถี่แต่ละย่านในปัจจุบัน

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
EN: 4.5 and 7-8 GHz: next space for mobile
TH: 4.5 และ 7-8 GHz: คลื่นย่านถัดไปของมือถือ

## spectrum.scaleNote
> Small caption under the axis. Max ~100 characters.
EN: Scale compressed and broken: three rulers joined end to end, each on a log scale.
TH: มาตราส่วนถูกย่อและตัดช่วง: ไม้บรรทัด 3 ช่วงต่อกัน แต่ละช่วงใช้มาตราส่วนลอการิทึม

## spectrum.wavelengthNote
> Caption under the wavelength ticks.
EN: Wavelength, calculated, not from the report
TH: ความยาวคลื่นจากการคำนวณ

---

# 3. Why harmonise

## why.title
> Headline of the view.
EN: Why harmonise spectrum
TH: ทำไมต้องมี spectrum harmonization
 
## why.lede
> One or two lines under the headline.
EN: Aligning how bands are used across markets creates scale, and scale makes mobile connectivity more accessible.
TH: การที่หลายตลาดใช้ย่านความถี่สอดคล้องกัน จะทำให้ตลาดกว้างขึ้นและส่งผลให้การเชื่อมต่อมือถือเข้าถึงได้ง่ายขึ้น

## why.p1.title
> Short heading. Max ~30 characters.
EN: Scale lowers cost
TH: ขนาดตลาดช่วยลดต้นทุน

## why.p1.body
> Max ~35 words.
EN: Using the same spectrum across markets reduces costs and broadens the ecosystem of devices and networks, which makes mobile connectivity more accessible.
TH: การใช้คลื่นความถี่ตรงกันในหลายตลาดช่วยลดต้นทุนและขยาย ecosystem ของอุปกรณ์และเครือข่าย ทำให้เข้าถึงการเชื่อมต่อมือถือได้ง่ายขึ้น

## why.p2.title
EN: Confidence to invest
TH: ความมั่นใจในการลงทุน

## why.p2.body
EN: Technology developers and manufacturers invest and innovate when they know they will have access to larger markets.
TH: ผู้พัฒนาเทคโนโลยีและผู้ผลิตอุปกรณ์กล้าลงทุนและสร้างนวัตกรรม เมื่อมั่นใจว่าจะเข้าถึงตลาดที่ใหญ่ขึ้นได้

## why.p3.title
EN: A shared framework
TH: กรอบร่วมกัน

## why.p3.body
EN: Harmonisation does not mean every country uses the same portfolio of spectrum. It gives countries a shared framework to benefit from global scale while meeting local needs.
TH: Spectrum Harmonization ไม่ได้หมายความว่าทุกประเทศต้องใช้ชุดคลื่นความถี่เหมือนกัน แต่เป็นกรอบร่วมที่ให้แต่ละประเทศได้ประโยชน์จากขนาดตลาดโลก ขณะที่ยังตอบโจทย์ความต้องการในประเทศ

## why.figure.caption
> Caption under the figure of waves sliding into line. Max ~90 characters.
EN: Many separate uses, brought into one shared pattern.
TH: การใช้งานที่แตกต่างกัน ปรับให้อยู่ในรูปแบบเดียวกัน

## why.stat1.label
> Label under the first headline number (4.7 billion). Max ~50 characters.
EN: mobile subscribers worldwide
TH: ผู้ใช้บริการมือถือทั่วโลก

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
TH: 11.3 ล้านล้านดอลลาร์สหรัฐ

## why.stat3.label
> Under "57%".
EN: of mobile connections forecast to be on 5G by 2030
TH: ของการเชื่อมต่อมือถือ คาดว่าจะเป็น 5G ภายในปี 2030

## why.stat3.value
> The headline number itself, as printed above the label.
EN: 57%
TH: 57%

## why.stat4.label
> Under "more than 80%".
EN: of the world's population in countries now supporting upper 6 GHz for mobile
TH: ของประชากรโลกอยู่ในประเทศในปัจจุบัน รองรับคลื่นย่าน upper 6 GHz สำหรับมือถือ

## why.stat4.value
> The headline number itself, as printed above the label.
EN: more than 80%
TH: มากกว่า 80%

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
TH: ความครอบคลุม

## kinds.low.body
> Two lines.
EN: Below 1 GHz, signals travel further and penetrate well into buildings. That makes low bands essential for coverage in thinly populated areas and indoors in built-up areas.
TH: คลื่นย่านต่ำกว่า 1 GHz เดินทางได้ไกลกว่าย่านสูงและทะลุเข้าอาคารได้ดี ย่านความถี่ต่ำจึงจำเป็นต่อการขยายความครอบคลุมในพื้นที่ประชากรเบาบางและในอาคารของเขตชุมชนหนาแน่น

## kinds.low.fact
> One figure from the report. Max ~100 characters.
EN: An additional 50 MHz of sub-1 GHz spectrum is linked to 7 percentage points more 4G coverage and 11 more 5G coverage.
TH: คลื่น sub-1 GHz อีก 50 MHz เกี่ยวข้องกับความครอบคลุม 4G ที่เพิ่ม 7 เปอร์เซ็นต์ และ 5G เพิ่ม 11 เปอร์เซ็นต์

## kinds.mid.name
EN: Mid-bands
TH: ย่านความถี่กลาง

## kinds.mid.role
EN: City-wide capacity
TH: Capacity ทั่วเมือง

## kinds.mid.body
EN: Mid-bands offer city-wide capacity for fast, reliable connectivity in densely populated areas, for consumer and enterprise uses such as mobile broadband, IoT and smart cities.
TH: ย่านความถี่กลางมีบทบาทในการให้ capacity ทั่วทั้งเมือง รองรับการเชื่อมต่อที่เร็วและเสถียรในพื้นที่ประชากรหนาแน่น ทั้งการใช้งานของผู้บริโภคและภาคธุรกิจ เช่น อินเทอร์เน็ตมือถือ IoT และเมืองอัจฉริยะ

## kinds.mid.fact
EN: If mid-band spectrum stays at today's levels, cities holding over 50% of the world's urban population will be capacity-constrained by 2030.
TH: หากคลื่นย่านกลางคงที่เท่าปัจจุบัน เมืองที่มีประชากรเมืองเกินร้อยละ 50 ของโลกจะประสบปัญหาความจุไม่พอภายในปี 2030

## kinds.high.name
EN: High bands
TH: ย่านความถี่สูง

## kinds.high.role
EN: Hotspots
TH: จุดหนาแน่น

## kinds.high.body
EN: High bands, often called millimetre wave (mmWave), provide very high-capacity hotspots in dense urban settings such as stadia, logistics hubs and busy city centres.
TH: ย่านความถี่สูงหรือที่เรียกว่าคลื่นมิลลิเมตร (mmWave) ให้ความจุสูงมากเฉพาะจุดในเมืองหนาแน่น เช่น สนามกีฬา ศูนย์โลจิสติกส์ และใจกลางเมืองที่คับคั่ง

## kinds.high.fact
EN: To date, mobile operators have been cautious over mmWave but are starting to consider wider use.
TH: ที่ผ่านมาผู้ให้บริการมือถือยังระมัดระวังเรื่อง mmWave แต่เริ่มพิจารณาใช้งานในวงกว้างขึ้น

---

# 5. Band pages

> Each band page has six blocks: title, lede, overview, harmonisation, ecosystem, future. Each of the four text sections is limited to 45 English words so the page fits one screen. The two big figures (networks and devices) are shown by the page itself, so the ecosystem text adds what the report says around them.

## page.600-mhz.title
> The band name as the report prints it.
EN: 600 MHz
TH: 600 MHz

## page.600-mhz.lede
> One line, max 16 words: what the band is for.
EN: Extra wide-area coverage and capacity on top of existing low bands.
TH: ให้ความครอบคลุมพื้นที่กว้างและความจุเพิ่มเติมจากย่านความถี่ต่ำที่มีอยู่

## page.600-mhz.overview
EN: Used for 5G, with 6G to follow. It covers wide areas with fewer base stations and adds 35-50% capacity on existing low bands. It also supports IoT. n71 is assigned and used in regions including North America, the Caribbean and the Middle East.
TH: ใช้สำหรับ 5G และพัฒนาต่อไปสู่ 6G ครอบคลุมพื้นที่กว้างด้วยสถานีฐานที่น้อยลง เพิ่มความจุอีก 35-50% จากย่านความถี่ต่ำที่มีอยู่ และรองรับ IoT โดย n71 ได้รับการจัดสรรและใช้งานในภูมิภาคต่าง ๆ รวมถึงอเมริกาเหนือ แคริบเบียน และตะวันออกกลาง

## page.600-mhz.harmonisation
EN: Harmonised region by region at several WRCs. WRC-15 made provisions for parts of ITU Regions 2 and 3, and more countries have joined since. WRC-23 widened the footnotes for some Region 1 countries. WRC-31 may return to it.
TH: Harmonize เป็นรายภูมิภาคในการประชุม WRC หลายครั้ง ใน WRC-15 มีบางประเทศใน ITU Region 2 และ 3 กำหนดให้ย่านนี้เหมาะกับการใช้งาน IMT และมีประเทศทยอยเข้าร่วม ใน WRC-23 มีบางประเทศใน Region 1 ร่วมกำหนดคลื่นนี้สำหรับ IMT และใน WRC-31 อาจมีการหารือเรื่องนี้เพิ่มเติม

## page.600-mhz.ecosystem
EN: The device figure counts n71 only. The n105 plan, being developed particularly in APAC and adding 2 x 5 MHz, has significant potential because it may be used in some of the world's most populous countries.
TH: ตัวเลขอุปกรณ์นับเฉพาะ n71 ส่วน n105 กำลังพัฒนาโดยเฉพาะในเอเชียแปซิฟิก n105 มีการเพิ่มความจุ 2 x 5 MHz จึงมีศักยภาพสูง เพราะอาจถูกใช้ในประเทศที่มีประชากรมากติดอันดับโลก

## page.600-mhz.future
EN: Expected to expand globally as the next way to add capacity where networks rely on low bands. Provisions already exist in the Radio Regulations, and countries may add their names to existing footnotes.
TH: คาดว่าจะขยายทั่วโลกเป็นทางเลือกถัดไปในการเพิ่มความจุในพื้นที่ที่พึ่งพาย่านความถี่ต่ำ ข้อบังคับวิทยุมีบทบัญญัติรองรับอยู่แล้ว และประเทศต่าง ๆ เข้ามาเป็นส่วนหนึ่งของกลุ่มที่ใช้งานคลื่นนี้สำหรับ IMT

## page.700-mhz.title
EN: 700 MHz
TH: 700 MHz

## page.700-mhz.lede
EN: Wide coverage for 4G and 5G, adding rural broadband capacity.
TH: ให้ coverage กว้างสำหรับ 4G และ 5G และเพิ่มความจุบรอดแบนด์ในชนบท

## page.700-mhz.overview
EN: Provides wide coverage for 4G and 5G. Harmonised in all three ITU Regions across several WRCs, it is heavily used all over the world to add mobile broadband capacity in rural areas.
TH: ให้ความครอบคลุมกว้างสำหรับ 4G และ 5G ประสานครบทั้ง 3 ITU Region ผ่านการประชุม WRC หลายครั้ง จึงใช้กันหนาแน่นทั่วโลกเพื่อเพิ่มความจุบรอดแบนด์มือถือในชนบท

## page.700-mhz.harmonisation
EN: Asia Pacific and Latin America have 2 x 45 MHz. Region 1 uses a 2x30 MHz FDD plan plus 20 MHz of SDL. The US and Canada use a different 80 MHz plan. Decisions came at WRC-07, WRC-12 and WRC-15.
TH: เอเชียแปซิฟิกและละตินอเมริกามี 2 x 45 MHz Region 1 ใช้แผน FDD 2x30 MHz พร้อม SDL อีก 20 MHz สหรัฐฯ และแคนาดาใช้แผนอื่นรวม 80 MHz ตัดสินใจใน WRC-07 WRC-12 และ WRC-15

## page.700-mhz.ecosystem
EN: Around 170 of the networks run 4G and around 90 run 5G, so the band serves both generations. The b103 band, inside 700 MHz, is used for certain NB-IoT applications.
TH: เครือข่ายราว 170 รายเป็น 4G และราว 90 รายเป็น 5G ย่านความถี่นี้จึงรองรับทั้งสองยุค นอกจากนี้ b103 ซึ่งอยู่ในย่าน 700 MHz ใช้กับงาน NB-IoT บางประเภท

## page.700-mhz.future
EN: Used for 4G in some countries and 5G in others, and expected to be refarmed (moved to newer technology) for 6G. Countries yet to assign it to operators can add it to their spectrum roadmaps.
TH: บางประเทศใช้กับ 4G บางประเทศใช้กับ 5G และคาดว่าจะมีการปรับเปลี่ยนการใช้งาน (refarming) สู่ 6G ประเทศที่ยังไม่จัดสรรให้ผู้ให้บริการสามารถบรรจุไว้ในแผนที่นำทางคลื่นความถี่ได้

## page.800-mhz.title
EN: 800 MHz
TH: 800 MHz

## page.800-mhz.lede
EN: The original digital dividend band in Region 1, widely assigned across EMEA.
TH: ย่าน digital dividend ดั้งเดิมของ Region 1 ที่จัดสรรกันอย่างกว้างขวางทั่ว EMEA

## page.800-mhz.overview
EN: The original "digital dividend" band in Region 1. It has served many technologies up to and including 5G and is widely assigned throughout EMEA.
TH: ย่าน "digital dividend" ดั้งเดิมของ Region 1 ใช้กับเทคโนโลยีหลายรุ่นจนถึง 5G และจัดสรรกันอย่างกว้างขวางทั่ว EMEA

## page.800-mhz.harmonisation
EN: The band stems from WRC-07, when 790-862 MHz was first allocated to the mobile service and identified for IMT in Region 1. Use then spread rapidly across EMEA for 4G launches.
TH: ย่านความถี่นี้มีที่มาจาก WRC-07 ซึ่งกำหนด 790-862 MHz ให้บริการเคลื่อนที่เป็นครั้งแรกและระบุเป็น IMT ใน Region 1 หลังจากนั้นการใช้งานขยายอย่างรวดเร็วทั่ว EMEA เพื่อเปิด 4G

## page.800-mhz.ecosystem
EN: Use is saturated in the EMEA markets able to use this band plan, and today it is almost entirely 4G. Some 5G networks exist.
TH: การใช้งานในตลาด EMEA ที่ใช้แผนย่านความถี่นี้ได้อิ่มตัวแล้ว และปัจจุบันเกือบทั้งหมดเป็น 4G แต่มีเครือข่าย 5G อยู่บ้าง

## page.800-mhz.future
EN: The band is expected to be refarmed for new technologies in the future.
TH: คาดว่าจะมีการปรับเปลี่ยนการใช้งาน (refarming) ไปสู่เทคโนโลยีใหม่ในอนาคต

## page.850-mhz.title
EN: 850 MHz
TH: 850 MHz

## page.850-mhz.lede
EN: The first cellular band across the Americas and parts of APAC.
TH: ย่านความถี่เซลลูลาร์แรกของทั้งทวีปอเมริกาและบางส่วนของเอเชียแปซิฟิก

## page.850-mhz.overview
EN: The first cellular band throughout the Americas and in parts of APAC. It has been used for multiple technologies up to and including 5G.
TH: ย่านความถี่เซลลูลาร์แรกของทั่วทวีปอเมริกาและบางส่วนของเอเชียแปซิฟิก ใช้กับเทคโนโลยีหลายรุ่นจนถึง 5G

## page.850-mhz.harmonisation
EN: The 806-960 MHz range, which includes today's 850 MHz band, was identified globally for IMT at WRC-2000. That set the basis for international harmonisation of the band for 3G.
TH: ช่วง 806-960 MHz ซึ่งรวมย่าน 850 MHz ในปัจจุบัน ถูกระบุเป็น IMT ทั่วโลกใน WRC-2000 ซึ่งวางรากฐานการประสานย่านความถี่ระหว่างประเทศสำหรับ 3G

## page.850-mhz.ecosystem
EN: Several 3GPP definitions cover this range: b5, b18, b19, b26, n5, n18, n26 and n89.
TH: 3GPP กำหนดหลายย่านย่อยในช่วงนี้ ได้แก่ b5 b18 b19 b26 n5 n18 n26 และ n89

## page.850-mhz.future
EN: Used today across technologies from 2G to 5G. It is not yet widely used as a 5G band, although some networks do exist.
TH: ปัจจุบันใช้กับเทคโนโลยีตั้งแต่ 2G ถึง 5G ยังไม่แพร่หลายนักในฐานะย่าน 5G แม้จะมีเครือข่ายบางส่วนอยู่แล้ว

## page.900-mhz.title
EN: 900 MHz
TH: 900 MHz

## page.900-mhz.lede
EN: The original GSM band, still the most widely used mobile band.
TH: ย่านความถี่ GSM ดั้งเดิม และยังเป็นย่านที่ใช้แพร่หลายที่สุดของมือถือ

## page.900-mhz.overview
EN: The original GSM band, deployed in Regions 1, 2 (Latin America) and 3, and used for multiple technologies up to 5G. In Regions 2 and 3, some countries mixed 900 MHz and 850 MHz assignments.
TH: ย่านความถี่ GSM ดั้งเดิม ใช้ใน Region 1, 2 (ละตินอเมริกา) และ 3 กับเทคโนโลยีหลายรุ่นจนถึง 5G ใน Region 2 และ 3 บางประเทศจัดสรรผสมระหว่าง 900 MHz และ 850 MHz

## page.900-mhz.harmonisation
EN: Its 1987 use for GSM in certain European countries made it the earliest mobile band harmonised across borders. WRC-2000 later brought it into the IMT family (3G and beyond).
TH: การใช้สำหรับ GSM ในบางประเทศยุโรปเมื่อปี 1987 ทำให้เป็นย่านความถี่มือถือแรกที่ประสานข้ามพรมแดน ต่อมา WRC-2000 รวมเข้าเป็นส่วนหนึ่งของ IMT (3G ขึ้นไป)

## page.900-mhz.ecosystem
EN: Still the most widely used mobile band today, carrying all technologies. A significant number of operators also use it for 4G.
TH: ปัจจุบันยังเป็นย่านความถี่มือถือที่ใช้แพร่หลายที่สุด รองรับทุกเทคโนโลยี และผู้ให้บริการจำนวนมากใช้กับ 4G ด้วย

## page.900-mhz.future
EN: Often still anchored to older generations: more widely a coverage layer for 2G and 3G, and used for 5G in some cases.
TH: มักยังผูกอยู่กับเทคโนโลยีรุ่นเก่า โดยใช้เป็นชั้นความครอบคลุมของ 2G และ 3G เป็นหลัก และใช้กับ 5G ในบางกรณี

## page.1500-mhz.title
EN: 1500 MHz
TH: 1500 MHz

## page.1500-mhz.lede
EN: Wide-area coverage with the best propagation of any mid-band identified for mobile.
TH: ครอบคลุมพื้นที่กว้าง และสัญญาณเดินทางได้ดีที่สุดในบรรดาย่านกลางที่ระบุสำหรับมือถือ

## page.1500-mhz.overview
EN: Three band plans: FDD (paired frequencies), SDL (download only) and TDD (one shared channel). It gives wide-area coverage and, although above 1 GHz, the best propagation of any mid-band identified for mobile.
TH: มี 3 แผน ได้แก่ FDD (ความถี่คู่) SDL (ขาลงอย่างเดียว) และ TDD (ช่องสัญญาณร่วม) ให้ความครอบคลุมพื้นที่กว้าง และแม้อยู่เหนือ 1 GHz ก็เดินทางได้ดีที่สุดในย่านกลางที่ระบุสำหรับมือถือ

## page.1500-mhz.harmonisation
EN: Harmonised at WRC-15, after Japan already used it with FDD, and in Regions 2 and 3. In Region 1 only parts are harmonised. The Arab Spectrum Management Group harmonised it for TDD, and Europe for SDL.
TH: ประสานใน WRC-15 หลังจากญี่ปุ่นใช้แบบ FDD อยู่แล้ว และประสานใน Region 2 และ 3 ส่วน Region 1 ประสานเพียงบางส่วน กลุ่ม Arab Spectrum Management Group กำหนดสำหรับ TDD และยุโรปกำหนดสำหรับ SDL

## page.1500-mhz.ecosystem
EN: FDD LTE runs in Japan and SDL LTE in Europe, and SDL networks are beginning to use 5G products. Technical and regulatory conditions were finalised ahead of WRC-23.
TH: ญี่ปุ่นใช้ FDD LTE และยุโรปใช้ SDL LTE โดยเครือข่าย SDL เริ่มใช้ผลิตภัณฑ์ 5G เงื่อนไขทางเทคนิคและกำกับดูแลสรุปก่อน WRC-23

## page.1500-mhz.future
EN: Its future lies in 5G. TDD development is expected in the next year, both in the Arab world, which has led work on TDD 1500 MHz, and in other countries; Indonesia auctioned the band for TDD. India and Brazil have it on the roadmap.
TH: อนาคตอยู่ที่ 5G คาดว่า TDD จะพัฒนาในปีหน้า ทั้งในโลกอาหรับซึ่งเป็นผู้นำงาน TDD 1500 MHz และในประเทศอื่น เช่น อินโดนีเซียที่ประมูลย่านนี้สำหรับ TDD แล้ว อินเดียและบราซิลบรรจุไว้ในแผนที่นำทาง

## page.1800-2100.title
> Grouped page: both bands in one title.
EN: 1800 MHz · 2.1 GHz
TH: 1800 MHz · 2.1 GHz

## page.1800-2100.lede
EN: Two widely used mid-bands, refarmed from earlier generations to 4G and 5G.
TH: ย่านกลางที่ใช้กันแพร่หลาย 2 ย่าน ปรับเปลี่ยนจากยุคก่อนหน้าสู่ 4G และ 5G

## page.1800-2100.overview
EN: 1800 MHz is used extensively worldwide, by 5G and earlier technologies. 2.1 GHz began as the primary 3G band (UMTS/WCDMA) in Europe, Asia and other regions, balancing wide coverage with reasonable capacity.
TH: 1800 MHz ใช้กว้างขวางทั่วโลกทั้งกับ 5G และเทคโนโลยีรุ่นก่อน ส่วน 2.1 GHz เริ่มจากเป็นย่านหลักของ 3G (UMTS/WCDMA) ในยุโรป เอเชีย และภูมิภาคอื่น ให้สมดุลระหว่างความครอบคลุมและความจุ

## page.1800-2100.harmonisation
EN: 1800 MHz was identified for IMT at WRC-2000 and 2.1 GHz globally at WARC-92. Both fall within the globally identified 1710-2025 and 2110-2200 MHz ranges, where band plans form two groups (1800 MHz / 2.1 GHz and AWS / PCS), each with regional harmonisation.
TH: 1800 MHz ระบุเป็น IMT ใน WRC-2000 และ 2.1 GHz ระบุทั่วโลกใน WARC-92 ทั้งคู่อยู่ในช่วง 1710-2025 และ 2110-2200 MHz ที่ระบุทั่วโลก ซึ่งแผนย่านความถี่แบ่งเป็น 2 กลุ่ม (1800 MHz / 2.1 GHz และ AWS / PCS) และแต่ละกลุ่มประสานในระดับภูมิภาค

## page.1800-2100.ecosystem
EN: The report links this harmonisation to economies of scale, lower device and infrastructure costs and faster rollouts, and to a large device ecosystem across generations. For 2.1 GHz, it describes a smooth evolution from 3G to LTE and 5G.
TH: รายงานโยงการประสานนี้กับการประหยัดต่อขนาด ต้นทุนอุปกรณ์และโครงข่ายที่ต่ำลง การติดตั้งที่เร็วขึ้น และระบบนิเวศอุปกรณ์ขนาดใหญ่ข้ามหลายยุค ส่วน 2.1 GHz รายงานระบุว่าพัฒนาจาก 3G สู่ LTE และ 5G อย่างราบรื่น

## page.1800-2100.future
EN: 1800 MHz stays important as operators refarm it from GSM to LTE and 5G NR. 2.1 GHz is being refarmed for 5G in many markets; protecting it from interference, including from new mobile satellite allocations at WRC-27, is a priority.
TH: 1800 MHz ยังสำคัญเมื่อผู้ให้บริการปรับจาก GSM เป็น LTE และ 5G NR ส่วน 2.1 GHz กำลังถูกปรับสู่ 5G ในหลายตลาด การป้องกันการรบกวน รวมถึงจากการกำหนดคลื่นดาวเทียมเคลื่อนที่ใหม่ใน WRC-27 เป็นเรื่องเร่งด่วน

## page.pcs-aws.title
EN: PCS · AWS
TH: PCS · AWS

## page.pcs-aws.lede
EN: Two Americas-centred mid-bands, carried forward to 5G.
TH: ย่านกลาง 2 ย่านที่ใช้หนาแน่นในทวีปอเมริกา และพัฒนาต่อสู่ 5G

## page.pcs-aws.overview
EN: PCS (Personal Communications Service) sits within 1900 MHz and remains core to mobile, mostly in the Americas and the Caribbean. AWS (Advanced Wireless Services), mainly 1.7-2.1 GHz, began in the US and parts of the Americas.
TH: PCS (Personal Communications Service) อยู่ในย่าน 1900 MHz และยังเป็นส่วนหลักของบริการมือถือ ส่วนใหญ่ในทวีปอเมริกาและแคริบเบียน ส่วน AWS (Advanced Wireless Services) หลัก ๆ ที่ 1.7-2.1 GHz เริ่มในสหรัฐฯ และบางส่วนของทวีปอเมริกา

## page.pcs-aws.harmonisation
EN: Both were identified for IMT at WARC-1992 and WRC-2000. AWS is harmonised primarily across the Americas, not globally, through the CITEL framework and 3GPP Band 4 and n66.
TH: ทั้งสองระบุเป็น IMT ใน WARC-1992 และ WRC-2000 โดย AWS ประสานเป็นหลักในทวีปอเมริกา ไม่ใช่ทั่วโลก ผ่านกรอบ CITEL และมาตรฐาน 3GPP Band 4 กับ n66

## page.pcs-aws.ecosystem
EN: The report describes strong device support for PCS, and credits technology-neutral licences and a large base of AWS-capable devices with making the move from LTE to 5G cost-effective. AWS-1 pairs 1710-1755 and 2110-2155 MHz.
TH: รายงานระบุว่า PCS มีอุปกรณ์รองรับมาก และให้เครดิตใบอนุญาตที่เป็นกลางทางเทคโนโลยีกับฐานอุปกรณ์ AWS ขนาดใหญ่ว่าทำให้การเปลี่ยนจาก LTE เป็น 5G คุ้มค่า AWS-1 จับคู่ 1710-1755 และ 2110-2155 MHz

## page.pcs-aws.future
EN: PCS is a cost-effective anchor for 5G. AWS stays important for 5G in the Americas, often combined with 2.5 and 3.5 GHz; growth in ultra-high capacity will come from upper mid-bands and mmWave.
TH: PCS เป็นฐานที่คุ้มค่าสำหรับ 5G ส่วน AWS ยังสำคัญสำหรับ 5G ในทวีปอเมริกา มักใช้ร่วมกับ 2.5 และ 3.5 GHz การเติบโตด้านความจุสูงพิเศษจะมาจากย่านกลางช่วงบนและ mmWave

## page.2-3-ghz.title
EN: 2.3 GHz
TH: 2.3 GHz

## page.2-3-ghz.lede
EN: A low-frequency TDD band balancing capacity and propagation.
TH: ย่าน TDD ความถี่ค่อนข้างต่ำ ที่สมดุลระหว่างความจุและการเดินทางของสัญญาณ

## page.2-3-ghz.overview
EN: One of the lowest-frequency TDD bands (one channel shared between uplink and downlink). It balances capacity with good propagation and is widely used for both 4G and 5G.
TH: เป็นหนึ่งในย่าน TDD ที่ความถี่ต่ำที่สุด (ใช้ช่องสัญญาณเดียวร่วมกันระหว่างขาขึ้นและขาลง) ให้สมดุลระหว่างความจุและการเดินทางของสัญญาณที่ดี ใช้แพร่หลายทั้ง 4G และ 5G

## page.2-3-ghz.harmonisation
EN: First identified for IMT at WRC-07. Its global harmonisation lets operators in many countries deploy LTE and 5G with the same band plan, supporting economies of scale and simpler roaming.
TH: ระบุเป็น IMT ครั้งแรกใน WRC-07 การประสานทั่วโลกทำให้ผู้ให้บริการในหลายประเทศใช้แผนย่านความถี่เดียวกันสำหรับ LTE และ 5G ช่วยการประหยัดต่อขนาดและการโรมมิ่งที่ง่ายขึ้น

## page.2-3-ghz.ecosystem
EN: Used for both 4G and 5G, with carrier aggregation compatibility (using it together with other bands) expanding.
TH: ใช้ทั้ง 4G และ 5G โดยความเข้ากันได้กับการรวมคลื่น (carrier aggregation หรือการใช้ร่วมกับย่านอื่น) กำลังขยายตัว

## page.2-3-ghz.future
EN: Will stay important for TDD-based 4G and 5G. It offers an extra 100 MHz channel at lower frequencies than many TDD mid-bands, and can support 5G's evolution alongside other bands.
TH: ยังสำคัญสำหรับ 4G และ 5G แบบ TDD ให้ช่องสัญญาณเพิ่ม 100 MHz ที่ความถี่ต่ำกว่าย่าน TDD กลางหลายย่าน และใช้ร่วมกับย่านอื่นในการพัฒนา 5G ต่อไปได้

## page.2-6-ghz.title
EN: 2.6 GHz
TH: 2.6 GHz

## page.2-6-ghz.lede
EN: Wide-bandwidth capacity for dense urban 5G.
TH: ความจุจากแบนด์วิดท์กว้างสำหรับ 5G ในเมืองหนาแน่น

## page.2-6-ghz.overview
EN: Used in two common variants: an early split FDD/TDD plan (n7/n38) and the later TDD n41 plan. It has been widely used for 4G expansion and for 5G.
TH: ใช้ใน 2 รูปแบบหลัก คือแผน FDD/TDD แบบแยกช่วงในยุคแรก (n7/n38) และแผน TDD n41 ในยุคหลัง ใช้กว้างขวางทั้งการขยาย 4G และ 5G

## page.2-6-ghz.harmonisation
EN: Harmonised globally for IMT at WRC-2000. Regional decisions on whether to use FDD or TDD will support roaming and help cross-border coordination.
TH: ประสานทั่วโลกเป็น IMT ใน WRC-2000 การตัดสินใจระดับภูมิภาคว่าจะใช้ FDD หรือ TDD จะช่วยการโรมมิ่งและการประสานงานข้ามพรมแดน

## page.2-6-ghz.ecosystem
EN: Widely deployed for LTE and 5G in many markets today, and the report points to its global device support.
TH: ปัจจุบันใช้งานกว้างขวางสำหรับ LTE และ 5G ในหลายตลาด และรายงานชี้ถึงการมีอุปกรณ์รองรับทั่วโลก

## page.2-6-ghz.future
EN: Its wide bandwidth and worldwide device support should keep it central to dense urban 5G, and let it link today's LTE networks to 6G.
TH: แบนด์วิดท์กว้างและอุปกรณ์ที่รองรับทั่วโลกจะทำให้ยังเป็นย่านสำคัญของ 5G ในเมืองหนาแน่น และเชื่อมเครือข่าย LTE ปัจจุบันไปสู่ 6G

## page.3-5-ghz.title
EN: 3.5 GHz
TH: 3.5 GHz

## page.3-5-ghz.lede
EN: The launch band for 5G, giving city-wide capacity.
TH: ย่านเปิดตัว 5G ที่ให้ความจุทั่วทั้งเมือง

## page.3-5-ghz.overview
EN: Broadly used as the launch range for 5G, for mobile broadband, fixed wireless access and industrial uses. Most networks use 3.3-3.8 GHz; some extend to 3.8-4.1 GHz. 3.8-4.2 GHz is being developed in leading markets.
TH: ใช้กว้างขวางเป็นย่านเปิดตัว 5G สำหรับบรอดแบนด์มือถือ fixed wireless access และงานอุตสาหกรรม เครือข่ายส่วนใหญ่ใช้ 3.3-3.8 GHz บางรายขยายถึง 3.8-4.1 GHz ส่วน 3.8-4.2 GHz กำลังพัฒนาในตลาดนำ

## page.3-5-ghz.harmonisation
EN: Planned over several WRC cycles from 2007 to 2023. All three ITU Regions allocated 3.5-3.8 GHz; Regions 1, 2 and part of 3 allocated 3.4-3.5 GHz; Regions 2 and 3 have a further primary mobile allocation at 3.8-4.2 GHz.
TH: วางแผนผ่านรอบ WRC หลายครั้งตั้งแต่ปี 2007 ถึง 2023 ทั้ง 3 ITU Region กำหนด 3.5-3.8 GHz Region 1, 2 และบางส่วนของ 3 กำหนด 3.4-3.5 GHz และ Region 2 กับ 3 มีการกำหนดเพิ่มที่ 3.8-4.2 GHz เป็นบริการหลัก

## page.3-5-ghz.ecosystem
EN: Over 90 countries have live 5G here, and more than 60% of global 5G launches rely on it. The ecosystem grew from just over 1300 in 2022 to over 3500 in 2026; around 260 networks were operating by early 2025.
TH: มากกว่า 90 ประเทศมี 5G ให้บริการในย่านนี้ และมากกว่า 60% ของการเปิดตัว 5G ทั่วโลกใช้ย่านนี้ ระบบนิเวศขยายจากราว 1300 ในปี 2022 เป็นกว่า 3500 ในปี 2026 และราว 260 เครือข่ายเปิดให้บริการแล้วเมื่อต้นปี 2025

## page.3-5-ghz.future
EN: Still being deployed and the primary band for 5G launches. Extending from 3.3-3.8 GHz into the upper part would give the 200-400 MHz channels required for 6G, but needs clearing and coordination with existing users.
TH: ยังอยู่ระหว่างติดตั้งและเป็นย่านหลักของการเปิดตัว 5G การขยายจาก 3.3-3.8 GHz ไปยังช่วงบนจะได้ช่องสัญญาณ 200-400 MHz ที่ 6G ต้องการ แต่ต้องเคลียร์คลื่นและประสานกับผู้ใช้เดิม

## page.4-5-ghz.title
EN: 4.5 GHz
TH: 4.5 GHz

## page.4-5-ghz.lede
EN: Higher-capacity mid-band for advanced 5G and early 6G.
TH: ย่านกลางความจุสูงกว่าสำหรับ 5G ขั้นสูงและ 6G ระยะแรก

## page.4-5-ghz.overview
EN: Typically 4.4-4.99 GHz, above the 3.5 GHz band, with larger contiguous blocks for advanced 5G and future 6G. It combines higher capacity with reasonable propagation, suiting dense urban deployments.
TH: โดยทั่วไปคือ 4.4-4.99 GHz อยู่เหนือย่าน 3.5 GHz มีบล็อกต่อเนื่องที่ใหญ่กว่าสำหรับ 5G ขั้นสูงและ 6G ในอนาคต ให้ความจุสูงกว่าโดยการเดินทางของสัญญาณยังพอเหมาะ จึงเหมาะกับเมืองหนาแน่น

## page.4-5-ghz.harmonisation
EN: 4.8-4.99 GHz was first identified for IMT at WRC-15, then expanded by many countries at WRC-19. 4.4-4.8 GHz is slated for discussion at WRC-27. 3GPP standardises it for 5G NR as n79.
TH: 4.8-4.99 GHz ระบุเป็น IMT ครั้งแรกใน WRC-15 และหลายประเทศขยายเพิ่มใน WRC-19 ส่วน 4.4-4.8 GHz กำหนดให้หารือใน WRC-27 3GPP กำหนดมาตรฐานสำหรับ 5G NR เป็น n79

## page.4-5-ghz.ecosystem
EN: The ecosystem grew from about 700 in 2022 to over 1500 in 2026, with strong device ecosystem support in markets including China, Japan and Korea. Several countries have licensed parts of the band for 5G.
TH: ระบบนิเวศขยายจากราว 700 ในปี 2022 เป็นกว่า 1500 ในปี 2026 โดยมีอุปกรณ์ในระบบนิเวศรองรับมากในตลาดต่าง ๆ รวมถึงจีน ญี่ปุ่น และเกาหลี และหลายประเทศออกใบอนุญาตบางส่วนของย่านนี้สำหรับ 5G แล้ว

## page.4-5-ghz.future
EN: Central to 5G-Advanced and early 6G. Use is greatest in Asia-Pacific, with growing interest in the US and parts of RCC. WRC-27 will discuss expanding mid-band capacity, including 4.5 GHz.
TH: เป็นหัวใจของ 5G-Advanced และ 6G ระยะแรก การใช้งานสูงสุดในเอเชียแปซิฟิก และความสนใจในสหรัฐฯ และบางส่วนของ RCC เพิ่มขึ้น WRC-27 จะหารือการขยายความจุย่านกลาง รวมถึง 4.5 GHz

## page.6-ghz.title
> The report's band is the upper part of 6 GHz.
EN: 6 GHz
TH: 6 GHz

## page.6-ghz.lede
EN: The next mid-band expansion, able to carry the wide channels 6G needs.
TH: ย่านกลางถัดไปที่จะขยาย รองรับช่องสัญญาณกว้างที่ 6G ต้องการ

## page.6-ghz.overview
EN: Seen by industry as the next expansion band, brought into development in the late 2020s or 2030s depending on the market. Upper 6 GHz (n104) will be able to deliver 6G's 200-400 MHz channels in many markets, and can reuse 3.5 GHz network grids.
TH: อุตสาหกรรมมองว่าเป็นย่านขยายถัดไป นำเข้าสู่การพัฒนาปลายทศวรรษ 2020 หรือช่วงทศวรรษ 2030 ตามแต่ละตลาด 6 GHz ช่วงบน (n104) จะให้ช่องสัญญาณ 200-400 MHz สำหรับ 6G ได้ในหลายตลาด และใช้ผังโครงข่าย 3.5 GHz ซ้ำได้

## page.6-ghz.harmonisation
EN: WRC-23 identified the band throughout EMEA and in some countries in APAC and the Americas, and agreed technical conditions for all regions. Countries with over 80% of the world's population now support upper 6 GHz for licensed mobile.
TH: WRC-23 ระบุย่านนี้ทั่ว EMEA และในบางประเทศในเอเชียแปซิฟิกและทวีปอเมริกา และตกลงเงื่อนไขทางเทคนิคสำหรับทุกภูมิภาค ประเทศที่มีประชากรกว่า 80% ของโลกสนับสนุน 6 GHz ช่วงบนสำหรับมือถือแล้ว

## page.6-ghz.ecosystem
EN: First commercial connections using customer-premises equipment (CPEs) were expected in 2026, with broad ecosystem deployment the following year. Some countries, including in the GCC and APAC regions, have already licensed the band.
TH: การเชื่อมต่อเชิงพาณิชย์ครั้งแรกด้วยอุปกรณ์ CPE คาดว่าจะเกิดในปี 2026 และขยายระบบนิเวศในวงกว้างในปีถัดไป บางประเทศ รวมถึงในกลุ่ม GCC และภูมิภาคเอเชียแปซิฟิก ออกใบอนุญาตย่านนี้แล้ว

## page.6-ghz.future
EN: Governments should consult industry on clear roadmaps for when the band comes into use. Some markets will need it later in the 2020s for 5G-Advanced; others will use it as the 6G launch band.
TH: รัฐบาลควรหารือกับอุตสาหกรรมเพื่อจัดทำแผนที่นำทางที่ชัดเจนว่าจะเริ่มใช้ย่านนี้เมื่อใด บางตลาดต้องการช่วงปลายทศวรรษ 2020 สำหรับ 5G-Advanced ขณะที่บางตลาดจะใช้เป็นย่านเปิดตัว 6G

## page.26-28-ghz.title
EN: 26 GHz · 28 GHz
TH: 26 GHz · 28 GHz

## page.26-28-ghz.lede
EN: Millimetre-wave bands for very high-capacity hotspots.
TH: ย่านคลื่นมิลลิเมตรสำหรับจุดที่ต้องการความจุสูงมาก

## page.26-28-ghz.overview
EN: 26 GHz is broadly harmonised for IMT, with large contiguous blocks; assignments are starting for stadia and transport hubs. 28 GHz is the original mmWave band, used in North America and South Korea, and is not used for wide-area coverage.
TH: 26 GHz ประสานเป็น IMT อย่างกว้างขวาง มีบล็อกต่อเนื่องขนาดใหญ่ และเริ่มจัดสรรสำหรับสนามกีฬาและศูนย์คมนาคม ส่วน 28 GHz เป็นย่าน mmWave ดั้งเดิมที่ใช้ในอเมริกาเหนือและเกาหลีใต้ และไม่ใช้ครอบคลุมพื้นที่กว้าง

## page.26-28-ghz.harmonisation
EN: 26 GHz was identified for IMT globally at WRC-19. The lower part of 28 GHz falls under that harmonised range; its upper part was used for the first US mmWave launches and is standardised by 3GPP.
TH: 26 GHz ระบุเป็น IMT ทั่วโลกใน WRC-19 ส่วนล่างของ 28 GHz อยู่ในช่วงที่ประสานนี้ ส่วนบนใช้เปิดตัว mmWave ครั้งแรกในสหรัฐฯ และ 3GPP กำหนดเป็นมาตรฐาน

## page.26-28-ghz.ecosystem
EN: 28 GHz has two device counts, one per 3GPP band: over 100 for n257 and over 170 for the US n261 subset. The report prints no network count for it.
TH: 28 GHz มีตัวเลขอุปกรณ์ 2 ค่า ตามย่าน 3GPP คือกว่า 100 สำหรับ n257 และกว่า 170 สำหรับ n261 ที่ใช้ในสหรัฐฯ รายงานไม่ระบุจำนวนเครือข่ายของย่านนี้

## page.26-28-ghz.future
EN: At 26 GHz, operators have been cautious over mmWave but are starting to consider wider use. 28 GHz, the first deployed mmWave band, is widely deployed in the US, where it is a specialised capacity layer in areas of very high demand.
TH: ที่ 26 GHz ผู้ให้บริการเคยระมัดระวังเรื่อง mmWave แต่เริ่มพิจารณาใช้ให้กว้างขึ้น ส่วน 28 GHz ซึ่งเป็นย่าน mmWave แรกที่ใช้งาน ถูกใช้อย่างแพร่หลายในสหรัฐฯ เป็นชั้นความจุเฉพาะทางในพื้นที่ที่มีความต้องการสูงมาก

## page.40-66-ghz.title
EN: 40 · 50 · 66 GHz
TH: 40 · 50 · 66 GHz

## page.40-66-ghz.lede
EN: Higher mmWave bands with little use so far.
TH: ย่าน mmWave ที่สูงขึ้นซึ่งยังมีการใช้งานน้อย

## page.40-66-ghz.overview
EN: 40 GHz is not widely used. 50 GHz is not currently used. 66 GHz is broadly harmonised for IMT but not currently used. All three may have future uses in high-density hotspots.
TH: 40 GHz ยังไม่แพร่หลาย 50 GHz ยังไม่มีการใช้งาน 66 GHz ประสานเป็น IMT อย่างกว้างขวางแต่ยังไม่มีการใช้งาน ทั้งสามย่านอาจใช้กับจุดความหนาแน่นสูงได้ในอนาคต

## page.40-66-ghz.harmonisation
EN: All at WRC-19: 40 GHz harmonised globally, 66 GHz identified globally, and 50 GHz harmonised in some countries.
TH: ทั้งหมดใน WRC-19 โดย 40 GHz ประสานทั่วโลก 66 GHz ระบุทั่วโลก และ 50 GHz ประสานในบางประเทศ

## page.40-66-ghz.ecosystem
EN: Only 40 GHz has live networks. 50 GHz and 66 GHz have none, and the report gives no device figure for either.
TH: เฉพาะ 40 GHz ที่มีเครือข่ายให้บริการ ส่วน 50 GHz และ 66 GHz ยังไม่มี และรายงานไม่ระบุจำนวนอุปกรณ์ของทั้งสองย่าน

## page.40-66-ghz.future
EN: The future use of 50 GHz is uncertain, pending other mmWave bands. Any use of 66 GHz is likely to come after lower mmWave bands such as 26/28 GHz develop further.
TH: การใช้ 50 GHz ในอนาคตยังไม่แน่นอน ขึ้นอยู่กับการพัฒนาย่าน mmWave อื่น ส่วน 66 GHz น่าจะใช้หลังจากย่าน mmWave ต่ำกว่า เช่น 26/28 GHz พัฒนาต่อไปอีก

---

# 6. Where each band is harmonised

> One short line next to a colour swatch on the map. Max 14 words. Each page lists its entries in order w1, w2, ...

## where.600-mhz.w1
EN: n71 is assigned and used in regions including these.
TH: n71 ได้รับการจัดสรรและใช้งานในภูมิภาคต่าง ๆ รวมถึงพื้นที่เหล่านี้

## where.600-mhz.w2
EN: n105 is being developed, particularly in APAC.
TH: n105 กำลังพัฒนา โดยเฉพาะในเอเชียแปซิฟิก

## where.600-mhz.w3
EN: Provisions for parts of these Regions came at WRC-15.
TH: WRC-15 กำหนดบทบัญญัติสำหรับบางส่วนของภูมิภาคเหล่านี้

## where.600-mhz.w4
EN: Footnotes for some countries in Region 1 were expanded at WRC-23.
TH: WRC-23 ขยายเชิงอรรถสำหรับบางประเทศใน Region 1

## where.700-mhz.w1
EN: Harmonised in all three ITU Regions.
TH: ประสานครบทั้ง 3 ITU Region

## where.700-mhz.w2
EN: Widely used for 4G and 5G, with 2 x 45 MHz.
TH: ใช้กว้างขวางสำหรับ 4G และ 5G ด้วย 2 x 45 MHz

## where.700-mhz.w3
EN: 2x30 MHz FDD plan plus 20 MHz SDL; final decisions at WRC-15.
TH: แผน FDD 2x30 MHz พร้อม SDL 20 MHz ตัดสินขั้นสุดท้ายใน WRC-15

## where.700-mhz.w4
EN: A different plan: 80 MHz in total, including 10 MHz SDL.
TH: ใช้แผนต่างออกไป รวม 80 MHz รวม SDL 10 MHz

## where.700-mhz.w5
EN: North America has its own band plan: n12, n13, n14.
TH: อเมริกาเหนือมีแผนย่านความถี่ของตนเอง: n12 n13 n14

## where.800-mhz.w1
EN: The original digital dividend band; identified for IMT at WRC-07.
TH: ย่าน digital dividend ดั้งเดิม ระบุเป็น IMT ใน WRC-07

## where.800-mhz.w2
EN: Widely assigned; use spread rapidly for 4G launches.
TH: จัดสรรอย่างกว้างขวาง และขยายเร็วเพื่อเปิด 4G

## where.850-mhz.w1
EN: 806-960 MHz was identified globally for IMT at WRC-2000.
TH: 806-960 MHz ระบุเป็น IMT ทั่วโลกใน WRC-2000

## where.850-mhz.w2
EN: The first cellular band throughout the Americas and parts of APAC.
TH: ย่านเซลลูลาร์แรกทั่วทวีปอเมริกาและบางส่วนของเอเชียแปซิฟิก

## where.900-mhz.w1
EN: The original GSM band, deployed in Regions 1, 2 and 3.
TH: ย่าน GSM ดั้งเดิม ใช้ใน Region 1, 2 และ 3

## where.900-mhz.w2
EN: Named as the Region 2 part of the GSM deployment.
TH: ระบุเป็นส่วนของ Region 2 ในการใช้งาน GSM

## where.900-mhz.w3
EN: First harmonised in 1987 for GSM in some countries.
TH: ประสานครั้งแรกปี 1987 สำหรับ GSM ในบางประเทศ

## where.900-mhz.w4
EN: Some countries mixed 900 MHz and 850 MHz assignments.
TH: บางประเทศจัดสรรผสมระหว่าง 900 MHz และ 850 MHz

## where.1500-mhz.w1
EN: Harmonised in Regions 2 and 3.
TH: ประสานใน Region 2 และ 3

## where.1500-mhz.w2
EN: Parts of the band are harmonised in the Radio Regulations.
TH: บางส่วนของย่านความถี่ประสานไว้ในข้อบังคับวิทยุ

## where.1500-mhz.w3
EN: Europe harmonised it for SDL; the Arab group for TDD.
TH: ยุโรปประสานสำหรับ SDL กลุ่มอาหรับสำหรับ TDD

## where.1500-mhz.w4
EN: Already used in Japan with FDD.
TH: ญี่ปุ่นใช้แบบ FDD อยู่แล้ว

## where.1500-mhz.w5
EN: Indonesia auctioned it for TDD; India and Brazil have it on the roadmap.
TH: อินโดนีเซียประมูลสำหรับ TDD อินเดียและบราซิลบรรจุในแผนที่นำทาง

## where.1800-2100.w1
EN: 1800 MHz: used extensively worldwide; identified for IMT at WRC-2000.
TH: 1800 MHz: ใช้กว้างขวางทั่วโลก ระบุเป็น IMT ใน WRC-2000

## where.1800-2100.w2
EN: 2.1 GHz: identified globally at WARC-92.
TH: 2.1 GHz: ระบุทั่วโลกใน WARC-92

## where.1800-2100.w3
EN: 2.1 GHz was the primary 3G band in Europe, Asia and elsewhere.
TH: 2.1 GHz เป็นย่านหลักของ 3G ในยุโรป เอเชีย และที่อื่น

## where.pcs-aws.w1
EN: Both sit in ranges identified globally for IMT.
TH: ทั้งสองอยู่ในช่วงที่ระบุเป็น IMT ทั่วโลก

## where.pcs-aws.w2
EN: PCS: a core part of mobile services, mostly here.
TH: PCS: ส่วนหลักของบริการมือถือ ส่วนใหญ่ในพื้นที่นี้

## where.pcs-aws.w3
EN: AWS was originally introduced in the US and parts of the Americas.
TH: AWS เริ่มต้นในสหรัฐฯ และบางส่วนของทวีปอเมริกา

## where.pcs-aws.w4
EN: AWS is harmonised primarily across the Americas, not globally.
TH: AWS ประสานเป็นหลักในทวีปอเมริกา ไม่ใช่ทั่วโลก

## where.pcs-aws.w5
EN: AWS networks are predominately here, though the report's sentence says PCS band.
TH: เครือข่าย AWS ส่วนใหญ่อยู่ที่นี่ แม้ประโยคในรายงานจะเขียนว่าย่าน PCS

## where.2-3-ghz.w1
EN: First identified for IMT at WRC-07; globally harmonised.
TH: ระบุเป็น IMT ครั้งแรกใน WRC-07 ประสานทั่วโลก

## where.2-6-ghz.w1
EN: Harmonised globally for IMT at WRC-2000.
TH: ประสานเป็น IMT ทั่วโลกใน WRC-2000

## where.3-5-ghz.w1
EN: 3.5-3.8 GHz allocated in all three regions; 3.3-3.8 used globally.
TH: 3.5-3.8 GHz กำหนดใน 3 ภูมิภาค และใช้ 3.3-3.8 ทั่วโลก

## where.3-5-ghz.w2
EN: 3.4-3.5 GHz allocated in Regions 1, 2 and part of 3.
TH: 3.4-3.5 GHz กำหนดใน Region 1, 2 และบางส่วนของ 3

## where.3-5-ghz.w3
EN: An additional primary mobile allocation at 3.8-4.2 GHz.
TH: การกำหนดเพิ่มสำหรับบริการเคลื่อนที่หลักที่ 3.8-4.2 GHz

## where.4-5-ghz.w1
EN: Strong 5G NR device support in these markets.
TH: มีอุปกรณ์ 5G NR รองรับมากในตลาดเหล่านี้

## where.4-5-ghz.w2
EN: Current use of the band is greatest in Asia-Pacific.
TH: ปัจจุบันใช้ย่านนี้มากที่สุดในเอเชียแปซิฟิก

## where.4-5-ghz.w3
EN: Interest is increasing in parts of RCC.
TH: ความสนใจเพิ่มขึ้นในบางส่วนของ RCC

## where.6-ghz.w1
EN: WRC-23 identified the band throughout EMEA.
TH: WRC-23 ระบุย่านนี้ทั่ว EMEA

## where.6-ghz.w2
EN: Identified in some countries in APAC and the Americas.
TH: ระบุในบางประเทศของเอเชียแปซิฟิกและทวีปอเมริกา

## where.6-ghz.w3
EN: Some countries here have already licensed the band.
TH: บางประเทศในพื้นที่นี้ออกใบอนุญาตย่านนี้แล้ว

## where.26-28-ghz.w1
EN: 26 GHz identified for IMT globally at WRC-19.
TH: 26 GHz ระบุเป็น IMT ทั่วโลกใน WRC-19

## where.26-28-ghz.w2
EN: n257 (26.5-29.5 GHz) is described as globally harmonised.
TH: n257 (26.5-29.5 GHz) ได้รับการอธิบายว่าประสานทั่วโลก

## where.26-28-ghz.w3
EN: The original mmWave band, used here.
TH: ย่าน mmWave ดั้งเดิม ใช้งานในพื้นที่นี้

## where.26-28-ghz.w4
EN: Used in South Korea; first mmWave launches in the US.
TH: ใช้ในเกาหลีใต้ และ mmWave เปิดตัวครั้งแรกในสหรัฐฯ

## where.40-66-ghz.w1
EN: 40 GHz was harmonised globally at WRC-19.
TH: 40 GHz ประสานทั่วโลกใน WRC-19

## where.40-66-ghz.w2
EN: 66 GHz was identified globally at WRC-19.
TH: 66 GHz ระบุทั่วโลกใน WRC-19

## where.40-66-ghz.none
> Used only if no entry can be drawn for a page; here it covers 50 GHz.
EN: 50 GHz: harmonised in some countries; the report names none.
TH: 50 GHz: ประสานในบางประเทศ รายงานไม่ระบุชื่อประเทศ

---

# 7. Scope, events, places

> Scope words appear on the timeline next to a lit conference. Max ~28 characters.

## scope.global
EN: identified globally
TH: ระบุทั่วโลก

## scope.regions
EN: harmonised by region
TH: ประสานเป็นรายภูมิภาค

## scope.some
EN: some countries
TH: บางประเทศ

## scope.europe-some
EN: some European countries
TH: บางประเทศในยุโรป

## scope.future
EN: future discussion
TH: ที่จะหารือในอนาคต

## scope.identified
> For conferences where the report names the decision but not how widely it applies.
EN: identified for mobile
TH: ระบุสำหรับมือถือ

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
EN: APAC
TH: เอเชียแปซิฟิก (APAC)

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
EN: Decisions taken at the next WRC can harmonise more spectrum for mobile.
TH: การตัดสินใจในการประชุม WRC ครั้งต่อไปสามารถประสานคลื่นความถี่เพิ่มเติมสำหรับมือถือได้

## next.f1.title
> Short heading. Max ~30 characters.
EN: WRC-27
TH: WRC-27

## next.f1.body
> Max ~35 words.
EN: The next World Radiocommunication Conference, due in 2027, can align more spectrum for mobile, including low and mid-bands that may help countries meet future demand.
TH: การประชุมวิทยุคมนาคมโลกครั้งหน้าในปี 2027 สามารถจัดคลื่นความถี่เพิ่มเติมให้สอดคล้องกันสำหรับมือถือ รวมถึงย่านต่ำและย่านกลางที่อาจช่วยให้ประเทศรองรับความต้องการในอนาคต

## next.f2.title
EN: Upper 6 GHz support
TH: เสียงสนับสนุน 6 GHz ช่วงบน

## next.f2.body
EN: Countries representing more than 80% of the world's population now support the upper 6 GHz band for mobile.
TH: ประเทศที่มีประชากรรวมกว่า 80% ของโลกสนับสนุนย่าน 6 GHz ช่วงบนสำหรับมือถือแล้ว

## next.f3.title
EN: The next space for mobile
TH: พื้นที่ถัดไปของมือถือ

## next.f3.body
EN: The report calls the 4.5 GHz and 7-8 GHz bands the next space for mobile to evolve in mid-bands. It expects 2-2.5 GHz of mid-band spectrum to be required globally in 2035-2040.
TH: รายงานเรียกย่าน 4.5 GHz และ 7-8 GHz ว่าพื้นที่ถัดไปให้มือถือพัฒนาในย่านกลาง และคาดว่าทั่วโลกต้องการคลื่นย่านกลาง 2-2.5 GHz ในช่วงปี 2035-2040

## next.f4.title
EN: 6G by 2040
TH: 6G ภายในปี 2040

## next.f4.body
EN: 6G is expected to reach 5 billion connections by 2040, or 54% market penetration.
TH: คาดว่า 6G จะมี 5,000 ล้านการเชื่อมต่อภายในปี 2040 หรือคิดเป็นอัตราการเข้าถึงตลาด 54%

## principle.title
> Heading of the quiet row of principles.
EN: Principles for licensing spectrum
TH: หลักการอนุญาตใช้คลื่นความถี่

## principle.1
> Max ~12 words.
EN: Long-tenure, predictable licence terms
TH: อายุใบอนุญาตยาวและคาดการณ์ได้

## principle.2
EN: Investment-oriented spectrum pricing
TH: ราคาคลื่นความถี่ที่เอื้อต่อการลงทุน

## principle.3
EN: Proportionate use of licence obligations
TH: เงื่อนไขใบอนุญาตที่เหมาะสมกับวัตถุประสงค์

## principle.4
> The report names technology neutrality as the principle to combine with the three pillars.
EN: Technology neutrality, combined with the three pillars
TH: ความเป็นกลางทางเทคโนโลยี ควบคู่กับเสาหลักอีก 3 ข้อ

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
EN: Devices
TH: อุปกรณ์

## index.col.harmonised
EN: Harmonised at
TH: ประสานเมื่อ

## gloss.title
> The report's list of acronyms, with its wording.
EN: Glossary
TH: อภิธานศัพท์

## gloss.3GPP
EN: 3rd Generation Partnership Project
TH: 3rd Generation Partnership Project

## gloss.5G-NR
EN: 5G New Radio
TH: 5G New Radio

## gloss.AWS
EN: Advanced Wireless Services
TH: Advanced Wireless Services

## gloss.CITEL
> Printed in the report with a garbled accent; spelled here as in Spanish.
EN: Comisión Interamericana de Telecomunicaciones
TH: Comisión Interamericana de Telecomunicaciones

## gloss.FDD
EN: Frequency Division Duplexing
TH: Frequency Division Duplexing

## gloss.FWA
EN: Fixed Wireless Access
TH: Fixed Wireless Access

## gloss.GHz
EN: Gigahertz
TH: Gigahertz

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

## gloss.LTE
EN: Long Term Evolution
TH: Long Term Evolution

## gloss.MHz
EN: Megahertz
TH: Megahertz

## gloss.mmWave
EN: Millimetre Wave
TH: Millimetre Wave

## gloss.MNO
EN: Mobile Network Operator
TH: Mobile Network Operator

## gloss.PCS
EN: Personal Communications Service
TH: Personal Communications Service

## gloss.RCC
EN: Regional Commonwealth in the Field of Communications
TH: Regional Commonwealth in the Field of Communications

## gloss.SDL
EN: Supplemental Down Link
TH: Supplemental Down Link

## gloss.TDD
EN: Time Division Duplexing
TH: Time Division Duplexing

## gloss.UMTS
EN: Universal Mobile Telecommunications System
TH: Universal Mobile Telecommunications System

## gloss.WARC
EN: World Administrative Radio Conference
TH: World Administrative Radio Conference

## gloss.WCDMA
> The report prints "Wideband Code Vision Multiple Access". Kept as printed, not corrected.
EN: Wideband Code Vision Multiple Access
TH: Wideband Code Vision Multiple Access

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
EN: ITU Region boundaries come from the ITU. Looser areas such as EMEA are approximate because the report does not define them. Only countries the report names are marked individually.
TH: เขตแดนของ ITU Region มาจาก ITU ส่วนพื้นที่กว้างอย่าง EMEA เป็นการประมาณ เพราะรายงานไม่ได้นิยามไว้ และมีการระบุเป็นรายประเทศเฉพาะประเทศที่รายงานเอ่ยชื่อเท่านั้น

> The next blocks list places where the report's own figures or wording differ. The page uses the report's wording as printed.

## notes.source1
EN: 700 MHz: the heading ranges (703-733 / 758-788 MHz) match the second diagram row; the row labelled b28, n28 is 703-748 / 758-803 MHz.
TH: 700 MHz: ช่วงในหัวข้อ (703-733 / 758-788 MHz) ตรงกับแถวที่สองของแผนภาพ ส่วนแถวที่ระบุ b28, n28 คือ 703-748 / 758-803 MHz

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
EN: 28 GHz has device figures for n257 and n261 but no network count; the n261 subset has more devices than the n257 range that contains it.
TH: 28 GHz มีตัวเลขอุปกรณ์ของ n257 และ n261 แต่ไม่มีจำนวนเครือข่าย และ n261 ซึ่งเป็นส่วนย่อยมีอุปกรณ์มากกว่า n257 ที่ครอบคลุมช่วงนั้น

## notes.source7
EN: 6 GHz gives a network count (two) but no device count.
TH: 6 GHz ระบุจำนวนเครือข่าย (2 ราย) แต่ไม่ระบุจำนวนอุปกรณ์

## notes.source8
EN: 3.5 and 4.5 GHz give ecosystem figures for 2022 and 2026 without naming a unit; 3.5 GHz also says around 260 networks by early 2025 and approximately 302 in 2026.
TH: 3.5 และ 4.5 GHz ระบุตัวเลขระบบนิเวศปี 2022 และ 2026 โดยไม่ระบุหน่วย และ 3.5 GHz ระบุราว 260 เครือข่ายเมื่อต้นปี 2025 และประมาณ 302 ในปี 2026

## notes.source9
EN: 2.6 GHz: the first diagram row is labelled "FDD / TDD" while its outer blocks carry uplink and downlink arrows and the middle block is TDD.
TH: 2.6 GHz: แถวแรกของแผนภาพระบุ "FDD / TDD" ขณะที่บล็อกด้านนอกมีลูกศรขาขึ้นและขาลง และบล็อกตรงกลางเป็น TDD

## notes.source10
EN: The mid-band ruler on the overview page differs from the band pages in places, for example 1.4-1.5 GHz against 1427-1518 MHz, and 6.425-7.1 against 6.425-7.125 GHz. It also shows a 4.8 GHz band and a lower 6 GHz band that have no band page.
TH: ไม้บรรทัดย่านกลางในหน้าภาพรวมต่างจากหน้าของแต่ละย่านในบางจุด เช่น 1.4-1.5 GHz เทียบกับ 1427-1518 MHz และ 6.425-7.1 เทียบกับ 6.425-7.125 GHz และยังแสดงย่าน 4.8 GHz และ 6 GHz ช่วงล่างที่ไม่มีหน้าของตนเอง

## notes.source11
EN: 800 MHz: the text says 790-862 MHz was allocated at WRC-07; the page range and ruler start at 791 MHz.
TH: 800 MHz: ข้อความระบุว่า WRC-07 กำหนด 790-862 MHz ส่วนช่วงในหน้าและไม้บรรทัดเริ่มที่ 791 MHz

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

## notes.source16
EN: The acronym list prints WCDMA as "Wideband Code Vision Multiple Access".
TH: รายการคำย่อพิมพ์ WCDMA ว่า "Wideband Code Vision Multiple Access"

## notes.source17
EN: Conference names are written in different styles (WRC-07, WRC07, WARC-92, WARC-1992, WRC-2000), and the 600 MHz device figure counts n71 only.
TH: ชื่อการประชุมเขียนหลายรูปแบบ (WRC-07, WRC07, WARC-92, WARC-1992, WRC-2000) และตัวเลขอุปกรณ์ 600 MHz นับเฉพาะ n71

## credits.title
EN: Credits
TH: เครดิต

## credits.report
EN: GSMA, Mobile Spectrum Report, 2026 Edition, October 2026. The bands, ranges, figures and statements on this page come from this report. Wavelengths are calculated, and map region outlines come from ITU and Natural Earth (see notes).
TH: GSMA, Mobile Spectrum Report, 2026 Edition, ตุลาคม 2026 ย่านความถี่ ช่วงความถี่ ตัวเลข และข้อความในหน้านี้มาจากรายงานฉบับนี้ ส่วนความยาวคลื่นเป็นค่าที่คำนวณเอง และเส้นขอบภูมิภาคบนแผนที่มาจาก ITU และ Natural Earth (ดูหมายเหตุ)

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
TH: มากกว่าเล็กน้อย
