'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SocialTooltip } from '@/app/components/SocialTooltip'
import FadeIn from '@/app/components/FadeIn'
import { useTranslation, useLocale } from '@/app/i18n-provider'
import { pageHref, propertyHref } from '@/app/lib/routes'

export default function FeaturedProperties() {
  const { t } = useTranslation('featured')
  const locale = useLocale()
  const properties = [
    { name: t('property1'), src: '/images/website.images/Home/sec.4/paranhos.sec4.webp',   href: propertyHref('paranhos-apartment', locale)   },
    { name: t('property2'), src: '/images/website.images/Home/sec.4/matosinhos.sec4.webp', href: propertyHref('matosinhos-apartment', locale) },
    { name: t('property3'), src: '/images/website.images/Home/sec.4/alegria.sec4.webp',    href: propertyHref('alegria-apartment', locale)    },
  ]
  return (
    <section
      id="featured-properties"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e4e4e4' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-24 lg:pb-28">

        {/* Section label + Headline */}
        <FadeIn className="mb-10 md:mb-12">
          <p
            className="mb-3 uppercase tracking-[0.15em] text-[0.7rem]"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: 'var(--color-slate-blue-text)' }}
          >
            {t('eyebrow')}
          </p>
          <h2
            className="text-[2rem] md:text-[2.4rem] lg:text-[2.8rem]"
            style={{ fontFamily: 'var(--font-hanken)', color: '#6b87a4', lineHeight: 1.1 }}
          >
            {t('headline')}
          </h2>
        </FadeIn>

        {/* Images grid */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {properties.map(({ name, src, href }, i) => (
            <FadeIn key={name} delay={150 + i * 130} className="w-full md:flex-1">
            <Link
              href={href}
              aria-label={`${name} — view this mid-term rental property`}
              className="relative block w-full overflow-hidden group aspect-[4/3] md:aspect-[3/4]"
            >
              <Image
                src={src}
                alt={`${name} apartment — mid-term rental Porto`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Deep Urban overlay — lightens on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundColor: 'rgba(32, 40, 49, 0.40)' }}
              />
              {/* Bottom scrim. The flat overlay above lightens to 20% on hover,
                  which leaves white 13.6px text sitting on an unpredictable
                  photograph — this gradient guarantees the label stays legible
                  in every state (WCAG 1.4.3). */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(16,20,25,0.78), rgba(16,20,25,0))' }}
              />
              {/* Property name — bottom left */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <span
                  className="text-[0.85rem] uppercase tracking-[0.12em]"
                  style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#f8f8f8' }}
                >
                  {name}
                </span>
                <span
                  className="text-[0.75rem] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: '#f8f8f8' }}
                >
                  {t('propertyHover')}
                </span>
              </div>
            </Link>
            </FadeIn>
          ))}
        </div>

        {/* Footer: View all (esq) + Book with us (dir) */}
        <FadeIn delay={300} className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center sm:justify-between sm:mt-4">
          <Link
            href={pageHref('rentals', locale)}
            className="group flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.1em] transition-all"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#202831' }}
          >
            <span style={{ borderBottom: '1px solid #202831', paddingBottom: '1px' }}>
              {t('viewAll')}
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: 'var(--font-aileron)',
                fontWeight: 600,
                fontSize: '0.8rem',
                color: '#202831',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {t('bookWith')}
            </span>
            <SocialTooltip />
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
