export const metadata = {
  title: "Contact – DTE Holding AG",
  description: "Contactez DTE Holding AG – Wollerau, Suisse.",
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-white">
      
      {/* TITRE */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        Contact
      </h1>
      <p className="mt-4 text-gray-300 md:text-lg leading-relaxed max-w-3xl">
        Une équipe disponible, réactive et engagée. Contactez-nous pour un projet,
        un investissement ou une collaboration stratégique.
      </p>

      {/* INFOS DE CONTACT */}
      <section className="mt-12 grid md:grid-cols-2 gap-10">
        
        <div>
          <h2 className="text-2xl font-medium text-white">Coordonnées</h2>
          <p className="mt-3 text-gray-300">
            <strong>Adresse :</strong><br />
            Wyssenfluhstrasse 1<br />
            8832 Wollerau<br />
            Suisse
          </p>

          <p className="mt-4 text-gray-300">
            <strong>Téléphone :</strong><br />
            +41 77 956 91 83
          </p>

          <p className="mt-4 text-gray-300">
            <strong>Email :</strong><br />
            contact@dteholdingag.com
          </p>
        </div>

        {/* ✅ MAP SANS CLÉ API – SÉCURISÉ */}
        <div className="rounded-2xl overflow-hidden border border-white/20">
          <iframe
            width="100%"
            height="300"
            loading="lazy"
            allowFullScreen
            style={{ border: 0 }}
            src="https://www.google.com/maps?q=Wyssenfluhstrasse+1+8832+Wollerau+Suisse&output=embed">
          </iframe>
        </div>

      </section>

    </main>
  );
        }
