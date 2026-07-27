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
// `mediaNode` overrides the default Media render (e.g. a hand-built diagram
// or an honest "file pending" note) when there is no photo to show.
// `more` — optional full backstory, collapsed behind a native <details> toggle
// so the card stays short by default but the full story is one click away.
export function WCard({ media, mediaNode, cat, title, children, proof, more }) {
  return (
    <div className="wcard">
      {mediaNode || <Media {...media} />}
      <div className="body">
        <div className="cat">{cat}</div>
        <h3>{title}</h3>
        <p>{children}</p>
        {proof && <div className="proof">{proof}</div>}
        {more && (
          <details className="more">
            <summary>อ่านเพิ่ม</summary>
            <p>{more}</p>
          </details>
        )}
      </div>
    </div>
  )
}
