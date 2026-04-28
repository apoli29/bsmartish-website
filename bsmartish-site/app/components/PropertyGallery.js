'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

export default function PropertyGallery({ photos }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const validPhotos = (photos || []).filter(Boolean)
  const gridPhotos = validPhotos.slice(0, 5)

  const openModal = (index = 0) => {
    setActiveIndex(index)
    setModalOpen(true)
  }

  const closeModal = useCallback(() => setModalOpen(false), [])

  const prev = useCallback(() =>
    setActiveIndex(i => (i - 1 + validPhotos.length) % validPhotos.length),
    [validPhotos.length]
  )

  const next = useCallback(() =>
    setActiveIndex(i => (i + 1) % validPhotos.length),
    [validPhotos.length]
  )

  useEffect(() => {
    if (!modalOpen) return
    const handler = (e) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [modalOpen, closeModal, prev, next])

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
    [side]: '24px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '8px',
    color: '#f8f8f8',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 1001,
    transition: 'background 0.15s',
  })

  return (
    <>
      {/* ── Grid ── */}
      <div style={{ position: 'relative' }}>
        {/* Top row: wide + narrow */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginBottom: '12px' }}>
          {[0, 1].map((i) => (
            <button
              key={i}
              style={cellBtn()}
              onClick={() => openModal(i)}
              aria-label={`Open photo ${i + 1}`}
            >
              {gridPhotos[i]
                ? <img src={gridPhotos[i]} alt={`Property photo ${i + 1}`} style={imgStyle('380px')} />
                : <div style={{ height: '380px', backgroundColor: '#c4c8cc' }} />}
            </button>
          ))}
        </div>

        {/* Bottom row: 3 equal */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          {[2, 3, 4].map((i) => (
            <button
              key={i}
              style={cellBtn()}
              onClick={() => openModal(i)}
              aria-label={`Open photo ${i + 1}`}
            >
              {gridPhotos[i]
                ? <img src={gridPhotos[i]} alt={`Property photo ${i + 1}`} style={imgStyle('220px')} />
                : <div style={{ height: '220px', backgroundColor: '#c4c8cc' }} />}
            </button>
          ))}
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
          View all {validPhotos.length} photos
        </button>
      </div>

      {/* ── Fullscreen Modal ── */}
      {mounted && modalOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Property photo gallery"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(16, 20, 25, 0.97)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={closeModal}
        >
          {/* Counter */}
          <div style={{
            position: 'absolute',
            top: '28px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-aileron)',
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.45)',
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

          {/* Image */}
          <div
            style={{ maxWidth: '88vw', maxHeight: '82vh', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={validPhotos[activeIndex]}
              alt={`Property photo ${activeIndex + 1}`}
              style={{
                maxWidth: '88vw',
                maxHeight: '82vh',
                objectFit: 'contain',
                borderRadius: '6px',
                display: 'block',
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
