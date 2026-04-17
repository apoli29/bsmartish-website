import Image from 'next/image'
import Link from 'next/link'

const properties = [
  { name: 'Alegria',    src: '/Images/Website.images/Home/sec.4/alegria.sec4.webp',    href: '/properties/alegria'    },
  { name: 'Matosinhos', src: '/Images/Website.images/Home/sec.4/matosinhos.sec4.webp', href: '/properties/matosinhos' },
  { name: 'Paranhos',   src: '/Images/Website.images/Home/sec.4/paranhos.sec4.webp',   href: '/properties/paranhos'   },
]

export default function FeaturedProperties() {
  return (
    <section
      id="featured-properties"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-8 md:py-10 lg:py-12">

        {/* Headline */}
        <h2
          className="text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] mb-6"
          style={{ fontFamily: 'var(--font-radnika)', color: '#6b87a4', lineHeight: 1.2 }}
        >
          Our rental properties
        </h2>

        {/* Images grid */}
        <div className="flex gap-3 md:gap-4 w-full">
          {properties.map(({ name, src, href }) => (
            <Link
              key={name}
              href={href}
              className="relative flex-1 overflow-hidden rounded-sm"
              style={{ aspectRatio: '3 / 4' }}
            >
              <Image
                src={src}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Deep Urban overlay */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: 'rgba(32, 40, 49, 0.35)' }}
              />
              {/* Property name — bottom left */}
              <span
                className="absolute bottom-5 left-5 text-base md:text-lg"
                style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: '#f8f8f8' }}
              >
                {name}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA button — right-aligned, close to images */}
        <div className="flex justify-end mt-3">
          <Link
            href="/portfolio"
            style={{
              fontFamily: 'var(--font-aileron)',
              fontWeight: 400,
              color: '#202831',
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            Check our portfolio →
          </Link>
        </div>

      </div>
    </section>
  )
}
