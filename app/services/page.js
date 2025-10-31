// app/services/page.js
export const metadata = {
  title: "Services — DTE Holding AG",
  description:
    "Gestion de patrimoine, capital à risque et développement digital — Exécution suisse, relation client de premier ordre.",
};

export default function ServicesPage() {
  return (
    <main className="relative">

      {/* HERO VISUEL (Alpes suisses) */}
      <section aria-label="En-tête Services" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900" />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Expertise • Discrétion • Exécution
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Nos services
          </h1>
          <p className="mt-5 max-w-3xl text-slate-300 md:text-lg leading-relaxed">
            DTE Holding AG accompagne familles, dirigeants et entrepreneurs
            avec une approche sur-mesure : gestion de patrimoine,
            capital à risque et développement digital.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact" className="rounded-xl bg-amber-400/90 text-slate-900 px-5 py-3 font-medium hover:bg-amber-300 transition">
              Parler à un conseiller
            </a>
            <a href="#domains" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Découvrir les domaines
            </a>
          </div>
        </div>
      </section>

      {/* CARTES RÉSUMÉ (3 piliers) */}
      <section className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-6">
          <article className="rounded-2xl border border-white/12 bg-white/5 backdrop-blur p-6">
            <div className="text-xs uppercase tracking-widest text-slate-400">Gestion de patrimoine</div>
            <h3 className="mt-2 text-xl font-semibold text-white">Allocation & relation dédiée</h3>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              Allocation disciplinée, diversification, gouvernance des risques et
              relation client prioritaire.
            </p>
            <a href="#wealth" className="inline-block mt-4 text-amber-300 hover:text-amber-200 font-medium">En savoir plus →</a>
          </article>

          <article className="rounded-2xl border border-white/12 bg-white/5 backdrop-blur p-6">
            <div className="text-xs uppercase tracking-widest text-slate-400">Capital à risque</div>
            <h3 className="mt-2 text-xl font-semibold text-white">Sélection & gouvernance</h3>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              Thèses fintech / deeptech / SaaS, due diligence, structuration des deals et suivi board.
            </p>
            <a href="#vc" className="inline-block mt-4 text-amber-300 hover:text-amber-200 font-medium">Découvrir →</a>
          </article>

          <article className="rounded-2xl border border-white/12 bg-white/5 backdrop-blur p-6">
            <div className="text-xs uppercase tracking-widest text-slate-400">Développement digital</div>
            <h3 className="mt-2 text-xl font-semibold text-white">Produit & automatisation</h3>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              Plateformes web, intégrations cloud, sécurité, data & reporting. Design élégant, exécution rapide.
            </p>
            <a href="#digital" className="inline-block mt-4 text-amber-300 hover:text-amber-200 font-medium">Voir le détail →</a>
          </article>
        </div>
      </section>

      {/* SECTION DÉTAILLÉE — GESTION DE PATRIMOINE */}
      <section id="wealth" className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <div
              className="h-72 md:h-96 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Wealth Management</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Gestion de patrimoine</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Nous sécurisons, structurons et optimisons les actifs avec une discipline d’allocation
              et un reporting clair. Relation directe, confidentialité et disponibilité.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-300 text-sm">
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Allocation stratégique</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Diversification multi-actifs</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Gestion du risque</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Structuration & transmission</li>
            </ul>
            <div className="mt-5">
              <a href="/contact" className="rounded-xl bg-amber-400/90 text-slate-900 px-5 py-3 font-medium hover:bg-amber-300 transition">
                Parler à un conseiller
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DÉTAILLÉE — CAPITAL À RISQUE */}
      <section id="vc" className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-widest text-slate-400">Venture / Capital à risque</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Capital à risque</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Sélection de projets innovants à fort potentiel, structuration des tours,
              suivi de la gouvernance et accompagnement produit / go-to-market.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-300 text-sm">
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Thèses fintech / deeptech / SaaS</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Due diligence & data room</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Structuration & co-invest</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Board & reporting</li>
            </ul>
            <div className="mt-5">
              <a href="/contact" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
                Accéder au deal-flow
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-white/10">
            <div
              className="h-72 md:h-96 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION DÉTAILLÉE — DÉVELOPPEMENT DIGITAL */}
      <section id="digital" className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <div
              className="h-72 md:h-96 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1551281044-8af4e6624178?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Produit & Plateformes</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Développement digital</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Conception et pilotage de produits digitaux : sites, apps, automatisations,
              intégrations cloud, sécurité et analytics.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-300 text-sm">
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Design & UX premium</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Intégrations cloud & API</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Automatisation & data</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Sécurité & conformité</li>
            </ul>
            <div className="mt-5">
              <a href="/contact" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
                Discuter d’un projet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARTENAIRES & ACTIFS (badges texte, pas de logos pour éviter problèmes de droits) */}
      <section id="domains" className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <h3 className="text-xl font-semibold text-white">Partenaires & univers d’investissement</h3>
          <p className="mt-2 text-slate-400 text-sm">
            Exemples d’établissements et d’actifs avec lesquels nous pouvons collaborer.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="px-3 py-2 rounded-full border border-white/12 bg-white/5 text-slate-200 text-sm">UBS</span>
            <span className="px-3 py-2 rounded-full border border-white/12 bg-white/5 text-slate-200 text-sm">HSBC</span>
            <span className="px-3 py-2 rounded-full border border-white/12 bg-white/5 text-slate-200 text-sm">Bitcoin (BTC)</span>
            <span className="px-3 py-2 rounded-full border border-white/12 bg-white/5 text-slate-200 text-sm">Ethereum (ETH)</span>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Indications non-exclusives et purement informatives. Aucune promotion individualisée ou offre au public.
          </p>
        </div>
      </section>

    </main>
  );
        }
