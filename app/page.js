export default function Home() {
  return (
    <main className="relative">
      {/* Hero */}
      <section id="hero" className="px-6 py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            DTE Holding AG
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl">
            Innovations • Capital à Risque • Développement Digital
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#services" className="px-5 py-3 rounded-xl bg-slate-900 text-white">
              Nos services
            </a>
            <a href="/services/capital-a-risque" className="px-5 py-3 rounded-xl border border-slate-300">
              Capital à risque
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Capital à Risque</h3>
              <p className="mt-2 text-slate-600">
                Co-investissement et accompagnement de projets à fort potentiel.
              </p>
              <a href="/services/capital-a-risque" className="mt-4 inline-block text-sm font-medium text-slate-900 underline">
                En savoir plus
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Innovation & R&D</h3>
              <p className="mt-2 text-slate-600">
                Veille, preuve de concept et prototypage produit.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Développement Digital</h3>
              <p className="mt-2 text-slate-600">
                Sites & applications modernes, sécurité & performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold">À propos</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Société basée en Suisse. Depuis 2011, nous accompagnons nos clients dans la croissance,
            la protection et le développement de leurs actifs au travers d’innovations et d’investissements.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          <p className="mt-4 text-slate-600">
            Écrivez-nous : <a className="underline" href="mailto:contact@dteholdingag.com">contact@dteholdingag.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
