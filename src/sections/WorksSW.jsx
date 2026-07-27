import React from 'react'
import { Section, SectionHeader } from '../components/ui.jsx'
import { PageBlk, WCard } from '../components/WorkPage.jsx'
import { VID, IMG } from '../assets.js'

export default function WorksSW() {
  return (
    <Section id="sw" label="ผลงาน Software">
      <SectionHeader
        kicker="ตัวอย่างผลงาน"
        title="ผลงาน · Software (AIOT / Data)"
        lead="ระบบภาครัฐและองค์กรระดับชาติ · 20+ ปี"
      />

      <PageBlk tag="Software · หน้า 1 / 3">
        <WCard
          media={{
            kind: 'img',
            src: IMG.expresswayIot,
            cap: 'ระบบ IoT ด่านเก็บเงินทางด่วน — การทางพิเศษแห่งประเทศไทย (EXAT)',
            fit: 'contain',
            bg: 'light',
            className: 'tall',
          }}
          cat="AIOT"
          title="ทางด่วน (การทางพิเศษ)"
          proof="ระบบ mission-critical ที่พลาดไม่ได้"
        >
          ดูแลรับ-ส่งข้อมูลเซนเซอร์ทุกด่านทั่วประเทศ ระดับหลายล้านรายการต่อวัน
        </WCard>
        <WCard
          media={{
            kind: 'video',
            src: VID.centralworld,
            poster: VID.centralworldPoster,
            badge: 'คลิป',
            cap: '14_centralworld_height.mp4',
          }}
          cat="AI Camera"
          title="Central World"
        >
          งานกล้องในพื้นที่คนหนาแน่นสูงระดับห้างใหญ่ที่สุด
        </WCard>
      </PageBlk>

      <PageBlk tag="Software · หน้า 2 / 3">
        <WCard
          media={{
            kind: 'img',
            src: IMG.ojaBigdataDashboard,
            cap: 'แดชบอร์ด Big Data กระทรวงยุติธรรม (OJA)',
            fit: 'contain',
            bg: 'light',
            className: 'tall',
          }}
          cat="Machine Learning"
          title="กระทรวงยุติธรรม"
          proof="ข้อมูลระดับนโยบายประเทศ"
        >
          Big Data / ML เชื่อมข้อมูลข้ามหน่วยงานหลายสิบหน่วยในกระทรวง
        </WCard>
        <WCard
          media={{ kind: 'img', src: IMG.maptaphutEmergency, cap: 'หน้าจอระบบเหตุฉุกเฉิน (ทน.มาบตาพุด)', fit: 'contain' }}
          cat="Emergency Management"
          title="เทศบาล + สาธารณูปโภค"
        >
          ระบบบริหารเหตุฉุกเฉิน — ทน.มาบตาพุด และการประปานครหลวง
        </WCard>
      </PageBlk>

      <PageBlk tag="Software · หน้า 3 / 3">
        <WCard
          media={{ kind: 'img', src: IMG.tescoLotusMobileApp, cap: 'แอปสมาชิก Tesco Lotus ClubCard', fit: 'contain' }}
          cat="Mobile App"
          title="Tesco Lotus — แอปสมาชิก ClubCard"
          proof="งานแอปค้าปลีกสเกลผู้ใช้จำนวนมาก"
        >
          พัฒนาแอปพลิเคชันสมาชิกครบวงจร — ClubCard, แสตมป์, คูปอง, โปรโมชัน และข่าวสาร ทีมเราพัฒนาและดูแลระบบทั้งหมด
          เพื่อให้บริการลูกค้าสะดวกและมีประสิทธิภาพสูงสุด
        </WCard>
        <WCard
          media={{ kind: 'img', src: IMG.catTelecom, cap: 'CAT Telecom Public Company Limited', fit: 'contain' }}
          cat="Government Software Partner"
          title="CAT Telecom"
          proof="ได้รับความไว้วางใจให้เป็นทีมพัฒนาเบื้องหลังงานภาครัฐของ CAT อย่างต่อเนื่อง"
        >
          พันธมิตรพัฒนาซอฟต์แวร์หลักของ CAT — เมื่อ CAT รับงานประมูลภาครัฐที่มีส่วนของซอฟต์แวร์ มักมอบหมายให้ทีมเราเป็นผู้พัฒนา
        </WCard>
      </PageBlk>
    </Section>
  )
}
