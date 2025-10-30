
import './globals.css';

export const metadata = {
  title: 'DTE Holding AG',
  description: 'Innovations • Capital à Risque • Développement Digital',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
