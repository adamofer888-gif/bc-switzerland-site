import Image from "next/image";
import "./team.css";

export const metadata = {
  title: "Team – DTE Holding AG",
  description:
    "Découvrez l’équipe dirigeante de DTE Holding AG : vision stratégique, excellence opérationnelle et gouvernance durable.",
};

export default function TeamPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero team-hero">
        <div className="container">
          <p className="eyebrow">NOTRE ÉQUIPE</p>
          <h1>Des dirigeants au service de l’excellence</h1>
          <p className="lead">
            Vision stratégique, exécution opérationnelle, gouvernance exigeante. Une équipe dédiée à la création de valeur durable.
          </p>

          <div className="hero_actions">
            <a href="/contact" className="btn btn-gold">Contacter le board →</a>
            <a href="#principes" className="btn btn-dark">Nos principes</a>
          </div>
        </div>
      </section>

      {/* ==== EQUIPE DIRIGEANTE ==== */}
      <section className="team_section container fade-block">
        <div className="cards">
          <div className="card">
            <h3 className="card_title">Daniel Thomas Eggenberger</h3>
            <p className="muted">CEO</p>
            <p>
              Direction générale, vision long terme et gouvernance. Focalisé sur la création de valeur durable via une allocation disciplinée du capital et l'excellence d’exécution.
            </p>
          </div>

          <div className="card">
            <h3 className="card_title">Navneet Patel</h3>
            <p className="muted">COO</p>
            <p>
              Opérations, processus et performance. Mise en place de systèmes robustes, due diligence opérationnelle et pilotage de la croissance.
            </p>
          </div>

          <div className="card">
            <h3 className="card_title">Adam Ofer</h3>
            <p className="muted">CFO</p>
            <p>
              Finance, contrôle des risques et structuration. Discipline financière, reporting clair et allocation optimale des ressources.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PRINCIPES ===== */}
      <section id="principes" className="principes container fade-block">
        <h2>Nos principes de direction</h2>

        <div className="cards">
          <div className="card">
            <h3 className="card_title">01 — Rigueur & gouvernance</h3>
            <p>
              Comités, processus, contrôle des risques et indépendance d’esprit.
            </p>
          </div>
          <div className="card">
            <h3 className="card_title">02 — Orientation valeur</h3>
            <p>Focus ROI, impact durable, exécution mesurable.</p>
          </div>
          <div className="card">
            <h3 className="card_title">03 — Confidentialité</h3>
            <p>Standards suisses, confidentialité absolue et éthique de haut niveau.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta_team container fade-block">
        <h2>Parler à la direction ?</h2>
        <p>Nous répondons rapidement et en toute confidentialité.</p>
        <a href="/contact" className="btn btn-gold">Échanger avec nous →</a>
      </section>
    </main>
  );
        }
