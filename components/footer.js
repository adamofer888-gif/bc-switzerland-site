// components/footer.js
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Colonne 1 : identité société */}
        <div className="col">
          <div className="brand">BC Switzerland GmbH</div>
          <div className="muted">
            Baarerstrasse 53, 6300 Zug – Suisse
          </div>
          <div className="muted">
            RC : CHE-329.829.736 · TVA / UID : CHE-329.829.736 · Fondée en 2013
          </div>
        </div>

        {/* Colonne 2 : liens rapides */}
        <nav className="col links">
          <a href="/">Accueil</a>
          <a href="/services">Services</a>
          <a href="/team">Team</a>
          <a href="/apropos">À propos</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Colonne 3 : contact direct */}
        <div className="col contact">
          <a href="tel:+41779569183">+41 77 956 91 83</a>
          <a href="mailto:contact@bc-switzerland.ch">
            contact@bc-switzerland.ch
          </a>
        </div>
      </div>

      {/* Ligne légale */}
      <div className="legal">
        © {new Date().getFullYear()} BC Switzerland GmbH – Tous droits réservés.
      </div>
    </footer>
  );
          }
