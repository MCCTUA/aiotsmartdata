# แผนงาน Build เว็บจริง — `aiotwebdemona` → aiot.webdemona.com

> เอกสารส่งต่อไป Claude Code (claude cli) · จัดทำ 2026-07-27
> Blueprint เนื้อหา = `aiot_overview.html` (ที่ทำไว้แล้ว — ใช้เป็น single source of truth ของโครง+ข้อความ+ลำดับ)
> Stack/design/asset = reuse จาก **smartdatapresent** และ **lampang 07_web**

---

## 0. เป้าหมาย

สร้างเว็บ presentation แบบ single-page หลาย section (โทน smartdata blue) สำหรับกลุ่มทุนงานไฟฟ้า/พลังงาน — deploy ที่ **aiot.webdemona.com** · repo ใหม่ชื่อ **`aiotwebdemona`**

หัวใจที่ต่างจากเว็บเดิม: มี **“ภาคผนวก”** ที่กดแล้วเปิด **พรีเซนต์ฉบับเต็มของแต่ละแอป** (duplicate เนื้อหามาจาก smartdata) มาแสดงในเว็บนี้ แล้วกด **← กลับ** กลับมาจุดเดิมได้

---

## 1. Prerequisites — โฟลเดอร์ที่ session ใหม่ต้องเข้าถึง

ก่อนเริ่ม ให้ claude code เข้าถึง 3 โฟลเดอร์:

1. **repo ใหม่** (ที่จะ `git init` ชื่อ `aiotwebdemona`)
2. **ต้นแบบ stack + assets + pitch decks:** `/Users/ggt/Documents/Coding/Gismo/smartdatapresent`
3. **ต้นแบบ design tokens + LedSign + node deck:** `.../Smart City Portfolio/Projects/2026-Lampang-Rashadapisek/07_web`
4. **Blueprint เนื้อหา:** วาง `aiot_overview.html` ไว้ในรากของ repo ใหม่ (โฟลเดอร์ `/BLUEPRINT/`)

---

## 2. Stack (ตาม smartdata/lampang เป๊ะ)

- **React + Vite + Tailwind v4** (`@tailwindcss/vite`) + **Framer Motion** (fade-up)
- **React Router DOM — HashRouter** (static hosting · ไม่ต้อง server rewrite · `base: './'`)
- ฟอนต์: **Sarabun** (ไทยหลัก) + **Inter** (latin/ตัวเลข)
- Build เป็น `dist/` static → upload ขึ้น subdomain (Tua deploy เอง)

Palette (smartdata blue / Apple):
```
--blue:#0071e3  --blue-d:#0056b8  --blue-l:#e8f2fe
--ink:#1d1d1f   --gray:#6e6e73    --bg:#fff  --bg2:#f5f5f7  --line:#d2d2d7
```

---

## 3. โครงไฟล์ที่เสนอ

```
aiotwebdemona/
├─ index.html
├─ vite.config.js            (react + tailwind v4 · base './')
├─ package.json
├─ BLUEPRINT/aiot_overview.html   ← content blueprint (อ่านก่อนเริ่ม)
├─ public/
│  ├─ videos/                ← copy คลิปจาก smartdata + lampang (ดู §6)
│  ├─ images/                ← copy รูปจาก smartdata + lampang (ดู §6)
│  └─ node/node_zhaga.jpg    ← รูป node ที่ปิดเบอร์แล้ว (S__3080279_redacted.jpg)
└─ src/
   ├─ main.jsx · App.jsx     (HashRouter · main page + routes ภาคผนวก)
   ├─ index.css              (palette tokens smartdata blue + Sarabun/Inter)
   ├─ components/
   │  ├─ ui.jsx              (Section · SectionHeader · Card · Pill · FadeUp — port จาก lampang ui.jsx แล้วเปลี่ยน palette)
   │  ├─ Nav.jsx · Footer.jsx · ScrollDots.jsx
   │  ├─ WorkPage.jsx        (การ์ดผลงาน 2-up + รูป)
   │  ├─ NemaZhaga.jsx       (ตารางเทียบ + รูป node)
   │  └─ PresViewer.jsx      (overlay เปิดพรีเซนต์เต็มจอ + ปุ่มกลับ)
   ├─ sections/             (1 ไฟล์ = 1 ACT ตาม blueprint)
   │  Hero · Edge · WorksHW · WorksSW · Solution · NodeStory ·
   │  NemaZhaga · Demo · Expand · Solar · QA · Close
   └─ pres/                 (พรีเซนต์รายแอป — port จาก smartdata · ดู §5)
      AiCamera · ElderlyCare · SmartLight · SmartTraffic · SmartPole · LedDisplay · SmartEnergy
```

---

## 4. Section map (ตาม blueprint `aiot_overview.html`)

ข้อความ/ลำดับทั้งหมด**อยู่ใน blueprint แล้ว** — งานคือแปลง HTML → React components + ใส่ motion/responsive:

