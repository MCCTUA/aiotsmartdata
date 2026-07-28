import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

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
        lead="กดปุ่ม “เปิดพรีเซนต์ฉบับเต็ม” ของแต่ละแอป · กด ← กลับ เพื่อกลับมาหน้านี้จุดเดิม"
      />
      {CARDS.map((c) => (
        <FadeUp className="apcard" id={c.id} key={c.id}>
          <div className="cat">{c.cat}</div>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
          <button className="presbtn" onClick={() => navigate(`/pres/${c.id}`)}>
            ▶ เปิดพรีเซนต์ฉบับเต็ม
          </button>
          <div className="ref">{c.ref}</div>
          <div className="backlink" onClick={() => go('solution')}>
            ← กลับไป AIOT Solution
          </div>
        </FadeUp>
      ))}
    </Section>
  )
}
