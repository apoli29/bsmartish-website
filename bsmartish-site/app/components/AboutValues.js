'use client'

import { useEffect, useRef, useState } from 'react'

const values = [
  {
    name: 'Efficiency',
    description:
      "The fundamental pillar of our expertise. We aim to maximize the potential of every property, transforming spaces into functional and comfortable environments tailored to our residents' daily lives.",
  },
  {
    name: 'Transparency',
    description:
      'We prioritize clear and insightful communication regarding our properties, fostering transparent and long-lasting bonds with our residents and partners.',
  },
  {
    name: 'Ethics',
    description:
      'We are guided by solid ethical principles and a deep sense of responsibility in how we rehabilitate, value, and manage each property, as well as how we welcome and support our residents.',
  },
  {
    name: 'Timelessness',
    description:
      'We develop contemporary urban renovation projects equipped with updated technologies and systems. This ensures all our properties remain current and relevant for many years to come.',
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

function ValueRow({ value, index, isOpen, onToggle }) {
  const [ref, inView] = useInView(0.25)
  const baseDelay = 80 * index

  return (
    <li
      ref={ref}
      className="block"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(14px)',
        transition: `opacity 700ms ${EASE} ${baseDelay}ms, transform 700ms ${EASE} ${baseDelay}ms`,
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group block w-full text-left"
      >
        {/* Pill row — name on Deep Urban, extender fills/collapses, arrow on right */}
        <div className="flex items-stretch w-full">

          {/* Value name pill */}
          <div
            className="flex items-center px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-[22px]"
            style={{ backgroundColor: '#202831' }}
          >
            <span
              className="leading-none uppercase tracking-tight text-[1.4rem] md:text-[1.7rem] lg:text-[1.95rem]"
              style={{
                fontFamily: 'var(--font-garet)',
                fontWeight: 800,
                color: '#f8f8f8',
                whiteSpace: 'nowrap',
              }}
            >
              {value.name}
            </span>
          </div>

          {/* Extender — Deep Urban background that grows when closed, collapses when open */}
          <div
            aria-hidden="true"
            style={{
              backgroundColor: '#202831',
              flexGrow: isOpen ? 0 : 1,
              flexShrink: 0,
              flexBasis: 0,
              transition: `flex-grow 700ms ${EASE}`,
            }}
          />

          {/* Arrow indicator — sits on canvas-white when open, on Deep Urban tail when closed */}
          <div
            className="flex items-center pl-5 md:pl-7"
            style={{
              transition: `background-color 500ms ${EASE}`,
              backgroundColor: 'transparent',
            }}
          >
            <span
              aria-hidden="true"
              className="block transition-transform duration-500 ease-out"
              style={{
                transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                color: '#6b87a4',
              }}
            >
              {/* simple SVG arrow */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </span>
          </div>

        </div>

        {/* Description panel — animated open/close via grid-template-rows */}
        <div
          className="grid"
          style={{
            gridTemplateRows: isOpen ? '1fr' : '0fr',
            transition: `grid-template-rows 600ms ${EASE}`,
          }}
        >
          <div className="overflow-hidden">
            <p
              className="pt-4 md:pt-5 pb-2 md:pb-3 pr-8 md:pr-16 text-[0.98rem] md:text-[1.02rem] lg:text-[1.05rem] leading-[1.7] max-w-[78ch]"
              style={{
                fontFamily: 'var(--font-aileron)',
                fontWeight: 400,
                color: '#75797c',
              }}
            >
              {value.description}
            </p>
          </div>
        </div>
      </button>
    </li>
  )
}

export default function AboutValues() {
  const [headRef, headIn] = useInView(0.3)
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section
      id="about-values"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e4e4e4' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22">

        {/* Eyebrow + Headline */}
        <div
          ref={headRef}
          style={{
            opacity: headIn ? 1 : 0,
            transform: headIn ? 'translateY(0)' : 'translateY(14px)',
            transition: `opacity 700ms ${EASE}, transform 700ms ${EASE}`,
          }}
        >
          <p
            className="mb-4 md:mb-5 uppercase tracking-[0.15em] text-[0.7rem]"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#6b87a4' }}
          >
            Our Values
          </p>
          <h2
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] max-w-[820px]"
            style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#6b87a4' }}
          >
            Four values that shape every project.
          </h2>
        </div>

        {/* Accordion list */}
        <ul className="mt-10 md:mt-12 lg:mt-14 space-y-3 md:space-y-4">
          {values.map((value, i) => (
            <ValueRow
              key={value.name}
              value={value}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </ul>

      </div>
    </section>
  )
}
