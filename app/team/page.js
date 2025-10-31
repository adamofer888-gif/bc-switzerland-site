import "../globals.css";
import Image from "next/image";

export const metadata = {
  title: "Équipe – DTE Holding AG",
  description:
    "Découvrez l’équipe dirigeante de DTE Holding AG : expertise, rigueur suisse, stratégie et excellence opérationnelle.",
};

export default function Team() {
  return (
    <div className="fade-block">
      {/* Hero image */}
      <section className="hero">
        <div className="hero__gradient"></div>
        <Image
          src="/hero.jpg"
          alt="Alpes suisses"
          fill
          priority
          className="hero__img"
        />
        <div className="container hero__grid">
          <h1 className="h1">
            Notre<br /> équipe dirigeante
          </h1>
          <p className="lead">
            Des dirigeants expérimentés combinant vision stratégique, excellence
            opérationnelle et gouvernance exigeante.
          </p>
        </div>
      </section>

      {/* Section: Members */}
      <section className="container">
        <h2 className="title">Direction</h2>

        <div className="cards">
          <div className="card fade-block">
            <p className="card_title">Daniel Thomas Eggenberger – CEO</p>
            <p>
              Direction générale, vision long terme et gouvernance. Création de
              valeur durable via allocation du capital, excellence et stratégie.
            </p>
          </div>

          <div className="card fade-block">
            <p className="card_title">Navneet Patel – COO</p>
            <p>
              Opérations, processus, automations et due diligence
              opérationnelle. Pilotage de la croissance et performance.
            </p>
          </div>

          <div className="card fade-block">
            <p className="card_title">Adam Ofer – CFO</p>
            <p>
              Finance, contrôle des risques, structuration et gestion des
              ressources. Reporting clair et transparence maximale.
            </p>
          </div>
        </div>

        <h2 className="title mt-12">Valeurs clés</h2>

        <div className="cards">
          <div className="card fade-block">
            <p className="card_title">Rigueur & gouvernance</p>
            <p>Processus, comité, contrôle des risques et indépendance
            d’esprit.</p>
          </div>

          <div className="card fade-block">
            <p className="card_title">Orientation valeur</p>
            <p>Focus ROI, impact durable et exécution mesurable.</p>
          </div>

          <div className="card fade-block">
            <p className="card_title">Confidentialité suisse</p>
            <p>Discrétion absolue, éthique et sécurité des informations.</p>
          </div>
        </div>
      </section>
    </div>
  );
              }
