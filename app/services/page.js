// app/services/page.js
import "./services.css";

export const metadata = {
  title: "Services – BC Switzerland GmbH",
  description:
    "Accompagnement stratégique, structuration et gestion de projets pour entreprises, dirigeants et investisseurs.",
};

export default function Services() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="sv-hero">
        <div className="sv-hero__inner">
          <span className="eyebrow">Services</span>
          <h1>Ce que nous faisons</h1>
          <p className="lead">
            BC Switzerland GmbH accompagne des entreprises, des dirigeants et des investisseurs
            dans leurs besoins de structuration, d’organisation et de gestion de projets.
            L’objectif : apporter de la clarté, de la méthode et une exécution fiable.
          </p>
        </div>
      </section>

      {/* DOMAINES PRINCIPAUX */}
      <section className="sv-section">
        <h2>Domaines d’intervention</h2>
        <div className="sv-cards">
          <article className="sv-card">
            <h3>Accompagnement stratégique</h3>
            <p>
              Analyse de la situation, définition de la trajectoire, cadrage des enjeux
              et accompagnement des dirigeants dans la prise de décision.
            </p>
          </article>

          <article className="sv-card">
            <h3>Structuration & organisation</h3>
            <p>
              Structuration de sociétés, clarification des rôles, gouvernance, coordination
              avec les partenaires juridiques, fiscaux et financiers.
            </p>
          </article>

          <article className="sv-card">
            <h3>Projets & investisseurs</h3>
            <p>
              Cadrage de projets, préparation des éléments clés, mise en relation ciblée
              et suivi des échanges entre porteurs de projets et investisseurs.
            </p>
          </article>
        </div>
      </section>

      {/* TYPOLOGIE D'INTERVENTIONS */}
      <section className="sv-section sv-section--alt">
        <h2>Typologie d’interventions</h2>
        <ul className="sv-list">
          <li>Accompagnement de dirigeants dans une phase de croissance ou de transition.</li>
          <li>Structuration de nouveaux véhicules, entités ou structures d’investissement.</li>
          <li>Préparation de projets avant présentation à des investisseurs ou partenaires.</li>
          <li>Coordination entre parties prenantes (juridique, fiscal, financier, opérationnel).</li>
          <li>Suivi structuré de projets sur plusieurs mois ou années.</li>
        </ul>
      </section>

      {/* MÉTHODE */}
      <section className="sv-section">
        <h2>Notre manière de travailler</h2>
        <div className="sv-steps">
          <div className="sv-step">
            <span className="sv-step-no">01</span>
            <h4>Compréhension</h4>
            <p>
              Analyse de la situation, des enjeux, des acteurs et des objectifs. Clarification
              de ce qui est réaliste et des priorités.
            </p>
          </div>
          <div className="sv-step">
            <span className="sv-step-no">02</span>
            <h4>Structuration</h4>
            <p>
              Mise en place d’une structure claire : rôles, calendrier, livrables, documentation
              et gouvernance.
            </p>
          </div>
          <div className="sv-step">
            <span className="sv-step-no">03</span>
            <h4>Accompagnement</h4>
            <p>
              Présence aux moments clés, échanges avec les parties prenantes, ajustements
              selon l’évolution de la situation.
            </p>
          </div>
          <div className="sv-step">
            <span className="sv-step-no">04</span>
            <h4>Suivi</h4>
            <p>
              Points réguliers, suivi des engagements, et continuité dans la relation avec
              la direction ou les investisseurs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="sv-cta">
        <h3>Parler d’un projet ou d’un besoin spécifique</h3>
        <p>
          Vous souhaitez structurer une situation, préparer un projet, ou organiser
          la relation avec des investisseurs ?
        </p>
        <a href="/contact" className="btn btn--gold">
          Contacter BC Switzerland →
        </a>
      </section>
    </main>
  );
        }
