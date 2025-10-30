// app/services/capital-a-risque/page.js

export const metadata = {
  title: "Capital à risque | DTE HOLDING AG",
  description:
    "Accès encadré au capital-risque et aux opportunités privées/alternatives. Due diligence rigoureuse, gestion des risques et reporting.",
};

export default function CapitalRisque() {
  return (
    <main className="space-y-10">
      {/* Hero */}
      <section className="rounded-2xl border border-white/10 p-8 md:p-12 bg-gradient-to-b from-white/5 to-transparent">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Capital à risque
        </h1>
        <p className="mt-3 max-w-3xl text-gray-300">
          Sélection et accès à des opportunités privées, venture et solutions
          alternatives, avec un cadre de diligence et de contrôle précis.
        </p>
      </section>

      {/* Thèses */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            t: "Sourcing sélectif",
            d: "Accès à des dossiers triés (seed à growth), co-investissements, fonds spécialisés et opportunités secondaires.",
          },
          {
            t: "Due diligence",
            d: "Analyse équipe/produit/marché, structure juridique, term sheet, risques, valorisation et scénarios de sortie.",
          },
          {
            t: "Cadre & contrôle",
            d: "Ticket adapté, diversification, garde, gouvernance et reporting. Discipline d’allocation et de liquidité.",
          },
        ].map((c, i) => (
          <div key={i} className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-xl font-medium text-white">{c.t}</h3>
            <p className="mt-2 text-gray-300">{c.d}</p>
          </div>
        ))}
      </section>

      {/* Exemples (indicatifs) */}
      <section className="rounded-2xl border border-white/10 p-6">
        <h2 className="text-2xl font-semibold">Axes d’investissement (exemples)</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {[
            {
              t: "Tech / IA appliquée",
              d: "B2B SaaS, data infra, outils IA à forte valeur ajoutée.",
            },
            {
              t: "Fintech & crypto-infra",
              d: "Briques d’infrastructure, garde, conformité, paiements.",
            },
            {
              t: "Santé & med-tech",
              d: "Diagnostics, outils logiciels, dispositifs connectés.",
            },
            {
              t: "Climat / énergie",
              d: "Efficience énergétique, stockage, matériaux durables.",
            },
          ].map((x, i) => (
            <div key={i} className="rounded-xl border border-white/10 p-4 text-gray-300">
              <p className="text-white font-medium">{x.t}</p>
              <p className="mt-1">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Informations fournies à titre indicatif, non constitutives d’une offre d’investissement.
        </p>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium text-white">Accéder au deal-flow</h3>
          <p className="text-gray-300">
            Explorons ensemble des opportunités adaptées à votre profil de risque.
          </p>
        </div>
        <a
          href="/#contact"
          className="rounded-xl px-5 py-3 bg-white text-black hover:bg-gray-100 transition"
        >
          Prendre rendez-vous
        </a>
      </section>
    </main>
  );
          }
