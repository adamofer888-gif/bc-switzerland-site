import Link from "next/link";

export default function Navbar() {
  return (
    <header style={{
      position:"sticky", top:0, zIndex:50,
      background:"var(--bg-soft)", borderBottom:"1px solid var(--stroke)"
    }}>
      <nav className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <Link href="/" style={{fontWeight:800, letterSpacing:".3px"}}>DTE Holding AG</Link>

        <div style={{display:"flex", gap:16}}>
          <Link href="/services/capital-a-risque" className="btn btn--ghost">Capital à Risque</Link>
          <Link href="/team" className="btn btn--ghost">Team</Link>
          <Link href="/contact" className="btn btn--primary">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
