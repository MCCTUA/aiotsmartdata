import React from 'react'
import { PSlide, Dup } from './deckUI.jsx'
import { VID } from '../assets.js'

export default function SmartLightTraffic() {
  return (
    <>
      <Dup>
        🔁 เนื้อหานี้พอร์ตมาจาก <b>smartdata.webdemona.com</b> — หน้า Smart Light / telemetry spec
      </Dup>
      <PSlide
        kicker="Smart Light · 01"
        title="โคมมีสมอง — คุมได้ทั้งเมือง"
        cols
        points={[
          'telemetry รายต้น: ต้นไหนดับ / กินไฟผิดปกติ ระบบแจ้งเอง',
          'หรี่ตามโปรไฟล์เวลา + สั่งสดจากส่วนกลาง',
          'อัปเดตเฟิร์มแวร์ OTA · มาตรฐาน DALI-2 / D4i',
        ]}
        media={{ kind: 'video', src: VID.dashboard, poster: VID.dashboardPoster, badge: 'คลิป', cap: '0518.mp4 · dashboard' }}
      />
      <PSlide
        kicker="Smart Light · 02"
        title="เห็นทุกต้น — จัดการก่อนร้องเรียน"
        points={[
          'แผนที่โคมทั้งเครือข่าย ต้นแดง = ดับ',
          'กราฟการใช้ไฟ / ชั่วโมงสว่าง → เขียนรายงานประหยัดพลังงานได้',
          'ประวัติย้อนหลังต่อต้น สำหรับงานซ่อมบำรุง',
        ]}
      />
      <PSlide
        kicker="Smart Traffic · 03"
        title="จราจรอัจฉริยะบนเสาเดียวกัน"
        points={[
          'Radar + AI Camera บนเสาไฟ',
          'motion-aware: เร่งไฟให้สว่างเมื่อมีรถ/คน แล้วหรี่ลงเมื่อว่าง',
          'วินัยจราจร · นับ flow · ข้อมูลไปวางแผนถนน/รายได้',
        ]}
      />
      <PSlide
        kicker="Smart Traffic · 04"
        title="เชื่อมทั้งระบบ"
        points={[
          'ทริกเกอร์จอ LED (VMS) เตือนอัตโนมัติเมื่อมีเหตุ',
          'ข้อมูลรวมศูนย์ที่ dashboard เดียว',
          'ต่อยอด sensor อื่น (น้ำท่วม/อากาศ/พลังงาน) บนโครงข่ายเดิม',
        ]}
      />
    </>
  )
}
