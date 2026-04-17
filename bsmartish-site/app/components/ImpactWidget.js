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
      style={{ backgroundColor: '#f8f8f8' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10 lg:pb-12">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">

          {/* Left column — headline + button */}
          <div className="flex flex-col md:w-[45%] shrink-0">
            <h2
              className="text-[2.4rem] md:text-[2.8rem] lg:text-[3.1rem]"
              style={{ fontFamily: 'var(--font-radnika)', color: '#6b87a4', lineHeight: 1.1 }}
            >
              A track record<br />that proves our<br />excellence.
            </h2>
            <button
              className="mt-5 self-start"
              style={{
                fontFamily: 'var(--font-aileron)',
                fontWeight: 400,
                color: '#202831',
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Find out more about us →
            </button>
          </div>

          {/* Right column — three stat widgets, no background */}
          <div className="flex flex-col md:flex-row md:items-center flex-1">
            {stats.map(({ value, label }, i) => (
              <div key={label} className="flex-1 flex flex-col items-start text-left" style={i < stats.length - 1 ? { paddingRight: '4rem' } : {}}>
                <p
                  className="leading-none mb-3 text-[2.2rem] md:text-[2.6rem] lg:text-[3rem] whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-garet)', fontWeight: 800, color: '#202831' }}
                >
                  {value}
                </p>
                <p
                  className="text-base md:text-lg whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: '#75797c' }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
