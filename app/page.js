export const metadata = {
  title: "DTE Holding AG – Gestion patrimoniale suisse et capital privé",
  description:
    "DTE Holding AG est une société suisse spécialisée dans la gestion de patrimoine, les investissements privés et la création de valeur durable.",
};

export default function Home() {
  return (
    <main className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>

      {/* --- SECTION D’INTRO --- */}
      <section className="section">
        <p className="sub">GESTION PATRIMONIALE SUISSE</p>
        <h1 className="h1">Discipline, transparence, exécution</h1>
        <p className="lead" style={{ maxWidth: 820 }}>
          Société suisse basée à Wollerau, DTE Holding AG accompagne des investisseurs privés et
          institutionnels avec une approche structurée, prudente et orientée résultats.
        </p>
        <div className="actions" style={{ marginTop: 12 }}>
          <a className="btn gold" href="/contact">Nous contacter</a>
          <a className="btn" href="/services">Nos services</a>
        </div>
      </section>

      {/* --- 3 CARTES PRINCIPALES --- */}
      <section className="cards">
        <article className="card">
          <p className="card_title">Gestion de patrimoine</p>
          <p>Allocation d’actifs disciplinée, protection du capital et horizon long terme.</p>
          <a className="btn" href="/services">Voir plus</a>
        </article>

        <article className="card">
          <p className="card_title">Investissements privés</p>
          <p>Opportunités sélectionnées, analyse rigoureuse, suivi et reporting.</p>
          <a className="btn" href="/services">Voir plus</a>
        </article>

        <article className="card">
          <p className="card_title">Capital & stratégie</p>
          <p>Conseil stratégique, structurations, accompagnement exécutif.</p>
          <a className="btn" href="/team">Notre équipe</a>
        </article>
      </section>

      {/* ✅ ✅ ✅ SECTION CONFIANCE & SÉCURITÉ (NOUVELLE) ✅ ✅ ✅ */}
      <section className="section">
        <p className="sub">CONFIANCE & SÉCURITÉ</p>
        <h2 className="h2">Standards suisses, exécution irréprochable</h2>
        <p className="lead" style={{ maxWidth: 820 }}>
          DTE Holding AG opère selon des principes de prudence, de transparence et de confidentialité.
          Nous allions discipline d’investissement et contrôle du risque pour créer de la valeur durable.
        </p>
      </section>

      <section className="cards">
        <article className="card">
          <p className="card_title">Gouvernance & conformité</p>
          <p>Procédures internes strictes, ségrégation des fonctions, contrôles récurrents
            et reporting clair. Traçabilité et documentation à chaque étape.</p>
        </article>

        <article className="card">
          <p className="card_title">Gestion du risque</p>
          <p>Allocation disciplinée, due diligence approfondie et scénarios de stress.
            Protection du capital et priorisation de la résilience.</p>
        </article>

        <article className="card">
          <p className="card_title">Confidentialité suisse</p>
          <p>Relation privée et discrète. Données protégées, échanges sécurisés,
            accès restreint et contrôle d’identité systématique.</p>
        </article>
      </section>

      <section className="cards">
        <article className="card">
          <p className="card_title">Références clés</p>
          <p>RC : CH-130.3.017.565-5 · Société suisse établie depuis 2011 · Siège : Wollerau.</p>
          <a className="btn" href="/contact">Nous contacter</a>
        </article>
      </section>

    </main>
  );
        }
