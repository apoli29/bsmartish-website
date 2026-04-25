'use client'

import { useEffect, useRef, useState } from 'react'

const items = [
  {
    label: 'Mission',
    text:
      'To develop urban renovation projects of excellence that transform urban properties into intelligent, functional, and contemporary spaces, while offering medium-term housing solutions that combine comfort, quality of life, and sustainable value for residents.',
  },
  {
    label: 'Vision',
    text:
      'To be a reference in urban renovation and the real estate sector in general, recognized for the ability to create high-value properties that balance design, functionality, and ethics, and for offering excellence in service — personalized and focused on the well-being and convenience of every resident.',
  },
]

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

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

function Statement({ item, delay }) {
  const [ref, inView] = useInView(0.22)

  const style = (extra = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(14px)',
    transition: `opacity 750ms ${EASE} ${delay + extra}ms, transform 750ms ${EASE} ${delay + extra}ms`,
  })

  return (
    <div ref={ref} className="text-left">
      <h3
        className="leading-none text-[1.6rem] md:text-[1.9rem] lg:text-[2.2rem]"
        style={{
          fontFamily: 'var(--font-garet)',
          fontWeight: 800,
          color: '#202831',
          ...style(0),
        }}
      >
        {item.label}
      </h3>
      <p
        className="mt-5 md:mt-6 max-w-[52ch] text-[1.06rem] md:text-[1.11rem] lg:text-[1.16rem] leading-[1.7] text-justify"
        style={{
          fontFamily: 'var(--font-aileron)',
          fontWeight: 400,
          color: '#75797c',
          hyphens: 'auto',
          ...style(120),
        }}
      >
        {item.text}
      </p>
    </div>
  )
}

export default function AboutMissionVision() {
  const [headRef, headIn] = useInView(0.3)

  const headStyle = (d) => ({
    opacity: headIn ? 1 : 0,
    transform: headIn ? 'translateY(0)' : 'translateY(14px)',
    transition: `opacity 700ms ${EASE} ${d}ms, transform 700ms ${EASE} ${d}ms`,
  })

  return (
    <section
      id="about-mission-vision"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22">

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

        {/* Mission / Vision — side-by-side, left-aligned */}
        <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {items.map((item, i) => (
            <Statement key={item.label} item={item} delay={i * 140} />
          ))}
        </div>

      </div>
    </section>
  )
}
