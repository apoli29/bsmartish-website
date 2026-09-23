'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

// Fade-in between client-side navigations only.
//
// The first page load is rendered fully visible: the server HTML used to ship
// at opacity 0 until hydration, which delayed LCP and left the page blank if
// JavaScript failed. The animation lives in CSS (.page-enter in globals.css)
// and the wrapper is keyed by pathname so it replays on every navigation.
export default function PageTransition({ children }) {
  const pathname = usePathname()
  const [prevPath, setPrevPath] = useState(pathname)
  const [navigated, setNavigated] = useState(false)

  if (pathname !== prevPath) {
    setPrevPath(pathname)
    setNavigated(true)
  }

  return (
    <div key={pathname} className={navigated ? 'page-enter' : undefined}>
      {children}
    </div>
  )
}
