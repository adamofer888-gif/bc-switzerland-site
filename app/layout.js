// app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "DTE HOLDING AG — Gestion de patrimoine & Capital à risque",
  description:
    "Société suisse basée à Wollerau. Depuis 2011, nous accompagnons nos clients dans la gestion, la protection et la croissance de leur patrimoine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-[#0b0d10] text-gray-200 antialiased">
        {/* Barre de navigation (présente partout) */}
        <Navbar />

        {/* Contenu des pages */}
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

        {/* Pied de page commun */}
        <footer className="mt-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <p>
                © {new Date().getFullYear()} DTE HOLDING AG — Tous droits réservés.
              </p>
              <p className="text-gray-400">
                Registre du commerce : <span className="text-gray-300">CH-130.3.017.565-5</span> •
                Depuis 2011
              </p>
            </div>

            <div className="mt-3 text-gray-400">
              Wyssenfluhstrasse 1, 8832 Wollerau, Suisse • +41 77 956 91 83 • contact@dteholdingag.com
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
                  }
