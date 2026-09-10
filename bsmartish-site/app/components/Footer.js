'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from '@/app/i18n-provider'
import { legalEntity as E } from '@/app/lib/legalEntity'

// Surface colour: the brand blue #6b87a4 darkened just enough that white text
// on it reaches WCAG AA (4.92:1 instead of 3.51:1). See globals.css.
const SURFACE = 'var(--color-slate-blue-surface)'
const ON_SURFACE = '#FFFFFF'

// Number of full rotations of the headline before it settles. Auto-updating
// text that runs forever fails WCAG 2.2.2 (Pause, Stop, Hide); stopping after
// one complete cycle — plus pausing on hover/focus and honouring the OS
// "reduce motion" setting — keeps the effect without trapping the reader.
const CYCLES = 1

export default function Footer() {
  const { t } = useTranslation('footer')
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [paused, setPaused] = useState(false)
  const stepsRef = useRef(0)

  const variations = [t('variation1'), t('variation2'), t('variation3')]
  const maxSteps = variations.length * CYCLES

  useEffect(() => {
    if (paused) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const interval = setInterval(() => {
      if (stepsRef.current >= maxSteps) {
        clearInterval(interval)
        return
      }
      stepsRef.current += 1
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % variations.length)
        setVisible(true)
      }, 400)
    }, 3000)

    return () => clearInterval(interval)
  }, [paused, maxSteps, variations.length])

  const linkStyle = {
    color: ON_SURFACE,
    textDecoration: 'none',
    fontSize: '0.8rem',
    fontWeight: 500,
    // WCAG 2.5.8 (Target Size, Minimum): pointer targets need 24x24 CSS px.
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '24px',
    padding: '2px 0',
  }

  // Ordem e designações conforme o documento 01 (Rodapé legal), que manda:
  //   Informação Legal | Política de Privacidade | Política de Cookies |
  //   Informação ao Consumidor | Livro de Reclamações
  // "Informação ao Consumidor" está em falta porque não foi fornecido texto
  // para essa página. Não é inventada aqui — acrescentar assim que chegar.
  const legalLinks = [
    { href: '/legal-notice', label: 'Informação Legal' },
    { href: '/privacy-policy', label: 'Política de Privacidade' },
    { href: '/cookie-policy', label: 'Política de Cookies' },
  ]

  // Texto exato do documento 01 (Rodapé legal). Não reescrever nem traduzir:
  // é uma declaração jurídica de identificação, exigida pelo art. 10.º do
  // DL 7/2004, e a versão portuguesa é a que vincula.
  const identityLines = [
    'BSMARTISH · www.bsmartish.pt · www.bsmartish.com',
    `BSMARTISH URBAN RENOVATION é uma marca registada e titulada por: ${E.legalName}, pessoa coletiva n.º ${E.taxNumber}, com sede em ${E.address}.`,
    `Contacto: ${E.email} | ${E.phone}`,
  ]

  return (
    <footer
      id="footer"
      style={{ backgroundColor: SURFACE, color: ON_SURFACE, fontFamily: 'var(--font-aileron)' }}
    >
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
            borderBottom: '1px solid rgba(255,255,255,0.28)',
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Left: rotating CTA */}
          <p style={{
            fontSize: 'clamp(0.95rem, 1.4vw, 1.25rem)',
            lineHeight: 1.5,
            margin: 0,
            fontWeight: 400,
          }}>
            <span>{t('ctaPrefix')}</span>
            <span
              aria-hidden="true"
              style={{
                fontWeight: 700,
                transition: 'opacity 0.4s ease',
                opacity: visible ? 1 : 0,
              }}
            >
              {variations[index]}
            </span>
            {/* Screen readers get every option once, statically, instead of a
                sentence that silently rewrites itself every three seconds. */}
            <span className="sr-only">{variations.join(' ')}</span>
          </p>

          {/* Right: contact */}
          <div
            className="footer-contact"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}
          >
            <p style={{
              margin: '0 0 6px',
              fontWeight: 600,
              fontSize: '0.68rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: ON_SURFACE,
            }}>
              {t('contactLabel')}
            </p>
            <a href={`tel:${E.phoneHref}`} style={linkStyle} className="footer-link">
              {E.phone}
            </a>
            <a href={`mailto:${E.email}`} style={linkStyle} className="footer-link">
              {E.email}
            </a>
            <p style={{
              margin: '4px 0 0',
              fontSize: '0.68rem',
              color: ON_SURFACE,
              textAlign: 'right',
              maxWidth: '260px',
            }}>
              {t('callCost')}
            </p>
          </div>
        </div>

        {/* Legal navigation */}
        <nav
          aria-label={t('legalNavLabel')}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px 24px',
            paddingTop: '18px',
            paddingBottom: '16px',
          }}
        >
          {legalLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="footer-link"
              style={{
                color: ON_SURFACE,
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '24px',
              }}
            >
              {label}
            </Link>
          ))}

          {/* DL 156/2005 (as amended by DL 74/2017): a supplier with a website
              must display a visible link to the electronic complaints book. */}
          <a
            href={E.complaintsBookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            style={{
              color: ON_SURFACE,
              textDecoration: 'none',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '24px',
            }}
          >
            Livro de Reclamações
            <span className="sr-only"> {t('opensNewTab')}</span>
          </a>
        </nav>

        {/* Business identification — DL 7/2004, art. 10 */}
        {identityLines.length > 0 && (
          <address
            style={{
              fontStyle: 'normal',
              fontSize: '0.72rem',
              lineHeight: 1.7,
              color: ON_SURFACE,
              paddingBottom: '14px',
              maxWidth: '70ch',
            }}
          >
            {identityLines.map((line) => (
              <span key={line} style={{ display: 'block' }}>{line}</span>
            ))}
          </address>
        )}

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '14px',
            borderTop: '1px solid rgba(255,255,255,0.22)',
            gap: '16px',
          }}
        >
          <p style={{
            margin: 0,
            fontSize: '0.72rem',
            fontWeight: 400,
            color: ON_SURFACE,
            letterSpacing: '0.04em',
          }}>
            © 2026 BSMARTISH. Todos os direitos reservados.
          </p>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a
              href="https://www.instagram.com/bsmartish"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: ON_SURFACE,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              <span className="sr-only">Instagram {t('opensNewTab')}</span>
            </a>
            <a
              href="https://www.linkedin.com/company/bsmartish"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: ON_SURFACE,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              <span className="sr-only">LinkedIn {t('opensNewTab')}</span>
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
          .footer-contact p:last-child { text-align: left !important; }
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
