export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      {/* Hero */}
      <section className="py-16">
        <h1 className="text-4xl font-bold tracking-tight">DTE Holding AG</h1>
        <p className="mt-3 text-lg text-gray-600">
          Innovations • Capital à Risque • Développement Digital
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/services" className="px-4 py-2 rounded-lg bg-blue-900 text-white">
            Nos services
          </a>
          <a href="/contact" className="px-4 py-2 rounded-lg border">
            Nous contacter
          </a>
        </div>
      </section>

      {/* Aperçu services */}
      <section id="services" className="py-10 border-t">
        <h2 className="text-2xl font-semibold">Nos Services</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border p-5">
            <h3 className="font-medium">Capital à Risque</h3>
            <p className="mt-2 text-sm text-gray-600">
              Early-stage, structure de deals, gouvernance.
            </p>
            <a href="/services/capital-a-risque" className="mt-3 inline-block text-blue-700">
              En savoir plus →
            </a>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-medium">Développement Digital</h3>
            <p className="mt-2 text-sm text-gray-600">
              Produits web & mobiles, optimisation UX, intégrations cloud.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
        }
