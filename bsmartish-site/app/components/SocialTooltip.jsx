'use client'

import React from 'react'
import { cn } from '@/lib/utils'

const defaultItems = [
  {
    href: 'https://www.airbnb.com/users/profile/1470751082133656177?previous_page_name=PdpHomeMarketplace&locale=en&_set_bev_on_new_domain=1776797230_KKmE2MPABYjMTzwz&set_everest_cookie_on_new_domain=1776797229.EAYjVlMDU4YTQxMTA5OT.avGC8Xz-NKOetkvjxPDv0QzwxblIexDsUiWpxelMv_k',
    ariaLabel: 'Airbnb',
    svgUrl: '/images/Website.images/Home/sec.4/logos.pltf-to-rent/air.bnb.png',
    imgSize: 38,
  },
  {
    href: 'https://www.spotahome.com/porto/for-rent:apartments/1478660',
    ariaLabel: 'Spotahome',
    svgUrl: '/images/Website.images/Home/sec.4/logos.pltf-to-rent/spotahome.png',
    imgSize: 30,
  },
  {
    href: 'https://www.idealista.pt/pro/bsmartish',
    ariaLabel: 'Idealista',
    svgUrl: '/images/Website.images/Home/sec.4/logos.pltf-to-rent/idealista.png',
    imgSize: 30,
  },
  {
    href: 'https://www.flatio.com/owner/24976',
    ariaLabel: 'Flatio',
    svgUrl: '/images/Website.images/Home/sec.4/logos.pltf-to-rent/flatio.png',
    imgSize: 30,
  },
]

const SocialTooltip = React.forwardRef(({ className, items: customItems, ...props }, ref) => {
  const items = customItems || defaultItems
  return (
  <ul
    ref={ref}
    className={cn('flex items-center', className)}
    style={{ gap: '8px' }}
    {...props}
  >
    {items.map((item, index) => (
      <li key={index} className="group">
        <a
          href={item.href}
          aria-label={item.ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-white overflow-hidden"
          style={{
            width: '40px',
            height: '40px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            transition: 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
            willChange: 'transform',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.08)'
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.10)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <img
            src={item.svgUrl}
            alt={item.ariaLabel}
            className="object-contain"
            style={{
              width: `${item.imgSize}px`,
              height: `${item.imgSize}px`,
              transition: 'opacity 600ms ease, transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          />
        </a>
      </li>
    ))}
  </ul>
  )
})

SocialTooltip.displayName = 'SocialTooltip'

export { SocialTooltip }
