import "./equipe.css";

export const metadata = {
  title: "Équipe dirigeante - BC Switzerland GmbH",
  description: "Découvrez l’équipe dirigeante de BC Switzerland GmbH.",
};

export default function EquipePage() {
  return (
    <main className="equipe-page">
      <section className="eq-hero">
        <div className="eq-hero-inner">
          <h1>Équipe dirigeante</h1>
          <p>
            Une gouvernance expérimentée guidée par l’excellence, la rigueur et
            une vision stratégique durable.
          </p>
        </div>
      </section>

      <section className="eq-section">
        <div className="eq-grid">
          
          <div className="eq-card">
            <div className="initials">TV</div>
            <h3>Teresa Marie Vermillion</h3>
            <strong>Chief Executive Officer (CEO)</strong>
            <p>
              Responsable de la vision globale et de la stratégie de
              développement de BC Switzerland GmbH, elle supervise les grandes
              orientations et garantit l’excellence opérationnelle.
            </p>
          </div>

          <div className="eq-card">
            <div className="initials">NP</div>
            <h3>Navneet Patel</h3>
            <strong>Chief Operating Officer (COO)</strong>
            <p>
              Dirige les opérations quotidiennes et assure la performance des
              processus internes ainsi que la coordination stratégique.
            </p>
          </div>

          <div className="eq-card">
            <div className="initials">AO</div>
            <h3>Adam Ofer</h3>
            <strong>Chief Financial Officer (CFO)</strong>
            <p>
              Garant de la gestion financière, de la structuration des
              investissements et de la solidité économique du groupe.
            </p>
          </div>

          <div className="eq-card">
            <div className="initials">SM</div>
            <h3>Simon Mulliez</h3>
            <strong>Chief Technology Officer (CTO)</strong>
            <p>
              Supervise la transformation digitale, la stratégie technologique
              et la sécurité des infrastructures numériques.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
