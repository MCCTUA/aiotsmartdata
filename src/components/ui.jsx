import React from 'react'
import { motion } from 'framer-motion'

/* ------------------------------------------------------------------ *
 * Shared primitives — smartdata blue palette.
 * These wrap the global classes defined in index.css (ported 1:1 from
 * the blueprint) and add Framer Motion for the fade-up-on-scroll effect
 * that the blueprint did with an IntersectionObserver + `.fu` class.
 * ------------------------------------------------------------------ */

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

// FadeUp — drop-in replacement for the blueprint's `.fu` blocks.
export function FadeUp({ children, className = '', delay = 0, as = 'div', style }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      style={style}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay }}
    >
      {children}
    </M>
  )
}

// Section — <section> shell with the blueprint's `.wrap` container.
export function Section({ id, label, alt = false, className = '', children }) {
  return (
    <section id={id} data-label={label} className={`${alt ? 'alt ' : ''}${className}`}>
      <div className="wrap">{children}</div>
    </section>
  )
}

// SectionHeader — kicker + title + optional lead, each fading up.
export function SectionHeader({ kicker, title, lead }) {
  return (
    <>
      {kicker && (
        <FadeUp as="span" className="kicker">
          {kicker}
        </FadeUp>
      )}
      <FadeUp as="h2" className="title">
        {title}
      </FadeUp>
      {lead && (
        <FadeUp as="p" className="lead">
          {lead}
        </FadeUp>
      )}
    </>
  )
}

// Pill — inline tag chip.
export function Pill({ children }) {
  return <span className="pill">{children}</span>
}

/* Media — renders a real video/image when a src is given, otherwise the
 * blueprint's placeholder tile (emoji + caption). `kind`:
 *   'video' → 16:9 dark tile with a play glyph or an actual <video>
 *   'img'   → light tile with an emoji (fic) or an actual <img>
 * `fit` ('cover' default | 'contain') — use 'contain' for wide banner-style
 * screenshots that would otherwise get cropped illegibly by object-fit:cover.
 */
export function Media({ kind = 'img', src, poster, fic, cap, badge, className = '', style, fit = 'cover' }) {
  const isVideo = kind === 'video'
  const cls = `media${isVideo ? '' : ' img'}${fit === 'contain' ? ' fit-contain' : ''}${className ? ' ' + className : ''}`
  return (
    <div className={cls} style={style}>
      {badge && <span className="badge">{badge}</span>}
      {isVideo && src ? (
        <video src={src} poster={poster} muted loop playsInline controls preload="metadata" />
      ) : !isVideo && src ? (
        <img src={src} alt={cap || ''} loading="lazy" />
      ) : isVideo ? (
        <div className="play" />
      ) : (
        fic && <div className="fic">{fic}</div>
      )}
      {cap && !src && <div className="cap">{cap}</div>}
    </div>
  )
}
