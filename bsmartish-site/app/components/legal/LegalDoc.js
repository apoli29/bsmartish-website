'use client'

import Link from 'next/link'
import { useLang } from '@/app/i18n-provider'

// Shell shared by every legal page.
//
// Documents are counsel-drafted and reproduced verbatim in Portuguese.
// When counsel provides an official English translation, pass it via the
// `enContent` prop — it will be shown to EN visitors, with the PT version
// below as the legally binding original.
// When no translation is provided (default), EN visitors see a notice box
// pointing them to hello@bsmartish.com.

const wrap = {
  backgroundColor: '#f8f8f8',
  fontFamily: 'var(--font-aileron)',
}

export function LegalDoc({ eyebrow, title, intro, lastUpdated, children, enContent, enTitle, enDisclaimer }) {
  const [lang] = useLang()
  const isEn = lang !== 'PT'

  // Resolve last updated — accepts either a string or { en, pt } object
  const lastUpdatedDisplay = lastUpdated && typeof lastUpdated === 'object'
    ? (isEn ? lastUpdated.en : lastUpdated.pt)
    : lastUpdated
  const lastUpdatedLabel = isEn ? 'Last updated' : 'Última atualização'

  const displayTitle   = isEn && enTitle ? enTitle : title
  const displayEyebrow = isEn && enTitle ? enTitle : eyebrow

  return (
    <main className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24" style={wrap}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20">
        <div style={{ maxWidth: '820px' }}>
          <p
            className="mb-4 uppercase tracking-[0.15em] text-[0.7rem]"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: 'var(--color-slate-blue-text)' }}
          >
            {displayEyebrow}
          </p>

          <h1
            className="text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1]"
            style={{ fontFamily: 'var(--font-hanken)', fontWeight: 500, color: '#6b87a4' }}
          >
            {displayTitle}
          </h1>

          <p
            className="mt-5 text-[0.85rem]"
            style={{ color: 'var(--color-slate-gray-text)' }}
          >
            BSMARTISH · www.bsmartish.pt · www.bsmartish.com
          </p>

          {lastUpdatedDisplay && (
            <p
              className="mt-2 text-[0.85rem]"
              style={{ color: 'var(--color-slate-gray-text)' }}
            >
              {lastUpdatedLabel}: {lastUpdatedDisplay}
            </p>
          )}

          {/* EN: counsel's disclaimer when an official translation is available */}
          {isEn && enContent && (
            <p
              lang="en"
              className="mt-8 text-[0.9rem] leading-[1.65]"
              style={{
                color: '#202831',
                backgroundColor: '#e7eaed',
                border: '1px solid #cfd4d9',
                borderRadius: '6px',
                padding: '16px 20px',
                maxWidth: '65ch',
              }}
            >
              {enDisclaimer ||
                'This English translation is provided for information purposes. The Portuguese ' +
                'version is the official version. In the event of any discrepancy or inconsistency, ' +
                'the Portuguese version shall prevail, without prejudice to any mandatory legal rights.'}
            </p>
          )}

          {/* EN: fallback notice when no official translation is available */}
          {isEn && !enContent && (
            <p
              lang="en"
              className="mt-8 text-[0.9rem] leading-[1.65]"
              style={{
                color: '#202831',
                backgroundColor: '#e7eaed',
                border: '1px solid #cfd4d9',
                borderRadius: '6px',
                padding: '16px 20px',
                maxWidth: '65ch',
              }}
            >
              This document is published in Portuguese, which is the language of the law that
              governs it and the only version that is legally binding. If you would like it
              explained in English, write to{' '}
              <a
                href="mailto:hello@bsmartish.com"
                style={{ color: '#202831', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                hello@bsmartish.com
              </a>{' '}
              and we will help.
            </p>
          )}

          {intro && (
            <p
              className="mt-6 text-[1rem] leading-[1.7]"
              style={{ color: 'var(--color-slate-gray-text)', maxWidth: '65ch' }}
            >
              {intro}
            </p>
          )}

          {/* EN content (official translation from counsel) */}
          {isEn && enContent && (
            <div className="mt-12 legal-body" lang="en">
              {enContent}
            </div>
          )}

          {/* Divider between EN translation and PT original */}
          {isEn && enContent && (
            <div style={{ marginTop: '56px', paddingTop: '28px', borderTop: '2px solid #cfd4d9' }}>
              <p
                lang="en"
                className="text-[0.75rem] uppercase tracking-[0.14em]"
                style={{ fontWeight: 700, color: 'var(--color-slate-blue-text)' }}
              >
                Original Portuguese version — legally binding
              </p>
              <p
                lang="pt"
                className="mt-1 text-[0.75rem] uppercase tracking-[0.14em]"
                style={{ fontWeight: 600, color: 'var(--color-slate-gray-text)' }}
              >
                Versão portuguesa — juridicamente vinculativa
              </p>
            </div>
          )}

          {/* PT content — always rendered */}
          <div
            className="legal-body"
            style={{ marginTop: isEn && enContent ? '32px' : '48px' }}
            lang="pt"
          >
            {children}
          </div>

          <p className="mt-14 text-[0.85rem]">
            <Link
              href="/"
              style={{ color: 'var(--color-slate-blue-text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              {isEn ? '← Back to bsmartish.com' : '← Voltar a bsmartish.com'}
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export function Section({ id, heading, children }) {
  return (
    <section id={id} className="mb-12">
      <h2
        className="text-[1.25rem] md:text-[1.4rem] leading-snug mb-4"
        style={{ fontFamily: 'var(--font-hanken)', fontWeight: 500, color: '#202831' }}
      >
        {heading}
      </h2>
      <div style={{ color: 'var(--color-slate-gray-text)' }}>{children}</div>
    </section>
  )
}

export function P({ children }) {
  return (
    <p className="mb-4 text-[1rem] leading-[1.7]" style={{ maxWidth: '65ch' }}>
      {children}
    </p>
  )
}

export function UL({ children }) {
  return (
    <ul className="mb-4 pl-5 text-[1rem] leading-[1.7] list-disc" style={{ maxWidth: '65ch' }}>
      {children}
    </ul>
  )
}

export function LI({ children }) {
  return <li className="mb-2">{children}</li>
}

export function A({ href, children, external = false }) {
  const style = {
    color: 'var(--color-slate-blue-text)',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
        {children}
        <span className="sr-only"> (abre num novo separador)</span>
      </a>
    )
  }
  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  )
}

// A field the counsel documents left as [PREENCHER] and that we have now
// filled from verified fact. Rendered as ordinary text — the marker exists so
// these are greppable when the documents are next reviewed.
export function Filled({ children }) {
  return <>{children}</>
}

// Um campo [PREENCHER] do documento original que continua por preencher.
// Marcado visualmente para que não passe despercebido em revisão nem em
// produção — a alternativa seria inventar conteúdo, que é pior.
export function Pendente({ children }) {
  return (
    <mark
      style={{
        backgroundColor: '#fdf2c7',
        color: '#6b5400',
        padding: '2px 6px',
        borderRadius: '3px',
        fontWeight: 600,
      }}
    >
      {children}
    </mark>
  )
}

export function SubSection({ heading, children }) {
  return (
    <div className="mb-8 mt-6">
      <h3
        className="text-[0.95rem] md:text-[1rem] mb-3 leading-snug"
        style={{ fontFamily: 'var(--font-hanken)', fontWeight: 600, color: '#202831' }}
      >
        {heading}
      </h3>
      {children}
    </div>
  )
}

export const CELL_HEAD = {
  fontWeight: 600,
  color: '#202831',
  textAlign: 'left',
  padding: '10px 24px 10px 0',
  borderBottom: '1px solid #cfd4d9',
  whiteSpace: 'nowrap',
}

export const CELL = {
  padding: '12px 24px 12px 0',
  borderBottom: '1px solid #e4e4e4',
  verticalAlign: 'top',
}
