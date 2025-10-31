// app/contact/page.js

export const metadata = {
  title: "Contact — DTE Holding AG",
  description:
    "Contactez DTE Holding AG à Wollerau (Suisse) pour toute demande d’information, de partenariat ou de projet.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      {/* HERO */}
      <section aria-label="En-tête Contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?q=80&w=1600&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Parlons de votre projet
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Contact
          </h1>
          <p className="mt-5 max-w-3xl text-slate-300 md:text-lg leading-relaxed">
            Pour toute demande d’information, de partenariat ou de projet,
            notre équipe vous répond rapidement.
          </p>
        </div>
      </section>

      {/* COORDONNÉES + CTA */}
      <section className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 -mt-10 md:-mt-14 relative">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Adresse */}
            <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="text-xs uppercase tracking-widest text-slate-400">Adresse</div>
              <h3 className="mt-2 text-lg font-medium text-white">
                Wyssenfluhstrasse 1
                <br />
                8832 Wollerau, Suisse
              </h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Wyssenfluhstrasse+1%2C+8832+Wollerau%2C+Suisse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-amber-300 hover:text-amber-200 font-medium"
              >
                Ouvrir sur Google Maps →
              </a>
            </article>

            {/* Téléphone */}
            <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="text-xs uppercase tracking-widest text-slate-400">Téléphone</div>
              <h3 className="mt-2 text-lg font-medium text-white">+41 77 956 91 83</h3>
              <a href="tel:+41779569183" className="inline-block mt-4 text-amber-300 hover:text-amber-200 font-medium">
                Appeler →
              </a>
            </article>

            {/* Email */}
            <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="text-xs uppercase tracking-widest text-slate-400">Email</div>
              <h3 className="mt-2 text-lg font-medium text-white">contact@dteholdingag.com</h3>
              <a
                href="mailto:contact@dteholdingag.com"
                className="inline-block mt-4 text-amber-300 hover:text-amber-200 font-medium"
              >
                Écrire un email →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* MAP EMBED (pas d’API clé) */}
      <section className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 mt-8">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="Localisation — DTE Holding AG"
              src="https://www.google.com/maps?q=Wyssenfluhstrasse+1,+8832+Wollerau,+Suisse&output=embed&z=15"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
