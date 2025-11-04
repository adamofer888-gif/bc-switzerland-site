export const metadata = {
  title: "Contact - DTE Holding AG",
  description:
    "Contactez DTE Holding AG pour toute demande professionnelle ou information concernant nos services.",
};

export default function Contact() {
  return (
    <div className="page-container">
      <section className="hero-contact">
        <h1>Contact</h1>
        <p>
          Pour toute demande d’information ou prise de contact professionnelle,
          notre équipe répond rapidement et en toute confidentialité.
        </p>
      </section>

      <section className="contact-info">
        <div className="contact-card">
          <h2>Coordonnées</h2>

          <p><strong>Adresse :</strong><br />
          Wyssenfluhstrasse 1, 8832 Wollerau – Suisse</p>

          <p><strong>Téléphone :</strong><br /> +41 77 956 91 83</p>

          <p><strong>Email :</strong><br />
          <a href="mailto:contact@dteholdingag.com">
            contact@dteholdingag.com
          </a>
          </p>
        </div>
      </section>
    </div>
  );
}
