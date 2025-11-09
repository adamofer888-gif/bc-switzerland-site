import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main>
      {/* SECTION HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>DTE HOLDING AG</h1>
          <p>Société suisse de gestion de patrimoine, capital-risque et structuration financière.</p>
          <a href="/contact" className="cta-button">Nous contacter</a>
        </div>
      </section>

      {/* SECTION SERVICES RAPIDES */}
      <section className="services-home fade-in">
        <h2>Nos domaines d’expertise</h2>

        <div className="services-grid">
          <div className="service-box">
            <h3>Gestion de patrimoine</h3>
            <p>Protection du capital, diversification, stratégie long terme.</p>
          </div>

          <div className="service-box">
            <h3>Capital à risque</h3>
            <p>Investissements privés, projets technologiques, startups, blockchain.</p>
          </div>

          <div className="service-box">
            <h3>Immobilier & actifs internationaux</h3>
            <p>Acquisition, structuration, financement et optimisation.</p>
          </div>
        </div>

        <a href="/services" className="cta-secondary">Voir nos services</a>
      </section>

      {/* SECTION POURQUOI NOUS FAIRE CONFIANCE */}
      <section className="why-us">
        <h2>Pourquoi nous faire confiance ?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>Expertise Suisse</h3>
            <p>Exécution rapide, gouvernance stricte, confidentialité totale.</p>
          </div>

          <div className="why-card">
            <h3>Protection du capital</h3>
            <p>Stratégies contrôlées, diversification, gestion du risque.</p>
          </div>

          <div className="why-card">
            <h3>Solutions sur mesure</h3>
            <p>Chaque client est accompagné personnellement selon sa situation.</p>
          </div>

          <div className="why-card">
            <h3>Réseau financier & bancaire</h3>
            <p>Accès direct à des partenaires institutionnels et privés.</p>
          </div>
        </div>
      </section>
    </main>
  );
    }
