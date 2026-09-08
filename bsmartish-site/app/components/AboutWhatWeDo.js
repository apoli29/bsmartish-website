'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '@/app/i18n-provider'

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

function ActivityRow({ activity, delay }) {
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
      {/* Bullet + Title */}
      <div className="flex items-start gap-3" style={anim(0)}>
        <span
          className="shrink-0 mt-[0.35em] text-[0.45rem]"
          style={{ color: 'var(--color-slate-blue-text)' }}
        >
          ●
        </span>
        <span
          className="text-[1.15rem] md:text-[1.3rem] lg:text-[1.4rem] leading-[1.4] max-w-[26ch]"
          style={{
            fontFamily: 'var(--font-garet)',
            fontWeight: 700,
            color: '#202831',
            letterSpacing: '0.01em',
          }}
        >
          {activity.title}
        </span>
      </div>

      {/* Body */}
      <div style={anim(100)}>
        <p
          className="text-[1.04rem] md:text-[1.08rem] lg:text-[1.12rem] leading-[1.75] text-justify max-w-[65ch]"
          style={{
            fontFamily: 'var(--font-aileron)',
            fontWeight: 400,
            color: 'var(--color-slate-gray-text)',
            hyphens: 'auto',
          }}
        >
          {activity.text}
        </p>
        {activity.cta && (
          <Link
            href={activity.cta.href}
            className="group flex items-start gap-2 transition-all"
            onClick={activity.cta.center ? (e) => {
              e.preventDefault()
              const id = activity.cta.href.split('#')[1]
              const el = document.getElementById(id)
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
              else window.location.href = activity.cta.href
            } : undefined}
            style={{
              display: 'inline-flex',
              marginTop: '1.25rem',
              fontFamily: 'var(--font-aileron)',
              fontWeight: 600,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#202831',
              textDecoration: 'none',
            }}
          >
            <span style={{
              textDecoration: 'underline',
              textDecorationColor: '#202831',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            }}>
              {activity.cta.label}
            </span>
            <span className="transition-transform group-hover:translate-x-1" style={{ flexShrink: 0, lineHeight: 'inherit' }}>→</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default function AboutWhatWeDo() {
  const { t } = useTranslation('aboutWhatWeDo')
  const [headRef, headIn] = useInView(0.3)

  const activities = [
    {
      title: t('activity1Title'),
      text: t('activity1Text'),
      cta: { label: t('activity1Cta'), href: '/mid-term-rentals-in-porto' },
    },
    {
      title: t('activity2Title'),
      text: t('activity2Text'),
      cta: { label: t('activity2Cta'), href: '/#projects-carousel', center: true },
    },
  ]

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

        <div ref={headRef}>
          <p
            className="mb-4 md:mb-5 uppercase tracking-[0.15em] text-[0.7rem]"
            style={{
              fontFamily: 'var(--font-aileron)',
              fontWeight: 600,
              color: 'var(--color-slate-blue-text)',
              ...headStyle(0),
            }}
          >
            {t('eyebrow')}
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
            {t('headline')}
          </h2>
        </div>

        <div
          className="mt-12 md:mt-16 lg:mt-20"
          style={{ borderTop: '1px solid #e2e2e2' }}
        >
          {activities.map((activity, i) => (
            <ActivityRow key={activity.title} activity={activity} delay={i * 150} />
          ))}
        </div>

      </div>
    </section>
  )
}
