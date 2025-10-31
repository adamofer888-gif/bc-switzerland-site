// app/team/page.js
import Link from "next/link";
import "./team.css";

export const metadata = {
  title: "Team – DTE Holding AG",
  description:
    "Direction expérimentée combinant vision stratégique, excellence opérationnelle et gouvernance exigeante.",
};

export default function TeamPage() {
  return (
    <main>
      {/* HERO */}
      <section
        aria-label="En-tête Team"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/70 to-slate-900/0" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519680772-8b0b3e7fe1f3?q=80&w=1600&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative mx-auto px-6 py-24 md:py-28">
          <div className="kicker">Notre équipe</div>
          <h1 className="h1 text-white">Des dirigeants au service de l’excellence</h1>
          <p className="lead max-w-3xl text-slate-300 md:text-lg">
            Vision stratégique, exécution opérationnelle, gouvernance exigeante. Une équipe
            dédiée à la création de valeur durable.
          </p>

          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="btn btn--gold">
              Contacter le board →
            </Link>
            <a
              href="#principes"
              className="btn btn--ghost"
            >
              Nos principes
            </a>
          </div>
        </div>
      </section>

      {/* CARTES MEMBRES */}
      <section className="section">
        <div className="container">
          <div className="cards">
            {/* CEO */}
            <article className="card fade-block">
              <div className="kicker">CEO</div>
              <h2 className="card__title">Daniel Thomas Eggenberger</h2>
              <p className="card__muted">
                Direction générale, vision long terme &amp; gouvernance. Focalisé sur la création
                de valeur durable via une allocation disciplinée du capital et l’excellence
                d’exécution.
              </p>
            </article>

            {/* COO */}
            <article className="card fade-block">
              <div className="kicker">COO</div>
              <h2 className="card__title">Navneet Patel</h2>
              <p className="card__muted">
                Opérations, processus &amp; performance. Systèmes robustes, due diligence
                opérationnelle, pilotage de la croissance.
              </p>
            </article>

            {/* CFO */}
            <article className="card fade-block">
              <div className="kicker">CFO</div>
              <h2 className="card__title">Adam Ofer</h2>
              <p className="card__muted">
                Finance, contrôle des risques &amp; structuration. Discipline financière,
                reporting clair et allocation optimale des ressources.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRINCIPES (valeurs) */}
      <section id="principes" className="section">
        <div className="container">
          <h2 className="h2">Nos principes de direction</h2>

          <div className="grid-3 fade-block">
            <div className="pill">
              <span className="pill__index">01</span>
              <h3 className="pill__title">Rigueur &amp; gouvernance</h3>
              <p className="pill__text">
                Comités, processus, contrôle des risques et indépendance d’esprit.
              </p>
            </div>

            <div className="pill">
              <span className="pill__index">02</span>
              <h3 className="pill__title">Orientation valeur</h3>
              <p className="pill__text">
                Focus ROI, impact durable, exécution mesurable.
              </p>
            </div>

            <div className="pill">
              <span className="pill__index">03</span>
              <h3 className="pill__title">Confidentialité</h3>
              <p className="pill__text">
                Standards suisses, confidentialité absolue et éthique de haut niveau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--panel fade-block">
        <div className="container">
          <div className="cta">
            <div>
              <div className="kicker">Échanger avec la direction</div>
              <h3 className="cta__title">Nous répondons rapidement et en toute confidentialité.</h3>
            </div>
            <div>
              <Link href="/contact" className="btn btn--gold">
                Contacter le board →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
        }
