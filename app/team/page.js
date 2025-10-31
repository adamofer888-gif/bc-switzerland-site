export const metadata = {
  title: "Team — DTE Holding AG",
  description: "Direction & opérations.",
};

const TEAM = [
  { name: "Daniel Thomas Eggenberger", role: "CEO", bio: "Direction générale, stratégie et relations investisseurs." },
  { name: "Navneet Patel", role: "COO", bio: "Opérations, partenariats et excellence opérationnelle." },
  { name: "Adam Ofer", role: "COO", bio: "Opérations, développement corporate et croissance." },
];

export default function TeamPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Équipe</div>
        <h1 className="h1">Direction</h1>
        <div className="cards" style={{marginTop:24}}>
          {TEAM.map((m) => (
            <article key={m.name} className="card">
              <div style={{
                width:56,height:56,borderRadius:"50%",display:"grid",placeItems:"center",
                background:"var(--gold-soft)",color:"var(--gold)",fontWeight:700,marginBottom:12
              }}>
                {m.name.split(" ").map(w=>w[0]).join("")}
              </div>
              <div className="card__title">{m.name}</div>
              <div className="muted" style={{marginBottom:10}}>{m.role}</div>
              <p className="card__muted">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
                                            }
