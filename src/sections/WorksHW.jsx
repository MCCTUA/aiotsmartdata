import React from 'react'
import { Section, SectionHeader } from '../components/ui.jsx'
import { PageBlk, WCard } from '../components/WorkPage.jsx'
import { IMG, VID } from '../assets.js'

export default function WorksHW() {
  return (
    <Section id="hw" label="ผลงาน Hardware" alt>
      <SectionHeader
        kicker="ผลงานพูดแทน"
        title="ผลงาน · Hardware (Lighting)"
        lead="โรงงานผลิตเอง ออกแบบแสงเอง — ให้ตัวเลขและองค์กรระดับประเทศเป็นคนพูดแทน"
      />

      <PageBlk tag="Hardware · หน้า 1 / 3">
        <WCard
          media={{ kind: 'img', src: IMG.egat, cap: 'High Bay/Canopy ที่ EGAT' }}
          cat="Reliability · EGAT"
          title="เปิด 24 ชั่วโมงต่อเนื่อง"
          proof="ความทนที่มาจากสนามจริง ไม่ใช่สเปคในกระดาษ"
        >
          โคมของเราที่ EGAT ทำงานตลอด 24 ชม. ในสภาพแวดล้อมร้อนจัด และยังใช้ต่อเนื่อง
        </WCard>
        <WCard
          media={{ kind: 'img', src: IMG.mmth, cap: 'High Mast ลานจอด MMTH' }}
          cat="High Mast · Custom"
          title="งานออกแบบเฉพาะ — MMTH"
          proof="งานที่คนซื้อโคมมาติดทำไม่ได้"
        >
          เสาสูง 25 ม. ระยะห่างเสากว้างผิดปกติ ยังคุมความสว่างสม่ำเสมอ + ลดพลังงานมหาศาล
        </WCard>
      </PageBlk>

      <PageBlk tag="Hardware · หน้า 2 / 3">
        <WCard
          media={{ kind: 'img', src: IMG.toa, cap: 'Solar Street Light ลานจอด TOA' }}
          cat="Solar Light · TOA"
          title="ออกแบบตามมาตรฐาน + กฎหมาย"
          proof="งานออกแบบแสง ไม่ใช่แค่ซื้อโคม"
        >
          ออกแบบความสว่างผ่านทั้งมาตรฐานและข้อกำหนดทางกฎหมาย
        </WCard>
        <WCard
          media={{ kind: 'img', src: IMG.huaykwang, cap: 'ไฟถนน เขตห้วยขวาง' }}
          cat="Street Light"
          title="โคมไฟถนน เขตห้วยขวาง"
        >
          ปรับปรุงแสงสว่างถนนสายหลัก กทม.
        </WCard>
      </PageBlk>

      <PageBlk tag="Hardware · หน้า 3 / 3">
        <WCard
          mediaNode={
            <div className="pendingmedia">
              <div className="ic">🚆</div>
              <div className="t">รอรูปจากหน้างาน</div>
              <div className="s">สถานีกลางกรุงเทพอภิวัฒน์ (T5)</div>
            </div>
          }
          cat="Indoor · T5"
          title="สถานีกลางกรุงเทพอภิวัฒน์"
          proof="งานระดับ landmark ของประเทศ"
        >
          งานหลอด T5 ในสถานีรถไฟหลักของประเทศ
        </WCard>
        <WCard
          media={{ kind: 'video', src: VID.smtPcba, poster: VID.smtPcbaPoster, badge: 'คลิป', cap: 'สายการผลิต SMT LED PCBA ในโรงงานของเรา' }}
          cat="โรงงานของเรา"
          title="ผลิต–ออกแบบ–ทดสอบครบในที่เดียว"
        >
          Street Light · High Mast · Solar · T5/T8 · Flood · High Bay
        </WCard>
      </PageBlk>
    </Section>
  )
}
