export const metadata = {
  title: "Services – DTE Holding AG",
  description:
    "Gestion de patrimoine, capital à risque et développement digital. Des solutions haut de gamme adaptées à vos objectifs.",
};

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* ✅ BANDEAU IMAGE */}
      <section
        aria-label="Hero visuel"
        className="w-full h-72 rounded-2xl mb-16 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></section>

      {/* ✅ CONTENU */}
      <section>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#3B3B47] text-center">
          Nos Services
        </h1>
        <p className="mt-4 text-gray-600 md:text-lg leading-relaxed text-center">
          Nous combinons investissement, technologie et expertise stratégique
          pour créer de la valeur mesurable avec exigence et élégance.
        </p>

        {/* ✅ CARTES DE SERVICES */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {/* Carte 1 */}
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-medium text-[#3B3B47] mb-2">
              Gestion de patrimoine
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Allocation & diversification, structuration d’actifs, optimisation
              fiscale et transmission. Une approche sur-mesure pour faire croître
              et protéger votre capital.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 text-blue-700 font-medium hover:underline"
            >
              Discuter d’un projet →
            </a>
          </article>

          {/* Carte 2 */}
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-medium text-[#3B3B47] mb-2">
              Capital à risque
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Investissements early-stage, croissance, structuration des deals,
              gouvernance et accompagnement stratégique.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 text-blue-700 font-medium hover:underline"
            >
              Nous contacter →
            </a>
          </article>

          {/* Carte 3 */}
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-medium text-[#3B3B47] mb-2">
              Développement digital
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Produits web & mobiles, automatisation, intégrations cloud,
              optimisation UX et plateformes sur-mesure.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 text-blue-700 font-medium hover:underline"
            >
              Discuter technique →
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
