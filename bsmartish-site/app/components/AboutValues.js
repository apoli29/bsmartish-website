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
        marginTop: index === 0 ? 0 : '14px',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 700ms ${EASE} ${baseDelay}ms, transform 700ms ${EASE} ${baseDelay}ms`,
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group block w-full text-left cursor-pointer"
      >
        {/* Deep Urban header bar — full row width, fixed.
            Stays in place on toggle; only the description below it animates. */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2.5rem',
            backgroundColor: '#202831',
            paddingTop: '18px',
            paddingBottom: '18px',
            paddingLeft: '28px',
            paddingRight: '24px',
            width: '100%',
          }}
        >
          <span
            className="leading-none text-[1.45rem] md:text-[1.75rem] lg:text-[2rem]"
            style={{
              fontFamily: 'var(--font-garet)',
              fontWeight: 800,
              color: '#f8f8f8',
              whiteSpace: 'nowrap',
            }}
          >
            {value.name}
          </span>

          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center flex-shrink-0"
            style={{
              color: isOpen ? '#6b87a4' : '#f8f8f8',
              transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
              transition: `transform 500ms ${EASE}, color 450ms ${EASE}`,
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </span>
        </div>

        {/* Description — below the rectangle, revealed as deep urban contracts */}
        <div
          className="grid"
          style={{
            gridTemplateRows: isOpen ? '1fr' : '0fr',
            transition: `grid-template-rows 550ms ${EASE}`,
          }}
        >
          <div className="overflow-hidden">
            <p
              className="pt-5 md:pt-6 pb-2 md:pb-3 pl-[28px] pr-5 md:pr-10 lg:pr-16 text-[0.98rem] md:text-[1.02rem] lg:text-[1.05rem] leading-[1.7] max-w-[78ch]"
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

        {/* Values list */}
        <ul className="mt-10 md:mt-12 lg:mt-14">
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
