'use client'

import { forwardRef } from 'react'

const DECOR_CIRCLES = [
  { size: '170px', pos: '8px',  z: '20px', delay: '0s'   },
  { size: '140px', pos: '10px', z: '40px', delay: '0.4s' },
  { size: '110px', pos: '17px', z: '60px', delay: '0.8s' },
  { size: '80px',  pos: '23px', z: '80px', delay: '1.2s' },
]

const GlassCard = forwardRef(function GlassCard(
  { title, description, image, children, className = '', ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={`group w-full [perspective:1000px] ${className}`}
      {...rest}
    >
      <div
        className="relative h-full w-full rounded-[50px] transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotate3d(1,1,0,22deg)]"
        style={{
          backgroundImage: image
            ? `url('${image}')`
            : 'linear-gradient(135deg, #2a3540 0%, #202831 100%)',
          backgroundColor: '#202831',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow:
            '0 12px 30px -18px rgba(32,40,49,0.45), 0 4px 10px -6px rgba(32,40,49,0.20)',
        }}
      >
        {image && (
          <div
            className="absolute inset-0 rounded-[50px] pointer-events-none"
            style={{ backgroundColor: 'rgba(32,40,49,0.45)' }}
          />
        )}

        <div className="pointer-events-none absolute inset-2 rounded-[45px] border-b border-l border-white/20 bg-gradient-to-b from-white/25 to-white/5 backdrop-blur-[2px] [transform-style:preserve-3d] [transform:translate3d(0,0,25px)]" />

        <div className="pointer-events-none absolute top-0 right-0 [transform-style:preserve-3d]">
          {DECOR_CIRCLES.map((c, i) => (
            <div
              key={i}
              className="absolute aspect-square rounded-full bg-white/10 transition-all duration-500 ease-in-out"
              style={{
                width: c.size,
                top: c.pos,
                right: c.pos,
                transform: `translate3d(0, 0, ${c.z})`,
                transitionDelay: c.delay,
                boxShadow: 'rgba(100,100,111,0.2) -10px 10px 20px 0px',
              }}
            />
          ))}
        </div>

        <div className="relative p-7 md:p-9 lg:p-10 [transform-style:preserve-3d] [transform:translate3d(0,0,26px)]">
          {title && (
            <h3
              className="leading-[1.05] text-[1.2rem] md:text-[1.45rem] lg:text-[1.75rem]"
              style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#F8F8F8' }}
            >
              {title}
            </h3>
          )}
          {description && (
            <p
              className="mt-1.5 md:mt-2 text-[0.55rem] md:text-[0.625rem] lg:text-[0.7rem]"
              style={{
                fontFamily: 'var(--font-aileron)',
                fontWeight: 400,
                color: '#F8F8F8',
                opacity: 0.92,
                lineHeight: 1.4,
              }}
            >
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  )
})

export default GlassCard
