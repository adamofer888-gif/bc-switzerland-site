// app/apropos/page.js
import "./apropos.css";

export const metadata = {
  title: "À propos – BC Switzerland GmbH",
  description:
    "Présentation de BC Switzerland GmbH, société suisse d’accompagnement financier, de structuration et de coordination de projets.",
};

export default function AproposPage() {
  return (
    <main className="apropos-page">
      {/* HERO */}
      <section className="ap-hero">
        <div className="ap-hero-inner">
          <span className="eyebrow">À propos</span>
          <h1>BC Switzerland GmbH</h1>
          <p className="ap-lead">
            BC Switzerland GmbH est une société basée en Suisse qui accompagne
            des dirigeants, des entrepreneurs et des investisseurs dans des
            situations nécessitant davantage de structure, de coordination et de
            clarté.
          </p>
        </div>
      </section>

      {/* IDENTITÉ & POSITIONNEMENT */}
      <section className="ap-section">
        <div className="ap-inner">
          <h2>Identité & positionnement</h2>
          <p className="ap-text">
            L’objectif de BC Switzerland n’est pas de se présenter comme une entité
            « spectaculaire », mais comme une structure stable, organisée et
            capable de gérer des dossiers qui demandent de la méthode et du suivi.
          </p>
          <p className="ap-text">
            Nous intervenons principalement sur des sujets où il est nécessaire
            de clarifier les rôles, de structurer les échanges et de cadrer les
            décisions, en lien avec des enjeux financiers ou stratégiques.
          </p>
        </div>
      </section>

      {/* FAÇON DE TRAVAILLER */}
      <section className="ap-section ap-alt">
        <div className="ap-inner">
          <h2>Notre façon de travailler</h2>
          <div className="ap-grid">
            <div className="ap-block">
              <h3>Structure & méthode</h3>
              <p>
                Chaque dossier est organisé avec un cadre précis, un calendrier
                réaliste et des points d’avancement documentés. Cela permet
                d’éviter les malentendus et de garder une vision claire des priorités.
              </p>
            </div>
            <div className="ap-block">
              <h3>Relation avec le client</h3>
              <p>
                Nous privilégions les échanges directs, factuels et réguliers.
                Le client sait avec qui il échange, où en est le dossier et quels
                sont les prochains points à traiter.
              </p>
            </div>
            <div className="ap-block">
              <h3>Collaboration avec des partenaires</h3>
              <p>
                Lorsque nécessaire, nous travaillons avec des conseils externes
                (juridiques, fiscaux, techniques) choisis par le client ou proposés
                pour étude. Chacun reste dans son rôle, dans un cadre clair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPES & VALEURS */}
      <section className="ap-section">
        <div className="ap-inner">
          <h2>Principes & valeurs</h2>
          <div className="ap-values">
            <div className="ap-value">
              <h3>Discrétion</h3>
              <p>
                Les informations partagées sont traitées avec un haut niveau de
                confidentialité et de respect.
              </p>
            </div>
            <div className="ap-value">
              <h3>Exigence</h3>
              <p>
                Un niveau d’exigence élevé dans la préparation, la structuration
                et le suivi des dossiers.
              </p>
            </div>
            <div className="ap-value">
              <h3>Transparence</h3>
              <p>
                Un discours mesuré, sans promesses irréalistes, avec une vision
                claire des limites et des possibilités.
              </p>
            </div>
            <div className="ap-value">
              <h3>Stabilité</h3>
              <p>
                Une approche long terme, qui privilégie la continuité plutôt que
                les effets ponctuels ou superficiels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="ap-section ap-cta">
        <div className="ap-inner ap-cta-inner">
          <div>
            <h2>En savoir plus sur BC Switzerland</h2>
            <p>
              Pour une présentation plus détaillée ou pour évoquer une situation
              spécifique, un échange confidentiel peut être organisé sur demande.
            </p>
          </div>
          <a href="/contact" className="btn btn-primary">
            Contacter la société →
          </a>
        </div>
      </section>
    </main>
  );
              }
