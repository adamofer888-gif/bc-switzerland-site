export const metadata = {
  title: "Contact — DTE Holding AG",
  description: "Coordonnées et informations.",
};

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Contact</div>
        <h1 className="h1">Entrer en relation</h1>

        <div className="cards" style={{marginTop:24}}>
          <article className="card">
            <div className="card__title">Coordonnées</div>
            <ul className="card__muted" style={{lineHeight:1.8}}>
              <li><strong>Adresse</strong> — Wyssenfluhstrasse 1, 8832 Wollerau, Suisse</li>
              <li><strong>Téléphone</strong> — +41 77 956 91 83</li>
              <li><strong>Email</strong> — <a href="mailto:contact@dteholdingag.com">contact@dteholdingag.com</a></li>
              <li><strong>RC</strong> — CH-130.3.017.565-5 — Depuis 2011</li>
            </ul>
          </article>

          <article className="card">
            <div className="card__title">Écrire au CEO</div>
            <p className="card__muted">Pour une demande stratégique ou confidentielle.</p>
            <a href="mailto:ceo@dteholdingag.com" className="btn btn--gold" style={{marginTop:10}}>
              ceo@dteholdingag.com
            </a>
          </article>
        </div>
      </div>
    </main>
  );
  }
