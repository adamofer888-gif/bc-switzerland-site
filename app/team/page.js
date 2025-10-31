// app/team/page.js
import "./team.css";

export const metadata = {
  title: "Team – DTE Holding AG",
  description:
    "Notre équipe dirigeante : direction générale, opérations et finance. Exigence, gouvernance et exécution.",
};

export default function TeamPage() {
  return (
    <main className="container" style={{ paddingTop: "24px", paddingBottom: "48px" }}>
      {/* En-tête */}
      <section className="fade-block fade-in" style={{ marginBottom: "28px" }}>
        <h1 className="h1">Notre équipe</h1>
        <p className="lead" style={{ maxWidth: "820px" }}>
          Des dirigeants expérimentés combinant vision stratégique, excellence
          opérationnelle et gouvernance exigeante.
        </p>
      </section>

      {/* Cartes membres */}
      <section className="team-grid fade-block fade-in">
        <article className="member">
          <div className="member_role">CEO</div>
          <h3 className="member_name">Daniel Thomas Eggenberger</h3>
          <p className="member_bio">
            Direction générale, vision long terme et gouvernance. Focalisé sur la
            création de valeur durable via une allocation disciplinée du capital et
            l’excellence d’exécution.
          </p>
        </article>

        <article className="member">
          <div className="member_role">COO</div>
          <h3 className="member_name">Navneet Patel</h3>
          <p className="member_bio">
            Opérations, processus et performance. Mise en place de systèmes robustes,
            due diligence opérationnelle et pilotage de la croissance.
          </p>
        </article>

        <article className="member">
          <div className="member_role">CFO</div>
          <h3 className="member_name">Adam Ofer</h3>
          <p className="member_bio">
            Finance, contrôle des risques et structuration. Discipline financière,
            reporting clair et allocation optimale des ressources.
          </p>
        </article>
      </section>

      {/* Principes */}
      <section className="pillars fade-block fade-in">
        <div className="pillar">
          <div className="pillar_index">01</div>
          <h4 className="pillar_title">Rigueur & gouvernance</h4>
          <p className="pillar_text">
            Comités, processus, contrôle des risques et indépendance d’esprit.
          </p>
        </div>
        <div className="pillar">
          <div className="pillar_index">02</div>
          <h4 className="pillar_title">Orientation valeur</h4>
          <p className="pillar_text">
            Focus ROI, impact durable, exécution mesurable.
          </p>
        </div>
        <div className="pillar">
          <div className="pillar_index">03</div>
          <h4 className="pillar_title">Confidentialité</h4>
          <p className="pillar_text">
            Standards suisses, confidentialité absolue et éthique de haut niveau.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta fade-block fade-in">
        <h3 className="cta_title">Échanger avec la direction</h3>
        <p className="cta_text">
          Nous répondons rapidement et en toute confidentialité.
        </p>
        <a href="/contact" className="btn btn--gold">Contacter le board →</a>
      </section>
    </main>
  );
              }
