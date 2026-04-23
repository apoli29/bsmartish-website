import { FrostedGlassCard } from '@/app/components/ui/interactive-frosted-glass-card'

export default function AboutWhatWeDo() {
  return (
    <section
      id="about-what-we-do"
      className="w-full"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-0 pb-20 md:pb-24 lg:pb-28">

        {/* Row 1 — two image cards */}
        <div className="flex flex-col lg:flex-row gap-4">
          <FrostedGlassCard
            className="w-full lg:w-[360px] aspect-[16/9]"
            image="/images/Website.images/About us/img.square.sec2.webp"
            title="20 years"
            subtitle="of activity in spain"
          />
          <FrostedGlassCard
            className="w-full lg:w-[360px] aspect-[16/9]"
            image="/images/Website.images/About us/2.img.square.sec.2.webp"
            title="~10 years"
            subtitle="of activity in porto"
          />
        </div>

        {/* Row 2 — dark glass card, height driven by content */}
        <div className="mt-4">
          <FrostedGlassCard
            className="w-full lg:w-[640px]"
            tone="dark"
            bodyText="In spain, our focus was on developing urban renovation projects for the long-term rental market. We developed projects everywhere across the country, but mostly in beautiful cities like Barcelona and Girona. All these years of activity were fundamental for us to find our identity and our philosophy — essentially how we operate. In 2017 we relocated our activity to Porto, where we have centralized all our operations to this day."
          />
        </div>

      </div>
    </section>
  )
}
