export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      {/* HERO */}
      <section className="py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          DTE Holding AG
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Innovations • Capital à Risque • Développement Digital
        </p>
        <div className="mt-8 flex gap-3">
          <a href="/services/capital-a-risque" className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">
            Découvrir le Capital à Risque
          </a>
          <a href="#contact" className="px-4 py-2 rounded-lg border border-slate-200 text-sm">
            Nous contacter
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-14 border-t border-slate-100">
        <h2 className="text-2xl font-semibold tracking-tight">Nos Services</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-medium">Capital à Risque</h3>
            <p className="mt-2 text-sm text-slate-600">
              Accompagnement d’investissements early-stage et growth, structure de deals, gouvernance.
            </p>
            <a href="/services/capital-a-risque" className="mt-4 inline-block text-sm underline">
              En savoir plus
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-medium">Développement Digital</h3>
            <p className="mt-2 text-sm text-slate-600">
              Produits web & mobiles, optimisation UX, intégrations cloud et automatisations.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-medium">Stratégie & Innovation</h3>
            <p className="mt-2 text-sm text-slate-600">
              Veille, roadmap produits, mise sur le marché et partenariats technologiques.
            </p>
          </div>
        </div>
      </section>

      {/* A PROPOS */}
      <section id="about" className="py-14 border-t border-slate-100">
        <h2 className="text-2xl font-semibold tracking-tight">À propos</h2>
        <p className="mt-4 text-slate-600 max-w-3xl">
          Société suisse basée à Wollerau depuis 2011. Nous accompagnons nos clients dans la
          gestion, la protection et la croissance de leur patrimoine; avec des solutions
          sur-mesure et un suivi dédié.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-14 border-t border-slate-100">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-4 text-slate-700">
          <p>DTE Holding AG</p>
          <p>Wyssenfluhstrasse 1, 8832 Wollerau, Suisse</p>
          <p>Registre du commerce : CH-130.3.017.565-5</p>
          <p className="mt-2">Email : <a className="underline" href="mailto:adamofer888@gmail.com">adamofer888@gmail.com</a></p>
          <p>Tél : +41 (0) **/** ** ** ** (à ajuster si besoin)</p>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-slate-500 border-t border-slate-100">
        © {new Date().getFullYear()} DTE Holding AG — Tous droits réservés.
      </footer>
    </main>
  );
}
