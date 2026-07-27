import React from 'react'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'
import SolarOptions from '../components/SolarOptions.jsx'

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
        title="Solar Street Light แบบแยกชิ้น — ผลการคำนวณ DIALux"
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
        </div>
        <div className="pendingmedia" style={{ aspectRatio: '4/3', borderRadius: 14 }}>
          <div className="ic">📐</div>
          <div className="t">รอไฟล์จากทีมออกแบบแสง</div>
          <div className="s">ผล DIALux — layout เสา/ความสว่าง</div>
        </div>
      </FadeUp>
      <FadeUp>
        <SolarOptions />
      </FadeUp>
    </Section>
  )
}
