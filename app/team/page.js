"use client";

import "./team.css";

export const metadata = {
  title: "Team – DTE Holding AG",
  description: "Découvrez l’équipe dirigeante de DTE Holding AG.",
};

export default function TeamPage() {
  return (
    <main className="relative fade-block">
      {/* HERO */}
      <section
        aria-label="En-tête Team"
        className="relative w-full h-[280px] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Notre équipe
        </h1>
      </section>

      {/* TEAM CARDS */}
      <section className="container py-24">
        <h2 className="text-center text-3xl font-semibold text-white mb-16 fade-block">
          Dirigeants DTE Holding AG
        </h2>

        <div className="grid gap-10 md:grid-cols-3 fade-block">
          {/* CEO */}
          <article className="team-card">
            <h3 className="team-name">Daniel Thomas Eggenberger</h3>
            <p className="team-role">CEO – Chief Executive Officer</p>
            <p className="team-desc">
              Fondateur et dirigeant de DTE Holding AG. Expert en gestion
              stratégique, développement d’entreprises et gouvernance.
            </p>
          </article>

          {/* COO */}
          <article className="team-card">
            <h3 className="team-name">Navneet Patel</h3>
            <p className="team-role">COO – Chief Operating Officer</p>
            <p className="team-desc">
              Responsable des opérations, structuration, due diligence et
              exécution des projets technologiques.
            </p>
          </article>

          {/* CFO */}
          <article className="team-card">
            <h3 className="team-name">Adam Ofer</h3>
            <p className="team-role">CFO – Chief Financial Officer</p>
            <p className="team-desc">
              Spécialiste en finance, reporting, stratégie d’investissement et
              optimisation des actifs.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
      }
