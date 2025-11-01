// app/contact/page.js
import "./contact.css";

export const metadata = {
  title: "Contact — DTE Holding AG",
  description:
    "Contactez DTE Holding AG à Wollerau (Suisse) : téléphone, email, adresse. Réponse rapide et confidentielle.",
};

export default function ContactPage() {
  return (
    <main className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <p className="kicker">Nous contacter</p>
          <h1 className="h1">Parlons de votre projet</h1>
          <p className="lead" style={{ maxWidth: 720 }}>
            Relation client exigeante, confidentialité suisse. Nous revenons vers vous
            rapidement avec une première analyse concrète.
          </p>
          <div className="actions" style={{ marginTop: 14, display: "flex", gap: 10 }}>
            <a className="btn gold" href="tel:+41779569183">Appeler le +41 77 956 91 83</a>
            <a className="btn" href="mailto:contact@dteholdingag.com">Écrire un email</a>
          </div>
        </div>
      </section>

      {/* GRID CONTACT */}
      <section className="contact-grid">
        {/* Coordonnées */}
        <article className="card">
          <h3>Coordonnées directes</h3>
          <div className="kv">
            <div> Téléphone : <a href="tel:+41779569183">+41 77 956 91 83</a></div>
            <div> Email général : <a href="mailto:contact@dteholdingag.com">contact@dteholdingag.com</a></div>
            <div> Direction (CEO) : <a href="mailto:ceo@dteholdingag.com">ceo@dteholdingag.com</a></div>
            <div> COO : <a href="mailto:n.patel@dteholdingag.com">n.patel@dteholdingag.com</a></div>
            <div> CFO : <a href="mailto:a.ofer@dteholdingag.com">a.ofer@dteholdingag.com</a></div>
          </div>

          <div className="hr" style={{ margin: "14px 0" }} />

          <h3>Adresse</h3>
          <p>Wyssenfluhstrasse 1<br />8832 Wollerau — Suisse</p>
          <div style={{ marginTop: 10 }}>
            <a
              className="btn"
              href="https://maps.google.com/?q=Wyssenfluhstrasse+1+8832+Wollerau+Suisse"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
        </article>

        {/* Aperçu Map / CTA */}
        <article className="card">
          <h3>Localisation</h3>
          <div className="map-preview" />
          <div className="map-overlay">
            <div className="map-overlay__content">
              <p className="muted">Wyssenfluhstrasse 1, 8832 Wollerau</p>
              <a
                className="btn gold"
                href="https://maps.google.com/?q=Wyssenfluhstrasse+1+8832+Wollerau+Suisse"
                target="_blank"
                rel="noopener noreferrer"
              >
                Itinéraire →
              </a>
            </div>
          </div>
        </article>
      </section>

      {/* Légal */}
      <p className="legal-line">
        DTE Holding AG · RC : CH-130.3.017.565-5 · Société établie en Suisse depuis 2011
      </p>
    </main>
  );
              }
