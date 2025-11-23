// app/equipe/page.js
import "./equipe.css";

export const metadata = {
  title: "Équipe – BC Switzerland GmbH",
  description:
    "Direction et gouvernance de BC Switzerland GmbH : une équipe resserrée, impliquée et professionnelle.",
};

export default function Equipe() {
  return (
    <main className="equipe-page">

      {/* HERO */}
      <section className="eq-hero">
        <div className="eq-hero-inner">
          <span className="eyebrow">Équipe & direction</span>
          <h1>Direction de BC Switzerland GmbH</h1>
          <p className="lead">
            Une équipe resserrée, impliquée au quotidien, avec une approche suisse basée
            sur la clarté, la discrétion et la discipline d’exécution.
          </p>
        </div>
      </section>

      {/* CARTES DIRIGEANTS */}
      <section className="eq-section">
        <h2>Équipe dirigeante</h2>
        <div className="eq-grid">
          <article className="eq-card">
            <div className="initials">TV</div>
            <h3>Teresa Marie Vermillion</h3>
            <p className="role">Chief Executive Officer (CEO)</p>
            <p className="bio">
              Direction générale, vision stratégique et supervision globale des mandats.
              Point de référence pour les décisions structurantes et la relation avec les principales parties prenantes.
            </p>
          </article>

          <article className="eq-card">
            <div className="initials">NP</div>
            <h3>Navneet Patel</h3>
            <p className="role">Chief Operating Officer (COO)</p>
            <p className="bio">
              Pilotage opérationnel, coordination des dossiers, mise en œuvre des décisions
              et suivi des processus internes pour garantir rigueur et efficacité.
            </p>
          </article>

          <article className="eq-card">
            <div className="initials">AO</div>
            <h3>Adam Ofer</h3>
            <p className="role">Chief Financial Officer (CFO)</p>
            <p className="bio">
              Supervision financière, structuration des flux, modélisation et reporting.
              Focus sur la cohérence financière et la maîtrise du risque.
            </p>
          </article>

          <article className="eq-card">
            <div className="initials">SM</div>
            <h3>Simon Mulliez</h3>
            <p className="role">Chief Technology Officer (CTO)</p>
            <p className="bio">
              Encadrement des aspects technologiques, des outils et de la sécurité
              de l’information, afin de soutenir une organisation moderne et sécurisée.
            </p>
          </article>
        </div>
      </section>

      {/* PRINCIPES */}
      <section className="eq-section eq-section-alt">
        <h2>Principes de direction</h2>
        <ul className="eq-list">
          <li>Implication directe des dirigeants dans les dossiers importants.</li>
          <li>Communication claire, structurée et documentée avec les clients.</li>
          <li>Confidentialité stricte et respect des cadres juridiques suisses.</li>
          <li>Approche pragmatique, orientée résultats et exécution.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="eq-cta">
        <h3>Échanger avec la direction</h3>
        <p>
          Pour toute demande sérieuse concernant un projet, une structuration ou un
          accompagnement, un échange peut être organisé avec les membres de la direction.
        </p>
        <a href="/contact" className="btn btn-gold">
          Contacter BC Switzerland →
        </a>
      </section>
    </main>
  );
        }
