'use client'

import { useTranslation, useLang } from '@/app/i18n-provider'
import FadeIn from '@/app/components/FadeIn'

const eyebrow = {
  margin: '0 0 12px',
  fontFamily: 'var(--font-aileron)',
  fontSize: '0.7rem',
  fontWeight: 600,
  color: 'var(--color-slate-blue-text)',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
}

const detailLabel = {
  fontFamily: 'var(--font-aileron)',
  fontSize: '0.65rem',
  fontWeight: 600,
  color: 'var(--color-slate-blue-text)',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  marginBottom: '7px',
}

const detailValue = {
  fontFamily: 'var(--font-aileron)',
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#202831',
  lineHeight: 1.2,
}

const detailRow = {
  paddingTop: '16px',
  paddingBottom: '16px',
  borderBottom: '1px solid #e4e4e4',
}

export default function PropertyOverviewSection({ property }) {
  const { t } = useTranslation('propertyPage')
  const [lang] = useLang()
  const isPT = lang === 'PT'

  const intro = isPT && property.ptMoreDetails?.intro
    ? property.ptMoreDetails.intro
    : (property.moreDetails?.intro ?? [])

  const tags = isPT && property.ptTags ? property.ptTags : property.tags

  const propertyType = isPT
    ? (property.specs.ptType || property.specs.type)
    : property.specs.type

  const propertyName = isPT && property.ptName
    ? property.ptName
    : `${property.name} ${propertyType}`

  const yearLabelKey = property.specs.yearLabel === 'Renovation Year'
    ? 'labelRenovationYear'
    : 'labelBuiltYear'

  const garageValue = isPT
    ? (property.specs.ptGarage || property.specs.garage)
    : property.specs.garage

  return (
    <section className="order-2 md:order-1" style={{ borderBottom: '1px solid #e4e4e4' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-12 md:py-16 lg:py-[72px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px] gap-10 md:gap-12 lg:gap-20 items-start">

          {/* Left: overview text */}
          <FadeIn delay={0}>
            <div>
              <p className="hidden md:block" style={eyebrow}>{t('aboutEyebrow')}</p>
              <h1 className="hidden md:block" style={{ margin: '0 0 32px', fontFamily: 'var(--font-hanken)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#6b87a4', fontWeight: 500, lineHeight: 1.1 }}>
                {propertyName}
              </h1>
              {intro.map((para, i) => (
                <p
                  key={i}
                  style={{
                    margin: i < intro.length - 1 ? '0 0 14px' : '0 0 28px',
                    fontSize: 'clamp(0.98rem, 2.46vw, 1.20rem)',
                    color: 'var(--color-slate-gray-text)',
                    lineHeight: 1.8,
                    fontFamily: 'var(--font-aileron)',
                    textAlign: 'justify',
                  }}
                >
                  {para}
                </p>
              ))}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{ fontSize: '0.69rem', fontWeight: 600, padding: '5px 14px', borderRadius: '999px', border: '1px solid #6b87a4', color: 'var(--color-slate-blue-text)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                  >
                    {tag.type === 'people' ? `${tag.count} ${t('guests')}` : tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: property details — desktop only (mobile version is above) */}
          <div className="hidden md:block">
            <FadeIn delay={150}>
              <div style={{ paddingTop: '29px' }}>
                <p style={{ ...eyebrow, marginBottom: '0' }}>{t('detailsEyebrow')}</p>

                <div style={{ ...detailRow, borderTop: '1px solid #e4e4e4', marginTop: '16px' }}>
                  <div style={detailLabel}>{t('labelPropertyName')}</div>
                  <div style={detailValue}>{propertyName}</div>
                </div>

                <div style={detailRow}>
                  <div style={detailLabel}>{t('labelLocation')}</div>
                  <div style={detailValue}>{property.location}</div>
                </div>

                <div style={detailRow}>
                  <div style={detailLabel}>{t(yearLabelKey)}</div>
                  <div style={detailValue}>{property.specs.year}</div>
                </div>

                <div style={detailRow}>
                  <div style={detailLabel}>{t('labelSqm')}</div>
                  <div style={detailValue}>{property.specs.area}</div>
                </div>

                {property.specs.energyClass && (
                  <div style={detailRow}>
                    <div style={detailLabel}>{t('labelEnergyClass')}</div>
                    <div style={detailValue}>{property.specs.energyClass}</div>
                  </div>
                )}

                <div style={{ ...detailRow, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <div>
                    <div style={detailLabel}>{t('labelBedroom')}</div>
                    <div style={detailValue}>{property.specs.beds}</div>
                  </div>
                  <div>
                    <div style={detailLabel}>{t('labelBathroom')}</div>
                    <div style={detailValue}>{property.specs.baths}</div>
                  </div>
                  <div>
                    <div style={detailLabel}>{t('labelGarage')}</div>
                    <div style={detailValue}>{garageValue}</div>
                  </div>
                </div>
              </div>

            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
