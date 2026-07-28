import React from 'react';
import { Section, SectionHeader } from '../components/ui.jsx';
import { PageBlk, WCard } from '../components/WorkPage.jsx';
import { IMG, VID } from '../assets.js';

export default function WorksHW() {
  return (
    <Section id="hw" label="ผลงาน Hardware" alt>
      <SectionHeader
        kicker="ตัวอย่างผลงาน"
        title="ผลงาน · Hardware (Lighting)"
        lead="โรงงานผลิตเอง ออกแบบแสงเอง ประสบการณ์มากกว่า 16 ปี"
      />

      <PageBlk tag="Hardware · หน้า 1 / 3">
        <WCard
          media={{
            kind: 'img',
            src: IMG.egat,
            cap: 'High Bay/Canopy ที่ EGAT',
            fit: 'contain'
          }}
          cat="Reliability · EGAT"
          title="เปิด 24 ชั่วโมงต่อเนื่อง"
          proof="ความทนที่มาจากสนามจริง ไม่ใช่สเปคในกระดาษ"
        >
          โคมของเราที่ EGAT ทำงานตลอด 24 ชม. ในสภาพแวดล้อมร้อนจัดเกิน 55
          °Cในหน้าร้อน และยังใช้ต่อเนื่อง
        </WCard>
        <WCard
          media={{
            kind: 'img',
            src: IMG.mmth,
            cap: 'High Mast ลานจอด MMTH',
            fit: 'contain'
          }}
          cat="High Mast · Custom"
          title="งานออกแบบเฉพาะ — MMTH"
          proof="ออกแบบใหม่ทั้งหมด · งานที่คนซื้อโคมมาติดทำไม่ได้"
        >
          เสาสูง 25 ม. ระยะห่างเสา 160 เมตร ยังคุมความสว่างสม่ำเสมอ (Uo : 0.4) +
          ลดพลังงาน 79%
        </WCard>
      </PageBlk>

      <PageBlk tag="Hardware · หน้า 2 / 3">
        <WCard
          media={{
            kind: 'img',
            src: IMG.toa,
            cap: 'Solar Street Light ลานจอด TOA',
            fit: 'contain'
          }}
          cat="Solar Light · TOA"
          title="ออกแบบตามมาตรฐาน + กฎหมาย [Eav ≥ 50 lx , Uo ≥ 0.5]"
          proof="งานออกแบบแสง พร้อมติตตั้งโคม Solar Street Light ในลานจอดของ TOA"
        >
          ออกแบบความสว่างผ่านทั้งมาตรฐานและข้อกำหนดทางกฎหมาย
        </WCard>
        <WCard
          media={{
            kind: 'img',
            src: IMG.huaykwang,
            cap: 'ไฟถนน เขตห้วยขวาง',
            fit: 'contain'
          }}
          cat="Street Light"
          title="โคมไฟถนน เขตห้วยขวาง"
        >
          ปรับปรุงแสงสว่างถนนสายหลัก กทม. [ลาดพร้าว 48, 48/1, ประชาอุทิศ]
        </WCard>
      </PageBlk>

      <PageBlk tag="Hardware · หน้า 3 / 3">
        <WCard
          media={{
            kind: 'img',
            src: IMG.t5AphiwatCentralTerminal,
            cap: 'สถานีกลางกรุงเทพอภิวัฒน์ (T5)',
            fit: 'contain'
          }}
          cat="Indoor · T5"
          title="สถานีกลางกรุงเทพอภิวัฒน์"
          proof="งานระดับ landmark ของประเทศ"
        >
          งานหลอด T5 ทดแทนหลอดเดิมที่เสื่อมสภาพ ในสถานีรถไฟหลักของประเทศ
        </WCard>
        <WCard
          media={{
            kind: 'video',
            src: VID.smtPcba,
            poster: VID.smtPcbaPoster,
            badge: 'คลิป',
            cap: 'สายการผลิต SMT LED PCBA ในโรงงานของเรา'
          }}
          cat="โรงงานของเรา"
          title="ผลิต–ออกแบบ–ทดสอบครบในที่เดียว"
          proof="PCBA · Lighting Product"
        >
          Node MCU · Street Light · High Mast · Solar · T5/T8 · Flood · High Bay
        </WCard>
      </PageBlk>
    </Section>
  );
}
