export default function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Website.images/About%20us/img.sec.1.webp')",
        }}
      />

      {/* Gradient escuro principal — atmosfera Deep Urban */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(32,40,49,0.78) 0%, rgba(32,40,49,0.55) 35%, rgba(32,40,49,0.65) 70%, rgba(32,40,49,0.92) 100%)',
        }}
      />

      {/* Tint Slate Blue subtil para coerência com a paleta */}
      <div
        className="absolute inset-0 mix-blend-overlay pointer-events-none"
        style={{ backgroundColor: 'rgba(107,135,164,0.22)' }}
      />
    </section>
  )
}
