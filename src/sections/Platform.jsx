import React, { useState, useEffect } from 'react'
import { Section, SectionHeader } from '../components/ui.jsx'
import { PageBlk } from '../components/WorkPage.jsx'
import { Media } from '../components/ui.jsx'
import { IMG } from '../assets.js'

/* SmartPole software platform — หน้าจอจริงจากทีม dev + copy show-don't-tell.
 * ทุกการ์ดกดที่รูปเพื่อ "ขยาย" ได้ (lightbox ในตัว ไม่ต้องเพิ่ม CSS) */

function ZoomCard({ src, alt, cat, title, proof, children, onZoom }) {
  return (
    <div className="wcard">
      <button
        type="button"
        onClick={() => onZoom(src)}
        aria-label={`ขยาย ${title}`}
        style={{ all: 'unset', cursor: 'zoom-in', display: 'block', width: '100%' }}
      >
        <Media kind="img" src={src} cap={alt} fit="contain" bg="light" />
      </button>
      <div className="body">
        <div className="cat">{cat}</div>
        <h3>{title}</h3>
        <p>{children}</p>
        {proof && <div className="proof">{proof}</div>}
      </div>
    </div>
  )
}

export default function Platform() {
  const [zoom, setZoom] = useState(null)

  useEffect(() => {
    if (!zoom) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setZoom(null)
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [zoom])

  const open = (src) => setZoom(src)

  return (
    <Section id="platform" label="SmartPole Platform" alt>
      <SectionHeader
        kicker="ซอฟต์แวร์บริหารจัดการ"
        title="SmartPole Platform — คุมได้ วัดได้ พิสูจน์ได้"
        lead="ไม่ใช่แค่เสาสว่าง/ดับ แต่เป็นแพลตฟอร์มที่ควบคุมไฟอัจฉริยะและพลังงานจากศูนย์กลาง เห็นสถานะจริงทุกต้น และมีหลักฐานให้ตรวจรับงาน"
      />

      <PageBlk tag="ควบคุม & เฝ้าระวังแบบเรียลไทม์">
        <ZoomCard
          onZoom={open}
          src={IMG.spMap}
          alt="Map & Floor-plan realtime command center"
          cat="Realtime Monitoring"
          title="ศูนย์บัญชาการบนแผนที่เดียว"
          proof="ไม่ต้องรอชาวบ้านโทรแจ้งว่าไฟดับ — ระบบเห็นก่อน"
        >
          เห็นทุกต้นบนแผนที่จริงแบบเรียลไทม์ หมุดเขียว/เหลือง/แดง บอกทันทีว่าต้นไหนปกติ ต้นไหนต้องเข้าดู
          กรองดูตาม Site/Zone/Tenant ได้ พร้อมนับจำนวนออนไลน์/ออฟไลน์/ต้องซ่อมบำรุง ยืนยันด้วยข้อมูลจากอุปกรณ์จริง
          ไม่ใช่เดาจากตาราง
        </ZoomCard>
        <ZoomCard
          onZoom={open}
          src={IMG.spQuality}
          alt="Lighting maintenance — quality telemetry"
          cat="Quality Telemetry"
          title="วัดคุณภาพไฟถึงราย node"
          proof="เห็นสัญญาณผิดปกติก่อนโคมพัง = ซ่อมก่อนเสีย"
        >
          อ่านแรงดัน · ความถี่ · เพาเวอร์แฟกเตอร์ · กระแส · กำลังไฟ ของแต่ละต้น เทียบกับแถบเกณฑ์
          ปกติ/เฝ้าระวัง/วิกฤต
        </ZoomCard>
      </PageBlk>

      <PageBlk tag="คุมงบพลังงาน & แจ้งเตือนถึงมือ">
        <ZoomCard
          onZoom={open}
          src={IMG.spBudget}
          alt="Energy budget planning"
          cat="Energy Budget"
          title="ตั้งงบพลังงานล่วงหน้า ระบบกันบานปลาย"
          proof="คุมค่าไฟให้อยู่ในกรอบงบก่อนสิ้นเดือน ไม่ใช่รู้ตอนบิลมา"
        >
          กำหนดงบไฟทั้งปี/รายเดือน แยกตามโครงการ–ล็อต–โซนได้ ระบบเตือนอัตโนมัติเมื่อใช้ถึง 80% / 95% / 100%
        </ZoomCard>
        <ZoomCard
          onZoom={open}
          src={IMG.spNotify}
          alt="Notifications and work orders"
          cat="Alerts & Work Orders"
          title="แจ้งเตือนถึงทีมช่างทันที + ปิดงานมีหลักฐาน"
          proof='ตั้งแต่ "ไฟมีปัญหา" ถึง "ซ่อมเสร็จ" ตรวจย้อนได้ทุกขั้น'
        >
          ตรวจพบพลังงานผิดปกติอัตโนมัติ (เช่น ตกจาก 150W เหลือ 85W) แจ้งเตือนเด้งเข้า LINE / Telegram / Email ทันที
          เปิดใบสั่งงานพร้อมสถานะ Open / Acknowledged / Resolved ให้ทีมไล่ตามจนปิดงานตาม SLA
        </ZoomCard>
      </PageBlk>

      <PageBlk tag="คุณภาพเชิงลึก & เวลาแสงแม่นราย ตำบล">
        <ZoomCard
          onZoom={open}
          src={IMG.spQualityRange}
          alt="Quality range comparison — factory profile"
          cat="Factory Quality Profile"
          title="เทียบคุณภาพข้ามต้น อิงโปรไฟล์มาตรฐานโรงงาน"
          proof="มาตรฐานเดียวทั้งระบบ ไม่ใช่ดูตามความรู้สึก"
        >
          เอาค่าจริงของแต่ละต้นมาเทียบในกราฟเดียว ใช้แถบเกณฑ์ good/amber/red จากโปรไฟล์โรงงาน
          เห็นต้นที่หลุดกรอบทันที
        </ZoomCard>
        <ZoomCard
          onZoom={open}
          src={IMG.spSun}
          alt="Sun events — sunrise/sunset by Thai subdistrict"
          cat="Astronomical Clock"
          title="เปิด-ปิดตามดวงอาทิตย์จริงของแต่ละตำบล"
          proof="แม่นตามพิกัด ไม่ต้องพึ่งเซนเซอร์แสงที่เสื่อม/โดนบัง"
        >
          ตั้งเวลาเปิด-ปิดจากเวลาพระอาทิตย์ขึ้น-ตกจริง ครอบคลุมกว่า 7,000 ตำบลทั่วไทย
        </ZoomCard>
      </PageBlk>

      <PageBlk tag="ทะเบียนอุปกรณ์ & โมเดลตัวแทนจำหน่าย">
        <ZoomCard
          onZoom={open}
          src={IMG.spDevices}
          alt="Device inventory with QR / Node ID / SIM / DIM"
          cat="Asset Inventory"
          title="สแกน QR รู้ประวัติต้นนั้นทั้งหมด"
          proof="งานซ่อมเข้าตรงจุด ไม่ต้องเดา ไม่ต้องรื้อ"
        >
          ทะเบียนอุปกรณ์ครบ Node ID · ซิม · ระดับหรี่ไฟ · สถานะสด — สแกน QR ที่เสาแล้วช่างเห็นข้อมูลตรงต้นทันที
        </ZoomCard>

        <ZoomCard
          onZoom={open}
          src={IMG.spRoles}
          alt="Role management — admin / manager / operator / viewer"
          cat="Multi-tenant"
          title="รองรับตัวแทนจำหน่าย แยกสิทธิ์ชัดเจน"
          proof="พร้อมขยายเป็นโมเดลตัวแทนจำหน่าย / white-label ได้ทันที"
        >
          กำหนดสิทธิ์การใช้งานตามบทบาท (admin / manager / operator / viewer) — บริหารหลายโครงการในบัญชีเดียว
          แต่ละงานเห็นเฉพาะของตัวเอง รองรับโครงสร้างเจ้าของแพลตฟอร์ม / ดีลเลอร์ / ลูกค้า
        </ZoomCard>
      </PageBlk>

      {zoom && (
        <div
          onClick={() => setZoom(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,.82)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', padding: 24, cursor: 'zoom-out',
          }}
        >
          <img
            src={zoom}
            alt=""
            style={{ maxWidth: '96vw', maxHeight: '92vh', borderRadius: 10, boxShadow: '0 20px 60px rgba(0,0,0,.5)' }}
          />
        </div>
      )}
    </Section>
  )
}
