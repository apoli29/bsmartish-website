'use client'

import { useEffect, useRef, useState } from 'react'

const activities = [
  {
    title: 'Portfolio Development & Management',
    text:
      'We develop real estate urban renovation projects and operate them within the market through a mid-term rental strategy.',
  },
  {
    title: 'Third-Party Project Management & Consultancy',
    text:
      'We partner with investors to deliver tailored real estate projects, providing hands-on guidance from acquisition and concept design through to execution and monetisation.',
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

function Activity({ activity, delay }) {
  const [ref, inView] = useInView(0.22)

  const style = (extra = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(14px)',
    transition: `opacity 750ms ${EASE} ${delay + extra}ms, transform 750ms ${EASE} ${delay + extra}ms`,
  })

  return (
    <div ref={ref}>
      <h3
        className="leading-[1.15] text-[1.4rem] md:text-[1.55rem] lg:text-[1.7rem] max-w-[28ch]"
        style={{
          fontFamily: 'var(--font-garet)',
          fontWeight: 800,
          color: '#202831',
          ...style(0),
        }}
      >
        {activity.title}
      </h3>
      <p
        className="mt-5 md:mt-6 max-w-[46ch] text-[0.98rem] md:text-[1.02rem] lg:text-[1.05rem] leading-[1.7] text-justify"
        style={{
          fontFamily: 'var(--font-aileron)',
          fontWeight: 400,
          color: '#75797c',
          hyphens: 'auto',
          ...style(120),
        }}
      >
        {activity.text}
      </p>
    </div>
  )
}

export default function AboutWhatWeDo() {
  const [headRef, headIn] = useInView(0.3)

  const headStyle = (d) => ({
    opacity: headIn ? 1 : 0,
    transform: headIn ? 'translateY(0)' : 'translateY(14px)',
    transition: `opacity 700ms ${EASE} ${d}ms, transform 700ms ${EASE} ${d}ms`,
  })

  return (
    <section
      id="about-what-we-do"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e4e4e4' }}
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
            What We Do
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
            Two ways we put our craft to work.
          </h2>
        </div>

        {/* Two activities side-by-side */}
        <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 justify-items-center md:justify-items-stretch">
          {activities.map((activity, i) => (
            <Activity key={activity.title} activity={activity} delay={i * 160} />
          ))}
        </div>

      </div>
    </section>
  )
}
