import "./globals.css";
import dynamic from "next/dynamic";

export const metadata = {
  title: "DTE Holding AG",
  description: "Innovations • Capital à Risque • Développement Digital",
};

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
