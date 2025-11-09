// app/apropos/page.js
import "./apropos.css";

export const metadata = {
  title: "À propos — DTE Holding AG",
  description:
    "Société suisse à Wollerau depuis 2011. Gestion patrimoniale, capital privé et stratégie financière avec gouvernance et confidentialité suisses.",
};

export default function Apropos() {
  return (
    <main className="apropos-page">

      {/* HERO sobre & premium */}
      <section className="ap-hero">
        <div className="ap-hero__inner">
          <div className="ap-hero__title">
            <span className="eyebrow">DTE HOLDING AG</span>
            <h1>À propos</h1>
            <p className="lead">
              Société suisse indépendante basée à Wollerau. Nous combinons discipline d’investissement,
              contrôle du risque et exécution mesurable pour créer de la valeur durable.
            </p>
            <div className="ap-hero__ctas">
              <a href="/services" className="btn btn--ghost">Voir nos expertises</a>
              <a href="/contact" className="btn btn--gold">Contact confidentiel</a>
            </div>
          </div>

          <ul className="ap-hero__bullets">
            <li>Fondée en 2011 – Canton de Schwyz (Suisse)</li>
            <li>Gestion patrimoniale, private capital & stratégie</li>
            <li>Processus documentés, reporting clair, confidentialité</li>
          </ul>
        </div>
      </section>

      {/* BANDEAU CREDIBILITÉ */}
      <section className="ap-cred">
        <div className="ap-cred__wrap">
          <div className="ap-cred__item">
            <div className="kpi">2011</div>
            <div className="kpiLabel">Depuis</div>
          </div>
          <div className="ap-cred__item">
            <div className="kpi">Wollerau (CH)</div>
            <div className="kpiLabel">Siège social</div>
          </div>
          <div className="ap-cred__item">
            <div className="kpi">CH-130.3.017.565-5</div>
            <div className="kpiLabel">Registre du Commerce</div>
          </div>
          <div className="ap-cred__item">
            <div className="kpi">Gouvernance</div>
            <div className="kpiLabel">Process & conformité</div>
          </div>
        </div>
      </section>

      {/* NOS PILIERS */}
      <section className="ap-section">
        <h2>Nos piliers</h2>
        <div className="ap-cards">
          <article className="ap-card">
            <h3>Discipline & traçabilité</h3>
            <p>
              Allocation rigoureuse, critères d’entrée/sortie, scénarios de stress et
              documentation à chaque décision d’investissement.
            </p>
          </article>
          <article className="ap-card">
            <h3>Gestion du risque</h3>
            <p>
              Approche défensive par défaut, diversification pragmatique, contrôle de la liquidité
              et revues périodiques des expositions.
            </p>
          </article>
          <article className="ap-card">
            <h3>Confidentialité suisse</h3>
            <p>
              Accès restreint, échange sécurisé, conservation limitée des données. Relation privée
              et discrète avec la direction.
            </p>
          </article>
        </div>
      </section>

      {/* NOTRE MÉTHODE (4 étapes) */}
      <section className="ap-section ap-section--alt">
        <h2>Notre méthode</h2>
        <div className="ap-steps">
          <div className="step">
            <span className="stepNo">01</span>
            <h4>Analyse</h4>
            <p>Objectifs, contraintes, horizon, profil de risque, indicateurs de performance.</p>
          </div>
          <div className="step">
            <span className="stepNo">02</span>
            <h4>Sélection</h4>
            <p>Allocation disciplinée, due diligence, scénarios et critères d’arbitrage.</p>
          </div>
          <div className="step">
            <span className="stepNo">03</span>
            <h4>Exécution</h4>
            <p>Gouvernance, conformité, traçabilité et contrôle opérationnel.</p>
          </div>
          <div className="step">
            <span className="stepNo">04</span>
            <h4>Suivi</h4>
            <p>Monitoring, reporting clair et améliorations continues documentées.</p>
          </div>
        </div>
      </section>

      {/* DIRECTION (sans photos) */}
      <section className="ap-section">
        <h2>Direction</h2>
        <ul className="ap-lead">
          <li>
            <strong>DANIEL THOMAS EGGENBERGER</strong> — CEO
            <span> · Relation investisseurs, stratégie et supervision d’exécution.</span>
          </li>
          <li>
            <strong>NAVNEET PATEL</strong> — COO
            <span> · Opérations, process & contrôle interne.</span>
          </li>
          <li>
            <strong>ADAM OFER</strong> — CFO
            <span> · Ingénierie financière, structuration & reporting.</span>
          </li>
        </ul>
      </section>

      {/* CONFORMITÉ & SÉCURITÉ */}
      <section className="ap-section ap-section--alt">
        <h2>Conformité & sécurité</h2>
        <ul className="ap-list">
          <li>Procédures KYC/AML appliquées à l’onboarding et aux opérations sensibles.</li>
          <li>Contrôle des accès, chiffrement des échanges et conservation limitée des données.</li>
          <li>Processus internes documentés : gouvernance, contrôle du risque, auditabilité.</li>
          <li>Exécution en juridiction suisse avec partenaires établis.</li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section className="ap-cta">
        <h3>Échanger avec la direction</h3>
        <p>Premier contact confidentiel et réponse rapide.</p>
        <a className="btn btn--gold" href="/contact">Contacter DTE →</a>
      </section>
    </main>
  );
    }
