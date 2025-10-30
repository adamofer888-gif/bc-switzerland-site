"use client";

import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "DTE Holding AG",
  description: "Innovations • Capital à Risque • Développement Digital",
};

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
