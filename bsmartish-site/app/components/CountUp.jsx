'use client'
import { useEffect, useRef, useState } from 'react'

function parse(str) {
  const m = str.match(/^([+\-]?)(\d+(?:\.\d+)?)(.*)$/)
  if (!m) return { pre: '', num: 0, suf: str, dec: 0 }
  const dec = m[2].includes('.') ? m[2].split('.')[1].length : 0
  return { pre: m[1], num: parseFloat(m[2]), suf: m[3], dec }
}

export default function CountUp({ value, delay = 0, duration = 2000, className = '', style = {} }) {
  const { pre, num, suf, dec } = parse(value)
  const [cur, setCur] = useState(pre + (0).toFixed(dec) + suf)
  const ref = useRef(null)
  const done = useRef(false)
  const rafRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCur(value)
      return
    }
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return
      done.current = true
      obs.disconnect()
      timerRef.current = setTimeout(() => {
        const t0 = performance.now()
        const dur = duration
        const step = (now) => {
          const p = Math.min((now - t0) / dur, 1)
          const ease = 1 - Math.pow(1 - p, 4)
          setCur(pre + (ease * num).toFixed(dec) + suf)
          if (p < 1) rafRef.current = requestAnimationFrame(step)
          else setCur(value)
        }
        rafRef.current = requestAnimationFrame(step)
      }, delay)
    }, { threshold: 0.05 })

    obs.observe(el)
    return () => {
      obs.disconnect()
      clearTimeout(timerRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [num, dec, pre, suf, value, delay, duration])

  return <span ref={ref} className={className} style={style}>{cur}</span>
}
