'use client'
import { useEffect, useLayoutEffect, useRef } from 'react'

// useLayoutEffect runs synchronously before paint on client; falls back to useEffect on server
const useClientLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const TRANSITION = (delay) =>
  `opacity 750ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 750ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`

export default function FadeIn({ children, delay = 0, className = '', style = {}, as: Tag = 'div', ...props }) {
  const ref = useRef(null)

  useClientLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Hide before first paint — server HTML stays visible (no hydration mismatch)
    el.style.opacity = '0'
    el.style.transform = 'translateY(16px)'

    const show = () => {
      el.style.transition = TRANSITION(delay)
      // Force reflow so the browser commits the transition property
      // before the opacity change — otherwise some engines skip the animation
      void el.offsetHeight
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Minimum 20 ms ensures at least one paint cycle with opacity:0
      // before we animate — critical when delay is 0
      const t = setTimeout(show, delay > 0 ? delay : 20)
      return () => clearTimeout(t)
    }

    const fallback = setTimeout(show, 3000)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.unobserve(el)
          clearTimeout(fallback)
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => { observer.disconnect(); clearTimeout(fallback) }
  }, [delay])

  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  )
}