| ลำดับ | Section | หมายเหตุ |
|---|---|---|
| 0 | Hero | pain-first · โทนน้ำเงินเข้ม · chips 3 อัน |
| 1 | จุดเด่น (Edge) | HW+SW บ้านเดียว · 2 pillars + แถบ synergy |
| 2 | ผลงาน Hardware | 3 หน้า × 2 การ์ด + รูป (EGAT/MMTH/TOA/ลาดพร้าว/T5/โรงงาน) |
| 3 | ผลงาน Software | 3 หน้า × 2 การ์ด + รูป/คลิป (ทางด่วน/CentralWorld/ยุติธรรม/Emergency/Ecommerce) |
| 4 | AIOT Solution | 3 หน้า × 2 การ์ด · **คลิก→ภาคผนวก** (6 แอป) |
| 5 | เราพัฒนา Node เอง | ปัญหา 6 ข้อ → ทำเอง → timeline LTE→LoRa→Universal→AC→Solar → จุดยืน (ขายส่ง/white label/flex/Lekise LiFePO4) |
| 6 | Nema vs Zhaga | ตารางเทียบ + เหตุผลเลือก Zhaga + **รูป node (ปิดเบอร์แล้ว)** |
| 7 | Demo Smart Light | 3 จังหวะ (screen จริงจาก dev — รอไฟล์) |
| 8 | ต่อยอด | tabs พลังงาน/ภัยแล้ง/คาร์บอน/จราจร |
| 9 | Solar Street Light | DIALux (กำลังทำ · ยังไม่สรุปราคา) |
| 10 | Q&A | accordion |
| 11 | สรุป + Ask | callout |
| — | ภาคผนวก | 6 การ์ด → เปิดพรีเซนต์เต็มจอ (ดู §5) |

---

## 5. ภาคผนวก — พรีเซนต์รายแอป (duplicate จาก smartdata)

กลไก: การ์ดภาคผนวก → ปุ่ม “เปิดพรีเซนต์ฉบับเต็ม” → `PresViewer` overlay เต็มจอ (หรือ route `#/pres/:id`) → ปุ่ม **← กลับ** คืน scroll เดิม (blueprint ทำ prototype ไว้แล้ว — ใช้เป็นแบบ)

**Map แต่ละแอป → หน้า source ใน smartdata ที่จะพอร์ต/ก๊อป:**

| แอปในภาคผนวก | Source (smartdatapresent/src/pages/…) |
|---|---|
| AI Camera | `cctv-ai/PitchDeck.jsx` (+ `cctv-ai/TechnicalOverview.jsx` + sub-apps: RoadSafety/PublicAreaWatch/RestrictedZone/VehicleCheck/CrowdDensity/ParkingManagement/BridgeTunnelWatch) |
| Elderly Care | `ElderlyCare.jsx` / `ElderlyCareStory.jsx` |
| Smart Light | `smartlight/PitchDeck.jsx` + `SmartStreetLight.jsx` + `smartlight/Story.jsx` |
| Smart Traffic | `SmartTraffic.jsx` |
| Smart Pole | ไม่มีหน้าตรง — **compose ใหม่** จากชิ้นส่วน (ไฟ+กล้อง+sensor+จอ) |
| LED Display (จอ LED) | จาก **lampang** `07_web/src/sections/LedSign.jsx` |
| Smart Energy (Phase 2) | **สร้างใหม่** — mark “Phase 2 · แผน” · เนื้อหา MDB/Modbus ตาม blueprint |

> ทางเลือก port: (ก) copy component ทั้งหน้าเข้ามาใน `src/pres/` แล้วเปลี่ยน palette → เร็วสุด · (ข) ทำ overlay อ่านเฉพาะ section หลัก · เลือก (ก) ถ้าอยากได้เนื้อหาเป๊ะ
> Emergency Management (ในหน้าผลงาน SW) source = `emergency/PitchDeck.jsx` + `emergency/Story.jsx` เผื่ออยากทำเป็นพรีเซนต์ด้วย

---

## 6. ASSET MAP — คลิป/รูป (copy เข้ามาใน public/)

**คลิป (smartdatapresent/public/videos/):**

| ใช้ที่ | ไฟล์ต้นทาง |
|---|---|
| ผลงาน SW · Central World | `about/14_centralworld_height.mp4` (+ `14_centralworld_poster.jpg`) |
| AI Camera · อ่านป้าย | `lpr-demo.mp4` (+ `lpr-poster.jpg`) |
| AI Camera / bridge · รถสูงเกิน | `over-height/main.mp4` · `over-height/scene.mp4` (+posters) |
| ทั่วไป / demo | `0518.mp4` (+ `0518_poster.jpg`) |
| LED / overheight (lampang) | `2026-Lampang-Rashadapisek/07_web/public/videos/overheight_demo.mp4` |

