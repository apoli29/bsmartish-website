'use client'

import Link from 'next/link'
import { useLang } from '@/app/i18n-provider'

// Shell shared by every legal page.
//
// The documents themselves are counsel-drafted and are reproduced verbatim in
// Portuguese. They are NOT translated here: a translation of a legal text is a
// new legal text, and the two versions would have to be kept in agreement by
// someone qualified to do it. English-speaking visitors get a short notice
// instead, which is our wording, not a restatement of the document.

const wrap = {
  backgroundColor: '#f8f8f8',
  fontFamily: 'var(--font-aileron)',
}

export function LegalDoc({ eyebrow, title, intro, lastUpdated, children }) {
  const [lang] = useLang()
  const isEn = lang !== 'PT'

  return (
    <main className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24" style={wrap}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20">
        <div style={{ maxWidth: '820px' }}>
          <p
            className="mb-4 uppercase tracking-[0.15em] text-[0.7rem]"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: 'var(--color-slate-blue-text)' }}
          >
            {eyebrow}
          </p>

          <h1
            className="text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1]"
            style={{ fontFamily: 'var(--font-hanken)', fontWeight: 500, color: '#6b87a4' }}
          >
            {title}
          </h1>

          <p
            className="mt-5 text-[0.85rem]"
            style={{ color: 'var(--color-slate-gray-text)' }}
          >
            BSMARTISH · www.bsmartish.pt · www.bsmartish.com
          </p>

          {isEn && (
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
                style={{ color: 'var(--color-slate-blue-text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
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

          <div className="mt-12 legal-body" lang="pt">{children}</div>

          {lastUpdated && (
            <p
              className="mt-10 text-[0.75rem] uppercase tracking-[0.14em]"
              style={{ color: 'var(--color-slate-gray-text)', fontWeight: 600 }}
              lang="pt"
            >
              Última atualização: {lastUpdated}
            </p>
          )}

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
