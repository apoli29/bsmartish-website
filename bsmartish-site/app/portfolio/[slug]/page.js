
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { properties, getPropertyBySlug, getRelatedProperties } from '@/app/lib/propertiesData'
import PropertyGallery from '@/app/components/PropertyGallery'
import FadeIn from '@/app/components/FadeIn'
import { SocialTooltip } from '@/app/components/SocialTooltip'
import TiltCard from '@/app/components/TiltCard'

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }))
}

const wrap = {
  maxWidth: '1280px',
  margin: '0 auto',
}

const eyebrow = {
  margin: '0 0 12px',
  fontFamily: 'var(--font-aileron)',
  fontSize: '0.7rem',
  fontWeight: 600,
  color: '#6b87a4',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
}

const detailLabel = {
  fontFamily: 'var(--font-aileron)',
  fontSize: '0.65rem',
  fontWeight: 600,
  color: '#6b87a4',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  marginBottom: '7px',
}

const detailValue = {
  fontFamily: 'var(--font-aileron)',
  fontSize: '1.125rem',
  fontWeight: 400,
  color: '#202831',
  lineHeight: 1.2,
}

const detailRow = {
  paddingTop: '16px',
  paddingBottom: '16px',
  borderBottom: '1px solid #e4e4e4',
}

const sectionH2 = {
  margin: '0 0 32px',
  fontFamily: 'var(--font-radnika)',
  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
  color: '#6b87a4',
  fontWeight: 500,
  lineHeight: 1.2,
}

const LocationPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b87a4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const Placeholder = ({ height, shade = '#c0c4c8', label }) => (
  <div
    style={{
      height,
      backgroundColor: shade,
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {label && (
      <span style={{ fontFamily: 'var(--font-aileron)', fontSize: '0.72rem', color: '#9a9ea1', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
      </span>
    )}
  </div>
)

export default async function PropertyPage({ params }) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)
  if (!property) notFound()

  const related = getRelatedProperties(slug)

  return (
    <main className="pt-24 md:pt-28 lg:pt-32" style={{ backgroundColor: '#f8f8f8', fontFamily: 'var(--font-aileron)' }}>

      {/* ── Overview + Specs ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div style={{ ...wrap, padding: '72px 80px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '80px', alignItems: 'start' }}>

          {/* Left: overview text */}
          <FadeIn delay={0}>
          <div>
            <p style={eyebrow}>Overview</p>
            <h1 style={{ margin: '0 0 56px', fontFamily: 'var(--font-radnika)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#6b87a4', fontWeight: 500, lineHeight: 1.1 }}>
              {property.name} {property.specs.type}
            </h1>
            <p style={{ margin: '0 0 28px', fontSize: '1.125rem', color: '#75797c', lineHeight: 1.8, maxWidth: '540px' }}>
              {property.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '540px' }}>
              {property.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{ fontSize: '0.7rem', fontWeight: 600, padding: '6px 16px', borderRadius: '999px', border: '1px solid #6b87a4', color: '#6b87a4', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                >
                  {tag.type === 'people' ? `${tag.count} guests` : tag}
                </span>
              ))}
            </div>
          </div>
          </FadeIn>

          {/* Right: location + property details */}
          <FadeIn delay={150}>
          <div style={{ paddingTop: '4px' }}>
<p style={{ ...eyebrow, marginBottom: '0' }}>Property Details</p>

            {/* PROPERTY NAME */}
            <div style={{ ...detailRow, borderTop: '1px solid #e4e4e4', marginTop: '16px' }}>
              <div style={detailLabel}>Property Name</div>
              <div style={detailValue}>{property.name} {property.specs.type}</div>
            </div>

            {/* LOCATION */}
            <div style={detailRow}>
              <div style={detailLabel}>Location</div>
              <div style={detailValue}>{property.location}</div>
            </div>

            {/* BUILT YEAR */}
            <div style={detailRow}>
              <div style={detailLabel}>Built Year</div>
              <div style={detailValue}>{property.specs.year}</div>
            </div>

            {/* SQFT */}
            <div style={detailRow}>
              <div style={detailLabel}>Sqft.</div>
              <div style={detailValue}>{property.specs.area}</div>
            </div>

            {/* BEDROOM / BATHROOM / GARAGE */}
            <div style={{ ...detailRow, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
              <div>
                <div style={detailLabel}>Bedroom</div>
                <div style={detailValue}>{property.specs.beds}</div>
              </div>
              <div>
                <div style={detailLabel}>Bathroom</div>
                <div style={detailValue}>{property.specs.baths}</div>
              </div>
              <div>
                <div style={detailLabel}>Garage</div>
                <div style={detailValue}>{property.specs.garage}</div>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, fontSize: '0.8rem', color: '#202831', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                Book with us
              </span>
              <SocialTooltip items={[
                { href: property.bookingLinks.idealista, ariaLabel: 'Idealista', svgUrl: '/images/Website.images/Home/sec.4/logos.pltf-to-rent/idealista.png', imgSize: 23 },
                { href: property.bookingLinks.airbnb, ariaLabel: 'Airbnb', svgUrl: '/images/Website.images/Home/sec.4/logos.pltf-to-rent/air.bnb.png', imgSize: 29 },
                { href: property.bookingLinks.spotahome, ariaLabel: 'Spotahome', svgUrl: '/images/Website.images/Home/sec.4/logos.pltf-to-rent/spotahome.png', imgSize: 23 },
                { href: property.bookingLinks.flatio, ariaLabel: 'Flatio', svgUrl: '/images/Website.images/Home/sec.4/logos.pltf-to-rent/flatio.png', imgSize: 23 },
              ]} />
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div style={{ ...wrap, padding: '72px 80px' }}>
          <FadeIn delay={0}>
          <p style={eyebrow}>Gallery</p>
          <h2 style={sectionH2}>Property Spaces</h2>
          </FadeIn>
          <FadeIn delay={150}>
          <PropertyGallery photos={property.gallery} />
          </FadeIn>
        </div>
      </section>

      {/* ── Location & Map ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div style={{ ...wrap, padding: '72px 80px' }}>
          <FadeIn delay={0}>
          <p style={eyebrow}>Location</p>
          <h2 style={{ ...sectionH2, marginBottom: '40px' }}>{property.location}</h2>
          </FadeIn>
          <FadeIn delay={150}>
          <div style={{ width: '100%', height: '420px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#d4d8dc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-aileron)', color: '#9a9ea1', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Map coming soon</span>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Related Properties ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div style={{ ...wrap, padding: '72px 80px' }}>
          <FadeIn delay={0}>
          <p style={eyebrow}>Explore More</p>
          <h2 style={sectionH2}>Other Properties</h2>
          </FadeIn>
          <FadeIn delay={150}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {related.map((p) => (
              <Link key={p.id} href={`/portfolio/${p.slug}`} style={{ textDecoration: 'none' }}>
                <TiltCard style={{ border: '1px solid #e4e4e4', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
                  <div style={{ height: '220px', backgroundColor: '#c4c8cc' }}>
                    {p.image && (
                      <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )}
                  </div>
                  <div style={{ padding: '24px 28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <h3 style={{ margin: 0, fontFamily: 'var(--font-radnika)', fontSize: '1.5rem', color: '#6b87a4', fontWeight: 500 }}>
                        {p.name}
                      </h3>
                    </div>
                    <p style={{ margin: '0 0 16px', fontSize: '0.96rem', color: '#75797c', lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {p.description}
                    </p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {p.tags.map((tag, i) => (
                        <span
                          key={i}
                          style={{ fontSize: '0.68rem', fontWeight: 600, padding: '4px 12px', borderRadius: '999px', border: '1px solid rgba(107,135,164,0.35)', color: '#6b87a4', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                        >
                          {tag.type === 'people' ? `${tag.count} guests` : tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Link>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
