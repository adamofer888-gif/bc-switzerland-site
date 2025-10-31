// app/services/page.js

export const metadata = {
  title: "Services — DTE Holding AG",
  description:
    "Gestion de patrimoine, capital à risque et développement digital. DTE Holding AG — approche sur-mesure, discipline et élégance.",
};

export default function ServicesPage() {
  return (
    <main className="relative">
      {/* === HERO (montagnes suisses) === */}
      <section
        aria-label="Hero visuel Services"
        className="hero rounded-2xl mb-12 fade-block fade-in"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop')", // Alpes suisses
        }}
      >
        <div className="hero__grid container">
          <div>
            <div className="kicker">Nos services</div>
            <h1 className="h1">
              Gestion de patrimoine,<br className="hidden md:block" />
              capital à risque & développement digital.
            </h1>
            <p className="lead max-w-3xl">
              DTE Holding AG accompagne familles, dirigeants et entrepreneurs
              avec une approche sur-mesure : stratégie, contrôle des risques,
              exécution impeccable.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="btn btn--gold">
                Parler à un conseiller →
              </a>
              <a href="#patrimoine" className="btn btn--ghost">
                Découvrir les domaines
              </a>
            </div>
          </div>

          {/* Image décorative gérée par background; on laisse la colonne vide pour la mise en page */}
          <div aria-hidden="true" />
        </div>

        <small className="block text-[.8rem] text-slate-400 mt-6 ml-6">
          Crédits photo : Alpes suisses
        </small>
      </section>

      {/* === CARTES DE DOMAINES === */}
      <section id="patrimoine" className="section fade-block fade-in">
        <div className="container">
          <div className="cards">
            {/* Gestion de patrimoine */}
            <article className="card">
              <div className="kicker">Gestion de patrimoine</div>
              <h2 className="card__title">Allocation & relation dédiée</h2>
              <p className="card__muted">
                Allocation disciplinée, diversification, structuration d’actifs,
                optimisation fiscale et transmission. Une approche sur-mesure
                pour faire croître et protéger votre capital.
              </p>
              <div className="hr" />
              <a href="/contact" className="btn btn--link">
                En savoir plus →
              </a>
            </article>

            {/* Capital à risque */}
            <article className="card">
              <div className="kicker">Capital à risque</div>
              <h2 className="card__title">Sélection & gouvernance</h2>
              <p className="card__muted">
                Thèses fintech / deeptech / SaaS, due diligence, structuration
                des deals, gouvernance et suivi board.
              </p>
              <div className="hr" />
              <a href="/contact" className="btn btn--link">
                Nous contacter →
              </a>
            </article>

            {/* Développement digital */}
            <article className="card">
              <div className="kicker">Développement digital</div>
              <h2 className="card__title">Produit & automatisation</h2>
              <p className="card__muted">
                Plateformes web, intégrations cloud, sécurité, data & reporting.
                Design élégant, exécution rapide, optimisation UX.
              </p>
              <div className="hr" />
              <a href="/contact" className="btn btn--link">
                Voir le détail →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* === PILIERS D’EXÉCUTION (style premium) === */}
      <section className="section fade-block fade-in">
        <div className="container">
          <h2 className="title">Nos piliers d’exécution</h2>

          <div className="footer__grid gap-6 mt-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-amber-300 font-semibold tracking-widest text-sm">
                0&nbsp;1
              </div>
              <h3 className="text-xl font-semibold mt-2">
                Gestion de patrimoine
              </h3>
              <p className="mt-2 text-slate-300">
                Allocation disciplinée, contrôle des risques, relation client
                dédiée.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-amber-300 font-semibold tracking-widest text-sm">
                0&nbsp;2
              </div>
              <h3 className="text-xl font-semibold mt-2">Capital à risque</h3>
              <p className="mt-2 text-slate-300">
                Thèses fintech / deeptech / SaaS, sélection, due diligence,
                gouvernance.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-amber-300 font-semibold tracking-widest text-sm">
                0&nbsp;3
              </div>
              <h3 className="text-xl font-semibold mt-2">Conseil stratégique</h3>
              <p className="mt-2 text-slate-300">
                Vision produit, M&A, structuration, excellence opérationnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="section fade-block fade-in">
        <div className="container">
          <div className="bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="kicker">Un projet à lancer ou à accélérer ?</div>
              <h3 className="text-2xl font-semibold mt-1">
                Nous répondons rapidement et en toute confidentialité.
              </h3>
            </div>
            <a href="/contact" className="btn btn--gold">
              Échanger avec nous →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
        }
