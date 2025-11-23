import "./home.css";

export default function Home() {
  return (
    <main className="home">

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-label">BC Switzerland GmbH</span>
          <h1>Conseil stratégique <br /> & Structuration suisse</h1>
          <p>
            BC Switzerland GmbH accompagne les entreprises et dirigeants dans
            leurs décisions stratégiques, la structuration de leurs activités
            et l’optimisation de leur organisation.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="home-intro">
        <h2>Votre partenaire en gouvernance et organisation</h2>
        <p>
          Nous apportons une approche claire, rigoureuse et confidentielle
          pour accompagner des projets à forte valeur stratégique.
          Notre expertise repose sur la structuration, la planification
          et la fiabilité d’exécution.
        </p>
      </section>

      {/* EXPERTISE BLOCKS */}
      <section className="home-expertise">
        <h2>Nos expertises clés</h2>

        <div className="expertise-grid">

          <div className="expertise-card">
            <h3>Structuration d’entreprise</h3>
            <p>
              Mise en place de structures optimisées, organisation juridique
              et planification adaptée aux objectifs long terme.
            </p>
          </div>

          <div className="expertise-card">
            <h3>Accompagnement stratégique</h3>
            <p>
              Analyse, cadrage, plan d’action et suivi dans les phases de
              décision importantes.
            </p>
          </div>

          <div className="expertise-card">
            <h3>Gestion & coordination</h3>
            <p>
              Accompagnement opérationnel et coordination de projets complexes
              avec rigueur et confidentialité.
            </p>
          </div>

        </div>
      </section>

      {/* CONFIDENCE SECTION */}
      <section className="home-confidence">
        <h2>Une approche basée sur la confiance</h2>
        <p>
          Transparence, confidentialité et précision sont les fondements de
          notre engagement. Chaque mandat est traité avec discrétion et
          professionnalisme.
        </p>
      </section>

    </main>
  );
}
