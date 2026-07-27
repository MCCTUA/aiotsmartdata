import React from 'react'

// Reusable client-logo grid. `compact` shrinks the tiles for tighter spots
// (e.g. embedded inside an appendix card) while keeping the same behavior:
// grayscale + 65% opacity by default, full color on hover.
export default function LogoWall({ logos, compact = false }) {
  return (
    <div className={`logowall${compact ? ' compact' : ''}`}>
      {logos.map((l) => (
        <div className="logotile" key={l.name} title={l.name}>
          <img src={l.src} alt={l.name} loading="lazy" />
        </div>
      ))}
    </div>
  )
}
