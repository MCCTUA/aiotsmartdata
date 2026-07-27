import React from 'react'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'
import LogoWall from '../components/LogoWall.jsx'
import { CLIENT_LOGOS } from '../assets.js'

export default function Clients() {
  return (
    <Section id="clients" label="ลูกค้าอ้างอิง">
      <SectionHeader
        kicker="ไว้วางใจโดย"
        title="ลูกค้าอ้างอิง · Reference Customers (ฝั่ง Software)"
        lead="20+ ปี ส่งมอบระบบให้หน่วยงานรัฐและองค์กรชั้นนำ"
      />
      <FadeUp>
        <LogoWall logos={CLIENT_LOGOS} />
      </FadeUp>
    </Section>
  )
}
