// app/services/page.js
import "./services.css";

export const metadata = {
  title: "Services – BC Switzerland GmbH",
  description:
    "Aperçu des domaines d’intervention de BC Switzerland GmbH : structuration, accompagnement financier et coordination de projets.",
};

export default function ServicesPage() {
  return (
    <main className="services-page">
      {/* HERO */}
      <section className="sv-hero">
        <div className="sv-hero-inner">
          <span className="eyebrow">Nos domaines d’intervention</span>
          <h1>Services & accompagnement</h1>
          <p className="sv-lead">
            BC Switzerland GmbH intervient sur des dossiers qui nécessitent de la structure,
            de la coordination et une approche financière rigoureuse. Nos services sont
            adaptés au contexte de chaque client, avec un cadre clair dès le départ.
          </p>
        </div>
      </section>

      {/* DOMAINES PRINCIPAUX */}
      <section className="sv-section">
        <div className="sv-inner">
          <h2>Axes principaux d’intervention</h2>
          <div className="sv-grid">
            <article className="sv-card">
              <h3>Structuration & organisation</h3>
              <p>
                Mise en place ou réorganisation de structures d’entreprise, de flux et de
                responsabilités. Clarification des lignes de décision, des rôles et des
                processus pour donner un cadre plus lisible et efficace.
              </p>
            </article>

            <article className="sv-card">
              <h3>Accompagnement financier</h3>
              <p>
                Coordination de dossiers impliquant des enjeux financiers : préparation,
                structuration, suivi des informations et des échanges entre les différentes
                parties prenantes (clients, partenaires, conseils externes).
              </p>
            </article>

            <article className="sv-card">
              <h3>Projets & situations spécifiques</h3>
              <p>
                Intervention dans des situations particulières (restructuration, croissance,
                projets multi-acteurs, etc.) où une direction claire, une méthode et un
                suivi discipliné sont nécessaires.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COMMENT NOUS TRAVAILLONS */}
      <section className="sv-section sv-alt">
        <div className="sv-inner">
          <h2>Comment nous travaillons</h2>
          <p className="sv-text">
            L’objectif n’est pas de multiplier les promesses, mais d’apporter une structure,
            un suivi et un niveau d’exigence compatibles avec les attentes de nos clients.
          </p>
          <div className="sv-steps">
            <div className="sv-step">
              <span className="sv-step-number">01</span>
              <h3>Cadre & périmètre</h3>
              <p>
                Définition précise de ce qui entre dans le mandat, des limites d’intervention
                et des attentes de chaque partie.
              </p>
            </div>
            <div className="sv-step">
              <span className="sv-step-number">02</span>
              <h3>Organisation & priorités</h3>
              <p>
                Mise en place d’un plan de travail, hiérarchisation des actions et
                clarification des interlocuteurs.
              </p>
            </div>
            <div className="sv-step">
              <span className="sv-step-number">03</span>
              <h3>Exécution & suivi</h3>
              <p>
                Suivi régulier, points structurés et ajustements en fonction de
                l’évolution de la situation et des décisions prises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POUR QUI ? */}
      <section className="sv-section">
        <div className="sv-inner">
          <h2>Pour qui intervenons-nous ?</h2>
          <div className="sv-grid sv-grid-two">
            <article className="sv-card">
              <h3>Dirigeants & entrepreneurs</h3>
              <p>
                Fondateurs, dirigeants ou actionnaires confrontés à des enjeux de structure,
                de croissance, de clarification de rôles ou de coordination entre plusieurs
                acteurs internes et externes.
              </p>
            </article>
            <article className="sv-card">
              <h3>Investisseurs & partenaires</h3>
              <p>
                Investisseurs privés ou institutionnels souhaitant un relais structuré
                pour la coordination opérationnelle de certains dossiers.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CE QUE NOUS NE FAISONS PAS */}
      <section className="sv-section sv-alt">
        <div className="sv-inner">
          <h2>Ce que nous ne faisons pas</h2>
          <p className="sv-text">
            Par transparence, certains points sont volontairement exclus de notre périmètre
            direct d’intervention.
          </p>
          <ul className="sv-list">
            <li>
              Nous ne promettons pas de rendements garantis ni de résultats irréalistes.
            </li>
            <li>
              Nous n’agissons pas en tant que banque dépositaire ou courtier.
            </li>
            <li>
              Nous ne remplaçons pas les conseils juridiques, fiscaux ou réglementaires spécialisés.
            </li>
          </ul>
          <p className="sv-text small">
            Lorsque nécessaire, nous collaborons avec des conseils externes (avocats, fiscalistes,
            spécialistes) choisis par le client ou proposés pour étude.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="sv-section sv-cta">
        <div className="sv-inner sv-cta-inner">
          <div>
            <h2>Parler d’un dossier ou d’un projet</h2>
            <p>
              Si votre situation nécessite davantage de structure, de coordination ou un
              accompagnement plus rigoureux, un premier échange peut être organisé.
            </p>
          </div>
          <a href="/contact" className="btn btn-primary">
            Contacter BC Switzerland →
          </a>
        </div>
      </section>
    </main>
  );
        }