**รูป (smartdatapresent/public/images/):** โฟลเดอร์ต่อแอปพร้อมใช้ —
`about/ · cctv-ai/ · elderly-care/ · emergency-mgmt/ · smart_traffic/ · smartlight/ · solar/ · waste-fee/`
**รูป lampang:** `07_web/public/images/lampang/`

**รูป node (ปิดเบอร์ IC แล้ว):** `Downloads/S__3080279_redacted.jpg` → `public/node/node_zhaga.jpg`
> ⚠️ ใช้ไฟล์ **redacted** เท่านั้น (เบอร์ IC/โลโก้ถูกปิดทึบ กู้ไม่ได้) · ห้ามใช้ไฟล์ต้นฉบับ `S__3080279.jpg`

**ยังขาด (ใส่ทีหลัง):** screen smart light จาก dev · ผล DIALux solar · รูปจริง EGAT/MMTH/TOA/T5/ลาดพร้าว (ถ้ามี วางแทน placeholder emoji)

---

## 7. Component ที่ reuse ได้เลย

- **จาก lampang `07_web/src/`:** `components/ui.jsx` (Section/SectionHeader/Card/Pill/FadeUp), `components/Nav.jsx`, deck/scroll ใน `index.css` → copy มาแล้วเปลี่ยน palette heritage → smartdata blue
- **จาก smartdata `src/components/`:** `AppDetailLayout.jsx`, `AppHero.jsx`, `AppPainSection.jsx`, `AppOutcomeSection.jsx`, `AppStickyBar.jsx`, `Nav.jsx`, `Footer.jsx`, `PasswordGate.jsx` (ถ้าต้องการล็อกด้วยรหัส)

---

## 8. Compliance (เว็บ public — ทำตามนี้)

- ✅ **ระบุ Lekise ได้** (Tua อนุมัติ) · ✅ ชื่อลูกค้าเราระบุได้ (EGAT/การทางฯ/การประปาฯ/Central World/สถานีกลางฯ/MMTH/TOA)
- ✅ รูป node ใช้ตัว **redacted** เท่านั้น
- ⚠️ **ไม่ใส่ราคา** (โดยเฉพาะ Solar — “กำลังคำนวณ · ยังไม่สรุปราคา”)
- ⚠️ เลี่ยงเบอร์/ยี่ห้อ component คู่แข่ง · reframe กล้องเป็น “เฝ้าระวัง·บันทึกเหตุการณ์ ไม่ใช่ติดตามประชาชน” (ตาม smartdata/CLAUDE.md เดิม)
- Smart Energy = แสดงเป็น **“Phase 2 · แผน”** ชัดเจน อย่าให้ดูเหมือนพร้อมขาย

---

## 9. Milestones

1. **M1 — Scaffold** (½ วัน): `git init aiotwebdemona` · Vite+Tailwind v4+Framer+HashRouter · port `ui.jsx` + palette smartdata blue · Nav/Footer/ScrollDots · วาง blueprint
2. **M2 — Main page** (1–2 วัน): section ACT0-11 ตาม blueprint (Hero→สรุป) · WorkPage 2-up · NemaZhaga + รูป node · copy คลิป/รูปเข้า public
3. **M3 — ภาคผนวก + PresViewer** (1–2 วัน): overlay/route + ปุ่มกลับ · port พรีเซนต์ 5 แอปจาก smartdata + LED(lampang) + Smart Energy(ใหม่)
4. **M4 — Polish** (½–1 วัน): responsive · motion · ใส่รูปจริงแทน placeholder · Q&A/Solar/Demo · SEO noindex (ถ้ายังไม่เผยแพร่)
5. **M5 — Build & handoff** (½ วัน): `npm run build` → `dist/` · DEPLOY.md · **Tua deploy** ขึ้น aiot.webdemona.com + ชี้ DNS

---

## 10. Deploy (static — Tua ทำเอง)

```bash
npm install
npm run dev        # ดู local http://localhost:5173
npm run build      # → dist/
npm run preview    # ทดสอบ build
```
`dist/` = static ล้วน → เลือก Cloudflare Pages / Netlify / Vercel (build=`npm run build`, output=`dist`) หรือ upload `dist/` ขึ้นโฮสต์เดิมแบบ smartdata/lampang แล้วชี้ DNS `aiot` → โฮสต์ปลายทาง

---

## 11. Open items (ตามให้ครบระหว่าง build)
- [ ] screen smart light จาก dev (Demo · ACT7)
- [ ] ผล DIALux + สเปคโคม/ลูเมน/แบต (Solar · ACT9)
- [ ] รูปจริงผลงาน HW (EGAT/MMTH/TOA/T5/ลาดพร้าว) แทน placeholder
- [ ] ตัดสินใจ port พรีเซนต์แบบ (ก) copy หน้า หรือ (ข) overlay อ่าน section
- [ ] Smart Pole — compose เนื้อหาพรีเซนต์ (ยังไม่มีหน้าตรงใน smartdata)
