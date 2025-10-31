export const metadata = {
  title: "Team – DTE Holding AG",
  description: "Découvrez l’équipe de direction : expertise, gouvernance, stratégie et excellence opérationnelle.",
};

import "./team.css";

export default function Team() {
  return (
    <section className="container team fade-block">
      <h1 className="team_title">Notre équipe</h1>
      <p className="team_intro">
        Des dirigeants expérimentés combinant vision stratégique, excellence opérationnelle et gouvernance exigeante.
      </p>

      <div className="team_grid">
        <div className="team_card">
          <h3 className="role">CEO</h3>
          <h2 className="name">Daniel Thomas Eggenberger</h2>
          <p>
            Direction générale, vision long terme et gouvernance. Focalisé sur la création de valeur durable via une allocation disciplinée
            du capital et l’excellence d’exécution.
          </p>
        </div>

        <div className="team_card">
          <h3 className="role">COO</h3>
          <h2 className="name">Navneet Patel</h2>
          <p>
            Opérations, processus et performance. Mise en place de systèmes robustes, due diligence opérationnelle et pilotage de la croissance.
          </p>
        </div>

        <div className="team_card">
          <h3 className="role">CFO</h3>
          <h2 className="name">Adam Ofer</h2>
          <p>
            Finance, contrôle des risques et structuration. Reporting clair, allocation optimale des ressources, gouvernance et transparence.
          </p>
        </div>
      </div>

      <h2 className="pillars_title">Nos valeurs clés</h2>
      
      <div className="pillars_grid">
        <div className="pillars_card">
          <span className="number">01</span>
          <h3>Rigueur & gouvernance</h3>
          <p>Comités, processus, contrôle des risques et indépendance d’esprit.</p>
        </div>

        <div className="pillars_card">
          <span className="number">02</span>
          <h3>Orientation valeur</h3>
          <p>Focus ROI, impact durable, exécution mesurable.</p>
        </div>

        <div className="pillars_card">
          <span className="number">03</span>
          <h3>Confidentialité</h3>
          <p>Standards suisses, confidentialité absolue et éthique de haut niveau.</p>
        </div>
      </div>
    </section>
  );
}
