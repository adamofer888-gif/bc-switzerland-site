export const metadata = {
  title: "Services — DTE Holding AG",
  description: "Gestion de patrimoine, capital à risque, conseil. Exécution suisse, relation client forte.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="section" style={{background:"linear-gradient(180deg, rgba(200,160,78,.08), transparent)"}}>
        <div className="container">
          <div className="kicker">Nos services</div>
          <h1 className="h1">Des solutions pensées pour <span style={{color:"var(--gold)"}}>protéger</span> et <span style={{color:"var(--gold)"}}>accélérer</span></h1>
          <p className="lead">Approche sur-mesure, exigence de gouvernance, reporting clair.</p>

          <div className="cards" style={{marginTop:24}}>
            <article className="card">
              <div className="kicker">Gestion de patrimoine</div>
              <div className="card__title">Allocation & relation dédiée</div>
              <p className="card__muted">
                Stratégie d’allocation, diversification, garde, et suivi discret. Relation client prioritaire.
              </p>
              <div className="hr"></div>
              <a href="/contact" className="btn btn--gold">Parler à un conseiller</a>
            </article>

            <article className="card">
              <div className="kicker">Capital à risque</div>
              <div className="card__title">Thèses & due diligence</div>
              <p className="card__muted">
                Fintech, deeptech, SaaS : sélection, structuration, gouvernance & board. Tickets flexibles, co-invest.
              </p>
              <div className="hr"></div>
              <a href="/contact" className="btn btn--ghost">Accéder au deal-flow</a>
            </article>

            <article className="card">
              <div className="kicker">Conseil</div>
              <div className="card__title">Stratégie & excellence</div>
              <p className="card__muted">
                Vision produit, pricing, M&A, data room, OKR. Exécution pragmatique et mesurable.
              </p>
              <div className="hr"></div>
              <a href="/contact" className="btn btn--ghost">Planifier un échange</a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
