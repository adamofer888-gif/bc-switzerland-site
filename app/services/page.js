export const metadata = {
  title: "Services – DTE Holding AG",
  description:
    "Gestion de patrimoine, capital à risque et développement digital – DTE Holding AG.",
};

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* ✅ BANDEAU IMAGE */}
      <section
        className="w-full h-72 rounded-2xl bg-center bg-cover mb-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508051123996-69f8caf4891b?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></section>

      {/* ✅ TITRE + INTRO */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        Nos Services
      </h1>
      <p className="mt-4 text-gray-300 md:text-lg leading-relaxed max-w-3xl">
        Nous combinons investissement, technologie et expertise stratégique pour créer de la valeur mesurable
        avec exigence et élégance.
      </p>

      {/* ✅ CARTES DE SERVICES */}
      <div className="mt-12 grid md:grid-cols-3 gap-8">

        {/* --- GESTION DE PATRIMOINE --- */}
        <article className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold text-white">Gestion de patrimoine</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Allocation & diversification, structuration d’actifs, optimisation fiscale et transmission.
            Une approche sur-mesure pour faire croître et protéger votre capital.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 text-gold-400 font-medium hover:underline"
          >
            Discuter d’un projet →
          </a>
        </article>

        {/* --- CAPITAL À RISQUE --- */}
        <article className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold text-white">Capital à risque</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Investissements early-stage, croissance, structuration des deals, gouvernance et accompagnement stratégique.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 text-gold-400 font-medium hover:underline"
          >
            Nous contacter →
          </a>
        </article>

        {/* --- DÉVELOPPEMENT DIGITAL --- */}
        <article className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold text-white">Développement digital</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Produits web & mobiles, automatisation, intégrations cloud, optimisation UX et plateformes sur-mesure.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 text-gold-400 font-medium hover:underline"
          >
            Discuter technique →
          </a>
        </article>
      </div>
    </main>
  );
}
