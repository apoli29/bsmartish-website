'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useLocale } from '@/app/i18n-provider'

const SLIDE_CSS = `
  @keyframes slide-out-left {
    from { transform: translateX(0); }
    to   { transform: translateX(-100%); }
  }
  @keyframes slide-out-right {
    from { transform: translateX(0); }
    to   { transform: translateX(100%); }
  }
  @keyframes slide-in-from-right {
    from { transform: translateX(100%); }
    to   { transform: translateX(0); }
  }
  @keyframes slide-in-from-left {
    from { transform: translateX(-100%); }
    to   { transform: translateX(0); }
  }
`

export default function PropertyGallery({ photos, propertyName }) {
  const locale = useLocale()
  const [modalOpen, setModalOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [outgoing, setOutgoing] = useState(null) // { index, key }
  const [transitionDir, setTransitionDir] = useState(0) // 1 = next, -1 = prev
  const transitionKey = useRef(0)
  const navigating = useRef(false)
  const touchStartX = useRef(null)
  const didSwipe = useRef(false)
  const lastFocused = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => setMounted(true), [])

  const validPhotos = (photos || []).filter(Boolean)
  const gridPhotos = validPhotos.slice(0, 5)

  const openModal = (index = 0) => {
    lastFocused.current = document.activeElement
    setActiveIndex(index)
    setOutgoing(null)
    setTransitionDir(0)
    navigating.current = false
    setModalOpen(true)
  }

  const closeModal = useCallback(() => {
    setModalOpen(false)
    // Return focus to whatever opened the lightbox (WCAG 2.4.3).
    if (lastFocused.current && typeof lastFocused.current.focus === 'function') {
      lastFocused.current.focus()
    }
  }, [])

  const prev = useCallback(() => {
    if (navigating.current) return
    navigating.current = true
    transitionKey.current += 1
    const k = transitionKey.current
    setOutgoing({ index: activeIndex, key: k })
    setTransitionDir(-1)
    setActiveIndex(i => (i - 1 + validPhotos.length) % validPhotos.length)
    setTimeout(() => {
      navigating.current = false
      setOutgoing(null)
      setTransitionDir(0)
    }, 260)
  }, [activeIndex, validPhotos.length])

  const next = useCallback(() => {
    if (navigating.current) return
    navigating.current = true
    transitionKey.current += 1
    const k = transitionKey.current
    setOutgoing({ index: activeIndex, key: k })
    setTransitionDir(1)
    setActiveIndex(i => (i + 1) % validPhotos.length)
    setTimeout(() => {
      navigating.current = false
      setOutgoing(null)
      setTransitionDir(0)
    }, 260)
  }, [activeIndex, validPhotos.length])

  useEffect(() => {
    if (!modalOpen) return
    const handler = (e) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      // Trap Tab inside the dialog (WCAG 2.1.2).
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [modalOpen, closeModal, prev, next])

  useEffect(() => {
    if (!modalOpen) return
    const id = requestAnimationFrame(() => {
      dialogRef.current?.querySelector('button')?.focus()
    })
    return () => cancelAnimationFrame(id)
  }, [modalOpen])

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  if (!validPhotos.length) return null

  const imgStyle = (h) => ({
    width: '100%',
    height: h,
    objectFit: 'cover',
    display: 'block',
    cursor: 'pointer',
  })

  const cellBtn = (extra = {}) => ({
    border: 'none',
    padding: 0,
    background: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'block',
    ...extra,
  })

  const arrowBtn = (side) => ({
    position: 'absolute',
    [side]: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(32,40,49,0.60)',
    border: '1px solid rgba(255,255,255,0.28)',
    borderRadius: '50%',
    color: '#f8f8f8',
    width: '44px',
    height: '44px',
    minWidth: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 1002,
    transition: 'background 0.15s',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    flexShrink: 0,
  })

  return (
    <>
      {/* ── Grid ── */}
      <div style={{ position: 'relative' }}>

        {/* Mobile layout: 1 big square + 2 small squares — hidden on sm+ */}
        <div className="sm:hidden flex flex-col gap-3">
          <button style={cellBtn()} onClick={() => openModal(0)} aria-label="Open photo 1">
            {gridPhotos[0]
              ? <img src={gridPhotos[0]} alt={`${propertyName} apartment — photo 1 — mid-term rental Porto`} style={{ ...imgStyle('100%'), aspectRatio: '1/1' }} />
              : <div style={{ aspectRatio: '1/1', backgroundColor: '#c4c8cc' }} />}
          </button>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[1, 2].map((i) => (
              <button key={i} style={cellBtn()} onClick={() => openModal(i)} aria-label={`Open photo ${i + 1}`}>
                {gridPhotos[i]
                  ? <img src={gridPhotos[i]} alt={`${propertyName} apartment — photo ${i + 1} — mid-term rental Porto`} style={{ ...imgStyle('100%'), aspectRatio: '1/1' }} />
                  : <div style={{ aspectRatio: '1/1', backgroundColor: '#c4c8cc' }} />}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop layout: 2fr/1fr top + 3-equal bottom — hidden on mobile */}
        <div className="hidden sm:block">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginBottom: '12px' }}>
            {[0, 1].map((i) => (
              <button key={i} style={cellBtn()} onClick={() => openModal(i)} aria-label={`Open photo ${i + 1}`}>
                {gridPhotos[i]
                  ? <img src={gridPhotos[i]} alt={`${propertyName} apartment — photo ${i + 1} — mid-term rental Porto`} style={imgStyle('380px')} />
                  : <div style={{ height: '380px', backgroundColor: '#c4c8cc' }} />}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            {[2, 3, 4].map((i) => (
              <button key={i} style={cellBtn()} onClick={() => openModal(i)} aria-label={`Open photo ${i + 1}`}>
                {gridPhotos[i]
                  ? <img src={gridPhotos[i]} alt={`${propertyName} apartment — photo ${i + 1} — mid-term rental Porto`} style={imgStyle('220px')} />
                  : <div style={{ height: '220px', backgroundColor: '#c4c8cc' }} />}
              </button>
            ))}
          </div>
        </div>

        {/* View all photos button */}
        <button
          onClick={() => openModal(0)}
          aria-label={`View all ${validPhotos.length} photos`}
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            padding: '10px 20px',
            backgroundColor: 'rgba(248,248,248,0.92)',
            color: '#202831',
            border: '1px solid rgba(228,228,228,0.8)',
            borderRadius: '8px',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'var(--font-aileron)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            transition: 'background 0.15s',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
          {locale === 'pt' ? 'Ver todas as fotos' : 'View all photos'}
        </button>
      </div>

      {/* ── Fullscreen Modal ── */}
      {mounted && modalOpen && createPortal(
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${propertyName} — property photo gallery`}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(16, 20, 25, 0.97)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            touchAction: 'none',
          }}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; didSwipe.current = false }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return
            const dx = e.changedTouches[0].clientX - touchStartX.current
            if (Math.abs(dx) > 40) { didSwipe.current = true; dx < 0 ? next() : prev() }
            touchStartX.current = null
          }}
          onClick={() => { if (!didSwipe.current) closeModal() }}
        >
          <style>{SLIDE_CSS}</style>

          {/* Counter */}
          <div style={{
            position: 'absolute',
            top: '28px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-aileron)',
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.86)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            zIndex: 1001,
            userSelect: 'none',
          }}>
            {activeIndex + 1} / {validPhotos.length}
          </div>

          {/* Close */}
          <button
            onClick={closeModal}
            aria-label="Close gallery"
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: '8px',
              color: '#f8f8f8',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1001,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* Image stage — overflow:hidden clips the sliding pair */}
          <div
            style={{
              position: 'relative',
              width: '88vw',
              height: '82vh',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Outgoing photo — slides out */}
            {outgoing && (
              <img
                key={`out-${outgoing.key}`}
                src={validPhotos[outgoing.index]}
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  animation: `${transitionDir === 1 ? 'slide-out-left' : 'slide-out-right'} 250ms ease-out both`,
                }}
              />
            )}

            {/* Incoming photo — slides in */}
            <img
              key={`in-${activeIndex}-${transitionKey.current}`}
              src={validPhotos[activeIndex]}
              alt={`${propertyName} apartment — photo ${activeIndex + 1} of ${validPhotos.length}`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '6px',
                animation: outgoing
                  ? `${transitionDir === 1 ? 'slide-in-from-right' : 'slide-in-from-left'} 250ms ease-out both`
                  : 'none',
              }}
            />
          </div>

          {/* Prev */}
          {validPhotos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous photo"
              style={arrowBtn('left')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>
          )}

          {/* Next */}
          {validPhotos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next photo"
              style={arrowBtn('right')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="9,6 15,12 9,18"/>
              </svg>
            </button>
          )}
        </div>,
        document.body
      )}
    </>
  )
}
