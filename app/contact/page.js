import "./contact.css";

export const metadata = {
  title: "Contact – BC Switzerland GmbH",
  description:
    "Contacter BC Switzerland GmbH pour un échange professionnel et confidentiel.",
};

export default function Contact() {
  return (
    <main className="contact-page">

      <section className="ct-hero">
        <div className="ct-hero-inner">
          <span className="eyebrow">Contact</span>
          <h1>Entrer en contact avec BC Switzerland GmbH</h1>
          <p className="lead">
            Pour toute demande liée à un projet ou une collaboration, vous
            pouvez nous joindre via les informations ci-dessous.
          </p>
        </div>
      </section>

      <section className="ct-main">
        <div className="ct-grid">

          {/* COORDONNÉES */}
          <div className="ct-card">
            <h2>Coordonnées</h2>
            <p className="muted">
              Contact direct et confidentiel avec notre structure.
            </p>
            <div className="ct-lines">
              <div>
                <span className="label">Téléphone</span>
                <a href="tel:+41779569183">+41 77 956 91 83</a>
              </div>
              <div>
                <span className="label">Email</span>
                <a href="mailto:contact@bc-switzerland.ch">
                  contact@bc-switzerland.ch
                </a>
              </div>
            </div>
          </div>

          {/* ADRESSE */}
          <div className="ct-card">
            <h2>Adresse</h2>
            <p>
              BC Switzerland GmbH<br />
              Baarerstrasse 53<br />
              6300 Zug<br />
              Suisse
            </p>
            <p className="muted small">
              Les rendez-vous se font uniquement sur confirmation préalable.
            </p>
          </div>

          {/* DIRECTION */}
          <div className="ct-card">
            <h2>Direction</h2>

            <ul className="team-list">
              <li>
                <strong>Chief Executive Officer (CEO)</strong><br />
                Teresa Marie Vermillion
              </li>
              <li>
                <strong>Chief Operating Officer (COO)</strong><br />
                Navneet Patel
              </li>
              <li>
                <strong>Chief Financial Officer (CFO)</strong><br />
                Adam Ofer
              </li>
              <li>
                <strong>Chief Technology Officer (CTO)</strong><br />
                Simon Mulliez
              </li>
            </ul>

          </div>

        </div>
      </section>

      <section className="ct-cta">
        <h3>Échange confidentiel</h3>
        <p>
          Toute demande est traitée de manière discrète, professionnelle et sécurisée.
        </p>
      </section>

    </main>
  );
}
