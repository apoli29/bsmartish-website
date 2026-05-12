'use client'

import { useEffect, useRef, useState } from 'react'

const EASE_OUT_QUINT = 'cubic-bezier(0.22, 1, 0.36, 1)'

export default function AboutHero() {
  const sectionRef = useRef(null)
  const handledRef = useRef(false)
  const wheelRemoverRef = useRef(null)
  const isHeroVisibleRef = useRef(true)
  const [arrowVisible, setArrowVisible] = useState(true)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const attachWheel = () => {
      if (wheelRemoverRef.current) wheelRemoverRef.current()
      handledRef.current = false

      const onWheel = (e) => {
        if (handledRef.current || e.deltaY <= 0 || window.scrollY > 60) return
        handledRef.current = true
        e.preventDefault()
        setArrowVisible(false)
        const next = section.nextElementSibling
        if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }

      window.addEventListener('wheel', onWheel, { passive: false })
      wheelRemoverRef.current = () => window.removeEventListener('wheel', onWheel)
    }

    attachWheel()

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isHeroVisibleRef.current) {
          isHeroVisibleRef.current = true
          setArrowVisible(true)
          attachWheel()
        } else if (!entry.isIntersecting) {
          isHeroVisibleRef.current = false
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(section)

    return () => {
      observer.disconnect()
      if (wheelRemoverRef.current) wheelRemoverRef.current()
    }
  }, [])

  const scrollToNext = () => {
    setArrowVisible(false)
    const next = sectionRef.current?.nextElementSibling
    if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Website.images/About%20us/img.sec.1.webp')" }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(32,40,49,0.78) 0%, rgba(32,40,49,0.55) 35%, rgba(32,40,49,0.65) 70%, rgba(32,40,49,0.92) 100%)',
        }}
      />

      {/* Slate blue tint */}
      <div
        className="absolute inset-0 mix-blend-overlay pointer-events-none"
        style={{ backgroundColor: 'rgba(107,135,164,0.22)' }}
      />

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        style={{
          position: 'absolute',
          bottom: '2.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '12px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0,
          opacity: arrowVisible ? 1 : 0,
          transition: `opacity 800ms ${EASE_OUT_QUINT}`,
        }}
      >
        {/* Single chevron */}
        <svg
          width="46"
          height="28"
          viewBox="0 0 23 14"
          fill="none"
          aria-hidden="true"
          style={{ animation: `heroChevron 5.39s ease-in-out infinite` }}
        >
          <polyline
            points="2,2 11.5,11 21,2"
            stroke="rgba(248,248,248,0.88)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <style>{`
          @keyframes heroChevron {
            0%, 100% { transform: translateY(0px);  opacity: 1;   }
            55%       { transform: translateY(10px); opacity: 0.6; }
          }
          @media (prefers-reduced-motion: reduce) {
            @keyframes heroChevron { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
          }
        `}</style>
      </button>
    </section>
  )
}
