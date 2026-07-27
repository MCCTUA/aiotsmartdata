# DEPLOY — aiotwebdemona → aiot.webdemona.com

เว็บ presentation single-page (React + Vite + Tailwind v4 + Framer Motion + HashRouter) ·
เนื้อหาแปลงมาจาก `BLUEPRINT/aiot_overview.html` · โทน smartdata blue · ไทยเป็นหลัก · `noindex`

## รันดู local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # → dist/  (static ล้วน)
npm run preview    # ทดสอบ build ที่ dist/
```

## Deploy (static — Tua ทำเอง)

`dist/` เป็น static ล้วน + `base: './'` (ทุก path เป็น relative) + HashRouter
→ วางที่ไหนก็ได้ ไม่ต้องตั้ง server rewrite

**ตัวเลือก:**
- **Cloudflare Pages / Netlify / Vercel** — build command `npm run build`, output dir `dist`
- **โฮสต์เดิม (แบบ smartdata/lampang)** — `npm run build` แล้ว upload เนื้อหาใน `dist/` ขึ้น subdomain
  จากนั้นชี้ DNS record `aiot` → โฮสต์ปลายทาง

> เพราะใช้ HashRouter (route อยู่หลัง `#`) จึงไม่ต้อง config `try_files`/redirect ใด ๆ —
> ทุก URL โหลด `index.html` ตัวเดียว

## โครงสร้าง

```
src/
  App.jsx            HashRouter · Home อยู่ล่างตลอด · PresLayer อ่าน route #/pres/:id
  Home.jsx           ประกอบ 13 section
  index.css          design tokens (smartdata blue) + คลาสทั้งหมด (port 1:1 จาก blueprint)
  assets.js          asset() helper (resolve public/ กับ base './') + map คลิป
  components/        Nav · Footer · ScrollDots · ui (Section/SectionHeader/FadeUp/Media) ·
                     WorkPage · PresViewer
  sections/          Hero · Edge · WorksHW · WorksSW · Solution · NodeStory ·
                     NemaZhaga · Demo · Expand · Solar · QA · Close · Appendix
  pres/              deck รายแอป: AiCamera · ElderlyCare · SmartLightTraffic ·
                     SmartPole · LedDisplay · SmartEnergy + decks.jsx (registry) + deckUI
public/
  videos/            คลิป (copy จาก smartdata + lampang overheight_demo)
  node/node_zhaga.jpg  รูป node — ใช้ไฟล์ redacted เท่านั้น
```

## ภาคผนวก / PresViewer (หัวใจ)

การ์ดใน section **AIOT Solution** และ **ภาคผนวก** → ปุ่ม “เปิดพรีเซนต์ฉบับเต็ม”
→ นำทางไป `#/pres/:id` → `PresViewer` เปิด overlay เต็มจอทับ Home (ที่ mount ค้างไว้)
→ ปุ่ม **← กลับ** (หรือปุ่ม Esc) เรียก `navigate(-1)` แล้ว scroll เดิมกลับมาเอง
เพราะ Home ไม่เคย unmount

**หมายเหตุการพอร์ตพรีเซนต์ (ตาม BUILD_PLAN §5, open item):**
เลือกแนวทาง **(ข) curated slides** — พอร์ตสไลด์ฉบับย่อจาก blueprint (ซึ่งผู้เขียน blueprint
เรียบเรียงไว้แล้วในโทน blue) มาทำเป็น React แล้ว **เสริมด้วยคลิป/เนื้อหาจริง** จาก smartdata
(lpr-demo, centralworld, 0518 dashboard, overheight) และเนื้อหาเชิงลึกจาก pitch deck เดิม
ไม่ได้ copy ทั้งหน้า deck 1,500 บรรทัด (โทนเขียว Civic Trust) มาตรง ๆ เพราะจะผิดโทนแบรนด์
และหนักเกินจำเป็น — ถ้าต้องการเนื้อหาเป๊ะทั้ง deck ค่อยพอร์ตเพิ่มทีหลังใน `src/pres/`

## Compliance (ทำแล้ว)

- ✅ ระบุ **Lekise** + ลูกค้าเรา (EGAT/การทางฯ/การประปาฯ/Central World/สถานีกลางฯ/MMTH/TOA) ได้
- ✅ รูป node = ไฟล์ **redacted** (`public/node/node_zhaga.jpg`) เท่านั้น + caption อธิบายว่าปิดเบอร์ IC
- ✅ **ไม่มีราคา** ทั้งเว็บ · Solar = “กำลังคำนวณ · ยังไม่สรุปราคา”
- ✅ Smart Energy = badge **“PHASE 2 · แผน”** ทั้งการ์ดและ deck
- ✅ กล้อง = reframe เป็น “เฝ้าระวัง/บันทึกเหตุการณ์บนโครงสร้างพื้นฐานของหน่วยงานเอง ไม่ใช่ติดตามประชาชน” (+ PDPA)
- ✅ `<meta name="robots" content="noindex,nofollow">`

## Open items (ตาม BUILD_PLAN §11 — ใส่เพิ่มเมื่อได้ไฟล์)

- [ ] screen จริง Smart Light dashboard (section **Demo**) — ตอนนี้เป็น placeholder emoji
- [ ] ผล DIALux + สเปคโคม/ลูเมน/แบต (section **Solar**) — ตอนนี้ TBD
- [ ] รูปจริงผลงาน HW (EGAT/MMTH/TOA/T5/ลาดพร้าว) แทน placeholder emoji ใน `WorksHW`
      → วางไฟล์ใน `public/images/` แล้วใส่ `src` ให้ prop `media` ของการ์ดนั้น (kind:'img', src:'...')
- [ ] รูป Big Data / dashboard จริงใน `WorksSW`
```
```
