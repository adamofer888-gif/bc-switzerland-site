export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero section">
        <div className="container hero__grid">
          <div>
            <div className="kicker">Asset & Wealth Management</div>
            <h1 className="h1">Gestion de patrimoine & capital à risque — <span style={{color:"var(--gold)"}}>Suisse</span></h1>
            <p className="lead">
              Société basée à Wollerau depuis 2011. Nous unissons investissement, gouvernance et technologie
              pour transformer les ambitions en résultats durables.
            </p>
            <div style={{display:"flex",gap:"12px",marginTop:"20px",flexWrap:"wrap"}}>
              <a href="/services" className="btn btn--gold">Découvrir nos services</a>
              <a href="/contact" className="btn btn--ghost">Nous contacter</a>
            </div>
            <div style={{marginTop:"18px"}} className="badge">
              <span>CH-130.3.017.565-5</span> <span>•</span> <span>Wollerau, Suisse</span> <span>•</span> <span>Depuis 2011</span>
            </div>
          </div>
          <div>
            <div style={{aspectRatio:"4/3",borderRadius:"18px",border:"1px solid var(--stroke)",background:"url(https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop) center/cover"}} />
            <div className="muted" style={{marginTop:8,fontSize:12}}>Crédits photo : Alpes suisses</div>
          </div>
        </div>
      </section>

      {/* PILIERS */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Nos piliers d’exécution</h2>
          <div className="cards" style={{marginTop:18}}>
            <article className="card">
              <div className="kicker">01</div>
              <div className="card__title">Gestion de patrimoine</div>
              <p className="card__muted">Allocation disciplinée, contrôle des risques, relation client dédiée.</p>
            </article>
            <article className="card">
              <div className="kicker">02</div>
              <div className="card__title">Capital à risque</div>
              <p className="card__muted">Thèses fintech / deeptech / SaaS, sélection, due diligence, gouvernance.</p>
            </article>
            <article className="card">
              <div className="kicker">03</div>
              <div className="card__title">Conseil stratégique</div>
              <p className="card__muted">Vision produit, M&A, structuration, excellence opérationnelle.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
