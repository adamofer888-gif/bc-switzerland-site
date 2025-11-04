export const metadata = {
  title: "Services — DTE Holding AG",
  description:
    "Gestion de patrimoine, capital à risque et solutions financières sur mesure.",
};

export default function Services() {
  return (
    <main className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
      <section className="section">
        <p className="sub">NOS EXPERTISES</p>
        <h1 className="h1">Services conçus pour créer de la valeur</h1>
        <p className="lead" style={{ maxWidth: 820 }}>
          Une approche suisse fondée sur la rigueur, la confidentialité et l’exécution
          mesurable. Des solutions adaptées à chaque profil d’investisseur.
        </p>
      </section>

      <section className="cards">
        <article className="card">
          <p className="card_title">Gestion de patrimoine</p>
          <p>
            Construction et optimisation de portefeuilles, allocation disciplinée
            du capital, cadre de risque strict, suivi et reporting transparents.
          </p>
          <a className="btn gold" href="mailto:contact@dteholdingag.com">Nous consulter →</a>
        </article>

        <article className="card">
          <p className="card_title">Capital à risque</p>
          <p>
            Sélection d’opportunités à fort potentiel, due diligence approfondie,
            structuration et accompagnement des participations dans la durée.
          </p>
          <a className="btn" href="mailto:contact@dteholdingag.com">Parler à un expert</a>
        </article>

        <article className="card">
          <p className="card_title">Finance & stratégie</p>
          <p>
            Structuration financière, financement, optimisation opérationnelle
            et accompagnement des dirigeants pour une croissance durable.
          </p>
          <a className="btn" href="/contact">Prendre contact</a>
        </article>
      </section>

      <section className="section">
        <h2 className="h2">Notre méthode</h2>
        <p>
          1) Analyse des objectifs · 2) Sélection des actifs · 3) Cadre de risque ·
          4) Exécution · 5) Contrôle et amélioration continue.
        </p>
      </section>
    </main>
  );
              }
