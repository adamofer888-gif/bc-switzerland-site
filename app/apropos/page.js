import "../globals.css";

export const metadata = {
  title: "À Propos - DTE Holding AG",
  description: "Découvrez l'identité, les valeurs et l'expérience de DTE Holding AG, société suisse spécialisée en gestion de patrimoine, structuration d’actifs et capital-risque.",
};

export default function APropos() {
  return (
    <main className="page-container fade-in">
      {/* TITRE */}
      <header className="hero-apropos">
        <h1>À PROPOS DE DTE HOLDING AG</h1>
        <p>D’exécution. De précision. De résultats.</p>
      </header>

      {/* SECTION : PRÉSENTATION */}
      <section className="text-block">
        <h2>Notre Identité</h2>
        <p>
          DTE Holding AG est une société suisse basée à Wollerau, spécialisée dans la gestion de patrimoine, 
          la structuration d’actifs, le financement privé et l'accompagnement stratégique pour entreprises et investisseurs.
        </p>
        <p>
          Notre objectif est simple : fournir un accompagnement clair, efficace et sécurisé avec l’exigence suisse en matière
          d’exécution, de confidentialité et de gouvernance.
        </p>
      </section>

      {/* SECTION : VALEURS */}
      <section className="text-block">
        <h2>Nos Valeurs</h2>
        <ul>
          <li>Confidentialité & juridiction suisse</li>
          <li>Transparence et gouvernance</li>
          <li>Solutions sur mesure, sans intermédiaires inutiles</li>
          <li>Exécution rapide et structurée</li>
        </ul>
      </section>

      {/* SECTION : TÉMOIGNAGES */}
      <section className="testimonials">
        <h2>Témoignages de nos clients</h2>

        <div className="testimonial">
          <p>« DTE Holding AG nous a accompagné dans la structuration patrimoniale de notre groupe hôtelier. Processus clair, confidentiel et exécuté avec rigueur suisse. »</p>
          <span className="source">Client – Secteur Hôtellerie, Suisse Romande</span>
        </div>

        <div className="testimonial">
          <p>« Nous avons pu diversifier nos actifs vers des placements à rendement contrôlé avec une protection du capital. Service professionnel et discret. »</p>
          <span className="source">Client Privé – Europe</span>
        </div>

        <div className="testimonial">
          <p>« Pour un projet fintech, DTE Holding AG a coordonné les partenaires financiers, juridiques et stratégiques. Financement obtenu et exécution rapide. »</p>
          <span className="source">Projet Capital-Risque – Technologie – Europe</span>
        </div>
      </section>

      {/* SECTION : ÉTUDES DE CAS */}
      <section className="case-studies">
        <h2>Études de cas</h2>

        <div className="case">
          <h3>Gestion de portefeuille familial – Suisse</h3>
          <p>Optimisation, diversification et protection du capital, exécution sous juridiction suisse, reporting trimestriel.</p>
        </div>

        <div className="case">
          <h3>Capital-risque – Fintech européenne</h3>
          <p>Structuration, gouvernance, due diligence et levée de fonds jusqu’à l’exécution.</p>
        </div>

        <div className="case">
          <h3>Patrimoine immobilier international</h3>
          <p>Acquisition, structuration fiscale optimisée, financement privé et gestion via entité suisse.</p>
        </div>
      </section>

      {/* SECTION : SÉCURITÉ */}
      <section className="security">
        <h2>Conformité & Sécurité</h2>
        <ul>
          <li>Confidentialité Suisse – données protégées sous juridiction suisse</li>
          <li>Procédures KYC / AML strictes</li>
          <li>Contrôle interne des risques</li>
          <li>Partenaires bancaires et institutionnels suisses</li>
        </ul>
      </section>
    </main>
  );
        }
