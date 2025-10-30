import './globals.css';

export const metadata = {
  title: 'DTE Holding AG',
  description: 'Gestion de patrimoine & capital à risque – Suisse',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
