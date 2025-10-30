// app/page.js

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10">
        <img
          alt="Montagnes suisses"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1600&auto=format&fit=crop"
        />
        <div className="relative z-10 p-8 md:p-14 bg-gradient-to-b from-black/40 to-transparent">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <span className="px-2 py-0.5 rounded-full border border-white/20">Suisse</span>
            <span className="px-2 py-0.5 rounded-full border border-white/20">Depuis 2011</span>
            <span className="px-2 py-0.5 rounded-full border border-white/20">
              Registre du commerce&nbsp;: CH-130.3.017.565-5
            </span>
          </div>
          <h1 className="mt-6 text-3xl md:text-5xl font-semibold text-white">
            DTE HOLDING AG
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-300">
            Gestion de patrimoine &amp; Capital à risque. Nous accompagnons nos clients
            dans la protection et la croissance de leur patrimoine avec des solutions
            sur-mesure et un suivi dédié.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="rounded-xl px-5 py-3 bg-white text-black hover:bg-gray-100 transition"
            >
              Découvrir nos services
            </a>
            <a
              href="#contact"
              className="rounded-xl px-5 py-3 border border-white/30 text-white hover:bg-white/10 transition"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* BANDE DE CONFIANCE (logos texte pour l’instant) */}
      <section className="rounded-2xl border border-white/10 p-6">
        <p className="text-center text-sm text-gray-400">Références et écosystème</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-300">
          <div className="rounded-lg border border-white/10 py-3">UBS</div>
          <div className="rounded-lg border border-white/10 py-3">HSBC</div>
          <div className="rounded-lg border border-white/10 py-3">Swissquote</div>
          <div className="rounded-lg border border-white/10 py-3">Bitcoin • Ethereum</div>
        </div>
        <p className="mt-3 text-center text-xs text-gray-500">
          Logos/Marques présentés à titre indicatif. Aucun parrainage n’est impliqué.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Nos services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Gestion de patrimoine */}
          <a
            href="/services/gestion-de-patrimoine"
            className="group rounded-2xl border border-white/10 p-6 hover:border-white/20 transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-white">Gestion de patrimoine</h3>
              <span className="opacity-60 group-hover:opacity-100 transition">→</span>
            </div>
            <p className="mt-2 text-gray-300">
              Stratégie globale, allocation d’actifs, fiscalité et transmission, avec un
              accompagnement personnalisé et une gouvernance claire.
            </p>
            <img
              alt="Suisse"
              className="mt-4 h-36 w-full object-cover rounded-xl opacity-70"
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop"
            />
          </a>

          {/* Capital à risque */}
          <a
            href="/services/capital-a-risque"
            className="group rounded-2xl border border-white/10 p-6 hover:border-white/20 transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-white">Capital à risque</h3>
              <span className="opacity-60 group-hover:opacity-100 transition">→</span>
            </div>
            <p className="mt-2 text-gray-300">
              Accès à des opportunités privées et alternatives, due diligence rigoureuse,
              gestion des risques et reporting professionnel.
            </p>
            <img
              alt="Drapeau suisse"
              className="mt-4 h-36 w-full object-cover rounded-xl opacity-70"
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1400&auto=format&fit=crop"
            />
          </a>

          {/* Immobilier */}
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-xl font-medium text-white">Immobilier</h3>
            <p className
