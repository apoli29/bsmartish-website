'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

export const FrostedGlassCard = ({
  image,
  title,
  subtitle,
  bodyText,
  tone = 'image',
  className = '',
  children,
  contentClassName = 'p-6 md:p-8 lg:p-10 flex flex-col items-start',
  overlayOpacity,
  imageSizes = '(max-width: 1024px) 100vw, 720px',
  imagePosition = 'center',
}) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateY = ((x - centerX) / centerX) * 4.5
      const rotateX = ((y - centerY) / centerY) * -4.5

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
    <div className={`card-container ${className}`}>
      <div
        ref={cardRef}
        className="card relative w-full h-full rounded-[7px] shadow-2xl overflow-hidden"
        style={{ isolation: 'isolate' }}
      >
        {tone === 'image' && image && (
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: imagePosition }}
            sizes={imageSizes}
            priority
          />
        )}

        {/* Glass tint layer — Deep Urban tint, no blur */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={
            tone === 'dark'
              ? {
                  background:
                    'linear-gradient(160deg, rgba(32,40,49,0.92) 0%, rgba(32,40,49,0.80) 100%)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22)',
                  borderRadius: 'inherit',
                }
              : {
                  backgroundColor: `rgba(32,40,49,${overlayOpacity ?? 0.5})`,
                  border: '1px solid rgba(255,255,255,0.22)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.20)',
                  borderRadius: 'inherit',
                }
          }
        />

        {/* Moving light (glare that follows the mouse) */}
        <div className="card-glare absolute inset-0 pointer-events-none" />

        {/* Content */}
        <div className={`relative z-10 w-full h-full ${contentClassName}`}>
          {children ?? (
            <>
              {title && (
                <h3
                  className="text-white leading-none text-[2rem] md:text-[2.4rem] lg:text-[2.75rem]"
                  style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500 }}
                >
                  {title}
                </h3>
              )}
              {subtitle && (
                <p
                  className="text-white mt-2 text-[0.85rem] md:text-[0.95rem] lg:text-[1rem]"
                  style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400 }}
                >
                  {subtitle}
                </p>
              )}
              {bodyText && (
                <p
                  className="text-white text-[0.9rem] md:text-[0.95rem] leading-relaxed"
                  style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400 }}
                >
                  {bodyText}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
