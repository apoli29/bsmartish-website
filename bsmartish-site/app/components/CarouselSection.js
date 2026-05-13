'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { useTranslation } from '@/app/i18n-provider'

const IMAGES = [
  'amh5svunor2lamgcbekb.webp',
  'qwoegxcqsa.webp',
  'ny9iigp3wuyi7a5otvbo.webp',
  'utyfcnb.webp',
  'vbysrw6jgohnpnfhp0yn.webp',
  'retogrkldbads.webp',
  'fhgertdcvv.webp',
  'ffqz1kq3bjh4xr9egm6y.webp',
  'rwtibvm.webp',
  'etywsf.webp',
  'qvptaroidm60lupaeoik.webp',
  'fsggrhervj.webp',
  'swdeohewhu.webp',
  'rewoitjgeba.webp',
  'hjewfpvbr.webp',
  'vdfnsjknw6.webp',
  'ytfvkjlh.webp',
  'asccnefg.webp',
  'sjnvwjerv.webp',
  'pj6vrlrakjglreckwuhn.webp',
  'cn1lc7yfim415qmsgoqh.webp',
  'ertvmsxzv.webp',
]

const IMAGE_SRCS = IMAGES.map(f => `/images/website.images/Home/sec.2/${f}`)

const GAP = 16
const SPEED_DESKTOP = 0.28
const SPEED_TABLET  = 0.55
const SPEED_MOBILE  = 0.9

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

export default function CarouselSection() {
  const { t } = useTranslation('carousel')
  const trackRef  = useRef(null)
  const cardWRef  = useRef(348)
  const posRef    = useRef(0)
  const rafRef    = useRef(null)
  const totalRef  = useRef(IMAGES.length * (348 + GAP))
  const speedRef  = useRef(SPEED_DESKTOP)
  const pausedRef = useRef(false)

  // Lightbox state
  const [modalOpen, setModalOpen]     = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted]         = useState(false)
  const [outgoing, setOutgoing]       = useState(null)
  const [transitionDir, setTransitionDir] = useState(0)
  const transitionKey = useRef(0)
  const navigating    = useRef(false)
  const touchStartX   = useRef(null)
  const didSwipe      = useRef(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth
      let w
      if (vw < 640)       { w = Math.floor(vw * 0.78);             speedRef.current = SPEED_MOBILE }
      else if (vw < 1024) { w = Math.floor((vw - 3 * GAP) / 2.5); speedRef.current = SPEED_TABLET }
      else                { w = Math.floor((vw - 3 * GAP) / 4);    speedRef.current = SPEED_DESKTOP }
      cardWRef.current = w
      totalRef.current = IMAGES.length * (w + GAP)
      if (trackRef.current) {
        trackRef.current.querySelectorAll('[data-card]').forEach(c => { c.style.width = `${w}px` })
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const tick = useCallback(() => {
    if (!pausedRef.current) {
      posRef.current += speedRef.current
      if (posRef.current >= totalRef.current) posRef.current -= totalRef.current
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${-posRef.current}px)`
      }
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [tick])

  // Pause carousel while modal is open
  useEffect(() => {
    pausedRef.current = modalOpen
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  // Lightbox helpers
  const openModal = useCallback((index) => {
    setActiveIndex(index)
    setOutgoing(null)
    setTransitionDir(0)
    navigating.current = false
    setModalOpen(true)
  }, [])

  const closeModal = useCallback(() => setModalOpen(false), [])

  const prev = useCallback(() => {
    if (navigating.current) return
    navigating.current = true
    transitionKey.current += 1
    const k = transitionKey.current
    setOutgoing(i => ({ index: activeIndex, key: k }))
    setTransitionDir(-1)
    setActiveIndex(i => (i - 1 + IMAGE_SRCS.length) % IMAGE_SRCS.length)
    setTimeout(() => { navigating.current = false; setOutgoing(null); setTransitionDir(0) }, 260)
  }, [activeIndex])

  const next = useCallback(() => {
    if (navigating.current) return
    navigating.current = true
    transitionKey.current += 1
    const k = transitionKey.current
    setOutgoing(i => ({ index: activeIndex, key: k }))
    setTransitionDir(1)
    setActiveIndex(i => (i + 1) % IMAGE_SRCS.length)
    setTimeout(() => { navigating.current = false; setOutgoing(null); setTransitionDir(0) }, 260)
  }, [activeIndex])

  useEffect(() => {
    if (!modalOpen) return
    const handler = (e) => {
      if (e.key === 'Escape')      closeModal()
      if (e.key === 'ArrowLeft')   prev()
      if (e.key === 'ArrowRight')  next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [modalOpen, closeModal, prev, next])

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

  const cardW = 348

  return (
    <>
      <section
        id="projects-carousel"
        className="w-full overflow-hidden"
        style={{ backgroundColor: '#f8f8f8', paddingTop: '52px', paddingBottom: '52px', scrollMarginTop: '28vh' }}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{ gap: `${GAP}px`, willChange: 'transform' }}
        >
          {[...IMAGES, ...IMAGES].map((img, i) => (
            <button
              key={i}
              data-card
              onClick={() => openModal(i % IMAGES.length)}
              aria-label={t('ariaOpenPhoto', { n: (i % IMAGES.length) + 1 })}
              className="relative flex-shrink-0 overflow-hidden rounded"
              style={{
                width: `${cardW}px`,
                aspectRatio: '4 / 5',
                border: 'none',
                padding: 0,
                background: 'none',
                cursor: 'pointer',
              }}
            >
              <Image
                src={`/images/website.images/Home/sec.2/${img}`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 30vw"
                quality={100}
                priority={i < 5}
                loading={i === 0 ? 'eager' : undefined}
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ backgroundColor: 'rgba(32,40,49,0.15)' }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {mounted && modalOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t('ariaDialog')}
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
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            zIndex: 1001,
            userSelect: 'none',
          }}>
            {activeIndex + 1} / {IMAGE_SRCS.length}
          </div>

          {/* Close */}
          <button
            onClick={closeModal}
            aria-label={t('ariaClose')}
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

          {/* Image stage */}
          <div
            style={{
              position: 'relative',
              width: '88vw',
              height: '82vh',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {outgoing && (
              <img
                key={`out-${outgoing.key}`}
                src={IMAGE_SRCS[outgoing.index]}
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
            <img
              key={`in-${activeIndex}-${transitionKey.current}`}
              src={IMAGE_SRCS[activeIndex]}
              alt={`Photo ${activeIndex + 1}`}
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
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label={t('ariaPrev')}
            style={arrowBtn('left')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label={t('ariaNext')}
            style={arrowBtn('right')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="9,6 15,12 9,18"/>
            </svg>
          </button>
        </div>,
        document.body
      )}
    </>
  )
}
