'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import enMessages from '../locales/en.json'

const LangContext = createContext({ lang: 'EN', setLang: () => {} })
const TranslationContext = createContext(enMessages)

const LANGS = ['EN', 'PT']

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState('EN')
  const [messages, setMessages] = useState(enMessages)
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    const stored = localStorage.getItem('bsmartish-lang')
    const initial = stored && LANGS.includes(stored) ? stored : 'EN'
    setLangState(initial)
  }, [])

  useEffect(() => {
    if (lang === 'EN') {
      setMessages({ ...enMessages })
      setLocale('en')
      return
    }
    import(`../locales/${lang.toLowerCase()}.json`)
      .then((m) => {
        setMessages(m.default)
        setLocale(lang.toLowerCase())
      })
      .catch(() => {
        setMessages({ ...enMessages })
        setLocale('en')
      })
  }, [lang])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLang = (code) => {
    setLangState(code)
    localStorage.setItem('bsmartish-lang', code)
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <TranslationContext.Provider value={messages}>
        {children}
      </TranslationContext.Provider>
    </LangContext.Provider>
  )
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  return [lang, setLang]
}

export function useLocale() {
  const { lang } = useContext(LangContext)
  return lang.toLowerCase()
}

export function useTranslation(namespace) {
  const messages = useContext(TranslationContext)
  const scope = namespace ? (messages[namespace] ?? {}) : messages
  // Supports {placeholder} interpolation: t('ariaOpenPhoto', { n: 3 }).
  // Without this, strings like "Open photo {n}" were rendered verbatim, which
  // gave every carousel thumbnail the same meaningless accessible name.
  const t = (key, params) => {
    const value = scope[key] ?? key
    if (!params || typeof value !== 'string') return value
    return value.replace(/\{(\w+)\}/g, (match, name) =>
      Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match
    )
  }
  return { t }
}
