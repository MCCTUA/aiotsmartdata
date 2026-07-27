import React from 'react'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'

const SPECS = [
  ['สถานะงาน', 'กำลังคำนวณ DIALux (แสงจริง)'],
  ['โคม', <>เลือกรุ่นตามผลคำนวณ — <span className="latin">TBD</span></>],
  ['ลูเมน', 'คำนวณให้ได้ Eav ≥ 20 lx @ 25–30 ม.'],
  ['แบตเตอรี่ (LiFePO4)', <>ความจุสำหรับสำรอง 3 คืนจริง — <span className="latin">TBD</span></>],
  ['แผงโซลาร์ + MPPT', <>ขนาดตามงบพลังงาน — <span className="latin">TBD</span></>],
  ['โปรไฟล์หรี่', 'หัวค่ำ–22:00 เต็ม · 22:00–04:00 ≥10 lx · 04:00–สว่างเต็ม'],
]

export default function Solar() {
  return (
    <Section id="solar" label="Solar Street Light">
      <SectionHeader
        kicker="หัวข้อท้ายสุด"
        title="Solar Street Light แบบแยกชิ้น — เราคำนวณ ไม่ได้เดา"
        lead="โจทย์: ถนน 4–5 ม. เสา 6 ม. ระยะห่าง 25–30 ม. ความสว่างเฉลี่ย ≥ 20 lx สำรอง 3 คืน หรี่ 3 ช่วง"
      />
      <FadeUp className="grid g2" style={{ alignItems: 'start' }}>
        <div>
          <div className="spec">
            {SPECS.map(([k, v], i) => (
              <div className="r" key={i}>
                <div className="k">{k}</div>
                <div className="v">{v}</div>
              </div>
            ))}
            <div className="r">
              <div className="k">ราคา</div>
              <div className="v" style={{ color: 'var(--amber)', fontWeight: 600 }}>
                ยังไม่สรุป — จะเร่งส่งเมื่อคำนวณจบ
              </div>
            </div>
          </div>
          <div className="notebar" style={{ marginTop: 22 }}>
            <span className="ic">🤝</span>
            <p>งานนี้ยังไม่จบ เราไม่ให้ตัวเลขที่ยังไม่นิ่งจนคุณเอาไปเสนอลูกค้าแล้วเสียหน้าทีหลัง</p>
          </div>
        </div>
        <div className="media img tall" style={{ borderRadius: 14 }}>
          <div className="fic">📐</div>
          <div className="cap">ผล DIALux — layout เสา/ความสว่าง</div>
        </div>
      </FadeUp>
      <FadeUp as="p" className="lead" style={{ marginTop: 26 }}>
        งานระยะห่างกว้างแบบนี้คือ “งานออกแบบแสง” — แบบเดียวกับ <strong>High Mast MMTH</strong>{' '}
        ที่เราวางเสาห่างได้จริง
      </FadeUp>
    </Section>
  )
}
