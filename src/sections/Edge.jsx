import React from 'react'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'

export default function Edge() {
  return (
    <Section id="edge" label="จุดเด่นของเรา">
      <SectionHeader
        kicker="ทำไมต้องเป็นเรา"
        title="จุดเด่น: เรามีทั้ง Hardware และ Software อยู่ที่เดียวกัน"
        lead="ในตลาดนี้ ส่วนใหญ่เก่งอย่างใดอย่างหนึ่ง — เก่งโคมแต่ไม่มีระบบ หรือเก่งระบบแต่ต้องไปซื้อโคมคนอื่น เราทำได้ทั้งสองด้านในบ้านเดียว"
      />
      <FadeUp className="house">
        <div className="pillar">
          <div className="ic">🏭</div>
          <h3>ด้าน Hardware — โรงงานของเราเอง</h3>
          <p>
            ผลิต PCB และ LED เองในโรงงาน ได้ มอก. ทดสอบ LM-79/LM-80 เบิร์นอินทุกล็อต
            และออกแบบคำนวณแสงเอง
          </p>
          <div className="ev">→ คุมคุณภาพและต้นทุนได้ตั้งแต่ต้นน้ำ</div>
        </div>
        <div className="plus">+</div>
        <div className="pillar">
          <div className="ic">💻</div>
          <h3>ด้าน Software — AIOT ระดับชาติ</h3>
          <p>
            ออกแบบ node / เฟิร์มแวร์ / AI เอง และทำระบบข้อมูลให้ภาครัฐมา 20+ ปี (IoT · Big Data · ML)
          </p>
          <div className="ev">→ ควบคุมได้ทั้งระบบ ลอกตามได้ยาก</div>
        </div>
      </FadeUp>
      <FadeUp className="synbar">
        = <span className="hl">End-to-end เจ้าเดียว</span> — คุณไม่ต้องแบกความเสี่ยงของการต่อสาย vendor
        หลายเจ้าเข้าด้วยกัน
      </FadeUp>
    </Section>
  )
}
