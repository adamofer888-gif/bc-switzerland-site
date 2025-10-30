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

          {/* Boutons directs depuis l'accueil */}
          <div style={{display:'flex', gap:'12px', flexWrap:'wrap'}}>
            <a className="btn btn--primary" href="/services/capital-a-risque">
              Voir nos Services
            </a>
            <a className="btn btn--ghost" href="/team">
              Voir la Team
            </a>
            <a className="btn btn--ghost" href="/contact">
              Contact direct
            </a>
          </div>
        </div>
      </section>

      {/* ACCÈS RAPIDE (3 grosses cartes cliquables) */}
      <section className="container">
        <h2 className="section-title">Accès rapide</h2>
        <div className="grid">
          <a className="card" href="/services/capital-a-risque">
            <h3 className="card__title">Services — Capital à Risque</h3>
            <p className="card__text">
              Investissements early & growth, structuration, gouvernance et suivi.
            </p>
            <span className="link">Ouvrir la page Services</span>
          </a>

          <a className="card" href="/team">
            <h3 className="card__title">Team</h3>
            <p className="card__text">
              Daniel Thomas Eggenberger (CEO), Navneet Patel (COO), Adam Ofer (COO).
            </p>
            <span className="link">Voir l’équipe</span>
          </a>

          <a className="card" href="/contact">
            <h3 className="card__title">Contact</h3>
            <p className="card__text">
              Wyssenfluhstrasse 1, 8832 Wollerau — +41 77 956 91 83 — contact@dteholdingag.com
            </p>
            <span className="link">Ouvrir la page Contact</span>
          </a>
        </div>
      </section>

      {/* (Optionnel) Bloc Services court sur l'accueil */}
      <section id="services" className="container">
        <h2 className="section-title">Nos Services</h2>
        <div className="grid">
          <article className="card">
            <h3 className="card__title">Capital à Risque</h3>
            <p className="card__text">
              Sélection, due diligence, tickets graduels, co-investissements.
            </p>
            <a className="link" href="/services/capital-a-risque">En savoir plus</a>
          </article>

          <article className="card">
            <h3 className="card__title">Développement Digital</h3>
            <p className="card__text">
              Produits web & mobiles, intégrations cloud, automatisations.
            </p>
          </article>
        </div>
      </section>

      {/* CONTACT rapide (ancre) */}
      <section id="contact" className="container" style={{marginTop:32}}>
        <h2 className="
