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
            src: IMG.exatExpresswayMap,
            cap: 'แผนที่ระบบทางด่วน — การทางพิเศษแห่งประเทศไทย (EXAT)',
            fit: 'contain',
            bg: 'light',
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
          proof="Phase ถัดไป: ตรวจพบรถสูงเกิน → แจ้งเตือนขึ้นป้าย LED + บันทึกหลักฐานอัตโนมัติ ส่งต่อนิติกรของห้าง"
        >
          งานกล้องในพื้นที่คนหนาแน่นสูงระดับห้างใหญ่ที่สุด — บางพื้นที่ติดตั้งเลเซอร์วัดความสูงรถไม่ได้ จึงใช้กล้องหลายตัว sync
          กันประเมินความสูงรถแทน
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
          media={{ kind: 'img', src: IMG.emergencyEicDashboard, cap: 'แดชบอร์ดศูนย์ EIC — เทศบาลนครมาบตาพุด', fit: 'contain' }}
          cat="Emergency Management"
          title="ศูนย์ EIC · เทศบาลนครมาบตาพุด"
          proof="ระบบเดียวใช้งานจริงต่อเนื่องกว่า 10 ปี = ความเสถียรที่พิสูจน์ด้วยเวลา"
          more="จากโครงการป้องกันและบริหารเหตุฉุกเฉิน สู่ศูนย์ EIC ที่ยังเดินด้วยซอฟต์แวร์ของเรา — เมื่อราว 10 ปีก่อน ศูนย์เฝ้าระวังและควบคุมคุณภาพสิ่งแวดล้อมของการนิคมอุตสาหกรรมมาบตาพุด ได้จัดทำโครงการป้องกันและบริหารเหตุฉุกเฉิน และนำเสนอต่อเทศบาลเมืองมาบตาพุด (ในขณะนั้น) ทีมเราเป็นผู้พัฒนาซอฟต์แวร์ให้กับศูนย์นี้ ต่อมาศูนย์ได้พัฒนาและเปลี่ยนชื่อเป็น EIC — ศูนย์บัญชาการตอบโต้สถานการณ์ฉุกเฉินและกระจายข่าวของเทศบาลนครมาบตาพุดในปัจจุบัน และยังคงใช้ซอฟต์แวร์ของเรามาอย่างต่อเนื่องจนถึงทุกวันนี้"
        >
          พัฒนาซอฟต์แวร์ให้ศูนย์ป้องกันและบริหารเหตุฉุกเฉิน มาบตาพุด ตั้งแต่ ~10 ปีก่อน — ปัจจุบันคือศูนย์ EIC
          (ศูนย์บัญชาการตอบโต้สถานการณ์ฉุกเฉินและกระจายข่าว) ที่ยัง "เดินด้วยซอฟต์แวร์ของเรา" ต่อเนื่องจนวันนี้
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
          proof="CAT เลือกเราเป็นคู่พัฒนาซอฟต์แวร์ในงานประมูลที่ต้องการความน่าเชื่อถือสูง"
        >
          พันธมิตรพัฒนาซอฟต์แวร์หลักของ CAT — เมื่อ CAT รับงานประมูลภาครัฐที่มีส่วนของซอฟต์แวร์ มักมอบหมายให้ทีมเราเป็นผู้พัฒนา
        </WCard>
      </PageBlk>
    </Section>
  )
}
