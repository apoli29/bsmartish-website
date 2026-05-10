'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { LanguageSwitcher, LanguageSwitcherMobile } from './LanguageSwitcher'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Mid-term Rentals', href: '/mid-term-rentals-in-porto' },
  { label: 'Contact Us', href: '#footer', scroll: true },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const handleScroll = () => setSolid(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Header bar */}
      <div className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-5">
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20">
          <header
            className="w-full transition-all duration-500"
            style={{
              backgroundColor: (solid || pathname.startsWith('/mid-term-rentals-in-porto')) ? '#6b87a4' : 'transparent',
              backdropFilter: (!solid && !pathname.startsWith('/mid-term-rentals-in-porto')) ? 'blur(14px)' : 'none',
              WebkitBackdropFilter: (!solid && !pathname.startsWith('/mid-term-rentals-in-porto')) ? 'blur(14px)' : 'none',
              border: (!solid && !pathname.startsWith('/mid-term-rentals-in-porto')) ? '1px solid rgba(255,255,255,0.18)' : 'none',
              boxShadow: (solid || pathname.startsWith('/mid-term-rentals-in-porto')) ? '0 4px 24px rgba(0,0,0,0.12)' : 'none',
              borderRadius: menuOpen ? '4px 4px 0 0' : '4px',
            }}
          >
            <div className="pl-1 md:pl-1 lg:pl-2 pr-7 md:pr-8 lg:pr-10 h-[64px] md:h-[72px] lg:h-[80px] flex items-center justify-between">

              {/* Logo */}
              <Link href="/" className="flex-shrink-0 flex items-center" onClick={() => setMenuOpen(false)}>
                <div className="w-[198px] md:w-[231px] lg:w-[264px]">
                  <img
                    src="/images/Logo/logo.png"
                    alt="BSMARTISH"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-7 lg:gap-10" style={{ alignItems: 'center' }}>
                {links.map(({ label, href, scroll }) => {
                  const isActive = pathname === href
                  const navClass = "flex flex-col items-center gap-[5px] text-white tracking-[0.12em] uppercase hover:opacity-75 transition-opacity text-[11px] lg:text-[13px]"
                  const navStyle = { fontFamily: 'var(--font-aileron)' }
                  if (scroll) {
                    return (
                      <button key={href} onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })} className={navClass} style={{ ...navStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                        {label}
                        <span className="h-[1px] w-full" style={{ backgroundColor: 'transparent' }} />
                      </button>
                    )
                  }
                  return (
                    <Link key={href} href={href} className={navClass} style={navStyle}>
                      {label}
                      <span className="h-[1px] w-full" style={{ backgroundColor: isActive ? 'white' : 'transparent' }} />
                    </Link>
                  )
                })}
                <span className="-mx-3.5 lg:-mx-5" style={{ width: '0', height: '10px', borderRight: '1px solid rgba(255,255,255,0.25)', alignSelf: 'center', flexShrink: 0, marginBottom: '3px' }} />
                <LanguageSwitcher />
              </nav>

              {/* Hamburger / X — mobile only */}
              <button
                className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2"
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <span className="block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center"
                  style={{ transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
                <span className="block w-6 h-[1.5px] bg-white transition-all duration-300"
                  style={{ opacity: menuOpen ? 0 : 1 }} />
                <span className="block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center"
                  style={{ transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
              </button>
            </div>

            {/* Mobile dropdown — canvas white, partial panel */}
            <div
              className="md:hidden overflow-hidden"
              style={{
                backgroundColor: '#F8F8F8',
                maxHeight: menuOpen ? '280px' : '0px',
                opacity: menuOpen ? 1 : 0,
                transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
                borderRadius: '0 0 4px 4px',
                borderTop: '1px solid #6b87a4',
              }}
            >
              <nav className="flex flex-col items-start gap-[20px] px-8 pt-7 pb-5">
                {links.map(({ label, href, scroll }, index) => {
                  const isActive = !scroll && pathname === href
                  const baseStyle = {
                    fontFamily: 'var(--font-aileron)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: isActive ? '#202831' : '#6b87a4',
                    textDecoration: 'none',
                    opacity: menuOpen ? 1 : 0,
                    transition: `opacity 0.3s ease ${index * 50 + 80}ms`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                  }
                  const inner = (
                    <>
                      {label}
                      <span style={{ display: 'block', height: '1px', width: '18px', backgroundColor: isActive ? '#202831' : 'transparent' }} />
                    </>
                  )
                  if (scroll) {
                    return (
                      <button
                        key={href}
                        style={{ ...baseStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        onClick={() => { setMenuOpen(false); document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }) }}
                      >
                        {inner}
                      </button>
                    )
                  }
                  return (
                    <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={baseStyle}>
                      {inner}
                    </Link>
                  )
                })}
              </nav>

              {/* Bottom detail — language switcher replaces Porto · Portugal on mobile */}
              <div style={{ margin: '0 32px', borderTop: '1px solid rgba(0,0,0,0.07)', padding: '10px 0 16px' }}>
                <LanguageSwitcherMobile menuOpen={menuOpen} />
              </div>
            </div>
          </header>
        </div>
      </div>

    </>
  )
}
