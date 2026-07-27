import React from 'react'
import { FadeUp, Media } from './ui.jsx'

// One "page" of the portfolio: a tag + two work cards side by side.
export function PageBlk({ tag, children }) {
  return (
    <FadeUp className="pageblk">
      <span className="pagetag">{tag}</span>
      <div className="wgrid">{children}</div>
    </FadeUp>
  )
}

// A single portfolio card: media tile (image/video/placeholder) + copy + proof.
export function WCard({ media, cat, title, children, proof }) {
  return (
    <div className="wcard">
      <Media {...media} />
      <div className="body">
        <div className="cat">{cat}</div>
        <h3>{title}</h3>
        <p>{children}</p>
        {proof && <div className="proof">{proof}</div>}
      </div>
    </div>
  )
}
