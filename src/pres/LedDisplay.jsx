import React from 'react'
import { PSlide, Dup, Foot } from './deckUI.jsx'
import { VID } from '../assets.js'

export default function LedDisplay() {
  return (
    <>
      <Dup>
        🔁 งานจอ LED ของเรา — เนื้อหาอ้างอิงงานป้าย VMS (รวมงานสะพานรัษฎาภิเศก ลำปาง)
      </Dup>
      <PSlide
        kicker="LED Display · 01"
        title="ป้ายจอ LED (VMS) — เตือนล่วงหน้า อ่านง่าย"
        cols
        points={[
          'จอเตือน/แสดงผลข้อความแบบเรียลไทม์',
          'full-color และ 3-color',
          'ทนแดด–ฝน ใช้กลางแจ้ง อ่านง่ายทุกเพศทุกวัย',
        ]}
        media={{ kind: 'video', src: VID.overheightDemo, poster: VID.overheightDemoPoster, badge: 'คลิป', cap: 'overheight_demo.mp4' }}
      />
      <PSlide
        kicker="LED Display · 02"
        title="การใช้งาน"
        points={[
          'เตือนรถสูงเกินก่อนถึงสะพาน/อุโมงค์',
          'ข้อความจราจร · ประชาสัมพันธ์ · แจ้งเหตุฉุกเฉิน',
          'สั่งงานจากส่วนกลาง / ทริกเกอร์อัตโนมัติจากเซนเซอร์',
        ]}
      />
      <PSlide
        kicker="LED Display · 03"
        title="ขนาด & การเชื่อมต่อ"
        points={[
          'ตั้งแต่จอเล็ก 1m×1m ถึงจอใหญ่',
          'เชื่อมกับระบบเฝ้าระวัง / overheight / traffic',
          'จัดคิวข้อความ + ตารางเวลาได้',
        ]}
      >
        <Foot>ขนาด/สเปกจริงยืนยันตามงาน</Foot>
      </PSlide>
    </>
  )
}
