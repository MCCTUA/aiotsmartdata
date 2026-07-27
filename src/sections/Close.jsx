import React from 'react'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'

export default function Close() {
  return (
    <Section id="close" label="สรุป">
      <SectionHeader
        kicker="สรุป"
        title="คุณมีงานและ connection — เรามีของที่ทำเอง คุมเอง และต่อยอดได้"
        lead="โรงงานของเราเอง · ออกแบบ node/AI เอง + พันธมิตรครบ · ผลงานกับองค์กรระดับ EGAT–การทางฯ–การประปาฯ"
      />
      <FadeUp className="callout">
        <div className="big">
          ขอ 2 อย่างวันนี้: <span className="hl">ดู demo</span> ที่เตรียมมา และบอกเรา{' '}
          <span className="hl">1 โครงการ</span> ที่คุณกำลังจะยื่น —
          เดี๋ยวเราคำนวณแสง–ออกแบบระบบ–ตีกรอบให้ภายในสัปดาห์นี้
        </div>
      </FadeUp>
    </Section>
  )
}
