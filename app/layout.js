export const metadata = {
  title: 'DTE Holding AG — Swiss Wealth & Asset Management',
  description: 'Gestion de patrimoine, asset management, immobilier et capital à risque — Wollerau, Suisse.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-[#0A0F1C] text-white">{children}</body>
    </html>
  );
}
