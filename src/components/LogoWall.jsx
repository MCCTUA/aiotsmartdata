import React from 'react'

// Reusable client-logo grid. `compact` shrinks the tiles for tighter spots
// (e.g. embedded inside an appendix card) while keeping the same behavior:
// grayscale + 65% opacity by default, full color on hover.
//
// onError hides the tile instead of leaving a broken-image icon in the grid
// — a missing logo shouldn't break the layout for everyone else. It also
// logs the failed src so a 404 (wrong path/case, file never deployed) shows
// up immediately in devtools instead of silently vanishing.
export default function LogoWall({ logos, compact = false }) {
  return (
    <div className={`logowall${compact ? ' compact' : ''}`}>
      {logos.map((l) => (
        <div className="logotile" key={l.name} title={l.name}>
          <img
            src={l.src}
            alt={l.name}
            loading="lazy"
            onError={(e) => {
              console.warn(`[LogoWall] failed to load "${l.name}": ${l.src}`)
              e.currentTarget.closest('.logotile').style.display = 'none'
            }}
          />
        </div>
      ))}
    </div>
  )
}
