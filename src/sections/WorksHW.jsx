import React from 'react'
import { Section, SectionHeader } from '../components/ui.jsx'
import { PageBlk, WCard } from '../components/WorkPage.jsx'
import { IMG } from '../assets.js'

export default function WorksHW() {
  return (
    <Section id="hw" label="ผลงาน Hardware" alt>
      <SectionHeader
        kicker="ผลงานพูดแทน"
        title="ผลงาน · Hardware (Lighting)"
        lead="โรงงานผลิตเอง ออกแบบแสงเอง — ให้ตัวเลขและองค์กรระดับประเทศเป็นคนพูดแทน"
      />

      <PageBlk tag="Hardware · หน้า 1 / 4">
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

      <PageBlk tag="Hardware · หน้า 2 / 4">
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

      <PageBlk tag="Hardware · หน้า 3 / 4">
        <WCard
          media={{ kind: 'img', src: IMG.panasonic, cap: 'งานแสงสว่างร่วมกับ Panasonic' }}
          cat="Partner · Panasonic"
          title="งานแสงสว่าง Panasonic"
          proof="ผลิต/ติดตั้งให้แบรนด์ระดับโลก"
        >
          ร่วมงานด้านแสงสว่างกับ Panasonic — มาตรฐานการผลิตระดับที่แบรนด์ใหญ่ยอมรับ
        </WCard>
        <WCard
          media={{ kind: 'img', src: IMG.somapaFifa, cap: 'สนามฟุตบอลโสมาภา (FIFA Grade 2)' }}
          cat="Sports Lighting · FIFA Grade 2"
          title="สนามฟุตบอลโสมาภา"
          proof="ผ่านมาตรฐานแสงสว่างระดับ FIFA"
        >
          ออกแบบและติดตั้งแสงสว่างสนามฟุตบอลให้ผ่านมาตรฐาน FIFA Grade 2
        </WCard>
      </PageBlk>

      <PageBlk tag="Hardware · หน้า 4 / 4">
        <WCard
          media={{ kind: 'img', src: IMG.smtMachine, cap: 'สายการผลิต SMT ในโรงงานของเรา' }}
          cat="โรงงานของเรา"
          title="ผลิต–ออกแบบ–ทดสอบครบในที่เดียว"
        >
          Street Light · High Mast · Solar · T5/T8 · Flood · High Bay
        </WCard>
        <WCard
          media={{ kind: 'img', src: IMG.tisiCert, cap: 'ใบรับรอง มอก. 1955-2551' }}
          cat="มาตรฐาน · TISI"
          title="ใบรับรอง มอก. 1955-2551"
          proof="ผ่านการรับรองคุณภาพระดับประเทศ"
        >
          สินค้าโคมไฟของเราผ่านมาตรฐานอุตสาหกรรม มอก. 1955-2551
        </WCard>
      </PageBlk>
    </Section>
  )
}
