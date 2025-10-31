import "./team.css";

export const metadata = {
  title: "Notre équipe - DTE Holding AG",
  description: "Découvrez l'équipe dirigeante de DTE Holding AG."
};

export default function TeamPage() {
  return (
    <main className="team-page">
      <section className="team-hero fade-block">
        <h1>Notre équipe</h1>
        <p>
          Des dirigeants expérimentés combinant vision stratégique,
          excellence opérationnelle et gouvernance exigeante.
        </p>
      </section>

      <section className="team-list fade-block">
        <h2>Direction</h2>

        <div className="member">
          <h3>CEO — Daniel Thomas Eggenberger</h3>
          <p>
            Direction générale, vision long terme et gouvernance. Focalisé sur
            la création de valeur durable via une allocation disciplinée du
            capital et l’excellence d’exécution.
          </p>
        </div>

        <div className="member">
          <h3>COO — Navneet Patel</h3>
          <p>
            Opérations, processus et performance. Mise en place de systèmes
            robustes, due diligence opérationnelle et pilotage de la croissance.
          </p>
        </div>

        <div className="member">
          <h3>CFO — Adam Ofer</h3>
          <p>
            Finance, contrôle des risques, structuration, reporting clair et
            allocation optimale des ressources.
          </p>
        </div>
      </section>

      <section className="values fade-block">
        <h2>Nos valeurs</h2>

        <div className="value-card">
          <span>01</span>
          <h3>Rigueur & gouvernance</h3>
          <p>Comités, processus, contrôle des risques et indépendance d’esprit.</p>
        </div>

        <div className="value-card">
          <span>02</span>
          <h3>Création de valeur</h3>
          <p>Focus ROI, impact durable, exécution mesurable.</p>
        </div>

        <div className="value-card">
          <span>03</span>
          <h3>Confidentialité</h3>
          <p>Standards suisses, confidentialité absolue, éthique de haut niveau.</p>
        </div>
      </section>
    </main>
  );
              }
