import React from 'react'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'

const QAS = [
  [
    '“มี supplier smart light อยู่แล้ว”',
    'node เราคุมโคมเจ้าเดิมได้ ไม่ต้องทิ้งของ + ทำสิ่งที่คนเทรดของทำไม่ได้ (dimming ตามสเปค / OTA / telemetry / AI)',
  ],
  [
    '“แพงกว่าของนำเข้าไหม”',
    'เราทำเองจึงคุมต้นทุนได้ + ขายส่ง/white label + คิดทั้งอายุงาน (แก้จากออฟฟิศได้ · มอก. ผ่าน audit · ต่อยอดเป็นงานใหม่) = คุ้มกว่า',
  ],
  [
    '“ทำเองจริงไหม / เสถียรไหม”',
    'เส้นทาง LTE→LoRa→Universal + demo สด + โคมที่ EGAT เปิด 24 ชม. ในที่ร้อนจัด',
  ],
  ['“ต้องรื้อกล้องเดิมไหม”', 'ไม่ต้อง — ต่อหลัง NVR หรือขนานกับของเดิม เริ่มจาก Jetson จุดเดียวก็ได้'],
  ['“Solar ราคาเท่าไหร่”', 'กำลังทำ DIALux อยู่ ไม่รับปากตัวเลขที่ยังไม่นิ่ง จะเร่งส่งให้'],
]

export default function QA() {
  return (
    <Section id="qa" label="Q&A" alt>
      <SectionHeader kicker="เตรียมรับ" title="คำถามที่มักเจอ" />
      <FadeUp className="qa">
        {QAS.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <div className="ans">{a}</div>
          </details>
        ))}
      </FadeUp>
    </Section>
  )
}
