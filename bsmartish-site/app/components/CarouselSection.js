'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { useTranslation } from '@/app/i18n-provider'
import { HOME_GALLERY_FILES, HOME_GALLERY_SRCS } from '@/app/lib/homeGalleryImages'

const IMAGES = HOME_GALLERY_FILES

const IMAGE_SRCS = HOME_GALLERY_SRCS

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
  const [autoPlay, setAutoPlay]       = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [modalOpen, setModalOpen]     = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted]         = useState(false)
  const [outgoing, setOutgoing]       = useState(null)
  const [transitionDir, setTransitionDir] = useState(0)
  const transitionKey = useRef(0)
  const navigating    = useRef(false)
  const touchStartX   = useRef(null)
  const didSwipe      = useRef(false)
  const lastFocused   = useRef(null)
  const dialogRef     = useRef(null)

  useEffect(() => setMounted(true), [])

  // WCAG 2.3.3 — the strip must not scroll at all if the visitor has asked the
  // operating system to reduce motion.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      setReducedMotion(mq.matches)
      if (mq.matches) setAutoPlay(false)
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

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

  // Pause the strip while the lightbox is open, while the visitor is hovering or
  // tabbing through it, and whenever autoplay is switched off.
  useEffect(() => {
    pausedRef.current = modalOpen || !autoPlay
  }, [modalOpen, autoPlay])

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  // Lightbox helpers
  const openModal = useCallback((index) => {
    lastFocused.current = document.activeElement
    setActiveIndex(index)
    setOutgoing(null)
    setTransitionDir(0)
    navigating.current = false
    setModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalOpen(false)
    // WCAG 2.4.3 — send focus back to the thumbnail that opened the lightbox,
    // instead of dropping the keyboard user at the top of the document.
    if (lastFocused.current && typeof lastFocused.current.focus === 'function') {
      lastFocused.current.focus()
    }
  }, [])

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
      // Keep Tab inside the dialog. A modal that lets focus wander behind it is
      // unusable with a keyboard or a screen reader (WCAG 2.1.2).
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

  // Move focus into the dialog when it opens.
  useEffect(() => {
    if (!modalOpen) return
    const id = requestAnimationFrame(() => {
      dialogRef.current?.querySelector('button')?.focus()
    })
    return () => cancelAnimationFrame(id)
  }, [modalOpen])

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
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = modalOpen || !autoPlay }}
          onFocusCapture={() => { pausedRef.current = true }}
          onBlurCapture={() => { pausedRef.current = modalOpen || !autoPlay }}
        >
          {[...IMAGES, ...IMAGES].map((img, i) => {
            // The strip is rendered twice so it can loop seamlessly. The second
            // copy is visual only — hiding it from assistive technology stops
            // screen readers announcing all 22 photographs a second time.
            const isDuplicate = i >= IMAGES.length
            return (
            <button
              key={i}
              data-card
              onClick={() => openModal(i % IMAGES.length)}
              aria-hidden={isDuplicate ? 'true' : undefined}
              tabIndex={isDuplicate ? -1 : 0}
              aria-label={t('ariaOpenPhoto', { n: (i % IMAGES.length) + 1, total: IMAGES.length })}
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
                // Real alt on the first copy so the photos can be indexed; the
                // looping duplicate stays empty. The button's aria-label still
                // gives screen readers the accessible name.
                alt={isDuplicate ? '' : t('ariaPhotoAlt', { n: i + 1, total: IMAGES.length })}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 30vw"
                // Fica abaixo da dobra: carregamento lazy, para não competir com
                // a imagem principal (LCP). Qualidade 85: visualmente igual a
                // 100 nestes tamanhos, com cerca de metade do peso.
                quality={85}
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ backgroundColor: 'rgba(32,40,49,0.15)' }}
              />
            </button>
            )
          })}
        </div>

        {/* WCAG 2.2.2 (Pause, Stop, Hide): moving content that starts on its own
            and runs for more than five seconds must offer a way to stop it. */}
        {!reducedMotion && (
          <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 mt-4 flex justify-end">
            <button
              type="button"
              onClick={() => setAutoPlay((v) => !v)}
              aria-pressed={!autoPlay}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'none',
                border: '1px solid #cfd4d9',
                borderRadius: '999px',
                padding: '7px 16px',
                cursor: 'pointer',
                fontFamily: 'var(--font-aileron)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-slate-gray-text)',
              }}
            >
              {autoPlay ? (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="5" y="4" width="5" height="16" rx="1" />
                  <rect x="14" y="4" width="5" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6 4l14 8-14 8z" />
                </svg>
              )}
              {autoPlay ? t('pause') : t('play')}
            </button>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {mounted && modalOpen && createPortal(
        <div
          ref={dialogRef}
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
            color: 'rgba(255,255,255,0.86)',
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
              alt={t('ariaPhotoAlt', { n: activeIndex + 1, total: IMAGE_SRCS.length })}
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
