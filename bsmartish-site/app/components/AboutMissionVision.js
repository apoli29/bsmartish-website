'use client'

import { useEffect, useRef, useState } from 'react'
import { FrostedGlassCard } from '@/app/components/ui/interactive-frosted-glass-card'

const items = [
  {
    number: '01',
    label: 'Mission',
    chunk1:
      'To develop urban renovation projects of excellence that transform urban properties into intelligent, functional, and contemporary spaces,',
    chunk2:
      ' while offering medium-term housing solutions that combine comfort, quality of life, and sustainable value for residents.',
  },
  {
    number: '02',
    label: 'Vision',
    chunk1:
      'To be a reference in urban renovation and the real estate sector in general, recognized for the ability to create high-value properties that balance design, functionality, and ethics,',
    chunk2:
      ' and for offering excellence in service—personalized and focused on the well-being and convenience of every resident.',
  },
]

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(el)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

function MVPanel({ item, index }) {
  const [wrapperRef, inView] = useInView(0.18)
  const base = 120 * index

  const animStyle = (delay, axis = 'y', distance = 18) => ({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translate(0, 0)'
      : axis === 'y'
        ? `translateY(${distance}px)`
        : `translateX(${distance}px)`,
    transition: `opacity 850ms ${EASE} ${delay}ms, transform 850ms ${EASE} ${delay}ms`,
  })

  return (
    <div ref={wrapperRef} className="w-full">
      <FrostedGlassCard
        tone="dark"
        className="w-full min-h-[440px] md:min-h-[480px] lg:min-h-[520px]"
        contentClassName="p-8 md:p-10 lg:p-12 flex flex-col h-full"
      >
        {/* Top row — numeral + label cluster */}
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <span
            className="leading-[0.85] tracking-tight text-[5rem] md:text-[7rem] lg:text-[8.5rem]"
            style={{
              fontFamily: 'var(--font-garet)',
              fontWeight: 800,
              color: '#6b87a4',
              ...animStyle(base + 50),
            }}
          >
            {item.number}
          </span>
          <span
            className="uppercase tracking-[0.28em] text-[0.75rem] md:text-[0.8rem] pb-3 md:pb-5"
            style={{
              fontFamily: 'var(--font-aileron)',
              fontWeight: 600,
              color: '#f8f8f8',
              ...animStyle(base + 200, 'x'),
            }}
          >
            {item.label}
          </span>
        </div>

        {/* Drawing accent line — animates width on entry */}
        <span
          aria-hidden="true"
          className="block mb-7 md:mb-9"
          style={{
            height: '1.5px',
            backgroundColor: '#6b87a4',
            width: inView ? '88px' : '0px',
            transition: `width 900ms ${EASE} ${base + 350}ms`,
          }}
        />

        {/* Statement — two chunks staggered (opacity-only so the paragraph flows naturally) */}
        <p
          className="text-[1rem] md:text-[1.05rem] lg:text-[1.1rem] leading-[1.7]"
          style={{
            fontFamily: 'var(--font-aileron)',
            fontWeight: 400,
            color: 'rgba(248,248,248,0.94)',
          }}
        >
          <span
            style={{
              opacity: inView ? 1 : 0,
              transition: `opacity 850ms ${EASE} ${base + 450}ms`,
            }}
          >
            {item.chunk1}
          </span>
          <span
            style={{
              opacity: inView ? 1 : 0,
              transition: `opacity 850ms ${EASE} ${base + 700}ms`,
            }}
          >
            {item.chunk2}
          </span>
        </p>
      </FrostedGlassCard>
    </div>
  )
}

export default function AboutMissionVision() {
  const [headRef, headIn] = useInView(0.3)

  const headStyle = (delay) => ({
    opacity: headIn ? 1 : 0,
    transform: headIn ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 800ms ${EASE} ${delay}ms, transform 800ms ${EASE} ${delay}ms`,
  })

  return (
    <section
      id="about-mission-vision"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#202831' }}
    >
      {/* Atmospheric Slate Blue accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 100% 0%, rgba(107,135,164,0.16) 0%, rgba(107,135,164,0) 70%), radial-gradient(50% 45% at 0% 100%, rgba(107,135,164,0.10) 0%, rgba(107,135,164,0) 70%)',
        }}
      />

      <div className="relative max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-20 md:pt-24 lg:pt-28 pb-20 md:pb-24 lg:pb-28">

        {/* Eyebrow + Headline */}
        <div ref={headRef}>
          <p
            className="mb-4 md:mb-5 uppercase tracking-[0.15em] text-[0.7rem]"
            style={{
              fontFamily: 'var(--font-aileron)',
              fontWeight: 600,
              color: '#6b87a4',
              ...headStyle(0),
            }}
          >
            Mission &amp; Vision
          </p>
          <h2
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] max-w-[820px]"
            style={{
              fontFamily: 'var(--font-radnika)',
              fontWeight: 500,
              color: '#6b87a4',
              ...headStyle(120),
            }}
          >
            Where we are going, and why we are going there.
          </h2>
        </div>

        {/* Two glass panels — Mission / Vision */}
        <div className="mt-12 md:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {items.map((item, i) => (
            <MVPanel key={item.number} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
