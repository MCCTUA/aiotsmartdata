import React from 'react'
import { Section, SectionHeader } from '../components/ui.jsx'
import { PageBlk, WCard } from '../components/WorkPage.jsx'

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
          media={{ kind: 'img', fic: '💡', cap: 'รูปโคม High Bay/Canopy ที่ EGAT' }}
          cat="Reliability · EGAT"
          title="เปิด 24 ชั่วโมงต่อเนื่อง"
          proof="ความทนที่มาจากสนามจริง ไม่ใช่สเปคในกระดาษ"
        >
          โคมของเราที่ EGAT ทำงานตลอด 24 ชม. ในสภาพแวดล้อมร้อนจัด และยังใช้ต่อเนื่อง
        </WCard>
        <WCard
          media={{ kind: 'img', fic: '🏗️', cap: 'รูป High Mast ลานจอด MMTH' }}
          cat="High Mast · Custom"
          title="งานออกแบบเฉพาะ — MMTH"
          proof="งานที่คนซื้อโคมมาติดทำไม่ได้"
        >
          เสาสูง 25 ม. ระยะห่างเสากว้างผิดปกติ ยังคุมความสว่างสม่ำเสมอ + ลดพลังงานมหาศาล
        </WCard>
      </PageBlk>

      <PageBlk tag="Hardware · หน้า 2 / 3">
        <WCard
          media={{ kind: 'img', fic: '☀️', cap: 'รูป Solar Street Light ที่ TOA' }}
          cat="Solar Light · TOA"
          title="ออกแบบตามมาตรฐาน + กฎหมาย"
          proof="งานออกแบบแสง ไม่ใช่แค่ซื้อโคม"
        >
          ออกแบบความสว่างผ่านทั้งมาตรฐานและข้อกำหนดทางกฎหมาย
        </WCard>
        <WCard
          media={{ kind: 'img', fic: '🛣️', cap: 'รูปไฟถนนลาดพร้าว' }}
          cat="Street Light"
          title="โคมไฟถนน ลาดพร้าว"
        >
          ปรับปรุงแสงสว่างถนนสายหลัก กทม.
        </WCard>
      </PageBlk>

      <PageBlk tag="Hardware · หน้า 3 / 3">
        <WCard
          media={{ kind: 'img', fic: '🚆', cap: 'รูปงาน T5 สถานีกลางกรุงเทพอภิวัฒน์' }}
          cat="Indoor · T5"
          title="สถานีกลางกรุงเทพอภิวัฒน์"
          proof="งานระดับ landmark ของประเทศ"
        >
          งานหลอด T5 ในสถานีรถไฟหลักของประเทศ
        </WCard>
        <WCard
          media={{ kind: 'img', fic: '🏭', cap: 'รูปสายการผลิต/มอก.' }}
          cat="โรงงานของเรา"
          title="ผลิต–ออกแบบ–ทดสอบครบในที่เดียว"
        >
          Street Light · High Mast · Solar · T5/T8 · Flood · High Bay
        </WCard>
      </PageBlk>
    </Section>
  )
}
