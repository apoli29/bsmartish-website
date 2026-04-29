'use client'

import { useState, useEffect } from 'react'

const variations = [
  'renting one of our properties?',
  'buying one of our properties?',
  'our urban renovation expertise?',
]

export default function Footer() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % variations.length)
        setVisible(true)
      }, 400)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer style={{ backgroundColor: '#6b87a4', color: '#F8F8F8', fontFamily: 'var(--font-aileron)' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-8 md:py-10">

        {/* Main row */}
        <div
          className="footer-main"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '40px',
            alignItems: 'center',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(248,248,248,0.2)',
          }}
        >
          {/* Left: rotating CTA */}
          <p style={{
            fontSize: 'clamp(0.95rem, 1.4vw, 1.25rem)',
            lineHeight: 1.5,
            margin: 0,
            fontWeight: 400,
            maxWidth: '520px',
          }}>
            Are you interested in{' '}
            <span style={{
              fontWeight: 700,
              transition: 'opacity 0.4s ease',
              opacity: visible ? 1 : 0,
            }}>
              {variations[index]}
            </span>
          </p>

          {/* Right: contact */}
          <div
            className="footer-contact"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}
          >
            <p style={{
              margin: '0 0 6px',
              fontWeight: 600,
              fontSize: '0.65rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              opacity: 0.55,
            }}>
              Contact us
            </p>
            <a
              href="tel:+351936920210"
              style={{ color: '#F8F8F8', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500 }}
              className="footer-link"
            >
              +351 936 920 210
            </a>
            <a
              href="mailto:hello@bsmartish.com"
              style={{ color: '#F8F8F8', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500 }}
              className="footer-link"
            >
              hello@bsmartish.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '14px',
            gap: '16px',
          }}
        >
          <p style={{
            margin: 0,
            fontSize: '0.72rem',
            fontWeight: 400,
            opacity: 0.5,
            letterSpacing: '0.04em',
          }}>
            © 2026 BSMARTISH. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a
              href="https://www.instagram.com/bsmartish"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ color: '#F8F8F8', opacity: 0.65, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.65}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/bsmartish"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: '#F8F8F8', opacity: 0.65, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.65}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <style>{`
        .footer-link:hover { text-decoration: underline; }
        @media (max-width: 640px) {
          .footer-main {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .footer-contact {
            align-items: flex-start !important;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </footer>
  )
}
