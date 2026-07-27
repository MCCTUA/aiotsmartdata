import React from 'react'
import { PSlide, Dup } from './deckUI.jsx'
import { IMG } from '../assets.js'

export default function SmartPole() {
  return (
    <>
      <Dup>
        🔁 เนื้อหานี้เรียบเรียงจากชิ้นส่วนของ <b>smartdata.webdemona.com</b> (ไฟ + กล้อง + sensor + จอ)
      </Dup>
      <PSlide
        kicker="Smart Pole · 01"
        title="เสาต้นเดียว รวมทุกอย่าง"
        cols
        points={[
          'ไฟ LED + กล้อง AI + เซนเซอร์ + จอ LED + การสื่อสาร',
          'ใช้ node / แพลตฟอร์มเดียวกันทั้งหมด',
          'หัวเสียบ Zhaga → ต่อยอด sensor รุ่นใหม่ได้โดยไม่รื้อเสา',
        ]}
        media={{ kind: 'img', src: IMG.smartPolePhoto, cap: 'เสาไฟติดตั้งจริงหน้างาน' }}
      />
      <PSlide
        kicker="Smart Pole · 02"
        title="โครงสร้างพื้นฐานเมืองอัจฉริยะ"
        points={[
          'วางครั้งเดียว ใช้ได้หลายงาน (ไฟ/จราจร/สิ่งแวดล้อม/ความปลอดภัย)',
          'ขยายเพิ่มโมดูลได้ภายหลังตามงบ',
          'ฐานข้อมูลเดียวทั้งเมือง — งานราชการชิ้นต่อไปต่อยอดจากของเดิม',
        ]}
      />
      <PSlide
        kicker="Smart Pole · 03"
        title="เริ่มเล็ก แล้วโต"
        points={[
          'เฟสแรก: ไฟอัจฉริยะ + กล้องจุดเสี่ยง',
          'เฟสถัดไป: sensor พลังงาน/น้ำ/อากาศ เสียบเพิ่ม',
          'จบที่ dashboard เมืองที่รวมทุก sensor ไว้ที่เดียว',
        ]}
      />
    </>
  )
}
