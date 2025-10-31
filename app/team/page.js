// app/team/page.js

export const metadata = {
  title: "Team – DTE Holding AG",
  description:
    "Découvrez l’équipe dirigeante de DTE Holding AG : leadership, rigueur et exécution.",
};

export default function TeamPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* HERO */}
      <section
        aria-label="En-tête Team"
        className="relative overflow-hidden rounded-2xl mb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900/0" />
        <div
          className="h-64 md:h-80 w-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502784444185-1a1711e1b796?q=80&w=1600&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 flex items-end">
          <div className="p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Notre équipe
            </h1>
            <p className="mt-3 text-gray-300 md:max-w-3xl">
              Des dirigeants expérimentés combinant vision stratégique,
              excellence opérationnelle et gouvernance exigeante.
            </p>
          </div>
        </div>
      </section>

      {/* GRID MEMBRES */}
      <section aria-label="Membres de l’équipe" className="space-y-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Daniel */}
          <article className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-xl">
            <div className="text-xs uppercase tracking-widest text-amber-300">
              CEO
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Daniel Thomas Eggenberger
            </h3>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
              Direction générale, vision long terme et gouvernance. Focalisé sur
              la création de valeur durable via une allocation disciplinée du
              capital et l’excellence d’exécution.
            </p>
          </article>

          {/* Navneet */}
          <article className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-xl">
            <div className="text-xs uppercase tracking-widest text-amber-300">
              COO
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Navneet Patel
            </h3>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
              Opérations, processus et performance. Mise en place de systèmes
              robustes, due diligence opérationnelle et pilotage de la
              croissance.
            </p>
          </article>

          {/* Adam */}
          <article className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-xl">
            <div className="text-xs uppercase tracking-widest text-amber-300">
              CFO
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-white">Adam Ofer</h3>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
              Finance, contrôle des risques et structuration. Discipline
              financière, reporting clair et allocation optimale des
              ressources.
            </p>
          </article>
        </div>

        {/* Valeurs / baseline */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-amber-300 text-sm">01</div>
            <h4 className="mt-2 text-lg font-semibold text-white">
              Rigueur & gouvernance
            </h4>
            <p className="mt-2 text-gray-300 text-sm">
              Comités, processus, contrôle des risques et indépendance d’esprit.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-amber-300 text-sm">02</div>
            <h4 className="mt-2 text-lg font-semibold text-white">
              Orientation valeur
            </h4>
            <p className="mt-2 text-gray-300 text-sm">
              Focus ROI, impact durable, exécution mesurable.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-amber-300 text-sm">03</div>
            <h4 className="mt-2 text-lg font-semibold text-white">
              Confidentialité
            </h4>
            <p className="mt-2 text-gray-300 text-sm">
              Standards suisses, confidentialité absolue et éthique de haut
              niveau.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
