import React from 'react'
import { PSlide, Dup, Foot } from './deckUI.jsx'
import { IMG } from '../assets.js'

export default function SmartEnergy() {
  return (
    <>
      <Dup phase>
        🗺️ <b>Phase 2 · แผน (Roadmap)</b> — ยังไม่พร้อมขายตอนนี้ แสดงเพื่อให้เห็นทิศทางต่อยอด
      </Dup>
      <PSlide
        kicker="Smart Energy · 01"
        title="อ่านค่าพลังงานจากตู้ MDB"
        points={[
          'ต่อ meter / CT ที่ตู้ MDB (Main Distribution Board)',
          'อ่านค่าผ่าน Modbus / pulse',
          'node ส่งข้อมูลขึ้น cloud แบบเรียลไทม์',
        ]}
      />
      <PSlide
        kicker="Smart Energy · 02"
        title="Dashboard พลังงาน"
        cols
        points={[
          'kWh / โหลด / ช่วงพีค รายอาคาร–รายจุด',
          'เทียบก่อน–หลังปรับปรุง',
          'แจ้งเตือนการใช้ไฟผิดปกติ',
        ]}
        media={{
          kind: 'img',
          src: IMG.smartlightScreen1,
          cap: 'ตัวอย่าง dashboard จริงจากแพลตฟอร์ม Smart Light — สไตล์ที่จะต่อยอดให้ Smart Energy (ยังไม่เริ่มพัฒนา)',
        }}
      />
      <PSlide
        kicker="Smart Energy · 03"
        title="ต่อยอด"
        points={[
          'รายงานประหยัดพลังงานให้ อปท. ใช้ของบก้อนต่อไป',
          'คำนวณคาร์บอนที่ลดได้',
          'เชื่อมกับ Smart Light / Solar เดิมบนแพลตฟอร์มเดียว',
        ]}
      >
        <Foot>Phase 2 — เริ่มหลังฐาน node / แพลตฟอร์มติดตั้งแล้ว</Foot>
      </PSlide>
    </>
  )
}
