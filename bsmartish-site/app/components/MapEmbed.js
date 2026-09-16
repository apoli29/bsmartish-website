'use client'

import { useState } from 'react'
import { useLang, useTranslation } from '@/app/i18n-provider'
import { legalHref } from '@/app/lib/legalRoutes'

/**
 * Google Maps embed behind a consent gate.
 *
 * A plain <iframe src="google.com/maps/embed"> contacts Google and lets Google
 * set cookies the instant the page loads — that is storage/access on the user's
 * device that is not strictly necessary, so ePrivacy (art. 5(3), in Portugal
 * art. 5 of Lei 41/2004) requires prior consent for it.
 *
 * Rather than bolt a site-wide cookie banner onto an otherwise cookie-free
 * site, the map is simply not requested until the visitor asks for it. Clicking
 * "Load map" is the consent. Nothing is remembered, so a reload returns to the
 * blocked state and consent is never assumed.
 */
export default function MapEmbed({ src, location }) {
  const { t } = useTranslation('map')
  const [lang] = useLang()
  const [loaded, setLoaded] = useState(false)

  const frame = {
    width: '100%',
    height: '420px',
    borderRadius: '12px',
    overflow: 'hidden',
  }

  if (!src) {
    return (
      <div
        style={{
          ...frame,
          backgroundColor: '#d4d8dc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-aileron)',
            color: '#5f6366',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {t('unavailable')}
        </span>
      </div>
    )
  }

  if (loaded) {
    return (
      <div style={frame}>
        <iframe
          src={src}
          title={t('frameTitle', { location })}
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    )
  }

  return (
    <div
      style={{
        ...frame,
        backgroundColor: '#e7eaed',
        border: '1px solid #cfd4d9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '32px 24px',
        gap: '14px',
      }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#5b738b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>

      <p
        style={{
          margin: 0,
          fontFamily: 'var(--font-aileron)',
          fontWeight: 600,
          fontSize: '1rem',
          color: '#202831',
        }}
      >
        {location}
      </p>

      <p
        style={{
          margin: 0,
          maxWidth: '46ch',
          fontFamily: 'var(--font-aileron)',
          fontSize: '0.88rem',
          lineHeight: 1.6,
          color: '#5f6366',
        }}
      >
        {t('notice')}
      </p>

      <button
        type="button"
        onClick={() => setLoaded(true)}
        style={{
          marginTop: '4px',
          backgroundColor: '#202831',
          color: '#F8F8F8',
          fontFamily: 'var(--font-aileron)',
          fontWeight: 600,
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '13px 30px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {t('loadButton')}
      </button>

      <a
        href={legalHref('cookies', lang)}
        style={{
          fontFamily: 'var(--font-aileron)',
          fontSize: '0.78rem',
          color: '#5b738b',
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
        }}
      >
        {t('policyLink')}
      </a>
    </div>
  )
}
