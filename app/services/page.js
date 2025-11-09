// app/services/page.js
import "./services.css";

export const metadata = {
  title: "Services — DTE Holding AG",
  description:
    "Gestion patrimoniale, capital privé et stratégie financière. Processus discipliné, gouvernance suisse et contrôle du risque.",
};

export default function Services() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="sv-hero">
        <div className="sv-hero__inner">
          <span className="eyebrow">Expertises</span>
          <h1>Nos services</h1>
          <p className="lead">
            Nous accompagnons nos clients dans la gestion de capital, l’allocation d’actifs
            et la structuration stratégique. Le tout avec transparence, discipline
            et confidentialité suisse.
          </p>
        </div>
      </section>

      {/* 3 DOMAINES */}
      <section className="sv-section">
        <h2>Domaines de compétence</h2>
        <div className="sv-cards">

          <article className="sv-card">
            <h3>Gestion Patrimoniale</h3>
            <p>
              Allocation d’actifs disciplinée, analyse du risque, contrôle de la liquidité et reporting clair.
              Objectif : préserver, optimiser et sécuriser votre capital sur le long terme.
            </p>
          </article>

          <article className="sv-card">
            <h3>Capital Privé</h3>
            <p>
              Sélection d’opportunités rigoureuses, analyse fondamentale, structuration et suivi d’exécution.
              Approche sélective orientée création de valeur réelle.
            </p>
          </article>

          <article className="sv-card">
            <h3>Stratégie Financière</h3>
            <p>
              Conseil sur mesure : structuration patrimoniale, gestion des risques, scénarios, gouvernance
              et continuité financière.
            </p>
          </article>

        </div>
      </section>

      {/* AVANTAGES */}
      <section className="sv-section sv-section--alt">
        <h2>Pourquoi DTE Holding AG ?</h2>
        <ul className="sv-list">
          <li>Juridiction suisse · confidentialité & gouvernance</li>
          <li>Processus documentés et décisions traçables</li>
          <li>Suivi, reporting et transparence des opérations</li>
          <li>Exécution disciplinée & gestion du risque</li>
          <li>Approche indépendante et orientée résultats</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="sv-cta">
        <h3>Discuter d’un projet ou d’un portefeuille</h3>
        <p>Premier contact confidentiel avec la direction.</p>
        <a href="/contact" className="btn btn--gold">Contact →</a>
      </section>

    </main>
  );
        }
