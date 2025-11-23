import "./equipe.css";

export const metadata = {
  title: "Équipe - BC Switzerland GmbH",
  description: "Découvrez l’équipe dirigeante de BC Switzerland GmbH.",
};

export default function EquipePage() {
  return (
    <section className="team-page">
      
      {/* HERO */}
      <div className="team-hero">
        <div className="team-hero-inner">
          <span className="eyebrow">Notre direction</span>
          <h1>Équipe dirigeante</h1>
          <p className="lead">
            Une gouvernance structurée et expérimentée au service de la performance, 
            de la transparence et de la confiance de nos partenaires.
          </p>
        </div>
      </div>

      {/* TEAM GRID */}
      <div className="team-container">

        <div className="team-member">
          <h3>Teresa Marie Vermillion</h3>
          <p className="role">Chief Executive Officer (CEO)</p>
          <p className="member-email">teresa@bc-switzerland.ch</p>
        </div>

        <div className="team-member">
          <h3>Navneet Patel</h3>
          <p className="role">Chief Operating Officer (COO)</p>
          <p className="member-email">n.patel@bc-switzerland.ch</p>
        </div>

        <div className="team-member">
          <h3>Adam Ofer</h3>
          <p className="role">Chief Financial Officer (CFO)</p>
          <p className="member-email">a.ofer@bc-switzerland.ch</p>
        </div>

        <div className="team-member">
          <h3>Simon Mulliez</h3>
          <p className="role">Chief Technology Officer (CTO)</p>
          <p className="member-email">s.mulliez@bc-switzerland.ch</p>
        </div>

      </div>

    </section>
  );
}
