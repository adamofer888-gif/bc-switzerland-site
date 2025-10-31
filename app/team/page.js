import "./team.css";
import ClientFade from "./ClientFade";

export const metadata = {
  title: "Team - DTE Holding AG",
  description: "Découvrez l’équipe dirigeante et nos principes d’exécution.",
};

export default function Team() {
  return (
    <main className="container">
      <ClientFade>
        <section className="section fade-block">
          <p className="sub">NOTRE ÉQUIPE</p>
          <h1 className="h1">Des dirigeants au service de l’excellence</h1>
          <p className="lead">
            Vision stratégique, exécution opérationnelle, gouvernance exigeante.
            Une équipe dédiée à la création de valeur durable.
          </p>
          <div className="actions">
            <a className="btn gold" href="mailto:ceo@dteholdingag.com">Contacter le board →</a>
            <a className="btn" href="#principes">Nos principes</a>
          </div>
        </section>

        <section className="cards fade-block">
          <div className="card">
            <p className="card_title">Daniel Thomas Eggenberger — CEO</p>
            <p>
              Direction générale, vision long terme, allocation disciplinée du capital
              et excellence d’exécution.
            </p>
          </div>
          <div className="card">
            <p className="card_title">Navneet Patel — COO</p>
            <p>
              Opérations, performance, systèmes robustes, due diligence opérationnelle
              et pilotage de la croissance.
            </p>
          </div>
          <div className="card">
            <p className="card_title">Adam Ofer — CFO</p>
            <p>
              Finance, allocation optimale des ressources, contrôle des risques,
              reporting clair et rigoureux.
            </p>
          </div>
        </section>

        <section id="principes" className="section fade-block">
          <h2 className="h2">Nos principes de direction</h2>

          <p className="sub">01</p>
          <h3>Rigueur & gouvernance</h3>
          <p>Comités, processus, contrôle des risques et indépendance d’esprit.</p>

          <p className="sub">02</p>
          <h3>Orientation valeur</h3>
          <p>Focus ROI, impact durable, exécution mesurable.</p>

          <p className="sub">03</p>
          <h3>Confidentialité</h3>
          <p>Standards suisses, éthique, confidentialité absolue.</p>

          <a className="btn gold" href="mailto:ceo@dteholdingag.com">
            Échanger avec la direction →
          </a>
        </section>
      </ClientFade>
    </main>
  );
                }
