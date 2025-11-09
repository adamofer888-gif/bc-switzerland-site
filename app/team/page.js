// app/team/page.js
import "./team.css";

export const metadata = {
  title: "Team — DTE Holding AG",
  description:
    "Direction et principes d’exécution : gouvernance suisse, confidentialité, discipline d’investissement.",
};

export default function Team() {
  return (
    <main className="team-page">

      {/* HERO */}
      <section className="tm-hero">
        <div className="tm-hero__inner">
          <span className="eyebrow">Direction</span>
          <h1>Leadership & gouvernance</h1>
          <p className="lead">
            Une direction resserrée, impliquée opérationnellement, avec une culture d’exécution
            et de contrôle du risque conforme aux standards suisses.
          </p>
        </div>
      </section>

      {/* CARTES MEMBRES */}
      <section className="tm-section">
        <h2>Équipe dirigeante</h2>

        <div className="tm-grid">
          <article className="tm-card">
            <div className="avatar">DE</div>
            <h3>DANIEL THOMAS EGGENBERGER</h3>
            <p className="role">Chief Executive Officer</p>
            <p className="bio">
              Stratégie, relation investisseurs et supervision de l’exécution. Vision long terme,
              allocation disciplinée et gouvernance.
            </p>
          </article>

          <article className="tm-card">
            <div className="avatar">NP</div>
            <h3>NAVNEET PATEL</h3>
            <p className="role">Chief Operating Officer</p>
            <p className="bio">
              Opérations, processus internes, conformité et contrôle opérationnel. Efficacité
              d’exécution et traçabilité des décisions.
            </p>
          </article>

          <article className="tm-card">
            <div className="avatar">AO</div>
            <h3>ADAM OFER</h3>
            <p className="role">Chief Financial Officer</p>
            <p className="bio">
              Ingénierie financière, structuration, modélisation et reporting. Discipline financière
              et gestion du risque.
            </p>
          </article>
        </div>
      </section>

      {/* PRINCIPES */}
      <section className="tm-section tm-section--alt">
        <h2>Principes de direction</h2>
        <ul className="tm-list">
          <li>Gouvernance et conformité de niveau suisse</li>
          <li>Processus documentés et décisions traçables</li>
          <li>Confidentialité stricte et accès restreint aux informations</li>
          <li>Orientation résultats et contrôle du risque</li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section className="tm-cta">
        <h3>Échanger avec la direction</h3>
        <p>Contact confidentiel et réponse rapide.</p>
        <a href="/contact" className="btn btn--gold">Contacter DTE →</a>
      </section>
    </main>
  );
        }
