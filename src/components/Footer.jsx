import React from 'react'
import { IMG } from '../assets.js'

export default function Footer() {
  return (
    <footer>
      <div className="footlogos">
        <img src={IMG.codecubeLogo} alt="CodeCube" />
        <img src={IMG.gismoLion} alt="Genius Gismo" />
      </div>
      <div className="big">AIOT · Lighting &amp; Vision Platform</div>
      <div>CodeCube (Software / AIOT) × Genius Gismo (Lighting Hardware)</div>
      <div className="disc">
        ภาพรวมเนื้อหาสำหรับการนำเสนอ · aiot.webdemona.com · รูป/คลิป/ภาพ node บางส่วนเป็น placeholder ·
        ตัวเลข/สเปก Solar เป็นค่าประมาณ ยืนยันด้วยการคำนวณ/วัดจริง
      </div>
    </footer>
  )
}
