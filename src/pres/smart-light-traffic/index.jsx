import React, { useState } from 'react'
import Light from './Light.jsx'
import Traffic from './Traffic.jsx'

// ---------------------------------------------------------------------------
// Combined "Smart Light + Traffic" appendix deck.
//
// This entry ports TWO real source pages from smartdatapresent into one deck:
//   - Light.jsx   ← src/pages/smartlight/Story.jsx  (scrolling storytelling page)
//   - Traffic.jsx ← src/pages/SmartTraffic.jsx       (fixed 1280×720 slide deck)
//
// The two source pages use different architectures (scoped-CSS scroll story vs.
// fixed-canvas scale-to-fit slides), so rather than force one shell onto both,
// this wrapper adds a small top tab-switcher ("ไฟถนน" / "จราจร") and mounts
// exactly one of the two full pages at a time. Both are fully self-contained
// (their own <style> blocks, their own fixed-position chrome like progress bar /
// scroll dots), so no shared layout is needed between them.
//
// Takes no required props — mounts as <Deck /> per the decks.jsx contract.
// ---------------------------------------------------------------------------

const TABS = [
  { id: 'light', label: '💡 ไฟถนน (Smart Street Light)' },
  { id: 'traffic', label: '🚦 จราจร (Smart Traffic)' },
]

export default function SmartLightTraffic() {
  const [tab, setTab] = useState('light')

  return (
    <div style={{ minHeight: '100%' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 500,
          display: 'flex',
          gap: 8,
          padding: '10px 14px',
          background: '#1d1d1f',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            style={{
              fontFamily: 'Sarabun, sans-serif',
              fontSize: 13.5,
              fontWeight: 700,
              padding: '8px 16px',
              borderRadius: 100,
              border: 'none',
              cursor: 'pointer',
              transition: 'background .15s ease, color .15s ease',
              background: tab === t.id ? '#0071e3' : 'rgba(255,255,255,0.12)',
              color: '#fff',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'light' ? <Light /> : <Traffic />}
    </div>
  )
}
