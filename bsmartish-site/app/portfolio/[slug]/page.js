import Link from 'next/link'
import { notFound } from 'next/navigation'
import { properties, getPropertyBySlug, getRelatedProperties } from '@/app/lib/propertiesData'

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

const sectionH2 = {
  margin: '0 0 32px',
  fontFamily: 'var(--font-radnika)',
  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
  color: '#6b87a4',
  fontWeight: 500,
  lineHeight: 1.2,
}

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
  const displayPrice = property.price ?? property.priceLabel

  return (
    <main style={{ backgroundColor: '#f8f8f8', fontFamily: 'var(--font-aileron)' }}>

      {/* ── Property Header Bar ── */}
      <div style={{ borderBottom: '1px solid #e4e4e4', backgroundColor: '#f8f8f8' }}>
        <div style={{ ...wrap, padding: '20px 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-radnika)', fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', color: '#202831', fontWeight: 500, lineHeight: 1.1 }}>
              {property.name}
            </h1>
            <p style={{ margin: '5px 0 0', fontFamily: 'var(--font-garet)', fontSize: '0.95rem', fontWeight: 800, color: '#6b87a4' }}>
              {displayPrice}
            </p>
          </div>
          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {[{ label: 'About Us', href: '/about' }, { label: 'Portfolio', href: '/portfolio' }].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{ fontFamily: 'var(--font-aileron)', fontSize: '0.72rem', fontWeight: 600, color: '#75797c', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase' }}
              >
                {label}
              </Link>
            ))}
            <span style={{ fontFamily: 'var(--font-aileron)', fontSize: '0.72rem', fontWeight: 600, color: '#6b87a4', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {property.name}
            </span>
            <Link
              href="#contact"
              style={{ fontFamily: 'var(--font-aileron)', fontSize: '0.72rem', fontWeight: 600, padding: '8px 20px', borderRadius: '6px', backgroundColor: '#202831', color: '#f8f8f8', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Inquire
            </Link>
          </nav>
        </div>
      </div>

      {/* ── Hero Image ── */}
      <div style={{ width: '100%', height: 'clamp(300px, 58vh, 640px)', overflow: 'hidden' }}>
        {property.image ? (
          <img src={property.image} alt={property.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#b8bcc0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-aileron)', color: '#888c90', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Hero Image</span>
          </div>
        )}
      </div>

      {/* ── Overview + Specs ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div style={{ ...wrap, padding: '72px 80px', display: 'grid', gridTemplateColumns: '1fr 360px', gap: '80px', alignItems: 'start' }}>

          {/* Left: overview text */}
          <div>
            <p style={eyebrow}>Overview</p>
            <h2 style={sectionH2}>{property.name}</h2>
            <p style={{ margin: '0 0 16px', fontSize: '0.9375rem', color: '#202831', lineHeight: 1.8, maxWidth: '540px' }}>
              {property.description}
            </p>
            <p style={{ margin: '0 0 44px', fontSize: '0.9375rem', color: '#75797c', lineHeight: 1.8, maxWidth: '540px' }}>
              {property.longDescription}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {property.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{ fontSize: '0.7rem', fontWeight: 600, padding: '6px 16px', borderRadius: '999px', border: '1px solid #6b87a4', color: '#6b87a4', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: specs card */}
          <div style={{ border: '1px solid #e4e4e4', borderRadius: '12px', padding: '36px', backgroundColor: '#ffffff' }}>
            <p style={{ ...eyebrow, marginBottom: '24px' }}>Property Details</p>
            <div>
              {[
                { label: 'Area', value: property.specs.area },
                { label: 'Bedrooms', value: property.specs.beds },
                { label: 'Bathrooms', value: property.specs.baths },
                { label: 'Type', value: property.specs.type },
                { label: 'Status', value: property.specs.status },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < arr.length - 1 ? '1px solid #e4e4e4' : 'none' }}
                >
                  <span style={{ fontSize: '0.8rem', color: '#75797c' }}>{item.label}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#202831' }}>{item.value}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid #e4e4e4' }}>
              <p style={{ margin: '0 0 6px', fontSize: '0.7rem', fontWeight: 600, color: '#75797c', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Price</p>
              <p style={{ margin: '0 0 24px', fontFamily: 'var(--font-garet)', fontSize: '1.75rem', fontWeight: 800, color: '#202831' }}>
                {displayPrice}
              </p>
              <a
                href="#contact"
                style={{ display: 'block', width: '100%', boxSizing: 'border-box', padding: '14px', backgroundColor: '#202831', color: '#f8f8f8', border: 'none', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', textDecoration: 'none', fontFamily: 'var(--font-aileron)' }}
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div style={{ ...wrap, padding: '72px 80px' }}>
          <p style={eyebrow}>Gallery</p>
          <h2 style={sectionH2}>Property Spaces</h2>

          {/* Top row: wide + narrow */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginBottom: '12px' }}>
            <Placeholder height="380px" shade="#bec2c6" />
            <Placeholder height="380px" shade="#c8cbce" />
          </div>

          {/* Bottom row: 3 equal */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            <Placeholder height="220px" shade="#c4c8cc" />
            <Placeholder height="220px" shade="#b8bcc0" />
            <Placeholder height="220px" shade="#ccd0d4" />
          </div>
        </div>
      </section>

      {/* ── Related Properties ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div style={{ ...wrap, padding: '72px 80px' }}>
          <p style={eyebrow}>Explore More</p>
          <h2 style={sectionH2}>Related Properties</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {related.map((p) => (
              <Link key={p.id} href={`/portfolio/${p.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ border: '1px solid #e4e4e4', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
                  <div style={{ height: '220px', backgroundColor: '#c4c8cc' }}>
                    {p.image && (
                      <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )}
                  </div>
                  <div style={{ padding: '24px 28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <h3 style={{ margin: 0, fontFamily: 'var(--font-radnika)', fontSize: '1.125rem', color: '#202831', fontWeight: 500 }}>
                        {p.name}
                      </h3>
                      <span style={{ fontFamily: 'var(--font-garet)', fontSize: '0.85rem', fontWeight: 800, color: '#6b87a4', whiteSpace: 'nowrap', marginLeft: '12px' }}>
                        {p.price ?? p.priceLabel}
                      </span>
                    </div>
                    <p style={{ margin: '0 0 16px', fontSize: '0.85rem', color: '#75797c', lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {p.description}
                    </p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {p.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          style={{ fontSize: '0.68rem', fontWeight: 600, padding: '4px 12px', borderRadius: '999px', border: '1px solid #e4e4e4', color: '#75797c', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get in Touch ── */}
      <section id="contact" style={{ backgroundColor: '#202831' }}>
        <div style={{ ...wrap, padding: '80px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Form */}
          <div>
            <p style={{ ...eyebrow, color: '#6b87a4', marginBottom: '16px' }}>Contact Us</p>
            <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--font-radnika)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#f8f8f8', fontWeight: 500, lineHeight: 1.15 }}>
              Get in touch
            </h2>
            <p style={{ margin: '0 0 40px', fontSize: '0.9375rem', color: '#8a9499', lineHeight: 1.75, maxWidth: '400px' }}>
              Interested in this property? Our team is ready to answer your questions and arrange a viewing.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <input
                type="text"
                placeholder="Your name"
                style={{ padding: '14px 18px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f8f8f8', fontSize: '0.875rem', fontFamily: 'var(--font-aileron)', outline: 'none', width: '100%', boxSizing: 'border-box' }}
              />
              <input
                type="email"
                placeholder="Email address"
                style={{ padding: '14px 18px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f8f8f8', fontSize: '0.875rem', fontFamily: 'var(--font-aileron)', outline: 'none', width: '100%', boxSizing: 'border-box' }}
              />
              <textarea
                placeholder="Your message"
                rows={4}
                style={{ padding: '14px 18px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f8f8f8', fontSize: '0.875rem', fontFamily: 'var(--font-aileron)', outline: 'none', resize: 'vertical', width: '100%', boxSizing: 'border-box' }}
              />
              <button
                style={{ padding: '14px', backgroundColor: '#6b87a4', color: '#f8f8f8', border: 'none', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'var(--font-aileron)' }}
              >
                Send Message
              </button>
            </div>
          </div>

          {/* City image placeholder */}
          <div style={{ height: '480px', borderRadius: '16px', backgroundColor: '#2a3540', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <span style={{ fontFamily: 'var(--font-aileron)', color: '#3d4e5a', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>City Image</span>
          </div>
        </div>
      </section>
    </main>
  )
}
