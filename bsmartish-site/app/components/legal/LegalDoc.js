'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/app/i18n-provider'
import { LEGAL_PAGES, legalHref } from '@/app/lib/legalRoutes'
import { legalEntity as E } from '@/app/lib/legalEntity'

// Shell shared by every legal page.
//
// Documents are counsel-drafted and reproduced verbatim in Portuguese.
// When counsel provides an official English translation, pass it via the
// `enContent` prop — it will be shown to EN visitors, with a link to the PT
// route as the legally binding original.
// When no translation is provided (default), EN visitors see a notice
// pointing them to hello@bsmartish.com.
//
// Each document is served from two routes (see app/lib/legalRoutes.js). The
// route decides the language on arrival; switching language afterwards moves
// the visitor to the route of the other language.

const COPY = {
  en: {
    eyebrow: 'Legal Information',
    contents: 'Contents',
    others: 'Other legal documents',
    back: 'Back to the homepage',
  },
  pt: {
    eyebrow: 'Informação Legal',
    contents: 'Índice',
    others: 'Outros documentos legais',
    back: 'Voltar à página inicial',
  },
}

// Mantém o idioma do site alinhado com o URL da página legal.
function usePageLanguage(docKey, pageLang) {
  const [lang, setLang] = useLang()
  const router = useRouter()
  const pageUpper = pageLang === 'pt' ? 'PT' : 'EN'
  const [synced, setSynced] = useState(false)

  // Chegar a /politica-de-privacidade significa ler em português, e vice-versa.
  useEffect(() => {
    setLang(pageUpper)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageUpper])

  // Depois de alinhado, uma troca no seletor de idioma leva à rota equivalente.
  useEffect(() => {
    if (!synced) {
      if (lang === pageUpper) setSynced(true)
      return
    }
    if (lang !== pageUpper) router.replace(legalHref(docKey, lang))
  }, [lang, pageUpper, synced, docKey, router])

  // Até alinhar, renderiza na língua do URL — evita um piscar de conteúdo EN
  // numa página PT enquanto o provider lê a preferência guardada.
  return (synced ? lang : pageUpper) === 'PT' ? 'pt' : 'en'
}

// Índice. As secções são lidas do DOM já renderizado em vez de serem
// declaradas à mão em cada página — assim uma alteração aos documentos do
// advogado nunca deixa o índice dessincronizado do texto.
function useSections(scopeRef, deps) {
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

    // Ativa a última secção cujo topo já passou a linha de leitura, logo
    // abaixo do cabeçalho fixo.
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

  return [sections, active]
}

function TocList({ sections, active, onPick }) {
  return (
    <ol className="legal-toc">
      {sections.map((s) => {
        const isActive = s.id === active
        return (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`legal-toc-link${isActive ? ' is-active' : ''}`}
              onClick={onPick}
            >
              {s.text}
            </a>
          </li>
        )
      })}
    </ol>
  )
}

function SectionIndex({ scopeRef, label, deps }) {
  const [sections, active] = useSections(scopeRef, deps)
  const mobileRef = useRef(null)
  if (sections.length === 0) return null

  return (
    <>
      <nav aria-label={label} className="legal-aside hidden lg:block">
        <p className="legal-kicker">{label}</p>
        <TocList sections={sections} active={active} />
      </nav>

      <details ref={mobileRef} className="legal-toc-mobile lg:hidden">
        <summary>
          <span className="legal-kicker" style={{ margin: 0 }}>{label}</span>
          <span aria-hidden="true" className="legal-toc-chevron" />
        </summary>
        <nav aria-label={label}>
          <TocList
            sections={sections}
            active={active}
            onPick={() => mobileRef.current?.removeAttribute('open')}
          />
        </nav>
      </details>
    </>
  )
}

