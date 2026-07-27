import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'
import LogoWall from '../components/LogoWall.jsx'
import { IMG, CLIENT_LOGOS } from '../assets.js'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

// Curated leftovers from the CodeCube project set — one representative shot
// per client not already used in the main WorksSW cards.
const GALLERY = [
  { src: IMG.dtacMydtacHero, label: 'dtac — MyDTAC' },
  { src: IMG.truedigitalparkDashboardChart, label: 'True Digital Park — Dashboard' },
  { src: IMG.healthDashboardDonuts, label: 'กรมอนามัย — Dashboard' },
  { src: IMG.exatTrafficChart, label: 'EXAT — กราฟจราจร' },
  { src: IMG.funplanetPartystar, label: 'Fun Planet' },
  { src: IMG.yayoiDeliveryHero, label: 'Yayoi — Delivery' },
  { src: IMG.mkMember, label: 'MK — สมาชิก' },
  { src: IMG.indexInsurtechBanner, label: 'Index Creative Village — InsurTech' },
  { src: IMG.probationKioskWhite, label: 'กรมคุมประพฤติ — Kiosk' },
  { src: IMG.cuteshopEcommerceMobile, label: 'Cute Shop — Ecommerce' },
  { src: IMG.keepqueCrmDashboard, label: 'Keepque — CRM' },
  { src: IMG.fnWebsiteFranchise, label: 'FN — เว็บแฟรนไชส์' },
  { src: IMG.tescolotusAppPromo, label: 'Tesco Lotus — App' },
  { src: IMG.unadmeMarketingShowcase, label: 'Unadme — Marketing' },
]

// 3 headline features for now — the rest of the Smart Light feature set
// gets added here later.
const SMARTLIGHT_FEATURES = [
  {
    ic: '🕐',
    sub: 'Dimming Schedule',
    title: 'หรี่ไฟอัจฉริยะตามเวลา',
    body: 'ตั้งความสว่างเป็นช่วงเวลาได้ เช่น 18:00 = 100% · 22:00 = 70% · 00:00 = 40% — ประหยัดไฟช่วงดึกโดยยังปลอดภัย',
  },
  {
    ic: '🗺️',
    sub: 'Zone/Tag · Sunrise/Sunset',
    title: 'ควบคุมเป็นกลุ่ม + ตามพระอาทิตย์',
    body: 'คุมทั้งเมือง รายพื้นที่ (Zone) หรือกลุ่มย่อย (Tag) · เปิด/ปิดอิง Sunrise–Sunset ตามพิกัด GPS ของแต่ละเสา',
  },
  {
    ic: '📡',
    sub: 'Live Telemetry',
    title: 'รู้สถานะจริงทุกต้น',
    body: 'ต้นไหนติด/ดับ/ผิดปกติ เห็นทันทีบน dashboard · ยืนยันด้วยข้อมูลจากอุปกรณ์จริง ไม่ใช่เดาจากตาราง',
  },
]

