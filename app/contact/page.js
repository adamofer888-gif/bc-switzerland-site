export const metadata = {
  title: "Contact – DTE Holding AG",
  description: "Contact officiel de DTE Holding AG à Wollerau, Suisse.",
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 text-white">

      {/* TITRE */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        Contact
      </h1>
      <p className="mt-4 text-gray-300 md:text-lg leading-relaxed max-w-3xl">
        Pour toute demande d'information, d'investissement ou de partenariat,
        notre équipe vous répond rapidement et en toute confidentialité.
      </p>

      {/* BLOC INFO + CARTE */}
      <div className="mt-16 grid md:grid-cols-2 gap-10">

        {/* BLOC COORDONNÉES SOPHISTIQUÉ */}
        <div className="bg-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur">
          <h2 className="text-2xl font-medium text-white">Coordonnées</h2>

          <div className="mt-4 space-y-3 text-gray-300">
            <p><strong className="text-white">Adresse</strong><br />
              Wyssenfluhstrasse 1<br />
              8832 Wollerau, Suisse
            </p>

            <p><strong className="text-white">Téléphone</strong><br />
              +41 77 956 91 83
            </p>

            <p><strong className="text-white">Email</strong><br />
              contact@dteholdingag.com
            </p>
          </div>
        </div>

        {/* MAP ENCADRÉE PROPRE */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <iframe
            width="100%"
            height="320"
            loading="lazy"
            allowFullScreen
            style={{ border: 0 }}
            src="https://www.google.com/maps?q=Wyssenfluhstrasse+1+8832+Wollerau+Suisse&output=embed">
          </iframe>
        </div>
      </div>

      {/* FOOTER TEXT ESPACÉ */}
      <div className="mt-20 text-center text-gray-400 text-sm">
        © 2025 DTE Holding AG — Tous droits réservés.
      </div>
    </main>
  );
}
