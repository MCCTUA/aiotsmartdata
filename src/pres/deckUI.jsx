import React from 'react'
import { Media } from '../components/ui.jsx'

// One presentation slide (blueprint `.pslide`): kicker + heading + bullet list,
// with optional media (image/video) or a two-column layout.
export function PSlide({ kicker, title, points, children, media, mediaNode, cols }) {
  const list = points && (
    <ul>
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  )
  const mediaEl = mediaNode || (media && <Media {...media} style={{ aspectRatio: '16/9', ...(media.style || {}) }} />)
  return (
    <div className="pslide">
      {kicker && <div className="pk">{kicker}</div>}
      {title && <h3>{title}</h3>}
      {cols ? (
        <div className="cols">
          <div>{list}{children}</div>
          {mediaEl}
        </div>
      ) : (
        <>
          {list}
          {children}
          {mediaEl}
        </>
      )}
    </div>
  )
}

// The "duplicated from smartdata" banner shown atop each ported deck.
export function Dup({ children, phase }) {
  return (
    <div
      className="pdup"
      style={phase ? { background: '#fbf1e0', borderColor: '#f0dcb8', color: '#8a5a12' } : undefined}
    >
      {children}
    </div>
  )
}

export function Foot({ children }) {
  return (
    <p style={{ marginTop: 10, fontSize: 12.5, color: 'var(--gray2)' }}>{children}</p>
  )
}
