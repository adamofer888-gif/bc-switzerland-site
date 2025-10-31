// app/services/page.js
import Link from "next/link";

export const metadata = {
  title: "Services — DTE Holding AG",
  description:
    "Gestion de patrimoine, capital à risque et développement digital. Exécution exigeante et design élégant.",
};

export default function ServicesPage() {
  return (
    <main className="text-white">
      {/* HERO avec effet parallax */}
      <section
        aria-label="Hero Services"
        className="relative h-[46rem] md:h-[56rem] w-full overflow-hidden rounded-b-3xl"
      >
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=2000&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            transform: "translateZ(0)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-950/95" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 md:pt-40">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-slate-300/80">
            DTE Holding AG — Suisse
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
            Nos services
          </h1>
          <p className="mt-6 max-w-3xl text-base md:text-lg text-slate-300">
            DTE Holding AG accompagne familles, dirigeants et entrepreneurs
            avec une approche sur-mesure : gestion de patrimoine, capital à
            risque et développement digital. Exécution rigoureuse, design
            élégant.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-amber-400/90 text-black px-5 py-2.5 text-sm font-medium hover:bg-amber-400 transition"
            >
              Parler à un conseiller
            </Link>
            <a
              href="#nav-domaines"
              className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
            >
              Découvrir les domaines
            </a>
          </div>
        </div>
      </section>

      {/* SOUS-NAV STICKY (pills) */}
      <nav
        id="nav-domaines"
        className="sticky top-16 z-20 border-y border-white/10 bg-slate-900/60 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex flex-wrap gap-2 py-3">
            <li>
              <a
                href="#patrimoine"
                className="inline-block rounded-full px-4 py-2 text-sm border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
              >
                Gestion de patrimoine
              </a>
            </li>
            <li>
              <a
                href="#risque"
                className="inline-block rounded-full px-4 py-2 text-sm border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
              >
                Capital à risque
              </a>
            </li>
            <li>
              <a
                href="#digital"
                className="inline-block rounded-full px-4 py-2 text-sm border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
              >
                Développement digital
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Separator />

      {/* 3 CARTES — Domaines */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6">
          <article
            id="patrimoine"
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-7 hover:border-white/20 transition"
          >
            <div className="flex items-center gap-3">
              <IconShield />
              <h2 className="text-xl md:text-2xl font-semibold">
                Gestion de patrimoine
              </h2>
            </div>
            <p className="mt-3 text-slate-300 text-sm md:text-base">
              Allocation & diversification, structuration d’actifs, optimisation
              fiscale et transmission. Une approche sur-mesure pour faire
              croître et protéger votre capital.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-5 text-amber-300 font-medium hover:underline"
            >
              Discuter d’un projet →
            </Link>
          </article>

          <article
            id="risque"
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-7 hover:border-white/20 transition"
          >
            <div className="flex items-center gap-3">
              <IconGraph />
              <h2 className="text-xl md:text-2xl font-semibold">Capital à risque</h2>
            </div>
            <p className="mt-3 text-slate-300 text-sm md:text-base">
              Investissements early-stage, croissance, structuration des deals,
              gouvernance et accompagnement stratégique.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-5 text-amber-300 font-medium hover:underline"
            >
              Nous contacter →
            </Link>
          </article>

          <article
            id="digital"
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-7 hover:border-white/20 transition"
          >
            <div className="flex items-center gap-3">
              <IconCube />
              <h2 className="text-xl md:text-2xl font-semibold">
                Développement digital
              </h2>
            </div>
            <p className="mt-3 text-slate-300 text-sm md:text-base">
              Produits web & mobiles, automatisation, intégrations cloud,
              optimisation UX et plateformes sur-mesure.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-5 text-amber-300 font-medium hover:underline"
            >
              Discuter technique →
            </Link>
          </article>
        </div>
      </section>

      <Separator />

      {/* PILIERS d’exécution (cartes numérotées) */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h3 className="text-2xl md:text-3xl font-semibold">Nos piliers d’exécution</h3>
        <div className="mt-8 grid gap-6">
          <Pillar
            no="01"
            title="Gestion de patrimoine"
            text="Allocation disciplinée, contrôle des risques, relation client dédiée."
          />
          <Pillar
            no="02"
            title="Capital à risque"
            text="Thèses fintech / deeptech / SaaS, sélection, due diligence, gouvernance."
          />
          <Pillar
            no="03"
            title="Conseil stratégique"
            text="Vision produit, M&A, structuration, excellence opérationnelle."
          />
        </div>
      </section>

      {/* BANDEAU CTA avec parallax léger */}
      <section className="relative mx-6 md:mx-auto md:max-w-6xl mb-24">
        <div className="rounded-3xl overflow-hidden border border-white/10">
          <div
            className="h-44 md:h-56 will-change-transform"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              transform: "translateZ(0)",
            }}
          />
          <div className="bg-slate-900/80 px-6 py-7 md:px-10 md:py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="text-lg md:text-xl font-semibold">
                  Un projet à lancer ?
                </h4>
                <p className="text-slate-300 text-sm md:text-base">
                  Nous répondons rapidement avec une première analyse concrète.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block rounded-xl bg-amber-400 text-black px-5 py-2.5 text-sm font-medium hover:bg-amber-300 transition"
              >
                Contacter DTE Holding AG
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ————— Composants utilitaires ————— */

function Separator() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );
}

function Pillar({ no, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-7">
      <div className="text-amber-300/80 tracking-[0.35em] text-xs">{no}</div>
      <h4 className="mt-2 text-xl font-semibold">{title}</h4>
      <p className="mt-2 text-slate-300">{text}</p>
    </div>
  );
}

function IconShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="text-amber-300">
      <path
        fill="currentColor"
        d="M12 2l7 3v6c0 4.97-3.05 9.43-7 11c-3.95-1.57-7-6.03-7-11V5l7-3z"
      />
    </svg>
  );
}
function IconGraph() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="text-amber-300">
      <path
        fill="currentColor"
        d="M3 3h2v18H3V3m16 0h2v18h-2V3M8 13h2v8H8v-8m6-6h2v14h-2V7"
      />
    </svg>
  );
}
function IconCube() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="text-amber-300">
      <path
        fill="currentColor"
        d="M12 2l8 4v12l-8 4l-8-4V6l8-4m0 2.18L6 6.09v.02l6 3.27l6-3.27V6.1l-6-1.92M6 8.28v7.64l5 2.5v-7.64L6 8.28m12 0l-5 2.5v7.64l5-2.5V8.28Z"
      />
    </svg>
  );
              }
