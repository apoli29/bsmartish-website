'use client'

import FadeIn from '@/app/components/FadeIn'
import { FrostedGlassCard } from '@/app/components/ui/interactive-frosted-glass-card'
import { useTranslations } from 'next-intl'

export default function AboutDistinction() {
  const t = useTranslations('aboutDistinction')

  return (
    <section
      id="about-distinction"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e4e4e4' }}
    >
      <div className="max-w-screen-xl mx-auto px-[29px] md:px-[50px] lg:px-[72px] pt-[50px] md:pt-[65px] lg:pt-[79px] pb-[72px] md:pb-[90px] lg:pb-[108px]">

        <FadeIn delay={150}>
          <FrostedGlassCard
            tiltStrength={0.8}
            className="w-full min-h-[240px] md:min-h-[270px] lg:min-h-[300px]"
            image="/images/Website.images/About us/photo6.webp"
            imageSizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1280px"
            imagePosition="center 62%"
            overlayOpacity={0.72}
            contentClassName="pt-[29px] px-[29px] pb-[29px] md:pt-[43px] md:px-[43px] md:pb-[36px] lg:pt-[58px] lg:px-[58px] lg:pb-[43px] flex flex-col justify-end h-full"
          >
            <p
              className="mb-4 md:mb-5 uppercase tracking-[0.15em] text-[0.7rem]"
              style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#f8f8f8' }}
            >
              {t('eyebrow')}
            </p>

            <h2
              className="leading-[1.1] text-[2rem] md:text-[2.6rem] lg:text-[3.1rem] max-w-[820px]"
              style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#f8f8f8' }}
            >
              {t('headline')}
            </h2>

            <p
              className="mt-5 md:mt-6 max-w-[680px] text-[1.04rem] md:text-[1.11rem] lg:text-[1.16rem] leading-[1.7] text-justify"
              style={{
                fontFamily: 'var(--font-aileron)',
                fontWeight: 400,
                color: 'rgba(248,248,248,0.96)',
                hyphens: 'auto',
              }}
            >
              {t('body')}
            </p>
          </FrostedGlassCard>
        </FadeIn>

      </div>
    </section>
  )
}
