// app/contact/page.js
export const metadata = {
  title: "Contact – DTE Holding AG",
  description:
    "Contactez DTE Holding AG à Wollerau (Suisse) pour toute demande d’information, de partenariat ou de projet.",
};

export default function ContactPage() {
  function handleSubmit(e) {
    e.preventDefault();

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    const sujet = (form.get("sujet") || "Message").toString();

    const corps =
      `Nom: ${(form.get("nom") || "").toString()}\n` +
      `Email: ${(form.get("email") || "").toString()}\n` +
      `Téléphone: ${(form.get("tel") || "").toString()}\n\n` +
      `${(form.get("message") || "").toString()}`;

    window.location.href = `mailto:contact@dteholdingag.com?subject=${encodeURIComponent(
      sujet
    )}&body=${encodeURIComponent(corps)}`;
  }

  return (
    <main className="relative">
      {/* HERO */}
      <section aria-label="En-tête Contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506703215536-0fd2a7f6f5d7?auto=format&fit=crop&w=1600&q=80')",
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
          <p className="mt-5 max-w-3xl text-slate-300 md:text-lg">
            Pour toute demande d’information, de partenariat ou de projet,
            notre équipe vous répond rapidement.
          </p>
        </div>
      </section>

      {/* BLOC COORDONNÉES + FORMULAIRE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 md:-mt-14 relative">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Adresse */}
          <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="text-xs uppercase tracking-widest text-slate-400">
              Adresse
            </div>
            <h3 className="mt-2 text-lg font-medium text-white">
              Wyssenfluhstrasse 1
              <br />
              8832 Wollerau, Suisse
            </h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Wyssenfluhstrasse+1%2C+8832+Wollerau%2C+Suisse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-amber-300 hover:text-amber-200"
            >
              Ouvrir sur Google Maps →
            </a>
          </article>

          {/* Téléphone */}
          <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="text-xs uppercase tracking-widest text-slate-400">
              Téléphone
            </div>
            <h3 className="mt-2 text-lg font-medium text-white">
              +41 77 956 91 83
            </h3>
            <a
              href="tel:+41779569183"
              className="inline-block mt-4 text-amber-300 hover:text-amber-200"
            >
              Appeler maintenant →
            </a>
          </article>

          {/* Email */}
          <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="text-xs uppercase tracking-widest text-slate-400">
              Email
            </div>
            <h3 className="mt-2 text-lg font-medium text-white">
              contact@dteholdingag.com
            </h3>

            <a
              href="mailto:contact@dteholdingag.com"
              className="inline-block mt-4 text-amber-300 hover:text-amber-200"
            >
              Envoyer un email →
            </a>
          </article>
        </div>

        {/* FORMULAIRE */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">
            Formulaire de contact
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              required
              name="nom"
              placeholder="Votre nom"
              className="bg-slate-800/50 border border-white/10 rounded-lg p-3 text-white"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Votre email"
              className="bg-slate-800/50 border border-white/10 rounded-lg p-3 text-white"
            />
          </div>

          <input
            name="tel"
            placeholder="Téléphone (optionnel)"
            className="w-full mt-4 bg-slate-800/50 border border-white/10 rounded-lg p-3 text-white"
          />

          <input
            name="sujet"
            placeholder="Sujet"
            className="w-full mt-4 bg-slate-800/50 border border-white/10 rounded-lg p-3 text-white"
          />

          <textarea
            required
            name="message"
            placeholder="Votre message"
            rows="5"
            className="w-full mt-4 bg-slate-800/50 border border-white/10 rounded-lg p-3 text-white"
          />

          <button
            type="submit"
            className="mt-6 bg-amber-400 hover:bg-amber-300 text-black font-medium rounded-lg px-6 py-3"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}
