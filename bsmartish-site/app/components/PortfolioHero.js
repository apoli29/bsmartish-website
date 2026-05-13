'use client'

import FadeIn from '@/app/components/FadeIn'
import { useTranslation } from '@/app/i18n-provider'

export default function PortfolioHero() {
  const { t } = useTranslation('portfolio')
  return (
    <section
      style={{
        backgroundColor: '#f8f8f8',
        minHeight: '260px',
        display: 'flex',
        alignItems: 'flex-end',
        paddingTop: '140px',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 w-full pb-12">
        <FadeIn delay={0}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, backgroundColor: '#6b87a4', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-aileron)',
                fontWeight: 600,
                fontSize: '0.7rem',
                color: '#6b87a4',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
              }}
            >
              {t('eyebrow')}
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <h1
            style={{
              fontFamily: 'var(--font-radnika)',
              fontWeight: 500,
              color: '#6b87a4',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {t('headline')}
          </h1>
        </FadeIn>
      </div>
    </section>
  )
}
