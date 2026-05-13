'use client'

import Link from 'next/link'
import { useTranslation, useLocale, useLang } from '@/app/i18n-provider'
import TiltCard from '@/app/components/TiltCard'
import { SocialTooltip } from '@/app/components/SocialTooltip'

const eyebrow = {
  margin: '0 0 12px',
  fontFamily: 'var(--font-aileron)',
  fontSize: '0.7rem',
  fontWeight: 600,
  color: '#6b87a4',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
}

const sectionH2 = {
  margin: '0 0 32px',
  fontFamily: 'var(--font-radnika)',
  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
  color: '#6b87a4',
  fontWeight: 500,
  lineHeight: 1.2,
}

export function BookWithUs({ bookingLinks }) {
  const { t } = useTranslation('propertyPage')
  return (
    <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, fontSize: '0.8rem', color: '#202831', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
        {t('bookWith')}
      </span>
      <SocialTooltip items={[
        { href: bookingLinks.idealista, ariaLabel: 'Idealista', svgUrl: '/images/website.images/Home/sec.4/logos.pltf-to-rent/idealista.png', imgSize: 23 },
        { href: bookingLinks.airbnb, ariaLabel: 'Airbnb', svgUrl: '/images/website.images/Home/sec.4/logos.pltf-to-rent/air.bnb.png', imgSize: 29 },
        { href: bookingLinks.spotahome, ariaLabel: 'Spotahome', svgUrl: '/images/website.images/Home/sec.4/logos.pltf-to-rent/spotahome.png', imgSize: 23 },
        { href: bookingLinks.flatio, ariaLabel: 'Flatio', svgUrl: '/images/website.images/Home/sec.4/logos.pltf-to-rent/flatio.png', imgSize: 23 },
      ]} />
    </div>
  )
}

export function GalleryHeading() {
  const { t } = useTranslation('propertyPage')
  return (
    <>
      <p style={eyebrow}>{t('galleryEyebrow')}</p>
      <h2 style={sectionH2}>{t('galleryHeading')}</h2>
    </>
  )
}

export function MoreDetailsHeading() {
  const { t } = useTranslation('propertyPage')
  return (
    <>
      <p style={eyebrow}>{t('moreDetailsEyebrow')}</p>
      <h2 style={sectionH2}>{t('moreDetailsHeading')}</h2>
    </>
  )
}

export function ExploreMoreHeading() {
  const { t } = useTranslation('propertyPage')
  return (
    <>
      <p style={eyebrow}>{t('exploreMoreEyebrow')}</p>
      <h2 style={sectionH2}>{t('exploreMoreHeading')}</h2>
    </>
  )
}

export function LocationHeading({ location }) {
  const { t } = useTranslation('propertyPage')
  return (
    <>
      <p style={eyebrow}>{t('locationEyebrow')}</p>
      <h2 style={{ ...sectionH2, marginBottom: '40px' }}>{location}</h2>
    </>
  )
}

export function RelatedPropertiesSection({ related }) {
  const { t } = useTranslation('propertyPage')
  const [lang] = useLang()
  const locale = useLocale()
  const isPt = locale === 'pt' || lang === 'PT'

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {related.map((p) => (
        <Link key={p.id} href={`/mid-term-rentals-in-porto/${p.slug}`} style={{ textDecoration: 'none' }}>
          <TiltCard style={{ border: '1px solid #e4e4e4', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
            <div style={{ height: '220px', backgroundColor: '#c4c8cc' }}>
              {p.image && (
                <img src={p.image} alt={`${p.name} apartment — mid-term rental Porto`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}
            </div>
            <div style={{ padding: '24px 28px' }}>
              <h3 style={{ margin: '0 0 10px', fontFamily: 'var(--font-radnika)', fontSize: '1.5rem', color: '#6b87a4', fontWeight: 500 }}>
                {p.name}
              </h3>
              <p style={{ margin: '0 0 16px', fontSize: '0.96rem', color: '#75797c', lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {isPt && p.ptDescription ? p.ptDescription : p.description}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{ fontSize: '0.68rem', fontWeight: 600, padding: '4px 12px', borderRadius: '999px', border: '1px solid rgba(107,135,164,0.35)', color: '#6b87a4', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                  >
                    {tag.type === 'people' ? `${tag.count} ${t('guests')}` : tag}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        </Link>
      ))}
    </div>
  )
}