export function LegalDoc({ docKey, pageLang, title, children, enContent, enTitle, enDisclaimer }) {
  const locale = usePageLanguage(docKey, pageLang)
  const isEn = locale === 'en'
  const c = COPY[locale]

  // O índice segue o documento que o visitante está de facto a ler: a tradução
  // EN quando existe, senão o original PT.
  const enRef = useRef(null)
  const ptRef = useRef(null)
  const primaryRef = isEn && enContent ? enRef : ptRef

  const displayTitle = isEn && enTitle ? enTitle : title
  const others = LEGAL_PAGES.filter((p) => p.key !== docKey)

  return (
    <main className="legal-page" lang={locale}>
      {/* ── Cabeçalho do documento ───────────────────────────────────────── */}
      <header className="legal-hero">
        <div className="legal-wrap">
          {/* No documento «Informação Legal» o rótulo repetiria o título. */}
          {displayTitle !== c.eyebrow && (
            <p className="legal-kicker legal-kicker--light legal-rise" style={{ '--d': '80ms' }}>
              {c.eyebrow}
            </p>
          )}
          <h1 className="legal-title legal-rise" style={{ '--d': '140ms' }}>
            {displayTitle}
          </h1>
        </div>
      </header>

      {/* ── Corpo ────────────────────────────────────────────────────────── */}
      <div className="legal-wrap legal-grid">
        <SectionIndex scopeRef={primaryRef} label={c.contents} deps={`${locale}-${title}`} />

        <div className="legal-main">
          {/* EN: counsel's disclaimer when an official translation is available */}
          {isEn && enContent && (
            <p lang="en" className="legal-note">
              {enDisclaimer ||
                'This English translation is provided for information purposes. The Portuguese ' +
                'version is the official version. In the event of any discrepancy or inconsistency, ' +
                'the Portuguese version shall prevail, without prejudice to any mandatory legal rights.'}
            </p>
          )}

          {/* EN: fallback notice when no official translation is available */}
          {isEn && !enContent && (
            <p lang="en" className="legal-note">
              This document is published in Portuguese, which is the language of the law that
              governs it and the only version that is legally binding. If you would like it
              explained in English, write to{' '}
              <a href={`mailto:${E.email}`}>{E.email}</a> and we will help.
            </p>
          )}

          {isEn && enContent && (
            <div className="legal-body" lang="en" ref={enRef}>
              {enContent}
            </div>
          )}

          {/* EN with translation: the binding PT original lives on its own
              route. Repeating it here made the PT page a subset of the EN one,
              which Google reads as duplicate content. */}
          {isEn && enContent && (
            <div className="legal-original">
              <p lang="en" className="legal-kicker">Original Portuguese version — legally binding</p>
              <p lang="pt" className="legal-original-sub">
                <Link href={legalHref(docKey, 'pt')} className="legal-a" hrefLang="pt">
                  Versão portuguesa — juridicamente vinculativa
                </Link>
              </p>
            </div>
          )}

          {/* PT content — on the PT route, and on EN routes without a translation */}
          {!(isEn && enContent) && (
            <div className="legal-body" lang="pt" ref={ptRef}>
              {children}
            </div>
          )}

          {/* ── Outros documentos ─────────────────────────────────────────── */}
          <nav aria-label={c.others} className="legal-next">
            <p className="legal-kicker">{c.others}</p>
            <ul>
              {others.map((p) => (
                <li key={p.key}>
                  <Link href={p[locale].path} className="legal-next-card">
                    <span>{p[locale].title}</span>
                    <span aria-hidden="true" className="legal-arrow">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/" className="legal-back">
              <span aria-hidden="true">←</span> {c.back}
            </Link>
          </nav>
        </div>
      </div>
    </main>
  )
}

// Os títulos do advogado vêm como «3. Destinatários». O número é separado
// visualmente, mas o texto do h2 continua igual (o índice lê textContent).
function splitNumber(heading) {
  if (typeof heading !== 'string') return [null, heading]
  const m = heading.match(/^(\d+\.)\s+(.*)$/)
  return m ? [m[1], m[2]] : [null, heading]
}

export function Section({ id, heading, children }) {
  const [num, text] = splitNumber(heading)
  return (
    <section id={id} className="legal-section">
      <h2>
        {num && <span className="legal-num">{num}</span>}
        {num && ' '}
        {text}
      </h2>
      <div className="legal-section-body">{children}</div>
    </section>
  )
}

export function P({ children }) {
  return <p className="legal-p">{children}</p>
}

export function UL({ children }) {
  return <ul className="legal-ul">{children}</ul>
}

export function LI({ children }) {
  return <li>{children}</li>
}

export function A({ href, children, external = false }) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="legal-a">
        {children}
        <span className="sr-only"> (abre num novo separador)</span>
      </a>
    )
  }
  if (href.startsWith('mailto:') || href.startsWith('tel:')) {
    return <a href={href} className="legal-a">{children}</a>
  }
  return <Link href={href} className="legal-a">{children}</Link>
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
  return <mark className="legal-pending">{children}</mark>
}

export function SubSection({ heading, children }) {
  return (
    <div className="legal-sub">
      <h3>{heading}</h3>
      {children}
    </div>
  )
}
