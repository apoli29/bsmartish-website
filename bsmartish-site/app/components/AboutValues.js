'use client'

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

const RECT_WIDTH = 'clamp(220px, 32%, 360px)'
const PEEK = '56px'
const PEEK_MOBILE = '36px'
// Ecrãs tácteis: a mesma animação corre sozinha quando a secção entra no
// ecrã, em dominó de cima para baixo.
const AUTO_START = 900
const AUTO_STAGGER = 260
const AUTO_HOLD = 1600

// Hover no retângulo fechado: recua um pouco, um reflexo atravessa-o e a
// seta desliza para a direita, sinalizando que abre.
const HOVER_CSS = `
.av-sheen {
  position: absolute; top: 0; bottom: 0; left: 0; width: 40%;
  pointer-events: none;
  background: linear-gradient(105deg, rgba(248,248,248,0) 0%, rgba(248,248,248,0.22) 50%, rgba(248,248,248,0) 100%);
  animation: av-sheen 1100ms ${EASE} both;
}
@keyframes av-sheen { from { transform: translateX(-110%); } to { transform: translateX(270%); } }
.av-nudge { animation: av-nudge 1400ms ${EASE} 250ms infinite; }
@keyframes av-nudge { 0%, 100% { transform: translateY(0); } 45% { transform: translateY(6px); } }
@media (prefers-reduced-motion: reduce) { .av-sheen { display: none; } .av-nudge { animation: none; } }
`

function ValueRow({ value, index, isOpen, onToggle, autoCue }) {
  const [ref, inView] = useInView(0.25)
  const [isMobile, setIsMobile] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [autoPeek, setAutoPeek] = useState(false)
  const peeking = (hovered || autoPeek) && !isOpen

  useEffect(() => {
    if (!autoCue) return
    const start = setTimeout(() => setAutoPeek(true), AUTO_START + AUTO_STAGGER * index)
    const end = setTimeout(() => setAutoPeek(false), AUTO_START + AUTO_STAGGER * index + AUTO_HOLD)
    return () => { clearTimeout(start); clearTimeout(end) }
  }, [autoCue, index])
  const baseDelay = 220 * index

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const handle = (e) => setIsMobile(e.matches)
    setIsMobile(mq.matches)
    mq.addEventListener('change', handle)
    return () => mq.removeEventListener('change', handle)
  }, [])

  const fadeStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(12px)',
    transition: `opacity 1200ms ${EASE} ${baseDelay}ms, transform 1200ms ${EASE} ${baseDelay}ms`,
  }

  if (isMobile) {
    return (
      <li
        ref={ref}
        className="block"
        style={{ marginTop: index === 0 ? 0 : '14px', ...fadeStyle }}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="block w-full text-left"
        >
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: peeking ? `calc(100% - ${PEEK_MOBILE})` : '100%',
              backgroundColor: peeking ? '#5e7a97' : '#6b87a4',
              transition: `width 620ms ${EASE}, background-color 400ms ${EASE}`,
              minHeight: '72px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: '24px',
              paddingRight: '20px',
            }}
          >
            {peeking && <span aria-hidden="true" className="av-sheen" />}
            <span
              className="text-[1.18rem] leading-none"
              style={{ fontFamily: 'var(--font-garet)', fontWeight: 800, color: '#f8f8f8' }}
            >
              {value.name}
            </span>
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center flex-shrink-0"
              style={{
                color: '#f8f8f8',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: `transform 500ms ${EASE}, color 450ms ${EASE}`,
              }}
            >
              <span className={peeking ? 'av-nudge inline-flex' : 'inline-flex'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </span>
          </div>
        </button>
        <div
          className="grid"
          inert={!isOpen}
          aria-hidden={isOpen ? undefined : 'true'}
          style={{
            gridTemplateRows: isOpen ? '1fr' : '0fr',
            transition: `grid-template-rows 500ms ${EASE}`,
          }}
        >
          <div className="overflow-hidden">
            <p
              className="text-[0.98rem] leading-[1.7] px-6 pt-4 pb-5 text-justify"
              style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: 'var(--color-slate-gray-text)', hyphens: 'auto' }}
            >
              {value.description}
            </p>
          </div>
        </div>
      </li>
    )
  }

  return (
    <li
      ref={ref}
      className="block"
      style={{ marginTop: index === 0 ? 0 : '14px', ...fadeStyle }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative block w-full text-left cursor-pointer overflow-hidden"
        style={{ minHeight: '132px' }}
      >
        <div
          className="absolute inset-0 flex items-center"
          style={{
            paddingLeft: `calc(${RECT_WIDTH} + 32px)`,
            paddingRight: '20px',
          }}
          aria-hidden={!isOpen}
        >
          <p
            className="text-[1.10rem] md:text-[1.14rem] lg:text-[1.17rem] leading-[1.6] max-w-[68ch]"
            style={{
              fontFamily: 'var(--font-aileron)',
              fontWeight: 400,
              color: 'var(--color-slate-gray-text)',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
              transition: `opacity 400ms ${EASE} ${isOpen ? '200ms' : '0ms'}, transform 400ms ${EASE} ${isOpen ? '200ms' : '0ms'}`,
            }}
          >
            {value.description}
          </p>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: isOpen ? RECT_WIDTH : peeking ? `calc(100% - ${PEEK})` : '100%',
            backgroundColor: peeking ? '#5e7a97' : '#6b87a4',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingLeft: '28px',
            paddingRight: '24px',
            transition: `width 620ms ${EASE}, background-color 400ms ${EASE}`,
          }}
        >
          {peeking && <span aria-hidden="true" className="av-sheen" />}
          <span
            className="leading-none text-[1.28rem] md:text-[1.52rem] lg:text-[1.72rem]"
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
            <span className={peeking ? 'av-nudge inline-flex' : 'inline-flex'}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
            </span>
          </span>
        </div>
      </button>
    </li>
  )
}

export default function AboutValues() {
  const { t } = useTranslation('aboutValues')
  const [headRef, headIn] = useInView(0.3)
  const [openIndex, setOpenIndex] = useState(-1)
  const [listRef, listIn] = useInView(0.3)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const noHover = window.matchMedia('(hover: none)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setIsTouch(noHover && !reduced)
  }, [])

  const values = [
    { name: t('value1Name'), description: t('value1Desc') },
    { name: t('value2Name'), description: t('value2Desc') },
    { name: t('value3Name'), description: t('value3Desc') },
    { name: t('value4Name'), description: t('value4Desc') },
  ]

  return (
    <section
      id="about-values"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e4e4e4' }}
    >
      <style>{HOVER_CSS}</style>
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22">

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
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: 'var(--color-slate-blue-text)' }}
          >
            {t('eyebrow')}
          </p>
          <h2
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] max-w-[820px]"
            style={{ fontFamily: 'var(--font-hanken)', fontWeight: 500, color: '#6b87a4' }}
          >
            {t('headline')}
          </h2>
        </div>

        <ul ref={listRef} className="mt-10 md:mt-12 lg:mt-14">
          {values.map((value, i) => (
            <ValueRow
              key={value.name}
              value={value}
              index={i}
              isOpen={openIndex === i}
              autoCue={isTouch && listIn}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </ul>

      </div>
    </section>
  )
}
