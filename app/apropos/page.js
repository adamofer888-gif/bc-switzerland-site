// app/apropos/page.js
import "./apropos.css";

export const metadata = {
  title: "À propos – DTE Holding AG",
  description:
    "Société suisse basée à Wollerau. Gestion patrimoniale, stratégie d’investissement, capital à risque et gouvernance de niveau institutionnel.",
};

export default function Apropos() {
  return (
    <main className="apropos">
      {/* HERO */}
      <section className="hero">
        <div className="heroInner">
          <h1>À propos de DTE Holding AG</h1>
          <p>
            DTE Holding AG est une société suisse basée à Wollerau, active dans
            l’investissement privé, la structuration patrimoniale et le capital à
            risque. Notre approche repose sur trois fondations : discipline
            d’allocation, contrôle des risques et exécution mesurable.
          </p>
          <div className="heroCtas">
            <a className="btnPrimary" href="/contact">Nous contacter</a>
            <a className="btnGhost" href="/services">Nos services</a>
          </div>
        </div>
      </section>

      {/* 3 CARTES ILLUSTRÉES */}
      <section className="grid">
        <div className="card cardBorder">
          <div
            className="cardImg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1531574591664-f6c925fe01b1?q=80&w=1200&auto=format&fit=crop')",
            }}
          />
          <div className="cardBody">
            <h2>Discipline & traçabilité</h2>
            <p>
              Chaque décision d’investissement est documentée, analysée et
              réévaluée selon des critères continus : rentabilité, risque,
              liquidité et temps de détention. Nous opérons avec des
              méthodologies utilisées par les fonds institutionnels suisses.
            </p>
          </div>
        </div>

        <div className="card cardBorder">
          <div
            className="cardImg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop')",
            }}
          />
          <div className="cardBody">
            <h2>Gouvernance & conformité</h2>
            <p>
              Nos process internes visent la transparence, la conformité suisse,
              et le respect de standards élevés : contrôle interne, reporting,
              auditabilité et règles d’accès strictes aux informations
              confidentielles.
            </p>
          </div>
        </div>

        <div className="card cardBorder">
          <div
            className="cardImg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=1200&auto=format&fit=crop')",
            }}
          />
          <div className="cardBody">
            <h2>Confidentialité & protection des données</h2>
            <p>
              Nous appliquons une politique stricte de confidentialité : données
              chiffrées, serveurs sécurisés, accès restreint et destruction
              automatique des documents en fin de cycle. La discrétion n’est pas
              une promesse commerciale, mais une obligation professionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION EXPERTISE */}
      <section className="expertise">
        <h2>Expertise</h2>
        <p>
          Notre rôle n’est pas uniquement d’investir, mais d’analyser, structurer et
          protéger. Nous accompagnons entrepreneurs, familles privées et
          investisseurs internationaux recherchant un partenaire fiable en
          juridiction suisse.
        </p>
        <ul>
          <li>Gestion de patrimoine & allocation multi-actifs</li>
          <li>Venture Capital & participation dans entreprises privées</li>
          <li>Stratégies défensives, rendement régulier, liquidation contrôlée</li>
          <li>Planification long terme et optimisation des risques</li>
        </ul>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <div className="kpi">Wollerau</div>
          <div className="kpiLabel">Canton de Schwyz – Suisse</div>
        </div>
        <div className="stat">
          <div className="kpi">Exécution</div>
          <div className="kpiLabel">Équipes expérimentées et spécialisées</div>
        </div>
        <div className="stat">
          <div className="kpi">Discrétion</div>
          <div className="kpiLabel">Traitement privé & sécurisé</div>
        </div>
      </section>

      {/* CTA */}
      <section className="ctaBox">
        <h3>Échanger avec la direction</h3>
        <p>
          Communication directe, réponse confidentielle et analyse concrète de votre situation.
        </p>
        <a className="btnPrimary" href="/contact">
          Contact privé →
        </a>
      </section>
    </main>
  );
              }
