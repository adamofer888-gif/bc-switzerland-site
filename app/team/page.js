export const metadata = {
  title: "Team — DTE Holding AG",
  description:
    "Direction et gouvernance — DTE Holding AG, Wollerau (Suisse).",
};

export default function Team() {
  return (
    <main className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
      <section className="section">
        <p className="sub">NOTRE ÉQUIPE</p>
        <h1 className="h1">Des dirigeants au service de l’excellence</h1>
        <p className="lead" style={{ maxWidth: 820 }}>
          Vision stratégique, exécution opérationnelle et gouvernance exigeante.
          Une équipe dédiée à la création de valeur durable.
        </p>
      </section>

      <section className="cards">
        <article className="card">
          <p className="card_title">Daniel Thomas Eggenberger — CEO</p>
          <p>
            Stratégie globale, relations institutionnelles et allocation disciplinée du
            capital. Supervision de la performance et de la création de valeur à long terme.
          </p>
        </article>

        <article className="card">
          <p className="card_title">Navneet Patel — COO</p>
          <p>
            Opérations, conformité et performance opérationnelle. Mise en œuvre des
            processus et pilotage de la croissance.
          </p>
        </article>

        <article className="card">
          <p className="card_title">Adam Ofer — CFO</p>
          <p>
            Finance, contrôle des risques et structuration des investissements. Reporting
            clair et gouvernance financière rigoureuse.
          </p>
        </article>
      </section>

      <section className="section">
        <h2 className="h2">Principes de direction</h2>
        <p>
          Rigueur & gouvernance · Orientation valeur · Confidentialité · Transparence
          dans l’exécution et le reporting.
        </p>
      </section>
    </main>
  );
              }
