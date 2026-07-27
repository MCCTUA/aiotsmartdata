import React from 'react'

// Anchor nav — uses scrollIntoView (not href hashes) so it never collides
// with HashRouter's own use of the URL hash.
const LINKS = [
  { id: 'edge', label: 'จุดเด่น' },
  { id: 'hw', label: 'ผลงาน HW' },
  { id: 'sw', label: 'ผลงาน SW' },
  { id: 'solution', label: 'AIOT Solution' },
  { id: 'node', label: 'พัฒนา Node' },
  { id: 'nz', label: 'Nema/Zhaga' },
  { id: 'demo', label: 'Demo' },
  { id: 'expand', label: 'ต่อยอด' },
  { id: 'solar', label: 'Solar' },
  { id: 'appendix', label: 'ภาคผนวก' },
]

const go = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  return (
    <nav className="nav">
      <div className="brand" onClick={() => go('hero')}>
        AI<b>OT</b> · Lighting &amp; Vision
      </div>
      <div className="navwrap">
        {LINKS.map((l) => (
          <button key={l.id} className="link" onClick={() => go(l.id)}>
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
