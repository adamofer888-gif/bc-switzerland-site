// app/page.js
import Link from "next/link";
import "./globals.css";
import "./home.css";

export const metadata = {
  title: "DTE Holding AG - Private Investments & Capital Management",
  description:
    "Solutions d’investissement privées, gestion d’actifs et stratégie financière institutionnelle.",
};

export default function Home() {
  return (
    <main>

      {/* ====================== HERO ====================== */}
      <section className="hero fade-in">
        <div className="hero-content">
          <h1>Investissements privés & stratégie financière institutionnelle</h1>
          <p>
            DTE Holding AG accompagne entreprises, investisseurs et porteurs de projets
            à haut potentiel. Notre expertise couvre l’ingénierie financière, la levée
            de fonds, la planification stratégique et l’optimisation d’actifs à long terme.
          </p>

          <Link href="/contact" className="cta-button">
            Contacter un conseiller
          </Link>
        </div>
      </section>

      {/* ====================== SERVICES ====================== */}
      <section className="services-home fade-in">
        <h2>Nos expertises</h2>

        <div className="services-grid">
          <div className="service-box">
            <h3>Private Capital & Levée de fonds</h3>
            <p>
              Structuration financière, accès à des investisseurs privés, optimisation
              de la valorisation et accompagnement stratégique.
            </p>
          </div>

          <div className="service-box">
            <h3>Gestion d’actifs & Patrimoine</h3>
            <p>
              Analyse, allocation, gestion active, diversification et croissance à long terme.
            </p>
          </div>

          <div className="service-box">
            <h3>Acquisition & Développement d'entreprises</h3>
            <p>
              Fusions, acquisitions, scale-up, repositionnement stratégique et expansion internationale.
            </p>
          </div>
        </div>

        <Link href="/services" className="cta-secondary">
          Voir tous nos services
        </Link>
      </section>

      {/* ====================== POURQUOI NOUS ====================== */}
      <section className="why-us fade-in">
        <h2>Pourquoi nous faire confiance ?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>✔ Expertise institutionnelle</h3>
            <p>
              Stratégies conçues selon des standards professionnels, avec gouvernance
              et conformité suisses.
            </p>
          </div>

          <div className="why-card">
            <h3>✔ Réseau d'investisseurs privés</h3>
            <p>
              Collaboration avec family offices, fonds d’investissement, banques privées
              et investisseurs stratégiques.
            </p>
          </div>

          <div className="why-card">
            <h3>✔ Analyse & due diligence</h3>
            <p>
              Études financières, évaluation des risques, audits, business plans et
              stratégies de développement sur mesure.
            </p>
          </div>

          <div className="why-card">
            <h3>✔ Résultats mesurables</h3>
            <p>
              Accompagnement jusqu’à la réalisation : levées de fonds, acquisitions,
              expansion et croissance durable.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== TÉMOIGNAGES ====================== */}
      <section className="testimonials fade-in">
        <h2>Témoignages d’investisseurs et d’entreprises accompagnées</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="quote">
              “DTE Holding AG a piloté notre levée de fonds avec efficacité et professionnalisme.
              Leur réseau d’investisseurs a été déterminant.”
            </p>
            <h4>— Société industrielle (Suisse)</h4>
          </div>

          <div className="testimonial-card">
            <p className="quote">
              “Nous avions besoin d’un accompagnement stratégique pour un projet international.
              L'équipe a structuré la croissance et sécurisé les partenaires financiers.”
            </p>
            <h4>— Start-up technologique (France)</h4>
          </div>

          <div className="testimonial-card">
            <p className="quote">
              “Analyse claire, gestion de risques et développement long terme.
              Une approche professionnelle que nous recommandons.”
            </p>
            <h4>— Investisseur privé</h4>
          </div>
        </div>
      </section>

      {/* ====================== PARTENAIRES ====================== */}
      <section className="partners fade-in">
        <h2>Partenaires & Institutions</h2>
        <p className="partners-text">
          Nous collaborons avec des investisseurs privés, banques, family offices,
          cabinets juridiques et institutions internationales dans le cadre de nos opérations.
        </p>

        <div className="partners-grid">
          <div className="partner-box">Banques Privées</div>
          <div className="partner-box">Family Offices</div>
          <div className="partner-box">Fonds d’investissement</div>
          <div className="partner-box">Avocats & Auditeurs</div>
        </div>
      </section>

    </main>
  );
        }
