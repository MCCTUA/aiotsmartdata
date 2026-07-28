import React from 'react';
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx';

export default function Edge() {
  return (
    <Section id="edge" label="จุดเด่นของเรา">
      <SectionHeader
        kicker="ทำไมต้องเป็นเรา"
        title="จุดเด่น: One Stop Solution"
        lead="เรามีทั้ง Hardware และ Software อยู่ที่เดียวกัน"
      />
      <FadeUp className="house">
        <div className="pillar">
          <div className="ic">🏭</div>
          <h3>ด้าน Hardware — โรงงานของเราเอง</h3>
          <p>
            ออกแบบและผลิต PCB / PCBA พร้อม Firmware บน Hardware เอง โรงงานโคม
            LED มอก. · ทดสอบ LM‑79/80 · ขอใบอนุญาตและมาตรฐานต่าง ๆ
            ให้ลูกค้าได้ครบวงจร
          </p>
          <div className="ev">→ คุมคุณภาพและต้นทุนได้ตั้งแต่ต้นน้ำ</div>
        </div>
        <div className="plus">+</div>
        <div className="pillar">
          <div className="ic">💻</div>
          <h3>ด้าน Software — ระบบภาครัฐระดับชาติ </h3>
          <p>
            ซอฟต์แวร์เฮาส์ครบวงจร — Front · Back · DB · Network ·
            ระบบข้อมูลขนาดใหญ่ (IoT · Big Data · ML) ขนาดใหญ่ให้ภาครัฐมา 8+ ปี
          </p>
          <div className="ev">
            → ควบคุมได้ทั้งระบบ ลอกตามได้ยาก ออกแบบตามการใช้งานจริง
          </div>
        </div>
      </FadeUp>
      <FadeUp className="synbar">
        = <span className="hl">Complete Solution"</span> —
        คุณไม่ต้องแบกความเสี่ยงของการต่อสาย vendor หลายเจ้าเข้าด้วยกัน
      </FadeUp>
    </Section>
  );
}
