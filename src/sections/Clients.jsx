import React from 'react'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'
import { CLIENT_LOGOS } from '../assets.js'

export default function Clients() {
  return (
    <Section id="clients" label="ลูกค้าอ้างอิง">
      <SectionHeader
        kicker="ไว้วางใจโดย"
        title="ลูกค้าอ้างอิง · Reference Customers"
        lead="หน่วยงานรัฐและองค์กรระดับประเทศที่ไว้วางใจให้เราพัฒนาระบบ"
      />
      <FadeUp className="logowall">
        {CLIENT_LOGOS.map((c) => (
          <div className="logotile" key={c.name} title={c.name}>
            <img src={c.src} alt={c.name} loading="lazy" />
          </div>
        ))}
      </FadeUp>
    </Section>
  )
}
