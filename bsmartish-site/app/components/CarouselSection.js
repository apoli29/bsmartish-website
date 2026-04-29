'use client'

import { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'

const IMAGES = [
  'amh5svunor2lamgcbekb.jpg',
  'cn1lc7yfim415qmsgoqh.jpg',
  'ezfm3dsqlgnpyyhlaw2h.jpg',
  'ffnff4v0zyjaawhlki7o.jpg',
  'ffqz1kq3bjh4xr9egm6y.jpg',
  'fritsq2lskkrvefnzbsl.jpg',
  'giwgfxv8gva4iykolrkb.jpg',
  'i60dvdxtnedaaeuah1tp.jpg',
  'izlfrspnzfu16qugtmtm.jpg',
  'kmkwg8kzmre8lg46awul.jpg',
  'kydpjriyasdw8usyr0fy.jpg',
  'ny9iigp3wuyi7a5otvbo.jpg',
  'pj6vrlrakjglreckwuhn.jpg',
  'poraitxnq5totssxlrii.jpg',
  'qlkf0wgxcca7dx04w0da.jpg',
  'qsmszrhf3cxknexxlkwk.jpg',
  'qvptaroidm60lupaeoik.jpg',
  's7jpjyb3d3xn9uelwacv.jpg',
  'vbysrw6jgohnpnfhp0yn.jpg',
  'y7ujp3qwqog7lnzf7kog.jpg',
  'ym5i0tsvsqqlxph4ndtv.jpg',
]

const GAP = 16
const SPEED_DESKTOP = 0.28
const SPEED_TABLET  = 0.55
const SPEED_MOBILE  = 0.9

export default function CarouselSection() {
  const trackRef = useRef(null)
  const cardWRef = useRef(348)
  const posRef   = useRef(0)
  const rafRef   = useRef(null)
  const totalRef = useRef(IMAGES.length * (348 + GAP))
  const speedRef = useRef(SPEED_DESKTOP)

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth
      let w
      if (vw < 640)       { w = Math.floor(vw * 0.78);             speedRef.current = SPEED_MOBILE }
      else if (vw < 1024) { w = Math.floor((vw - 3 * GAP) / 2.5); speedRef.current = SPEED_TABLET }
      else                { w = Math.floor((vw - 3 * GAP) / 4);    speedRef.current = SPEED_DESKTOP }
      cardWRef.current = w
      totalRef.current = IMAGES.length * (w + GAP)

      if (trackRef.current) {
        const cards = trackRef.current.querySelectorAll('[data-card]')
        cards.forEach(c => { c.style.width = `${w}px` })
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const tick = useCallback(() => {
    posRef.current += speedRef.current
    if (posRef.current >= totalRef.current) posRef.current -= totalRef.current
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-posRef.current}px)`
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [tick])

  const cardW = 348  // SSR default; corrected via DOM in useEffect

  return (
    <section
      className="w-full overflow-hidden"
      style={{ backgroundColor: '#f8f8f8', paddingTop: '52px', paddingBottom: '52px' }}
    >
      <div
        ref={trackRef}
        className="flex"
        style={{ gap: `${GAP}px`, willChange: 'transform' }}
      >
        {[...IMAGES, ...IMAGES].map((img, i) => (
          <div
            key={i}
            data-card
            className="relative flex-shrink-0 overflow-hidden rounded"
            style={{ width: `${cardW}px`, aspectRatio: '4 / 5' }}
          >
            <Image
              src={`/images/Website.images/Home/sec.2/${img}`}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, calc(25vw - 12px)"
              quality={90}
              priority={i < 5}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(32,40,49,0.15)' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
