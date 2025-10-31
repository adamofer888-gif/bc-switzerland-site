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
      <section
        aria-label="En-tête Contact"
        className="relative overflow-hidden"
      >
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
          <p className="mt-5 max-w-3xl text-slate-300 md:text-lg">
            Pour toute demande d’information, de partenariat ou de projet,
            notre équipe vous répond rapidement.
          </p>
        </div>
      </section>

      {/* COORDONNÉES + CTA */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 md:-mt-14 relative">
        <div className="grid md:grid-cols-3 gap-6">
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
              +41&nbsp;77&nbsp;956&nbsp;91&nbsp;83
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
              href="mailto:contact@dteholdingag.com?subject=Prise%20de%20contact"
              className="inline-block mt-4 text-amber-300 hover:text-amber-200"
            >
              Écrire un email →
            </a>
          </article>
        </div>
      </section>

      {/* MAP + FORMULAIRE LIGHT (mailto) */}
      <section className="max-w-6xl mx-auto px-6 mt-10 md:mt-14 grid lg:grid-cols-5 gap-6">
        {/* MAP */}
        <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <iframe
            title="DTE Holding AG — Plan d’accès"
            className="w-full h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={
              "https://www.google.com/maps?q=Wyssenfluhstrasse%201,%208832%20Wollerau,%20Suisse&output=embed&z=15"
            }
          />
        </div>

        {/* “Formulaire” sans backend (mailto) */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <h2 className="text-xl font-semibold text-white">Nous écrire</h2>
          <p className="mt-2 text-slate-300 text-sm">
            Ce formulaire ouvre votre client mail avec les infos pré-remplies.
          </p>

          <form
            action="mailto:contact@dteholdingag.com"
            method="GET"
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              // Construit un mailto avec sujet & corps depuis les inputs
              const f = e.currentTarget as HTMLFormElement;
              const form = new FormData(f);
              const sujet = encodeURIComponent(
                (form.get("subject") as string) || "Prise de contact"
              );
              const corps = encodeURIComponent(
                `Nom: ${(form.get("name") as string) || ""}\n` +
                  `Email: ${(form.get("email") as string) || ""}\n\n` +
                  `${(form.get("message") as string) || ""}`
              );

              (f.action as any) = `mailto:contact@dteholdingag.com?subject=${sujet}&body=${corps}`;
            }}
          >
            <input
              name="name"
              type="text"
              placeholder="Nom et prénom"
              className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
              required
            />
            <input
              name="subject"
              type="text"
              placeholder="Sujet"
              className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Votre message…"
              className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
              required
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-amber-400/90 text-slate-900 font-medium py-3 hover:bg-amber-300 transition"
            >
              Ouvrir mon email
            </button>
            <p className="text-[11px] leading-snug text-slate-500">
              En cliquant, votre logiciel d’email s’ouvrira avec votre message.
              Aucun envoi direct n’est effectué depuis le site.
            </p>
          </form>
        </div>
      </section>

      {/* MENTIONS / FOOTER LÉGER */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-400 text-sm">
          Informations à caractère informatif. Aucune offre au public.
          Risques d’investissement. © {new Date().getFullYear()} DTE Holding AG
        </div>
      </section>
    </main>
  );
                }
