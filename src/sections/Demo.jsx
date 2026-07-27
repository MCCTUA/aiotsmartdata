import React from 'react'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'

const STEPS = [
  ['จังหวะ 1', 'เห็นทุกต้น', 'แผนที่โคม ต้นแดง = ดับ ระบบแจ้งเองก่อนชาวบ้านโทรมา', '🗺️', 'map dashboard'],
  ['จังหวะ 2', 'สั่งหรี่สด', 'ปรับโปรไฟล์ dimming ต่อหน้า ไม่ต้องปีนเสาสักต้น', '🎚️', 'dimming control'],
  ['จังหวะ 3', 'ข้อมูลย้อนหลัง', 'กราฟการใช้ไฟ/ชั่วโมงสว่าง เอาไปเขียนรายงานได้', '📊', 'energy chart'],
]

export default function Demo() {
  return (
    <Section id="demo" label="Demo Smart Light">
      <SectionHeader
        kicker="สาธิตสด"
        title="Demo Smart Street Light — 3 จังหวะ"
        lead="screen จริงจาก dev จะฝังแทน placeholder"
      />
      <FadeUp className="grid g3">
        {STEPS.map(([eye, h, p, fic, cap]) => (
          <div className="card" key={eye}>
            <div className="eyebrow" style={{ color: 'var(--blue)' }}>
              {eye}
            </div>
            <h3 style={{ marginTop: 6 }}>{h}</h3>
            <p>{p}</p>
            <div className="media img" style={{ borderRadius: 12, marginTop: 12 }}>
              <div className="fic">{fic}</div>
              <div className="cap">{cap}</div>
            </div>
          </div>
        ))}
      </FadeUp>
    </Section>
  )
}
