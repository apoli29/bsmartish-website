'use client'

import { createContext, useContext, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import enMessages from '../locales/en.json'
import ptMessages from '../locales/pt.json'
import { alternatePath, localeFromPath, PAGES } from '@/app/lib/routes'

// The language comes from the URL (see app/lib/routes.js), so the server
// renders each page already in its language and search engines index both
// versions. Switching language navigates to the equivalent page.

const MESSAGES = { en: enMessages, pt: ptMessages }
const STORAGE_KEY = 'bsmartish-lang'

const LocaleContext = createContext('en')

function readPreference() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writePreference(code) {
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {}
}

export function I18nProvider({ children }) {
  const pathname = usePathname() || '/'
  const locale = localeFromPath(pathname)
  const router = useRouter()

  // A returning visitor who picked a language and lands on a homepage is taken
  // to the homepage in that language. Only homepages: any other URL was chosen
  // deliberately (a link, a search result) and is respected as is.
  useEffect(() => {
    const stored = readPreference()
    if (stored !== 'EN' && stored !== 'PT') return
    const target = PAGES.home[stored.toLowerCase()]
    const onHome = pathname === PAGES.home.en || pathname === PAGES.home.pt
    if (onHome && pathname !== target) router.replace(target)
    // Runs once per full page load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LocaleContext.Provider value={locale}>
      {/* The root <html lang="en"> is static; this marks PT pages as PT from
          the server HTML onwards. display: contents keeps it out of layout. */}
      <div lang={locale} style={{ display: 'contents' }}>
        {children}
      </div>
    </LocaleContext.Provider>
  )
}

// [lang, setLang] with lang as 'EN' | 'PT'. setLang goes to the same page in
// the other language.
export function useLang() {
  const locale = useContext(LocaleContext)
  const pathname = usePathname() || '/'
  const router = useRouter()

  const setLang = (code) => {
    writePreference(code)
    const target = alternatePath(pathname, code)
    if (target !== pathname) router.push(`${target}${window.location.hash}`)
  }

  return [locale.toUpperCase(), setLang]
}

export function useLocale() {
  return useContext(LocaleContext)
}

export function useTranslation(namespace) {
  const messages = MESSAGES[useContext(LocaleContext)]
  const scope = namespace ? (messages[namespace] ?? {}) : messages
  // Supports {placeholder} interpolation: t('ariaOpenPhoto', { n: 3 }).
  // Without this, strings like "Open photo {n}" were rendered verbatim, which
  // gave every carousel thumbnail the same meaningless accessible name.
  const t = (key, params) => {
    const value = scope[key] ?? enMessages[namespace]?.[key] ?? key
    if (!params || typeof value !== 'string') return value
    return value.replace(/\{(\w+)\}/g, (match, name) =>
      Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match
    )
  }
  return { t }
}
