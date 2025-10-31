// app/services/page.js

export const metadata = {
  title: "Services — DTE Holding AG",
  description:
    "Gestion de patrimoine, capital à risque et développement digital — DTE Holding AG.",
};

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* HERO avec image + fade-in */}
      <section
        aria-label="Hero visuel"
        className="w-full h-72 rounded-2xl bg-center bg-cover mb-16 fade-block fade-in"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-15085051123996-69f8caf4891b?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      <p className="text-xs text-center text-white/60 -mt-12 mb-14">
        Crédits photo : Alpes suisses
      </p>

      {/* Titre + intro */}
      <section className="fade-block fade-in">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Nos services
        </h1>
        <p className="mt-4 text-gray-300 md:text-lg leading-relaxed max-w-3xl">
          DTE Holding AG accompagne familles, dirigeants et entrepreneurs avec
          une approche sur-mesure : gestion de patrimoine, capital à risque et
          développement digital.
        </p>
      </section>

      {/* 3 cartes services */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 fade-block fade-in">
        {/* Gestion de patrimoine */}
        <article className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold text-white">
            Gestion de patrimoine
          </h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Allocation disciplinée, diversification, structuration d’actifs,
            optimisation fiscale et transmission. Une approche sur-mesure pour
            faire croître et protéger votre capital.
          </p>
          <div className="h-px bg-white/10 my-4" />
          <a
            href="/contact"
            className="inline-block mt-1 text-amber-300 font-medium hover:underline"
          >
            Parler à un conseiller →
          </a>
        </article>

        {/* Capital à risque */}
        <article className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold text-white">Capital à risque</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Investissements early-stage, croissance, structuration des deals,
            gouvernance et accompagnement stratégique.
          </p>
          <div className="h-px bg-white/10 my-4" />
          <a
            href="/contact"
            className="inline-block mt-1 text-amber-300 font-medium hover:underline"
          >
            Nous contacter →
          </a>
        </article>

        {/* Développement digital */}
        <article className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold text-white">
            Développement digital
          </h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Produits web & mobiles, automatisation, intégrations cloud,
            optimisation UX et plateformes sur-mesure.
          </p>
          <div className="h-px bg-white/10 my-4" />
          <a
            href="/contact"
            className="inline-block mt-1 text-amber-300 font-medium hover:underline"
          >
            Discuter technique →
          </a>
        </article>
      </div>

      {/* Pilier d’exécution (style “cards” élégantes) */}
      <section className="mt-20 fade-block fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Nos piliers d’exécution
        </h2>

        <div className="mt-8 grid gap-6">
          <div className="bg-white/6 border border-white/15 rounded-2xl p-6">
            <div className="text-amber-300 text-sm font-semibold">01</div>
            <h3 className="mt-1 text-xl text-white font-semibold">
              Gestion de patrimoine
            </h3>
            <p className="mt-2 text-gray-300">
              Allocation disciplinée, contrôle des risques, relation client
              dédiée.
            </p>
          </div>

          <div className="bg-white/6 border border-white/15 rounded-2xl p-6">
            <div className="text-amber-300 text-sm font-semibold">02</div>
            <h3 className="mt-1 text-xl text-white font-semibold">
              Capital à risque
            </h3>
            <p className="mt-2 text-gray-300">
              Thèses fintech / deeptech / SaaS, sélection, due diligence,
              gouvernance.
            </p>
          </div>

          <div className="bg-white/6 border border-white/15 rounded-2xl p-6">
            <div className="text-amber-300 text-sm font-semibold">03</div>
            <h3 className="mt-1 text-xl text-white font-semibold">
              Conseil stratégique
            </h3>
            <p className="mt-2 text-gray-300">
              Vision produit, M&A, structuration, excellence opérationnelle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mt-16 text-center fade-block fade-in">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Un projet à lancer ou à accélérer ?
        </h2>
        <p className="mt-3 text-gray-300">
          Nous répondons rapidement et en toute confidentialité.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-5 py-3 rounded-xl border border-amber-300/40 hover:border-amber-300 text-amber-300"
        >
          Échanger avec nous →
        </a>
      </section>
    </main>
  );
              }
