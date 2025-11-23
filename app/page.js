// app/page.js

import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "BC Switzerland GmbH – Conseil stratégique & accompagnement en Suisse",
  description:
    "BC Switzerland GmbH, société basée à Zug, accompagne entreprises et investisseurs dans leurs besoins stratégiques, financiers et de structuration.",
};

export default function Home() {
  return (
    <main className="home-page">
      {/* HERO PRINCIPAL */}
      <section className="hero-section">
        <div className="hero-inner">
          <span className="hero-eyebrow">BC Switzerland GmbH · Zug</span>
          <h1>Conseil stratégique & accompagnement pour entreprises et investisseurs</h1>
          <p className="hero-text">
            BC Switzerland GmbH accompagne des sociétés, dirigeants et investisseurs dans leurs
            décisions structurantes : stratégie, structuration, financement et organisation.
            Une approche suisse axée sur la clarté, la confidentialité et l’exécution.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="hero-btn-primary">
              Contacter BC Switzerland
            </Link>
            <Link href="/services" className="hero-btn-secondary">
              Voir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* CE QUE NOUS FAISONS */}
      <section className="section-block">
        <div className="section-inner">
          <h2>Ce que nous faisons</h2>
          <div className="cards-grid">
            <article className="card">
              <h3>Accompagnement stratégique</h3>
              <p>
                Analyse de la situation, définition de la trajectoire, priorisation des
                décisions et accompagnement de la direction dans le temps.
              </p>
            </article>

            <article className="card">
              <h3>Structuration & organisation</h3>
              <p>
                Structuration de sociétés, organisation des flux, gouvernance, coordination
                avec partenaires juridiques et financiers.
              </p>
            </article>

            <article className="card">
              <h3>Projets & investisseurs</h3>
              <p>
                Mise en relation ciblée, cadrage de projets, suivi et transparence dans
                la communication entre porteurs de projets et investisseurs.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* QUI NOUS ACCOMPAGNONS */}
      <section className="section-block alt">
        <div className="section-inner">
          <h2>Qui nous accompagnons</h2>
          <div className="two-columns">
            <div>
              <h4>Entreprises & dirigeants</h4>
              <p>
                Sociétés en croissance, restructuration, repositionnement, ou préparation
                d’une nouvelle phase (développement, levée, consolidation).
              </p>
            </div>
            <div>
              <h4>Investisseurs & partenaires</h4>
              <p>
                Familles, entrepreneurs et partenaires financiers qui recherchent une
                vue structurée des projets, des risques et des perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI BC SWITZERLAND GMBH ? */}
      <section className="section-block">
        <div className="section-inner">
          <h2>Pourquoi BC Switzerland GmbH ?</h2>
          <div className="cards-grid">
            <article className="card">
              <h3>Approche suisse</h3>
              <p>
                Discrétion, fiabilité, documentation et respect des cadres juridiques
                suisses et internationaux.
              </p>
            </article>

            <article className="card">
              <h3>Clarté & structure</h3>
              <p>
                Une vision structurée : où vous êtes, où vous voulez aller, et comment
                y arriver étape par étape.
              </p>
            </article>

            <article className="card">
              <h3>Accompagnement sur la durée</h3>
              <p>
                Pas seulement un rapport : un suivi, des points réguliers, une
                relation professionnelle dans le temps.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
