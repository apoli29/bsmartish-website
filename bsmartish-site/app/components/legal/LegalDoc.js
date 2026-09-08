'use client'

import Link from 'next/link'
import { useLang } from '@/app/i18n-provider'

// Shell shared by every legal page.
//
// Each document supplies BOTH languages as `en` and `pt` objects, side by side
// in the same file. That is deliberate: legal texts that live in separate files
// drift apart, and two versions of a privacy policy that say different things
// is worse than having only one. Editing one language and not the other is
// immediately visible in the diff.

const wrap = {
  backgroundColor: '#f8f8f8',
  fontFamily: 'var(--font-aileron)',
}

const CHROME = {
  en: { updated: 'Last updated:', back: '← Back to bsmartish.com' },
  pt: { updated: 'Última atualização:', back: '← Voltar a bsmartish.com' },
}

export function LegalDoc({ en, pt, lastUpdated }) {
  const [lang] = useLang()
  const isPt = lang === 'PT'
  const doc = isPt ? pt : en
  const chrome = isPt ? CHROME.pt : CHROME.en
  const stamp = isPt ? lastUpdated.pt : lastUpdated.en

  return (
    <main className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24" style={wrap}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20">
        <div style={{ maxWidth: '820px' }}>
          <p
            className="mb-4 uppercase tracking-[0.15em] text-[0.7rem]"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: 'var(--color-slate-blue-text)' }}
          >
            {doc.eyebrow}
          </p>

          <h1
            className="text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1]"
            style={{ fontFamily: 'var(--font-hanken)', fontWeight: 500, color: '#6b87a4' }}
          >
            {doc.title}
          </h1>

          {doc.intro && (
            <p
              className="mt-6 text-[1rem] leading-[1.7]"
              style={{ color: 'var(--color-slate-gray-text)', maxWidth: '65ch' }}
            >
              {doc.intro}
            </p>
          )}

          {stamp && (
            <p
              className="mt-6 text-[0.75rem] uppercase tracking-[0.14em]"
              style={{ color: 'var(--color-slate-gray-text)', fontWeight: 600 }}
            >
              {chrome.updated} {stamp}
            </p>
          )}

          <div className="mt-12 legal-body">{doc.body}</div>

          <p className="mt-16 text-[0.85rem]">
            <Link
              href="/"
              style={{ color: 'var(--color-slate-blue-text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              {chrome.back}
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

export function A({ href, children, external = false, newTabLabel = '(opens in a new tab)' }) {
  const style = {
    color: 'var(--color-slate-blue-text)',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
        {children}
        <span className="sr-only"> {newTabLabel}</span>
      </a>
    )
  }
  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  )
}

// Rows whose value is falsy are dropped, so a field not yet filled in
// legalEntity.js never renders as an empty placeholder.
export function DataTable({ rows }) {
  const present = rows.filter(([, value]) => Boolean(value))
  if (present.length === 0) return null
  return (
    <div className="mb-4 overflow-x-auto">
      <table className="text-[1rem] leading-[1.7]" style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {present.map(([label, value]) => (
            <tr key={label} style={{ borderBottom: '1px solid #e4e4e4' }}>
              <th
                scope="row"
                className="pr-8 py-3 text-left align-top whitespace-nowrap"
                style={{ fontWeight: 600, color: '#202831' }}
              >
                {label}
              </th>
              <td className="py-3 align-top">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
