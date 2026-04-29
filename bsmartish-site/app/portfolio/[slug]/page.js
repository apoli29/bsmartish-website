
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { properties, getPropertyBySlug, getRelatedProperties } from '@/app/lib/propertiesData'
import PropertyGallery from '@/app/components/PropertyGallery'
import FadeIn from '@/app/components/FadeIn'
import { SocialTooltip } from '@/app/components/SocialTooltip'
import TiltCard from '@/app/components/TiltCard'
import MoreDetailsAccordion from '@/app/components/MoreDetailsAccordion'

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }))
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
  fontWeight: 600,
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

export default async function PropertyPage({ params }) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)
  if (!property) notFound()

  const related = getRelatedProperties(slug)

  return (
    <main className="pt-24 md:pt-28 lg:pt-32" style={{ backgroundColor: '#f8f8f8', fontFamily: 'var(--font-aileron)' }}>

      {/* ── Overview + Specs ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-12 md:py-16 lg:py-[72px]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px] gap-10 md:gap-12 lg:gap-20 items-start">

            {/* Left: overview text */}
            <FadeIn delay={0}>
              <div>
                <p style={eyebrow}>About This Property</p>
                <h1 style={{ margin: '0 0 32px', fontFamily: 'var(--font-radnika)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#6b87a4', fontWeight: 500, lineHeight: 1.1 }}>
                  {property.name} {property.specs.type}
                </h1>
                {property.moreDetails && property.moreDetails.intro.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      margin: i < property.moreDetails.intro.length - 1 ? '0 0 14px' : '0 0 28px',
                      fontSize: '1.075rem',
                      color: '#75797c',
                      lineHeight: 1.8,
                      fontFamily: 'var(--font-aileron)',
                      textAlign: 'justify',
                    }}
                  >
                    {para}
                  </p>
                ))}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
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

            {/* Right: property details */}
            <FadeIn delay={150}>
              <div style={{ paddingTop: '29px' }}>
                <p style={{ ...eyebrow, marginBottom: '0' }}>Property Details</p>

                <div style={{ ...detailRow, borderTop: '1px solid #e4e4e4', marginTop: '16px' }}>
                  <div style={detailLabel}>Property Name</div>
                  <div style={detailValue}>{property.name} {property.specs.type}</div>
                </div>

                <div style={detailRow}>
                  <div style={detailLabel}>Location</div>
                  <div style={detailValue}>{property.location}</div>
                </div>

                <div style={detailRow}>
                  <div style={detailLabel}>Built Year</div>
                  <div style={detailValue}>{property.specs.year}</div>
                </div>

                <div style={detailRow}>
                  <div style={detailLabel}>Sqm.</div>
                  <div style={detailValue}>{property.specs.area}</div>
                </div>

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
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-12 md:py-16 lg:py-[72px]">
          <FadeIn delay={0}>
            <p style={eyebrow}>Gallery</p>
            <h2 style={sectionH2}>Property Spaces</h2>
          </FadeIn>
          <FadeIn delay={150}>
            <PropertyGallery photos={property.gallery} />
          </FadeIn>
        </div>
      </section>

      {/* ── More Details ── */}
      {property.moreDetails && (
        <section style={{ borderBottom: '1px solid #e4e4e4' }}>
          <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-12 md:py-16 lg:py-[72px]">
            <FadeIn delay={0}>
              <p style={eyebrow}>More Details</p>
              <h2 style={sectionH2}>Property Breakdown</h2>
            </FadeIn>
            <FadeIn delay={150}>
              <MoreDetailsAccordion moreDetails={property.moreDetails} />
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Location & Map ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-12 md:py-16 lg:py-[72px]">
          <FadeIn delay={0}>
            <p style={eyebrow}>Location</p>
            <h2 style={{ ...sectionH2, marginBottom: '40px' }}>{property.location}</h2>
          </FadeIn>
          <FadeIn delay={150}>
            <div style={{ width: '100%', height: '420px', borderRadius: '12px', overflow: 'hidden' }}>
              {property.mapSrc ? (
                <iframe
                  src={property.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div style={{ width: '100%', height: '100%', backgroundColor: '#d4d8dc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-aileron)', color: '#9a9ea1', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Map coming soon</span>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Related Properties ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-12 md:py-16 lg:py-[72px]">
          <FadeIn delay={0}>
            <p style={eyebrow}>Explore More</p>
            <h2 style={sectionH2}>Other Properties</h2>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/portfolio/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <TiltCard style={{ border: '1px solid #e4e4e4', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
                    <div style={{ height: '220px', backgroundColor: '#c4c8cc' }}>
                      {p.image && (
                        <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      )}
                    </div>
                    <div style={{ padding: '24px 28px' }}>
                      <h3 style={{ margin: '0 0 10px', fontFamily: 'var(--font-radnika)', fontSize: '1.5rem', color: '#6b87a4', fontWeight: 500 }}>
                        {p.name}
                      </h3>
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
