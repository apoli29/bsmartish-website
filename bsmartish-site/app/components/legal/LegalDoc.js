'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
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

// Índice lateral. Estes documentos são longos e a coluna de texto pára nos
// 820px, o que deixava metade do ecrã vazia em desktop. O índice ocupa esse
// espaço com algo útil: onde estou, e como salto para outra secção.
//
// As secções são lidas do DOM já renderizado em vez de serem declaradas à
// mão em cada página — assim uma alteração aos documentos do advogado nunca
// deixa o índice dessincronizado do texto.
function SectionIndex({ scopeRef, label, deps }) {
  const [sections, setSections] = useState([])
  const [active, setActive] = useState(null)

  useEffect(() => {
    const root = scopeRef.current
    if (!root) return

    const found = Array.from(root.querySelectorAll('section[id] > h2')).map((h) => ({
      id: h.parentElement.id,
      text: h.textContent.trim(),
    }))
    setSections(found)

    if (found.length === 0) return

    // Marca como ativa a última secção cujo topo já passou a linha de leitura,
    // logo abaixo do cabeçalho fixo. Mais estável do que usar as interseções
    // diretamente, que oscilam quando várias secções curtas ficam visíveis.
    const onScroll = () => {
      const line = 140
      let current = found[0].id
      for (const s of found) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top <= line) current = s.id
        else break
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scopeRef, deps])

  if (sections.length === 0) return null

  return (
    <nav
      aria-label={label}
      className="hidden lg:block"
      style={{ position: 'sticky', top: '150px', alignSelf: 'start', maxHeight: 'calc(100vh - 190px)', overflowY: 'auto' }}
    >
      <p
        className="mb-4 uppercase tracking-[0.15em] text-[0.7rem]"
        style={{ fontWeight: 600, color: 'var(--color-slate-blue-text)' }}
      >
        {label}
      </p>
      <ul style={{ borderLeft: '1px solid #d8dcdf' }}>
        {sections.map((s) => {
          const isActive = s.id === active
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? 'true' : undefined}
                className="legal-toc-link block text-[0.8rem] leading-[1.45] py-[6px] pl-4"
                style={{
                  color: isActive ? 'var(--color-slate-blue-text)' : 'var(--color-slate-gray-text)',
                  fontWeight: isActive ? 600 : 400,
                  borderLeft: `2px solid ${isActive ? 'var(--color-slate-blue-text)' : 'transparent'}`,
                  marginLeft: '-1px',
                }}
              >
                {s.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export function LegalDoc({ eyebrow, title, intro, lastUpdated, children, enContent, enTitle, enDisclaimer }) {
  const [lang] = useLang()
  const isEn = lang !== 'PT'

  // O índice segue o documento que o visitante está de facto a ler: a tradução
  // EN quando existe, senão o original PT.
  const enRef = useRef(null)
  const ptRef = useRef(null)
  const primaryRef = isEn && enContent ? enRef : ptRef

  // Resolve last updated — accepts either a string or { en, pt } object
  const lastUpdatedDisplay = lastUpdated && typeof lastUpdated === 'object'
    ? (isEn ? lastUpdated.en : lastUpdated.pt)
    : lastUpdated
  const lastUpdatedLabel = isEn ? 'Last updated' : 'Última atualização'

  const displayTitle   = isEn && enTitle ? enTitle : title
  const displayEyebrow = isEn && enTitle ? enTitle : eyebrow

  return (
    <main className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24" style={wrap}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 lg:grid lg:grid-cols-[minmax(0,820px)_minmax(200px,240px)] lg:gap-16 xl:gap-20">
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
            <div className="mt-12 legal-body" lang="en" ref={enRef}>
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
            ref={ptRef}
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

        <SectionIndex
          scopeRef={primaryRef}
          label={isEn ? 'Contents' : 'Índice'}
          deps={`${lang}-${title}`}
        />
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
