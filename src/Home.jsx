import React from 'react'
import Hero from './sections/Hero.jsx'
import Edge from './sections/Edge.jsx'
import WorksHW from './sections/WorksHW.jsx'
import ClientsHW from './sections/ClientsHW.jsx'
import WorksSW from './sections/WorksSW.jsx'
import Clients from './sections/Clients.jsx'
import Solution from './sections/Solution.jsx'
import NodeStory from './sections/NodeStory.jsx'
import NemaZhaga from './sections/NemaZhaga.jsx'
import Demo from './sections/Demo.jsx'
import Expand from './sections/Expand.jsx'
import Solar from './sections/Solar.jsx'
import QA from './sections/QA.jsx'
import Close from './sections/Close.jsx'
import Appendix from './sections/Appendix.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <Edge />
      <WorksHW />
      <ClientsHW />
      <WorksSW />
      <Clients />
      <Solution />
      <NodeStory />
      <NemaZhaga />
      <Demo />
      <Expand />
      <Solar />
      <QA />
      <Close />
      <Appendix />
    </main>
  )
}
