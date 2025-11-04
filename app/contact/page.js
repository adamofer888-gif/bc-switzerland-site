export const metadata = {
  title: "Contact — DTE Holding AG",
  description:
    "Coordonnées officielles de DTE Holding AG — réponses rapides et confidentielles.",
};

export default function Contact() {
  return (
    <main className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
      <section className="section">
        <p className="sub">NOUS CONTACTER</p>
        <h1 className="h1">Parlons de votre projet</h1>
        <p className="lead" style={{ maxWidth: 820 }}>
          Pour toute demande d’information ou prise de contact professionnelle,
          notre équipe répond rapidement et en toute confidentialité.
        </p>
        <div className="actions" style={{ marginTop: 12 }}>
          <a className="btn gold" href="tel:+41779569183">Appeler le +41 77 956 91 83</a>
          <a className="btn" href="mailto:contact@dteholdingag.com">Écrire un email</a>
        </div>
      </section>

      <section className="cards">
        <article className="card">
          <p className="card_title">Coordonnées</p>
          <p>Wyssenfluhstrasse 1 · 8832 Wollerau — Suisse</p>
          <p>Tél. <a href="tel:+41779569183">+41 77 956 91 83</a></p>
          <p>Email : <a href="mailto:contact@dteholdingag.com">contact@dteholdingag.com</a></p>
          <a className="btn" href="https://maps.google.com/?q=Wyssenfluhstrasse+1+8832+Wollerau+Suisse" target="_blank" rel="noreferrer">
            Ouvrir dans Google Maps
          </a>
        </article>

        <article className="card">
          <p className="card_title">Direction</p>
          <p>CEO : <a href="mailto:ceo@dteholdingag.com">ceo@dteholdingag.com</a></p>
          <p>COO : <a href="mailto:n.patel@dteholdingag.com">n.patel@dteholdingag.com</a></p>
          <p>CFO : <a href="mailto:a.ofer@dteholdingag.com">a.ofer@dteholdingag.com</a></p>
        </article>
      </section>

      <section className="section">
        <p className="muted">
          DTE Holding AG · RC : CH-130.3.017.565-5 · Société établie en Suisse depuis 2011
        </p>
      </section>
    </main>
  );
}
