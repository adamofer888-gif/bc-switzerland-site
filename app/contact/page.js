export const metadata = {
  title: "Contact — DTE Holding AG",
  description: "Coordonnées et localisation de DTE Holding AG.",
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-[#B38B47]">
        Contact
      </h1>

      <p className="text-gray-300 md:text-lg mb-10">
        Pour toute demande d’information, de partenariat ou de projet,
        notre équipe vous répond rapidement.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Coordonnées */}
        <div className="space-y-4 text-gray-200">
          <div>
            <div className="text-sm uppercase tracking-wider text-gray-400">Adresse</div>
            <div>Wyssenfluhstrasse 1<br/>8832 Wollerau, Suisse</div>
          </div>

          <div>
            <div className="text-sm uppercase tracking-wider text-gray-400">Téléphone</div>
            <a href="tel:+41779569183" className="hover:text-[#B38B47]">
              +41 77 956 91 83
            </a>
          </div>

          <div>
            <div className="text-sm uppercase tracking-wider text-gray-400">Email</div>
            <a href="mailto:contact@dteholdingag.com" className="hover:text-[#B38B47]">
              contact@dteholdingag.com
            </a>
          </div>
        </div>

        {/* Google Maps */}
        <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10">
          <iframe
            title="DTE Holding AG - Localisation"
            src={
              "https://www.google.com/maps?q=" +
              encodeURIComponent("Wyssenfluhstrasse 1, 8832 Wollerau, Suisse") +
              "&output=embed"
            }
            width="100%"
            height="360"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
    }