const CARDS = [
  {
    id: 'ap-aicam',
    cat: 'Appendix · AI Camera',
    title: 'กล้อง + AI',
    body: (
      <>
        2 รูปแบบการต่อ: <strong>ต่อหลัง NVR</strong> หรือ <strong>ต่อขนาน</strong> · สเกลจาก{' '}
        <strong>Jetson</strong> จุดเดียวถึง <strong>server</strong> · ตรวจจับเหตุการณ์หลายชนิด
        <br />
        <br />
        <strong>เคสจริง — Central World:</strong> บางพื้นที่ติดตั้งเลเซอร์วัดความสูงรถไม่ได้ (ข้อจำกัดพื้นที่) จึงใช้{' '}
        <strong>กล้องหลายตัว sync กัน</strong> ประเมินความสูงรถแทน
        <br />
        <strong>Phase ถัดไป:</strong> เมื่อตรวจพบรถสูงเกิน → แจ้งเตือนขึ้นป้าย LED + บันทึกหลักฐานอัตโนมัติ ส่งต่อให้นิติกรของห้างดำเนินการตามขั้นตอน
      </>
    ),
    ref: 'แหล่ง: smartdata.webdemona.com — หน้า AI Camera / Vision · คลิปตัวอย่าง: Central World over-height',
  },
  {
    id: 'ap-elder',
    cat: 'Appendix · Elderly Care',
    title: 'ระบบดูแลผู้สูงอายุ',
    body: 'ตรวจจับการล้ม/ออกนอกบริเวณ · แจ้งเตือนญาติ+อสม. · ประมวลผลที่ edge · consent-based',
    ref: 'แหล่ง: smartdata.webdemona.com — หน้า ElderlyCare',
  },
  {
    id: 'ap-smartlight',
    cat: 'Appendix · Smart Light + Smart Traffic',
    title: 'ไฟอัจฉริยะ + จราจร',
    body: 'telemetry รายต้น · หรี่ตามโปรไฟล์ · OTA · DALI-2/D4i · จราจรด้วย Radar + AI Camera',
    features: SMARTLIGHT_FEATURES,
    ref: 'แหล่ง: smartdata.webdemona.com — หน้า Smart Light / telemetry spec',
  },
  {
    id: 'ap-pole',
    cat: 'Appendix · Smart Pole',
    title: 'เสาอัจฉริยะ',
    body: 'ไฟ + กล้อง + เซนเซอร์ + จอ/สื่อสาร บนเสาต้นเดียว · แพลตฟอร์มเดียวกัน · ต่อยอด sensor ได้',
    ref: 'แหล่ง: smartdata.webdemona.com — หน้า Smart Pole',
  },
  {
    id: 'ap-led',
    cat: 'Appendix · LED Display · งานจอ LED',
    title: 'งานจอ LED (VMS)',
    body: 'ป้ายจอ LED เตือน/แสดงผล — full-color / 3-color · เตือนรถสูงเกิน · ข้อความจราจร · เชื่อมกับเซนเซอร์/ระบบเฝ้าระวัง',
    ref: 'แหล่ง: งานจอ LED ของเรา (+ smartdata.webdemona.com)',
  },
  {
    id: 'ap-energy',
    cat: 'Appendix · Smart Energy · Phase 2',
    title: (
      <>
        Smart Energy — อ่านค่าจาก MDB <span className="ph2badge">PHASE 2 · แผน</span>
      </>
    ),
    body: (
      <>
        <span className="ph2badge">PHASE 2 · แผน</span> อ่านค่าพลังงานจากตู้ <strong>MDB</strong> →
        dashboard พลังงาน · ต่อยอดรายงานประหยัดพลังงาน/คาร์บอน
      </>
    ),
    ref: 'สถานะ: แผน Phase 2 (roadmap)',
  },
]

export default function Appendix() {
  const navigate = useNavigate()
  return (
    <Section id="appendix" label="ภาคผนวก">
      <SectionHeader
        kicker="ภาคผนวก · Appendix"
        title="พรีเซนต์รายโซลูชัน"
        lead="กดปุ่ม “เปิดพรีเซนต์ฉบับเต็ม” ของแต่ละแอป — เนื้อหาพอร์ตมาจาก smartdata.webdemona.com มาแสดงในเว็บนี้ · กด ← กลับ เพื่อกลับมาหน้านี้จุดเดิม"
      />
      {CARDS.map((c) => (
        <FadeUp className="apcard" id={c.id} key={c.id}>
          <div className="cat">{c.cat}</div>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
          {c.features && (
            <div className="grid g3" style={{ marginTop: 18 }}>
              {c.features.map((f) => (
                <div className="card" key={f.title}>
                  <div style={{ fontSize: 26, marginBottom: 6 }}>{f.ic}</div>
                  <div className="cat">{f.sub}</div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          )}
          <button className="presbtn" onClick={() => navigate(`/pres/${c.id}`)}>
            ▶ เปิดพรีเซนต์ฉบับเต็ม
          </button>
          <div className="ref">{c.ref}</div>
          <div className="backlink" onClick={() => go('solution')}>
            ← กลับไป AIOT Solution
          </div>
        </FadeUp>
      ))}
      <FadeUp className="apcard" id="ap-codecube">
        <div className="cat">Appendix · CodeCube (AI/Data)</div>
        <h3>พรีเซนต์ CodeCube — ผลงาน AI/Data เพิ่มเติม</h3>
        <p>ตัวอย่างระบบจริงที่พัฒนาให้ลูกค้าหลากหลายอุตสาหกรรม — Telecom · Retail · Amusement · ภาครัฐ</p>
        <div className="apsubhead">ลูกค้าที่ไว้วางใจ</div>
        <LogoWall logos={CLIENT_LOGOS} compact />
        <div className="apgallery">
          {GALLERY.map((g) => (
            <div className="apthumb" key={g.label}>
              <img src={g.src} alt={g.label} loading="lazy" />
              <span>{g.label}</span>
            </div>
          ))}
        </div>
        <div className="ref">แหล่ง: CodeCube Company Profile</div>
        <div className="backlink" onClick={() => go('clients')}>
          ← กลับไปลูกค้าอ้างอิง
        </div>
      </FadeUp>
    </Section>
  )
}
