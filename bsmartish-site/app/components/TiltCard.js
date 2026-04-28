'use client'

import { useRef, useEffect } from 'react'

export default function TiltCard({ children, style, className }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const rotateY = ((x - cx) / cx) * 4.5
      const rotateX = ((y - cy) / cy) * -4.5
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    }

    const handleMouseLeave = () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)'
      card.style.setProperty('--mouse-x', '-400px')
      card.style.setProperty('--mouse-y', '-400px')
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div style={{ perspective: '1000px' }}>
      <div
        ref={cardRef}
        className={className}
        style={{
          transition: 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
          willChange: 'transform',
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  )
}
