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
      setSolid(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 md:px-12 lg:px-[4.5rem] pt-4 md:pt-5">
      <header
        className="w-full max-w-screen-xl rounded-2xl transition-all duration-500"
        style={{
          backgroundColor: solid ? '#6b87a4' : 'transparent',
          backdropFilter: solid ? 'none' : 'blur(14px)',
          WebkitBackdropFilter: solid ? 'none' : 'blur(14px)',
          border: solid ? 'none' : '1px solid rgba(255,255,255,0.18)',
          boxShadow: solid ? '0 4px 24px rgba(0,0,0,0.12)' : 'none',
        }}
      >
        <div className="pl-1 md:pl-1 lg:pl-2 pr-3 md:pr-4 lg:pr-5 h-[64px] md:h-[72px] lg:h-[80px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="w-[198px] md:w-[231px] lg:w-[264px]">
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

        {/* Menu dropdown — mobile */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 rounded-b-2xl"
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
      </header>
    </div>
  )
}
