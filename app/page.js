// app/page.js
import "./home.css";

export default function Home() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <p className="home-eyebrow">BC Switzerland GmbH</p>
          <h1>
            Stratégie, structuration
            <br />
            & accompagnement financier
          </h1>
          <p className="home-lead">
            BC Switzerland GmbH est une société suisse spécialisée dans
            la structuration, la coordination de projets et l’accompagnement
            financier pour dirigeants et investisseurs.
          </p>
          <div className="home-cta-row">
            <a href="/contact" className="btn btn-primary">
              Prendre contact
            </a>
            <a href="/services" className="btn btn-secondary">
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS FAIRE CONFIANCE */}
      <section className="home-section home-trust">
        <div className="home-section-inner">
          <h2>Pourquoi nous faire confiance ?</h2>
          <div className="trust-grid">
            <article className="trust-card">
              <h3>Société basée en Suisse</h3>
              <p>
                Structure enregistrée en Suisse, avec une approche professionnelle
                alignée sur les standards helvétiques de sérieux et de discrétion.
              </p>
            </article>
            <article className="trust-card">
              <h3>Direction expérimentée</h3>
              <p>
                Une équipe dirigeante impliquée directement dans les dossiers,
                avec une expérience solide en organisation, coordination et finance.
              </p>
            </article>
            <article className="trust-card">
              <h3>Relation de long terme</h3>
              <p>
                Un accompagnement qui privilégie la continuité, la clarté des
                échanges et la construction de relations durables avec nos clients.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* NOTRE MÉTHODOLOGIE */}
      <section className="home-section home-method">
        <div className="home-section-inner">
          <h2>Notre méthodologie</h2>
          <p className="home-section-text">
            Chaque dossier est traité de manière structurée, avec un processus
            clair qui limite les approximations et facilite la prise de décision.
          </p>
          <div className="method-steps">
            <div className="method-step">
              <span className="step-number">01</span>
              <h3>Analyse & compréhension</h3>
              <p>
                Prise de connaissance de la situation, clarification des objectifs
                et cadrage du périmètre d’intervention.
              </p>
            </div>
            <div className="method-step">
              <span className="step-number">02</span>
              <h3>Structuration & plan d’action</h3>
              <p>
                Proposition de structure, organisation des flux, priorisation et
                formalisation des étapes clés.
              </p>
            </div>
            <div className="method-step">
              <span className="step-number">03</span>
              <h3>Mise en œuvre & coordination</h3>
              <p>
                Accompagnement dans l’exécution, coordination des intervenants
                et suivi de l’avancement.
              </p>
            </div>
            <div className="method-step">
              <span className="step-number">04</span>
              <h3>Suivi dans la durée</h3>
              <p>
                Ajustements, points réguliers et accompagnement dans les décisions
                futures liées au projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOS ENGAGEMENTS */}
      <section className="home-section home-commitments">
        <div className="home-section-inner">
          <h2>Nos engagements</h2>
          <div className="commit-grid">
            <div className="commit-item">
              <h3>Confidentialité</h3>
              <p>
                Les informations partagées sont traitées de manière discrète
                et sécurisée.
              </p>
            </div>
            <div className="commit-item">
              <h3>Clarté</h3>
              <p>
                Des échanges structurés, des documents clairs et des décisions
                formalisées.
              </p>
            </div>
            <div className="commit-item">
              <h3>Rigueur</h3>
              <p>
                Une approche méthodique, sans promesses irréalistes, orientée
                exécution.
              </p>
            </div>
            <div className="commit-item">
              <h3>Disponibilité</h3>
              <p>
                Un interlocuteur identifié et joignable, avec un véritable suivi
                dans le temps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
                  }
