import React from 'react'
import { Section, SectionHeader } from '../components/ui.jsx'
import { PageBlk, WCard } from '../components/WorkPage.jsx'
import { VID, IMG } from '../assets.js'

export default function WorksSW() {
  return (
    <Section id="sw" label="ผลงาน Software">
      <SectionHeader
        kicker="ผลงานพูดแทน"
        title="ผลงาน · Software (AIOT / Data)"
        lead="ระบบภาครัฐและองค์กรระดับชาติ · 20+ ปี"
      />

      <PageBlk tag="Software · หน้า 1 / 3">
        <WCard
          media={{ kind: 'img', src: IMG.expresswayIot, cap: 'แดชบอร์ด IoT ด่านเก็บเงินทางด่วน', fit: 'contain', style: { aspectRatio: '3.79/1' } }}
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
          media={{ kind: 'img', src: IMG.justice, cap: 'ระบบ Big Data กระทรวงยุติธรรม', fit: 'contain', style: { aspectRatio: '4.5/1' } }}
          cat="Machine Learning"
          title="กระทรวงยุติธรรม"
          proof="ข้อมูลระดับนโยบายประเทศ"
        >
          Big Data / ML เชื่อมข้อมูลข้ามหน่วยงานหลายสิบหน่วยในกระทรวง
        </WCard>
        <WCard
          media={{ kind: 'img', src: IMG.maptaphutEmergency, cap: 'หน้าจอระบบเหตุฉุกเฉิน (ทน.มาบตาพุด)' }}
          cat="Emergency Management"
          title="เทศบาล + สาธารณูปโภค"
        >
          ระบบบริหารเหตุฉุกเฉิน — ทน.มาบตาพุด และการประปานครหลวง
        </WCard>
      </PageBlk>

      <PageBlk tag="Software · หน้า 3 / 3">
        <WCard
          media={{ kind: 'img', src: IMG.gistda, cap: 'ระบบ GISTDA — ภาพถ่ายดาวเทียม' }}
          cat="Ecommerce"
          title="แพลตฟอร์มค้าปลีก / ออนไลน์"
        >
          ระบบค้าขาย + เชื่อมข้อมูลระดับองค์กร (ค้าปลีก/แบรนด์/ภาพถ่ายดาวเทียม — GISTDA)
        </WCard>
        <WCard
          mediaNode={
            <div className="flowdiagram">
              <div className="node">
                <div className="ic">📡</div>
                <div className="t">IoT</div>
              </div>
              <div className="arrow">→</div>
              <div className="node">
                <div className="ic">🗄️</div>
                <div className="t">DATA</div>
              </div>
              <div className="arrow">→</div>
              <div className="node">
                <div className="ic">🤖</div>
                <div className="t">ML</div>
              </div>
            </div>
          }
          cat="ครบวงจรข้อมูล"
          title="เชื่อมฮาร์ดแวร์เข้ากับข้อมูลได้ทั้งเส้น"
        >
          IoT · Big Data · Machine Learning · Dashboard · Ecommerce
        </WCard>
      </PageBlk>
    </Section>
  )
}
