import FadeIn from '@/app/components/FadeIn'

export default function AboutTrajectory() {
  return (
    <section
      id="about-trajectory"
      className="w-full"
      style={{ backgroundColor: '#F8F8F8' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-10">

        <FadeIn>
          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <span
              aria-hidden="true"
              className="block"
              style={{ width: '28px', height: '1px', backgroundColor: '#6b87a4' }}
            />
            <p
              className="uppercase tracking-[0.22em] text-[0.7rem]"
              style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#6b87a4' }}
            >
              Our Trajectory
            </p>
          </div>
          <h2
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] max-w-[820px]"
            style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#6b87a4' }}
          >
            Mastering urban renovation since 1997.
          </h2>
        </FadeIn>

      </div>
    </section>
  )
}
