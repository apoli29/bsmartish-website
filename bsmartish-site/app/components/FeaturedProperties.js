import Image from 'next/image'
import Link from 'next/link'
import { SocialTooltip } from '@/app/components/SocialTooltip'
import FadeIn from '@/app/components/FadeIn'

const properties = [
  { name: 'Paranhos',   src: '/Images/Website.images/Home/sec.4/paranhos.sec4.webp',   href: '/portfolio/paranhos-apartment'   },
  { name: 'Matosinhos', src: '/Images/Website.images/Home/sec.4/matosinhos.sec4.webp', href: '/portfolio/matosinhos-apartment' },
  { name: 'Alegria',    src: '/Images/Website.images/Home/sec.4/alegria.sec4.webp',    href: '/portfolio/alegria-apartment'    },
]

export default function FeaturedProperties() {
  return (
    <section
      id="featured-properties"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e4e4e4' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-24 lg:pb-28">

        {/* Section label + Headline */}
        <FadeIn className="mb-10 md:mb-12">
          <p
            className="mb-3 uppercase tracking-[0.15em] text-[0.7rem]"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#6b87a4' }}
          >
            Featured Properties
          </p>
          <h2
            className="text-[2rem] md:text-[2.4rem] lg:text-[2.8rem]"
            style={{ fontFamily: 'var(--font-radnika)', color: '#6b87a4', lineHeight: 1.1 }}
          >
            Our rental properties
          </h2>
        </FadeIn>

        {/* Images grid */}
        <FadeIn delay={150} className="flex flex-col md:flex-row gap-4 w-full">
          {properties.map(({ name, src, href }) => (
            <Link
              key={name}
              href={href}
              className="relative w-full md:flex-1 overflow-hidden group aspect-[4/3] md:aspect-[3/4]"
            >
              <Image
                src={src}
                alt={name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Deep Urban overlay — lightens on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundColor: 'rgba(32, 40, 49, 0.40)' }}
              />
              {/* Property name — bottom left */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <span
                  className="text-[0.85rem] uppercase tracking-[0.12em]"
                  style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#f8f8f8' }}
                >
                  {name}
                </span>
                <span
                  className="text-[0.75rem] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: '#f8f8f8' }}
                >
                  View →
                </span>
              </div>
            </Link>
          ))}
        </FadeIn>

        {/* Footer: View all (esq) + Book with us (dir) */}
        <FadeIn delay={300} className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center sm:justify-between sm:mt-4">
          <a
            href="/portfolio"
            className="group flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.1em] transition-all"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#202831' }}
          >
            <span style={{ borderBottom: '1px solid #202831', paddingBottom: '1px' }}>
              View all properties
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: 'var(--font-aileron)',
                fontWeight: 600,
                fontSize: '0.8rem',
                color: '#202831',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Book with us
            </span>
            <SocialTooltip />
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
