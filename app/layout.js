import './globals.css';

export const metadata = {
  title: 'DTE Holding AG',
  description: 'Innovations • Capital à Risque • Développement Digital',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header style={{ background: '#0f172a', padding: '20px' }}>
          <h2 style={{ color: 'white', margin: 0 }}>DTE Holding AG</h2>
        </header>

        {children}

        <footer>
          <p>© {new Date().getFullYear()} DTE Holding AG — Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
