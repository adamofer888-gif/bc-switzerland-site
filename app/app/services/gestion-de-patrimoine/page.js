// app/services/gestion-de-patrimoine/page.js

export const metadata = {
  title: "Gestion de patrimoine | DTE HOLDING AG",
  description:
    "Gestion globale du patrimoine : allocation d’actifs, fiscalité, transmission, gouvernance. Accompagnement suisse depuis 2011.",
};

export default function GestionPatrimoine() {
  return (
    <main className="space-y-10">
      {/* Hero */}
      <section className="rounded-2xl border border-white/10 p-8 md:p-12 bg-gradient-to-b from-white/5 to-transparent">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Gestion de patrimoine
        </h1>
        <p className="mt-3 max-w-3xl text-gray-300">
          Une stratégie globale et disciplinée : allocation d’actifs, gouvernance,
          fiscalité et transmission. Notre approche allie prudence, clarté et
          performance ajustée au risque.
        </p>
      </section>

      {/* Pilars */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            t: "Allocation & stratégie",
            d: "Construction de portefeuilles multi-actifs (actions, obligations, or, alternatifs) avec objectifs clairs et contraintes mesurées.",
          },
          {
            t: "Fiscalité & transmission",
            d: "Optimisation du cadre fiscal et préparation de la transmission (trusts, fondations, sociétés), en coordination avec vos conseils.",
          },
          {
            t: "Gouvernance & reporting",
            d: "Comités de suivi, charte d’investissement, reporting transparent (mensuel/trimestriel) et contrôle des risques.",
          },
        ].map((c, i) => (
          <div key={i} className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-xl font-medium text-white">{c.t}</h3>
            <p className="mt-2 text-gray-300">{c.d}</p>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="rounded-2xl border border-white/10 p-6">
        <h2 className="text-2xl font-semibold">Notre démarche</h2>
        <ol className="mt-4 grid md:grid-cols-4 gap-4 text-gray-300">
          {[
            "Découverte & objectifs",
            "Audit & allocation cible",
            "Mise en place & gouvernance",
            "Suivi & rééquilibrages",
          ].map((s, i) => (
            <li
              key={i}
              className="rounded-xl border border-white/10 p-4"
            >
              <span className="text-white font-medium">Étape {i + 1}</span>
              <p className="mt-1">{s}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium text-white">Parlons de votre stratégie</h3>
          <p className="text-gray-300">
            Un premier échange confidentiel pour comprendre vos enjeux.
          </p>
        </div>
        <a
          href="/#contact"
          className="rounded-xl px-5 py-3 bg-white text-black hover:bg-gray-100 transition"
        >
          Nous contacter
        </a>
      </section>
    </main>
  );
            }
