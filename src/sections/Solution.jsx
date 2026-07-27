import React from 'react'
import { Section, SectionHeader, FadeUp, Media } from '../components/ui.jsx'
import { VID, IMG } from '../assets.js'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

// Clickable solution card → scrolls to its appendix card (which holds the
// "open full presentation" button), mirroring the blueprint's anchor links.
function SLink({ target, media, mediaNode, cat, catBadge, title, children }) {
  return (
    <div className="wcard slink" onClick={() => go(target)}>
      {mediaNode || <Media {...media} />}
      <div className="body">
        <div className="cat">
          {cat}
          {catBadge && <span className="ph2badge">{catBadge}</span>}
        </div>
        <h3>{title}</h3>
        <p>{children}</p>
        <div className="more">ดูรายละเอียดในภาคผนวก →</div>
      </div>
    </div>
  )
}

const SENSORS = [
  'วัดพลังงานรายจุด',
  'ระดับน้ำ / น้ำท่วม',
  'ความชื้นดิน / ภัยแล้ง',
  'คุณภาพอากาศ / PM2.5',
  'อุณหภูมิ / สภาพอากาศ',
  'เรดาร์ความเร็ว',
  'นับคน–รถ',
]

export default function Solution() {
  return (
    <Section id="solution" label="AIOT Solution" alt>
      <SectionHeader
        kicker="สิ่งที่เราส่งมอบ"
        title="AIOT Solution"
        lead="โซลูชันพร้อมใช้บนแพลตฟอร์มเดียวกัน — คลิกการ์ดเพื่อดูรายละเอียดใน “ภาคผนวก”"
      />

      <FadeUp className="pageblk">
        <span className="pagetag">Solution · หน้า 1 / 3</span>
        <div className="wgrid">
          <SLink
            target="ap-aicam"
            media={{ kind: 'video', src: VID.lpr, poster: VID.lprPoster, badge: 'คลิป', cap: 'lpr-demo.mp4 · overheight_demo.mp4' }}
            cat="AI Camera"
            title="กล้อง + AI"
          >
            ต่อหลัง NVR หรือขนาน · เริ่มเล็กด้วย Jetson จุดเดียว หรือลง server สำหรับระบบใหญ่
          </SLink>
          <SLink
            target="ap-elder"
            media={{ kind: 'img', src: IMG.fallDetection, cap: 'หลักการ fall detection ด้วย radar' }}
            cat="Care"
            title="Elderly Care"
          >
            ตรวจจับคนล้ม/ออกนอกบริเวณ แจ้งเตือนญาติ+อสม. ประมวลผลที่ edge
          </SLink>
        </div>
      </FadeUp>

      <FadeUp className="pageblk">
        <span className="pagetag">Solution · หน้า 2 / 3</span>
        <div className="wgrid">
          <SLink
            target="ap-smartlight"
            media={{ kind: 'img', src: IMG.trafficHero, cap: 'Smart Traffic — เฝ้าระวังจุดตัดทางรถไฟ/แยกเสี่ยง' }}
            cat="Lighting + Mobility"
            title="Smart Light + Smart Traffic"
          >
            โคมมีสมอง + งานจราจรด้วย Radar และ AI Camera (เร่งไฟเมื่อมีรถ / วินัยจราจร)
          </SLink>
          <SLink
            target="ap-pole"
            media={{ kind: 'img', src: IMG.smartPolePhoto, cap: 'เสาไฟติดตั้งจริงหน้างาน' }}
            cat="Integrated"
            title="Smart Pole"
          >
            ไฟ + กล้อง + เซนเซอร์ + จอ/สื่อสาร บนเสาต้นเดียว ต่อยอดได้ทั้งเมือง
          </SLink>
        </div>
      </FadeUp>

      <FadeUp className="pageblk">
        <span className="pagetag">Solution · หน้า 3 / 3</span>
        <div className="wgrid">
          <SLink
            target="ap-led"
            media={{ kind: 'img', src: IMG.ledSign, cap: 'ป้ายจอ LED VMS หน้างานจริง' }}
            cat="LED Display"
            title="งานจอ LED"
          >
            ป้ายจอ LED เตือน/แสดงผล (VMS) — full-color / 3-color · เตือนรถสูงเกิน ·
            ข้อความจราจร/ประชาสัมพันธ์ · เชื่อมกับระบบเซนเซอร์
          </SLink>
          <SLink
            target="ap-energy"
            media={{ kind: 'img', src: IMG.smartlightScreen1, cap: 'ตัวอย่าง dashboard จริงจากแพลตฟอร์ม Smart Light — สไตล์ที่จะต่อยอดให้ Smart Energy' }}
            cat="Smart Energy"
            catBadge="PHASE 2 · แผน"
            title="Smart Energy"
          >
            อ่านค่าพลังงานจากตู้ MDB → dashboard พลังงานอาคาร/เมือง ·
            ต่อยอดรายงานประหยัดพลังงาน/คาร์บอน
          </SLink>
        </div>
      </FadeUp>

      <FadeUp className="grouphead">
        <span className="gh">➕ ต่อยอดด้วย AIOT Sensor</span>
        <span className="gl" />
        <span className="gt">เสียบเพิ่มบนโครงข่ายเดิม</span>
      </FadeUp>
      <FadeUp>
        {SENSORS.map((s) => (
          <span className="pill" key={s}>
            {s}
          </span>
        ))}
      </FadeUp>
    </Section>
  )
}
