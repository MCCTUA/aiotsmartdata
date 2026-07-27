import React from 'react'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'
import LogoWall from '../components/LogoWall.jsx'
import { GISMO_LOGOS } from '../assets.js'

export default function ClientsHW() {
  return (
    <Section id="clients-hw" label="ลูกค้าอ้างอิง HW">
      <SectionHeader
        kicker="ไว้วางใจโดย"
        title="ลูกค้าอ้างอิง · Reference Customers (ฝั่ง Hardware)"
        lead="โคมและงานแสงสว่างที่องค์กร/โรงงานชั้นนำเลือกใช้"
      />
      <FadeUp>
        <LogoWall logos={GISMO_LOGOS} />
      </FadeUp>
    </Section>
  )
}
