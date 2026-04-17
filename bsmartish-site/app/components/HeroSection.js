import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center">

      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/Website.images/Home/Home.image.sec1.webp')" }}
      />

      {/* Overlay Deep Urban */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(32, 40, 49, 0.68)' }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-[110px] md:pt-[130px] lg:pt-[150px] pb-20">

        {/* Headline */}
        <h1
          className="text-[#F8F8F8] leading-[1.1] max-w-2xl mb-6 text-[2.2rem] md:text-[2.9rem] lg:text-[3.5rem]"
          style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500 }}
        >
          Developing urban renovation projects for almost 30 years
        </h1>

        {/* Sub-headline */}
        <p
          className="text-[#F8F8F8] max-w-xl mb-10 leading-relaxed text-[1rem] md:text-[1.05rem] lg:text-[1.1rem]"
          style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, opacity: 0.9 }}
        >
          We use our expertise to build mid-term rental properties and to help investors develop their own urban renovation projects.
        </p>

        {/* Botões */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/about"
            className="px-7 py-3 text-[#F8F8F8] rounded-full hover:opacity-85 transition-all text-sm"
            style={{
              backgroundColor: '#202831',
              fontFamily: 'var(--font-aileron)',
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            About us
          </Link>
          <Link
            href="/portfolio"
            className="px-7 py-3 text-[#F8F8F8] rounded-full hover:opacity-85 transition-all text-sm"
            style={{
              backgroundColor: '#6b87a4',
              fontFamily: 'var(--font-aileron)',
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            Our rental properties
          </Link>
        </div>

      </div>
    </section>
  )
}
