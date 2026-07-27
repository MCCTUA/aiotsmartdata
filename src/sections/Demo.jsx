import React from 'react'
import { Section, SectionHeader, FadeUp, Media } from '../components/ui.jsx'
import { IMG } from '../assets.js'

const FEATURES = [
  {
    media: { kind: 'img', src: IMG.smartlightAlerts, cap: 'แจ้งเตือนอัตโนมัติเมื่อพลังงานผิดปกติ', fit: 'contain', bg: 'light' },
    sub: 'Smart Alerts',
    title: 'แจ้งเตือนอัตโนมัติเมื่อผิดปกติ',
    body: 'ตรวจพบพลังงานต่ำกว่าปกติ (เช่น 85W จากปกติ 150W) → ขึ้นแจ้งเตือนทันที พร้อมสถานะ Open / Acknowledged / Resolved ให้ทีมไล่ตามงานจนจบ',
  },
  {
    media: { kind: 'img', src: IMG.smartlightScreen1, cap: 'สถานะโคมทุกต้นแบบเรียลไทม์', fit: 'contain', bg: 'light' },
    sub: 'Live Telemetry',
    title: 'รู้สถานะจริงทุกต้น',
    body: 'เห็นภาพรวมทันที — ออนไลน์ ออฟไลน์ ต้องซ่อมบำรุง หรือต้องดูแลกี่ต้น พร้อมลิสต์ให้ไล่แก้ได้ทันที ยืนยันด้วยข้อมูลจากอุปกรณ์จริง ไม่ใช่เดาจากตาราง',
  },
  {
    media: { kind: 'img', src: IMG.smartlightLocation, cap: 'แผนที่ตำแหน่งเสาไฟจริงพร้อมสถานะ', fit: 'contain', bg: 'light' },
    sub: 'Zone / Site Map',
    title: 'ควบคุมเป็นกลุ่มบนแผนที่จริง',
    body: 'เห็นตำแหน่งเสาทุกต้นบนแผนที่จริง กรองดูตาม Site/Zone/Tenant ได้ทันที สีบอกสถานะ Online/Offline/Maintenance ให้ไล่งานตามพื้นที่ได้ง่าย',
  },
]

export default function Demo() {
  return (
    <Section id="demo" label="Smart Light Features">
      <SectionHeader
        kicker="ฟีเจอร์จริง"
        title="Smart Light — ฟีเจอร์ที่ใช้งานจริง"
        lead="สกรีนช็อตจากระบบจริง ไม่ใช่ mockup"
      />
      <FadeUp className="grid g3">
        {FEATURES.map((f) => (
          <div className="wcard" key={f.title}>
            <Media {...f.media} />
            <div className="body">
              <div className="cat">{f.sub}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          </div>
        ))}
      </FadeUp>
    </Section>
  )
}
