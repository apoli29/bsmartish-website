'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useLang } from '@/app/i18n-provider'

const ChevronIcon = ({ isOpen }) => (
  <svg
    width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="#6b87a4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 420ms cubic-bezier(0.4, 0, 0.2, 1)',
      flexShrink: 0,
    }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export default function MoreDetailsAccordion({ moreDetails, ptMoreDetails }) {
  const [openKey, setOpenKey] = useState('characteristics')
  const [hoveredKey, setHoveredKey] = useState(null)
  const t = useTranslations('propertyPage')
  const [lang] = useLang()
  const isPT = lang === 'PT'

  const activeDetails = isPT && ptMoreDetails ? ptMoreDetails : moreDetails

  const subsections = [
    { label: isPT ? t('characteristicsTitle') : 'Main Characteristics', key: 'characteristics' },
    { label: isPT ? t('compositionTitle') : 'Composition', key: 'composition' },
    { label: isPT ? t('highlightsTitle') : 'Highlights', key: 'highlights' },
    { label: isPT ? t('conditionsTitle') : 'Conditions', key: 'conditions' },
  ]

  const toggle = (key) => setOpenKey(openKey === key ? null : key)

  return (
    <div style={{ borderTop: '1px solid #e4e4e4' }}>
      {subsections.map(({ label, key }) => {
        const isOpen = openKey === key
        const isHovered = hoveredKey === key
        const items = activeDetails[key]

        if (!items) return null

        return (
          <div key={key} style={{ borderBottom: '1px solid #e4e4e4' }}>
            <button
              onClick={() => toggle(key)}
              onMouseEnter={() => setHoveredKey(key)}
              onMouseLeave={() => setHoveredKey(null)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '22px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                outline: 'none',
                transition: 'opacity 200ms ease',
                opacity: isHovered && !isOpen ? 0.75 : 1,
              }}
            >
              <span style={{
                fontFamily: 'var(--font-aileron)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#6b87a4',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}>
                {label}
              </span>
              <ChevronIcon isOpen={isOpen} />
            </button>

            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 480ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div style={{ paddingBottom: '24px' }}>
                  {items.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '14px',
                        padding: '11px 0',
                        borderBottom: i < items.length - 1 ? '1px solid #efefef' : 'none',
                      }}
                    >
                      <span style={{
                        color: '#6b87a4',
                        flexShrink: 0,
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        lineHeight: 1,
                      }}>
                        —
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-aileron)',
                        fontSize: 'clamp(0.98rem, 2.46vw, 1.11rem)',
                        color: '#202831',
                        lineHeight: 1.6,
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
