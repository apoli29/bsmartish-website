'use client'

import { useState, useEffect, useRef } from 'react'

const LANGS = ['EN', 'PT', 'ES', 'FR', 'IT', 'DE']

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('EN')
  const [hovered, setHovered] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const stored = localStorage.getItem('bsmartish-lang')
    if (stored && LANGS.includes(stored)) setLang(stored)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    const onDown = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.addEventListener('mousedown', onDown)
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDown)
    }
  }, [open])

  const select = (code) => {
    setLang(code)
    localStorage.setItem('bsmartish-lang', code)
    setOpen(false)
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex flex-col items-center gap-[5px] text-white tracking-[0.12em] uppercase transition-opacity text-[11px] lg:text-[13px]"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          fontFamily: 'var(--font-aileron)',
          opacity: open ? 0.75 : 1,
          transition: 'opacity 150ms ease',
        }}
      >
        {lang}
        <span style={{
          display: 'block',
          height: '1px',
          width: '100%',
          backgroundColor: open ? 'white' : 'transparent',
          transition: 'background-color 150ms ease',
        }} />
      </button>

      {/* Dropdown */}
      <div
        role="listbox"
        aria-label="Select language"
        style={{
          position: 'absolute',
          top: 'calc(100% + 10px)',
          right: 0,
          backgroundColor: '#202831',
          borderRadius: '4px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
          padding: '5px 0',
          minWidth: '52px',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-5px)',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 200ms cubic-bezier(0.16, 1, 0.3, 1), transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 100,
        }}
      >
        {LANGS.map((code) => (
          <button
            key={code}
            role="option"
            aria-selected={lang === code}
            onClick={() => select(code)}
            onMouseEnter={() => setHovered(code)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: 'block',
              width: '100%',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '5px 16px',
              fontFamily: 'var(--font-aileron)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: lang === code ? '#6b87a4' : hovered === code ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.72)',
              textAlign: 'center',
              transition: 'color 100ms ease',
            }}
          >
            {code}
          </button>
        ))}
      </div>
    </div>
  )
}

export function LanguageSwitcherMobile({ menuOpen }) {
  const [lang, setLang] = useState('EN')

  useEffect(() => {
    const stored = localStorage.getItem('bsmartish-lang')
    if (stored && LANGS.includes(stored)) setLang(stored)
  }, [])

  const select = (code) => {
    setLang(code)
    localStorage.setItem('bsmartish-lang', code)
  }

  return (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
      {LANGS.map((code, i) => (
        <button
          key={code}
          onClick={() => select(code)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'var(--font-aileron)',
            fontSize: '0.55rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: lang === code ? '#202831' : '#6b87a4',
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 0.3s ease ${i * 40 + 80}ms, color 120ms ease`,
          }}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
