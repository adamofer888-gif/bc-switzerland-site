// app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "BC Switzerland – Investment & Holding Company",
  description:
    "BC Switzerland est une société suisse spécialisée dans l’investissement, la gestion d’actifs et les solutions financières premium pour entreprises et investisseurs privés.",
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
