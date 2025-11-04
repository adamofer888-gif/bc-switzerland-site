export const metadata = {
  title: "Team - DTE Holding AG",
  description:
    "Découvrez l’équipe dirigeante de DTE Holding AG, basée à Wollerau en Suisse.",
};

export default function Team() {
  return (
    <div className="page-container">
      <section className="hero-team">
        <h1>Notre équipe</h1>
        <p>
          Une direction experte, structurée et dédiée à la performance de nos investisseurs.
        </p>
      </section>

      <section className="team-list">

        <div className="team-card">
          <h2>Daniel Thomas Eggenberger</h2>
          <h3>CEO – Fondateur</h3>
          <p>
            Entrepreneur suisse spécialisé dans la gestion patrimoniale et l’investissement.
            Il supervise la stratégie globale, les relations institutionnelles et le développement de la société.
          </p>
        </div>

        <div className="team-card">
          <h2>Navneet Patel</h2>
          <h3>COO</h3>
          <p>
            Responsable des opérations, il pilote la conformité, la gestion interne
            et la mise en œuvre des stratégies de développement.
          </p>
        </div>

        <div className="team-card">
          <h2>Adam Ofer</h2>
          <h3>CFO</h3>
          <p>
            En charge de la finance et de la gestion des risques,
            il structure les investissements et assure une croissance durable.
          </p>
        </div>

      </section>
    </div>
  );
}
