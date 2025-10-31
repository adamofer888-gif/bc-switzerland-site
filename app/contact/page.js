export const metadata = {
  title: "Contact – DTE Holding AG",
  description: "Contactez DTE Holding AG à Wollerau, Suisse.",
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        Contact
      </h1>

      <p className="mt-4 text-gray-300 md:text-lg max-w-2xl">
        Notre équipe vous répond dans les plus brefs délais.
      </p>

      {/* ✅ CARD COORDONNÉES */}
      <div className="mt-10 grid md:grid-cols-2 gap-8">

        {/* ✅ Infos */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-white">DTE Holding AG</h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Wyssenfluhstrasse 1<br />
            8832 Wollerau<br />
            Suisse
          </p>

          <p className="mt-4 text-gray-300">
            📞 +41 77 956 91 83<br />
            ✉️ contact@dteholdingag.com
          </p>
        </div>

        {/* ✅ Google Map */}
        <div className="rounded-2xl overflow-hidden border border-white/20">
          <iframe
            width="100%"
            height="300"
            loading="lazy"
            allowFullScreen
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAqYpMUVXl0Gxg2swSbOZLZfZrWqg4Jkpg&q=Wyssenfluhstrasse+1,+8832+Wollerau,+Suisse">
          </iframe>
        </div>
      </div>

    </main>
  );
          }
