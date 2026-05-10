'use client'

import { useLang } from '@/app/i18n-provider'

const LANGS = ['EN', 'PT']

export function LanguageSwitcher() {
  const [lang, setLang] = useLang()
  const next = LANGS.find(c => c !== lang)

  return (
    <button
      onClick={() => setLang(next)}
      aria-label={`Switch to ${next === 'EN' ? 'English' : 'Portuguese'}`}
      title={`Switch to ${next === 'EN' ? 'English' : 'Portuguese'}`}
      className="flex flex-col items-center gap-[1px] tracking-[0.12em] uppercase text-[11px] lg:text-[13px]"
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 4px 0',
        fontFamily: 'var(--font-aileron)',
        color: 'white',
      }}
    >
      {lang}
      <span style={{ display: 'block', height: '1px', width: '100%', backgroundColor: 'rgba(255,255,255,0.45)' }} />
    </button>
  )
}

export function LanguageSwitcherMobile({ menuOpen }) {
  const [lang, setLang] = useLang()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {LANGS.map((code, i) => (
        <span key={code} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => setLang(code)}
            style={{
              background: 'none',
              border: 'none',
              cursor: lang === code ? 'default' : 'pointer',
              padding: 0,
              fontFamily: 'var(--font-aileron)',
              fontSize: '0.55rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: lang === code ? '#202831' : '#6b87a4',
              opacity: menuOpen ? 1 : 0,
              transition: `opacity 0.3s ease ${i * 60 + 120}ms, color 150ms ease`,
            }}
            aria-pressed={lang === code}
            aria-label={`Switch to ${code === 'EN' ? 'English' : 'Portuguese'}`}
          >
            {code}
          </button>
          {i < LANGS.length - 1 && (
            <span style={{
              width: '1px',
              height: '8px',
              backgroundColor: 'rgba(107,135,164,0.35)',
              display: 'block',
              opacity: menuOpen ? 1 : 0,
              transition: `opacity 0.3s ease 140ms`,
            }} />
          )}
        </span>
      ))}
    </div>
  )
}
