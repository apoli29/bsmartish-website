import FadeIn from '@/app/components/FadeIn'

const stats = [
  { value: '+10',     label: 'Curated Projects'    },
  { value: '+6.2M €', label: 'In Investments'      },
  { value: '100%',    label: 'Client Satisfaction' },
]

export default function ImpactWidget() {
  return (
    <section
      id="impact-widget"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e4e4e4' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-12 md:py-14 lg:py-16">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start md:items-center">

          {/* Left column — headline */}
          <FadeIn className="flex flex-col md:w-[42%] shrink-0">
            <p
              className="mb-4 uppercase tracking-[0.15em] text-[0.7rem]"
              style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#6b87a4' }}
            >
              Our Track Record
            </p>
            <h2
              className="text-[2.2rem] md:text-[2.6rem] lg:text-[3rem]"
              style={{ fontFamily: 'var(--font-radnika)', color: '#6b87a4', lineHeight: 1.1 }}
            >
              A track record<br />that proves our<br />excellence.
            </h2>
          </FadeIn>

          {/* Right column — three stat widgets */}
          <div className="flex flex-col sm:flex-row md:items-center flex-1 gap-8 sm:gap-0">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className="flex-1 flex flex-col items-start text-left"
              >
                <FadeIn delay={150 + i * 120}>
                  <p
                    className="leading-none mb-2 text-[2rem] md:text-[2.6rem] lg:text-[3rem] whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-garet)', fontWeight: 800, color: '#202831' }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-[0.8rem] uppercase tracking-[0.1em]"
                    style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#75797c' }}
                  >
                    {label}
                  </p>
                </FadeIn>
              </div>
            ))}
          </div>

        </div>

        {/* Link abaixo das estatísticas */}
        <FadeIn delay={150} className="mt-10 md:mt-8">
          <a
            href="/about"
            className="group flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.1em] transition-all"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#202831' }}
          >
            <span style={{ borderBottom: '1px solid #202831', paddingBottom: '1px' }}>
              Find out more about us
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </FadeIn>

      </div>
    </section>
  )
}
