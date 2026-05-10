'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import enMessages from '../locales/en.json'

const LangContext = createContext({ lang: 'EN', setLang: () => {} })

const LANGS = ['EN', 'PT']

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState('EN')
  const [messages, setMessages] = useState(enMessages)
  // locale only advances after messages are ready, preventing the flash
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    const stored = localStorage.getItem('bsmartish-lang')
    const initial = stored && LANGS.includes(stored) ? stored : 'EN'
    setLangState(initial)
  }, [])

  useEffect(() => {
    if (lang === 'EN') {
      // spread creates a new reference so React always detects the state change
      setMessages({ ...enMessages })
      console.log('Messages loaded: EN', Object.keys(enMessages))
      setLocale('en')
      return
    }
    import(`../locales/${lang.toLowerCase()}.json`)
      .then((m) => {
        // update messages and locale atomically once the import resolves
        setMessages(m.default)
        console.log('Messages loaded:', lang, Object.keys(m.default))
        setLocale(lang.toLowerCase())
      })
      .catch(() => {
        setMessages({ ...enMessages })
        setLocale('en')
      })
  }, [lang])

  // keep the html[lang] attribute in sync for accessibility / SEO
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLang = (code) => {
    setLangState(code)
    localStorage.setItem('bsmartish-lang', code)
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LangContext.Provider>
  )
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  return [lang, setLang]
}
