// app/apropos/page.js
import "./apropos.css";

export const metadata = {
  title: "À propos – BC Switzerland GmbH",
  description:
    "BC Switzerland GmbH, société basée à Zug, accompagne entreprises, dirigeants et investisseurs avec une approche suisse structurée et confidentielle.",
};

export default function Apropos() {
  return (
    <main className="apropos-page">

      {/* HERO */}
      <section className="ap-hero">
        <div className="ap-hero__inner">
          <span className="eyebrow">BC Switzerland GmbH · Zug</span>
          <h1>À propos</h1>
          <p className="lead">
            BC Switzerland GmbH accompagne des entreprises, dirigeants et investisseurs
            dans leurs décisions structurantes. Notre rôle : apporter de la clarté,
            de la structure et un accompagnement professionnel dans la durée.
          </p>
        </div>
      </section>

      {/* IDENTITÉ & CADRE */}
      <section className="ap-cred">
        <div className="ap-cred__wrap">
          <div className="ap-cred__item">
            <div className="kpi">BC Switzerland GmbH</div>
            <div className="kpiLabel">Société suisse à Zug</div>
          </div>
          <div className="ap-cred__item">
            <div className="kpi">Baarerstrasse 53</div>
            <div className="kpiLabel">6300 Zug · Suisse</div>
          </div>
          <div className="ap-cred__item">
            <div className="kpi">CHE-329.829.736</div>
            <div className="kpiLabel">RC & TVA / UID</div>
          </div>
          <div className="ap-cred__item">
            <div className="kpi">Depuis 2013</div>
            <div className="kpiLabel">Expérience & continuité</div>
          </div>
        </div>
      </section>

      {/* NOTRE RÔLE */}
      <section className="ap-section">
        <h2>Notre rôle</h2>
        <p>
          Nous intervenons lorsque des dirigeants, des actionnaires ou des investisseurs
          doivent prendre des décisions importantes : structuration, organisation,
          développement, repositionnement, entrée de nouveaux partenaires, etc.
        </p>
        <p>
          BC Switzerland GmbH n’est pas un simple prestataire ponctuel. Nous jouons un rôle
          de partenaire structurant, avec une approche pragmatique, documentée et
          orientée exécution.
        </p>
      </section>

      {/* PILIERS */}
      <section className="ap-section ap-section--alt">
        <h2>Nos piliers</h2>
        <div className="ap-cards">
          <article className="ap-card">
            <h3>Clarté</h3>
            <p>
              Clarifier la situation, les enjeux, les risques et les priorités pour prendre
              des décisions alignées et compréhensibles par toutes les parties.
            </p>
          </article>
          <article className="ap-card">
            <h3>Structure</h3>
            <p>
              Organiser les échanges, la documentation, les étapes et les responsabilités
              pour que chaque projet avance de manière professionnelle.
            </p>
          </article>
          <article className="ap-card">
            <h3>Confidentialité</h3>
            <p>
              Travail discret, accès limité aux informations, et respect des cadres
              juridiques suisses et internationaux.
            </p>
          </article>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="ap-section">
        <h2>Notre manière de travailler</h2>
        <div className="ap-steps">
          <div className="step">
            <span className="stepNo">01</span>
            <h4>Comprendre</h4>
            <p>Analyse de la situation, des acteurs, des objectifs et des contraintes.</p>
          </div>
          <div className="step">
            <span className="stepNo">02</span>
            <h4>Structurer</h4>
            <p>Proposition de trajectoire, de rôles, de calendrier et de livrables.</p>
          </div>
          <div className="step">
            <span className="stepNo">03</span>
            <h4>Accompagner</h4>
            <p>Présence aux moments clés, coordination avec les parties prenantes.</p>
          </div>
          <div className="step">
            <span className="stepNo">04</span>
            <h4>Suivre</h4>
            <p>Suivi dans le temps, ajustements, points réguliers avec la direction.</p>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="ap-section ap-section--alt">
        <h2>Ce que nous garantissons</h2>
        <ul className="ap-list">
          <li>Une approche sobre, structurée et professionnelle.</li>
          <li>Une communication claire avec les dirigeants et les investisseurs.</li>
          <li>Un cadre suisse : fiabilité, confidentialité et rigueur.</li>
          <li>Un accompagnement dans la durée, et non un simple document unique.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="ap-cta">
        <h3>Échanger avec BC Switzerland GmbH</h3>
        <p>
          Vous souhaitez structurer un projet, une relation avec des investisseurs ou une
          nouvelle phase pour votre société ?
        </p>
        <a href="/contact" className="btn btn--gold">
          Contacter BC Switzerland →
        </a>
      </section>
    </main>
  );
            }
