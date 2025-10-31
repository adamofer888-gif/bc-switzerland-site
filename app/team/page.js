// app/team/page.js
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Team — DTE Holding AG",
  description:
    "L’équipe dirigeante de DTE Holding AG : expérience, gouvernance et exécution au service de la performance.",
};

export default function TeamPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* active l’observer des animations */}
      <FadeIn />

      {/* === HERO === */}
      <section
        aria-label="En-tête Team"
        className="w-full h-72 rounded-2xl mb-16 fade-block"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* === Titre + intro === */}
      <div className="fade-block">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Notre équipe
        </h1>
        <p className="mt-4 text-gray-300 md:text-lg leading-relaxed max-w-3xl">
          Gouvernance exigeante, exécution opérationnelle et vision long terme.
          Nous combinons expérience des marchés, sélection rigoureuse et
          excellence produit pour créer une valeur durable.
        </p>
      </div>

      {/* === Cartes profils === */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 cards">
        <article className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl card fade-block">
          <div className="kicker">Direction générale</div>
          <h2 className="text-2xl font-semibold text-white card__title">
            Daniel Thomas Eggenberger
          </h2>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            <strong>CEO</strong>. Leadership stratégique, allocation du capital,
            relations investisseurs et vision à long terme. Focalisé sur la
            création de valeur mesurable et la gouvernance de haut niveau.
          </p>
          <div className="hr" />
          <a href="/contact" className="inline-block mt-4 font-medium hover:underline">
            Contacter la direction →
          </a>
        </article>

        <article className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl card fade-block">
          <div className="kicker">Opérations</div>
          <h2 className="text-2xl font-semibold text-white card__title">
            Navneet Patel
          </h2>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            <strong>COO</strong>. Excellence opérationnelle, structuration des
            deals, due diligence et suivi board. Met en musique les priorités
            stratégiques avec rigueur et tempo.
          </p>
          <div className="hr" />
          <a href="/contact" className="inline-block mt-4 font-medium hover:underline">
            Échanger opérations →
          </a>
        </article>

        <article className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl card fade-block">
          <div className="kicker">Finance</div>
          <h2 className="text-2xl font-semibold text-white card__title">
            Adam Ofer
          </h2>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            <strong>CFO</strong>. Pilotage financier, contrôle des risques,
            reporting et optimisation capital/produit. Vision chiffres &
            exécution, au service d’une croissance saine.
          </p>
          <div className="hr" />
          <a href="/contact" className="inline-block mt-4 font-medium hover:underline">
            Parler finance →
          </a>
        </article>
      </div>

      {/* === Valeurs / piliers === */}
      <section className="mt-16 section fade-block">
        <h2 className="h2 text-white">Notre façon d’opérer</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="muted">01</div>
            <h3 className="mt-2 font-semibold text-white">Gouvernance & contrôle</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Discipline d’allocation, suivi des risques et exigence de
              conformité.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="muted">02</div>
            <h3 className="mt-2 font-semibold text-white">Sélection rigoureuse</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Thèses tech/fintech, due diligence, structuration et suivi board.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="muted">03</div>
            <h3 className="mt-2 font-semibold text-white">Exécution produit</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Plateformes, automatisation, data & reporting — design élégant,
              exécution rapide.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="mt-16 fade-block">
        <div className="rounded-2xl border border-white/10 p-6 md:p-8 bg-white/5">
          <div className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Un projet à discuter ?
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
            Échangeons en toute confidentialité.
          </h2>
          <a href="/contact" className="btn btn--gold mt-4 inline-block">
            Contacter l’équipe →
          </a>
        </div>
      </section>
    </main>
  );
        }
