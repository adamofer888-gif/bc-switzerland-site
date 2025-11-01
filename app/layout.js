// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DTE Holding AG — Wealth Management & Capital à Risque",
  description:
    "Société suisse de gestion de patrimoine, capital à risque et investissements alternatifs — Wollerau, Suisse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="container" style={{ minHeight: "60vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
