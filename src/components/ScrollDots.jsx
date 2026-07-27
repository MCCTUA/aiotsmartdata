import React, { useEffect, useState } from 'react'

// Right-rail dots — one per <section data-label>, mirrors blueprint behaviour:
// active dot follows the section in view, click scrolls to it, hover shows label.
export default function ScrollDots() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const secs = [...document.querySelectorAll('section[data-label]')]
    setItems(secs.map((s) => ({ id: s.id, label: s.dataset.label })))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = secs.indexOf(e.target)
            if (i >= 0) setActive(i)
          }
        })
      },
      { threshold: 0.4 },
    )
    secs.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="dots">
      {items.map((it, i) => (
        <button
          key={it.id}
          className={i === active ? 'on' : ''}
          data-l={it.label}
          onClick={() => go(it.id)}
          aria-label={it.label}
        />
      ))}
    </div>
  )
}
