// app/services/page.js
export const metadata = {
  title: "Services — DTE Holding AG",
  description:
    "Capital à Risque, Développement Digital et Conseil Stratégique. Des solutions sur-mesure pour accélérer vos innovations.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" />
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Des services pensés pour <span className="opacity-90">accélérer</span> vos ambitions
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300 text-base md:text-lg">
            Nous combinons investissement, produit et technologie pour transformer
            les idées en résultats mesurables — avec exigence et élégance.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#offres"
              className="rounded-xl px-5 py-3 text-sm md:text-base font-medium bg-white/10 text-white hover:bg-white/20 backdrop-blur transition"
            >
              Découvrir nos offres
            </a>
            <a
              href="/contact"
              className="rounded-xl px-5 py-3 text-sm md:text-base font-medium bg-white text-slate-900 hover:bg-slate-100 transition"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section id="offres" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Nos domaines d’excellence
          </h2>
          <p className="mt-3 text-slate-600">
            Un accompagnement 360° : financement, stratégie, design & technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Capital à Risque */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 md:p-7 hover:shadow-xl transition">
            <div className="h-11 w-11 rounded-xl bg-slate-900/90 text-white grid place-items-center text-lg">
              ₿
            </div>
            <h3 className="mt-4 text-lg font-semibold">Capital à Risque</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Investissements early-stage, structure de deals, gouvernance et
              accès à notre réseau d’alliances. Focus : fintech, deeptech & SaaS.
            </p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2">
              <li>• Ticket flexible & co-investissement</li>
              <li>• Board, reporting & KPIs</li>
              <li>• Go-to-market & partenariats</li>
            </ul>
            <div className="mt-6">
              <a
                href="/services/capital-a-risque"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:opacity-80"
              >
                En savoir plus <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Développement Digital */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 md:p-7 hover:shadow-xl transition">
            <div className="h-11 w-11 rounded-xl bg-slate-900/90 text-white grid place-items-center text-lg">
              ⌘
            </div>
            <h3 className="mt-4 text-lg font-semibold">Développement Digital</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Produits web & mobiles sur-mesure, stack moderne, performances
              premium et sécurité de niveau entreprise.
            </p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2">
              <li>• Design system & UX research</li>
              <li>• Apps web / mobiles / APIs</li>
              <li>• Monitoring, SRE & conformité</li>
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:opacity-80"
              >
                Discuter d’un projet <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Conseil Stratégique */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 md:p-7 hover:shadow-xl transition">
            <div className="h-11 w-11 rounded-xl bg-slate-900/90 text-white grid place-items-center text-lg">
              ⚑
            </div>
            <h3 className="mt-4 text-lg font-semibold">Conseil Stratégique</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Alignement vision-produit, stratégie de croissance, M&A et
              structuration opérationnelle data-driven.
            </p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2">
              <li>• Vision, roadmap & OKR</li>
              <li>• Pricing, revenus & marchés</li>
              <li>• Due diligence & data room</li>
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:opacity-80"
              >
                Planifier un échange <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTHODOLOGIE */}
      <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-24">
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            Une méthode claire, des résultats concrets
          </h2>
          <div className="mt-6 grid md:grid-cols-4 gap-6">
            {[
              ["01. Diagnostic", "Audit rapide, objectifs & KPIs."],
              ["02. Design", "Architecture, expérience & sécurité."],
              ["03. Delivery", "Sprints courts, qualité mesurée."],
              ["04. Scale", "Observabilité, optimisation, croissance."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl bg-white border border-slate-200 p-5">
                <div className="text-sm font-medium text-slate-500">{title}</div>
                <div className="mt-1 text-sm text-slate-700">{desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 text-sm md:text-base hover:opacity-90 transition"
            >
              Lancer un échange stratégique <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* PREUVE SOCIALE (placeholder) */}
      <section className="max-w-6xl
