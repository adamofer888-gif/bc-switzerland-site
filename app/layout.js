import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "DTE Holding AG — Asset & Wealth Management",
  description: "Société suisse (depuis 2011). Capital à risque, gestion de patrimoine, conseil stratégique.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-base text-body antialiased">
        <Navbar />
        {children}
        <footer className="footer">
          <div className="container footer__grid">
            <div>
              <div className="brand">DTE Holding AG</div>
              <p className="muted">
                Wyssenfluhstrasse 1, 8832 Wollerau, Suisse
              </p>
              <p className="muted">Registre du commerce : CH-130.3.017.565-5</p>
              <p className="muted">Depuis 2011</p>
            </div>
            <div>
              <div className="footer__title">Contact</div>
              <ul className="muted footer__list">
                <li>+41 77 956 91 83</li>
                <li><a href="mailto:contact@dteholdingag.com">contact@dteholdingag.com</a></li>
                <li><a href="mailto:ceo@dteholdingag.com">ceo@dteholdingag.com</a></li>
                <li><a href="mailto:n.patel@dteholdingag.com">n.patel@dteholdingag.com</a> · <a href="mailto:a.ofer@dteholdingag.com">a.ofer@dteholdingag.com</a></li>
              </ul>
            </div>
            <div>
              <div className="footer__title">Mentions</div>
              <p className="muted">
                Informations à caractère informatif. Aucune offre au public. Risques d’investissement.
              </p>
            </div>
          </div>
          <div className="container footer__bottom">
            © {new Date().getFullYear()} DTE Holding AG — Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  );
    }
