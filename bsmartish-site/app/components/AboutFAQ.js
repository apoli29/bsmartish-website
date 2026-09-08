'use client'

import { useState } from 'react'
import FadeIn from '@/app/components/FadeIn'
import { useTranslation } from '@/app/i18n-provider'

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <li
      className="block"
      style={{ borderBottom: '1px solid #e4e4e4' }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left transition-colors hover:opacity-80"
      >
        <span
          className="text-[1.05rem] md:text-[1.15rem] lg:text-[1.2rem] leading-snug"
          style={{ fontFamily: 'var(--font-hanken)', fontWeight: 500, color: '#202831' }}
        >
          {q}
        </span>

        <span
          aria-hidden="true"
          className="relative flex-shrink-0 mt-[6px] md:mt-[8px]"
          style={{ width: '18px', height: '18px' }}
        >
          <span
            className="absolute left-0 top-1/2 block w-full"
            style={{
              height: '1.5px',
              backgroundColor: '#6b87a4',
              transform: 'translateY(-50%)',
            }}
          />
          <span
            className="absolute left-1/2 top-0 block h-full transition-transform duration-300"
            style={{
              width: '1.5px',
              backgroundColor: '#6b87a4',
              transform: isOpen ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0deg)',
            }}
          />
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-400 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        // A collapsed panel is only clipped visually, so without `inert` its
        // text and its link stay in the tab order and are read out by screen
        // readers as if the answer were open (WCAG 1.3.2 / 2.4.3).
        inert={!isOpen}
        aria-hidden={isOpen ? undefined : 'true'}
      >
        <div className="overflow-hidden">
          <p
            className="pb-6 md:pb-8 pr-10 md:pr-16 text-[clamp(0.98rem,2.46vw,1.06rem)] leading-[1.7] max-w-[65ch] text-justify"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: 'var(--color-slate-gray-text)', hyphens: 'auto' }}
          >
            {a}
          </p>
        </div>
      </div>
    </li>
  )
}

export default function AboutFAQ() {
  const { t } = useTranslation('aboutFAQ')
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
    {
      q: t('q6'),
      a: (
        <>
          {t('a6_pre')}
          <a
            href="#footer"
            style={{ color: 'var(--color-slate-blue-text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            {t('a6_link')}
          </a>
          {t('a6_post')}
        </>
      ),
    },
  ]

  return (
    <section
      id="about-faq"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e4e4e4' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-12 lg:gap-20">

          <FadeIn>
            <p
              className="mb-4 md:mb-5 uppercase tracking-[0.15em] text-[0.7rem]"
              style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: 'var(--color-slate-blue-text)' }}
            >
              {t('eyebrow')}
            </p>
            <h2
              className="text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1] max-w-[420px]"
              style={{ fontFamily: 'var(--font-hanken)', fontWeight: 500, color: '#6b87a4' }}
            >
              {t('headline')}
            </h2>

            <p
              className="mt-6 max-w-[380px] text-[clamp(0.98rem,2.46vw,1.06rem)] leading-relaxed text-justify"
              style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: 'var(--color-slate-gray-text)', hyphens: 'auto' }}
            >
              {t('intro_pre')}
              <a href="#footer" style={{ color: 'var(--color-slate-blue-text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                {t('intro_link')}
              </a>
              {t('intro_post')}
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <ul style={{ borderTop: '1px solid #e4e4e4' }}>
              {faqs.map((item, i) => (
                <FAQItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </ul>
          </FadeIn>

        </div>

      </div>
    </section>
  )
}
