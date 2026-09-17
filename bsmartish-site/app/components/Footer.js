'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useLang, useTranslation } from '@/app/i18n-provider'
import { legalEntity as E } from '@/app/lib/legalEntity'
import { LEGAL_PAGES, legalHref } from '@/app/lib/legalRoutes'

// Surface colour: the brand blue #6b87a4 darkened just enough that white text
// on it reaches WCAG AA (4.92:1 instead of 3.51:1). See globals.css.
const SURFACE = 'var(--color-slate-blue-surface)'
const ON_SURFACE = '#FFFFFF'

export default function Footer() {
  const { t } = useTranslation('footer')
  const [lang] = useLang()
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [inView, setInView] = useState(false)
  const [paused, setPaused] = useState(false)
  const ctaRef = useRef(null)

  const variations = [t('variation1'), t('variation2'), t('variation3')]
  const count = variations.length

  // Only rotate while the headline is on screen. Starting on page load meant
  // the effect was invisible to anyone who had not reached the footer yet.
  useEffect(() => {
    const el = ctaRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Fade out, swap the phrase, fade back in. Pauses on hover or keyboard focus
  // (WCAG 2.2.2) and stays still under the OS "reduce motion" setting.
  useEffect(() => {
    if (!inView || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let swap
    const interval = setInterval(() => {
      setVisible(false)
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % count)
        setVisible(true)
      }, 400)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(swap)
      // Never leave the phrase faded out if we stop mid-transition.
      setVisible(true)
    }
  }, [inView, paused, count])

  // Ordem conforme o documento 01 (Rodapé legal). A identificação completa da
  // empresa (DL 7/2004, art. 10.º) está na página Informação Legal, ligada a
  // partir do rodapé de todas as páginas.
  const legalLinks = LEGAL_PAGES.map(({ key }) => ({ href: legalHref(key, lang), label: t(key) }))

  return (
    <footer
      id="footer"
      style={{ backgroundColor: SURFACE, color: ON_SURFACE, fontFamily: 'var(--font-aileron)' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-8 md:py-10">

        {/* Main row */}
        <div
          className="footer-main"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Left: rotating CTA */}
          <p ref={ctaRef} className="footer-cta">
            <span>{t('ctaPrefix')}</span>
            <span
              aria-hidden="true"
              style={{ fontWeight: 700, transition: 'opacity 0.4s ease', opacity: visible ? 1 : 0 }}
            >
              {variations[index]}
            </span>
            {/* Screen readers get every option once, statically, instead of a
                sentence that silently rewrites itself every three seconds. */}
            <span className="sr-only">{variations.join(' ')}</span>
          </p>

          {/* Right: contact */}
          <div className="footer-contact">
            <p className="footer-label">{t('contactLabel')}</p>
            <a href={`tel:${E.phoneHref}`} className="footer-link footer-contact-link">
              {E.phone}
            </a>
            <a href={`mailto:${E.email}`} className="footer-link footer-contact-link">
              {E.email}
            </a>
            <p className="footer-copy">{t('copyright')}</p>
          </div>
        </div>

        {/* Bottom bar: legal pages | social */}
        <div className="footer-bottom">
          <nav aria-label={t('legalNavLabel')}>
            <ul className="footer-legal">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link footer-small-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-social-row">
            <a
              href="https://www.instagram.com/bsmartish"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
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
              className="footer-social"
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
        #footer .footer-main {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.28);
        }
        #footer .footer-cta {
          margin: 0;
          font-size: clamp(0.95rem, 1.4vw, 1.25rem);
          line-height: 1.5;
          font-weight: 400;
        }

        #footer .footer-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        #footer .footer-label {
          margin: 0 0 4px;
          font-weight: 600;
          font-size: 0.65rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        /* Muted grey, as in the original footer design. */
        #footer .footer-copy {
          margin: 6px 0 0;
          font-size: 0.72rem;
          letter-spacing: 0.04em;
          color: rgba(248,248,248,0.5);
        }

        #footer .footer-link {
          color: ${ON_SURFACE};
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          min-height: 24px; /* WCAG 2.5.8 target size */
        }
        #footer .footer-link:hover { text-decoration: underline; text-underline-offset: 3px; }
        #footer .footer-contact-link { font-size: 0.88rem; font-weight: 500; }

        #footer .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-top: 14px;
        }
        #footer .footer-legal {
          display: flex;
          flex-wrap: wrap;
          gap: 0 22px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        #footer .footer-small-link { font-size: 0.72rem; letter-spacing: 0.04em; }

        #footer .footer-social-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-right: -5px;
        }
        #footer .footer-social {
          color: ${ON_SURFACE};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          opacity: 0.65; /* 3.1:1 on the surface, above the 3:1 minimum for icons */
          transition: opacity 0.2s ease;
        }
        #footer .footer-social:hover,
        #footer .footer-social:focus-visible { opacity: 1; }

        @media (max-width: 640px) {
          #footer .footer-main { grid-template-columns: 1fr; gap: 16px; }
          #footer .footer-contact { align-items: flex-start; }
          #footer .footer-bottom { flex-direction: column; align-items: flex-start; gap: 12px; }
          #footer .footer-legal { flex-direction: column; }
          #footer .footer-social-row { margin: 0 0 0 -5px; }
        }

        @media (prefers-reduced-motion: reduce) {
          #footer .footer-cta span { transition: none !important; }
        }
      `}</style>
    </footer>
  )
}
