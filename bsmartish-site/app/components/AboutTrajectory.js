'use client'

import FadeIn from '@/app/components/FadeIn'
import { FrostedGlassCard } from '@/app/components/ui/interactive-frosted-glass-card'
import { useTranslation } from '@/app/i18n-provider'

export default function AboutTrajectory() {
  const { t } = useTranslation('aboutTrajectory')

  return (
    <section
      id="about-trajectory"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-16 md:pt-20 lg:pt-24 pb-0">

        <FadeIn>
          <p
            className="mb-4 md:mb-5 uppercase tracking-[0.15em] text-[0.7rem]"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#6b87a4' }}
          >
            {t('eyebrow')}
          </p>
          <h2
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] max-w-[820px]"
            style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#6b87a4' }}
          >
            {t('headline')}
          </h2>
        </FadeIn>

        <div className="mt-10 md:mt-12 lg:mt-14 flex flex-col lg:flex-row gap-4">

          {/* Spain era */}
          <FadeIn delay={150} className="w-full lg:flex-1">
            <FrostedGlassCard
              className="w-full min-h-[320px] md:min-h-[360px] lg:min-h-[400px]"
              image="/images/website.images/about-us/photo2.webp"
              imageSizes="(max-width: 1024px) 100vw, 720px"
              overlayOpacity={0.72}
              contentClassName="pt-7 px-7 pb-8 md:pt-9 md:px-9 md:pb-10 lg:pt-10 lg:px-10 lg:pb-12 flex flex-col gap-8 lg:gap-0 lg:justify-between h-full"
            >
              <span
                className="self-start uppercase tracking-[0.18em] text-[0.7rem] px-3 py-[6px]"
                style={{
                  fontFamily: 'var(--font-aileron)',
                  fontWeight: 600,
                  color: '#f8f8f8',
                  border: '1px solid rgba(255,255,255,0.55)',
                  borderRadius: '999px',
                }}
              >
                2006 — 2017
              </span>

              <div className="max-w-[440px]">
                <h3
                  className="leading-none text-[2.4rem] md:text-[2.8rem] lg:text-[3rem]"
                  style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#f8f8f8' }}
                >
                  {t('spainTitle')}
                </h3>
                <p
                  className="mt-4 md:mt-5 text-[1.01rem] md:text-[1.06rem] leading-relaxed text-justify"
                  style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: 'rgba(248,248,248,0.96)', hyphens: 'auto' }}
                >
                  {t('spainText')}
                </p>
              </div>
            </FrostedGlassCard>
          </FadeIn>

          {/* Porto era */}
          <FadeIn delay={300} className="w-full lg:flex-1">
            <FrostedGlassCard
              className="w-full min-h-[320px] md:min-h-[360px] lg:min-h-[400px]"
              image="/images/website.images/about-us/photo1.webp"
              imageSizes="(max-width: 1024px) 100vw, 720px"
              overlayOpacity={0.72}
              contentClassName="pt-7 px-7 pb-8 md:pt-9 md:px-9 md:pb-10 lg:pt-10 lg:px-10 lg:pb-12 flex flex-col gap-8 lg:gap-0 lg:justify-between h-full"
            >
              <span
                className="self-start uppercase tracking-[0.18em] text-[0.7rem] px-3 py-[6px]"
                style={{
                  fontFamily: 'var(--font-aileron)',
                  fontWeight: 600,
                  color: '#f8f8f8',
                  border: '1px solid rgba(255,255,255,0.55)',
                  borderRadius: '999px',
                }}
              >
                {t('portoChip')}
              </span>

              <div className="max-w-[440px]">
                <h3
                  className="leading-none text-[2.4rem] md:text-[2.8rem] lg:text-[3rem]"
                  style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#f8f8f8' }}
                >
                  {t('portoTitle')}
                </h3>
                <p
                  className="mt-4 md:mt-5 text-[1.01rem] md:text-[1.06rem] leading-relaxed text-justify"
                  style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: 'rgba(248,248,248,0.96)', hyphens: 'auto' }}
                >
                  {t('portoText')}
                </p>
              </div>
            </FrostedGlassCard>
          </FadeIn>

        </div>

      </div>
    </section>
  )
}
