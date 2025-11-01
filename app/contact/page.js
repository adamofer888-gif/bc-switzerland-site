"use client";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h4>NOUS CONTACTER</h4>
        <h1>Parlons de votre projet</h1>
        <p>
          Relation client exigeante, confidentialité suisse. Nous revenons vers vous
          rapidement avec une analyse concrète et personnalisée.
        </p>

        <div className="contact-buttons">
          <a href="tel:+41779569183" className="btn-phone">Appeler le +41 77 956 91 83</a>
          <a href="mailto:contact@dteholdingag.com" className="btn-email">Écrire un email</a>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-block">
          <h2>Coordonnées directes</h2>

          <p>Téléphone : +41 77 956 91 83</p>

          <p>Email général :
            <a href="mailto:contact@dteholdingag.com"> contact@dteholdingag.com</a>
          </p>

          <p>Direction (CEO) :
            <a href="mailto:ceo@dteholdingag.com"> ceo@dteholdingag.com</a>
          </p>

          <p>COO :
            <a href="mailto:n.patel@dteholdingag.com"> n.patel@dteholdingag.com</a>
          </p>

          <p>CFO :
            <a href="mailto:a.ofer@dteholdingag.com"> a.ofer@dteholdingag.com</a>
          </p>
        </div>

        <div className="contact-block">
          <h2>Localisation</h2>

          <h3>Adresse</h3>
          <p>Wyssenfluhstrasse 1<br />8832 Wollerau — Suisse</p>

          <a
            href="https://www.google.com/maps?q=Wyssenfluhstrasse+1,+8832+Wollerau"
            target="_blank"
            rel="noreferrer"
            className="maps-btn"
          >
            Ouvrir dans Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}
