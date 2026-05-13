'use client'

import { useTranslation, useLang } from '@/app/i18n-provider'
import FadeIn from '@/app/components/FadeIn'

const eyebrow = {
  margin: '0 0 12px',
  fontFamily: 'var(--font-aileron)',
  fontSize: '0.7rem',
  fontWeight: 600,
  color: '#6b87a4',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
}

const detailLabel = {
  fontFamily: 'var(--font-aileron)',
  fontSize: '0.65rem',
  fontWeight: 600,
  color: '#6b87a4',
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

export default function PropertyMobileSections({ property }) {
  const { t } = useTranslation('propertyPage')
  const [lang] = useLang()
  const isPT = lang === 'PT'

  const propertyType = isPT
    ? (property.specs.ptType || property.specs.type)
    : property.specs.type

  const yearLabelKey = property.specs.yearLabel === 'Renovation Year'
    ? 'labelRenovationYear'
    : 'labelBuiltYear'

  const garageValue = isPT
    ? (property.specs.ptGarage || property.specs.garage)
    : property.specs.garage

  return (
    <>
      {/* Mobile-only hero header */}
      <div className="block md:hidden px-8 pt-6 pb-8" style={{ backgroundColor: '#f8f8f8', borderBottom: '1px solid #e4e4e4' }}>
        <FadeIn delay={0}>
          <p style={{ ...eyebrow, marginBottom: '10px' }}>{t('aboutEyebrow')}</p>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-radnika)', fontSize: 'clamp(1.75rem, 7vw, 2.25rem)', color: '#6b87a4', fontWeight: 500, lineHeight: 1.1 }}>
            {property.name} {propertyType}
          </h2>
        </FadeIn>
      </div>

      {/* Mobile-only: full property details — before gallery */}
      <div className="block md:hidden px-8 py-8" style={{ borderBottom: '1px solid #e4e4e4' }}>
        <FadeIn delay={0}>
          <p style={{ ...eyebrow, marginBottom: '0' }}>{t('detailsEyebrow')}</p>
          <div style={{ ...detailRow, borderTop: '1px solid #e4e4e4', marginTop: '16px' }}>
            <div style={detailLabel}>{t('labelPropertyName')}</div>
            <div style={detailValue}>{property.name} {propertyType}</div>
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
        </FadeIn>
      </div>
    </>
  )
}
