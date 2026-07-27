import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DECKS } from '../pres/decks.jsx'

// Full-screen overlay that plays one app's ported presentation.
// Rendered on top of the always-mounted <Home/>, so "← กลับ" restores the
// exact scroll position for free (Home never unmounts).
export default function PresViewer({ id }) {
  const navigate = useNavigate()
  const entry = DECKS[id]

  const close = () => navigate(-1)

  // Lock background scroll while open; Esc closes. Reset viewer scroll on open.
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    const body = document.getElementById('presbody')
    if (body) body.scrollTop = 0
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (!entry) {
    // Unknown id — bounce back to the main page.
    return (
      <div className="presview">
        <div className="presbar">
          <button className="bk" onClick={close}>
            ← กลับ
          </button>
          <span className="ttl">ไม่พบพรีเซนต์</span>
        </div>
        <div className="presbody">
          <div className="inner">
            <div className="pslide">
              <h3>ไม่พบเนื้อหาพรีเซนต์นี้</h3>
              <p>กรุณากลับไปเลือกใหม่จากภาคผนวก</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const { title, src, Deck } = entry
  return (
    <div className="presview">
      <div className="presbar">
        <button className="bk" onClick={close}>
          ← กลับ
        </button>
        <span className="ttl">{title}</span>
        {src && <span className="src">ที่มา: {src}</span>}
      </div>
      <div className="presbody" id="presbody">
        <div className="inner">
          <Deck />
        </div>
      </div>
    </div>
  )
}
