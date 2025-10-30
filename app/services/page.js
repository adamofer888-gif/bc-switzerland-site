export const metadata = {
  title: "Services — DTE Holding AG",
  description:
    "Capital à Risque, Développement Digital et Conseil Stratégique. Des services pensés pour accélérer vos projets.",
};

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#B38B47]">
        Nos Services
      </h1>
      <p className="mt-4 text-gray-300 md:text-lg leading-relaxed">
        Nous combinons investissement, produit et technologie pour transformer les idées
        en résultats mesurables — avec exigence et élégance.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-medium text-[#B38B47]">Capital à Risque</h2>
          <p className="mt-2 text-gray-300">
            Accompagnement early-stage & growth, structuration des deals et gouvernance.
          </p>
          <a href="/contact" className="inline-block mt-4 rounded-xl border border-white/15 px-4 py-2">
            Nous contacter
          </a>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-medium text-[#B38B47]">Développement Digital</h2>
          <p className="mt-2 text-gray-300">
            Produits web & mobiles, optimisation UX, intégrations cloud et automatisations.
          </p>
          <a href="/contact" className="inline-block mt-4 rounded-xl border border-white/15 px-4 py-2">
            Discuter d’un projet
          </a>
        </section>
      </div>
    </main>
  );
}
