'use client'

import Link from 'next/link'
import FadeIn from '@/app/components/FadeIn'
import { useTranslation, useLocale } from '@/app/i18n-provider'
import { propertyHref } from '@/app/lib/routes'
import { properties } from '@/app/lib/propertiesData'

function handleSweep(e) {
  const el = e.currentTarget
  if (el.classList.contains('sweeping')) return
  el.classList.add('sweeping')
  const onEnd = (ev) => {
    if (ev.animationName !== 'light-sweep-full') return
    el.classList.remove('sweeping')
    el.removeEventListener('animationend', onEnd)
  }
  el.addEventListener('animationend', onEnd)
}

function LocationPinIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ color: 'var(--color-slate-blue-text)', flexShrink: 0 }}
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ flexShrink: 0 }}
    >
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
  )
}

function PropertyRow({ property }) {
  const { t } = useTranslation('portfolio')
  const locale = useLocale()
  const description = locale === 'pt' && property.ptDescription ? property.ptDescription : property.description
  const displayTags = locale === 'pt' && property.ptTags ? property.ptTags : property.tags
  return (
    <div style={{ borderTop: '1px solid #e0e0e0', padding: '40px 0 48px' }}>
      <FadeIn delay={0}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 flex flex-col md:flex-row md:items-stretch gap-8 md:gap-10">

          {/* Image — top on mobile, right on md+ */}
          <Link
            href={propertyHref(property.slug, locale)}
            className="group order-first md:order-last md:flex-shrink-0 relative rounded-[8px] overflow-hidden block no-underline w-full min-h-[220px] md:w-[52%] md:min-h-[360px]"
            style={{ backgroundColor: '#d0d0d0' }}
          >
            {property.image ? (
              <img
                src={property.image}
                alt={property.name}
                className="transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            ) : (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: '#c8c8c8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#888',
                  fontSize: '0.8rem',
                }}
              >
                Image placeholder
              </div>
            )}
          </Link>

          {/* Text content — below image on mobile, left on md+ */}
          <div className="flex-1 flex flex-col gap-3 order-last md:order-first">

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <LocationPinIcon />
              <span
                style={{
                  fontFamily: 'var(--font-aileron)',
                  fontWeight: 600,
                  fontSize: '0.68rem',
                  color: 'var(--color-slate-blue-text)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                }}
              >
                {property.location}
              </span>
            </div>

            {/* Title — clickable */}
            <Link href={propertyHref(property.slug, locale)} style={{ textDecoration: 'none' }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(1.35rem, 3.5vw, 1.76rem)',
                  fontFamily: 'var(--font-garet)',
                  fontWeight: 800,
                  color: '#6b87a4',
                  lineHeight: 1.2,
                }}
              >
                {property.name}
              </h2>
            </Link>

            {/* Description */}
            <p
              style={{
                margin: 0,
                fontFamily: 'var(--font-aileron)',
                fontWeight: 400,
                fontSize: '0.96rem',
                color: 'var(--color-slate-gray-text)',
                lineHeight: 1.6,
                maxWidth: '480px',
                textAlign: 'justify',
              }}
            >
              {description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
              {displayTags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.76rem',
                    padding: '4px 11px',
                    borderRadius: '999px',
                    border: '1px solid rgba(107, 135, 164, 0.35)',
                    fontFamily: 'var(--font-aileron)',
                    fontWeight: 400,
                    color: 'var(--color-slate-blue-text)',
                    backgroundColor: 'transparent',
                  }}
                >
                  {tag.type === 'people' ? (
                    <>
                      <PersonIcon />
                      <span>{tag.count}</span>
                    </>
                  ) : (
                    tag
                  )}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div style={{ marginTop: '8px' }}>
              <Link
                href={propertyHref(property.slug, locale)}
                className="inline-block px-7 py-3 rounded text-[0.8rem] uppercase tracking-[0.1em] overflow-hidden relative btn-sweep" onMouseEnter={handleSweep}
                style={{
                  backgroundColor: '#202831',
                  color: '#F8F8F8',
                  fontFamily: 'var(--font-aileron)',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                {t('viewProperty')}
              </Link>
            </div>
          </div>

        </div>
      </FadeIn>
    </div>
  )
}

export default function PortfolioList() {
  return (
    <section style={{ backgroundColor: '#f8f8f8' }}>
      {properties.map((property) => (
        <PropertyRow key={property.id} property={property} />
      ))}
      <div style={{ borderTop: '1px solid #e0e0e0' }} />
    </section>
  )
}
