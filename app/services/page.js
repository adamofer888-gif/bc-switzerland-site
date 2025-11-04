export const metadata = {
  title: "Services - DTE Holding AG",
  description:
    "Gestion de patrimoine, investissements privés, capital à risque et solutions financières.",
};

export default function Services() {
  return (
    <div className="page-container">
      <section className="hero-services">
        <h1>Nos Services</h1>
        <p>
          Une expertise suisse dédiée à la performance, la confidentialité et la stabilité.
        </p>
      </section>

      <section className="service-section">
        <h2>Gestion de patrimoine</h2>
        <p>
          Nous construisons, optimisons et sécurisons le patrimoine de nos clients
          avec une vision long terme et une gestion strictement encadrée.
        </p>
      </section>

      <section className="service-section">
        <h2>Investissements privés & Capital à risque</h2>
        <p>
          Sélection d'opportunités à forte rentabilité, analyse approfondie,
          gestion rigoureuse du risque et accompagnement complet dans chaque projet.
        </p>
      </section>

      <section className="service-section">
        <h2>Finance & stratégie</h2>
        <p>
          Accompagnement des entreprises : financement, structuration,
          optimisation et stratégie de croissance avec précision suisse.
        </p>
      </section>
    </div>
  );
}
