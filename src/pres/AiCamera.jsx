import React from 'react'
import { PSlide, Dup } from './deckUI.jsx'
import { VID } from '../assets.js'

export default function AiCamera() {
  return (
    <>
      <Dup>
        🔁 เนื้อหานี้พอร์ตมาจาก <b>smartdata.webdemona.com</b> — หน้า AI Camera / Vision
      </Dup>
      <PSlide
        kicker="AI Camera · 01"
        title="กล้องเดิม + AI = กล้องฉลาด"
        cols
        points={[
          'ต่อ Edge AI เข้ากล้อง/NVR เดิม ไม่ต้องรื้อของเก่า',
          '2 โหมด: ต่อหลัง NVR (อ่านสตรีมรวม) / ต่อขนานกับกล้อง',
          'สเกล: Jetson จุดเดียว → server หลายร้อยกล้อง',
        ]}
        media={{ kind: 'video', src: VID.lpr, poster: VID.lprPoster, badge: 'คลิป', cap: 'lpr-demo.mp4' }}
      />
      <PSlide
        kicker="AI Camera · 02"
        title="ตรวจจับเหตุการณ์ (Event Detection)"
        points={[
          'จราจร: ฝ่าไฟแดง · ย้อนศร · จอดผิดที่ · นับรถ/แยกประเภท',
          'ความปลอดภัย: บุกรุกพื้นที่หวงห้าม · ทิ้งขยะ · ฝูงชนหนาแน่น',
          'อ่านป้ายทะเบียน (LPR) ตอนเกิดเหตุ · รถสูงเกินก่อนถึงสะพาน',
        ]}
      />
      <PSlide
        kicker="AI Camera · 03"
        title="รถสูงเกิน — เฝ้าสะพาน/อุโมงค์"
        cols
        points={[
          'ตรวจความสูงรถล่วงหน้า → ทริกเกอร์จอ LED เตือน',
          'บันทึกเหตุการณ์เป็นหลักฐาน เชื่อมระบบส่วนกลาง',
          'ทำงานร่วมกับป้าย VMS และไม้กั้นได้',
        ]}
        media={{ kind: 'video', src: VID.overheightScene, poster: VID.overheightPoster, badge: 'คลิป', cap: 'over-height/scene.mp4' }}
      />
      <PSlide
        kicker="AI Camera · 04"
        title="ความเป็นส่วนตัว / PDPA"
        points={[
          'เป้าหมาย = เฝ้าระวัง/บันทึกเหตุการณ์บนโครงสร้างพื้นฐานของหน่วยงานเอง ไม่ใช่ติดตามตัวประชาชน',
          'เก็บ event metadata + thumbnail เท่าที่จำเป็น · ตั้งค่าไม่เก็บคลิปได้',
          'PDPA pack + privacy blur + audit log · ประมวลผลที่ edge ในไทย',
        ]}
      />
    </>
  )
}
