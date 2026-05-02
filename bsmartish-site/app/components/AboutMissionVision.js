'use client'

import { useEffect, useRef, useState } from 'react'

const items = [
  {
    label: 'Our Mission',
    text:
      'To develop urban renovation projects of excellence that transform urban properties into intelligent, functional, and contemporary spaces, while offering medium-term housing solutions that combine comfort, quality of life, and sustainable value for residents.',
  },
  {
    label: 'Our Vision',
    text:
      'To be a reference in urban rehabilitation and in the real estate sector in general, recognized for the ability to create properties of value, which balance design, functionality, and ethics, and for offering a service of excellence, personalized and focused on the well-being and convenience of each resident.',
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

function StatementRow({ item, delay }) {
  const [ref, inView] = useInView(0.18)

  const anim = (extra = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(12px)',
    transition: `opacity 700ms ${EASE} ${delay + extra}ms, transform 700ms ${EASE} ${delay + extra}ms`,
  })

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-12 lg:gap-20 py-10 md:py-12 lg:py-14"
      style={{ borderBottom: '1px solid #e2e2e2' }}
    >
      {/* Bullet + Label */}
      <div className="flex items-start gap-3" style={anim(0)}>
        <span
          className="shrink-0 mt-[0.35em] text-[0.45rem]"
          style={{ color: '#6b87a4' }}
        >
          ●
        </span>
        <span
          className="text-[1.15rem] md:text-[1.3rem] lg:text-[1.4rem]"
          style={{
            fontFamily: 'var(--font-garet)',
            fontWeight: 700,
            color: '#202831',
            letterSpacing: '0.01em',
          }}
        >
          {item.label}
        </span>
      </div>

      {/* Body */}
      <p
        className="text-[1.04rem] md:text-[1.08rem] lg:text-[1.12rem] leading-[1.75] text-justify max-w-[65ch]"
        style={{
          fontFamily: 'var(--font-aileron)',
          fontWeight: 400,
          color: '#75797c',
          hyphens: 'auto',
          ...anim(100),
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
            Our Purpose, Built on Two Pillars.
          </h2>
        </div>

        {/* Rows */}
        <div
          className="mt-12 md:mt-16 lg:mt-20"
          style={{ borderTop: '1px solid #e2e2e2' }}
        >
          {items.map((item, i) => (
            <StatementRow key={item.label} item={item} delay={i * 150} />
          ))}
        </div>

      </div>
    </section>
  )
}
