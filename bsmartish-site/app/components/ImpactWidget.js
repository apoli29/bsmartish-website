import FadeIn from '@/app/components/FadeIn'

const stats = [
  { value: '+10',    label: 'Curated Projects'    },
  { value: '+6.2M€', label: 'In Investments'      },
  { value: '100%',   label: 'Client Satisfaction' },
]

export default function ImpactWidget() {
  return (
    <section
      id="impact-widget"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e4e4e4' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-16 md:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row gap-14 lg:gap-12 items-start md:items-center">

          {/* Left column — headline */}
          <FadeIn className="flex flex-col md:w-[30%] shrink-0">
            <p
              className="mb-4 uppercase tracking-[0.15em] text-[0.7rem]"
              style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#6b87a4' }}
            >
              Our Track Record
            </p>
            <h2
              className="text-[2rem] md:text-[2.3rem] lg:text-[2.7rem]"
              style={{ fontFamily: 'var(--font-radnika)', color: '#6b87a4', lineHeight: 1.1 }}
            >
              A track record<br />that proves our<br />excellence.
            </h2>
          </FadeIn>

          {/* Right column — three stat widgets */}
          <div className="flex flex-col sm:flex-row sm:justify-between md:items-start flex-1 w-full gap-12 sm:gap-4">
            {stats.map(({ value, label }, i) => (
              <div key={label} className="flex flex-col items-start text-left">
                <FadeIn delay={150 + i * 120} className="flex flex-col items-start">
                  <p
                    className="leading-none mb-1 md:mb-[6px] text-[2.6rem] md:text-[3rem] lg:text-[3.4rem] whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-garet)', fontWeight: 800, color: '#202831' }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] uppercase tracking-[0.15em]"
                    style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#75797c', maxWidth: '120px', lineHeight: 1.3 }}
                  >
                    {label}
                  </p>
                </FadeIn>
              </div>
            ))}
          </div>

        </div>

        {/* Link abaixo das estatísticas */}
        <FadeIn delay={150} className="mt-12 md:mt-14">
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
