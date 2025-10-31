// app/team/page.js
export const metadata = {
  title: "Team — DTE Holding AG",
  description:
    "Notre équipe dirigeante : expertise en gestion d’actifs, capital-risque et développement digital.",
};

export default function TeamPage() {
  return (
    <main className="relative">
      {/* HERO */}
      <section aria-label="En-tête Team" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(60rem 60rem at 10% -10%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(50rem 50rem at 110% -20%, rgba(255,255,255,0.06), transparent 60%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Leadership
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Notre équipe dirigeante
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300 md:text-lg leading-relaxed">
            Une gouvernance exigeante, une vision long terme et une exécution
            précise. Nous combinons finance, technologie et stratégie pour
            transformer les ambitions en résultats mesurables.
          </p>
        </div>
      </section>

      {/* TEAM CARDS */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {/* CEO */}
            <article className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-slate-400">
                Chief Executive Officer
              </div>
              <h2 className="mt-1 text-2xl font-semibold text-white">
                Daniel Thomas Eggenberger
              </h2>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Stratégie et vision globale de DTE Holding AG. Supervise
                l’allocation du capital, la gouvernance et les partenariats
                clés. Conduit les initiatives de croissance et l’excellence
                opérationnelle avec une approche disciplinée et orientée
                performance.
              </p>
            </article>

            {/* COO */}
            <article className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-slate-400">
                Chief Operating Officer
              </div>
              <h2 className="mt-1 text-2xl font-semibold text-white">
                Navneet Patel
              </h2>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Pilote l’exécution opérationnelle, l’amélioration continue et la
                gestion des programmes. Aligne les équipes, les processus et la
                technologie pour délivrer une qualité constante et des délais
                maîtrisés.
              </p>
            </article>

            {/* CFO */}
            <article className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-slate-400">
                Chief Financial Officer
              </div>
              <h2 className="mt-1 text-2xl font-semibold text-white">
                Adam Ofer
              </h2>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Direction financière, contrôle des risques et structuration des
                opérations. Met en place une discipline budgétaire, des
                tableaux de bord précis et une gouvernance financière au service
                d’investissements performants et durables.
              </p>
            </article>
          </div>

          {/* CTA */}
          <div className="mt-12 flex items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              DTE Holding AG • Wollerau, Suisse
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/15 transition"
            >
              Contacter la direction →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
        }
