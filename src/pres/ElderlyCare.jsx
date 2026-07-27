import React from 'react'
import { PSlide, Dup } from './deckUI.jsx'

export default function ElderlyCare() {
  return (
    <>
      <Dup>
        🔁 เนื้อหานี้พอร์ตมาจาก <b>smartdata.webdemona.com</b> — หน้า ElderlyCare
      </Dup>
      <PSlide
        kicker="Elderly Care · 01"
        title="ดูแลผู้สูงอายุ 24 ชม."
        points={[
          'ตรวจจับการล้ม (fall) ในโซนที่กำหนด',
          'ออกนอกบริเวณ (wandering) นอกเวลาที่ควร',
          'แจ้งเตือนญาติ + อสม. ทันทีเมื่อมีเหตุ',
        ]}
      />
      <PSlide
        kicker="Elderly Care · 02"
        title="เคารพความเป็นส่วนตัว"
        points={[
          'ประมวลผลที่ edge — ไม่ส่งภาพขึ้นคลาวด์',
          'consent-based (ผู้ดูแล + ครอบครัวยินยอม)',
          'เซนเซอร์อยู่ในห้อง ไม่ใช่บนตัวผู้สูงอายุ · ใช้เรดาร์แทนกล้องได้ในจุดอ่อนไหว',
        ]}
      />
      <PSlide
        kicker="Elderly Care · 03"
        title="ต่อยอดสู่บริการชุมชน"
        points={[
          'รวมสถานะหลายบ้าน → dashboard ศูนย์ดูแล/เทศบาล',
          'สถิติเหตุการณ์ → วางแผนเยี่ยมบ้าน/จัดสรร อสม.',
          'เชื่อมกับระบบแจ้งเหตุฉุกเฉินเดิมของหน่วยงาน',
        ]}
      />
    </>
  )
}
