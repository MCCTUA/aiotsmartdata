import React from 'react'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'
import { asset } from '../assets.js'

export default function NemaZhaga() {
  return (
    <Section id="nz" label="Nema vs Zhaga" alt>
      <SectionHeader
        kicker="มาตรฐานหัวเสียบ"
        title="Nema กับ Zhaga ต่างกันอย่างไร — และทำไมเราเลือก Zhaga"
        lead="ทั้งคู่คือ “หัวเสียบมาตรฐาน” ที่ทำให้เปลี่ยนสมองได้โดยไม่ต้องรื้อโคม แต่ออกแบบมาต่างเป้าหมาย"
      />

      <FadeUp className="cmp">
        <div className="col">
          <div className="h">
            NEMA <span className="tag">ANSI C136.41 · 7-pin</span>
          </div>
          <div className="row pro">
            <span className="i">✚</span>
            <div>มาตรฐานเก่าแก่ ใช้แพร่หลายมากในไฟถนน retrofit ทั่วโลก</div>
          </div>
          <div className="row pro">
            <span className="i">✚</span>
            <div>ติดด้านบนโคม เปลี่ยนหน้างานง่าย (twist-lock)</div>
          </div>
          <div className="row pro">
            <span className="i">✚</span>
            <div>รองรับ dimming 0-10V/DALI + เซนเซอร์แสงพื้นฐาน</div>
          </div>
          <div className="row con">
            <span className="i">△</span>
            <div>หัวใหญ่ ยื่นเหนือโคม ดูไม่เนียน</div>
          </div>
          <div className="row con">
            <span className="i">△</span>
            <div>เน้นงาน “ควบคุมไฟ” เป็นหลัก · ต่อเซนเซอร์อัจฉริยะได้จำกัด</div>
          </div>
        </div>
        <div className="col win">
          <div className="h">
            ZHAGA <span className="tag">Book 18 · D4i</span>
          </div>
          <div className="row pro">
            <span className="i">✚</span>
            <div>ออกแบบยุคใหม่สำหรับ “เซนเซอร์อัจฉริยะ + IoT” โดยเฉพาะ</div>
          </div>
          <div className="row pro">
            <span className="i">✚</span>
            <div>
              รองรับ <strong>D4i (DALI-2 + จ่ายไฟในตัว)</strong> — ตรงกับที่เราทำ DALI-2
            </div>
          </div>
          <div className="row pro">
            <span className="i">✚</span>
            <div>ขนาดกะทัดรัด แนบเนียนกับโคม ดูพรีเมียม</div>
          </div>
          <div className="row pro">
            <span className="i">✚</span>
            <div>ต่อ sensor / radar / กล้อง ได้ยืดหยุ่นกว่า — future-proof</div>
          </div>
          <div className="row con">
            <span className="i">△</span>
            <div>ระบบนิเวศใหม่กว่า · ต้องใช้กับโคมที่รองรับ Zhaga</div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="nzimg">
        <img src={asset('node/node_zhaga.jpg')} alt="AIOT node (Zhaga) ของเรา" loading="lazy" />
        <div className="cap">
          🔒 Node AIOT (Zhaga) ที่เราออกแบบเอง — เบอร์ IC/ยี่ห้อชิ้นส่วนถูกปิดเพื่อป้องกันการลอกแบบ
        </div>
      </FadeUp>

      <FadeUp className="why">
        <h3>ทำไมเราเลือก Zhaga</h3>
        <div className="whygrid">
          <div className="whyitem">
            <span className="i">1</span>
            <div>
              เข้ากันกับ <strong>DALI-2 / D4i</strong> ที่เราพัฒนาอยู่แล้ว —
              คุมโคมได้ละเอียดและเป็นมาตรฐานสากล
            </div>
          </div>
          <div className="whyitem">
            <span className="i">2</span>
            <div>
              ออกแบบมาเพื่อ <strong>เซนเซอร์</strong> โดยตรง — ตรงกับกลยุทธ์ “ต่อยอด AIOT Sensor” ของเรา
            </div>
          </div>
          <div className="whyitem">
            <span className="i">3</span>
            <div>
              กะทัดรัด แนบเนียน เหมาะกับ <strong>Smart Pole</strong> และงานเมืองที่ต้องดูดี
            </div>
          </div>
          <div className="whyitem">
            <span className="i">4</span>
            <div>
              <strong>Future-proof</strong> — รองรับกล้อง/radar/sensor รุ่นใหม่ได้โดยไม่ต้องเปลี่ยนหัว
            </div>
          </div>
        </div>
        <div className="notebar" style={{ marginTop: 18 }}>
          <span className="ic">🔌</span>
          <p>
            เราออกแบบรองรับทั้งสองมาตรฐาน (Nema สำหรับงาน retrofit เดิม · Zhaga เป็นแกนอนาคต) —
            ลูกค้าเลือกได้ตามงาน
          </p>
        </div>
      </FadeUp>
    </Section>
  )
}
