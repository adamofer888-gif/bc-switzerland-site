// components/Footer.js
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="col">
          <div className="brand">DTE Holding AG</div>
          <div className="muted">
            Wyssenfluhstrasse 1, 8832 Wollerau — Suisse
          </div>
          <div className="muted">Depuis 2011 · RC : CH-130.3.017.565-5</div>
        </div>

        <nav className="col links">
          <a href="/">Accueil</a>
          <a href="/services">Services</a>
          <a href="/team">Team</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="col contact">
          <a href="tel:+41779569183">+41 77 956 91 83</a>
          <a href="mailto:contact@dteholdingag.com">contact@dteholdingag.com</a>
        </div>
      </div>

      <div className="container logos">
        {/* Badges discrets (marques tierces en simple label) */}
        <span className="badge">UBS</span>
        <span className="badge">HSBC</span>
        <span className="badge">₿ Bitcoin</span>
        <span className="badge">◇ Ethereum</span>
      </div>

      <div className="legal">
        © {new Date().getFullYear()} DTE Holding AG — Tous droits réservés.
      </div>
    </footer>
  );
    }
