import React, { useState } from 'react'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'

const TABS = [
  {
    key: 'energy',
    label: 'พลังงาน / โซลาร์',
    h: 'งานพลังงาน / โซลาร์',
    p: 'node เดียวกันวัดการผลิต-ใช้ไฟรายจุด → dashboard พลังงานเมือง → รายงานประหยัดพลังงานไปของบก้อนต่อไป',
  },
  {
    key: 'water',
    label: 'ภัยแล้ง / น้ำ',
    h: 'งานภัยแล้ง / น้ำ',
    p: 'เสาไฟที่มีไฟฟ้าอยู่แล้ว = จุดติดเซนเซอร์วัดระดับน้ำ/ความชื้นดิน → ระบบเตือนภัยแล้ง–น้ำท่วม',
  },
  {
    key: 'carbon',
    label: 'คาร์บอน / สิ่งแวดล้อม',
    h: 'งานคาร์บอน / สิ่งแวดล้อม',
    p: 'มีข้อมูลพลังงานจริง → คำนวณคาร์บอนที่ลดได้ → ใช้สมัครรางวัล/ของบสิ่งแวดล้อม',
  },
  {
    key: 'traffic',
    label: 'จราจร / รายได้',
    h: 'งานจราจร / ความปลอดภัย / รายได้',
    p: 'กล้องเดียวกันทำวินัยจราจร ลานจอดเก็บเงิน เฝ้าสะพาน ได้อีกหลายงาน',
  },
]

export default function Expand() {
  const [active, setActive] = useState('energy')
  const pane = TABS.find((t) => t.key === active)
  return (
    <Section id="expand" label="ต่อยอด" alt>
      <SectionHeader
        kicker="มองไปข้างหน้า"
        title="หนึ่งแพลตฟอร์ม เปิดได้อีกหลายงาน"
        lead="เสาไฟ/กล้องที่ติดวันนี้ = โครงข่ายเซนเซอร์ทั่วเมือง งานราชการชิ้นต่อไปต่อยอดจากของเดิม ต้นทุนต่ำลง ทำได้ง่ายขึ้น"
      />
      <FadeUp className="tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`tab${active === t.key ? ' on' : ''}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </FadeUp>
      <div className="tabpane">
        <div className="card">
          <h3>{pane.h}</h3>
          <p>{pane.p}</p>
        </div>
      </div>
      <FadeUp className="callout">
        <div className="big">
          ลงโครงสร้าง<span className="hl">ครั้งเดียว</span> แล้วต่อยอดเป็นงานใหม่ได้เรื่อย ๆ บนฐานเดิม
        </div>
      </FadeUp>
    </Section>
  )
}
