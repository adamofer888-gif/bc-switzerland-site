import "./equipe.css";

export const metadata = {
  title: "Équipe dirigeante – BC Switzerland GmbH",
  description:
    "Direction de BC Switzerland GmbH : une équipe resserrée et impliquée, avec une approche suisse structurée.",
};

export default function EquipePage() {
  return (
    <main className="equipe-page">
      {/* HERO */}
      <section className="eq-hero">
        <div className="eq-hero-inner">
          <span className="eyebrow">Équipe & direction</span>
          <h1>Équipe dirigeante</h1>
          <p className="lead">
            Une gouvernance resserrée, directement impliquée dans les mandats et guidée
            par la clarté, la confidentialité et l’exigence d’exécution.
          </p>
        </div>
      </section>

      {/* GRID DES DIRIGEANTS */}
      <section className="eq-section">
        <div className="eq-grid">

          <article className="eq-card">
            <div className="eq-header">
              <div className="eq-initials">TV</div>
              <div>
                <h3 className="eq-name">Teresa Marie Vermillion</h3>
                <p className="eq-role">Chief Executive Officer (CEO)</p>
                <p className="eq-email">teresa@bc-switzerland.ch</p>
              </div>
            </div>
            <p className="eq-bio">
              Direction générale et pilotage de la stratégie globale. Supervision des décisions
              majeures, relation avec les principales parties prenantes et définition des priorités
              à moyen et long terme.
            </p>
          </article>

          <article className="eq-card">
            <div className="eq-header">
              <div className="eq-initials">NP</div>
              <div>
                <h3 className="eq-name">Navneet Patel</h3>
                <p className="eq-role">Chief Operating Officer (COO)</p>
                <p className="eq-email">n.patel@bc-switzerland.ch</p>
              </div>
            </div>
            <p className="eq-bio">
              Responsable de l’exécution opérationnelle, de la coordination des dossiers et du suivi
              des process internes. Veille à ce que chaque mandat soit traité avec rigueur et
              continuité.
            </p>
          </article>

          <article className="eq-card">
            <div className="eq-header">
              <div className="eq-initials">AO</div>
              <div>
                <h3 className="eq-name">Adam Ofer</h3>
                <p className="eq-role">Chief Financial Officer (CFO)</p>
                <p className="eq-email">a.ofer@bc-switzerland.ch</p>
              </div>
            </div>
            <p className="eq-bio">
              Supervision financière, structuration des flux, modèles et reporting. Focus sur la
              cohérence économique, la lisibilité des chiffres et la maîtrise du risque.
            </p>
          </article>

          <article className="eq-card">
            <div className="eq-header">
              <div className="eq-initials">SM</div>
              <div>
                <h3 className="eq-name">Simon Mulliez</h3>
                <p className="eq-role">Chief Technology Officer (CTO)</p>
                <p className="eq-email">s.mulliez@bc-switzerland.ch</p>
              </div>
            </div>
            <p className="eq-bio">
              Encadrement des aspects technologiques, des outils et de la sécurité de l’information,
              afin de soutenir une organisation moderne, fiable et sécurisée.
            </p>
          </article>

        </div>
      </section>

      {/* PRINCIPES */}
      <section className="eq-section eq-section-alt">
        <h2>Principes de direction</h2>
        <ul className="eq-list">
          <li>Implication directe des dirigeants sur les dossiers sensibles.</li>
          <li>Communication structurée, documentée et orientée décisions.</li>
          <li>Confidentialité stricte et respect des cadres suisses et internationaux.</li>
          <li>Vision long terme, avec un suivi dans la durée des relations.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="eq-cta">
        <h3>Échanger avec la direction</h3>
        <p>
          Pour toute demande sérieuse liée à un projet, une structuration ou une collaboration,
          un échange peut être organisé avec les membres de la direction.
        </p>
        <a href="/contact" className="eq-btn">
          Contacter BC Switzerland →
        </a>
      </section>
    </main>
  );
                }
