'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const trigger = document.getElementById('impact-widget')
      if (!trigger) return
      const triggerTop = trigger.getBoundingClientRect().top
      setSolid(triggerTop <= 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      style={{ backgroundColor: solid ? '#6b87a4' : 'transparent' }}
    >
      <header className="w-full">
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 h-[110px] md:h-[130px] lg:h-[150px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="w-[160px] md:w-[240px] lg:w-[320px] ml-[-20px] md:ml-[-30px] lg:ml-[-40px]">
              <Image
                src="/Images/Logo/logo.svg"
                alt="BSMARTISH"
                width={320}
                height={80}
                priority
                unoptimized
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </Link>

          {/* Nav — tablet e desktop */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            {links.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className="flex flex-col items-center gap-[5px] text-white tracking-[0.12em] uppercase hover:opacity-75 transition-opacity text-[11px] lg:text-[13px]"
                  style={{ fontFamily: 'var(--font-aileron)' }}
                >
                  {label}
                  <span
                    className="h-[1px] w-full"
                    style={{ backgroundColor: isActive ? 'white' : 'transparent' }}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Botão hambúrguer — mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            <span
              className="block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-6 h-[1.5px] bg-white transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }}
            />
          </button>

        </div>
      </header>

      {/* Menu dropdown — mobile */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: 'rgba(32, 40, 49, 0.95)',
          maxHeight: menuOpen ? '300px' : '0px',
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <nav className="flex flex-col items-center gap-7 py-8">
          {links.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex flex-col items-center gap-[5px] text-white text-[13px] tracking-[0.12em] uppercase hover:opacity-75 transition-opacity"
                style={{ fontFamily: 'var(--font-aileron)' }}
              >
                {label}
                <span
                  className="h-[1px] w-full"
                  style={{ backgroundColor: isActive ? 'white' : 'transparent' }}
                />
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
