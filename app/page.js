export default function Home() {
  return (
    <main>
      {/* HÉROS */}
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">DTE Holding AG</h1>
          <p className="hero__kicker">
            Innovations • Capital à Risque • Développement Digital
          </p>

          <div style={{display:'flex', gap:'12px', flexWrap:'wrap'}}>
            <a className="btn btn--primary" href="/services/capital-a-risque">
              Découvrir le Capital à Risque
            </a>
            <a className="btn btn--ghost" href="#contact">
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container">
        <h2 className="section-title">Nos Services</h2>

        <div className="grid">
          <article className="card">
            <h3 className="card__title">Capital à Risque</h3>
            <p className="card__text">
              Accompagnement d’investissements early-stage et growth, structuration de deals,
              gouvernance et suivi performance.
            </p>
            <a className="link" href="/services/capital-a-risque">En savoir plus</a>
          </article>

          <article className="card">
            <h3 className="card__title">Développement Digital</h3>
            <p className="card__text">
              Produits web & mobiles, optimisation UX, intégrations cloud et automatisations
              pour accélérer l’exécution.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
